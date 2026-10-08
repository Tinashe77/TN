const fields = [
  'id', 'first_name', 'last_name', 'email', 'phone', 'id_type', 'id_number',
  'contact_method', 'product', 'other_product', 'status', 'created_at', 'updated_at',
  'consent_text', 'consent_version', 'consent_accepted_at', 'notification_sent_at',
]
function cell(value) {
  let text = value instanceof Date ? value.toISOString() : String(value ?? '')
  // Prevent spreadsheet formulas, including formulas preceded by whitespace.
  if (/^[\s\uFEFF]*[=+@-]/u.test(text) || /^[\t\r\n]/u.test(text)) text = `'${text}`
  return `"${text.replaceAll('"', '""')}"`
}
export function enquiriesCsv(rows) {
  return '\uFEFF' + [fields.map(cell).join(','), ...rows.map(row => fields.map(field => cell(row[field])).join(','))].join('\r\n') + '\r\n'
}
