import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function DiasporaRemittances() {
  const features = [
    { title: 'Secure', subtitle: 'Safe transactions' },
    { title: 'USD Cash', subtitle: 'Guaranteed' },
    { title: 'No Fuss', subtitle: 'Quick & easy' },
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero" style={{ backgroundImage: "url('/banners/diaspora.jpg')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>International Remittances</h1>
          <p>Send & receive globally</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/diaspora">Diaspora Banking</Link>
          <span className="separator">/</span>
          <span className="current">Remittances</span>
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
              <span className="section-label">International Remittances</span>
              <h2>Send & Receive Money Globally</h2>
              <p>
                Whether you're receiving funds from abroad or sending them to loved ones, TN CyberTech Bank ensures a seamless transaction experience.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginTop: '2rem',
              }}>
                {features.map((feature) => (
                  <div key={feature.title} style={{
                    padding: '1.5rem',
                    background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.15) 0%, rgba(174, 106, 6, 0.1) 100%)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 222, 74, 0.3)',
                    textAlign: 'center',
                  }}>
                    <div style={{ color: 'rgb(174, 106, 6)', fontWeight: '700', fontSize: '1.25rem' }}>{feature.title}</div>
                    <div style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.25rem' }}>{feature.subtitle}</div>
                  </div>
                ))}
              </div>

              <div style={{
                padding: '1.5rem',
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                marginTop: '2rem',
              }}>
                <h4 style={{ color: '#111827', marginBottom: '0.5rem' }}>Direct Bank Account Deposit/Transfer</h4>
                <p style={{ color: '#6b7280', marginBottom: '0' }}>
                  Through <strong style={{ color: 'rgb(174, 106, 6)' }}>RIA Money Transfer</strong>.
                </p>
              </div>

              <div style={{
                padding: '1.5rem',
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                marginTop: '1.5rem',
              }}>
                <h4 style={{ color: '#111827', marginBottom: '0.5rem' }}>Sending Money Abroad?</h4>
                <p style={{ color: '#6b7280', marginBottom: '0' }}>
                  For sending money abroad, we partner with <strong style={{ color: 'rgb(174, 106, 6)' }}>Money Gram</strong> and <strong style={{ color: 'rgb(174, 106, 6)' }}>Western Union</strong>.
                </p>
              </div>

              <div style={{
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(255, 222, 74, 0.05) 100%)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 222, 74, 0.2)',
                marginTop: '1.5rem',
              }}>
                <p style={{ color: '#4b5563', margin: 0 }}>
                  <strong style={{ color: 'rgb(174, 106, 6)' }}>Contact Us:</strong> Visit our branches today to find out more about our expanded diaspora services. Email: diasporabanking@tncybertechbank.co.zw
                </p>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/diaspora/partners" className="cta-btn cta-btn-primary">
                  View Our Partners
                </Link>
                <a href="mailto:diasporabanking@tncybertechbank.co.zw" className="cta-btn cta-btn-secondary">
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
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
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

export default DiasporaRemittances
