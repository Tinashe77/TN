import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../foryou/Accounts.css'

function BusinessAccounts() {
  const accounts = [
    {
      id: 'sole-trader',
      name: 'Sole Trader Account',
      tagline: 'Flexible KYC-lite account',
      description: 'This is a business account designed to meet the needs of Sole traders. It is a flexible KYC lite account.',
      features: [
        'Affordable service fees',
        'Mobile App and Online Banking',
        'EcoCash Banking services',
        'ZimSwitch Debit Card',
        'TN CyberTech Bank MSME networking events',
        'VISA pre-paid Card',
        'Working Capital Loans',
      ],
    },
    {
      id: 'business-sme',
      name: 'Business SME Account',
      tagline: 'For Small to Medium Enterprises',
      description: 'The account features have been designed to provide affordable and appropriate products and services to each segment. Product for day to day transactions purposes for small businesses, will provide access to the following services',
      features: [
        'Personalised Account Relationship management.',
        'Affordable monthly service fees',
        'Mobile App and Online Banking',
        'ZimSwitch Debit Card',
        'TN CyberTech Bank MSME networking events',
        'VISA Debit Card Account Bundles',
        'Merchant & Agent Loans',
        'Business Card',
      ],
      highlight: true,
    },
    {
      id: 'corporate',
      name: 'Corporate Current Account',
      tagline: 'For large corporates',
      description: 'This is a tailor made business account that is suitable for all large corporates. The account features have been designed to provide appropriate products and services to corporates. Product for day to day transactions purposes for businesses, which provides access to the following services;',
      features: [
        'Personalised Account Relationship management.',
        'Online Banking',
        'ZimSwitch & Visa Corporate Debit Card',
        'Working Capital and CAPEX loans',
        'Business networking events',
      ],
    },
    {
      id: 'nonprofit',
      name: 'Non-Profit Current Account',
      tagline: 'Schools, Churches, NGOs',
      description: 'This is a transactional account in which daily financial transactions can be conducted with ease. Account is suitable for schools, churches, NGOs, State owned Enteprises among others.',
      features: [
        'A dedicated Personal Banking Banker',
        'Cash Management Call Account facilities',
        'Access to Online Banking and eStatements',
        'Personalised Deposit Books are available on request.',
        'Eligibility for Loan facilities.',
        'Payment gateways.',
      ],
    },
  ]

  return (
    <div className="page-container">
      <Header />

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Business Accounts</h1>
          <p>Accounts tailored for every stage of your business journey.</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <span className="current">Business Accounts</span>
        </div>
      </nav>

      {/* Accounts List */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Choose Your Account</span>
            <h2>Business Accounts for Every Size</h2>
            <p>From sole traders to large corporates, we have the right account to power your business.</p>
          </div>

          <div className="accounts-list">
            {accounts.map((account) => (
              <div
                key={account.id}
                className={`account-card ${account.highlight ? 'highlighted' : ''}`}
                id={account.id}
              >
                {account.highlight && <div className="account-badge">Popular Choice</div>}
                <div className="account-header">
                  <div>
                    <h3>{account.name}</h3>
                    <p className="account-tagline">{account.tagline}</p>
                  </div>
                  <div className="account-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"/>
                      <path d="M1 21h22"/>
                      <path d="M9 7h6M9 11h6M9 15h6"/>
                    </svg>
                  </div>
                </div>

                <p className="account-description">{account.description}</p>

                <div className="account-features">
                  <h4>Features & Benefits</h4>
                  <ul>
                    {account.features.map((feature) => (
                      <li key={feature}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <Link to="/contact" className="cta-btn cta-btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>
                    Open This Account
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section dark-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Need Help Choosing?</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Our business banking team can help you find the perfect account for your needs.
          </p>
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
