import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function ExportImport() {
  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Export and Import</h1>
          <p>Financing for working capital and capital expenditure</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <Link to="/for-business/international">International Banking</Link>
          <span className="separator">/</span>
          <span className="current">Export and Import</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-business/international" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to International Banking
          </Link>

          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">International Banking</span>
              <h2>Export and Import</h2>
              <p>
                Through its foreign correspondents and international partners, TN CyberTech Bank can arrange finance to assist its clients in funding their working capital and capital expenditure requirements.
              </p>

              <div style={{
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(255, 222, 74, 0.05) 100%)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 222, 74, 0.2)',
                marginTop: '2rem',
              }}>
                <p style={{ color: '#4b5563', margin: 0 }}>
                  <strong style={{ color: 'rgb(174, 106, 6)' }}>Global Network:</strong> Our extensive network of foreign correspondents and international partners enables us to provide comprehensive financing solutions for your import and export needs.
                </p>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a href="mailto:International_Banking@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
                  Contact International Banking
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
                  <rect x="1" y="3" width="15" height="13"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
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

export default ExportImport
