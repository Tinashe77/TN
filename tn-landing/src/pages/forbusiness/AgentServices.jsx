import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function AgentServices() {
  const agentTransactions = [
    'Visa card issuance and replacements',
    'Visa card deposits (uploads)',
    'ZWG card issuance and replacements',
    'Account Opening',
    'Balance Enquiry',
    'Mini Statement',
    'Cash Deposit',
    'Cash Withdrawal',
    'International Remittance Cash pay-outs for World Remit and EcoCash Remit',
    'Bureau de Change / Currency Exchange at selected Agents',
  ]

  const additionalServices = [
    'Card Activation / Set PIN',
    'EcoCash Banking Services Registration',
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Agent Services</h1>
          <p>Transactions you can process</p>
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
          <span className="current">Agent Services</span>
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
              <span className="section-label">Agent Banking</span>
              <h2>Agent Transactions</h2>
              <p>
                As a registered agent, you will be given access to the bank's systems and will be able to process the following transactions:
              </p>

              <div style={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                overflow: 'hidden',
                marginTop: '1.5rem',
              }}>
                {agentTransactions.map((transaction, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1rem 1.5rem',
                    borderBottom: index < agentTransactions.length - 1 ? '1px solid #f3f4f6' : 'none',
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="rgb(174, 106, 6)" strokeWidth="2.5" style={{
                      width: '20px',
                      height: '20px',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span style={{ color: '#4b5563', fontSize: '0.9375rem', lineHeight: '1.6' }}>{transaction}</span>
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#111827', marginTop: '2rem', marginBottom: '1rem' }}>Additional Services</h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem',
              }}>
                {additionalServices.map((service, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '1rem 1.25rem',
                    background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(174, 106, 6, 0.05) 100%)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 222, 74, 0.2)',
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="rgb(174, 106, 6)" strokeWidth="2.5" style={{
                      width: '20px',
                      height: '20px',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span style={{ color: '#4b5563', fontSize: '0.9375rem' }}>{service}</span>
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
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
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

export default AgentServices
