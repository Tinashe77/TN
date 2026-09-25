import { investmentProducts, contactMethods } from './investment-config.js'

export function validateInvestment(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('Please provide your enquiry details.')
  const fields = { firstName: 100, lastName: 100, email: 254, phone: 30, idType: 20, idNumber: 60, contactMethod: 20, product: 120 }
  const data = {}
  for (const [key, max] of Object.entries(fields)) {
    if (typeof body[key] !== 'string' || !body[key].trim() || body[key].length > max || /[\r\n\x00]/.test(body[key])) throw new Error('Please complete all required fields with valid details.')
    data[key] = body[key].trim()
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) throw new Error('Please enter a valid email address.')
  if (!/^\+?[\d ()-]+$/.test(data.phone) || data.phone.replace(/\D/g, '').length < 7 || data.phone.replace(/\D/g, '').length > 15) throw new Error('Please enter a valid phone number, including your country code.')
  if (!['ID', 'Passport'].includes(data.idType) || !contactMethods.includes(data.contactMethod) || !investmentProducts.includes(data.product)) throw new Error('Please select valid identity, contact and product options.')
  if (body.consent !== true) throw new Error('Please accept the declaration and consent to continue.')
  if (data.product === 'Other') {
    if (typeof body.otherProduct !== 'string' || !body.otherProduct.trim() || body.otherProduct.length > 300) throw new Error('Please describe the product you are interested in.')
    data.otherProduct = body.otherProduct.trim()
  }
  if (Object.hasOwn(body, 'idFile')) throw new Error('File uploads are no longer accepted. Please refresh the form and try again.')
  return { data }
}

export function investmentHandler({ store }) {
  return async (req, res) => {
    let validated
    try { validated = validateInvestment(req.body) } catch (error) { return res.status(400).json({ error: error.message }) }
    const id = req.body.requestId
    if (typeof id !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)) {
      return res.status(400).json({ error: 'Invalid submission reference. Please reload the page and try again.' })
    }
    if (!store) return res.status(503).json({ error: 'Investment enquiries are temporarily unavailable. Please try again later or contact us directly.' })
    try {
      const result = await store.save({ id, ...validated })
      return res.status(result.duplicate ? 200 : 201).json({ success: true, reference: result.reference })
    } catch (error) {
      if (error.status === 409) return res.status(409).json({ error: error.message })
      return res.status(503).json({ error: 'We could not confirm your enquiry was saved. Please retry without changing your details so we can safely confirm your submission.' })
    }
  }
}
