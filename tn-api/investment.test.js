import test from 'node:test'
import assert from 'node:assert/strict'
import { randomUUID } from 'node:crypto'
import { validateInvestment, investmentHandler } from './investment.js'
import { adminAuth } from './admin.js'
const enquiry = { firstName: 'Test', lastName: 'User', phone: '+263 77 123 4567', email: 'test@example.com', idType: 'Passport', idNumber: 'TEST123', contactMethod: 'Email', product: 'TN Asset Management: Money Market', consent: true }
function response() { return { code: 200, headers: {}, set(k, v) { this.headers[k] = v; return this }, status(code) { this.code = code; return this }, send(body) { this.body = body; return this }, json(body) { this.body = body; return this } } }
test('valid enquiries and other product are accepted without attachments', () => {
  assert.deepEqual(Object.keys(validateInvestment(enquiry)), ['data'])
  assert.equal(validateInvestment({ ...enquiry, product: 'Other', otherProduct: 'Example' }).data.otherProduct, 'Example')
})
test('rejects invalid details, missing consent and any obsolete upload field', () => {
  for (const change of [{ consent: false }, { email: 'invalid' }, { phone: 'letters' }, { firstName: {} }, { idType: 'Other' }, { product: 'Unknown' }, { product: 'Other' }, { idFile: {} }, { idFile: null }]) {
    assert.throws(() => validateInvestment({ ...enquiry, ...change }))
  }
})
test('handler confirms only persisted records and returns stable references', async () => {
  const id = randomUUID(); let saved
  const handler = investmentHandler({ store: { save: async value => { saved = value; return { reference: value.id } } } })
  const res = response()
  await handler({ body: { ...enquiry, requestId: id } }, res)
  assert.equal(res.code, 201); assert.equal(res.body.reference, id); assert.equal(saved.data.email, enquiry.email)
})
test('handler rejects missing storage, failed persistence and invalid references', async () => {
  for (const [config, body, status] of [
    [{}, { ...enquiry, requestId: randomUUID() }, 503],
    [{ store: { save: async () => { throw new Error('DB failed') } } }, { ...enquiry, requestId: randomUUID() }, 503],
    [{}, enquiry, 400],
    [{ store: {} }, { ...enquiry, requestId: randomUUID(), idFile: { type: 'application/pdf', content: Buffer.from('%PDF-test').toString('base64') } }, 400],
  ]) {
    const res = response(); await investmentHandler(config)({ body }, res); assert.equal(res.code, status); assert.equal(res.body.success, undefined)
  }
})
test('staff authentication fails closed and never caches personal data', () => {
  const username = 'reviewer'; const password = 'test-only-long-password-12345'
  for (const [auth, code] of [['', 401], [`Basic ${Buffer.from('reviewer:wrong').toString('base64')}`, 401]]) {
    const res = response(); adminAuth({ username, password })({ headers: { authorization: auth } }, res, () => assert.fail('Must not authenticate'))
    assert.equal(res.code, code); assert.equal(res.headers['Cache-Control'], 'no-store')
  }
  const res = response(); adminAuth({})({ headers: {} }, res, () => assert.fail('Must not authenticate')); assert.equal(res.code, 503)
  let passed = false
  adminAuth({ username, password })({ headers: { authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}` } }, response(), () => { passed = true })
  assert.equal(passed, true)
})
test('frontend and independently deployed API use matching form definitions', async () => {
  const frontend = await import('../tn-landing/src/shared/investment.js')
  const backend = await import('./investment-config.js')
  assert.deepEqual({ ...frontend }, { ...backend })
})
