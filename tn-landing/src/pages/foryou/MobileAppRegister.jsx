import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function MobileAppRegister() {
  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>How to Register</h1>
          <p>Get started with the TN CyberCash App</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-you">For You</Link>
          <span className="separator">/</span>
          <Link to="/for-you/mobile-banking">Mobile Banking</Link>
          <span className="separator">/</span>
          <Link to="/for-you/mobile-banking/app">TN CyberCash App</Link>
          <span className="separator">/</span>
          <span className="current">How to Register</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-you/mobile-banking/app" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to TN CyberCash App
          </Link>

          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: '#111827' }}>How to Register</h2>
            <p style={{ color: '#4b5563', maxWidth: '600px', margin: '0 auto' }}>
              Follow these simple steps to get started with the TN CyberCash App
            </p>
          </div>

          <div className="info-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h3>
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="8.5" cy="7" r="4"/>
                  <line x1="20" y1="8" x2="20" y2="14"/>
                  <line x1="23" y1="11" x2="17" y2="11"/>
                </svg>
              </span>
              Registration Steps
            </h3>
            <div className="steps-list">
              <div className="step-item">
                <span className="step-number">1</span>
                <div className="step-content">
                  <p>Download the app from Google Play Store or Apple Store</p>
                </div>
              </div>
              <div className="step-item">
                <span className="step-number">2</span>
                <div className="step-content">
                  <p>Input account number, mobile number and last 4 digits of card number</p>
                </div>
              </div>
              <div className="step-item">
                <span className="step-number">3</span>
                <div className="step-content">
                  <p>Confirm Details</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Registration Steps */}
          <div style={{
            maxWidth: '600px',
            margin: '2rem auto 0',
            background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <ol style={{ margin: 0, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ fontSize: '1.0625rem', color: '#000', fontWeight: '500' }}>Step 1 input email address/phone number</li>
              <li style={{ fontSize: '1.0625rem', color: '#000', fontWeight: '500' }}>Step 2 OTP verification</li>
              <li style={{ fontSize: '1.0625rem', color: '#000', fontWeight: '500' }}>Step 3 Customer details and validation</li>
              <li style={{ fontSize: '1.0625rem', color: '#000', fontWeight: '500' }}>Step 4 Set Pin</li>
              <li style={{ fontSize: '1.0625rem', color: '#000', fontWeight: '500' }}>Step 5 Registration completion</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Nano Loans Section */}
      <section className="content-section white-section">
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '700', color: '#111827', marginBottom: '2rem' }}>
            Nano loans
          </h2>

          {/* 60 Seconds Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
              borderRadius: '16px',
              padding: '2rem 3rem',
              textAlign: 'center',
              boxShadow: '0 8px 30px rgba(174, 106, 6, 0.3)'
            }}>
              <div style={{ fontSize: '3.5rem', fontWeight: '700', color: '#000', lineHeight: 1 }}>60</div>
              <div style={{ fontSize: '1rem', fontWeight: '700', color: '#000', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '0.25rem' }}>SECONDS</div>
            </div>
          </div>

          {/* Instant Approval Card */}
          <div className="info-card" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            <h3>
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </span>
              Instant Approval
            </h3>
            <p style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.0625rem' }}>
              These loans may be accessed by customers who have an EcoCash wallet or a TN CyberTech Bank account. Approval is instant. An SMS will be sent with your repayment due date.
            </p>
          </div>

          <ol style={{ maxWidth: '600px', margin: '0 auto', paddingLeft: '1.5rem' }}>
            <li style={{ fontSize: '1.0625rem', color: '#111827', fontWeight: '500', marginBottom: '0.5rem' }}>
              An SMS will be sent with your disbursement amount.
            </li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section light-section" style={{ textAlign: 'center' }}>
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

export default MobileAppRegister
