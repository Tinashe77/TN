import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function ZimswitchCard() {
  const [activeTab, setActiveTab] = useState('isave')

  const cardTypes = [
    {
      id: 'isave',
      title: 'iSave Account Card',
      description: `The TN CyberTech Zimswitch debit iSave card is a locally issued card linked directly to customer's iSave Bank account. It is available for KYC Lite customers. The card transacts only in local currency.`,
      features: ['KYC Lite customers', 'Linked to iSave account', 'Local currency transactions only'],
    },
    {
      id: 'isave-usd',
      title: 'iSave USD Account Card',
      description: `The TN CyberTech Zimswitch debit iSave USD card is a locally issued card linked directly to customer's iSave USD Bank account. It is available for KYC Lite customers. The card transacts only in USD.`,
      features: ['KYC Lite customers', 'Linked to iSave USD account', 'USD transactions only'],
    },
    {
      id: 'current',
      title: 'Current Account Card',
      description: `The TN CyberTech Zimswitch debit current account card is a locally issued card linked directly to customer's TN CyberTech Bank account. It is available for full KYC customers. The card provides seamless access to customer's funds in both USD and ZWG through a single, dual-currency card.`,
      features: ['Full KYC customers', 'Dual-currency card (USD & ZWG)', 'Linked to current account'],
    },
    {
      id: 'platinum',
      title: 'Platinum Account Card',
      description: `The TN CyberTech Zimswitch debit platinum account card is a locally issued card linked directly to customer's platinum Bank account. It is available for full KYC and High Valued Customers (HVC). The card provides seamless access to higher limits in both USD and local currency through a single, dual-currency card.`,
      features: ['Full KYC & HVC customers', 'Higher transaction limits', 'Dual-currency card (USD & ZWG)'],
    },
  ]

  const activeCard = cardTypes.find(card => card.id === activeTab)

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero" style={{ backgroundImage: "url('/banners/zimswitch card.jpg')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Zimswitch Debit Card</h1>
          <p>Local Transactions</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-you">For You</Link>
          <span className="separator">/</span>
          <Link to="/for-you/cards">Cards</Link>
          <span className="separator">/</span>
          <span className="current">Zimswitch Debit Card</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-you/cards" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Cards
          </Link>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Hero Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(174, 106, 6, 0.05) 100%)',
              border: '2px solid rgba(255, 222, 74, 0.3)',
              borderRadius: '24px',
              padding: '3rem',
              marginBottom: '3rem',
              textAlign: 'center',
            }}>
              <h2 style={{ color: '#111827', fontSize: '1.75rem', marginBottom: '0.75rem' }}>Zimswitch Debit Card</h2>
              <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
                The TN CyberTech Zimswitch Debit Card is a dual account card linked directly to TN CyberTech Bank's USD and Local Currency accounts. Instantly issued at our branches, this card empowers customers to transact 24/7 at any Point of Sale (POS) terminal or ATM displaying the TN Cybertech Bank or Zimswitch logo.
              </p>
            </div>

            {/* Card Type Tabs */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#111827',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}>Choose Your Card Type</h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem',
              }}>
                {cardTypes.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => setActiveTab(card.id)}
                    style={{
                      padding: '1.25rem',
                      background: activeTab === card.id ? 'rgb(174, 106, 6)' : '#fff',
                      border: activeTab === card.id ? 'none' : '1px solid #e5e7eb',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <h4 style={{
                      color: activeTab === card.id ? '#fff' : '#111827',
                      fontSize: '1rem',
                      fontWeight: '600',
                      marginBottom: '0.25rem',
                    }}>
                      {card.title}
                    </h4>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Card Details */}
            <div style={{
              background: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '2rem',
            }}>
              <h3 style={{ color: '#111827', fontSize: '1.25rem', marginBottom: '1rem' }}>{activeCard.title}</h3>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1rem' }}>
                {activeCard.description}
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}>
                {activeCard.features.map((feature, index) => (
                  <span key={index} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    background: 'rgba(174, 106, 6, 0.1)',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    color: 'rgb(174, 106, 6)',
                    fontWeight: '500',
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ width: '14px', height: '14px' }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#111827',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}>Key Benefits</h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem',
              }}>
                {[
                  '24-hour access to your money',
                  'Countrywide ATM access for cash withdrawals',
                  'Wide network of retailers',
                  'No need to carry cash',
                  'Cash-back facility at POS',
                  'Over-the-counter transactions',
                  'Zimswitch network acceptance',
                ].map((feature, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '1rem 1.25rem',
                    background: '#f9fafb',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb',
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="rgb(174, 106, 6)" strokeWidth="3" style={{
                      width: '20px',
                      height: '20px',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span style={{ color: '#4b5563', fontSize: '0.9375rem' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Get Your Card */}
            <div style={{
              background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
            }}>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '1rem' }}>Get your card today</h3>
              <p style={{ color: '#9ca3af', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                To experience ultimate swiping convenience, please call our Customer Contact Centre on <a href="tel:08088888" style={{ color: 'rgb(255, 222, 74)' }}>0808 8888</a> or simply go to your closest TN CyberTech Bank Branch, or agent and collect your card today.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/contact" className="cta-btn cta-btn-primary">
                  Find a Branch
                </Link>
                <a href="tel:08088888" className="cta-btn cta-btn-secondary">
                  Call 0808 8888
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ZimswitchCard
