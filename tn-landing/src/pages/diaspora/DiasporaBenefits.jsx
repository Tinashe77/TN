import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function DiasporaBenefits() {
  const benefits = [
    { text: 'Visa Debit directly linked to the FCA Account', highlight: true },
    { text: 'Access to robust online platform and mobile application', highlight: false },
    { text: 'SMS and E-Alerts for all transactions', highlight: false },
    { text: 'Access to Swift transfers', highlight: true },
    { text: 'Access to local service providers with dedicated relationship officer', highlight: false },
    { text: '24hr Contact Centre Support', highlight: true },
  ]

  const requirements = [
    'Completed account opening form',
    '2 Passport Photos',
    'Copy of ID and valid Zimbabwean passport',
    'Proof of Residence (foreign utility bill, bank statement, or lease agreement)',
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero" style={{ backgroundImage: "url('/banners/diaspora.jpg')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Account Benefits</h1>
          <p>Features & requirements</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/diaspora">Diaspora Banking</Link>
          <span className="separator">/</span>
          <span className="current">Benefits</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/diaspora" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Diaspora Banking
          </Link>

          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">Why Choose Us</span>
              <h2>Account Benefits</h2>
              <p>
                With our robust online banking platform and mobile banking app, you can enjoy real-time, cost-effective transactions without the need for intermediaries. Furthermore, benefit from the dedicated support of a relationship officer, providing assistance and access to local service providers.
              </p>

              <div style={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                overflow: 'hidden',
                marginTop: '1.5rem',
              }}>
                {benefits.map((benefit, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    borderBottom: index < benefits.length - 1 ? '1px solid #f3f4f6' : 'none',
                    background: benefit.highlight ? 'rgba(255, 222, 74, 0.1)' : 'transparent',
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="rgb(174, 106, 6)" strokeWidth="2.5" style={{
                      width: '20px',
                      height: '20px',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span style={{ color: '#4b5563', fontSize: '0.9375rem', lineHeight: '1.6' }}>{benefit.text}</span>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>Requirements</h3>

              <div style={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                overflow: 'hidden',
              }}>
                {requirements.map((req, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    borderBottom: index < requirements.length - 1 ? '1px solid #f3f4f6' : 'none',
                  }}>
                    <span style={{
                      width: '28px',
                      height: '28px',
                      background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      fontWeight: '700',
                      color: '#000',
                      flexShrink: 0,
                    }}>{index + 1}</span>
                    <span style={{ color: '#4b5563', fontSize: '0.9375rem' }}>{req}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a href="mailto:diaspora@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
                  Contact Diaspora Team
                </a>
              </div>
            </div>
            <div className="story-image">
              <div className="about-hub-icon" style={{
                width: '160px',
                height: '160px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" style={{ width: '80px', height: '80px' }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DiasporaBenefits
