import { test } from 'node:test'
import assert from 'node:assert/strict'
import { zipSync, strToU8 } from 'fflate'
import { importRateWorkbook } from './exchange-import.js'
import { validateRates, publicRateTable, harareDate } from './exchange-rates.js'

export const exampleRates = { effectiveDate: '2020-10-09', baseCurrency: 'ZWG', rates: [
  { code: 'USD', name: 'United States Dollar', buying: 26.55, mid: 26.6875, selling: 27.755, change: -0.10256, indirect: true },
] }
const stringCell = (address, value) => `<c r="${address}" t="inlineStr"><is><t>${value}</t></is></c>`
const numberCell = (address, value, extra = '') => `<c r="${address}" ${extra}><v>${value}</v></c>`
function workbook({ change = '-0.10256', changeStyle = '', buying = numberCell('H22', 26.55), date = 44113, extraSheet = false, base = 'ZWG' } = {}) {
  const sheet = `<worksheet><sheetData><row r="13">${numberCell('E13', date)}</row><row r="18">${stringCell('F18', `${base} AS BASE CURRENCY`)}</row><row r="20">${['CURR CODE', 'CURRENCY NAME', 'BUYING RATE ', 'MID RATE', 'SELLING RATE', '% CHANGE (MID RATE)'].map((v, i) => stringCell(`${'FGHIJK'[i]}20`, v)).join('')}</row><row r="22">${stringCell('F22', 'USD')}${stringCell('G22', '*United States Dollar')}${buying}${numberCell('I22', 26.6875)}${numberCell('J22', 27.755)}${numberCell('K22', change, changeStyle)}</row><row r="23">${stringCell('F23', '* Denotes indirect quotes')}</row></sheetData></worksheet>`
  return Buffer.from(zipSync({ 'xl/workbook.xml': strToU8('<workbook><workbookPr date1904="0"/></workbook>'), 'xl/styles.xml': strToU8('<styleSheet><cellXfs><xf numFmtId="0"/><xf numFmtId="10"/></cellXfs></styleSheet>'), 'xl/worksheets/sheet1.xml': strToU8(sheet), ...(extraSheet ? { 'xl/worksheets/sheet2.xml': strToU8(sheet) } : {}) }))
}
test('template import preserves cached values, effective date, indirect markers and percentage points', () => {
  const table = importRateWorkbook(workbook())
  assert.deepEqual(table, exampleRates)
  assert.equal(importRateWorkbook(workbook({ change: '-0.0010256', changeStyle: 's="1"' })).rates[0].change, -0.10256)
  assert.equal(importRateWorkbook(workbook({ buying: '<c r="H22"><f>I22*0.995</f><v>26.55</v></c>' })).rates[0].buying, 26.55)
})
test('invalid workbook contents never produce a partial table', () => {
  for (const buffer of [Buffer.from('invalid'), workbook({ extraSheet: true }), workbook({ base: 'USD' }), workbook({ buying: '<c r="H22"><f>I22*0.995</f></c>' }), workbook({ buying: '<c r="H22" t="e"><v>#REF!</v></c>' }), workbook({ buying: numberCell('H22', 40) })]) {
    assert.throws(() => importRateWorkbook(buffer), error => error.status === 400)
  }
  const oversized = Buffer.from(zipSync({ 'xl/worksheets/sheet1.xml': strToU8(' '.repeat(2 * 1024 * 1024 + 1)) }))
  assert.throws(() => importRateWorkbook(oversized), /too large/)
})
test('rates reject invalid dates, missing values, duplicate currencies and inappropriate spreads', () => {
  const invalid = [
    { effectiveDate: '2020-02-30' }, { effectiveDate: '2099-01-01' }, { baseCurrency: 'USD' }, { rates: [] },
    { rates: [exampleRates.rates[0], exampleRates.rates[0]] },
    ...[{ buying: -1 }, { buying: null }, { mid: '26.7' }, { selling: Infinity }, { change: undefined }, { buying: 28 }, { code: 'ZWG' }, { indirect: 'yes' }].map(patch => ({ rates: [{ ...exampleRates.rates[0], ...patch }] })),
  ]
  for (const patch of invalid) assert.throws(() => validateRates({ ...exampleRates, ...patch }), error => error.status === 400)
  assert.equal(validateRates({ ...exampleRates, rates: [{ ...exampleRates.rates[0], change: null }] }).rates[0].change, null)
  assert.equal(harareDate(new Date('2026-10-20T22:30:00Z')), '2026-10-21')
})
test('public rates exclude staff identity and audit snapshots', () => {
  const result = publicRateTable({ ...exampleRates, revision: 1, publishedAt: new Date(), publishedBy: 'staff', history: [] })
  assert.equal(result.publishedBy, undefined)
  assert.equal(result.history, undefined)
  assert.ok(result.disclaimer)
  assert.equal(publicRateTable(null), null)
})
