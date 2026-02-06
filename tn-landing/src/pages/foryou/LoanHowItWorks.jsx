import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function LoanHowItWorks() {
  const steps = [
    {
      id: 'eligibility',
      title: 'Check Eligibility',
      description: 'You need an EcoCash wallet or TN CyberTech Bank account to access Nano Loans.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
    },
    {
      id: 'apply',
      title: 'Apply Instantly',
      description: 'Dial *236# for TN CyberTech Bank or *151# for EcoCash to check your limit and apply.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12" y2="18.01"/>
        </svg>
      ),
    },
    {
      id: 'approval',
      title: 'Instant Approval',
      description: 'Your loan application is processed and approved in under 60 seconds.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
    },
    {
      id: 'disbursement',
      title: 'Receive Funds',
      description: 'Funds are disbursed immediately to your account. An SMS confirms your repayment date.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
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
          <h1>How It Works</h1>
          <p>Quick Access to Funds</p>
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
          <span className="current">How It Works</span>
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

          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Simple Process</span>
            <h2>Four Easy Steps</h2>
            <p style={{ color: '#6b7280', maxWidth: '600px', margin: '1rem auto 0' }}>
              Get the funds you need in under 60 seconds with our simple application process.
            </p>
          </div>

          <div className="about-hub-grid">
            {steps.map((step, index) => (
              <div key={step.id} className="about-hub-card" style={{ cursor: 'default' }}>
                <div className="about-hub-icon">
                  {step.icon}
                </div>
                <h3>
                  <span style={{ color: 'rgb(174, 106, 6)', marginRight: '0.5rem' }}>{index + 1}.</span>
                  {step.title}
                </h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LoanHowItWorks
