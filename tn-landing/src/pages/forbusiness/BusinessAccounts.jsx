import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function BusinessAccounts() {
  const accounts = [
    {
      id: 'sole-trader',
      title: 'Sole Trader Account',
      subtitle: 'Flexible KYC-lite account',
      link: '/for-business/accounts/sole-trader',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
    },
    {
      id: 'business-sme',
      title: 'Business SME Account',
      subtitle: 'For Small to Medium Enterprises',
      link: '/for-business/accounts/sme',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
    },
    {
      id: 'corporate',
      title: 'Corporate Current Account',
      subtitle: 'For large corporates',
      link: '/for-business/accounts/corporate',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"/>
          <path d="M1 21h22"/>
          <path d="M9 7h6M9 11h6M9 15h6"/>
        </svg>
      ),
    },
    {
      id: 'nonprofit',
      title: 'Non-Profit Current Account',
      subtitle: 'Schools, Churches, NGOs',
      link: '/for-business/accounts/nonprofit',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
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
          <h1>Business Accounts</h1>
          <p>Accounts tailored for every stage of your business journey.</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <span className="current">Business Accounts</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <span className="section-label">Choose Your Account</span>
            <h2>Business Accounts for Every Size</h2>
            <p style={{ color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              From sole traders to large corporates, we have the right account to power your business.
            </p>
          </div>

          <div className="about-hub-grid">
            {accounts.map((account) => (
              <Link to={account.link} key={account.id} className="about-hub-card">
                <div className="about-hub-icon">
                  {account.icon}
                </div>
                <h3>{account.title}</h3>
                <p>{account.subtitle}</p>
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
          <h2>Need Help Choosing?</h2>
          <p>Our business banking team can help you find the perfect account for your needs.</p>
        </div>
      </section>

      <section className="content-section white-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <a href="mailto:customerservice@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
            Contact Business Banking
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BusinessAccounts
