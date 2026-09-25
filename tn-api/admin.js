import express from 'express'
import { createHash, timingSafeEqual } from 'node:crypto'
import { fileURLToPath } from 'node:url'

function equal(a, b) {
  return timingSafeEqual(createHash('sha256').update(a).digest(), createHash('sha256').update(b).digest())
}
export function adminAuth({ username, password }) {
  return (req, res, next) => {
    res.set('Cache-Control', 'no-store')
    res.set('Referrer-Policy', 'no-referrer')
    res.set('X-Content-Type-Options', 'nosniff')
    res.set('X-Frame-Options', 'DENY')
    res.set('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'")
    if (!username || !password || password.length < 20) return res.status(503).send('Staff portal is not configured.')
    const raw = req.headers.authorization || ''
    const decoded = raw.startsWith('Basic ') ? Buffer.from(raw.slice(6), 'base64').toString('utf8') : ''
    const separator = decoded.indexOf(':')
    const validUser = equal(decoded.slice(0, separator), username)
    const validPassword = equal(decoded.slice(separator + 1), password)
    if (separator < 0 || !validUser || !validPassword) {
      res.set('WWW-Authenticate', 'Basic realm="TN Investment Staff", charset="UTF-8"')
      return res.status(401).send('Staff sign-in required.')
    }
    req.staffUser = username
    next()
  }
}

export function createAdminRouter({ pool, username, password, rateLimit }) {
  const router = express.Router()
  router.use(rateLimit, adminAuth({ username, password }))
  router.use('/api', (req, res, next) => {
    if (!pool) return res.status(503).json({ error: 'Database unavailable.' })
    next()
  })
  const wrap = handler => (req, res, next) => Promise.resolve(handler(req, res, next)).catch(() => res.status(503).json({ error: 'The request could not be completed. Please try again.' }))
  router.get('/api/enquiries', wrap(async (req, res) => {
    const page = Math.max(1, Math.min(100000, Number.parseInt(req.query.page, 10) || 1))
    const status = ['new', 'contacted', 'closed'].includes(req.query.status) ? req.query.status : null
    const search = typeof req.query.search === 'string' ? req.query.search.trim().slice(0, 100) : ''
    const { rows } = await pool.query(`SELECT id, first_name, last_name, product, status, created_at FROM investment_enquiries
      WHERE ($1::text IS NULL OR status = $1) AND ($2 = '' OR concat(first_name, ' ', last_name, ' ', email, ' ', id::text) ILIKE '%' || $2 || '%')
      ORDER BY created_at DESC, id DESC LIMIT 26 OFFSET $3`, [status, search, (page - 1) * 25])
    await pool.query("INSERT INTO investment_audit_log (actor, action) VALUES ($1, 'list')", [req.staffUser])
    res.json({ enquiries: rows.slice(0, 25), hasMore: rows.length > 25, page })
  }))
  router.param('id', (req, res, next, id) => {
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)) return res.status(400).json({ error: 'Invalid enquiry reference.' })
    next()
  })
  router.get('/api/enquiries/:id', wrap(async (req, res) => {
    const { rows } = await pool.query(`SELECT id, first_name, last_name, email, phone, id_type, id_number, contact_method,
      product, other_product, consent_text, consent_version, consent_accepted_at, status, created_at, updated_at,
      notification_sent_at FROM investment_enquiries WHERE id = $1`, [req.params.id])
    if (!rows.length) return res.status(404).json({ error: 'Enquiry not found.' })
    await pool.query("INSERT INTO investment_audit_log (enquiry_id, actor, action) VALUES ($1, $2, 'view')", [req.params.id, req.staffUser])
    res.json(rows[0])
  }))
  router.patch('/api/enquiries/:id', (req, res, next) => {
    // Custom same-origin header prevents cross-site form submissions with cached Basic credentials.
    if (req.get('X-TN-Admin') !== '1' || (req.get('Sec-Fetch-Site') && req.get('Sec-Fetch-Site') !== 'same-origin')) return res.status(403).json({ error: 'Please update enquiries from the staff portal.' })
    next()
  }, wrap(async (req, res) => {
    if (!['new', 'contacted', 'closed'].includes(req.body?.status)) return res.status(400).json({ error: 'Invalid status.' })
    const client = await pool.connect()
    try {
      await client.query('BEGIN')
      const { rows } = await client.query('UPDATE investment_enquiries SET status = $2, updated_at = now() WHERE id = $1 RETURNING id, status', [req.params.id, req.body.status])
      if (!rows.length) { await client.query('ROLLBACK'); return res.status(404).json({ error: 'Enquiry not found.' }) }
      await client.query('INSERT INTO investment_audit_log (enquiry_id, actor, action) VALUES ($1, $2, $3)', [req.params.id, req.staffUser, `status:${req.body.status}`])
      await client.query('COMMIT')
      res.json(rows[0])
    } catch (error) { await client.query('ROLLBACK').catch(() => {}); throw error }
    finally { client.release() }
  }))
  router.use(express.static(fileURLToPath(new URL('./admin/', import.meta.url))))
  return router
}
