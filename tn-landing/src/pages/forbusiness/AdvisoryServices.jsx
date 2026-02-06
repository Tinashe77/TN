import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function AdvisoryServices() {
  const services = [
    'Providing expert advice on raising capital including debt issuance, rights issues, private placements and Initial Public Offers (IPOs)',
    'Negotiating and restructuring debt obligations including debt to equity swaps',
    'Structured finance arrangements',
    'Arranging foreign lines of credit',
    'Performing financial due diligence on behalf of Bank\'s clients involved in mergers and acquisitions',
    'Conducting business valuations on behalf of transacting clients',
    'Offer financial advisory services in mergers and acquisitions transactions',
  ]

  const additionalServices = [
    {
      title: 'Balance Sheet Restructuring',
      description: 'Through taking over and restructuring corporate clients\' liabilities with other financial institutions, the Bank assists companies to deleverage their balance sheets and finance their businesses in a sustainable way.',
    },
    {
      title: 'Foreign Payments & Switches',
      description: 'Facilitates International wire transfers via our wide network of correspondent Banks in the World\'s Financial Centres. Also allows for the exchange of currencies through foreign exchange switch transactions.',
    },
    {
      title: 'Value Chain Linkages',
      description: 'Supports value chain activities from design, production, marketing, and support at all stages for exporting customers through loans and technical support.',
    },
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Research, Capital Markets & Advisory</h1>
          <p>Expert financial advisory services</p>
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
          <span className="current">Advisory Services</span>
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
              <h2>Research, Capital Markets & Advisory</h2>
              <p>
                In a fast-paced environment with a rapidly changing economic environment, the Bank supports businesses by:
              </p>

              <div style={{ marginTop: '2rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {services.map((service, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem', color: '#4b5563' }}>
                      <span style={{
                        width: '24px',
                        height: '24px',
                        minWidth: '24px',
                        background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                        borderRadius: '50%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" style={{ width: '12px', height: '12px' }}>
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </span>
                      <span>{service}</span>
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
                  <line x1="12" y1="20" x2="12" y2="10"/>
                  <line x1="18" y1="20" x2="18" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="16"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section light-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-label">Additional Services</span>
            <h2>Supporting Your Business Growth</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {additionalServices.map((service) => (
              <div key={service.title} style={{
                background: '#fff',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}>
                <h3 style={{ fontSize: '1.1rem', color: '#111827', marginBottom: '0.75rem' }}>{service.title}</h3>
                <p style={{ color: '#6b7280', margin: 0, fontSize: '0.95rem', lineHeight: '1.7' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AdvisoryServices
