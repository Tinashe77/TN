export function createRateLimit({ max = 3, windowMs = 60000 } = {}) {
  const clients = new Map()
  const cleanup = setInterval(() => {
    for (const [ip, record] of clients) if (record.until <= Date.now()) clients.delete(ip)
  }, windowMs)
  cleanup.unref()
  return (req, res, next) => {
    const ip = req.ip
    const now = Date.now()
    let record = clients.get(ip)
    if (!record || record.until <= now) { record = { count: 0, until: now + windowMs }; clients.set(ip, record) }
    if (++record.count > max) {
      res.set('Retry-After', String(Math.ceil((record.until - now) / 1000)))
      return res.status(429).json({ error: 'Too many requests. Please try again shortly.' })
    }
    next()
  }
}
