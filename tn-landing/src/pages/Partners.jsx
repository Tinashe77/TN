import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Partners.css'

// Partner data with logo paths - order: EcoCash, Econet, Visa, Zimswitch
const partners = [
  { id: 'ecocash', name: 'EcoCash', category: 'Mobile Money', logo: '/ecocash.jpg', link: null },
  { id: 'econet', name: 'Econet', category: 'Technology', logo: '/econet.jpg', link: null },
  { id: 'visa', name: 'Visa', category: 'Payment Network', logo: '/visa.jpg', link: '/partners/visa-cards' },
  { id: 'zimswitch', name: 'Zimswitch', category: 'Payment Network', logo: '/zimswitch.jpg', link: '/partners/zimswitch-cards' },
]

function Partners() {
  return (
    <div className="partners-page">
      <Header />

      {/* Hero Banner */}
      <section className="partners-hero" style={{ background: "url('/banners/PARTNER.jpg') no-repeat center center", backgroundSize: 'cover' }}>
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
            {partners.map((partner) => {
              const CardContent = (
                <>
                  <div className="partner-logo-container">
                    {partner.logo ? (
                      <img src={partner.logo} alt={partner.name} className="partner-logo-img" />
                    ) : (
                      <div className="partner-logo-placeholder">
                        {partner.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="partner-info">
                    <h3>{partner.name}</h3>
                    <span className="partner-category">{partner.category}</span>
                  </div>
                  {partner.link && (
                    <div className="partner-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </div>
                  )}
                </>
              )

              return partner.link ? (
                <Link key={partner.id} to={partner.link} className="partner-card">
                  {CardContent}
                </Link>
              ) : (
                <div key={partner.id} className="partner-card partner-card-static">
                  {CardContent}
                </div>
              )
            })}
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
