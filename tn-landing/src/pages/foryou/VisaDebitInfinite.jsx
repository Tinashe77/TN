import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function VisaDebitInfinite() {
  const features = [
    'PIN Management: Set, change, or reset your PIN via the TN CyberCash app or any TN CyberTech Bank ATM.',
    'Supplementary Cards: Add up to two supplementary cards for family or business needs.',
    'Monthly Limit: USD 200,000.',
    'Daily cash withdrawal limit: USD 1,000 locally and USD 2,000 internationally.',
    'Exclusive Travel Benefits: Enjoy up to 12% off hotel bookings via Agoda.com.',
    'Airport Lounge Access: Complimentary access to over 1,200 airport lounges worldwide.',
    'Car Hire Services: Access exclusive car rental offers and services.',
    'Comprehensive Insurance: Travel insurance, medical service referrals, and more for peace of mind on the go.',
    'Visa Concierge: Enjoy personalized concierge services for a luxury experience at your fingertips.',
  ]

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>VISA Debit Infinite</h1>
          <p>Premium Debit</p>
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
          <Link to="/for-you/cards/visa">VISA Cards</Link>
          <span className="separator">/</span>
          <span className="current">VISA Debit Infinite</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-you/cards/visa" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to VISA Cards
          </Link>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Hero Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(174, 106, 6, 0.05) 100%)',
              border: '2px solid rgba(255, 222, 74, 0.3)',
              borderRadius: '24px',
              padding: '3rem',
              textAlign: 'center',
              marginBottom: '3rem',
              position: 'relative',
            }}>
              <span style={{
                position: 'absolute',
                top: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(90deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                color: '#000',
                fontSize: '0.75rem',
                fontWeight: '700',
                padding: '0.5rem 1.5rem',
                borderRadius: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>Premium</span>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
                marginTop: '0.5rem',
              }}>
                <img src="/visa.jpg" alt="VISA" style={{ height: '32px' }} />
                <span style={{
                  background: 'rgba(174, 106, 6, 0.1)',
                  color: 'rgb(174, 106, 6)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                }}>Premium Debit</span>
              </div>

              <h2 style={{ color: '#111827', fontSize: '1.75rem', marginBottom: '0.5rem' }}>VISA Debit Infinite</h2>
              <p style={{ color: '#4b5563', fontSize: '1rem', marginBottom: '1.5rem' }}>
                The ultimate premium debit card with exclusive travel benefits and concierge services.
              </p>

              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
                borderRadius: '12px',
                padding: '1rem 2rem',
              }}>
                <span style={{ color: '#9ca3af', fontSize: '0.875rem', display: 'block' }}>Monthly Limit</span>
                <span style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '700' }}>USD 200,000</span>
              </div>
            </div>

            {/* Features */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#111827',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}>Features & Benefits</h3>

              <div style={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                overflow: 'hidden',
              }}>
                {features.map((feature, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    borderBottom: index < features.length - 1 ? '1px solid #f3f4f6' : 'none',
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="rgb(174, 106, 6)" strokeWidth="2.5" style={{
                      width: '20px',
                      height: '20px',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span style={{ color: '#4b5563', fontSize: '0.9375rem', lineHeight: '1.6' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section light-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem', color: '#111827' }}>
            Ready for Premium Banking?
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Contact our Card Centre to apply for your VISA Debit Infinite card.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="cta-btn cta-btn-primary">
              Find a Branch
            </Link>
            <a href="mailto:cardcentre@tncybertechbank.co.zw" className="cta-btn cta-btn-secondary">
              Email Card Centre
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default VisaDebitInfinite
