import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function ForYou() {
  const services = [
    {
      title: 'Mobile Banking',
      description: 'Bank anytime, anywhere with our mobile app, online banking, and USSD services.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12" y2="18"/>
        </svg>
      ),
      link: '/for-you/mobile-banking',
    },
    {
      title: 'Personal Accounts',
      description: 'From savings to current accounts, find the right account for your needs.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      link: '/for-you/accounts',
    },
    {
      title: 'Cards',
      description: 'Zimswitch and VISA cards for local and international transactions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      ),
      link: '/for-you/cards',
    },
    {
      title: 'Micro Loans',
      description: 'Quick loans disbursed in under 60 seconds via *236# or *151#.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      link: '/for-you/loans',
    },
  ]

  const features = [
    { title: 'Digital First', desc: 'Open accounts and transact from your phone' },
    { title: 'EcoCash Integration', desc: 'Seamless wallet-to-bank transactions' },
    { title: '24/7 Support', desc: 'Customer service available around the clock' },
    { title: 'Instant Cards', desc: 'Get your debit card issued on the spot' },
  ]

  return (
    <div className="page-container">
      <Header />

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Personal Banking</h1>
          <p>Banking solutions designed for your lifestyle. Simple, secure, and always accessible.</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <span className="current">For You</span>
        </div>
      </nav>

      {/* Services Grid */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Services</span>
            <h2>Everything You Need, In One Place</h2>
            <p>From everyday banking to smart savings, we have products tailored for every stage of your life.</p>
          </div>

          <div className="services-grid-4">
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

      {/* Features */}
      <section className="content-section dark-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label light">Why Choose Us</span>
            <h2>Banking That Moves With You</h2>
          </div>

          <div className="services-grid-4">
            {features.map((feature) => (
              <div key={feature.title} className="service-card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 style={{ color: '#fff' }}>{feature.title}</h3>
                <p style={{ color: '#9ca3af' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section white-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem', color: '#111827' }}>
            Ready to Get Started?
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Open your account today and experience the future of banking.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/for-you/accounts" className="cta-btn cta-btn-primary">
              Open an Account
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/contact" className="cta-btn cta-btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ForYou
