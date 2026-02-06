import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function CurrentAccount() {
  const features = [
    'TN CyberTech Bank proprietary card',
    'Access to Online Banking',
    'No Credit Interest',
  ]

  const requirements = [
    'Copy of National ID/Driver\'s Licence/Valid Passport',
    '2 Passport Size Photos',
    'Proof of Income',
    'Proof of Residence',
  ]

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Current Account</h1>
          <p>For everyday transactions</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-you">For You</Link>
          <span className="separator">/</span>
          <Link to="/for-you/accounts">Personal Accounts</Link>
          <span className="separator">/</span>
          <span className="current">Current Account</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-you/accounts" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Personal Accounts
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
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                boxShadow: '0 8px 24px rgba(255, 222, 74, 0.3)',
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" style={{ width: '36px', height: '36px' }}>
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                  <line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
              </div>

              <h2 style={{ color: '#111827', fontSize: '1.75rem', marginBottom: '0.5rem' }}>Current Account</h2>
              <p style={{ color: '#4b5563', fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                A flexible current account for all your daily banking needs.
              </p>

              <Link to="/contact" style={{
                display: 'inline-block',
                background: 'linear-gradient(90deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                color: '#000',
                fontSize: '1.125rem',
                fontWeight: '700',
                padding: '1rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
              }}>
                Open an Account
              </Link>
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
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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

            {/* Requirements */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#111827',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}>Requirements</h3>

              <div style={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '1.5rem',
              }}>
                {requirements.map((requirement, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 0',
                    borderBottom: index < requirements.length - 1 ? '1px solid #f3f4f6' : 'none',
                  }}>
                    <span style={{
                      width: '28px',
                      height: '28px',
                      background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      fontWeight: '700',
                      color: '#000',
                      flexShrink: 0,
                    }}>{index + 1}</span>
                    <span style={{ color: '#4b5563', fontSize: '0.9375rem' }}>{requirement}</span>
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
            Ready to Open Your Account?
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Visit any of our branches to open your Current Account today
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
      </section>

      <Footer />
    </div>
  )
}

export default CurrentAccount
