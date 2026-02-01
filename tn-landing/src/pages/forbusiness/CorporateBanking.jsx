import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function CorporateBanking() {
  const sections = [
    {
      id: 'healthcare',
      title: 'Healthcare Financing',
      subtitle: 'Private healthcare development',
      link: '/for-business/corporate/healthcare',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
    },
    {
      id: 'renewable-energy',
      title: 'Renewable Energy Financing',
      subtitle: 'Clean and affordable energy solutions',
      link: '/for-business/corporate/renewable-energy',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ),
    },
    {
      id: 'exporters',
      title: 'Exporters Financing',
      subtitle: 'Export-oriented business funding',
      link: '/for-business/corporate/exporters',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
    },
    {
      id: 'advisory',
      title: 'Research, Capital Markets & Advisory',
      subtitle: 'Expert financial advisory services',
      link: '/for-business/corporate/advisory',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="12" y1="20" x2="12" y2="10"/>
          <line x1="18" y1="20" x2="18" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="16"/>
        </svg>
      ),
    },
    {
      id: 'products',
      title: 'Product Offerings',
      subtitle: 'Working capital, mortgages & asset finance',
      link: '/for-business/corporate/products',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
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
          <h1>Corporate & Investment Banking</h1>
          <p>Strategic financing solutions for high-value corporate clients</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <span className="current">Corporate & Investment Banking</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <span className="section-label">CIB Division</span>
            <h2>Serving High-Value Corporate Clients</h2>
            <p style={{ color: '#6b7280', maxWidth: '800px', margin: '1rem auto 2rem', lineHeight: '1.8' }}>
              The Corporate and Investment Banking (CIB) division serves high-value corporate clients, including large corporations, financial institutions, institutional investors, financial sponsors, public-sector organizations, and exporters.
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
                <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1"/>
                <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
              </svg>
            </div>
          </div>

          <div className="about-hub-grid">
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
          <h2>Partner with Our CIB Team</h2>
          <p>Let us help your business achieve sustainable growth with our corporate financing solutions.</p>
        </div>
      </section>

      <section className="content-section white-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:businessbanking@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
              Contact CIB Team
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

export default CorporateBanking
