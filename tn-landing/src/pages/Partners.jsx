import { Link } from 'react-router-dom'
import './Partners.css'

// Partner data with logo paths
const partners = [
  { id: 'econet', name: 'Econet', category: 'Technology', logo: '/econet.jpg' },
  { id: 'ecocash', name: 'EcoCash', category: 'Mobile Money', logo: '/ecocash.jpg' },
  { id: 'churches', name: 'Churches', category: 'Community', logo: null },
  { id: 'tobacco', name: 'Tobacco Companies', category: 'Agriculture', logo: null },
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
          <Link to="/for-you" className="nav-link">For You</Link>
          <Link to="/for-business" className="nav-link">For Business</Link>
          <Link to="/diaspora" className="nav-link">Diaspora</Link>
          <Link to="/partners" className="nav-link active">Partners</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
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
            <h2>Trusted Partners, Shared Vision</h2>
            <p>
              TN CyberTech Bank has established strong partnerships with leading technology
              providers, mobile money platforms, and community organisations. These partnerships
              enable us to embed banking into everyday life and deliver innovative financial
              services to all Zimbabweans.
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
