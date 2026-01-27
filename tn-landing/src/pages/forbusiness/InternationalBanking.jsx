import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function InternationalBanking() {
  const services = [
    {
      id: 'exchange-control',
      title: 'Exchange Control Services',
      description: 'Expert guidance on foreign exchange regulations and compliance.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      features: [
        'Assistance with foreign currency applications',
        'Foreign investment registration with RBZ',
        'Blocked funds release applications',
        'Importer and exporter registration',
        'Regulatory compliance support',
      ],
    },
    {
      id: 'international-payments',
      title: 'International Payments',
      description: 'Seamless cross-border payment solutions for your business.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 1l4 4-4 4"/>
          <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
          <path d="M7 23l-4-4 4-4"/>
          <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
        </svg>
      ),
      features: [
        'SWIFT payments worldwide',
        'Competitive exchange rates',
        'Same-day processing for urgent transfers',
        'Multi-currency accounts',
        'Real-time payment tracking',
      ],
    },
    {
      id: 'trade-finance',
      title: 'Trade Finance',
      description: 'Comprehensive trade finance solutions to support your import and export activities.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="3" width="22" height="18" rx="2"/>
          <path d="M1 9h22"/>
          <path d="M12 3v18"/>
        </svg>
      ),
      features: [
        'Letters of Credit (Import & Export)',
        'Documentary Collections',
        'Bank Guarantees',
        'Pre-shipment and Post-shipment Finance',
        'Bill Discounting',
      ],
    },
    {
      id: 'structured-finance',
      title: 'Structured Finance',
      description: 'Tailored financing solutions for complex business needs.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 3v18h18"/>
          <path d="M18 17V9"/>
          <path d="M13 17V5"/>
          <path d="M8 17v-3"/>
        </svg>
      ),
      features: [
        'Project Finance',
        'Asset-backed Financing',
        'Syndicated Loans',
        'Acquisition Finance',
        'Custom-structured Facilities',
      ],
    },
  ]

  return (
    <div className="page-container">
      <Header />

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>International Banking</h1>
          <p>Global reach, local expertise. Connect your business to the world.</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <span className="current">International Banking</span>
        </div>
      </nav>

      {/* Intro Section */}
      <section className="content-section white-section">
        <div className="container">
          <div className="two-col-layout">
            <div>
              <span className="section-label">Global Solutions</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1rem' }}>
                Your Gateway to International Trade
              </h2>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                TN CyberTech Bank provides comprehensive international banking services to help your business thrive in the global marketplace. From exchange control compliance to trade finance and international payments, we have the expertise and infrastructure to support your cross-border operations.
              </p>
              <div className="info-card" style={{ background: '#f9fafb' }}>
                <h3>
                  <span className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </span>
                  Authorised Dealer Status
                </h3>
                <p>As an Authorised Dealer in foreign exchange, we are licensed by the Reserve Bank of Zimbabwe to conduct all foreign currency transactions and provide expert guidance on exchange control regulations.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                width: '200px',
                height: '200px',
                background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 60px rgba(255, 222, 74, 0.3)'
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" style={{ width: '80px', height: '80px' }}>
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="content-section light-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Services</span>
            <h2>International Banking Solutions</h2>
            <p>Comprehensive services to support your global business operations.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {services.map((service) => (
              <div key={service.id} className="info-card" id={service.id}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="icon" style={{ width: '40px', height: '40px' }}>
                    {service.icon}
                  </span>
                  {service.title}
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '1rem' }}>{service.description}</p>
                <ul className="feature-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Correspondent Banks */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Global Network</span>
            <h2>Correspondent Banking Relationships</h2>
            <p>We maintain relationships with leading international banks to facilitate seamless cross-border transactions.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem'
          }}>
            {['USD', 'EUR', 'GBP', 'ZAR'].map((currency) => (
              <div key={currency} style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(255, 222, 74, 0.05) 100%)',
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid rgba(255, 222, 74, 0.2)',
              }}>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'rgb(174, 106, 6)', marginBottom: '0.5rem' }}>
                  {currency}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  {currency === 'USD' && 'US Dollar'}
                  {currency === 'EUR' && 'Euro'}
                  {currency === 'GBP' && 'British Pound'}
                  {currency === 'ZAR' && 'South African Rand'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section dark-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Go Global?</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Contact our International Banking team to discuss your cross-border banking needs.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:treasury@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
              Contact Treasury
            </a>
            <Link to="/contact" className="cta-btn cta-btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default InternationalBanking
