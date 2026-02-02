import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/PageStyles.css'
import './About.css'

function Diaspora() {
  const sections = [
    {
      id: 'accounts',
      title: 'Diaspora Accounts',
      subtitle: 'Current & Savings FCA',
      link: '/diaspora/accounts',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      ),
    },
    {
      id: 'benefits',
      title: 'Account Benefits',
      subtitle: 'Features & requirements',
      link: '/diaspora/benefits',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      ),
    },
    {
      id: 'remittances',
      title: 'International Remittances',
      subtitle: 'Send & receive globally',
      link: '/diaspora/remittances',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
    },
    {
      id: 'partners',
      title: 'Remittance Partners',
      subtitle: 'Our global partners',
      link: '/diaspora/partners',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero" style={{ backgroundImage: "url('/banners/diaspora.png')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Diaspora Banking</h1>
          <p>Tailored banking solutions for Zimbabweans living abroad</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <span className="current">Diaspora Banking</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <span className="section-label">Diaspora Banking</span>
            <h2>Stay Connected to Home</h2>
            <p style={{ color: '#6b7280', maxWidth: '800px', margin: '1rem auto 2rem', lineHeight: '1.8' }}>
              Open a TN CyberTech Bank Diaspora FCA Account today and unlock unparalleled convenience with our exclusive diaspora offering. This unique service allows individuals to make direct payments to family and friends both within and outside Zimbabwe, as well as to local suppliers, ensuring seamless financial management.
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
          <h2>Ready to Get Started?</h2>
          <p>TN CyberTech Bank is committed to making your life easier.</p>
        </div>
      </section>

      <section className="content-section white-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: '#4b5563', marginBottom: '2rem' }}>
            Email: <strong style={{ color: 'rgb(174, 106, 6)' }}>diaspora@tncybertechbank.co.zw</strong>
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:diaspora@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
              Contact Diaspora Team
            </a>
            <Link to="/contact" className="cta-btn cta-btn-secondary">
              Find a Branch
            </Link>
          </div>
          <p style={{ color: 'rgb(174, 106, 6)', marginTop: '1.5rem', fontWeight: '500' }}>
            TN CyberTech - The Future of Banking!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Diaspora
