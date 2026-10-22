import { createExchangeRateStore, publicRatesHandler } from './exchange-rates.js'
import { test, before, after } from 'node:test'
import assert from 'node:assert/strict'
import { randomUUID } from 'node:crypto'
import { MongoMemoryServer } from 'mongodb-memory-server'
import express from 'express'
import request from 'supertest'
import { createDatabase } from './database.js'
import { createInvestmentStore } from './investment-store.js'
import { createNotificationWorker } from './notifications.js'
import { createAdminRouter } from './admin.js'
import { validateInvestment, investmentHandler } from './investment.js'

let mongo
before(async () => { mongo = await MongoMemoryServer.create({ binary: { version: '7.0.14' }, instance: { ip: '127.0.0.1' } }) })
after(async () => { await mongo?.stop() })
async function fixture() {
  const database = createDatabase({ MONGODB_URI: mongo.getUri(), MONGODB_DB_NAME: `test_${randomUUID().replaceAll('-', '')}` })
  await database.initialize()
  return { database, store: createInvestmentStore(database), close: () => database.close() }
}
const data = { firstName: 'Test', lastName: 'User', email: 'test@example.com', phone: '+263771234567', idType: 'Passport', idNumber: 'TEST123', contactMethod: 'Email', product: 'TN Asset Management: Money Market' }
const logger = { error() {} }

