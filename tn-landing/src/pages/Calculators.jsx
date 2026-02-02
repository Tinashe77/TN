import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/PageStyles.css'
import './About.css'

function Calculators() {
  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Calculators</h1>
          <p>Financial planning tools</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <span className="current">Calculators</span>
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
              <rect x="4" y="2" width="16" height="20" rx="2"/>
              <line x1="8" y1="6" x2="16" y2="6"/>
              <line x1="8" y1="10" x2="10" y2="10"/>
              <line x1="12" y1="10" x2="14" y2="10"/>
              <line x1="8" y1="14" x2="10" y2="14"/>
              <line x1="12" y1="14" x2="14" y2="14"/>
              <line x1="8" y1="18" x2="10" y2="18"/>
              <line x1="12" y1="18" x2="16" y2="18"/>
            </svg>
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#111827', marginBottom: '1rem' }}>Coming Soon</h2>
          <p style={{ color: '#6b7280', maxWidth: '500px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
            Our financial calculators are currently under development. Soon you'll be able to calculate loan repayments, savings growth, and more.
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

export default Calculators
