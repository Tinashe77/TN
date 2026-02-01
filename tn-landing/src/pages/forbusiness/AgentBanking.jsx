import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function AgentBanking() {
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

  const agentBenefits = [
    'Dedicated Relationship Officer for bank assistance',
    'Access to Online Banking, Supervisor Card and EcoCash Banking Services',
    'Commission for each transaction processed',
    'Eligibility to apply for an agent loan',
    'POS device for retail transactions',
  ]

  const soleTraderRequirements = [
    'Duly Completed Agent Application form',
    'Proof of Business Address',
    'Copy of Applicant\'s ID',
    'Applicants Passport Photos',
    'Applicant\'s Proof of Residence',
    'Trading Licence',
    'Tax Clearance',
    'Copy of Cashiers\' ID',
  ]

  const corporateRequirements = [
    'Duly Completed Agent Application form',
    'Certificate of incorporation',
    'CR 6 & CR 14',
    'Tax Clearance',
    'Memorandum and Articles of Association',
    'Proof of Business Address',
    'Directors\' Passport Photos',
    'Directors\' Copy of IDs',
    'Directors\' Proof of Residence',
    'Copy of Cashiers ID',
  ]

  const customerServices = [
    'Apply for Corporate and Personal Accounts',
    'Card Based and Direct Cash Deposits',
    'Card Based Withdrawals',
    'Internal Transfers',
    'Bill Payments',
    'Balance Enquiries',
    'Mini Statements',
  ]

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Agency Banking</h1>
          <p>Earn income by processing customer transactions on behalf of the Bank.</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <span className="current">Agency Banking</span>
        </div>
      </nav>

      {/* Introduction */}
      <section className="content-section white-section">
        <div className="container">
          <div className="two-col-layout">
            <div>
              <span className="section-label">Become an Agent</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1rem' }}>
                Partner With TN CyberTech Bank
              </h2>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                The Agency Banking channel enables sole traders and companies to earn income by processing customer transactions on behalf of the Bank. Registered agents will be given access to the bank's systems and will be able to process various transactions.
              </p>

              <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>Agent Transactions:</h4>
              <ul className="feature-list">
                {agentTransactions.map((item) => (
                  <li key={item}>
                    <span className="check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="info-card">
              <h3>
                <span className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </span>
                Additional Services
              </h3>
              <ul className="feature-list">
                {additionalServices.map((item) => (
                  <li key={item}>
                    <span className="check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="requirements-box" style={{ marginTop: '1.5rem' }}>
                <h4>Agent Benefits</h4>
                <ul>
                  {agentBenefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="content-section light-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Application Requirements</span>
            <h2>What You Need to Apply</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {/* Sole Trader Requirements */}
            <div className="info-card">
              <h3 style={{ borderBottom: '2px solid rgba(255, 222, 74, 0.3)', paddingBottom: '1rem' }}>
                <span className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
                For Sole Traders
              </h3>
              <ul className="feature-list">
                {soleTraderRequirements.map((item) => (
                  <li key={item}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Corporate Requirements */}
            <div className="info-card">
              <h3 style={{ borderBottom: '2px solid rgba(255, 222, 74, 0.3)', paddingBottom: '1rem' }}>
                <span className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"/>
                    <path d="M1 21h22"/>
                    <path d="M9 7h6M9 11h6M9 15h6"/>
                  </svg>
                </span>
                For Corporates
              </h3>
              <ul className="feature-list">
                {corporateRequirements.map((item) => (
                  <li key={item}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Customers Section */}
      {/* <section className="content-section white-section">
        <div className="container">
          <div className="two-col-layout reverse">
            <div>
              <span className="section-label">For Customers</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1rem' }}>
                Services Available at Agent Locations
              </h2>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Our Agents, approved third parties acting on behalf of the Bank, are equipped with adequate ICT equipment that enables them to connect to the Bank's servers using VPN or other data connections to facilitate real-time basic banking transactions. This allows them to offer customers with the following services, the same way any TN CyberTech Bank branch would do:
              </p>

              <ul className="feature-list">
                {customerServices.map((item) => (
                  <li key={item}>
                    <span className="check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
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
                <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" style={{ width: '80px', height: '80px' }}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="content-section dark-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Apply to be an Agent</h2>
          <p style={{ color: '#9ca3af', marginBottom: '1rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            Our Agent Banking Team operates from 79 Oliver Tambo Avenue, Harare.
          </p>
          <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>
            Telephone: <strong style={{ color: 'rgb(255, 222, 74)' }}>+263 8677020267</strong> or <strong style={{ color: 'rgb(255, 222, 74)' }}>+263 4 720677 / 720680</strong>
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:agentbanking@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
              Email Agent Banking
            </a>
            <a href="tel:+2638677020267" className="cta-btn cta-btn-secondary">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AgentBanking
