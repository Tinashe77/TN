import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function MerchantNonCustomers() {
  const steps = [
    'Complete POS Application form',
    'Submit KYC Documents',
    'Email: posmerchant@tncybertechbank.co.zw',
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>For Non-TN CyberTech Bank Corporates</h1>
          <p>New to the bank</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <Link to="/for-business/merchant">Merchant Services</Link>
          <span className="separator">/</span>
          <span className="current">Non-Customers</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-business/merchant" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Merchant Services
          </Link>

          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">For Non-TN CyberTech Bank Corporates</span>
              <h2>Get Your POS Machine</h2>
              <p>
                New to TN CyberTech Bank? No problem. Follow these simple steps to get your POS machine.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#111827' }}>How to Apply</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {steps.map((step, index) => (
                    <li key={step} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem', color: '#4b5563' }}>
                      <span style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                        borderRadius: '50%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontWeight: '700',
                        color: '#000',
                        fontSize: '0.875rem'
                      }}>
                        {index + 1}
                      </span>
                      <span style={{ paddingTop: '0.25rem' }}>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a href="mailto:posmerchant@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
                  Email POS Team
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
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
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

export default MerchantNonCustomers
