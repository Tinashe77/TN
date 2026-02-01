import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function CIBProductOfferings() {
  const productOfferings = [
    {
      title: 'Working Capital Loans/Overdrafts',
      description: 'Short-term financing to manage day-to-day operational expenses and maintain healthy cash flow for your business.',
    },
    {
      title: 'Commercial Mortgages',
      description: 'Long-term financing for purchasing or developing commercial property to support your business expansion.',
    },
    {
      title: 'Asset Finance',
      description: 'Financing for the acquisition of equipment, machinery, and other business assets to enhance productivity.',
    },
    {
      title: 'Balance Sheet Restructuring',
      description: 'Through taking over and restructuring corporate clients\' liabilities with other financial institutions, the Bank assists companies to deleverage their balance sheets and finance their businesses in a sustainable way.',
    },
    {
      title: 'Foreign Payments & Currency Switches',
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
          <h1>CIB Product Offerings</h1>
          <p>Comprehensive financing solutions for corporate clients</p>
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
          <span className="current">Product Offerings</span>
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
              <h2>Product Offerings</h2>
              <p>
                The Corporate and Investment Banking (CIB) division serves high-value corporate clients, including large corporations, financial institutions, institutional investors, financial sponsors, public-sector organizations, and exporters.
              </p>

              <div style={{
                padding: '1.5rem 2rem',
                background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(255, 222, 74, 0.05) 100%)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 222, 74, 0.2)',
                marginTop: '2rem',
              }}>
                <p style={{ color: '#4b5563', margin: 0 }}>
                  <strong style={{ color: 'rgb(174, 106, 6)' }}>Strategic Focus:</strong> The Corporate Banking Unit has a strategic focus on Health, Renewable Energy, and Exporters/Foreign Currency Generators.
                </p>
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
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section light-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-label">Our Products</span>
            <h2>Financing Solutions</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {productOfferings.map((product) => (
              <div key={product.title} style={{
                background: '#fff',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.75rem' }}>
                  <span style={{
                    width: '32px',
                    height: '32px',
                    minWidth: '32px',
                    background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" style={{ width: '14px', height: '14px' }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <h3 style={{ fontSize: '1.1rem', color: '#111827', margin: 0 }}>{product.title}</h3>
                </div>
                <p style={{ color: '#6b7280', margin: 0, fontSize: '0.95rem', lineHeight: '1.7', paddingLeft: '48px' }}>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CIBProductOfferings
