import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function AgentSoleTrader() {
  const soleTraderRequirements = [
    'Duly Completed Agent Application form',
    'Proof of Business Address',
    'Copy of Applicant\'s ID',
    'Applicants Passport Photos',
    'Applicant\'s Proof of Residence',
    'Trading Licence',
    'Tax Clearance',
    'Copy of Cashiers\' ID',
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>For Sole Traders</h1>
          <p>Application requirements</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <Link to="/for-business/agents">Agency Banking</Link>
          <span className="separator">/</span>
          <span className="current">For Sole Traders</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-business/agents" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Agency Banking
          </Link>

          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">Application Requirements</span>
              <h2>For Sole Traders</h2>
              <p>
                To apply to become a TN CyberTech Bank Agent as a sole trader, please prepare the following documents:
              </p>

              <div style={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                overflow: 'hidden',
                marginTop: '1.5rem',
              }}>
                {soleTraderRequirements.map((requirement, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    borderBottom: index < soleTraderRequirements.length - 1 ? '1px solid #f3f4f6' : 'none',
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
                    <span style={{ color: '#4b5563', fontSize: '0.9375rem' }}>{requirement}</span>
                  </div>
                ))}
              </div>

              <div style={{
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(255, 222, 74, 0.05) 100%)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 222, 74, 0.2)',
                marginTop: '2rem',
              }}>
                <p style={{ color: '#4b5563', margin: 0 }}>
                  <strong style={{ color: 'rgb(174, 106, 6)' }}>Contact Us:</strong> Our Agent Banking Team operates from 79 Oliver Tambo Avenue, Harare. Call +263 8677020267 or +263 4 720677 / 720680.
                </p>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a href="mailto:agentbanking@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
                  Email Agent Banking
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
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
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

export default AgentSoleTrader
