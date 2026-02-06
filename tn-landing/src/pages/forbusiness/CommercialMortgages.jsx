import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function CommercialMortgages() {
  const features = [
    'Property acquisition financing',
    'Competitive rates',
    'Flexible repayment terms',
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Commercial Mortgages</h1>
          <p>Property acquisition financing for businesses</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <Link to="/for-business/loans">Business Loans</Link>
          <span className="separator">/</span>
          <span className="current">Commercial Mortgages</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-business/loans" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Business Loans
          </Link>

          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">Business Finance</span>
              <h2>Commercial Mortgages</h2>
              <p>
                The Bank finances businesses for the acquisition of commercial properties by extending mortgage loans.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#111827' }}>Key Features</h3>
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
                <a href="mailto:loans@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
                  Apply Now
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
                  <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1"/>
                  <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
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

export default CommercialMortgages
