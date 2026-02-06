import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function DiasporaPartners() {
  const remittancePartners = [
    { name: 'Hello Paisa', logo: '/hellopaisa.jpg' },
    { name: 'Mama Money', logo: '/mamamoney.jpg' },
    { name: 'Master Remit', logo: '/masterremit.jpg' },
    { name: 'Money Gram', logo: '/moneygram.jpg' },
    { name: 'Remitly', logo: '/remitly.jpg' },
    { name: 'Ria', logo: '/riamoney.jpg' },
    { name: 'Sasai Money Transfer', logo: '/sasai.jpg' },
    { name: 'Shoprite Send', logo: '/shoprite.jpg' },
    { name: 'Thunes', logo: '/thunes.jpg' },
    { name: 'Western Union', logo: '/western-union.jpg' },
    { name: 'World Remit', logo: '/worldremit.jpg' }
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero" style={{ backgroundImage: "url('/banners/diaspora.jpg')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Remittance Partners</h1>
          <p>Our global partners</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/diaspora">Diaspora Banking</Link>
          <span className="separator">/</span>
          <span className="current">Partners</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/diaspora" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Diaspora Banking
          </Link>

          <div className="story-content" style={{ maxWidth: '100%' }}>
            <span className="section-label">Our Partners</span>
            <h2>Receive Funds From</h2>
            <p>
              You can receive funds via Cash Pick Up option from a wide range of international remittance partners.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1rem',
              marginTop: '2rem',
            }}>
              {remittancePartners.map((partner) => (
                <div key={partner.name} style={{
                  padding: '1.25rem',
                  background: '#fff',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    style={{
                      width: '70px',
                      height: '50px',
                      objectFit: 'contain',
                      marginBottom: '0.5rem',
                    }}
                  />
                  <span style={{ fontSize: '0.95rem', color: '#111827', textAlign: 'center', fontWeight: '500' }}>{partner.name}</span>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(255, 222, 74, 0.05) 100%)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 222, 74, 0.2)',
            }}>
              <h4 style={{ color: '#111827', marginBottom: '0.5rem' }}>Sending Money Abroad?</h4>
              <p style={{ color: '#6b7280', marginBottom: '0' }}>
                For sending money abroad, we partner with <strong style={{ color: 'rgb(174, 106, 6)' }}>Money Gram</strong> and <strong style={{ color: 'rgb(174, 106, 6)' }}>Western Union</strong>.
              </p>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="mailto:diasporabanking@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
                Contact Diaspora Team
              </a>
              <Link to="/contact" className="cta-btn cta-btn-secondary">
                Find a Branch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DiasporaPartners