test('MongoDB initializes idempotently and persists consent with concurrent retry deduplication', async () => {
  const { database, store, close } = await fixture()
  try {
    await database.initialize(); await database.ping()
    const id = randomUUID()
    const results = await Promise.all([store.save({ id, data }), store.save({ id, data })])
    assert.equal(results.filter(result => result.duplicate).length, 1)
    assert.equal(await database.enquiries.countDocuments(), 1)
    const row = await database.enquiries.findOne({ _id: id })
    assert.equal(row.id_number, 'TEST123'); assert.ok(row.consent_text.includes('consent'))
    assert.ok(row.consent_accepted_at instanceof Date); assert.equal(row.status, 'new')
    await assert.rejects(store.save({ id, data: { ...data, email: 'changed@example.com' } }), error => error.status === 409)
    assert.equal((await store.save({ id: id.toUpperCase(), data })).duplicate, true)
  } finally { await close() }
})
test('unknown acknowledgement is recovered by retry without duplicating the saved record', async () => {
  const { database, close } = await fixture()
  try {
    const collection = database.enquiries; let fail = true
    const uncertain = Object.create(database)
    uncertain.enquiries = { insertOne: async doc => { const result = await collection.insertOne(doc); if (fail) { fail = false; throw new Error('Connection lost after write') } return result }, findOne: (...args) => collection.findOne(...args) }
    const store = createInvestmentStore(uncertain); const id = randomUUID()
    await assert.rejects(store.save({ id, data }))
    assert.equal((await store.save({ id, data })).duplicate, true)
    assert.equal(await collection.countDocuments(), 1)
  } finally { await close() }
})
test('optional identity fields are stored as null independently', async () => {
  const { database, store, close } = await fixture()
  try {
    for (const identity of [{ idType: '', idNumber: '' }, { idType: 'Passport', idNumber: '' }, { idType: '', idNumber: 'TEST123' }]) {
      const validated = validateInvestment({ ...data, ...identity, consent: true }).data
      const id = randomUUID(); await store.save({ id, data: validated })
      const row = await database.enquiries.findOne({ _id: id })
      assert.equal(row.id_type, identity.idType || null); assert.equal(row.id_number, identity.idNumber || null)
    }
  } finally { await close() }
})
test('email failure preserves enquiry and retry sends reference only', async () => {
  const { database, store, close } = await fixture()
  try {
    const id = randomUUID(); await store.save({ id, data })
    const config = { store, sender: 'sender@example.com', recipient: 'staff@example.com', logger }
    await createNotificationWorker({ ...config, sendMail: async () => { throw new Error('Mail unavailable') } }).tick()
    let row = await database.enquiries.findOne({ _id: id })
    assert.equal(row.notification_attempts, 1); assert.equal(row.notification_sent_at, null)
    await database.enquiries.updateOne({ _id: id }, { $set: { next_notification_at: new Date(0) } })
    let mail
    const worker = createNotificationWorker({ ...config, sendMail: async options => { mail = options } })
    await worker.tick()
    assert.ok(mail.text.includes(id)); assert.ok(!mail.text.includes(data.idNumber)); assert.ok(!mail.text.includes(data.email))
    row = await database.enquiries.findOne({ _id: id }); assert.ok(row.notification_sent_at)
    mail = null; await worker.tick(); assert.equal(mail, null)
  } finally { await close() }
})
test('concurrent notification claims and stale leases cannot overwrite a new claim', async () => {
  const { database, store, close } = await fixture()
  try {
    const id = randomUUID(); await store.save({ id, data })
    const claims = await Promise.all([store.claimNotification(), store.claimNotification()])
    assert.equal(claims.filter(Boolean).length, 1)
    const first = claims.find(Boolean)
    await database.enquiries.updateOne({ _id: id }, { $set: { next_notification_at: new Date(0) } })
    const second = await store.claimNotification()
    await store.markNotified(id, first.notification_lease)
    assert.equal((await database.enquiries.findOne({ _id: id })).notification_sent_at, null)
    await store.markNotified(id, second.notification_lease)
    assert.ok((await database.enquiries.findOne({ _id: id })).notification_sent_at)
  } finally { await close() }
})
test('staff routes authenticate, search literally, paginate and atomically audit status updates', async () => {
  const { database, store, close } = await fixture()
  try {
    const username = 'reviewer'; const password = 'test-password-only-123456789'
    const app = express(); app.use(express.json({ limit: '16kb' }))
    app.post('/api/investment-enquiries', investmentHandler({ store }))
    app.use('/admin', createAdminRouter({ store, username, password, rateLimit: (req, res, next) => next() }))
    const id = randomUUID(); const body = { ...data, idType: '', idNumber: '', consent: true, requestId: id }
    await request(app).post('/api/investment-enquiries').send(body).expect(201)
    await request(app).post('/api/investment-enquiries').send(body).expect(200)
    await request(app).get('/admin/api/enquiries').expect(401)
    const list = await request(app).get('/admin/api/enquiries?search=Test%20User').auth(username, password).expect(200)
    assert.equal(list.body.enquiries.length, 1); assert.equal(list.headers['cache-control'], 'no-store')
    assert.equal(list.body.enquiries[0].id_number, undefined)
    const literal = await request(app).get('/admin/api/enquiries?search=.*').auth(username, password).expect(200)
    assert.equal(literal.body.enquiries.length, 0)
    const detail = await request(app).get(`/admin/api/enquiries/${id}`).auth(username, password).expect(200)
    assert.equal(detail.body.id_number, null); assert.equal(detail.body.request_hash, undefined)
    await request(app).patch(`/admin/api/enquiries/${id}`).auth(username, password).send({ status: 'closed' }).expect(403)
    await request(app).patch(`/admin/api/enquiries/${id}`).auth(username, password).set('X-TN-Admin', '1').send({ status: 'invalid' }).expect(400)
    await request(app).patch(`/admin/api/enquiries/${id}`).auth(username, password).set('X-TN-Admin', '1').send({ status: 'contacted' }).expect(200)
    const row = await database.enquiries.findOne({ _id: id })
    assert.equal(row.status, 'contacted'); assert.equal(row.status_history[0].actor, username)
    assert.equal(await database.audit.countDocuments({ action: 'view' }), 1)
    const filtered = await request(app).get('/admin/api/enquiries?status=new').auth(username, password).expect(200)
    assert.equal(filtered.body.enquiries.length, 0)
    await request(app).get(`/admin/api/enquiries/${id}/document`).auth(username, password).expect(404)
    await request(app).post('/api/investment-enquiries').send({ ...body, idFile: {} }).expect(400)
    for (let i = 0; i < 25; i++) await store.save({ id: randomUUID(), data })
    assert.equal((await store.list({ page: 1, actor: username })).hasMore, true)
    assert.equal((await store.list({ page: 2, actor: username })).enquiries.length, 1)
    await request(app).get('/admin/api/enquiries.csv').expect(401)
    const exported = await request(app).get('/admin/api/enquiries.csv').auth(username, password).expect(200)
    assert.match(exported.headers['content-type'], /text\/csv/)
    assert.match(exported.headers['content-disposition'], /attachment/)
    assert.equal(exported.headers['cache-control'], 'no-store')
    assert.equal(exported.text.trim().split('\r\n').length, 27)
    assert.ok(!exported.text.includes('request_hash'))
    const selected = await request(app).get('/admin/api/enquiries.csv?status=contacted').auth(username, password).expect(200)
    assert.equal(selected.text.trim().split('\r\n').length, 2)
    assert.ok(selected.text.includes(id))
    const empty = await request(app).get('/admin/api/enquiries.csv?search=.*').auth(username, password).expect(200)
    assert.equal(empty.text.trim().split('\r\n').length, 1)
    assert.equal(await database.audit.countDocuments({ action: 'export_csv', actor: username }), 3)

  } finally { await close() }
})

