import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function VisaCardFlexibility() {
  const features = [
    'Enabled to receive Visa Direct Funds',
    'Transfer funds between TN CyberTech Bank Visa cards',
    'Reduces time spent on Admin functionalities',
    'It is as good as cash',
    'Funds accessible 30 minutes after being loaded',
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Flexibility & Convenience</h1>
          <p>Multiple cards, easy fund transfers</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <Link to="/for-business/visa-corporate-card">Visa Corporate Card</Link>
          <span className="separator">/</span>
          <span className="current">Flexibility & Convenience</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-business/visa-corporate-card" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Visa Corporate Card
          </Link>

          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">Card Features</span>
              <h2>Flexibility & Convenience</h2>
              <p>
                The TN CyberTech Bank VISA Corporate Card offers maximum flexibility for your business operations with multiple card options and easy fund management.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {features.map((feature) => (
                    <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#4b5563' }}>
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a href="mailto:cardcentre@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
                  Contact Card Centre
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

export default VisaCardFlexibility
