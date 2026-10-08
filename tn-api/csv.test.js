import { test } from 'node:test'
import assert from 'node:assert/strict'
import { enquiriesCsv } from './csv.js'

test('CSV preserves punctuation, Unicode, missing identity and dates without exposing internal fields', () => {
  const csv = enquiriesCsv([{ first_name: 'Tendai, "T"\nMoyo', last_name: 'José', id_number: null, created_at: new Date('2026-10-08T00:00:00Z'), request_hash: 'secret' }])
  assert.ok(csv.startsWith('\uFEFF"id"'))
  assert.ok(csv.includes('"Tendai, ""T""\nMoyo"'))
  assert.ok(csv.includes('José'))
  assert.ok(csv.includes('2026-10-08T00:00:00.000Z'))
  assert.ok(!csv.includes('secret'))
})
test('CSV neutralizes spreadsheet formulas and retains phone and ID text', () => {
  for (const value of ['=1+1', '+263771234567', '-1', '@SUM(A1)', '  =1', '\t=1', '\r=1']) {
    assert.ok(enquiriesCsv([{ first_name: value }]).includes(`"'${value}"`))
  }
  assert.ok(enquiriesCsv([{ id_number: '001234' }]).includes('"001234"'))
  assert.equal(enquiriesCsv([]).split('\r\n').length, 2)
})
