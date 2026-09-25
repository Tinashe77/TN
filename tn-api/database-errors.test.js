import test from 'node:test'
import assert from 'node:assert/strict'
import { databaseErrorSummary } from './database-errors.js'

test('MongoDB diagnostics distinguish failures without leaking driver details', () => {
  const secret = 'mongodb+srv://user:secret@private-host/db'
  for (const code of [18, 13, 'ENOTFOUND', 'SELF_SIGNED_CERT_IN_CHAIN']) {
    const summary = databaseErrorSummary({ code, message: secret })
    assert.ok(summary.includes(`[${code}]`)); assert.ok(!summary.includes(secret))
  }
  assert.match(databaseErrorSummary({ code: secret }), /UNKNOWN/)
  assert.match(databaseErrorSummary({ name: 'MongoServerSelectionError', message: secret }), /IP access list/)
  assert.match(databaseErrorSummary({ name: 'MongoParseError' }), /invalid/)
})
