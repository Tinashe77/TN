import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'
import './OurValues.css'

function OurValues() {
  const values = [
    {
      letter: 'I',
      title: 'Innovation',
      description: 'We imagine boldly and build for the future, and we think independently and create authentically.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
    },
    {
      letter: 'D',
      title: 'Dignity',
      description: 'We treat every person with respect and fairness, and we operate with purpose, integrity, and belief beyond profit.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      ),
    },
    {
      letter: 'I',
      title: 'Industry',
      description: 'We apply discipline, excellence, and accountability in all we do, and we serve with grace, listen deeply, and learn continuously.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Our Values</h1>
          <p>Innovation, Dignity, Industry</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/about">About Us</Link>
          <span className="separator">/</span>
          <span className="current">Our Values</span>
        </div>
      </nav>

      <section className="content-section white-section values-section">
        <div className="container">
          <Link to="/about" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to About
          </Link>
          <div className="section-header">
            <span className="section-label">Our Values</span>
            <h2>Guided by Three Enduring Values</h2>
            <p className="section-subtitle">Our culture is represented by the acronym <strong>IDI</strong></p>
          </div>

          <div className="values-hover-grid">
            {values.map((value, index) => (
              <div key={index} className="value-hover-card">
                <div className="value-hover-icon">
                  {value.icon}
                </div>
                <div className="value-letter-badge">{value.letter}</div>
                <h3>{value.title}</h3>
                <div className="value-hover-content">
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OurValues