test('exchange rate publication is authenticated, atomic, audited and protects against stale edits', async () => {
  const { database, store, close } = await fixture()
  try {
    const rateStore = createExchangeRateStore(database)
    const username = 'treasury'; const password = 'test-treasury-password-12345'
    const app = express(); app.use(express.json())
    app.get('/api/exchange-rates', publicRatesHandler(rateStore))
    app.use('/admin', createAdminRouter({ store, rateStore, username, password, rateLimit: (req, res, next) => next() }))
    const payload = { effectiveDate: '2020-10-09', baseCurrency: 'ZWG', expectedRevision: 0, rates: [{ code: 'USD', name: 'US Dollar', buying: 26, mid: 27, selling: 28, change: 0, indirect: true }] }
    assert.equal((await request(app).get('/api/exchange-rates').expect(200)).body.table, null)
    await request(app).post('/admin/api/exchange-rates/publish').send(payload).expect(401)
    await request(app).post('/admin/api/exchange-rates/publish').auth(username, password).send(payload).expect(403)
    await request(app).post('/admin/api/exchange-rates/publish').auth(username, password).set('X-TN-Admin', '1').set('Sec-Fetch-Site', 'cross-site').send(payload).expect(403)
    await request(app).post('/admin/api/exchange-rates/import').auth(username, password).set('X-TN-Admin', '1').set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet').send(Buffer.from('invalid')).expect(400)
    assert.equal(await rateStore.current(), null)
    const published = await request(app).post('/admin/api/exchange-rates/publish').auth(username, password).set('X-TN-Admin', '1').send(payload).expect(200)
    assert.equal(published.body.table.revision, 1)
    const publicResponse = await request(app).get('/api/exchange-rates').expect(200)
    assert.equal(publicResponse.body.table.publishedBy, undefined)
    assert.equal(publicResponse.body.table.rates[0].mid, 27)
    assert.equal(publicResponse.headers['cache-control'], 'no-store')
    await request(app).post('/admin/api/exchange-rates/publish').auth(username, password).set('X-TN-Admin', '1').send(payload).expect(409)
    await request(app).post('/admin/api/exchange-rates/publish').auth(username, password).set('X-TN-Admin', '1').send({ ...payload, expectedRevision: 1, rates: [] }).expect(400)
    const results = await Promise.allSettled([rateStore.publish({ ...payload, expectedRevision: 1 }, username), rateStore.publish({ ...payload, expectedRevision: 1 }, username)])
    assert.equal(results.filter(r => r.status === 'fulfilled').length, 1)
    assert.equal(results.find(r => r.status === 'rejected').reason.status, 409)
    const history = await request(app).get('/admin/api/exchange-rates/history').auth(username, password).expect(200)
    assert.equal(history.body.history.length, 2)
    assert.equal(history.body.history[0].publishedBy, username)
    assert.equal((await rateStore.current()).revision, 2)
    const unavailable = express(); unavailable.get('/', publicRatesHandler(null))
    await request(unavailable).get('/').expect(503)
  } finally { await close() }
})
