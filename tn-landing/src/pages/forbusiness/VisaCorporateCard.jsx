import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function VisaCorporateCard() {
  const cardFeatures = [
    {
      title: 'Card Security',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      items: [
        'Chip and Pin Protected',
        '3D Secure',
        'SMS & E-mail alerts for all transactions',
      ],
    },
    {
      title: 'Flexibility & Convenience',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      items: [
        'Links up to 3 cards on 1 account',
        'Enabled to receive Visa Direct Funds',
        'Transfer funds between TN CyberTech Bank Visa cards',
        'Reduces time spent on Admin functionalities',
        'It is as good as cash',
        'Funds accessible 30 minutes after being loaded',
      ],
    },
    {
      title: 'Account Management',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      ),
      items: [
        'Manage international business activities by viewing your monthly statement',
        'Manage cards',
        'Online statementing upon request from the bank',
        'Replacement & new card requests',
        'No monthly service fees',
      ],
    },
    {
      title: 'Reporting & Self-Service',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="20" x2="12" y2="10"/>
          <line x1="18" y1="20" x2="18" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="16"/>
        </svg>
      ),
      items: [
        'Quarterly, Monthly, ad-hoc reporting periods',
        'Web-portal and mobile app access to track transactions, transfer funds and block cards',
        '24/7 Contact center to block lost or stolen cards',
      ],
    },
  ]

  const requirements = [
    'Completed and signed application form',
    'CR14',
    'CR6',
    'Certificate of incorporation',
    'Directors\' national ID, proof of residence and photos',
    'Company resolution',
    'FCB clearance required for non SB applicants',
    'Ultimate Beneficial Owner (UBO)',
  ]

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
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

      {/* Introduction */}
      <section className="content-section white-section">
        <div className="container">
          <div className="two-col-layout">
            <div>
              <span className="section-label">Corporate VISA</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1rem' }}>
                Global Business Transactions Made Easy
              </h2>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                The TN CyberTech Bank VISA Corporate Card is a reloadable international prepaid card that enables you to transact securely and conveniently. It allows you to shop in stores and online as well as withdraw cash at any ATM displaying the Visa logo worldwide.
              </p>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                The card uses Chip & PIN technology, also known as EMV, a feature that guarantees secure and safe transacting. Card can be loaded at any of our branches.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{
                  padding: '1rem 1.5rem',
                  background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(255, 222, 74, 0.05) 100%)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 222, 74, 0.2)',
                  flex: '1',
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
                  flex: '1',
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
                  flex: '1',
                  minWidth: '140px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'rgb(174, 106, 6)' }}>$0</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Monthly Service Fee</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="content-section light-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Card Attributes</span>
            <h2>VISA Corporate Card Features</h2>
          </div>

          <div className="services-grid-2">
            {cardFeatures.map((feature) => (
              <div key={feature.title} className="service-card">
                <div className="service-card-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <ul className="feature-list">
                  {feature.items.map((item) => (
                    <li key={item}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="content-section white-section">
        <div className="container">
          <div className="two-col-layout reverse">
            <div>
              <span className="section-label">Application</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1rem' }}>
                Requirements
              </h2>
              <ul className="feature-list">
                {requirements.map((item) => (
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

            {/* <div className="info-card" style={{ background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(255, 222, 74, 0.05) 100%)' }}>
              <h3>
                <span className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4M12 8h.01"/>
                  </svg>
                </span>
                Card Issuance Fee
              </h3>
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'rgb(174, 106, 6)' }}>$20.00</div>
                <div style={{ color: '#6b7280' }}>USD</div>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                FCB clearance is required for non-TN CyberTech Bank applicants.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section dark-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Get Your VISA Corporate Card</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Contact our card centre for further assistance.
          </p>
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
