import { useParams, Link } from 'react-router-dom'
import './Partners.css'

// Partner data with details and logos
const partnersData = {
  'world-remit': {
    name: 'World Remit',
    category: 'Remittance',
    website: 'https://www.worldremit.com',
    logo: '/worldremit.jpg',
  },
  'thunes': {
    name: 'Thunes',
    category: 'Remittance',
    website: 'https://www.thunes.com',
    logo: '/thunes.jpg',
  },
  'western-union': {
    name: 'Western Union',
    category: 'Remittance',
    website: 'https://www.westernunion.com',
    logo: null,
  },
  'sasai-remit': {
    name: 'Sasai Remit',
    category: 'Remittance',
    website: 'https://www.sasai.co.zw',
    logo: '/sasai.jpg',
  },
  'money-gram': {
    name: 'Money Gram',
    category: 'Remittance',
    website: 'https://www.moneygram.com',
    logo: '/moneygram.jpg',
  },
  'shoprite-send': {
    name: 'Shoprite Send',
    category: 'Remittance',
    website: 'https://www.shoprite.co.za',
    logo: '/shoprite.jpg',
  },
  'hello-paisa': {
    name: 'Hello Paisa',
    category: 'Remittance',
    website: 'https://www.hellopaisa.co.za',
    logo: '/hellopaisa.jpg',
  },
  'mama-money': {
    name: 'Mama Money',
    category: 'Remittance',
    website: 'https://www.mamamoney.co.za',
    logo: '/mamamoney.jpg',
  },
  'master-remit': {
    name: 'Master Remit',
    category: 'Remittance',
    website: 'https://www.masterremit.com',
    logo: '/masterremit.jpg',
  },
  'ria': {
    name: 'Ria',
    category: 'Remittance',
    website: 'https://www.riamoneytransfer.com',
    logo: '/riamoney.jpg',
  },
  'econet': {
    name: 'Econet',
    category: 'Technology',
    website: 'https://www.econet.co.zw',
    logo: '/econet.jpg',
  },
  'ecocash': {
    name: 'EcoCash',
    category: 'Mobile Money',
    website: 'https://www.ecocash.co.zw',
    logo: '/ecocash.jpg',
  },
  'visa': {
    name: 'VISA',
    category: 'Payments',
    website: 'https://www.visa.com',
    logo: '/visa.jpg',
  },
  'zimswitch': {
    name: 'Zimswitch',
    category: 'Payments',
    website: 'https://www.zimswitch.co.zw',
    logo: '/zimswitch.jpg',
  },
}

function PartnerDetail() {
  const { partnerId } = useParams()
  const partner = partnersData[partnerId]

  if (!partner) {
    return (
      <div className="partners-page">
        <header className="partners-header">
          <Link to="/" className="header-logo">
            <img src="/bank-logo.png" alt="TN CyberTech Bank" className="header-logo-img" />
          </Link>
          <nav className="header-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/partners" className="nav-link active">Partners</Link>
          </nav>
        </header>
        <div className="partner-not-found">
          <h1>Partner Not Found</h1>
          <p>The partner you're looking for doesn't exist.</p>
          <Link to="/partners" className="cta-button">Back to Partners</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="partner-detail-page">
      {/* Header */}
      <header className="partners-header">
        <Link to="/" className="header-logo">
          <img src="/bank-logo.png" alt="TN CyberTech Bank" className="header-logo-img" />
        </Link>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <a href="#" className="nav-link">For You</a>
          <a href="#" className="nav-link">For Business</a>
          <Link to="/partners" className="nav-link active">Partners</Link>
          <a href="#" className="nav-link">Contact</a>
        </nav>
      </header>

      {/* Breadcrumbs */}
      <div className="breadcrumb-bar detail-breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/partners">Partners</Link>
          <span className="separator">/</span>
          <span className="current">{partner.name}</span>
        </div>
      </div>

      {/* Main Content - Contained Layout */}
      <section className="partner-detail-section">
        <div className="partner-detail-container">
          <div className="partner-detail-content">
            {/* Left Side - Sticky Logo */}
            <div className="partner-logo-side">
              <div className="partner-logo-sticky">
                {partner.logo ? (
                  <img src={partner.logo} alt={partner.name} className="partner-detail-logo-img" />
                ) : (
                  <div className="partner-detail-logo">
                    <span>{partner.name.split(' ').map(w => w[0]).join('').slice(0, 2)}</span>
                  </div>
                )}
                <h1 className="partner-detail-name">{partner.name}</h1>
                <span className="partner-detail-category">{partner.category}</span>
              </div>
            </div>

            {/* Right Side - Scrollable Content */}
            <div className="partner-content-side">
            <section className="partner-section">
              <h2>About {partner.name}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>

         

            <section className="partner-section">
              <h2>Services & Benefits</h2>
              <ul className="partner-benefits-list">
                <li>
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </li>
                <li>
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>Sed do eiusmod tempor incididunt ut labore et dolore</span>
                </li>
                <li>
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>Ut enim ad minim veniam, quis nostrud exercitation</span>
                </li>
                <li>
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>Duis aute irure dolor in reprehenderit in voluptate</span>
                </li>
              </ul>
            </section>

            

          
              {/* CTA Button */}
              <div className="partner-cta-container">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-cta-button"
                >
                  Visit {partner.name} Website
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
                <Link to="/partners" className="partner-back-button">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                  Back to All Partners
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="partners-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/icon.png" alt="TN CyberTech Bank" />
              <span>TN CyberTech Bank Limited</span>
            </div>
            <p className="footer-legal">
              &copy; 2026 TN CyberTech Bank Limited. A Registered Commercial Bank | Member of the Deposit Protection Corporation
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PartnerDetail
