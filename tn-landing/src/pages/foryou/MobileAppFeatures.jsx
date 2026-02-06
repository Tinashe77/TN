import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function MobileAppFeatures() {
  const appFeatures = [
    'Balance enquiry',
    'Buy airtime',
    'Bill payments',
    'Add beneficiaries',
    'View mini statement',
    'Funds transfers (RTGS, Zipit, Internal Transfer)',
    'Alerts on Account activity',
  ]

  const excitingFeatures = [
    'Fingerprint login to the Mobile App',
    'A Quick Access Menu that shows the last 3 transactions',
    'Customer can send queries via the App',
    'Add payment beneficiaries - Convenient to avoid entering a beneficiary details every time one transfers funds',
  ]

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>App Features</h1>
          <p>What you can do with the TN CyberCash App</p>
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
          <Link to="/for-you/mobile-banking/app">TN CyberCash App</Link>
          <span className="separator">/</span>
          <span className="current">App Features</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-you/mobile-banking/app" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to TN CyberCash App
          </Link>

          <div className="two-col-layout">
            <div>
              <span className="section-label">TN CyberCash App</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1rem' }}>
                Mobile Banking Application
              </h2>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Our mobile app is an integrated solution that gives TN CyberTech Bank customers the power to transact <strong>whenever</strong> and <strong>wherever</strong> they are. The App enables paperless and branchless banking.
              </p>

              <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>With the TN CyberCash, you can do the following:</h4>
              <ul className="feature-list">
                {appFeatures.map((feature) => (
                  <li key={feature}>
                    <span className="check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {feature}
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
                Exciting Features
              </h3>
              <ul className="feature-list">
                {excitingFeatures.map((feature) => (
                  <li key={feature}>
                    <span className="check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MobileAppFeatures
