import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function MerchantServices() {
  const applicationMethods = [
    {
      title: 'For Corporate TN CyberTech Bank Customers',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"/>
          <path d="M1 21h22"/>
          <path d="M9 7h6M9 11h6M9 15h6"/>
        </svg>
      ),
      steps: [
        'Send a written request to our POS team',
        'Email: posmerchant@tncybertechbank.co.zw',
      ],
      highlight: ' ',
    },
    {
      title: 'For Non-TN CyberTech Bank Corporates',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      ),
      steps: [
        'Complete POS Application form',
        'Submit KYC Documents',
        'Email: posmerchant@tncybertechbank.co.zw',
      ],
    },
    {
      title: 'For Individuals (Event Hire)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      steps: [
        'Complete POS application form',
        'Pay application fee',
        'Available for single-day event hire',
      ],
      note: 'Perfect for markets, fairs, and special events',
    },
  ]

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Merchant Services - POS</h1>
          <p>Point of Sale Machines for Your Business</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <span className="current">Merchant Services - POS</span>
        </div>
      </nav>

      {/* Introduction */}
      <section className="content-section white-section">
        <div className="container">
          <div className="two-col-layout">
            <div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1rem' }}>
                Accept Card Payments Anywhere
              </h2>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                The Bank offers POS machines for individuals and corporate customers alike. Whether you're a large corporate, small business, or hosting a one-day event, we have a POS solution for you.
              </p>

              <div className="info-card" style={{ background: '#f9fafb' }}>
                <h3>
                  <span className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="M2 10h20"/>
                    </svg>
                  </span>
                  POS Benefits
                </h3>
                <ul className="feature-list">
                  <li>
                    <span className="check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    Accept Zimswitch and VISA cards
                  </li>
                  <li>
                    <span className="check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    Real-time transaction processing
                  </li>
                  <li>
                    <span className="check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    Dedicated support
                  </li>
                  <li>
                    <span className="check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    Competitive transaction rates
                  </li>
                </ul>
              </div>
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
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 10h20"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="content-section light-section">
        <div className="container">
          <div className="section-header">
            <h2>Get Your POS Machine</h2>
            <p>Choose the application method that suits your business type.</p>
          </div>

          <div className="services-grid-3">
            {applicationMethods.map((method) => (
              <div key={method.title} className="service-card">
                <div className="service-card-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <div className="steps-list">
                  {method.steps.map((step, idx) => (
                    <div key={step} className="step-item">
                      <span className="step-number">{idx + 1}</span>
                      <div className="step-content">
                        <p>{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {method.highlight && (
                  <div style={{
                    marginTop: '1rem',
                    padding: '0.75rem',
                    background: 'rgba(255, 222, 74, 0.1)',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    color: 'rgb(174, 106, 6)',
                    fontWeight: '500',
                  }}>
                    {method.highlight}
                  </div>
                )}
                {method.note && (
                  <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#6b7280', fontStyle: 'italic' }}>
                    {method.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section dark-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Accept Card Payments?</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Contact our POS team to get started with your merchant services.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:posmerchant@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
              Email POS Team
            </a>
            <Link to="/contact" className="cta-btn cta-btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MerchantServices
