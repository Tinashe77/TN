import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/PageStyles.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitStatus, setSubmitStatus] = useState(null) // 'sending', 'success', 'error'
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus('sending')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage(data.message || 'Your message has been sent successfully.')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(data.error || 'Failed to send message. Please try again.')
      }
    } catch {
      setSubmitStatus('error')
      setSubmitMessage('Network error. Please check your connection and try again.')
    }
  }

  const contactMethods = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: 'Toll Free',
      primary: '080 88888',
      secondary: 'Toll free from Econet line',
      action: { label: 'Call Now', href: 'tel:08088888' },
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: 'Email',
      primary: 'customerservice@tncybertechbank.co.zw',
      secondary: 'For general enquiries',
      action: { label: 'Send Email', href: 'mailto:customerservice@tncybertechbank.co.zw' },
    },
  ]

  const departments = [
    { name: 'Customer Service', email: 'customerservice@tncybertechbank.co.zw' },
    { name: 'Business Banking', email: 'businessbanking@tncybertechbank.co.zw' },
    { name: 'Treasury', email: 'treasury@tncybertechbank.co.zw' },
    { name: 'Diaspora Services', email: 'diaspora@tncybertechbank.co.zw' },
    { name: 'Card Services', email: 'cards@tncybertechbank.co.zw' },
    { name: 'Loans', email: 'loans@tncybertechbank.co.zw' },
  ]

  // Helper function to mask email addresses
  const maskEmail = (email) => {
    const [local, domain] = email.split('@')
    const maskedLocal = local.slice(0, 3) + '***'
    return `${maskedLocal}@${domain}`
  }

  const branches = [
    {
      name: 'Avondale',
      address: '7 King George Road, Cnr Lanark, Avondale, Harare',
      email: 'avondale@tncybertechbank.co.zw',
    },
    {
      name: 'Borrowdale',
      address: '48 Borrowdale Road, Borrowdale, Harare',
      email: 'Borrowdale.Platinum@tncybertechbank.co.zw',
    },
    {
      name: 'Eastgate',
      address: 'Eastgate Shopping Complex, Corner of Robert Mugabe & 3rd Street, Harare',
      email: 'eastgatebranch@tncybertechbank.co.zw',
    },
    {
      name: 'Joina City',
      address: 'Upper Ground Floor, Joina City, on Jason Moyo Avenue, Harare',
      email: 'Joina@tncybertechbank.co.zw',
    },
    {
      name: 'Mutare',
      address: '56-52, Second St, Mutare',
      email: 'Mutarebranch@tncybertechbank.co.zw',
    },
    {
      name: 'Masvingo',
      address: '22 Robert Mugabe Street, Masvingo',
      email: 'Masvingobranch@tncybertechbank.co.zw',
    },
    {
      name: 'Gweru',
      address: '124 Main Street, Gweru',
      email: 'Gwerubranch@tncybertechbank.co.zw',
    },
    {
      name: 'Bulawayo',
      address: 'Bambanani Centre, Corner 9th Avenue and Jason Moyo, Bulawayo',
      email: 'bulawayobranch@tncybertechbank.co.zw',
    },
    {
      name: 'Victoria Falls',
      address: '6-7 Sopers Arcade, Victoria Falls',
      email: 'victoriafalls@tncybertechbank.co.zw',
    },
  ]

  return (
    <div className="page-container">
      <Header />

      {/* Hero */}
      <section className="page-hero" style={{ backgroundImage: "url('/banners/contatct.jpg')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Contact Us</h1>
          <p>We're here to help. Reach out to us anytime.</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <span className="current">Contact</span>
        </div>
      </nav>

      {/* Contact Methods */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Get in Touch</span>
            <h2>How Can We Help You?</h2>
            <p>Choose your preferred way to reach us.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {contactMethods.map((method, idx) => (
              <div key={idx} style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.05) 0%, #fff 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 222, 74, 0.2)',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                }}>
                  <span style={{ width: '28px', height: '28px', color: '#000' }}>{method.icon}</span>
                </div>
                <h3 style={{ color: '#111827', marginBottom: '0.5rem' }}>{method.title}</h3>
                <p style={{ color: 'rgb(174, 106, 6)', fontWeight: '600', marginBottom: '0.25rem' }}>{method.primary}</p>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>{method.secondary}</p>
                <a
                  href={method.action.href}
                  className="cta-btn cta-btn-primary"
                  style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}
                >
                  {method.action.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="content-section light-section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', maxWidth: '700px', margin: '0 auto' }}>
            {/* Contact Form - Hidden for now */}
            {false && <div>
              <span className="section-label">Send a Message</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1.5rem' }}>
                Contact Form
              </h2>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#374151', fontWeight: '500' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#374151', fontWeight: '500' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        fontSize: '1rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#374151', fontWeight: '500' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        fontSize: '1rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#374151', fontWeight: '500' }}>
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        fontSize: '1rem',
                        outline: 'none',
                        background: '#fff',
                      }}
                    >
                      <option value="">Select a subject</option>
                      <option value="account">Account Enquiry</option>
                      <option value="cards">Card Services</option>
                      <option value="loans">Loans</option>
                      <option value="online">Online Banking</option>
                      <option value="business">Business Banking</option>
                      <option value="complaint">Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#374151', fontWeight: '500' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="cta-btn cta-btn-primary"
                  style={{ alignSelf: 'flex-start', opacity: submitStatus === 'sending' ? 0.7 : 1, pointerEvents: submitStatus === 'sending' ? 'none' : 'auto' }}
                >
                  {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {submitMessage && (
                  <div style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    background: submitStatus === 'success' ? '#f0fdf4' : '#fef2f2',
                    border: `1px solid ${submitStatus === 'success' ? '#bbf7d0' : '#fecaca'}`,
                    color: submitStatus === 'success' ? '#166534' : '#991b1b',
                    fontSize: '0.9375rem',
                  }}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>}

            {/* Department Emails */}
            <div>
              <span className="section-label">Direct Contact</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1.5rem' }}>
                Department Contacts
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {departments.map((dept, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 1.25rem',
                    background: '#fff',
                    borderRadius: '10px',
                    border: '1px solid #e5e7eb',
                  }}>
                    <span style={{ fontWeight: '500', color: '#111827' }}>{dept.name}</span>
                    <a
                      href={`mailto:${dept.email}`}
                      style={{
                        color: 'rgb(174, 106, 6)',
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                      }}
                    >
                      {maskEmail(dept.email)}
                    </a>
                  </div>
                ))}
              </div>

              {/* USSD Quick Access */}
              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 100%)',
                borderRadius: '16px',
              }}>
                <h3 style={{ color: '#000', marginBottom: '0.5rem' }}>Quick Self-Service</h3>
                <p style={{ color: '#000', opacity: 0.8, marginBottom: '1rem', fontSize: '0.875rem' }}>
                  Access banking services instantly via USSD
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  
                  <div style={{ background: 'rgba(0,0,0,0.1)', padding: '0.75rem 1.25rem', borderRadius: '8px' }}>
                    <div style={{ fontWeight: '700', color: '#000' }}>*236#</div>
                    <div style={{ fontSize: '0.75rem', color: '#000', opacity: 0.8 }}>Registration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Visit Us</span>
            <h2>Our Branches</h2>
            <p>Find a branch near you.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {branches.map((branch, idx) => (
              <div key={idx} className="info-card">
                <h3>
                  <span className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </span>
                  {branch.name}
                </h3>
                <div style={{ marginLeft: '3rem' }}>
                  <p style={{ color: '#4b5563', marginBottom: '0.5rem' }}>{branch.address}</p>
                  <a
                    href={`mailto:${branch.email}`}
                    style={{
                      color: 'rgb(174, 106, 6)',
                      fontWeight: '500',
                      textDecoration: 'none',
                      fontSize: '0.875rem'
                    }}
                  >
                    {maskEmail(branch.email)}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Looking for an Agency Banking location? We have agents across the country.
            </p>
            <Link to="/for-business/agents/locator" className="cta-btn cta-btn-secondary">
              Find Agent Locations
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="content-section dark-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Lost or Stolen Card?</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Report a lost or stolen card immediately to prevent unauthorized use.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+2632428866460" className="cta-btn cta-btn-primary">
              Call +263 242 886 646
            </a>
            <a href="tel:0808036100" className="cta-btn cta-btn-secondary">
              Toll Free: 08080 36100
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
