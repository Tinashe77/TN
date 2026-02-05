import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function ATMServices() {
  const sections = [
    {
      id: 'locations',
      title: 'ATM Locations',
      subtitle: 'Find an ATM near you',
      link: '/for-you/atm/locations',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
    },
    {
      id: 'guides',
      title: 'How-To Guides',
      subtitle: 'Step-by-step instructions',
      link: '/for-you/atm/guides',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
    },
  ]

  const useCases = [
    { title: 'Card-based Cash Withdrawals', icon: '💳' },
    { title: 'Card-based Cash Deposits', icon: '💵' },
    { title: 'Cardless Withdrawals', icon: '📱' },
    { title: 'Cardless Deposits', icon: '🏧' },
    { title: 'VISA Deposits', icon: '💳' },
    { title: 'Remittances', icon: '🌍' },
    { title: 'Balance Enquiry', icon: '📊' },
    { title: 'Mini Statement', icon: '📄' },
    { title: 'ZWL Cash Withdrawals', icon: '🇿🇼' },
    { title: 'Zimswitch Withdrawals', icon: '🔄' },
  ]

  const limits = [
    { label: 'Daily Withdrawal Limit (USD)', value: 'USD 1,000' },
    { label: 'Daily Withdrawal Limit (ZWG)', value: 'ZWG 3,000' },
    { label: 'Available Notes', value: '$10, $20, $50, $100' },
    { label: 'Cardless Withdrawal Limit', value: 'USD 1,000' },
    { label: 'EcoCash Cash-out Limit', value: 'USD 1,000' },
    { label: 'Cash Deposit Limit', value: 'Up to 100 notes per transaction' },
  ]

  const customers = [
    {
      title: 'TN CyberTech Bank Customers',
      description: 'Full access to all ATM services with your debit card or via mobile app',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
    },
    {
      title: 'EcoCash Customers',
      description: 'Cash-in and cash-out services available at our Smart ATMs',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      ),
    },
    {
      title: 'Zimswitch Enabled',
      description: 'Customers from other Zimbabwe local banks can withdraw cash',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero" style={{ backgroundImage: "url('/banners/atm-services.jpg')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>ATM Services</h1>
          <p>Access your money anytime with our nationwide ATM network.</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-you">For You</Link>
          <span className="separator">/</span>
          <span className="current">ATM Services</span>
        </div>
      </nav>

      {/* Quick Links */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <h2 style={{ color: '#111827' }}>ATM Resources</h2>
            <p style={{ color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Find ATM locations near you or learn how to use our ATM services.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '650px', margin: '0 auto' }}>
            {sections.map((section) => (
              <Link to={section.link} key={section.id} className="mobile-banking-hub-card">
                <div className="mobile-banking-hub-icon">
                  {section.icon}
                </div>
                <h3>{section.title}</h3>
                <p>{section.subtitle}</p>
                <span className="mobile-banking-hub-arrow">
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

      {/* Who Can Use Our ATMs */}
      <section className="content-section light-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Who Can Use Our ATMs</span>
            <h2>Available To Everyone</h2>
            <p style={{ color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Our ATMs serve a wide range of customers across Zimbabwe.
            </p>
          </div>

          <div className="services-grid-3">
            {customers.map((customer) => (
              <div key={customer.title} className="service-card">
                <div className="service-card-icon">{customer.icon}</div>
                <h3>{customer.title}</h3>
                <p>{customer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Services</span>
            <h2>What You Can Do At Our ATMs</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {useCases.map((useCase) => (
              <div key={useCase.title} style={{
                padding: '1rem 1.25rem',
                background: '#f9fafb',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <span style={{ fontSize: '1.25rem' }}>{useCase.icon}</span>
                <span style={{ color: '#374151', fontSize: '0.9rem', fontWeight: '500' }}>{useCase.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transaction Limits */}
      <section className="content-section dark-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label light">Limits</span>
            <h2>ATM Transaction Limits</h2>
            <p style={{ color: '#9ca3af', maxWidth: '600px', margin: '0.5rem auto 0' }}>
              Indicative daily limits for ATM transactions.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {limits.map((limit) => (
              <div key={limit.label} style={{
                padding: '1.25rem',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <span style={{ color: '#9ca3af', fontSize: '0.9rem' }}>{limit.label}</span>
                <span style={{ color: '#fff', fontSize: '1rem', fontWeight: '600' }}>{limit.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Support</span>
            <h2>Need Help?</h2>
          </div>

          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            background: '#f9fafb',
            borderRadius: '12px',
            padding: '2rem',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{ color: '#111827', marginBottom: '1rem', fontSize: '1.1rem' }}>Captured Card?</h3>
            <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
              Visit your nearest branch with a valid national identification document to recover a captured card.
            </p>

            <h3 style={{ color: '#111827', marginBottom: '1rem', fontSize: '1.1rem' }}>Failed Transaction?</h3>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Most failed ATM transactions automatically reverse within 24 hours. If funds do not reverse automatically, contact us:
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                background: '#fff',
                borderRadius: '8px',
                border: '1px solid #e5e7eb'
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '20px', height: '20px', color: 'rgb(174, 106, 6)' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span style={{ color: '#374151', fontWeight: '500' }}>08088888</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                background: '#fff',
                borderRadius: '8px',
                border: '1px solid #e5e7eb'
              }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px', color: '#25D366' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span style={{ color: '#374151', fontWeight: '500' }}>0772 191 191</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section light-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem', color: '#111827' }}>
            Find Your Nearest ATM
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Locate our ATMs across Zimbabwe for convenient cash access.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/for-you/atm/locations" className="cta-btn cta-btn-primary">
              View ATM Locations
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/for-you/atm/guides" className="cta-btn cta-btn-secondary">
              How-To Guides
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ATMServices
