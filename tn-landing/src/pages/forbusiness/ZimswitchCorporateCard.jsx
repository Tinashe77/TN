import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function ZimswitchCorporateCard() {
  const features = [
    '24-hour access to your business funds',
    'Wide network of retailers and ATMs',
    'Dual-currency card (USD & ZWG)',
    'Cash-back facility at POS terminals',
    'Over-the-counter transactions',
    'Zimswitch network acceptance nationwide',
    'No need to carry cash for business expenses',
    'Instant card issuance at our branches',
  ]

  const cardTypes = [
    {
      title: 'Corporate Account Card',
      description: 'Linked directly to your corporate business account. Provides seamless access to business funds in both USD and ZWG through a single, dual-currency card.',
      features: ['Full KYC business accounts', 'Dual-currency (USD & ZWG)', 'Standard business limits'],
    },
    {
      title: 'Corporate Platinum Card',
      description: 'For high-volume business accounts requiring higher transaction limits. Linked to platinum business accounts with enhanced features.',
      features: ['High-volume businesses', 'Higher transaction limits', 'Priority service'],
    },
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero" style={{ backgroundImage: "url('/banners/zimswitch card.jpg')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Zimswitch Corporate Card</h1>
          <p>Local business transactions made easy</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <span className="current">Zimswitch Corporate Card</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-business" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to For Business
          </Link>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Hero Section */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(174, 106, 6, 0.05) 100%)',
              border: '2px solid rgba(255, 222, 74, 0.3)',
              borderRadius: '24px',
              padding: '3rem',
              marginBottom: '3rem',
              textAlign: 'center',
            }}>
              <h2 style={{ color: '#111827', fontSize: '1.75rem', marginBottom: '0.75rem' }}>Zimswitch Corporate Card</h2>
              <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
                The TN CyberTech Zimswitch Corporate Card is a dual account card linked directly to your business USD and Local Currency accounts. Instantly issued at our branches, this card empowers your business to transact 24/7 at any Point of Sale (POS) terminal or ATM displaying the TN Cybertech Bank or Zimswitch logo.
              </p>
            </div>

            {/* Card Types */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#111827',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}>Card Options</h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '1.5rem',
              }}>
                {cardTypes.map((card, index) => (
                  <div key={index} style={{
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '16px',
                    padding: '2rem',
                  }}>
                    <h4 style={{ color: '#111827', fontSize: '1.25rem', marginBottom: '0.75rem' }}>{card.title}</h4>
                    <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '0.9375rem' }}>
                      {card.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}>
                      {card.features.map((feature, i) => (
                        <span key={i} style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.5rem 0.75rem',
                          background: 'rgba(174, 106, 6, 0.1)',
                          borderRadius: '20px',
                          fontSize: '0.8125rem',
                          color: 'rgb(174, 106, 6)',
                          fontWeight: '500',
                        }}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ width: '12px', height: '12px' }}>
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div style={{ marginBottom: '3rem' }}>
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
                {features.map((feature, index) => (
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
              <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '1rem' }}>Get your corporate card today</h3>
              <p style={{ color: '#9ca3af', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                To experience ultimate swiping convenience for your business, please call our Customer Contact Centre on <a href="tel:08088888" style={{ color: 'rgb(255, 222, 74)' }}>0808 8888</a> or simply go to your closest TN CyberTech Bank Branch and collect your card today.
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

export default ZimswitchCorporateCard
