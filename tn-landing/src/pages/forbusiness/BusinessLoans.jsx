import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function BusinessLoans() {
  const loanProducts = [
    {
      title: 'Working Capital Loans / Overdrafts',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      description: 'The Bank Offers Working Capital and Capital Expenditure loans to businesses in various sectors which include but are not limited to Agriculture, Healthcare, Construction, Retail, Renewable energy and mining. The loans come at very competitive interest rates.',
      sectors: ['Agriculture', 'Healthcare', 'Construction', 'Retail', 'Renewable Energy', 'Mining'],
    },
    {
      title: 'Commercial Mortgages',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1"/>
          <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
        </svg>
      ),
      description: 'The Bank finances businesses for the acquisition of commercial properties by extending mortgage loans.',
      features: ['Property acquisition financing', 'Competitive rates', 'Flexible repayment terms'],
    },
    {
      title: 'Asset Finance',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="3" width="15" height="13"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      description: 'Through the provision of medium term loans (3-5 years), the Bank finances the acquisition and upgrading of equipment for businesses. This is in response to the country\'s retooling requirements in line with new technology.',
      features: ['Medium term loans (3-5 years)', 'Equipment acquisition', 'Technology upgrades'],
    },
    {
      title: 'Bank Guarantees / Bid Bonds',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      description: 'The Bank offers Bank guarantees / bid bonds to businesses participating in tenders and contracts that require such.',
      features: ['Tender support', 'Contract guarantees', 'Bid bond facilities'],
    },
  ]

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Business Loans & Bank Guarantees</h1>
          <p>Working Capital Loans, Commercial Mortgages, Asset Finance, and Bank Guarantees</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <span className="current">Business Loans</span>
        </div>
      </nav>

      {/* Introduction */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Business Finance</span>
            <h2>Financing Solutions for Your Business</h2>
            <p>TN CyberTech Bank offers a range of financing solutions to help your business grow, from working capital to asset acquisition and tender support.</p>
          </div>

          <div className="services-grid-2">
            {loanProducts.map((product) => (
              <div key={product.title} className="service-card">
                <div className="service-card-icon">{product.icon}</div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                {product.sectors && (
                  <div style={{ marginTop: '1rem' }}>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: 'rgb(174, 106, 6)', marginBottom: '0.5rem' }}>Sectors Covered:</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {product.sectors.map((sector) => (
                        <span key={sector} style={{
                          padding: '0.25rem 0.75rem',
                          background: 'rgba(255, 222, 74, 0.1)',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          color: 'rgb(174, 106, 6)',
                        }}>
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {product.features && (
                  <ul className="feature-list" style={{ marginTop: '1rem' }}>
                    {product.features.map((feature) => (
                      <li key={feature}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section dark-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Need Business Financing?</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Our business banking team is ready to discuss financing options tailored to your needs.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:loans@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
              Email Business Banking
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

export default BusinessLoans
