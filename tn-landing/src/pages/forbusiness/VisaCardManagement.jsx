import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function VisaCardManagement() {
  const features = [
    'Manage international business activities by viewing your monthly statement',
    'Manage cards',
    'Online statementing upon request from the bank',
    'Replacement & new card requests',
    'No monthly service fees',
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Account Management</h1>
          <p>Full control over your corporate cards</p>
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
          <span className="current">Account Management</span>
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
              <span className="section-label">Card Features</span>
              <h2>Account Management</h2>
              <p>
                Take full control of your corporate card accounts with comprehensive management tools and features designed for business efficiency.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {features.map((feature) => (
                    <li key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem', color: '#4b5563' }}>
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a href="mailto:cardcentre@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
                  Contact Card Centre
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

export default VisaCardManagement
