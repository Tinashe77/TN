import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import './MobileBanking.css'

function MobileApp() {
  const sections = [
    {
      id: 'features',
      title: 'App Features',
      subtitle: 'What you can do with the app',
      link: '/for-you/mobile-banking/app/features',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
    },
    {
      id: 'register',
      title: 'How to Register',
      subtitle: 'Get started with the app',
      link: '/for-you/mobile-banking/app/register',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="8.5" cy="7" r="4"/>
          <line x1="20" y1="8" x2="20" y2="14"/>
          <line x1="23" y1="11" x2="17" y2="11"/>
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
          <h1>TN CyberCash App</h1>
          <p>Mobile Banking Application</p>
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
          <span className="current">TN CyberCash App</span>
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
            <h2 style={{ color: '#111827' }}>TN CyberCash App</h2>
            <p style={{ color: '#4b5563', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto' }}>
              Our mobile app is an integrated solution that gives TN CyberTech Bank customers the power to transact <strong>whenever</strong> and <strong>wherever</strong> they are. The App enables paperless and branchless banking.
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

      {/* CTA */}
      <section className="content-section light-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem', color: '#111827' }}>
            Download the TN CyberCash App Today
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Experience seamless banking at your fingertips.
          </p>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            Search for <strong>"TN CyberCash App"</strong> or <strong>"TN CyberTech Bank"</strong> in your app store
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://apps.apple.com/search?term=square+omni" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store
            </a>
            <a href="https://play.google.com/store/search?q=square+omni&c=apps" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
                <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MobileApp
