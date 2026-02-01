import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function VisaCardApply() {
  const requirements = [
    'Completed and signed application form',
    'CR14',
    'CR6',
    'Certificate of incorporation',
    'Directors\' national ID, proof of residence and photos',
    'Company resolution',
    'FCB clearance required for non SB applicants',
    'Ultimate Beneficial Owner (UBO)',
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>How to Apply</h1>
          <p>Requirements for your Visa Corporate Card</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <Link to="/for-business/visa-corporate-card">Visa Corporate Card</Link>
          <span className="separator">/</span>
          <span className="current">How to Apply</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-business/visa-corporate-card" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Visa Corporate Card
          </Link>

          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">Application</span>
              <h2>Requirements</h2>
              <p>
                To apply for a TN CyberTech Bank VISA Corporate Card, please prepare the following documents and visit any of our branches.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {requirements.map((requirement) => (
                    <li key={requirement} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem', color: '#4b5563' }}>
                      <span style={{
                        width: '24px',
                        height: '24px',
                        minWidth: '24px',
                        background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                        borderRadius: '50%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" style={{ width: '12px', height: '12px' }}>
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </span>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(255, 222, 74, 0.05) 100%)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 222, 74, 0.2)',
                marginTop: '2rem',
              }}>
                <p style={{ color: '#4b5563', margin: 0 }}>
                  <strong style={{ color: 'rgb(174, 106, 6)' }}>Note:</strong> FCB clearance is required for non-TN CyberTech Bank applicants. Card can be loaded at any of our branches.
                </p>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="mailto:cardcentre@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
                  Email Card Centre
                </a>
                <Link to="/contact" className="cta-btn cta-btn-secondary">
                  Find a Branch
                </Link>
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
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                  <path d="M9 14l2 2 4-4"/>
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

export default VisaCardApply
