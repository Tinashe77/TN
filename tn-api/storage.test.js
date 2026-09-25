import test from 'node:test'
import assert from 'node:assert/strict'
import { randomUUID } from 'node:crypto'
import { PGlite } from '@electric-sql/pglite'
import { migrate } from './database.js'
import { createInvestmentStore } from './investment-store.js'
import { createNotificationWorker } from './notifications.js'

// PGlite runs the PostgreSQL engine in-process; no cloud database or real data.
async function fixture() {
  const db = new PGlite()
  const pool = {
    query: async (sql, params) => params ? db.query(sql, params) : (await db.exec(sql)).at(-1),
    async connect() { return { query: pool.query, release() {} } },
  }
  await migrate(pool)
  return { pool, close: () => db.close() }
}
const data = { firstName: 'Test', lastName: 'User', email: 'test@example.com', phone: '+263771234567', idType: 'Passport', idNumber: 'TEST123', contactMethod: 'Email', product: 'TN Asset Management: Money Market' }
const logger = { error() {} }

test('PostgreSQL migrations, persistence and retry deduplication', async () => {
  const { pool, close } = await fixture()
  try {
    await migrate(pool)
    const store = createInvestmentStore(pool, null)
    const id = randomUUID()
    assert.deepEqual(await store.save({ id, data }), { reference: id, duplicate: false })
    assert.equal((await store.save({ id, data })).duplicate, true)
    const { rows } = await pool.query('SELECT * FROM investment_enquiries')
    assert.equal(rows.length, 1); assert.equal(rows[0].id_number, 'TEST123')
    assert.ok(rows[0].consent_text.includes('consent')); assert.ok(rows[0].consent_accepted_at)
    assert.equal(rows[0].status, 'new'); assert.equal(rows[0].notification_sent_at, null)
    await assert.rejects(store.save({ id, data: { ...data, email: 'changed@example.com' } }), error => error.status === 409)
    assert.equal((await pool.query('SELECT email FROM investment_enquiries')).rows[0].email, data.email)
  } finally { await close() }
})
test('uncertain commit is recovered by retrying the same reference', async () => {
  const { pool, close } = await fixture()
  try {
    let failCommit = true
    const uncertain = { async connect() { return { release() {}, async query(sql, params) {
      const result = await pool.query(sql, params)
      if (sql === 'COMMIT' && failCommit) { failCommit = false; throw new Error('Connection lost after commit') }
      return result
    } } } }
    const store = createInvestmentStore(uncertain)
    const id = randomUUID()
    await assert.rejects(store.save({ id, data }))
    assert.equal((await store.save({ id, data })).duplicate, true)
  } finally { await close() }
})
test('email failure preserves submission; retry sends reference only and marks delivered', async () => {
  const { pool, close } = await fixture()
  try {
    const id = randomUUID(); await createInvestmentStore(pool, null).save({ id, data })
    const config = { pool, sender: 'sender@example.com', recipient: 'staff@example.com', logger }
    await createNotificationWorker({ ...config, sendMail: async () => { throw new Error('Mail unavailable') } }).tick()
    let row = (await pool.query('SELECT * FROM investment_enquiries')).rows[0]
    assert.equal(row.notification_attempts, 1); assert.equal(row.notification_sent_at, null); assert.equal(row.email, data.email)
    await pool.query('UPDATE investment_enquiries SET next_notification_at = now()')
    let mail
    const worker = createNotificationWorker({ ...config, sendMail: async options => { mail = options } })
    await worker.tick()
    assert.ok(mail.text.includes(id)); assert.ok(!mail.text.includes(data.idNumber)); assert.ok(!mail.text.includes(data.email)); assert.equal(mail.attachments, undefined)
    row = (await pool.query('SELECT * FROM investment_enquiries')).rows[0]
    assert.ok(row.notification_sent_at)
    mail = null; await worker.tick(); assert.equal(mail, null)
  } finally { await close() }
})

test('staff HTTP routes enforce authentication and audit updates without document access', async () => {
  const { default: express } = await import('express')
  const { default: request } = await import('supertest')
  const { createAdminRouter } = await import('./admin.js')
  const { investmentHandler } = await import('./investment.js')
  const { pool, close } = await fixture()
  try {
    const id = randomUUID()
    const store = createInvestmentStore(pool)
    const username = 'test-reviewer'; const password = 'test-password-only-123456789'
    const app = express(); app.use(express.json({ limit: '15mb' }))
    app.post('/api/investment-enquiries', investmentHandler({ store }))
    app.use('/admin', createAdminRouter({ pool, username, password, rateLimit: (req, res, next) => next() }))
    const body = { ...data, consent: true, requestId: id }
    const created = await request(app).post('/api/investment-enquiries').send(body).expect(201)
    assert.equal(created.body.reference, id)
    await request(app).post('/api/investment-enquiries').send(body).expect(200)
    await request(app).get('/admin/api/enquiries').expect(401)
    await request(app).get(`/admin/api/enquiries/${id}/document`).expect(401)
    const list = await request(app).get('/admin/api/enquiries').auth(username, password).expect(200)
    assert.equal(list.body.enquiries.length, 1); assert.equal(list.body.enquiries[0].id_number, undefined)
    assert.equal(list.headers['cache-control'], 'no-store')
    const detail = await request(app).get(`/admin/api/enquiries/${id}`).auth(username, password).expect(200)
    assert.equal(detail.body.id_number, data.idNumber); assert.equal(detail.body.document_key, undefined)
    await request(app).patch(`/admin/api/enquiries/${id}`).auth(username, password).send({ status: 'closed' }).expect(403)
    await request(app).patch(`/admin/api/enquiries/${id}`).auth(username, password).set('X-TN-Admin', '1').send({ status: 'invalid' }).expect(400)
    await request(app).patch(`/admin/api/enquiries/${id}`).auth(username, password).set('X-TN-Admin', '1').send({ status: 'contacted' }).expect(200)
    const filtered = await request(app).get('/admin/api/enquiries?status=new').auth(username, password).expect(200)
    assert.equal(filtered.body.enquiries.length, 0)
    await request(app).get(`/admin/api/enquiries/${id}/document`).auth(username, password).expect(404)
    await request(app).post('/api/investment-enquiries').send({ ...body, idFile: {} }).expect(400)
    const actions = (await pool.query('SELECT action FROM investment_audit_log')).rows.map(row => row.action)
    assert.ok(actions.includes('view')); assert.ok(actions.includes('status:contacted')); assert.ok(!actions.includes('document_download'))
    await request(app).get('/admin/').auth(username, password).expect(200).expect(/Investment enquiries/)
  } finally { await close() }
})

test('enquiries persist with either or both identity fields omitted', async () => {
  const { pool, close } = await fixture()
  const { validateInvestment } = await import('./investment.js')
  try {
    const store = createInvestmentStore(pool)
    for (const identity of [{ idType: '', idNumber: '' }, { idType: 'Passport', idNumber: '' }, { idType: '', idNumber: 'TEST123' }]) {
      const validated = validateInvestment({ ...data, ...identity, consent: true }).data
      const id = randomUUID()
      await store.save({ id, data: validated })
      assert.equal((await store.save({ id, data: validated })).duplicate, true)
      const row = (await pool.query('SELECT id_type, id_number FROM investment_enquiries WHERE id = $1', [id])).rows[0]
      assert.equal(row.id_type, identity.idType || null)
      assert.equal(row.id_number, identity.idNumber || null)
    }
  } finally { await close() }
})
