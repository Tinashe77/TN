import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function MerchantServices() {
  const sections = [
    {
      id: 'corporate-customers',
      title: 'For Corporate TN CyberTech Bank Customers',
      subtitle: 'Existing bank customers',
      link: '/for-business/merchant/corporate-customers',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"/>
          <path d="M1 21h22"/>
          <path d="M9 7h6M9 11h6M9 15h6"/>
        </svg>
      ),
    },
    {
      id: 'non-customers',
      title: 'For Non-TN CyberTech Bank Corporates',
      subtitle: 'New to the bank',
      link: '/for-business/merchant/non-customers',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
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

      <section className="content-section white-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h2>Accept Card Payments Anywhere</h2>
            <p style={{ color: '#6b7280', maxWidth: '800px', margin: '1rem auto 2rem', lineHeight: '1.8' }}>
              The Bank offers POS machines for individuals and corporate customers alike. Whether you're a large corporate, small business, or hosting a one-day event, we have a POS solution for you.
            </p>

            <div className="about-hub-icon" style={{
              width: '160px',
              height: '160px',
              margin: '0 auto 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" style={{ width: '70px', height: '70px' }}>
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 10h20"/>
              </svg>
            </div>

            <div style={{ background: '#f9fafb', padding: '1.5rem 2rem', borderRadius: '12px', maxWidth: '600px', margin: '0 auto 3rem', textAlign: 'left' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', marginBottom: '1rem', color: '#111827' }}>
                <span style={{
                  width: '32px',
                  height: '32px',
                  background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 10h20"/>
                  </svg>
                </span>
                POS Benefits
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Accept Zimswitch, VISA cards and Mastercard', 'Real-time transaction processing', 'Dedicated support', 'Competitive transaction rates'].map((benefit) => (
                  <li key={benefit} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', color: '#4b5563' }}>
                    <span style={{
                      width: '20px',
                      height: '20px',
                      background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                      borderRadius: '50%',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" style={{ width: '10px', height: '10px' }}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-label">How to Apply</span>
            <h2>Get Your POS Machine</h2>
            <p style={{ color: '#6b7280' }}>Choose the application method that suits your business type.</p>
          </div>

          <div className="about-hub-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '700px', margin: '0 auto' }}>
            {sections.map((section) => (
              <Link to={section.link} key={section.id} className="about-hub-card">
                <div className="about-hub-icon">
                  {section.icon}
                </div>
                <h3>{section.title}</h3>
                <p>{section.subtitle}</p>
                <span className="about-hub-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="image-break-section">
        <div className="image-break-overlay"></div>
        <div className="image-break-content">
          <h2>Ready to Accept Card Payments?</h2>
          <p>Contact our POS team to get started with your merchant services.</p>
        </div>
      </section>

      <section className="content-section white-section" style={{ textAlign: 'center' }}>
        <div className="container">
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
