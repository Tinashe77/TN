import { unzipSync, strFromU8 } from 'fflate'
import { XMLParser, XMLValidator } from 'fast-xml-parser'
import { rateError, validateRates } from './exchange-rates.js'

const list = value => value === undefined ? [] : Array.isArray(value) ? value : [value]
const parser = new XMLParser({ ignoreAttributes: false, parseTagValue: false, trimValues: false })
const text = value => typeof value === 'object' && value !== null ? String(value['#text'] ?? '') : String(value ?? '')
const richText = value => value?.t !== undefined ? text(value.t) : list(value?.r).map(r => text(r.t)).join('')

// Reads saved Excel results only. Never evaluates formulas, macros, links or embedded objects.
export function importRateWorkbook(buffer) {
  try {
    if (!Buffer.isBuffer(buffer) || !buffer.length || buffer.length > 5 * 1024 * 1024) throw rateError('Upload an .xlsx workbook up to 5 MB.')
    let size = 0
    let entries = 0
    const files = unzipSync(buffer, { filter(file) {
      if (++entries > 500) throw rateError('The workbook contains too many files.')
      const wanted = /^xl\/(workbook\.xml|styles\.xml|sharedStrings\.xml|worksheets\/sheet\d+\.xml)$/.test(file.name)
      if (!wanted) return false
      size += Math.max(file.originalSize, file.size)
      if (size > 8 * 1024 * 1024 || file.originalSize > 2 * 1024 * 1024) throw rateError('The workbook is too large to import. Use the daily rates template.')
      return true
    } })
    const xml = name => {
      if (!files[name]) return null
      const source = strFromU8(files[name])
      if (/<!DOCTYPE|<!ENTITY/i.test(source) || XMLValidator.validate(source) !== true) throw rateError('The workbook contains unsupported XML.')
      return parser.parse(source)
    }
    const workbook = xml('xl/workbook.xml')?.workbook
    if (!workbook) throw rateError('Upload a valid .xlsx workbook, not an .xls or CSV file.')
    const use1904 = ['1', 'true'].includes(workbook.workbookPr?.['@_date1904'])
    const strings = list(xml('xl/sharedStrings.xml')?.sst?.si).map(richText)
    const styles = xml('xl/styles.xml')?.styleSheet
    const formats = new Map(list(styles?.numFmts?.numFmt).map(x => [x['@_numFmtId'], x['@_formatCode']]))
    const cellFormats = list(styles?.cellXfs?.xf)
    const candidates = []
    for (const name of Object.keys(files).filter(name => /^xl\/worksheets\//.test(name))) {
      const rows = list(xml(name)?.worksheet?.sheetData?.row)
      if (rows.length > 500) throw rateError('Use a rates template with fewer than 500 rows.')
      const cells = new Map()
      for (const row of rows) for (const cell of list(row.c)) {
        const value = cell['@_t'] === 's' ? strings[Number(cell.v)] : cell['@_t'] === 'inlineStr' ? richText(cell.is) : cell.v
        cells.set(cell['@_r'], { ...cell, value })
      }
      const get = address => cells.get(address)?.value
      // Restrict to the provided template so unrelated numerical tables cannot become FX rates.
      const headers = ['CURR CODE', 'CURRENCY NAME', 'BUYING RATE', 'MID RATE', 'SELLING RATE', '% CHANGE (MID RATE)']
      if (!headers.every((label, i) => String(get(`${'FGHIJK'[i]}20`) || '').trim().toUpperCase() === label)) continue
      if (!String(get('F18')).toUpperCase().includes('ZWG AS BASE CURRENCY')) throw rateError('The template must identify ZWG as its base currency.')
      let effectiveDate
      const dateValue = get('E13')
      if (/^\d+(\.\d+)?$/.test(String(dateValue))) {
        const serial = Number(dateValue)
        if (serial < 1 || serial > 100000) throw rateError('Invalid Excel date in E13.')
        effectiveDate = new Date(Date.UTC(use1904 ? 1904 : 1899, use1904 ? 0 : 11, use1904 ? 1 : 30) + Math.floor(serial) * 86400000).toISOString().slice(0, 10)
      } else {
        const raw = String(dateValue || '').trim()
        // ISO dates are unambiguous; other text dates require manual entry.
        if (!/^\d{4}-\d{2}-\d{2}(T.*)?$/.test(raw)) throw rateError('E13 must contain an Excel date or YYYY-MM-DD.')
        effectiveDate = raw.slice(0, 10)
      }
      const numeric = (address, optional = false) => {
        const cell = cells.get(address)
        const value = cell?.value
        if (optional && (value === undefined || String(value).trim() === '') && cell?.f === undefined) return null
        if (['e', 'b', 's', 'inlineStr'].includes(cell?.['@_t']) || value === undefined || !/^[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?$/.test(String(value).trim()) || !Number.isFinite(Number(value))) {
          throw rateError(`${address} has no valid saved number. Recalculate and save the workbook in Excel, then upload it again.`)
        }
        return Number(value)
      }
      const rates = []
      for (let r = 22; r <= 61; r++) {
        const code = String(get(`F${r}`) || '').trim()
        if (code.startsWith('*') || code === 'MONEY MARKET INVESTMENT RATES') break
        if (!code && !get(`G${r}`)) continue
        if (!/^[A-Z]{3}$/.test(code)) throw rateError(`F${r}: expected a three-letter currency code.`)
        const rawName = String(get(`G${r}`) || '').trim()
        let change = numeric(`K${r}`, true)
        const formatId = cellFormats[Number(cells.get(`K${r}`)?.['@_s'] || 0)]?.['@_numFmtId']
        const format = (formats.get(formatId) || '').replace(/"[^"]*"|\\./g, '')
        if (change !== null && (['9', '10'].includes(formatId) || format.includes('%'))) change *= 100
        rates.push({ code, name: rawName.replace(/^\*\s*/, ''), indirect: rawName.startsWith('*'), buying: numeric(`H${r}`), mid: numeric(`I${r}`), selling: numeric(`J${r}`), change })
      }
      candidates.push(validateRates({ effectiveDate, baseCurrency: 'ZWG', rates }))
    }
    if (candidates.length !== 1) throw rateError('Use the supplied daily rates template with one FX table in F20:K33 and its date in E13.')
    return candidates[0]
  } catch (error) {
    if (error.status === 400) throw error
    throw rateError('Unable to read this workbook. Use an unencrypted .xlsx copy of the daily rates template.')
  }
}
