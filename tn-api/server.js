import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
const PORT = process.env.PORT || 8080

// CORS - allow requests from the frontend
const allowedOrigins = [
  'https://tncybertechbank.co.zw',
  'https://www.tncybertechbank.co.zw',
  'http://localhost:5173',
  'http://localhost:4173',
]

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}))

app.use(express.json({ limit: '1mb' }))

// Rate limiting (simple in-memory)
const submissions = new Map()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 3 // max 3 submissions per minute per IP

function rateLimit(req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  const now = Date.now()
  const windowStart = now - RATE_LIMIT_WINDOW

  if (!submissions.has(ip)) {
    submissions.set(ip, [])
  }

  const timestamps = submissions.get(ip).filter(t => t > windowStart)
  submissions.set(ip, timestamps)

  if (timestamps.length >= RATE_LIMIT_MAX) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' })
  }

  timestamps.push(now)
  next()
}

// SMTP transporter using Office 365
const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    ciphers: 'SSLv3',
  },
})

// Verify SMTP connection on startup
transporter.verify()
  .then(() => console.log('SMTP connection verified'))
  .catch((err) => console.error('SMTP connection error:', err.message))

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

app.listen(PORT, () => {
  console.log(`TN API server running on port ${PORT}`)
})
