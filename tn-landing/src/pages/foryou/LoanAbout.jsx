import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function LoanAbout() {
  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>60 Second Approval</h1>
          <p>Bridge Your Financial Gaps</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-you">For You</Link>
          <span className="separator">/</span>
          <Link to="/for-you/loans">Nano Loans</Link>
          <span className="separator">/</span>
          <span className="current">60 Second Approval</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-you/loans" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Nano Loans
          </Link>
          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">About Nano Loans</span>
              <h2>Bridge Your Financial Gaps</h2>
              <p>
                Our short term loan is designed to take care of those moments where you need to bridge gaps in one's finances for a short while. The loan application and disbursement process takes place in <strong style={{ color: 'rgb(174, 106, 6)' }}>under 60 seconds</strong>.
              </p>
              <p>
                These loans may be accessed by customers who have an EcoCash wallet or a TN CyberTech Bank account. Approval is instant. An SMS will be sent with your repayment due date.
              </p>
              <p className="highlight">Quick, convenient, and reliable.</p>
            </div>
            <div className="story-image">
              <div style={{
                width: '200px',
                height: '200px',
                background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                boxShadow: '0 20px 60px rgba(255, 222, 74, 0.3)'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', fontWeight: '700', color: '#000' }}>60</div>
                  <div style={{ fontSize: '1rem', fontWeight: '600', color: '#000' }}>SECONDS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LoanAbout
