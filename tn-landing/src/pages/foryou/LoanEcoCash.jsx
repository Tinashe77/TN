import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function LoanEcoCash() {
  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>EcoCash</h1>
          <p>Apply via Mobile Money</p>
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
          <span className="current">EcoCash</span>
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
              <span className="section-label">Apply via EcoCash</span>
              <h2>Dial *151#</h2>
              <p>
                Access Nano Loans through your EcoCash wallet. Simply dial *151# to check your credit limit and apply for a loan instantly.
              </p>
              <p>
                The approval process takes place in under 60 seconds, and funds are disbursed immediately to your EcoCash wallet. You'll receive an SMS with your repayment due date.
              </p>
              <p className="highlight">Convenient mobile money access.</p>
              <div style={{ marginTop: '2rem' }}>
                <a href="tel:*151%23" className="cta-btn cta-btn-primary">
                  Dial *151#
                </a>
              </div>
            </div>
            <div className="story-image">
              <img
                src="/Business/nano-loans.png"
                alt="EcoCash Loans"
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

export default LoanEcoCash
