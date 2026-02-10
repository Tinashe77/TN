import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function OnlineBankingIndividuals() {
  const registrationSteps = [
    {
      number: '1',
      title: 'Input Email/Phone',
      description: 'Enter your email address or phone number to start the registration process.',
    },
    {
      number: '2',
      title: 'OTP Verification',
      description: 'Receive and enter the One-Time Password sent to your email or phone.',
    },
    {
      number: '3',
      title: 'Customer Details',
      description: 'Provide your personal details for validation.',
    },
    {
      number: '4',
      title: 'Set PIN',
      description: 'Create a secure PIN for your online banking access.',
    },
    {
      number: '5',
      title: 'Registration Complete',
      description: 'Your registration is complete. Start banking online!',
    },
  ]

  const transactionTypes = [
    'Internal Transfers',
    'VISA Transfers',
    'RTGS',
    'Batch Processing',
    'ZIPIT',
    'Remittances',
    'Billers',
    'Airtime',
  ]

  const specialFeatures = [
    'Account balance on dashboard',
    'Statement inquiry',
    'Password synchronization',
    'Charges Breakdown',
    'Request Tax Exemptions',
    'Recipients auto-save',
    'Digital stamp',
    'Detect contacts with TN accounts',
    'Self-Service account/card linking',
    'OTP worldwide',
    'Dark/light mode',
  ]

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>For Individuals</h1>
          <p>Personal Online Banking</p>
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
          <Link to="/for-you/mobile-banking/online">Internet Banking</Link>
          <span className="separator">/</span>
          <span className="current">For Individuals</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-you/mobile-banking/online" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Internet Banking
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
              <h2 style={{ color: '#111827', fontSize: '1.75rem', marginBottom: '0.75rem' }}>Personal Online Banking</h2>
              <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
                Access your TN CyberTech Bank account anytime, anywhere. Manage your finances, make transfers, and more from the comfort of your home or on the go.
              </p>
            </div>

            {/* Registration Steps */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#111827',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}>Registration Journey</h3>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                {registrationSteps.map((step, index) => (
                  <div key={step.number} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                    padding: '1.5rem',
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    position: 'relative',
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <span style={{ color: '#000', fontSize: '1.25rem', fontWeight: '700' }}>{step.number}</span>
                    </div>
                    <div>
                      <h4 style={{ color: '#111827', fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.25rem' }}>{step.title}</h4>
                      <p style={{ color: '#4b5563', fontSize: '0.9375rem', lineHeight: '1.6' }}>{step.description}</p>
                    </div>
                    {index < registrationSteps.length - 1 && (
                      <div style={{
                        position: 'absolute',
                        left: 'calc(1.5rem + 24px - 1px)',
                        top: 'calc(100%)',
                        width: '2px',
                        height: '1rem',
                        background: 'rgb(174, 106, 6)',
                      }} />
                    )}
                  </div>
                ))}
              </div>

              {/* Important Note */}
              <div style={{
                marginTop: '1.5rem',
                padding: '1rem 1.5rem',
                background: 'rgba(174, 106, 6, 0.1)',
                borderLeft: '4px solid rgb(174, 106, 6)',
                borderRadius: '0 8px 8px 0',
              }}>
                <p style={{ color: '#4b5563', fontSize: '0.9375rem', lineHeight: '1.6', margin: 0 }}>
                  <strong style={{ color: '#111827' }}>NB:</strong> By virtue of registering on Online Banking, you are automatically onboarded on the App and USSD platforms.
                </p>
              </div>
            </div>

            {/* Transaction Types */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#111827',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}>Transaction Types</h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
              }}>
                {transactionTypes.map((type) => (
                  <div key={type} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem 1.25rem',
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="rgb(174, 106, 6)" strokeWidth="2.5" style={{
                      width: '20px',
                      height: '20px',
                      flexShrink: 0,
                    }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span style={{ color: '#4b5563', fontSize: '0.9375rem', fontWeight: '500' }}>{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Features */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#111827',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}>Special Features</h3>

              <div style={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                overflow: 'hidden',
              }}>
                {specialFeatures.map((feature, index) => (
                  <div key={feature} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    borderBottom: index < specialFeatures.length - 1 ? '1px solid #f3f4f6' : 'none',
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="rgb(174, 106, 6)" strokeWidth="2.5" style={{
                      width: '20px',
                      height: '20px',
                      flexShrink: 0,
                    }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span style={{ color: '#4b5563', fontSize: '0.9375rem', lineHeight: '1.6' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div style={{
              background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
            }}>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '1rem' }}>Ready to Get Started?</h3>
              <p style={{ color: '#9ca3af', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Register for online banking today and experience the convenience of banking from anywhere.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://ibanking.tncybertechbank.co.zw" target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn-primary">
                  Register Now
                </a>
                <Link to="/contact" className="cta-btn cta-btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OnlineBankingIndividuals
