import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function MicroLoans() {
  const bankSteps = [
    { step: 1, action: 'Dial *236#' },
    { step: 2, action: 'Enter your PIN' },
    { step: 3, action: 'Select Option 7 - Nano Loans' },
    { step: 4, action: 'Choose Account' },
    { step: 5, action: 'Terms & Conditions ' },
    { step: 6, action: 'Select Option 1 to accept terms' },
    { step: 7, action: 'Choose loan package' },
    { step: 8, action: 'Choose loan package tenure' },
    { step: 9, action: 'Select amount you would like to borrow' },
    { step: 10, action: 'Funds deposited into your account!' },
  ]

  const ecocashSteps = [
    { step: 1, action: 'Dial *151#' },
    { step: 2, action: 'Select Currency' },
    { step: 3, action: 'Enter your EcoCash PIN' },
    { step: 4, action: 'Select Option 6 - Financial Services' },
    { step: 5, action: 'Select Option 3 - Kashagi' },
    { step: 6, action: 'Select Option 1 (Request loan), 2 (Repay), or 3 (Check limit)' },
    { step: 7, action: 'Enter Amount' },
    { step: 8, action: 'Select Tenure (1 month)' },
  ]

  return (
    <div className="page-container">
      <Header />

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Nano Loans</h1>
          <p>Quick loans disbursed in under 60 seconds.</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-you">For You</Link>
          <span className="separator">/</span>
          <span className="current">Nano Loans</span>
        </div>
      </nav>

      {/* Main Content */}
      <section className="content-section white-section">
        <div className="container">
          <div className="two-col-layout">
            <div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1rem' }}>
                Bridge Your Financial Gaps
              </h2>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Our short term term loan is designed to take care of those moments where you need to bridge gaps in one's finances for a short while. The loan application and disbursement process takes place in <strong style={{ color: 'rgb(174, 106, 6)' }}>under 60 seconds</strong>.
              </p>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                <div style={{
                  padding: '1.5rem 2rem',
                  background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(255, 222, 74, 0.05) 100%)',
                  borderRadius: '16px',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 222, 74, 0.2)',
                  flex: '1',
                  minWidth: '140px'
                }}>
                  <div style={{ fontSize: '2rem', fontWeight: '700', color: 'rgb(174, 106, 6)' }}>*236#</div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>TN CyberTech</div>
                </div>
                <div style={{
                  padding: '1.5rem 2rem',
                  background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(255, 222, 74, 0.05) 100%)',
                  borderRadius: '16px',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 222, 74, 0.2)',
                  flex: '1',
                  minWidth: '140px'
                }}>
                  <div style={{ fontSize: '2rem', fontWeight: '700', color: 'rgb(174, 106, 6)' }}>*151#</div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>EcoCash</div>
                </div>
              </div>

              <div className="info-card" style={{ background: '#f9fafb' }}>
                <h3>
                  <span className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </span>
                  Instant Approval
                </h3>
                <p>These loans may be accessed by customers who have an EcoCash wallet or a TN CyberTech Bank account. Approval is instant. An SMS will be sent with your repayment due date.</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                width: '200px',
                height: '200px',
                background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 60px rgba(255, 222, 74, 0.3)'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#000' }}>60</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#000' }}>SECONDS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="content-section light-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How to Apply</span>
            <h2>Choose Your Application Method</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {/* Bank Method */}
            <div className="info-card">
              <h3 style={{ borderBottom: '2px solid rgba(255, 222, 74, 0.3)', paddingBottom: '1rem' }}>
                <span className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>
                  </svg>
                </span>
                From TN CyberTech Bank
              </h3>
              <div className="steps-list">
                {bankSteps.map((item) => (
                  <div key={item.step} className="step-item">
                    <span className="step-number">{item.step}</span>
                    <div className="step-content">
                      <p>{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EcoCash Method */}
            <div className="info-card">
              <h3 style={{ borderBottom: '2px solid rgba(255, 222, 74, 0.3)', paddingBottom: '1rem' }}>
                <span className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                    <line x1="12" y1="18" x2="12" y2="18"/>
                  </svg>
                </span>
                From EcoCash
              </h3>
              <div className="steps-list">
                {ecocashSteps.map((item) => (
                  <div key={item.step} className="step-item">
                    <span className="step-number">{item.step}</span>
                    <div className="step-content">
                      <p>{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section dark-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Need Funds Now?</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Dial *236# or *151# to check your credit limit and apply instantly.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:*236%23" className="cta-btn cta-btn-primary">
              Dial *236#
            </a>
            <Link to="/contact" className="cta-btn cta-btn-secondary">
              Need Help?
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MicroLoans
