import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function ZimswitchCard() {
  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
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
              display: 'flex',
              alignItems: 'center',
              gap: '3rem',
              flexWrap: 'wrap',
            }}>
              <div style={{
                width: '180px',
                height: '110px',
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                flexShrink: 0,
              }}>
                <img src="/zimswitch.jpg" alt="Zimswitch" style={{ width: '80px', marginBottom: '0.5rem' }} />
                <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: '600' }}>Zimswitch Debit Card</span>
              </div>

              <div style={{ flex: 1, minWidth: '250px' }}>
                <h2 style={{ color: '#111827', fontSize: '1.75rem', marginBottom: '0.75rem' }}>Zimswitch Debit Card</h2>
                <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: '1.6' }}>
                  The TN CyberTech Bank Debit Card allows customers to transact from any Point of Sale (POS) machine with the TN CyberTech Bank or Zimswitch sign.
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div style={{
              background: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '2rem',
            }}>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1rem' }}>
                Customers have 24-hour access to money from a wide network of retailers across the country. No need to carry cash to make payments for bills, groceries or fuel. The TN CyberTech Bank Debit card will also allow customers to access the cash-back facility from any TN CyberTech Bank or Zimswitch POS machine whenever they need cash. Now customers no longer need to fill in cash withdrawal slips to access money or deposit it. All one needs to do is walk into any TN CyberTech Bank branch and transact over the counter using their Debit card.
              </p>
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
