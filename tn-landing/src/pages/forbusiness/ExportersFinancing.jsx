import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function ExportersFinancing() {
  const sectors = [
    'Agriculture',
    'Mining',
    'Tourism',
  ]

  const products = [
    'Working capital',
    'Asset acquisition',
    'Property financing',
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Exporters Financing</h1>
          <p>Export-oriented business funding</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <Link to="/for-business/corporate">Corporate & Investment Banking</Link>
          <span className="separator">/</span>
          <span className="current">Exporters Financing</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-business/corporate" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Corporate & Investment Banking
          </Link>

          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">CIB Division</span>
              <h2>Exporters Financing</h2>
              <p>
                Provides funding for export-oriented businesses across sectors like agriculture, mining, and tourism for working capital, asset acquisition, and property financing.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#111827' }}>Sectors We Support</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {sectors.map((sector) => (
                    <span key={sector} style={{
                      padding: '0.5rem 1rem',
                      background: 'linear-gradient(135deg, rgba(174, 106, 6, 0.1) 0%, rgba(255, 222, 74, 0.1) 100%)',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      color: 'rgb(174, 106, 6)',
                      fontWeight: '500',
                    }}>
                      {sector}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#111827' }}>Financing Options</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {products.map((product) => (
                    <li key={product} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: '#4b5563' }}>
                      <span style={{
                        width: '24px',
                        height: '24px',
                        background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                        borderRadius: '50%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" style={{ width: '12px', height: '12px' }}>
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </span>
                      {product}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a href="mailto:businessbanking@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
                  Contact CIB Team
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
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
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

export default ExportersFinancing
