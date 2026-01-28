import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
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
      <Header />

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

      <Footer />
    </div>
  )
}

export default Partners
