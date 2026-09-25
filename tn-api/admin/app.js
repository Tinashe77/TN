const byId = id => document.getElementById(id)
let page = 1
let selectedId
let listRequest = 0
async function api(path, options = {}) {
  const response = await fetch(`/admin/api${path}`, { cache: 'no-store', ...options })
  const data = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(data.error || 'Unable to load enquiries. Check your sign-in and try again.')
  return data
}
function element(tag, text) { const node = document.createElement(tag); node.textContent = text; return node }
function date(value) { return new Date(value).toLocaleString() }
async function load() {
  const request = ++listRequest
  byId('feedback').textContent = 'Loading enquiries…'
  try {
    const query = new URLSearchParams({ page, search: byId('search').value, status: byId('filter-status').value })
    const data = await api(`/enquiries?${query}`)
    if (request !== listRequest) return
    byId('enquiries').replaceChildren()
    for (const enquiry of data.enquiries) {
      const row = element('tr', '')
      for (const value of [`${enquiry.first_name} ${enquiry.last_name}`, enquiry.product, date(enquiry.created_at), enquiry.status]) row.append(element('td', value))
      const cell = element('td', '')
      const button = element('button', 'Review')
      button.addEventListener('click', () => showDetail(enquiry.id))
      cell.append(button); row.append(cell); byId('enquiries').append(row)
    }
    byId('previous').disabled = page === 1
    byId('next').disabled = !data.hasMore
    byId('page').textContent = `Page ${page}`
    byId('feedback').textContent = data.enquiries.length ? `${data.enquiries.length} enquiries on this page.` : 'No enquiries match your filters.'
  } catch (error) { if (request === listRequest) byId('feedback').textContent = error.message }
}
async function showDetail(id) {
  selectedId = id
  byId('detail-content').replaceChildren()
  byId('update-status').hidden = true
  byId('detail-feedback').textContent = 'Loading…'
  if (!byId('detail').open) byId('detail').showModal()
  try {
    const enquiry = await api(`/enquiries/${id}`)
    if (selectedId !== id) return
    const values = [
      ['Reference', enquiry.id], ['Name', `${enquiry.first_name} ${enquiry.last_name}`], ['Email', enquiry.email],
      ['Mobile', enquiry.phone], ['ID type', enquiry.id_type], ['ID number', enquiry.id_number],
      ['Preferred contact', enquiry.contact_method], ['Product', enquiry.product], ['Other interest', enquiry.other_product || '—'],
      ['Received', date(enquiry.created_at)], ['Consent accepted', date(enquiry.consent_accepted_at)],
      ['Consent version', enquiry.consent_version], ['Consent', enquiry.consent_text],
      ['Email notification', enquiry.notification_sent_at ? `Sent ${date(enquiry.notification_sent_at)}` : 'Pending delivery'],
    ]
    const list = element('dl', '')
    for (const [label, value] of values) list.append(element('dt', label), element('dd', value))
    byId('detail-content').append(list)
    byId('enquiry-status').value = enquiry.status
    byId('update-status').hidden = false
    byId('detail-feedback').textContent = ''
  } catch (error) { byId('detail-feedback').textContent = error.message }
}
byId('filters').addEventListener('submit', event => { event.preventDefault(); page = 1; void load() })
byId('refresh').addEventListener('click', load)
byId('previous').addEventListener('click', () => { if (page > 1) { page--; void load() } })
byId('next').addEventListener('click', () => { page++; void load() })
byId('close-detail').addEventListener('click', () => { selectedId = null; byId('detail').close(); byId('detail-content').replaceChildren() })
byId('detail').addEventListener('close', () => { selectedId = null; byId('detail-content').replaceChildren() })
byId('update-status').addEventListener('submit', async event => {
  event.preventDefault()
  const button = event.currentTarget.querySelector('button')
  button.disabled = true
  try {
    await api(`/enquiries/${selectedId}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json', 'X-TN-Admin': '1' }, body: JSON.stringify({ status: byId('enquiry-status').value }) })
    byId('detail-feedback').textContent = 'Status saved.'
    void load()
  } catch (error) { byId('detail-feedback').textContent = error.message }
  finally { button.disabled = false }
})
void load()
