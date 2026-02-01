import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function TradeFinance() {
  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Trade Finance</h1>
          <p>Complex trade finance transactions</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <Link to="/for-business/international">International Banking</Link>
          <span className="separator">/</span>
          <span className="current">Trade Finance</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-business/international" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to International Banking
          </Link>

          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">International Banking</span>
              <h2>Trade Finance</h2>
              <p>
                TN CyberTech Bank has experienced trade professionals that can assist with complex trade finance transactions. This includes letter of credit advising and confirmation.
              </p>

              <div style={{
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(255, 222, 74, 0.05) 100%)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 222, 74, 0.2)',
                marginTop: '2rem',
              }}>
                <p style={{ color: '#4b5563', margin: 0 }}>
                  <strong style={{ color: 'rgb(174, 106, 6)' }}>Expert Support:</strong> Our experienced trade professionals provide comprehensive assistance with letters of credit advising, confirmation, and other complex trade finance solutions.
                </p>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a href="mailto:International_Banking@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
                  Contact International Banking
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
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
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

export default TradeFinance
