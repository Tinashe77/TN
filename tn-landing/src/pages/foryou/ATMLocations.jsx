import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function ATMLocations() {
  const locations = [
    {
      branch: 'Avondale',
      address: '7 King George Rd, Avondale',
      atms: 2,
      services: ['Express Cash Withdrawal', 'Cash Deposit'],
      hasDeposit: true,
    },
    {
      branch: 'Joina City',
      address: 'Upper Ground Floor, Joina City, Cnr Julius Nyerere Way and Jason Moyo Avenue, Harare',
      atms: 1,
      services: ['Express Cash Withdrawal', 'Cash Deposit'],
      hasDeposit: true,
    },
    {
      branch: 'Eastgate',
      address: 'Shop 25-27, Eastgate Shopping Complex',
      atms: 3,
      services: ['Express Cash Withdrawal', 'Cash Deposit', 'ZWL Withdrawals'],
      hasDeposit: true,
    },
    {
      branch: 'Platinum (Borrowdale)',
      address: '48 Borrowdale Road, Harare',
      atms: 1,
      services: ['Express Cash Withdrawal', 'Cash Deposit'],
      hasDeposit: true,
    },
    {
      branch: 'Madokero',
      address: 'Madokero Mall',
      atms: 1,
      services: ['Express Cash Withdrawal'],
      hasDeposit: false,
    },
    {
      branch: 'Makoni',
      address: 'Zuva Makoni Service Station, Chitungwiza',
      atms: 1,
      services: ['Express Cash Withdrawal'],
      hasDeposit: false,
    },
    {
      branch: 'Bulawayo',
      address: 'Bambanani Centre, Corner 9th Avenue and Jason Moyo, Bulawayo',
      atms: 2,
      services: ['Express Cash Withdrawal', 'Cash Deposit'],
      hasDeposit: true,
    },
    {
      branch: 'Masvingo',
      address: '22 Robert Mugabe Way, Masvingo',
      atms: 1,
      services: ['Express Cash Withdrawal', 'Cash Deposit'],
      hasDeposit: true,
    },
    {
      branch: 'Mutare',
      address: '49-51 Second Street, Mutare',
      atms: 1,
      services: ['Express Cash Withdrawal', 'Cash Deposit'],
      hasDeposit: true,
    },
    {
      branch: 'Gweru',
      address: 'Stand No 124 Main Street, Gweru',
      atms: 1,
      services: ['Express Cash Withdrawal', 'Cash Deposit'],
      hasDeposit: true,
    },
    {
      branch: 'Greenfields (Coming Soon)',
      address: 'Greenfields Retail Centre, Showgrounds, Belvedere, Harare (Next to Steers)',
      atms: 1,
      services: ['Express Cash Withdrawal', 'Cash Deposit'],
      hasDeposit: true,
      comingSoon: true,
    },
  ]

  const depositLocations = locations.filter(loc => loc.hasDeposit && !loc.comingSoon)

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero" style={{ backgroundImage: "url('/banners/atm-services.jpg')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>ATM Locations</h1>
          <p>Find a TN CyberTech Bank ATM near you.</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-you">For You</Link>
          <span className="separator">/</span>
          <Link to="/for-you/atm">ATM Services</Link>
          <span className="separator">/</span>
          <span className="current">Locations</span>
        </div>
      </nav>

      {/* ATM Locations Table */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-label">Nationwide Network</span>
            <h2>Our ATM Locations</h2>
            <p style={{ color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Access your money at any of our ATMs across Zimbabwe.
            </p>
          </div>

          {/* Desktop Table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.9rem',
              minWidth: '700px'
            }}>
              <thead>
                <tr style={{ background: '#111827', color: '#fff' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Branch</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Address</th>
                  <th style={{ padding: '1rem', textAlign: 'center', fontWeight: '600' }}>ATMs</th>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Services</th>
                </tr>
              </thead>
              <tbody>
                {locations.map((location, index) => (
                  <tr
                    key={location.branch}
                    style={{
                      background: index % 2 === 0 ? '#fff' : '#f9fafb',
                      borderBottom: '1px solid #e5e7eb',
                      opacity: location.comingSoon ? 0.7 : 1
                    }}
                  >
                    <td style={{ padding: '1rem', fontWeight: '500', color: '#111827' }}>
                      {location.branch}
                      {location.comingSoon && (
                        <span style={{
                          display: 'inline-block',
                          marginLeft: '0.5rem',
                          padding: '0.15rem 0.5rem',
                          background: 'rgb(174, 106, 6)',
                          color: '#fff',
                          borderRadius: '4px',
                          fontSize: '0.7rem',
                          fontWeight: '600'
                        }}>
                          COMING SOON
                        </span>
                      )}
                    </td>
                    <td style={{ padding: '1rem', color: '#6b7280' }}>{location.address}</td>
                    <td style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: '#111827' }}>{location.atms}</td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {location.services.map((service) => (
                          <span key={service} style={{
                            display: 'inline-block',
                            padding: '0.2rem 0.5rem',
                            background: service.includes('Deposit') ? 'rgba(34, 197, 94, 0.1)' : 'rgba(174, 106, 6, 0.1)',
                            color: service.includes('Deposit') ? '#15803d' : 'rgb(174, 106, 6)',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            fontWeight: '500'
                          }}>
                            {service}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit-Taking ATMs */}
      <section className="content-section light-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Cash Deposits</span>
            <h2>Deposit-Taking ATMs</h2>
            <p style={{ color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              The following locations have Smart ATMs that accept cash deposits (up to 100 notes per transaction).
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {depositLocations.map((location) => (
              <div key={location.branch} style={{
                padding: '1.25rem',
                background: '#fff',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(34, 197, 94, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2" style={{ width: '18px', height: '18px' }}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: '#111827', marginBottom: '0.25rem', fontSize: '0.95rem' }}>{location.branch}</h4>
                  <p style={{ color: '#6b7280', fontSize: '0.8rem', margin: 0 }}>{location.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="content-section dark-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label light">Quick Info</span>
            <h2>ATM Details</h2>
          </div>

          <div className="services-grid-3" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="service-card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>Available Notes</h3>
              <p style={{ color: '#9ca3af' }}>$10, $20, $50, and $100 denominations available</p>
            </div>
            <div className="service-card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>Daily Limit</h3>
              <p style={{ color: '#9ca3af' }}>USD 1,000 per day per account (ZWG 3,000)</p>
            </div>
            <div className="service-card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>Deposit Limit</h3>
              <p style={{ color: '#9ca3af' }}>Up to 100 notes per deposit transaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section white-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem', color: '#111827' }}>
            Need Help Using Our ATMs?
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Check out our step-by-step guides for cardless transactions and more.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/for-you/atm/guides" className="cta-btn cta-btn-primary">
              View How-To Guides
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
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

export default ATMLocations
