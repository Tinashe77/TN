import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Partners.css'
import './CardsGallery.css'

const zimswitchCards = [
  {
    name: 'iSave Card',
    image: '/zimswitch-cards/isave-card.png',
    description: 'Savings account card for secure transactions'
  },
  {
    name: 'iSave USD Card',
    image: '/zimswitch-cards/isave-usd.png',
    description: 'USD savings account card'
  },
  {
    name: 'Current Account Card',
    image: '/zimswitch-cards/current.png',
    description: 'Standard current account debit card'
  },
  {
    name: 'Corporate Card',
    image: '/zimswitch-cards/corporate.png',
    description: 'Business card for corporate accounts'
  },
  {
    name: 'Platinum Card',
    image: '/zimswitch-cards/platinum.png',
    description: 'Premium Zimswitch card with enhanced features'
  },
]

function ZimswitchCardsGallery() {
  return (
    <div className="partners-page cards-gallery-page">
      <Header />

      {/* Hero Banner */}
      <section className="partners-hero" style={{ background: "url('/banners/zimswitch card.jpg') no-repeat center center", backgroundSize: 'cover' }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Zimswitch Cards</h1>
          <p>Local Transactions Made Easy</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="breadcrumb-bar">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/partners">Partners</Link>
          <span className="separator">/</span>
          <span className="current">Zimswitch Cards</span>
        </div>
      </div>

      {/* Cards Introduction */}
      <section className="partners-intro">
        <div className="container">
          <div className="intro-content">
            <span className="section-label">Zimswitch Partnership</span>
            <h2>Our Zimswitch Card Collection</h2>
            <p>
              Zimswitch is Zimbabwe's national switch enabling seamless transactions across all local banks and ATMs.
              Our range of Zimswitch cards ensures you can access your funds and make payments at any point of sale
              or ATM across the country.
            </p>
          </div>
        </div>
      </section>

      {/* Cards Gallery Grid */}
      <section className="cards-gallery-section">
        <div className="container">
          <div className="cards-gallery-grid">
            {zimswitchCards.map((card, index) => (
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
            <h2>Get Your Zimswitch Card Today</h2>
            <p>
              Open an account with TN CyberTech Bank and receive your Zimswitch card for convenient
              local transactions at any ATM or point of sale in Zimbabwe.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/for-you/cards/zimswitch" className="cta-button">
                View Personal Cards
              </Link>
              <Link to="/for-business/zimswitch-corporate-card" className="cta-button" style={{ background: 'transparent', border: '2px solid rgb(255, 222, 74)', color: 'rgb(255, 222, 74)' }}>
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

export default ZimswitchCardsGallery
