import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import { investmentHandler } from './investment.js'
import { createDatabase, migrate } from './database.js'
import { createInvestmentStore } from './investment-store.js'
import { createNotificationWorker } from './notifications.js'
import { createAdminRouter } from './admin.js'
import { createRateLimit } from './rate-limit.js'

const app = express()
const PORT = process.env.PORT || 8080
// Render has one trusted ingress hop. Do not trust arbitrary forwarded headers locally.
app.set('trust proxy', process.env.RENDER ? 1 : false)
const database = createDatabase()
if (database) {
  try { await migrate(database) }
  catch { console.error('Database migration failed; server startup stopped'); await database.end(); process.exit(1) }
}
const store = database ? createInvestmentStore(database) : null
const rateLimit = createRateLimit()
app.use((req, res, next) => { res.set('X-Content-Type-Options', 'nosniff'); next() })

// CORS - allow requests from the frontend
const allowedOrigins = [
  'https://tncybertechbank.co.zw',
  'https://www.tncybertechbank.co.zw',
  'http://localhost:5173',
  'http://localhost:4173',
]

const publicCors = cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
})
app.use((req, res, next) => req.path === '/admin' || req.path.startsWith('/admin/') ? next() : publicCors(req, res, next))
// Preflights finish in CORS; rate-limit submissions before parsing enquiry details.
app.use('/api/investment-enquiries', rateLimit)

app.use('/api/investment-enquiries', express.json({ limit: '16kb' }))
app.use(express.json({ limit: '1mb' }))

// SMTP transporter using Office 365
const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  requireTLS: true,
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 20000,
})

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

// Contact form endpoint
app.post('/api/contact', rateLimit, async (req, res) => {
  const { name, email, phone, subject, message } = req.body

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  // Sanitize inputs
  const sanitize = (str) => str.replace(/[<>]/g, '')

  const safeName = sanitize(name)
  const safeEmail = sanitize(email)
  const safePhone = sanitize(phone || 'Not provided')
  const safeSubject = sanitize(subject)
  const safeMessage = sanitize(message)

  const subjectLabels = {
    account: 'Account Enquiry',
    cards: 'Card Services',
    loans: 'Loans',
    online: 'Online Banking',
    business: 'Business Banking',
    complaint: 'Complaint',
    other: 'Other',
  }

  const subjectLabel = subjectLabels[safeSubject] || safeSubject

  const mailOptions = {
    from: `"TN CyberTech Bank Website" <${process.env.SMTP_USER}>`,
    to: 'tncustomer@tncyberbank.co.zw',
    cc: 'webmaster@interpathzim.com',
    replyTo: safeEmail,
    subject: `Website Contact: ${subjectLabel} - ${safeName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #000; padding: 20px; text-align: center;">
          <h1 style="color: #ffde4a; margin: 0; font-size: 20px;">TN CyberTech Bank</h1>
          <p style="color: #999; margin: 5px 0 0; font-size: 12px;">Website Contact Form Submission</p>
        </div>
        <div style="padding: 30px; background: #f9fafb; border: 1px solid #e5e7eb;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #374151; width: 120px; vertical-align: top;">Name:</td>
              <td style="padding: 10px; color: #111827;">${safeName}</td>
            </tr>
            <tr style="background: #fff;">
              <td style="padding: 10px; font-weight: bold; color: #374151; vertical-align: top;">Email:</td>
              <td style="padding: 10px; color: #111827;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #374151; vertical-align: top;">Phone:</td>
              <td style="padding: 10px; color: #111827;">${safePhone}</td>
            </tr>
            <tr style="background: #fff;">
              <td style="padding: 10px; font-weight: bold; color: #374151; vertical-align: top;">Subject:</td>
              <td style="padding: 10px; color: #111827;">${subjectLabel}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #374151; vertical-align: top;">Message:</td>
              <td style="padding: 10px; color: #111827; white-space: pre-wrap;">${safeMessage}</td>
            </tr>
          </table>
        </div>
        <div style="padding: 15px; background: #000; text-align: center;">
          <p style="color: #666; font-size: 11px; margin: 0;">This email was sent from the TN CyberTech Bank website contact form.</p>
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.json({ success: true, message: 'Your message has been sent successfully.' })
  } catch (err) {
    console.error('Email send error:', err.message)
    res.status(500).json({ error: 'Failed to send message. Please try again later.' })
  }
})

app.post('/api/investment-enquiries', investmentHandler({ store }))
app.use('/admin', (req, res, next) => {
  if (process.env.NODE_ENV === 'production' && !req.secure) return res.status(400).send('HTTPS is required for staff access.')
  next()
}, createAdminRouter({ pool: database,
  username: process.env.ADMIN_USERNAME, password: process.env.ADMIN_PASSWORD,
  rateLimit: createRateLimit({ max: 120 }),
}))
const notifications = createNotificationWorker({ pool: database,
  sendMail: options => transporter.sendMail(options), sender: process.env.SMTP_USER,
  recipient: process.env.INVESTMENT_ENQUIRY_TO, adminUrl: process.env.ADMIN_URL,
})
const stopNotifications = notifications.start()
app.get('/ready', async (req, res) => {
  try {
    if (!database) throw new Error('Database unavailable')
    await database.query('SELECT 1')
    res.json({ status: 'ready' })
  } catch { res.status(503).json({ status: 'unavailable' }) }
})

app.use((err, req, res, next) => {
  if (err.type === 'entity.too.large') return res.status(413).json({ error: 'Your request is too large. Please submit only the enquiry details.' })
  if (err.type === 'entity.parse.failed') return res.status(400).json({ error: 'Invalid request.' })
  console.error('Request failed')
  res.status(500).json({ error: 'The request could not be completed.' })
})

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`TN API server running on port ${PORT}`)
})

process.on('SIGTERM', () => {
  stopNotifications()
  server.close(async () => { await database?.end(); transporter.close() })
})
