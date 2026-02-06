import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function WorkingCapitalLoans() {
  const sectors = [
    'Agriculture',
    'Healthcare',
    'Construction',
    'Retail',
    'Renewable Energy',
    'Mining',
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Working Capital Loans / Overdrafts</h1>
          <p>Capital expenditure and working capital solutions</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <Link to="/for-business/loans">Business Loans</Link>
          <span className="separator">/</span>
          <span className="current">Working Capital Loans</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-business/loans" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Business Loans
          </Link>

          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">Business Finance</span>
              <h2>Working Capital Loans / Overdrafts</h2>
              <p>
                The Bank Offers Working Capital and Capital Expenditure loans to businesses in various sectors which include but are not limited to Agriculture, Healthcare, Construction, Retail, Renewable energy and mining. The loans come at very competitive interest rates.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#111827' }}>Sectors Covered</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {sectors.map((sector) => (
                    <span key={sector} style={{
                      padding: '0.5rem 1rem',
                      background: 'linear-gradient(135deg, rgba(174, 106, 6, 0.1) 0%, rgba(255, 222, 74, 0.1) 100%)',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      color: 'rgb(174, 106, 6)',
                      fontWeight: '500',
                    }}>
                      {sector}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a href="mailto:loans@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
                  Apply Now
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
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default WorkingCapitalLoans
