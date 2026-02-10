import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Partners.css'
import './CardsGallery.css'

const visaCards = [
  {
    name: 'Visa Debit Card',
    image: '/visa-cards/debit.png',
    description: 'Standard Visa debit card for everyday transactions'
  },
  {
    name: 'Visa Debit Blue Card',
    image: '/visa-cards/debit-blue.png',
    description: 'Classic blue debit card with global acceptance'
  },
  {
    name: 'Visa Prepaid Card',
    image: '/visa-cards/prepaid.png',
    description: 'Reloadable prepaid card for controlled spending'
  },
  {
    name: 'Visa Classic Prepaid Card',
    image: '/visa-cards/classic-prepaid.png',
    description: 'Classic prepaid card with Visa benefits'
  },
  {
    name: 'Visa Credit Card',
    image: '/visa-cards/credit.png',
    description: 'Standard credit card for purchases and cash advances'
  },
  {
    name: 'Visa Credit Classic',
    image: '/visa-cards/credit-visa.png',
    description: 'Classic Visa credit card with rewards'
  },
  {
    name: 'Visa Infinite Credit Card',
    image: '/visa-cards/infinite-credit.png',
    description: 'Premium credit card with exclusive benefits'
  },
]

function VisaCardsGallery() {
  return (
    <div className="partners-page cards-gallery-page">
      <Header />

      {/* Hero Banner */}
      <section className="partners-hero" style={{ background: "url('/banners/Visa card.jpg') no-repeat center center", backgroundSize: 'cover' }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Visa Cards</h1>
          <p>Global Acceptance, Local Convenience</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="breadcrumb-bar">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/partners">Partners</Link>
          <span className="separator">/</span>
          <span className="current">Visa Cards</span>
        </div>
      </div>

      {/* Cards Introduction */}
      <section className="partners-intro">
        <div className="container">
          <div className="intro-content">
            <span className="section-label">Visa Partnership</span>
            <h2>Our Visa Card Collection</h2>
            <p>
              TN CyberTech Bank offers a comprehensive range of Visa cards to suit your financial needs.
              Whether you're looking for a debit card for everyday purchases, a prepaid card for budgeting,
              or a credit card with premium benefits, we have the right card for you.
            </p>
          </div>
        </div>
      </section>

      {/* Cards Gallery Grid */}
      <section className="cards-gallery-section">
        <div className="container">
          <div className="cards-gallery-grid">
            {visaCards.map((card, index) => (
              <div key={index} className="card-gallery-item">
                <div className="card-image-container">
                  <img src={card.image} alt={card.name} />
                </div>
                <div className="card-gallery-info">
                  <h3>{card.name}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partners-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Apply for a Visa Card Today</h2>
            <p>
              Visit any TN CyberTech Bank branch or contact us to apply for your preferred Visa card.
              Our team will guide you through the application process.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/for-you/cards/visa" className="cta-button">
                View Personal Cards
              </Link>
              <Link to="/for-business/visa-corporate-card" className="cta-button" style={{ background: 'transparent', border: '2px solid rgb(255, 222, 74)', color: 'rgb(255, 222, 74)' }}>
                View Corporate Cards
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default VisaCardsGallery
