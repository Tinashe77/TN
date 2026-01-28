import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/PageStyles.css'

function CustomerService() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:customerservice@tncybertechbank.co.zw?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  const quickLinks = [
    { title: 'Mobile Banking', desc: 'Download app, registration, troubleshooting', link: '/for-you/mobile-banking' },
    { title: 'Cards', desc: 'Card services, block/unblock, PIN management', link: '/for-you/cards' },
    { title: 'Account Opening', desc: 'Personal and business accounts', link: '/for-you/accounts' },
    { title: 'Agent Banking', desc: 'Find agents, become an agent', link: '/for-business/agents' },
  ]

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Customer Service</h1>
          <p>Our Customer Service representatives are available to help you.</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <span className="current">Customer Service</span>
        </div>
      </nav>

      {/* Contact Methods */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Get in Touch</span>
            <h2>Contact Us</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{
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
                <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" style={{ width: '28px', height: '28px' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 style={{ color: '#111827', marginBottom: '0.5rem' }}>Toll Free</h3>
              <p style={{ color: 'rgb(174, 106, 6)', fontWeight: '600', fontSize: '1.25rem', marginBottom: '0.25rem' }}>080 88888</p>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>Toll free from Econet line</p>
              <a
                href="tel:08088888"
                className="cta-btn cta-btn-primary"
                style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}
              >
                Call Now
              </a>
            </div>

            <div style={{
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
                <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" style={{ width: '28px', height: '28px' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h3 style={{ color: '#111827', marginBottom: '0.5rem' }}>Email</h3>
              <p style={{ color: 'rgb(174, 106, 6)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.25rem' }}>customerservice@tncybertechbank.co.zw</p>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>For general enquiries</p>
              <a
                href="mailto:customerservice@tncybertechbank.co.zw"
                className="cta-btn cta-btn-primary"
                style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}
              >
                Send Email
              </a>
            </div>

            <div style={{
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
                <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" style={{ width: '28px', height: '28px' }}>
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12" y2="18"/>
                </svg>
              </div>
              <h3 style={{ color: '#111827', marginBottom: '0.5rem' }}>USSD Banking</h3>
              <p style={{ color: 'rgb(174, 106, 6)', fontWeight: '600', fontSize: '1.25rem', marginBottom: '0.25rem' }}>*210#</p>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>Self-service banking</p>
              <a
                href="tel:*210%23"
                className="cta-btn cta-btn-primary"
                style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}
              >
                Dial Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Query Form */}
      <section className="content-section light-section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            <div>
              <span className="section-label">Submit a Query</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1.5rem' }}>
                Send Us a Message
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
                    <input
                      type="text"
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
                      }}
                    />
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
                  style={{ alignSelf: 'flex-start' }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Quick Links */}
            <div>
              <span className="section-label">Quick Links</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1.5rem' }}>
                How-to Guides
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {quickLinks.map((item) => (
                  <Link key={item.title} to={item.link} className="service-card" style={{ padding: '1.25rem' }}>
                    <h3 style={{ marginBottom: '0.25rem' }}>{item.title}</h3>
                    <p style={{ margin: 0 }}>{item.desc}</p>
                    <div className="service-card-arrow">
                      Learn More
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Locator CTA */}
      <section className="content-section dark-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Find an Agent Near You</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            TN CyberTech Bank agents across the country can help with your banking needs.
          </p>
          <Link to="/for-business/agents" className="cta-btn cta-btn-primary">
            Find Agents
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CustomerService
