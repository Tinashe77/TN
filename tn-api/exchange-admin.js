import express from 'express'
import { importRateWorkbook } from './exchange-import.js'

export function exchangeAdminRouter(store) {
  const router = express.Router()
  router.use((req, res, next) => {
    if (!store) return res.status(503).json({ error: 'Database unavailable.' })
    if (req.method !== 'GET' && (req.get('X-TN-Admin') !== '1' || (req.get('Sec-Fetch-Site') && req.get('Sec-Fetch-Site') !== 'same-origin'))) {
      return res.status(403).json({ error: 'Please publish rates from the staff portal.' })
    }
    next()
  })
  const wrap = handler => (req, res, next) => Promise.resolve(handler(req, res)).catch(next)
  router.get('/', wrap(async (req, res) => res.json({ table: await store.current() })))
  router.get('/history', wrap(async (req, res) => res.json({ history: await store.history() })))
  router.post('/import', express.raw({ type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', limit: '5mb', inflate: false }), (req, res, next) => {
    try { res.json({ table: importRateWorkbook(req.body) }) } catch (error) { next(error) }
  })
  router.post('/publish', wrap(async (req, res) => res.json({ table: await store.publish(req.body, req.staffUser) })))
  router.use((error, req, res, next) => {
    if (error.type === 'entity.too.large') return res.status(413).json({ error: 'Upload an .xlsx workbook up to 5 MB.' })
    const status = [400, 409, 415].includes(error.status) ? error.status : 503
    res.status(status).json({ error: status === 503 ? 'Rates could not be saved or loaded. Please try again.' : error.message })
  })
  return router
}
