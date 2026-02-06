import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function AgentAbout() {
  const agentBenefits = [
    'Dedicated Relationship Officer for bank assistance',
    'Access to Online Banking, Supervisor Card and EcoCash Banking Services',
    'Commission for each transaction processed',
    'Eligibility to apply for an agent loan',
    'POS device for retail transactions',
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>About Agency Banking</h1>
          <p>Benefits and overview</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <Link to="/for-business/agents">Agency Banking</Link>
          <span className="separator">/</span>
          <span className="current">About</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-business/agents" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Agency Banking
          </Link>

          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">Become an Agent</span>
              <h2>Partner With TN CyberTech Bank</h2>
              <p>
                The Agency Banking channel enables sole traders and companies to earn income by processing customer transactions on behalf of the Bank. Registered agents will be given access to the bank's systems and will be able to process various transactions.
              </p>

              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>Agent Benefits</h3>

              <div style={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                overflow: 'hidden',
              }}>
                {agentBenefits.map((benefit, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    borderBottom: index < agentBenefits.length - 1 ? '1px solid #f3f4f6' : 'none',
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="rgb(174, 106, 6)" strokeWidth="2.5" style={{
                      width: '20px',
                      height: '20px',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span style={{ color: '#4b5563', fontSize: '0.9375rem', lineHeight: '1.6' }}>{benefit}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a href="mailto:agentbanking@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
                  Apply to be an Agent
                </a>
              </div>
            </div>
            <div className="story-image">
              <div className="about-hub-icon" style={{
                width: '160px',
                height: '160px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" style={{ width: '80px', height: '80px' }}>
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AgentAbout
