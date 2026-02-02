import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function USSDBanking() {
  const ussdServices = [
    'Bill payments',
    'Airtime purchase',
    'Internal transfers & RTGS',
    'Change PIN',
    'View transaction history',
    'Mini-statements',
    'Balance enquiries',
  ]

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero" style={{ backgroundImage: "url('/banners/mobile-banking.png')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>USSD Banking</h1>
          <p>Bank From Any Phone</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-you">For You</Link>
          <span className="separator">/</span>
          <Link to="/for-you/mobile-banking">Mobile Banking</Link>
          <span className="separator">/</span>
          <span className="current">USSD Banking</span>
        </div>
      </nav>

      <section className="content-section dark-section">
        <div className="container">
          <Link to="/for-you/mobile-banking" className="back-link light">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Mobile Banking
          </Link>

          <div className="two-col-layout">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'clamp(3rem, 8vw, 5rem)',
                  fontWeight: '700',
                  color: 'rgb(255, 222, 74)',
                  marginBottom: '1rem'
                }}>
                  *236#
                </div>
                <p style={{ color: '#9ca3af', fontSize: '1.125rem' }}>Dial to access USSD Banking</p>
                <div style={{
                  marginTop: '1.5rem',
                  padding: '1rem 2rem',
                  background: 'rgba(255, 222, 74, 0.1)',
                  borderRadius: '50px',
                  display: 'inline-block'
                }}>
                  <span style={{ color: 'rgb(255, 222, 74)', fontWeight: '600' }}>Register: *236#</span>
                </div>
              </div>
            </div>

            <div>
              <span className="section-label light">USSD Banking</span>
              <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Bank From Any Phone</h2>
              <p style={{ color: '#9ca3af', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                USSD banking from TN CyberTech Bank makes it possible for you to do all your banking by dialling <strong style={{ color: 'rgb(174, 106, 6)' }}>*236#</strong> on any type of mobile phone from wherever you are.
              </p>

              <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>Available Services:</h4>
              <ul className="feature-list" style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                {ussdServices.map((service) => (
                  <li key={service} style={{ color: '#d1d5db', borderColor: 'rgba(255,255,255,0.08)' }}>
                    <span className="check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default USSDBanking
