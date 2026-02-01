import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function VisaCorporateCard() {
  const sections = [
    {
      id: 'security',
      title: 'Card Security',
      subtitle: 'Chip & PIN protection, 3D Secure',
      link: '/for-business/visa-corporate-card/security',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
    },
    {
      id: 'flexibility',
      title: 'Flexibility & Convenience',
      subtitle: 'Multiple cards, Visa Direct enabled',
      link: '/for-business/visa-corporate-card/flexibility',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
    },
    {
      id: 'management',
      title: 'Account Management',
      subtitle: 'Statements, card controls',
      link: '/for-business/visa-corporate-card/management',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      ),
    },
    {
      id: 'reporting',
      title: 'Reporting & Self-Service',
      subtitle: 'Web portal, mobile app, 24/7 support',
      link: '/for-business/visa-corporate-card/reporting',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="12" y1="20" x2="12" y2="10"/>
          <line x1="18" y1="20" x2="18" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="16"/>
        </svg>
      ),
    },
    {
      id: 'apply',
      title: 'How to Apply',
      subtitle: 'Requirements & application process',
      link: '/for-business/visa-corporate-card/apply',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
          <path d="M9 14l2 2 4-4"/>
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
          <h1>VISA Corporate Card</h1>
          <p>Reloadable international prepaid card for secure global transactions</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <span className="current">Visa Corporate Card</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <span className="section-label">Corporate VISA</span>
            <h2>Global Business Transactions Made Easy</h2>
            <p style={{ color: '#6b7280', maxWidth: '800px', margin: '1rem auto 2rem', lineHeight: '1.8' }}>
              The TN CyberTech Bank VISA Corporate Card is a reloadable international prepaid card that enables you to transact securely and conveniently. It allows you to shop in stores and online as well as withdraw cash at any ATM displaying the Visa logo worldwide.
            </p>

            <div style={{
              padding: '2rem',
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              width: '320px',
              height: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              margin: '0 auto 2rem',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <img src="/visa.jpg" alt="VISA" style={{ height: '28px' }} />
                <span style={{ color: 'rgb(255, 222, 74)', fontWeight: '600', fontSize: '0.875rem' }}>CORPORATE</span>
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.125rem', letterSpacing: '3px' }}>
                **** **** **** ****
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.625rem', marginBottom: '0.25rem' }}>CARDHOLDER</div>
                  <div style={{ color: '#fff', fontSize: '0.875rem' }}>YOUR COMPANY</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.625rem', marginBottom: '0.25rem' }}>VALID THRU</div>
                  <div style={{ color: '#fff', fontSize: '0.875rem' }}>MM/YY</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}>
              <div style={{
                padding: '1rem 1.5rem',
                background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(255, 222, 74, 0.05) 100%)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 222, 74, 0.2)',
                minWidth: '140px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'rgb(174, 106, 6)' }}>3</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Cards per Account</div>
              </div>
              <div style={{
                padding: '1rem 1.5rem',
                background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(255, 222, 74, 0.05) 100%)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 222, 74, 0.2)',
                minWidth: '140px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'rgb(174, 106, 6)' }}>30</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Minutes to Access Funds</div>
              </div>
              <div style={{
                padding: '1rem 1.5rem',
                background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(255, 222, 74, 0.05) 100%)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 222, 74, 0.2)',
                minWidth: '140px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'rgb(174, 106, 6)' }}>$0</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Monthly Service Fee</div>
              </div>
            </div>
          </div>

          <div className="about-hub-grid">
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
          <h2>Get Your VISA Corporate Card</h2>
          <p>Contact our card centre for further assistance.</p>
        </div>
      </section>

      <section className="content-section white-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:cardcentre@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
              Email Card Centre
            </a>
            <a href="tel:+263772191191" className="cta-btn cta-btn-secondary">
              Call +263 772 191 191
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default VisaCorporateCard
