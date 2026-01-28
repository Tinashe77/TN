import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function ForBusiness() {
  const services = [
    {
      title: 'Business Accounts',
      description: 'Sole Trader, SME, Corporate, and Non-profit accounts tailored to your business needs.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"/>
          <path d="M1 21h22"/>
          <path d="M9 7h6"/>
          <path d="M9 11h6"/>
          <path d="M9 15h6"/>
        </svg>
      ),
      link: '/for-business/accounts',
    },
    {
      title: 'Merchant Services - POS',
      description: 'Point of Sale Machines and POS application support.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M2 10h20"/>
        </svg>
      ),
      link: '/for-business/merchant',
    },
    {
      title: 'Business Loans',
      description: 'Working capital, commercial mortgages, asset finance, and bank guarantees.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      link: '/for-business/loans',
    },
    {
      title: 'Corporate & Investment Banking',
      description: 'Corporate banking, research, capital markets and advisory services.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1"/>
          <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
        </svg>
      ),
      link: '/for-business/corporate',
    },
    {
      title: 'Visa Corporate Card',
      description: 'Reloadable international prepaid card for secure global transactions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M2 10h20"/>
        </svg>
      ),
      link: '/for-business/visa-corporate-card',
    },
    {
      title: 'International Banking',
      description: 'Exchange control, international payments, and structured finance solutions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      link: '/for-business/international',
    },
    {
      title: 'Agent Banking',
      description: 'Become a TN CyberTech Bank agent and earn from processing transactions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      link: '/for-business/agents',
    },
  ]

  const sectors = [
    { name: 'Healthcare', desc: 'Diagnostic centers, hospitals, clinics, laboratories, and specialist practitioners' },
    { name: 'Renewable Energy', desc: 'Solar installations, waste management, and smart city projects' },
    { name: 'Exporters/Foreign Currency Generators', desc: 'Agriculture, mining, and tourism export businesses' },
  ]

  return (
    <div className="page-container">
      <Header />

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Business Banking</h1>
          <p>Comprehensive financial solutions to power your business growth.</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <span className="current">For Business</span>
        </div>
      </nav>

      {/* Services Grid */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Services</span>
            <h2>Banking Solutions for Every Business</h2>
            <p>From SMEs to large corporates, we provide tailored financial services to help your business thrive.</p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <Link to={service.link} key={service.title} className="service-card">
                <div className="service-card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-card-arrow">
                  Learn More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="content-section dark-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label light">Strategic Focus</span>
            <h2>Industries We Serve</h2>
            <p>Our Corporate Banking Unit has a strategic focus on key sectors driving Zimbabwe's economy.</p>
          </div>

          <div className="services-grid">
            {sectors.map((sector) => (
              <div key={sector.name} className="service-card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 style={{ color: 'rgb(174, 106, 6)' }}>{sector.name}</h3>
                <p style={{ color: '#9ca3af' }}>{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section white-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem', color: '#111827' }}>
            Ready to Grow Your Business?
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Our dedicated business banking team is ready to help you succeed.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/for-business/accounts" className="cta-btn cta-btn-primary">
              Open a Business Account
            </Link>
            <Link to="/contact" className="cta-btn cta-btn-secondary">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ForBusiness
