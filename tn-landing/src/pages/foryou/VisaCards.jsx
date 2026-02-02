import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import './MobileBanking.css'

function VisaCards() {
  const visaKeyFeatures = [
    { title: 'Global Acceptance', desc: 'Use anywhere VISA is accepted worldwide' },
    { title: 'Multi-Currency', desc: 'Pay in any currency internationally' },
    { title: 'Security & Protection', desc: 'Block/unblock instantly if lost' },
    { title: '3D Secure', desc: 'Enhanced authentication for online payments' },
    { title: 'EMV Chip', desc: 'Fraud prevention for in-person transactions' },
    { title: 'Contactless', desc: 'Tap and go for fast payments' },
    { title: 'Worldwide Accessibility', desc: 'Accepted at Visa ATMs, POS terminals, and online payment gateways globally' },
  ]

  const cardTypes = [
    {
      id: 'prepaid',
      title: 'VISA Prepaid',
      subtitle: 'USD 10,000/month limit',
      link: '/for-you/cards/visa/prepaid',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      ),
    },
    {
      id: 'debit',
      title: 'VISA Debit',
      subtitle: 'USD 100,000/month limit',
      link: '/for-you/cards/visa/debit',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
          <circle cx="18" cy="15" r="2"/>
        </svg>
      ),
    },
    {
      id: 'debit-infinite',
      title: 'VISA Debit Infinite',
      subtitle: 'USD 250,000/month limit',
      link: '/for-you/cards/visa/debit-infinite',
      premium: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
          <path d="M16 14l2 2 4-4"/>
        </svg>
      ),
    },
    {
      id: 'credit-classic',
      title: 'VISA Credit Classic',
      subtitle: 'USD 20,000/month limit',
      link: '/for-you/cards/visa/credit-classic',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
          <line x1="6" y1="14" x2="6" y2="14.01"/>
          <line x1="10" y1="14" x2="14" y2="14"/>
        </svg>
      ),
    },
    {
      id: 'credit-infinite',
      title: 'VISA Credit Infinite',
      subtitle: 'USD 250,000/month limit',
      link: '/for-you/cards/visa/credit-infinite',
      premium: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
          <path d="M12 14l1.5 1.5 3-3"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero" style={{ backgroundImage: "url('/banners/Visa card.jpg')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>VISA Cards</h1>
          <p>Global Payments</p>
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
          <span className="current">VISA Cards</span>
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

          {/* Intro Section */}
          <div style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
            <h2 style={{ color: '#111827', fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem' }}>
              TN CyberTech Bank VISA Cards: Empowering Your Global Payments
            </h2>
            <p style={{ color: '#4b5563', lineHeight: '1.8' }}>
              TN CyberTech Bank VISA cards provide a seamless and secure way to make payments worldwide-whether you're shopping in-store, paying online, or withdrawing cash from an ATM. With our range of VISA products, you can enjoy unparalleled convenience, security, and exclusive benefits. Explore the features of our Visa card products below:
            </p>
          </div>

          {/* Key Features Grid */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#111827',
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}>Key Features</h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem',
            }}>
              {visaKeyFeatures.map((feature, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.25rem',
                  background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.05) 0%, rgba(174, 106, 6, 0.02) 100%)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 222, 74, 0.2)',
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" style={{ width: '16px', height: '16px' }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ color: '#111827', fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem' }}>{feature.title}</h4>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISA Card Types Hub */}
      <section className="content-section light-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: '#111827' }}>Choose Your VISA Card</h2>
          </div>

          <div className="mobile-banking-hub-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', maxWidth: '1200px' }}>
            {cardTypes.map((card) => (
              <Link to={card.link} key={card.id} className="mobile-banking-hub-card" style={{ position: 'relative' }}>
                {card.premium && (
                  <span style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '24px',
                    background: 'linear-gradient(90deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                    color: '#000',
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    zIndex: 2,
                  }}>Premium</span>
                )}
                <div className="mobile-banking-hub-icon">
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
                <span className="mobile-banking-hub-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: '#6b7280' }}>
              Experience the world with confidence, security, and ease with TN CyberTech Bank VISA cards. Whether you're traveling, shopping, or managing finances, we offer a solution tailored to meet your needs. Choose the right card for you today and unlock a world of benefits.
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Email us at <a href="mailto:cardcentre@tncybertechbank.co.zw" style={{ color: 'rgb(174, 106, 6)' }}>cardcentre@tncybertechbank.co.zw</a>
            </p>
          </div>
        </div>
      </section>

      {/* Terms Link */}
      <section className="content-section white-section" style={{ textAlign: 'center', padding: '2rem 0' }}>
        <div className="container">
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
            For card terms and conditions, please contact us at{' '}
            <a href="mailto:cards@tncybertechbank.co.zw" style={{ color: 'rgb(174, 106, 6)' }}>
              cardcentre@tncybertechbank.co.zw
            </a>{' '}
            or call <a href="tel:08088888" style={{ color: 'rgb(174, 106, 6)' }}>0808 8888</a>
          </p>
          <p style={{ color: 'black', fontSize: '0.875rem' }}>
           <strong> <i>Disclaimer: Limits are subject to change without prior notice. Terms and conditions apply.</i></strong>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default VisaCards
