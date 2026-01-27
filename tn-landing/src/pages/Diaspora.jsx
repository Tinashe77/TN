import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/PageStyles.css'

function Diaspora() {
  const accounts = [
    {
      name: 'Diaspora USD Savings Account',
      description: 'A USD savings account specifically designed for Zimbabweans living abroad.',
      features: [
        'Competitive USD interest rates',
        'Free debit card for use in Zimbabwe',
        'Mobile App access from anywhere',
        'Easy fund transfers to Zimbabwe beneficiaries',
        'No minimum balance requirements',
      ],
    },
    {
      name: 'Diaspora Investment Account',
      description: 'Invest in Zimbabwe while living abroad with our secure investment products.',
      features: [
        'Fixed-term deposits with attractive rates',
        'Treasury Bills investment options',
        'Property investment facilitation',
        'Professional investment advice',
        'Quarterly investment reports',
      ],
    },
  ]

  const remittancePartners = [
    { name: 'World Remit', logo: '/worldremit.jpg' },
    { name: 'Western Union', logo: '/western-union.jpg' },
    { name: 'Money Gram', logo: '/moneygram.jpg' },
    { name: 'Sasai Remit', logo: '/sasai.jpg' },
    { name: 'Mama Money', logo: '/mamamoney.jpg' },
    { name: 'Hello Paisa', logo: '/hellopaisa.jpg' },
    { name: 'Ria', logo: '/riamoney.jpg' },
    { name: 'Thunes', logo: '/thunes.jpg' },
  ]

  const openAccountSteps = [
    { step: 1, title: 'Download the App', description: 'Get the TN CyberTech Bank Mobile App from your app store' },
    { step: 2, title: 'Start Registration', description: 'Select "Open Account" and choose "Non-Resident Account"' },
    { step: 3, title: 'Upload Documents', description: 'Passport, Proof of Residence abroad, and Visa/Permit' },
    { step: 4, title: 'Video Verification', description: 'Complete a quick video call for identity verification' },
    { step: 5, title: 'Account Activated', description: 'Your account is ready to use within 24 hours' },
  ]

  return (
    <div className="page-container">
      <Header />

      {/* Hero */}
      <section className="page-hero" style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      }}>
        <div className="page-hero-overlay" style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 222, 74, 0.1) 0%, transparent 70%)'
        }}></div>
        <div className="page-hero-content">
          <span style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'rgba(255, 222, 74, 0.2)',
            borderRadius: '20px',
            fontSize: '0.875rem',
            color: 'rgb(255, 222, 74)',
            marginBottom: '1rem',
          }}>For Zimbabweans Abroad</span>
          <h1>Diaspora Banking</h1>
          <p>Stay connected to home. Bank with Zimbabwe from anywhere in the world.</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <span className="current">Diaspora Banking</span>
        </div>
      </nav>

      {/* Value Proposition */}
      <section className="content-section white-section">
        <div className="container">
          <div className="two-col-layout">
            <div>
              <span className="section-label">Your Bank at Home</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1rem' }}>
                Banking That Travels With You
              </h2>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Whether you're in South Africa, the UK, USA, Australia, or anywhere else in the world, TN CyberTech Bank keeps you connected to Zimbabwe. Send money home, invest in property, save for the future, and manage your finances – all from your smartphone.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '2rem' }}>
                {[
                  { value: '10+', label: 'Remittance Partners' },
                  { value: '24/7', label: 'Mobile Access' },
                  { value: '0%', label: 'Receiving Fees' },
                  { value: '<5min', label: 'Transfer Time' },
                ].map((stat, idx) => (
                  <div key={idx} style={{
                    padding: '1.5rem',
                    background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(255, 222, 74, 0.05) 100%)',
                    borderRadius: '12px',
                    textAlign: 'center',
                    border: '1px solid rgba(255, 222, 74, 0.2)',
                  }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: '700', color: 'rgb(174, 106, 6)' }}>{stat.value}</div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                position: 'relative',
                width: '280px',
                height: '280px',
              }}>
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                  borderRadius: '50%',
                  opacity: 0.2,
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  right: '20px',
                  bottom: '20px',
                  background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 20px 60px rgba(255, 222, 74, 0.3)',
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" style={{ width: '100px', height: '100px' }}>
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    <path d="M12 2v20"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Options */}
      <section className="content-section light-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Account Options</span>
            <h2>Diaspora Account Types</h2>
            <p>Choose the account that fits your needs.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {accounts.map((account, idx) => (
              <div key={idx} className="info-card" style={{
                background: idx === 0 ? 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, #fff 100%)' : '#fff',
                border: idx === 0 ? '2px solid rgba(255, 222, 74, 0.3)' : '1px solid #e5e7eb',
              }}>
                {idx === 0 && (
                  <div style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
                    background: 'rgb(174, 106, 6)',
                    color: '#fff',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                  }}>Most Popular</div>
                )}
                <h3 style={{ color: '#111827', marginBottom: '0.5rem' }}>{account.name}</h3>
                <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>{account.description}</p>
                <ul className="feature-list">
                  {account.features.map((feature, fidx) => (
                    <li key={fidx}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="cta-btn cta-btn-primary"
                  style={{ marginTop: '1.5rem', display: 'inline-block' }}
                >
                  Open This Account
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remittance Partners */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Send Money Home</span>
            <h2>Our Remittance Partners</h2>
            <p>Receive money from abroad through our trusted partners with zero receiving fees.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
          }}>
            {remittancePartners.map((partner, idx) => (
              <div key={idx} style={{
                padding: '1.5rem',
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
                    width: '80px',
                    height: '60px',
                    objectFit: 'contain',
                    marginBottom: '0.75rem',
                  }}
                />
                <span style={{ fontSize: '0.75rem', color: '#6b7280', textAlign: 'center' }}>{partner.name}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/partners" className="cta-btn cta-btn-secondary">
              View All Partners
            </Link>
          </div>
        </div>
      </section>

      {/* How to Open Account */}
      <section className="content-section light-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Get Started</span>
            <h2>Open Your Account in 5 Easy Steps</h2>
            <p>Open a Diaspora account from anywhere in the world.</p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            {openAccountSteps.map((item) => (
              <div key={item.step} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem',
                padding: '1.5rem',
                background: '#fff',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.25rem',
                  color: '#000',
                  flexShrink: 0,
                }}>
                  {item.step}
                </div>
                <div>
                  <h4 style={{ color: '#111827', marginBottom: '0.25rem' }}>{item.title}</h4>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Diaspora */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">More Services</span>
            <h2>What You Can Do From Abroad</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                ),
                title: 'Property Investment',
                desc: 'Buy land or property in Zimbabwe remotely',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="4" width="22" height="16" rx="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                ),
                title: 'Bill Payments',
                desc: 'Pay utilities and subscriptions for family at home',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                ),
                title: 'Send Money',
                desc: 'Transfer funds to any bank or EcoCash wallet',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                title: 'School Fees',
                desc: 'Pay school and university fees directly',
              },
            ].map((service, idx) => (
              <div key={idx} style={{
                padding: '1.5rem',
                background: '#f9fafb',
                borderRadius: '12px',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(255, 222, 74, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                }}>
                  <span style={{ color: 'rgb(174, 106, 6)', width: '28px', height: '28px' }}>{service.icon}</span>
                </div>
                <h4 style={{ color: '#111827', marginBottom: '0.5rem' }}>{service.title}</h4>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section dark-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Join Thousands of Zimbabweans Abroad</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Open your Diaspora account today and stay connected to home.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="cta-btn cta-btn-primary">
              Open Account Now
            </Link>
            <a href="mailto:diaspora@tncybertechbank.co.zw" className="cta-btn cta-btn-secondary">
              Email Diaspora Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Diaspora
