import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import './Cards.css'

function Cards() {
  const visaKeyFeatures = [
    { title: 'Global Acceptance', desc: 'Use anywhere VISA is accepted worldwide' },
    { title: 'Multi-Currency', desc: 'Pay in any currency internationally' },
    { title: 'Security & Protection', desc: 'Block/unblock instantly if lost' },
    { title: '3D Secure', desc: 'Enhanced authentication for online payments' },
    { title: 'EMV Chip', desc: 'Fraud prevention for in-person transactions' },
    { title: 'Contactless', desc: 'Tap and go for fast payments' },
  ]

  const visaCards = [
    {
      name: 'VISA Globetrotter Prepaid',
      type: 'Prepaid',
      limit: 'USD 10,000/month',
      features: [
        'Instant Issuance - No bank account needed',
        'Load via RTGS, ZIPIT, or mobile wallets',
        'Receive funds via VISA Direct',
        'Card-to-card transfers via *236#',
        'No monthly fees',
      ],
    },
    {
      name: 'VISA Debit Gold',
      type: 'Debit',
      limit: 'USD 100,000/month',
      features: [
        'Linked to your nostro account',
        'PIN management via Square Omni app',
        'Up to 2 supplementary cards',
        'Seamless USD spending',
      ],
    },
    {
      name: 'VISA Debit Infinite',
      type: 'Premium Debit',
      limit: 'USD 250,000/month',
      premium: true,
      features: [
        'Up to 12% off hotel bookings via Agoda',
        'Access to 1,200+ airport lounges',
        'Exclusive car hire services',
        'Comprehensive travel insurance',
        'Visa Concierge services',
      ],
    },
    {
      name: 'VISA Credit Classic',
      type: 'Credit',
      limit: 'USD 20,000/month',
      features: [
        'No USD account required',
        'Card-to-card transfers',
        'Receive funds via VISA Direct',
        'Flexible funding options',
      ],
    },
    {
      name: 'VISA Credit Infinite',
      type: 'Premium Credit',
      limit: 'USD 250,000/month',
      premium: true,
      features: [
        'No monthly fees',
        'Up to 12% off hotel bookings',
        'Worldwide lounge access (1,200+)',
        'Travel insurance & medical assistance',
        'Visa Concierge services',
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
          <h1>Cards</h1>
          <p>Zimswitch and VISA cards for local and global transactions.</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-you">For You</Link>
          <span className="separator">/</span>
          <span className="current">Cards</span>
        </div>
      </nav>

      {/* Zimswitch Card */}
      <section className="content-section white-section">
        <div className="container">
          <div className="two-col-layout">
            <div>
              <span className="section-label">Local Transactions</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1rem' }}>
                Zimswitch Debit Card
              </h2>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                The TN CyberTech Bank Debit Card allows customers to transact from any Point of Sale (POS) machine with the TN CyberTech Bank or Zimswitch sign.
              </p>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Customers have 24-hour access to money from a wide network of retailers across the country. No need to carry cash to make payments for bills, groceries or fuel.
              </p>

              <ul className="feature-list">
                <li>
                  <span className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  Access cash-back facility from any POS machine
                </li>
                <li>
                  <span className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  Transact over the counter at any branch
                </li>
                <li>
                  <span className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  No cash withdrawal slips needed
                </li>
              </ul>

              <div style={{ marginTop: '2rem', padding: '1rem', background: '#f9fafb', borderRadius: '12px' }}>
                <p style={{ color: '#4b5563', fontSize: '0.9rem' }}>
                  <strong>Get your card today:</strong> Call <a href="tel:08088888" style={{ color: 'rgb(174, 106, 6)' }}>0808 8888</a> or visit your nearest branch.
                </p>
              </div>
            </div>

            <div className="card-visual">
              <div className="card-mock zimswitch">
                <img src="/zimswitch.jpg" alt="Zimswitch" style={{ width: '80px', marginBottom: '1rem' }} />
                <span>Zimswitch Debit Card</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISA Cards Section */}
      <section className="content-section dark-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label light">Global Payments</span>
            <h2>TN CyberTech Bank VISA Cards</h2>
            <p>Empowering your global payments - shop in-store, online, or withdraw cash worldwide.</p>
          </div>

          {/* Key Features */}
          <div className="visa-features-grid">
            {visaKeyFeatures.map((feature) => (
              <div key={feature.title} className="visa-feature">
                <div className="visa-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISA Cards List */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <h2>Choose Your VISA Card</h2>
          </div>

          <div className="visa-cards-grid">
            {visaCards.map((card) => (
              <div key={card.name} className={`visa-card ${card.premium ? 'premium' : ''}`}>
                {card.premium && <div className="premium-badge">Premium</div>}
                <div className="visa-card-header">
                  <img src="/visa.jpg" alt="VISA" style={{ height: '24px' }} />
                  <span className="card-type">{card.type}</span>
                </div>
                <h3>{card.name}</h3>
                <div className="card-limit">
                  <span>Monthly Limit</span>
                  <strong>{card.limit}</strong>
                </div>
                <ul className="card-features">
                  {card.features.map((feature) => (
                    <li key={feature}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="card-cta">Apply Now</Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Email us at <a href="mailto:cards@tncybertechbank.co.zw" style={{ color: 'rgb(174, 106, 6)' }}>cards@tncybertechbank.co.zw</a>
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="content-section light-section">
        <div className="container">
          <div className="section-header">
            <h2>Card Services</h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
              </div>
              <h3>FCA to VISA Transfer</h3>
              <p>Transfer funds from your FC Account to your Visa Globetrotter card via Internet Banking or Mobile App. Fee: 1% (min $1, max $1.50)</p>
            </div>

            <div className="service-card">
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h3>Digital Card Linking</h3>
              <p>Link your Zimswitch card to a USD account via the Square App for seamless multi-currency access.</p>
            </div>

            <div className="service-card">
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Card Security</h3>
              <p>Block or unblock your card instantly via the app. Report lost/stolen cards: 0808 8888 or cardcentre@tncybertechbank.co.zw</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Link */}
      <section className="content-section white-section" style={{ textAlign: 'center', padding: '2rem 0' }}>
        <div className="container">
          <Link to="/for-you/cards/terms" className="cta-btn cta-btn-secondary" style={{ border: '1px solid #e5e7eb', color: '#6b7280' }}>
            View Card Terms & Conditions
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Cards
