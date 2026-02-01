import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/PageStyles.css'

function Diaspora() {
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

  const benefits = [
    { text: 'Visa Debit directly linked to the FCA Account', highlight: true },
    { text: 'Access to robust online platform and mobile application', highlight: false },
    { text: 'SMS and E-Alerts for all transactions', highlight: false },
    { text: 'Access to Swift transfers', highlight: true },
    { text: 'Access to local service providers with dedicated relationship officer', highlight: false },
    { text: '24hr Contact Centre Support', highlight: true },
  ]

  const accountConditions = [
    { label: 'Initial Deposit', value: '$50' },
    { label: 'Minimum Balance', value: '$100' },
    { label: 'Withdrawal Fee', value: '3% (min $5)' },
    { label: 'Monthly Fee', value: '$5*' },
    { label: 'Interest Rate', value: '2.5% p.a.' },
  ]

  const requirements = [
    'Completed account opening form',
    '2 Passport Photos',
    'Copy of ID and valid Zimbabwean passport',
    'Proof of Residence (foreign utility bill, bank statement, or lease agreement)',
  ]

const remittancePartners = [
  { name: 'EcoCash', logo: '/ecocash.jpg' },
  { name: 'Hello Paisa', logo: '/hellopaisa.jpg' },
  { name: 'Mama Money', logo: '/mamamoney.jpg' },
  { name: 'Master Remit', logo: '/masterremit.jpg' },
  { name: 'Money Gram', logo: '/moneygram.jpg' },
  { name: 'Ria', logo: '/riamoney.jpg' },
  { name: 'Sasai Remit', logo: '/sasai.jpg' },
  { name: 'Shoprite Send', logo: '/shoprite.jpg' },
  { name: 'Thunes', logo: '/thunes.jpg' },
  { name: 'Western Union', logo: '/western-union.jpg' },
  { name: 'World Remit', logo: '/worldremit.jpg' }
];

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Diaspora Banking</h1>
          <p>Tailored banking solutions for Zimbabweans living abroad</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <span className="current">Diaspora Banking</span>
        </div>
      </nav>

      {/* Introduction */}
      <section className="content-section white-section">
        <div className="container">
          <div className="two-col-layout">
            <div>
              <span className="section-label">Diaspora Banking</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1rem' }}>
                Stay Connected to Home
              </h2>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Open a TN CyberTech Bank Diaspora FCA Account today and unlock unparalleled convenience with our exclusive diaspora offering. This unique service allows individuals to make direct payments to family and friends both within and outside Zimbabwe, as well as to local suppliers, ensuring seamless financial management.
              </p>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                With our robust online banking platform and mobile banking app, you can enjoy real-time, cost-effective transactions without the need for intermediaries. Furthermore, benefit from the dedicated support of a relationship officer, providing assistance and access to local service providers.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="cta-btn cta-btn-primary">
                  Open an Account
                </Link>
                <a href="mailto:diaspora@tncybertechbank.co.zw" className="cta-btn cta-btn-secondary">
                  Contact Diaspora Team
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                width: '220px',
                height: '220px',
                background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 60px rgba(255, 222, 74, 0.3)'
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" style={{ width: '90px', height: '90px' }}>
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="content-section light-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Available Accounts</span>
            <h2>Choose Your Account Type</h2>
          </div>

          <div className="services-grid-2">
            {accountTypes.map((account) => (
              <div key={account.name} className="service-card">
                <div className="service-card-icon">{account.icon}</div>
                <h3>{account.name}</h3>
                <p>{account.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Conditions */}
      <section className="content-section white-section">
        <div className="container">
          <div className="two-col-layout">
            <div>
              <span className="section-label">Why Choose Us</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1.5rem' }}>
                Account Benefits
              </h2>

              <ul className="feature-list">
                {benefits.map((benefit) => (
                  <li key={benefit.text} style={{
                    background: benefit.highlight ? 'rgba(255, 222, 74, 0.1)' : 'transparent',
                    padding: benefit.highlight ? '0.75rem 1rem' : '0.5rem 0',
                    borderRadius: benefit.highlight ? '8px' : '0',
                    marginBottom: '0.5rem',
                  }}>
                    <span className="check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {benefit.text}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              

              <div className="info-card" style={{ marginTop: '1.5rem' }}>
                <h3>
                  <span className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                  </span>
                  Requirements
                </h3>
                <ul className="feature-list" style={{ marginTop: '1rem' }}>
                  {requirements.map((req) => (
                    <li key={req}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Remittances */}
      <section className="content-section dark-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-label light">International Remittances</span>
            <h2 style={{ color: '#fff' }}>Send & Receive Money Globally</h2>
            <p style={{ color: '#9ca3af', maxWidth: '600px', margin: '0 auto' }}>
              Whether you're receiving funds from abroad or sending them to loved ones, TN CyberTech Bank ensures a seamless transaction experience.
            </p>
          </div>

          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '2rem',
            marginBottom: '2rem',
          }}>
            <div style={{
              padding: '1.5rem 2rem',
              background: 'rgba(255, 222, 74, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 222, 74, 0.2)',
              textAlign: 'center',
            }}>
              <div style={{ color: 'rgb(255, 222, 74)', fontWeight: '700', fontSize: '1.5rem' }}>Secure</div>
              <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Safe transactions</div>
            </div>
            <div style={{
              padding: '1.5rem 2rem',
              background: 'rgba(255, 222, 74, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 222, 74, 0.2)',
              textAlign: 'center',
            }}>
              <div style={{ color: 'rgb(255, 222, 74)', fontWeight: '700', fontSize: '1.5rem' }}>USD Cash</div>
              <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Guaranteed</div>
            </div>
            <div style={{
              padding: '1.5rem 2rem',
              background: 'rgba(255, 222, 74, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 222, 74, 0.2)',
              textAlign: 'center',
            }}>
              <div style={{ color: 'rgb(255, 222, 74)', fontWeight: '700', fontSize: '1.5rem' }}>No Fuss</div>
              <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Quick & easy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Remittance Partners */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Partners</span>
            <h2>Receive Funds From</h2>
            <p>You can receive funds via Cash Pick Up option from a wide range of international remittance partners.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1rem',
          }}>
            {remittancePartners.map((partner) => (
              <div key={partner.name} style={{
                padding: '1.25rem',
                background: '#fff',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    width: '70px',
                    height: '50px',
                    objectFit: 'contain',
                    marginBottom: '0.5rem',
                  }}
                />
                <span style={{ fontSize: '0.7rem', color: '#6b7280', textAlign: 'center' }}>{partner.name}</span>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(255, 222, 74, 0.05) 100%)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 222, 74, 0.2)',
          }}>
            <h4 style={{ color: '#111827', marginBottom: '0.5rem' }}>Sending Money Abroad?</h4>
            <p style={{ color: '#6b7280', marginBottom: '0' }}>
              For sending money abroad, we partner with <strong style={{ color: 'rgb(174, 106, 6)' }}>Money Gram</strong> and <strong style={{ color: 'rgb(174, 106, 6)' }}>Western Union</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section dark-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Get Started?</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            TN CyberTech Bank is committed to making your life easier. Visit our branches today to find out more about our expanded diaspora services.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:diaspora@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
              Contact Diaspora Team
            </a>
            <Link to="/contact" className="cta-btn cta-btn-secondary">
              Find a Branch
            </Link>
          </div>
          <p style={{ color: 'rgb(255, 222, 74)', marginTop: '1.5rem', fontWeight: '500' }}>
            TN CyberTech - The Future of Banking!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Diaspora
