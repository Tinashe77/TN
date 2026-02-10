import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function MicroLoans() {
  const loanMethods = [
    {
      id: 'bank',
      title: 'TN CyberTech Bank',
      subtitle: 'Dial *236#',
      link: '/for-you/loans/bank',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>
        </svg>
      ),
    },
    {
      id: 'ecocash',
      title: 'EcoCash',
      subtitle: 'Dial *151#',
      link: '/for-you/loans/ecocash',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12" y2="18.01"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Nano Loans</h1>
          <p>Quick loans disbursed in under 60 seconds.</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-you">For You</Link>
          <span className="separator">/</span>
          <span className="current">Nano Loans</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h2>Bridge Your Financial Gaps</h2>
            <p style={{ color: '#6b7280', maxWidth: '800px', margin: '1rem auto 2rem', lineHeight: '1.8' }}>
              Our short term term loan is designed to take care of those moments where you need to bridge gaps in one's finances for a short while. The loan application and disbursement process takes place in <strong style={{ color: 'rgb(174, 106, 6)' }}>under 60 seconds</strong>.
            </p>

            {/* 60 Seconds Badge */}
            <div className="about-hub-icon" style={{
              width: '160px',
              height: '160px',
              margin: '0 auto 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#000' }}>60</div>
                <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#000' }}>SECONDS</div>
              </div>
            </div>

            <div style={{ background: '#f9fafb', padding: '1.5rem 2rem', borderRadius: '12px', maxWidth: '600px', margin: '0 auto 3rem', textAlign: 'left' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', marginBottom: '0.75rem', color: '#111827' }}>
                <span style={{
                  width: '32px',
                  height: '32px',
                  background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </span>
                Instant Approval
              </h3>
              <p style={{ color: '#4b5563', lineHeight: '1.7', margin: 0 }}>
                These loans may be accessed by customers who have an EcoCash wallet or a TN CyberTech Bank account. Approval is instant. An SMS will be sent with your repayment due date.
              </p>
            </div>
          </div>

          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-label">How to Apply</span>
            <h2>Choose Your Application Method</h2>
          </div>

          <div className="about-hub-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '700px', margin: '0 auto' }}>
            {loanMethods.map((method) => (
              <Link to={method.link} key={method.id} className="about-hub-card">
                <div className="about-hub-icon">
                  {method.icon}
                </div>
                <h3>{method.title}</h3>
                <p>{method.subtitle}</p>
                <span className="about-hub-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="image-break-section">
        <div className="image-break-overlay"></div>
        <div className="image-break-content">
          <h2>Need Funds Now?</h2>
          <p>Dial *236# or *151# to check your credit limit and apply instantly.</p>
        </div>
      </section>

      <section className="content-section white-section" style={{ textAlign: 'center' }}>
        <div className="container">
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
