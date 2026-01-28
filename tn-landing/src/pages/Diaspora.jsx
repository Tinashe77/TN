import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/PageStyles.css'

function Diaspora() {
  const accounts = [
    'Diaspora FCA Current Account',
    'Diaspora FCA Savings Account',
  ]

  const benefits = [
    'Visa Debit directly linked to the FCA Account.',
    'Access to robust online platform and mobile application.',
    'Sms and E- Alerts.',
    'Access to Swift transfers.',
    'Access to local service providers with the help of customer relationship management team.',
    '24hr Contact Centre Support.',
  ]

  const requirements = [
    'Completed accounting opening form,',
    '2 Passport Photos,',
    'Copy of ID and valid Zim passport,',
    'Proof of Residence, (foreign utility bill, foreign bank statement, and or lease agreement.)',
    'Initial Deposit of $50.',
    'Minimum Balance of $100',
    'Withdrawal Fee -3%-minimum $5',
    'Monthly maintenance fee -$5 (for more than 2 debit transactions a month)',
    'Monthly Interest - 2.5% p.a.',
  ]

  const remittanceRequirements = [
    'Completed accounting opening form,',
    '2 Passport Photos,',
    'Copy of ID and valid Zim passport,',
    'Proof of Residence, (foreign utility bill, foreign bank statement, and or lease agreement.)',
    'Initial Deposit of $20,',
    'Minimum Balance of $20',
    'Withdrawal Fee -3%-minimum $5',
    'Monthly maintenance fee -$5',
  ]

  const remittancePartners = [
    { name: 'World Remit', logo: '/worldremit.jpg' },
    { name: 'Thunes', logo: '/thunes.jpg' },
    { name: 'Western Union', logo: '/western-union.jpg' },
    { name: 'Sasai Remit', logo: '/sasai.jpg' },
    { name: 'Money Gram', logo: '/moneygram.jpg' },
    { name: 'Shoprite Send', logo: '/shoprite.jpg' },
    { name: 'Hello Paisa', logo: '/hellopaisa.jpg' },
    { name: 'Mama Money', logo: '/mamamoney.jpg' },
    { name: 'Master Remit', logo: '/masterremit.jpg' },
    { name: 'Ria', logo: '/riamoney.jpg' },
    { name: 'Econet', logo: '/econet.jpg' },
    { name: 'EcoCash', logo: '/ecocash.jpg' },
  ]

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Non-Residence Banking Accounts</h1>
          <p>Open a TN CyberTech Bank Non-Resident FCA Account today and unlock unparalleled convenience with our exclusive diaspora offering, tailored specifically for Zimbabweans living abroad.</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <span className="current">Non-Residence Banking</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <p>
            This unique service allows individuals to make direct payments to family and friends both within and outside Zimbabwe, as well as to local suppliers, ensuring seamless financial management. With our robust online banking platform and mobile banking app, you can enjoy real-time, cost-effective transactions without the need for intermediaries. Furthermore, benefit from the dedicated support of a relationship officer, providing assistance and access to local service providers. Experience the exceptional benefits of the TN CyberTech Bank's Non-Resident FCA Account and simplify your financial interactions today.
          </p>

          <div className="section-header" style={{ marginTop: '2rem' }}>
            <h2>Available Accounts;</h2>
          </div>
          <ul className="feature-list">
            {accounts.map((account) => (
              <li key={account}>{account}</li>
            ))}
          </ul>

          <div className="section-header" style={{ marginTop: '2rem' }}>
            <h2>Benefits;</h2>
          </div>
          <ul className="feature-list">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>

          <div className="section-header" style={{ marginTop: '2rem' }}>
            <h2>Requirements Conditions</h2>
          </div>
          <ul className="feature-list">
            {requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-section light-section">
        <div className="container">
          <div className="section-header">
            <h2>International Remittances</h2>
            <p>Whether you're receiving funds from abroad or sending them to loved ones, TN CyberTech Bank ensures a seamless transaction experience.</p>
          </div>

          <div className="section-header" style={{ marginTop: '1.5rem' }}>
            <h3>Requirements Conditions</h3>
          </div>
          <ul className="feature-list">
            {remittanceRequirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p style={{ marginTop: '1.5rem' }}>
            You can receive funds via Cash Pick Up option from a wide range of international remittance partners including (include partner logo's) :
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1.5rem',
            marginTop: '1.5rem',
          }}>
            {remittancePartners.map((partner) => (
              <div key={partner.name} style={{
                padding: '1.5rem',
                background: '#fff',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    width: '80px',
                    height: '60px',
                    objectFit: 'contain',
                    marginBottom: '0.75rem',
                  }}
                />
                <span style={{ fontSize: '0.75rem', color: '#6b7280', textAlign: 'center' }}>{partner.name}</span>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '1.5rem' }}>It's secure, with no fuss!</p>
          <p>USD Cash Guaranteed!</p>

          <p style={{ marginTop: '1.5rem' }}>For sending money abroad we have the following remittance partners :</p>
          <ol className="feature-list">
            <li>Money Gram</li>
            <li>Western Union</li>
          </ol>

          <p style={{ marginTop: '1.5rem' }}>
            TN CyberTech Bank is committed to making your life easier. Visit our Branches today to find out more about our expanded remittance services. TN CyberTech - The future of Banking !
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Diaspora
