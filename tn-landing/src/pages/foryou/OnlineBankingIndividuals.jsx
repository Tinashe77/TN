import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function OnlineBankingIndividuals() {
  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>For Individuals</h1>
          <p>Personal Online Banking</p>
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
          <span className="current">For Individuals</span>
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
            <h2 style={{ color: '#111827' }}>For Individuals</h2>
            <p style={{ color: '#4b5563', maxWidth: '600px', margin: '0 auto' }}>
              Personal online banking registration
            </p>
          </div>

          <div className="info-card" style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1rem' }}>For Individuals</h3>
            <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
              Access your personal online banking account
            </p>
            <a href="#" className="cta-btn cta-btn-primary">
              Visit our banking portal
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OnlineBankingIndividuals
