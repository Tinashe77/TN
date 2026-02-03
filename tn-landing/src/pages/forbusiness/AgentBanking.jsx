import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function AgentBanking() {
  const sections = [
    {
      id: 'about',
      title: 'About Agency Banking',
      subtitle: 'Benefits and overview',
      link: '/for-business/agents/about',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4M12 8h.01"/>
        </svg>
      ),
    },
    {
      id: 'services',
      title: 'Agency Services',
      subtitle: 'Transactions you can process',
      link: '/for-business/agents/services',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
    },
    {
      id: 'sole-trader',
      title: 'For Sole Traders',
      subtitle: 'Application requirements',
      link: '/for-business/agents/sole-trader',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
    },
    {
      id: 'corporate',
      title: 'For Corporates',
      subtitle: 'Application requirements',
      link: '/for-business/agents/corporate',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"/>
          <path d="M1 21h22"/>
          <path d="M9 7h6M9 11h6M9 15h6"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero" style={{ backgroundImage: "url('/banners/Business.jpg')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Agency Banking</h1>
          <p>Earn income by processing customer transactions on behalf of the Bank.</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <span className="current">Agency Banking</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <span className="section-label">Become an Agent</span>
            <h2>Partner With TN CyberTech Bank</h2>
            <p style={{ color: '#6b7280', maxWidth: '800px', margin: '1rem auto 2rem', lineHeight: '1.8' }}>
              The Agency Banking channel enables sole traders and companies to earn income by processing customer transactions on behalf of the Bank. Registered agents will be given access to the bank's systems and will be able to process various transactions.
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
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
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
          <h2>Apply to be an Agent</h2>
          <p>Our Agent Banking Team operates from 79 Oliver Tambo Avenue, Harare.</p>
        </div>
      </section>

      <section className="content-section white-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: '#4b5563', marginBottom: '2rem' }}>
            Telephone: <strong style={{ color: 'rgb(174, 106, 6)' }}>+263 8677020267</strong> or <strong style={{ color: 'rgb(174, 106, 6)' }}>+263 4 720677 / 720680</strong>
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:agentbanking@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
              Email Agency Banking
            </a>
            <a href="tel:+2638677020267" className="cta-btn cta-btn-secondary">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AgentBanking
