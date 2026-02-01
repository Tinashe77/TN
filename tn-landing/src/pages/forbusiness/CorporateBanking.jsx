import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function CorporateBanking() {
  const keyFacilities = [
    {
      title: 'Healthcare Financing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      description: 'Supports private healthcare development by funding diagnostic centers, hospitals, clinics, laboratories, and specialist practitioners for commercial mortgages, asset finance, and working capital.',
    },
    {
      title: 'Renewable Energy Financing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ),
      description: 'Promotes clean and affordable energy solutions, including solar installations for commercial, industrial, and residential customers, waste management, and smart city projects. Offers products such as asset finance, commercial mortgages, lines of credit, green bonds, and carbon finance.',
    },
    {
      title: 'Exporters Financing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      description: 'Provides funding for export-oriented businesses across sectors like agriculture, mining, and tourism for working capital, asset acquisition, and property financing.',
    },
  ]

  const productOfferings = [
    { title: 'Working Capital Loans/Overdrafts', desc: 'Short-term financing for exporters, healthcare, and renewable energy businesses.' },
    { title: 'Commercial Mortgages', desc: 'Long-term property financing for healthcare and export sectors.' },
    { title: 'Asset Finance', desc: 'Medium-term loans for equipment acquisition and infrastructure upgrades to boost productivity and service quality.' },
    { title: 'Research, Capital Markets & Advisory', desc: 'Capital raising, debt restructuring, structured finance, foreign credit arrangements, due diligence, business valuations, and M&A advisory.' },
    { title: 'Balance Sheet Restructuring', desc: 'Assists corporates in reducing liabilities and improving financial sustainability.' },
    { title: 'Foreign Payments & Currency Switches', desc: 'Facilitates international trade through wire transfers and foreign exchange transactions.' },
    { title: 'Value Chain Linkages', desc: 'Supports customers across the entire value chain with financing and technical assistance to foster long-term partnerships.' },
  ]

  const advisoryServices = [
    'Providing expert advice on raising capital including debt issuance, rights issues, private placements and Initial Public Offers (IPOs)',
    'Negotiating and restructuring debt obligations including debt to equity swaps',
    'Structured finance arrangements',
    'Arranging foreign lines of credit',
    'Performing financial due diligence on behalf of Bank\'s clients involved in mergers and acquisitions',
    'Conducting business valuations on behalf of transacting clients',
    'Offer financial advisory services in mergers and acquisitions transactions',
  ]

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Corporate & Investment Banking</h1>
          <p>Strategic financing solutions for high-value corporate clients</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <span className="current">Corporate & Investment Banking</span>
        </div>
      </nav>

      {/* Introduction */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">CIB Division</span>
            <h2>Serving High-Value Corporate Clients</h2>
            <p>
              The Corporate and Investment Banking (CIB) division serves high-value corporate clients, including large corporations, financial institutions, institutional investors, financial sponsors, public-sector organizations, and exporters.
            </p>
          </div>

          <div style={{
            padding: '1.5rem 2rem',
            background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(255, 222, 74, 0.05) 100%)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 222, 74, 0.2)',
            marginBottom: '2rem',
          }}>
            <p style={{ color: '#4b5563', margin: 0 }}>
              <strong style={{ color: 'rgb(174, 106, 6)' }}>Strategic Focus:</strong> The Corporate Banking Unit has a strategic focus on Health, Renewable Energy, and Exporters/Foreign Currency Generators.
            </p>
          </div>
        </div>
      </section>

      {/* Key Facilities */}
      {/* <section className="content-section light-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Key Facilities</span>
            <h2>Specialized Financing Solutions</h2>
          </div>

          <div className="services-grid-3">
            {keyFacilities.map((facility) => (
              <div key={facility.title} className="service-card">
                <div className="service-card-icon">{facility.icon}</div>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Product Offerings */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Product Offerings</span>
            <h2>Comprehensive Corporate Solutions</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {productOfferings.map((product, idx) => (
              <div key={product.title} className="info-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  minWidth: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000',
                  fontWeight: '700',
                }}>
                  {idx + 1}
                </div>
                <div>
                  <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>{product.title}</h3>
                  <p style={{ color: '#6b7280', margin: 0 }}>{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Services */}
      <section className="content-section light-section">
        <div className="container">
          <div className="two-col-layout">
            <div>
              <span className="section-label">Advisory Services</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1rem' }}>
                Research, Capital Markets & Advisory
              </h2>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                In a fast-paced environment with a rapidly changing economic environment, the Bank supports businesses by:
              </p>
              <ul className="feature-list">
                {advisoryServices.map((service) => (
                  <li key={service}>
                    <span className="check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="info-card" style={{ background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(255, 222, 74, 0.05) 100%)' }}>
              <h3>
                <span className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="20" x2="12" y2="10"/>
                    <line x1="18" y1="20" x2="18" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="16"/>
                  </svg>
                </span>
                Additional Services
              </h3>

              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>Balance Sheet Restructuring</h4>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1.5rem' }}>
                  Through taking over and restructuring corporate clients' liabilities with other financial institutions, the Bank assists companies to deleverage their balance sheets and finance their businesses in a sustainable way.
                </p>

                <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>Foreign Payments & Switches</h4>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1.5rem' }}>
                  Facilitates International wire transfers via our wide network of correspondent Banks in the World's Financial Centres. Also allows for the exchange of currencies through foreign exchange switch transactions.
                </p>

                <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>Value Chain Linkages</h4>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
                  Supports value chain activities from design, production, marketing, and support at all stages for exporting customers through loans and technical support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section dark-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Partner with Our CIB Team</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Let us help your business achieve sustainable growth with our corporate financing solutions.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:businessbanking@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
              Contact CIB Team
            </a>
            <Link to="/contact" className="cta-btn cta-btn-secondary">
              Visit a Branch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CorporateBanking
