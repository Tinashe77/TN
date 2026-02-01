import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function InternationalBanking() {
  const services = [
    {
      id: 'exchange-control',
      title: 'Exchange Control',
      description: <>TN CyberTech Bank assists with advice on Exchange Control regulations as they affect local and international investors. We also assist in the processing of Exchange Control applications where possible. For related enquiries, please <a href="mailto:customerservice@tncybertechbank.co.zw" style={{ color: '#1e40af', textDecoration: 'underline' }}>contact us</a> and our International Banking team will gladly assist.</>,
    },
    {
      id: 'export-import',
      title: 'Export and Import',
      description: <>Through its foreign correspondents and international partners, TN CyberTech Bank can arrange finance to assist its clients in funding their working capital and capital expenditure requirements. For related enquiries, please <a href="mailto:International_Banking@tncybertechbank.co.zw" style={{ color: '#1e40af', textDecoration: 'underline' }}>contact us</a> and our International Banking team will gladly assist.</>,
    },
    {
      id: 'international-payments',
      title: 'International Payments',
      description: <>As a member of SWIFT (Society of Worldwide Interbank Funds Transfers), the Bank handles client incoming and outgoing electronic foreign payments and thus facilitates international trade. Where a client elects the Bank, we can also effect the payments by Bank Draft. Our SWIFT Code for international payments is STBLZWHX. For related enquiries, please <a href="mailto:international_banking@tncybertechbank.co.zw" style={{ color: '#1e40af', textDecoration: 'underline' }}>contact us</a> and our International Banking team will gladly assist.</>,
    },
    {
      id: 'structured-finance',
      title: 'Trade Finance',
      description: <>The Bank can structure complex trade finance transactions and place such businesses on the International Capital Markets through correspondent banks. For related enquiries, please <a href="mailto:International_Banking@tncybertechbank.co.zw" style={{ color: '#1e40af', textDecoration: 'underline' }}>contact us</a> and our International Banking team will gladly assist.</>,
    },
  ]

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>International Banking</h1>
          <p>Global reach, local expertise.</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <span className="current">International Banking</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">International Banking</span>
            <h2>Services</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {services.map((service) => (
              <div key={service.id} className="info-card" id={service.id}>
                <h3>{service.title}</h3>
                <p style={{ color: '#6b7280' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default InternationalBanking
