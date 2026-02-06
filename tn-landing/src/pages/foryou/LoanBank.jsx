import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function LoanBank() {
  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>TN CyberTech Bank</h1>
          <p>Apply via USSD</p>
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
          <span className="current">TN CyberTech Bank</span>
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
              <span className="section-label">Apply via Bank</span>
              <h2>Dial *236#</h2>
              <p>
                Access Nano Loans directly from your TN CyberTech Bank account. Simply dial *236# to check your credit limit and apply for a loan instantly.
              </p>
              <p>
                The approval process takes place in under 60 seconds, and funds are disbursed immediately to your account. You'll receive an SMS with your disbursement amount.
              </p>
              <p className="highlight">Quick, easy, and secure.</p>
              <div style={{ marginTop: '2rem' }}>
                <a href="tel:*236%23" className="cta-btn cta-btn-primary">
                  Dial *236#
                </a>
              </div>
            </div>
            <div className="story-image">
              <img
                src="/Business/nano-loans.png"
                alt="Bank Loans"
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  borderRadius: '16px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LoanBank
