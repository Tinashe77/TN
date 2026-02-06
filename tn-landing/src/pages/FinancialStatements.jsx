import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/PageStyles.css'
import './About.css'

function FinancialStatements() {
  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Financial Statements</h1>
          <p>Annual reports and disclosures</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <span className="current">Financial Statements</span>
        </div>
      </nav>

      <section className="content-section white-section" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="about-hub-icon" style={{
            width: '120px',
            height: '120px',
            margin: '0 auto 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" style={{ width: '60px', height: '60px' }}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#111827', marginBottom: '1rem' }}>Coming Soon</h2>
          <p style={{ color: '#6b7280', maxWidth: '500px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
            Our financial statements and annual reports will be available here shortly. Check back soon for our latest financial disclosures.
          </p>
          <Link to="/" className="cta-btn cta-btn-primary">
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FinancialStatements
