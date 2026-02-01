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
