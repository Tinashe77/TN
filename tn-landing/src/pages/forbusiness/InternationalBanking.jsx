import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function InternationalBanking() {
  const sections = [
    {
      id: 'exchange-control',
      title: 'Exchange Control',
      subtitle: 'Advice on Exchange Control regulations',
      link: '/for-business/international/exchange-control',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
    },
    {
      id: 'export-import',
      title: 'Export and Import',
      subtitle: 'Working capital and capital expenditure',
      link: '/for-business/international/export-import',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="3" width="15" height="13"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
    },
    {
      id: 'international-payments',
      title: 'International Payments',
      subtitle: 'SWIFT payments worldwide',
      link: '/for-business/international/payments',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
    },
    {
      id: 'trade-finance',
      title: 'Trade Finance',
      subtitle: 'Complex trade finance transactions',
      link: '/for-business/international/trade-finance',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
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
          <h1>International Banking</h1>
          <p>Global reach, local expertise.</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <span className="current">International Banking</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <span className="section-label">International Banking</span>
            <h2>Global Banking Services</h2>
            <p style={{ color: '#6b7280', maxWidth: '800px', margin: '1rem auto 2rem', lineHeight: '1.8' }}>
              TN CyberTech Bank provides comprehensive international banking services to help your business thrive in the global marketplace.
            </p>

            <div className="about-hub-icon" style={{
              width: '160px',
              height: '160px',
              margin: '0 auto 3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" style={{ width: '70px', height: '70px' }}>
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
          </div>

          <div className="about-hub-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {sections.map((section) => (
              <Link to={section.link} key={section.id} className="about-hub-card">
                <div className="about-hub-icon">
                  {section.icon}
                </div>
                <h3>{section.title}</h3>
                <p>{section.subtitle}</p>
                <span className="about-hub-arrow">
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

      <section className="image-break-section">
        <div className="image-break-overlay"></div>
        <div className="image-break-content">
          <h2>Connect with Our International Banking Team</h2>
          <p>Expert guidance for your global banking needs.</p>
        </div>
      </section>

      <section className="content-section white-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:International_Banking@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
              Email International Banking
            </a>
            <Link to="/contact" className="cta-btn cta-btn-secondary">
              Visit a Branch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default InternationalBanking
