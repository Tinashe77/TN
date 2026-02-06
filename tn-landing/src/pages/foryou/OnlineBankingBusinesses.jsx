import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function OnlineBankingBusinesses() {
  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>For Businesses</h1>
          <p>Corporate Online Banking</p>
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
          <Link to="/for-you/mobile-banking/online">Internet Banking</Link>
          <span className="separator">/</span>
          <span className="current">For Businesses</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-you/mobile-banking/online" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Internet Banking
          </Link>

          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: '#111827' }}>For Businesses</h2>
            <p style={{ color: '#4b5563', maxWidth: '600px', margin: '0 auto' }}>
              Corporate online banking registration
            </p>
          </div>

          <div className="info-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1rem' }}>For Businesses</h3>
            <div className="steps-list">
              <div className="step-item">
                <span className="step-number">1</span>
                <div className="step-content">
                  <p>Fill out Mandate Form & Submit to Account Executive</p>
                </div>
              </div>
              <div className="step-item">
                <span className="step-number">2</span>
                <div className="step-content">
                  <p>Bank Operations creates online profile</p>
                </div>
              </div>
              <div className="step-item">
                <span className="step-number">3</span>
                <div className="step-content">
                  <p>Receive verification code and set up profile</p>
                </div>
              </div>
              <div className="step-item">
                <span className="step-number">4</span>
                <div className="step-content">
                  <p>Each individual receives that One-Time code and uses it to set-up his/her profile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OnlineBankingBusinesses
