import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function OurMission() {
  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Our Mission</h1>
          <p>Innovative Banking Services</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/about">About Us</Link>
          <span className="separator">/</span>
          <span className="current">Our Mission</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/about" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to About
          </Link>
          <div className="centered-content" style={{ marginBottom: 0 }}>
            <span className="section-label">Our Mission</span>
            <h2 style={{ color: '#111827' }}>Innovative Banking Services</h2>
            <p style={{ fontSize: '1.25rem', lineHeight: '2', color: '#4b5563' }}>
              To design, operate, and securely integrate innovative banking services into partner platforms — enabling effortless financial access through trusted technology channels.
            </p>
          </div>
        </div>
      </section>

      <section className="image-break-section">
        <div className="image-break-overlay"></div>
        <div className="image-break-content">
          <h2>Banking at the Point of Need</h2>
          <p>Through technology, partnerships, and secure digital channels</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OurMission
