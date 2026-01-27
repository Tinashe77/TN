import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import './Accounts.css'

function PersonalAccounts() {
  const accounts = [
    {
      id: 'isave',
      name: 'iSave USD Account',
      tagline: 'Zero monthly charges, no minimum balance',
      description: 'The perfect digital savings account with easy account opening via OMNI channel *236#.',
      features: [
        'Easy digital account opening on OMNI channel *236#',
        'Zero monthly charges',
        'No minimum balance',
        'Automatic EcoCash wallet integration',
        'Instant card issuance',
        'TN CyberTech Bank Debit Card',
        'Access to Mobile Banking services',
      ],
      cta: 'Dial *236# to open',
      highlight: true,
    },
    {
      id: 'current',
      name: 'iAccount (Current)',
      tagline: 'For everyday transactions',
      description: 'A flexible current account for all your daily banking needs.',
      features: [
        'TN CyberTech Bank proprietary card',
        'Access to Online Banking',
        'No Credit Interest',
      ],
      requirements: [
        'Copy of National ID / Driver\'s Licence / Valid Passport',
        '2 Passport Size Photos',
        'Proof of Income',
        'Proof of Residence',
      ],
    },
    {
      id: 'student',
      name: 'iStudent Account',
      tagline: 'Designed for students',
      description: 'The perfect account for students with minimal requirements.',
      features: [
        'Linked to EcoCash',
        'Access to Mobile Banking services',
      ],
      requirements: [
        'Copy of National ID / Driver\'s Licence / Valid Passport',
        'Student ID / Offer Letter',
        'Minimal initial deposit $15',
      ],
    },
    {
      id: 'savvy-teens',
      name: 'Savvy Teens',
      tagline: 'For ages 13-17',
      description: 'Help your teenager learn financial responsibility with this guided account.',
      features: [
        'Account in child\'s name, operated by Parent/Guardian',
        'Parent/Guardian may grant child authority to operate',
        'eAlerts to Parent/Guardian/Child',
        'EcoCash Banking services',
      ],
      requirements: [
        'Parent\'s ID',
        'Parent\'s proof of residence',
        'Child\'s birth certificate (or ID for 16 year olds)',
        'Target group: 13-17 years',
        'Minimum Balance $100',
      ],
    },
    {
      id: 'savvy-kids',
      name: 'Savvy Kids',
      tagline: 'Start saving early',
      description: 'Teach your children the value of saving from an early age.',
      features: [
        'Account in child\'s name, operated by Parent/Guardian',
        'eAlerts to Parent/Guardian',
        'EcoCash Banking services (deposits only)',
      ],
      requirements: [
        'Parent\'s ID',
        'Parent\'s proof of residence',
        'Child\'s birth certificate',
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
          <h1>Personal Accounts</h1>
          <p>Find the account that fits your lifestyle and financial goals.</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-you">For You</Link>
          <span className="separator">/</span>
          <span className="current">Personal Accounts</span>
        </div>
      </nav>

      {/* Accounts List */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Choose Your Account</span>
            <h2>Accounts Tailored For You</h2>
            <p>Whether you're saving for the future, managing daily expenses, or teaching your children about money, we have the right account for you.</p>
          </div>

          <div className="accounts-list">
            {accounts.map((account, index) => (
              <div
                key={account.id}
                className={`account-card ${account.highlight ? 'highlighted' : ''}`}
                id={account.id}
              >
                {account.highlight && <div className="account-badge">Most Popular</div>}
                <div className="account-header">
                  <div>
                    <h3>{account.name}</h3>
                    <p className="account-tagline">{account.tagline}</p>
                  </div>
                  <div className="account-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
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

                {account.requirements && (
                  <div className="account-requirements">
                    <h4>Opening Requirements</h4>
                    <ul>
                      {account.requirements.map((req) => (
                        <li key={req}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {account.cta && (
                  <div className="account-cta">
                    <span className="cta-code">{account.cta}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section dark-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Open Your Account?</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Visit any TN CyberTech Bank branch or dial *236# to get started.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="cta-btn cta-btn-primary">
              Find a Branch
            </Link>
            <a href="tel:08088888" className="cta-btn cta-btn-secondary">
              Call 0808 8888
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PersonalAccounts
