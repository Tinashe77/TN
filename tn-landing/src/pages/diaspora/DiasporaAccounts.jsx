import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function DiasporaAccounts() {
  const accountTypes = [
    {
      name: 'Diaspora FCA Current Account',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      ),
      desc: 'For everyday transactions and payments',
    },
    {
      name: 'Diaspora FCA Savings Account',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"/>
          <path d="M2 9v1c0 1.1.9 2 2 2h1"/>
        </svg>
      ),
      desc: 'Earn interest on your savings',
    },
  ]

  const accountConditions = [
    { label: 'Initial Deposit', value: '$50' },
    { label: 'Minimum Balance', value: '$100' },
    { label: 'Withdrawal Fee', value: '3% (min $5)' },
    { label: 'Monthly Fee', value: '$5*' },
    { label: 'Interest Rate', value: '2.5% p.a.' },
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero" style={{ backgroundImage: "url('/banners/diaspora.png')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Diaspora Accounts</h1>
          <p>Current & Savings FCA</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/diaspora">Diaspora Banking</Link>
          <span className="separator">/</span>
          <span className="current">Accounts</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/diaspora" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Diaspora Banking
          </Link>

          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">Available Accounts</span>
              <h2>Choose Your Account Type</h2>
              <p>
                Open a TN CyberTech Bank Diaspora FCA Account today and unlock unparalleled convenience with our exclusive diaspora offering. This unique service allows individuals to make direct payments to family and friends both within and outside Zimbabwe, as well as to local suppliers, ensuring seamless financial management.
              </p>

              <div style={{
                display: 'grid',
                gap: '1.5rem',
                marginTop: '2rem',
              }}>
                {accountTypes.map((account) => (
                  <div key={account.name} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                    padding: '1.5rem',
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '16px',
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <div style={{ width: '30px', height: '30px', color: '#000' }}>
                        {account.icon}
                      </div>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>{account.name}</h3>
                      <p style={{ color: '#6b7280', margin: 0 }}>{account.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>Account Conditions</h3>

              <div style={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                overflow: 'hidden',
              }}>
                {accountConditions.map((condition, index) => (
                  <div key={condition.label} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 1.5rem',
                    borderBottom: index < accountConditions.length - 1 ? '1px solid #f3f4f6' : 'none',
                  }}>
                    <span style={{ color: '#4b5563' }}>{condition.label}</span>
                    <span style={{ fontWeight: '600', color: 'rgb(174, 106, 6)' }}>{condition.value}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link to="/contact" className="cta-btn cta-btn-primary">
                  Open an Account
                </Link>
              </div>
            </div>
            <div className="story-image">
              <div className="about-hub-icon" style={{
                width: '160px',
                height: '160px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" style={{ width: '80px', height: '80px' }}>
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                  <line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DiasporaAccounts
