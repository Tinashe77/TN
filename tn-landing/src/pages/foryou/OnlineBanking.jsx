import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import './MobileBanking.css'

function OnlineBanking() {
  const sections = [
    {
      id: 'individuals',
      title: 'For Individuals',
      subtitle: 'Personal online banking',
      link: '/for-you/mobile-banking/online/individuals',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
    },
    {
      id: 'businesses',
      title: 'For Businesses',
      subtitle: 'Corporate online banking',
      link: '/for-you/mobile-banking/online/businesses',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero" style={{ backgroundImage: "url('/banners/mobile-banking.jpg')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Internet Banking</h1>
          <p>Online Banking Portal</p>
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
          <span className="current">Internet Banking</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-you/mobile-banking" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Mobile Banking
          </Link>

          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: '#111827' }}>Online Banking Portal</h2>
            <p style={{ color: '#4b5563', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto' }}>
              The online banking portal is user-friendly. The online banking portal has the following functionalities.
            </p>
          </div>

          <div className="mobile-banking-hub-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {sections.map((section) => (
              <Link to={section.link} key={section.id} className="mobile-banking-hub-card">
                <div className="mobile-banking-hub-icon">
                  {section.icon}
                </div>
                <h3>{section.title}</h3>
                <p>{section.subtitle}</p>
                <span className="mobile-banking-hub-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section light-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: '#111827', marginBottom: '0.75rem' }}>
            Already Registered?
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
            Log in to your TN CyberTech Bank Online Banking account.
          </p>
          <a
            href="https://banking.tncybertechbank.co.zw/login#/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn-primary"
            style={{ fontSize: '1.0625rem', padding: '0.875rem 2.5rem' }}
          >
            Login to Online Banking
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OnlineBanking
