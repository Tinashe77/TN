const byId = id => document.getElementById(id)
const element = (tag, value = '') => { const node = document.createElement(tag); node.textContent = value; return node }
const today = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Africa/Harare', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date())
let revision = 0
let pending
let dirty = false
let busy = false
async function api(path = '', options = {}) {
  const response = await fetch(`/admin/api/exchange-rates${path}`, { cache: 'no-store', ...options })
  if (response.status === 401) throw new Error('Staff sign-in has expired. Reload this page and sign in again.')
  if (!response.headers.get('content-type')?.includes('application/json')) throw new Error('The rates API returned an unexpected response. Check that this API deployment includes exchange rates.')
  const data = await response.json()
  if (!response.ok) throw new Error(data.error || 'Unable to complete this request. Check your connection and sign-in.')
  return data
}
function addRow(rate = {}) {
  const row = element('tr')
  for (const [key, label, type] of [['code', 'Currency code', 'text'], ['name', 'Currency name', 'text'], ['buying', 'Buying rate', 'number'], ['mid', 'Mid rate', 'number'], ['selling', 'Selling rate', 'number'], ['change', 'Change percent', 'number'], ['indirect', 'Indirect quote', 'checkbox']]) {
    const cell = element('td')
    const input = document.createElement('input')
    input.type = type; input.dataset.key = key; input.setAttribute('aria-label', label)
    if (type === 'checkbox') input.checked = rate[key] === true
    else {
      input.value = rate[key] ?? ''
      input.required = key !== 'change'
      if (type === 'number') { input.step = 'any'; if (key !== 'change') { input.min = '0.000000000001'; input.max = '1000000000' } }
      if (key === 'code') { input.maxLength = 3; input.pattern = '[A-Z]{3}'; input.addEventListener('input', () => { input.value = input.value.toUpperCase() }) }
      if (key === 'name') input.maxLength = 80
    }
    cell.append(input); row.append(cell)
  }
  const cell = element('td'); const remove = element('button', 'Remove')
  remove.type = 'button'; remove.className = 'secondary'
  remove.addEventListener('click', () => { row.remove(); dirty = true })
  cell.append(remove); row.append(cell); byId('rate-rows').append(row)
}
function fill(table) {
  byId('effective-date').value = table?.effectiveDate || today()
  byId('effective-date').max = today()
  byId('rate-rows').replaceChildren()
  if (table?.rates?.length) table.rates.forEach(addRow)
  else addRow()
}
function currentLabel(table) {
  byId('published-status').textContent = table ? `Published for ${table.effectiveDate} · ${table.rates.length} currencies · Revision ${table.revision} · By ${table.publishedBy}` : 'No rates have been published. The website will show rates once you publish the first table.'
}
async function loadHistory() {
  try {
    const { history } = await api('/history')
    byId('history').replaceChildren(...history.map(item => element('li', `${item.effectiveDate} · Revision ${item.revision} · ${item.rates.length} currencies · ${new Date(item.publishedAt).toLocaleString()} · ${item.publishedBy}`)))
  } catch { byId('history').replaceChildren(element('li', 'Publication history could not be loaded. Reload to try again.')) }
}
async function load() {
  if (busy || (dirty && !window.confirm('Discard your unpublished edits and reload?'))) return
  busy = true; byId('editor').disabled = true; byId('import-workbook').disabled = true; byId('feedback').textContent = 'Loading rates…'
  try {
    const { table } = await api()
    revision = table?.revision || 0; fill(table); currentLabel(table); dirty = false
    byId('editor').disabled = false
    byId('feedback').textContent = ''
    await loadHistory()
  } catch (error) { byId('feedback').textContent = error.message }
  finally { busy = false; byId('import-workbook').disabled = byId('editor').disabled }
}
byId('reload').addEventListener('click', load)
byId('rates-form').addEventListener('input', () => { dirty = true })
byId('add-row').addEventListener('click', () => {
  if (byId('rate-rows').children.length >= 40) { byId('feedback').textContent = 'Maximum 40 currencies.'; return }
  addRow(); dirty = true
})
byId('import-form').addEventListener('submit', async event => {
  event.preventDefault()
  if (busy || byId('editor').disabled) return
  if (dirty && !window.confirm('Replace unpublished edits with the workbook values?')) return
  const file = byId('workbook').files[0]
  if (!file || !/\.xlsx$/i.test(file.name) || file.size > 5 * 1024 * 1024) { byId('feedback').textContent = 'Choose an .xlsx file up to 5 MB.'; return }
  busy = true; byId('editor').disabled = true; byId('import-workbook').disabled = true
  byId('feedback').textContent = 'Reading workbook…'
  try {
    const { table } = await api('/import', { method: 'POST', headers: { 'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'X-TN-Admin': '1' }, body: file })
    fill(table); dirty = true
    byId('feedback').textContent = `Imported ${table.rates.length} currencies for ${table.effectiveDate}. Check all values and quote types, then review for publication.`
  } catch (error) { byId('feedback').textContent = error.message }
  finally { busy = false; byId('editor').disabled = false; byId('import-workbook').disabled = false }
})
byId('rates-form').addEventListener('submit', event => {
  event.preventDefault()
  const rates = [...byId('rate-rows').children].map(row => Object.fromEntries([...row.querySelectorAll('input')].map(input => [input.dataset.key, input.type === 'checkbox' ? input.checked : input.type === 'number' ? input.value === '' ? null : Number(input.value) : input.value.trim()])))
  if (!rates.length) { byId('feedback').textContent = 'Add at least one currency.'; return }
  const seen = new Set()
  for (const row of rates) {
    if (seen.has(row.code) || row.code === 'ZWG' || row.buying > row.mid || row.mid > row.selling) {
      byId('feedback').textContent = `${row.code}: check for duplicate/base currency codes and ensure buying ≤ mid ≤ selling.`; return
    }
    seen.add(row.code)
  }
  pending = { effectiveDate: byId('effective-date').value, baseCurrency: 'ZWG', rates, expectedRevision: revision }
  const table = element('table'); const head = element('thead'); const tr = element('tr')
  for (const title of ['Currency', 'Buying', 'Mid', 'Selling', 'Change %']) tr.append(element('th', title))
  head.append(tr); table.append(head); const body = element('tbody')
  for (const row of rates) {
    const tr = element('tr')
    const displayedRates = [row.buying, row.mid, row.selling].map(value => value.toLocaleString('en-GB', { minimumFractionDigits: 4, maximumFractionDigits: 4 }))
    for (const value of [`${row.code}${row.indirect ? '*' : ''} — ${row.name}`, ...displayedRates, row.change === null ? '—' : `${row.change > 0 ? '+' : ''}${row.change.toFixed(2)}%`]) tr.append(element('td', value))
    body.append(tr)
  }
  table.append(body); byId('review-table').replaceChildren(table)
  byId('review-date').textContent = `Effective date: ${pending.effectiveDate} · Base currency: ZWG`
  byId('date-warning').hidden = pending.effectiveDate === today()
  byId('date-warning').textContent = 'This table is dated earlier than today. The website will display that date and mark it as the latest available rates.'
  byId('publish-feedback').textContent = ''; byId('review').showModal()
})
byId('close-review').addEventListener('click', () => byId('review').close())
byId('review').addEventListener('cancel', event => { if (busy) event.preventDefault() })
byId('publish').addEventListener('click', async () => {
  if (busy || !pending) return
  busy = true; byId('publish').disabled = true; byId('close-review').disabled = true
  byId('publish-feedback').textContent = 'Publishing…'
  try {
    const { table } = await api('/publish', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-TN-Admin': '1' }, body: JSON.stringify(pending) })
    revision = table.revision; currentLabel(table); dirty = false; pending = null
    byId('review').close(); byId('feedback').textContent = 'Rates published. The website refreshes rates within one minute.'
    await loadHistory()
  } catch (error) { byId('publish-feedback').textContent = error.message }
  finally { busy = false; byId('publish').disabled = false; byId('close-review').disabled = false }
})
window.addEventListener('beforeunload', event => { if (dirty) { event.preventDefault(); event.returnValue = '' } })
void load()
