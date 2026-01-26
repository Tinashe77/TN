import { Link } from 'react-router-dom'
import './Partners.css'

// Partner data with logo paths
const partners = [
  { id: 'world-remit', name: 'World Remit', category: 'Remittance', logo: '/worldremit.jpg' },
  { id: 'thunes', name: 'Thunes', category: 'Remittance', logo: '/thunes.jpg' },
  { id: 'western-union', name: 'Western Union', category: 'Remittance', logo: null },
  { id: 'sasai-remit', name: 'Sasai Remit', category: 'Remittance', logo: '/sasai.jpg' },
  { id: 'money-gram', name: 'Money Gram', category: 'Remittance', logo: '/moneygram.jpg' },
  { id: 'shoprite-send', name: 'Shoprite Send', category: 'Remittance', logo: '/shoprite.jpg' },
  { id: 'hello-paisa', name: 'Hello Paisa', category: 'Remittance', logo: '/hellopaisa.jpg' },
  { id: 'mama-money', name: 'Mama Money', category: 'Remittance', logo: '/mamamoney.jpg' },
  { id: 'master-remit', name: 'Master Remit', category: 'Remittance', logo: '/masterremit.jpg' },
  { id: 'ria', name: 'Ria', category: 'Remittance', logo: '/riamoney.jpg' },
  { id: 'econet', name: 'Econet', category: 'Technology', logo: '/econet.jpg' },
  { id: 'ecocash', name: 'EcoCash', category: 'Mobile Money', logo: '/ecocash.jpg' },
  { id: 'visa', name: 'VISA', category: 'Payments', logo: null },
  { id: 'zimswitch', name: 'Zimswitch', category: 'Payments', logo: null },
]

function Partners() {
  return (
    <div className="partners-page">
      {/* Header */}
      <header className="partners-header">
        <Link to="/" className="header-logo">
          <img src="/bank-logo.png" alt="TN CyberTech Bank" className="header-logo-img" />
        </Link>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <a href="#" className="nav-link">For You</a>
          <a href="#" className="nav-link">For Business</a>
          <Link to="/partners" className="nav-link active">Partners</Link>
          <a href="#" className="nav-link">Contact</a>
        </nav>
      </header>

      {/* Hero Banner */}
      <section className="partners-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Partners</h1>
          <p>Working Together for Your Financial Success</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="breadcrumb-bar">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <span className="current">Partners</span>
        </div>
      </div>

      {/* Partners Introduction */}
      <section className="partners-intro">
        <div className="container">
          <div className="intro-content">
            <span className="section-label">Strategic Partnerships</span>
            <h2>Trusted Partners, Global Reach</h2>
            <p>
              TN CyberTech Bank has established strong partnerships with leading financial
              institutions and technology providers worldwide. These partnerships enable us
              to offer our customers seamless international remittances, secure payment
              solutions, and innovative banking services.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="partners-grid-section">
        <div className="container">
          <div className="partners-grid">
            {partners.map((partner) => (
              <Link
                to={`/partners/${partner.id}`}
                key={partner.id}
                className="partner-card"
              >
                <div className="partner-logo-container">
                  {partner.logo ? (
                    <img src={partner.logo} alt={partner.name} className="partner-logo-img" />
                  ) : (
                    <div className="partner-logo-placeholder">
                      <span>{partner.name.split(' ').map(w => w[0]).join('').slice(0, 2)}</span>
                    </div>
                  )}
                </div>
                <div className="partner-info">
                  <h3>{partner.name}</h3>
                  <span className="partner-category">{partner.category}</span>
                </div>
                <div className="partner-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partners-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Become a Partner</h2>
            <p>
              Interested in partnering with TN CyberTech Bank? We're always looking for
              innovative partners to expand our ecosystem and deliver more value to our customers.
            </p>
            <a href="mailto:partnerships@tncybertechbank.co.zw" className="cta-button">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="partners-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/icon.png" alt="TN CyberTech Bank" />
              <span>TN CyberTech Bank Limited</span>
            </div>
            <p className="footer-legal">
              &copy; 2026 TN CyberTech Bank Limited. A Registered Commercial Bank | Member of the Deposit Protection Corporation
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Partners
