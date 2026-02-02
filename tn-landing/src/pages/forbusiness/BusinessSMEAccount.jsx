import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function BusinessSMEAccount() {
  const features = [
    'Personalised Account Relationship management.',
    'Affordable monthly service fees',
    'Mobile App and Online Banking',
    'ZimSwitch Debit Card',
    'TN CyberTech Bank MSME networking events',
    'VISA Debit Card Account Bundles',
    'Merchant & Agent Loans',
    'Business Card',
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Business SME Account</h1>
          <p>For Small to Medium Enterprises</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <Link to="/for-business/accounts">Business Accounts</Link>
          <span className="separator">/</span>
          <span className="current">Business SME Account</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-business/accounts" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Business Accounts
          </Link>

          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">Business SME Account</span>
              <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 100%)', color: '#000', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600', marginBottom: '1rem' }}>
                Popular Choice
              </div>
              <h2>For Small to Medium Enterprises</h2>
              <p>
                The account features have been designed to provide affordable and appropriate products and services to each segment. Product for day to day transactions purposes for small businesses, will provide access to the following services
              </p>

              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#111827' }}>Features & Benefits</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {features.map((feature) => (
                    <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: '#4b5563' }}>
                      <span style={{
                        width: '24px',
                        height: '24px',
                        background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                        borderRadius: '50%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
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
                <Link to="/contact" className="cta-btn cta-btn-primary">
                  Open This Account
                </Link>
              </div>
            </div>
            <div className="story-image">
              <img
                src="/Business/Small-business.png"
                alt="Business SME Account"
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  borderRadius: '16px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BusinessSMEAccount
