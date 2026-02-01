import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function MobileBanking() {
  const appFeatures = [
    'Balance enquiry',
    'Buy airtime',
    'Bill payments',
    'Add beneficiaries',
    'View mini statement',
    'Funds transfers (RTGS, Zipit, Internal Transfer)',
    'Alerts on Account activity',
  ]

  const excitingFeatures = [
    'Fingerprint login to the Mobile App',
    'A Quick Access Menu that shows the last 3 transactions',
    'Customer can send queries via the App',
    'Add payment beneficiaries - Convenient to avoid entering a beneficiary details every time one transfers funds',
  ]

  const ussdServices = [
    'Bill payments',
    'Airtime purchase',
    'Internal transfers & RTGS',
    'Change PIN',
    'View transaction history',
    'Mini-statements',
    'Balance enquiries',
  ]

  return (
    <div className="page-container">
      <Header />

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Mobile Banking</h1>
          <p>Bank whenever and wherever you are with our digital channels.</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-you">For You</Link>
          <span className="separator">/</span>
          <span className="current">Mobile Banking</span>
        </div>
      </nav>

      {/* Mobile App Section */}
      {/* <section className="content-section white-section">
        <div className="container">
          <div className="two-col-layout">
            <div>
              <span className="section-label">TN CyberCash App</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1rem' }}>
                Mobile Banking Application
              </h2>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Our mobile app is an integrated solution that gives TN CyberTech Bank customers the power to transact <strong>whenever</strong> and <strong>wherever</strong> they are. The App enables paperless and branchless banking.
              </p>

              <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>With the TN CyberCash, you can do the following:</h4>
              <ul className="feature-list">
                {appFeatures.map((feature) => (
                  <li key={feature}>
                    <span className="check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="info-card">
              <h3>
                <span className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </span>
                Exciting Features
              </h3>
              <ul className="feature-list">
                {excitingFeatures.map((feature) => (
                  <li key={feature}>
                    <span className="check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="requirements-box" style={{ marginTop: '1.5rem' }}>
                <h4>How to Register</h4>
                <ul>
                  <li>Download the app from Google Play Store or Apple Store</li>
                  <li>Input account number, mobile number and last 4 digits of card number</li>
                  <li>Confirm Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Online Banking Section */}
      <section className="content-section light-section">
        <div className="container">
          <div className="two-col-layout reverse">
            <div>
              <span className="section-label">Internet Banking</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1rem' }}>
                Online Banking Portal
              </h2>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                The online banking portal is user-friendly. The online banking portal has the following functionalities.               </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="info-card">
                  <h3 style={{ fontSize: '1rem' }}>For Individuals</h3>
                  <div className="steps-list">
                    <div className="step-item">
                      <span className="step-number">1</span>
                      <div className="step-content">
                        <p><a href="#">Visit our banking portal</a></p>
                      </div>
                    </div>
                
                  </div>
                </div>

                <div className="info-card">
                  <h3 style={{ fontSize: '1rem' }}>For Businesses</h3>
                  <div className="steps-list">
                    <div className="step-item">
                      <span className="step-number">1</span>
                      <div className="step-content">
                        <p>Fill out Mandate Form & Submit to Account Executive</p>
                      </div>
                    </div>
                    <div className="step-item">
                      <span className="step-number">2</span>
                      <div className="step-content">
                        <p>Bank Operations creates online profile</p>
                      </div>
                    </div>
                    <div className="step-item">
                      <span className="step-number">3</span>
                      <div className="step-content">
                        <p>Receive verification code and set up profile</p>
                      </div>
                    </div>
                    <div className="step-item">
                      <span className="step-number">4</span>
                      <div className="step-content">
                        <p>Each individual receives that One-Time code and uses it to set-up his/her profile</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                width: '250px',
                height: '250px',
                background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 60px rgba(255, 222, 74, 0.3)'
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" style={{ width: '100px', height: '100px' }}>
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USSD Banking Section */}
      <section className="content-section dark-section">
        <div className="container">
          <div className="two-col-layout">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'clamp(3rem, 8vw, 5rem)',
                  fontWeight: '700',
                  color: 'rgb(255, 222, 74)',
                  marginBottom: '1rem'
                }}>
                  *236#
                </div>
                <p style={{ color: '#9ca3af', fontSize: '1.125rem' }}>Dial to access USSD Banking</p>
                <div style={{
                  marginTop: '1.5rem',
                  padding: '1rem 2rem',
                  background: 'rgba(255, 222, 74, 0.1)',
                  borderRadius: '50px',
                  display: 'inline-block'
                }}>
                  <span style={{ color: 'rgb(255, 222, 74)', fontWeight: '600' }}>Register: *236#</span>
                </div>
              </div>
            </div>

            <div>
              <span className="section-label light">USSD Banking</span>
              <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Bank From Any Phone</h2>
              <p style={{ color: '#9ca3af', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                USSD banking from TN CyberTech Bank makes it possible for you to do all your banking by dialling <strong style={{ color: 'rgb(174, 106, 6)' }}>*236#</strong> on any type of mobile phone from wherever you are.
              </p>

              <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>Available Services:</h4>
              <ul className="feature-list" style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                {ussdServices.map((service) => (
                  <li key={service} style={{ color: '#d1d5db', borderColor: 'rgba(255,255,255,0.08)' }}>
                    <span className="check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section white-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem', color: '#111827' }}>
            Download the TN CyberCash App Today
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Experience seamless banking at your fingertips.
          </p>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            Search for <strong>"TN CyberCash App"</strong> or <strong>"TN CyberTech Bank"</strong> in your app store
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://apps.apple.com/search?term=square+omni" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store
            </a>
            <a href="https://play.google.com/store/search?q=square+omni&c=apps" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
                <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MobileBanking
