import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import './Cards.css'

function Cards() {
  const visaKeyFeatures = [
    { title: 'Global Acceptance', desc: 'Use anywhere VISA is accepted worldwide' },
    { title: 'Multi-Currency', desc: 'Pay in any currency internationally' },
    { title: 'Security & Protection', desc: 'Block/unblock instantly if lost' },
    { title: '3D Secure', desc: 'Enhanced authentication for online payments' },
    { title: 'EMV Chip', desc: 'Fraud prevention for in-person transactions' },
    { title: 'Contactless', desc: 'Tap and go for fast payments' },
    { title: 'Worldwide Accessibility', desc: 'Accepted at Visa ATMs, POS terminals, and online payment gateways globally' },
  ]

  const visaCards = [
    {
      name: 'VISA Prepaid',
      type: 'Prepaid',
      limit: 'USD 10,000/month',
      features: [
        'Instant Issuance: No need for a bank account-simply provide an ID and get your card instantly.',
        'Easy Funds Transfers: Load funds in the currency that you wish to use. Seamlessly transfer from any mobile wallet (Ecocash, One Money, Omari, Innbucks) via ZIPIT to your Visa Card, provided that the funds are in the currency you wish to use, or in a readily convertible currency.',
        'Receive Funds Globally: Get money from any VISA card via VISA Direct.',
        'Card-to-Card Transfers: Send funds to any TN CyberTech Bank VISA card using TN CyberCash, internet banking, or *236#.',
        'High Spending Limits: Enjoy a monthly limit of up to USD 10,000 for POS transactions or $35,000 for other transactions. The daily limit is $5,000.',
        'No Monthly Fees: No hidden costs or monthly service fees-just the freedom to spend.',
        'The upper limit of $35,000 is subject to submission of acceptible KYC documentation.',
      ],
    },
    {
      name: 'VISA Debit (Blue, Platinum, Black)',
      type: 'Debit',
      limit: 'USD 100,000/month',
      features: [
        'PIN Management: Set, change, or reset your PIN easily via the TN CyberCash app or any TN CyberTech Bank ATM.',
        'Supplementary Cards: Add up to two additional cardholders to your account.',
        'High Transaction Limits: Enjoy up to USD 100,000 in monthly transaction limits.',
        'Seamless Spending: Linked to your foreign currency (USD) account for smooth transactions.',
      ],
    },
    {
      name: 'VISA Debit Infinite',
      type: 'Premium Debit',
      limit: 'USD 250,000/month',
      premium: true,
      features: [
        'PIN Management: Set, change, or reset your PIN via the TN CyberCash app or any TN CyberTech Bank ATM.',
        'Supplementary Cards: Add up to two supplementary cards for family or business needs.',
        'High Spending Power: Monthly transaction limit of up to USD 250,000.',
        'Exclusive Travel Benefits: Enjoy up to 12% off hotel bookings via Agoda.com.',
        'Airport Lounge Access: Complimentary access to over 1,200 airport lounges worldwide.',
        'Car Hire Services: Access exclusive car rental offers and services.',
        'Comprehensive Insurance: Travel insurance, medical service referrals, and more for peace of mind on the go.',
        'Visa Concierge: Enjoy personalized concierge services for a luxury experience at your fingertips.',
      ],
    },
    {
      name: 'VISA Credit Classic',
      type: 'Credit',
      limit: 'USD 20,000/month',
      features: [
        'Easy Transfers: Perform card-to-card transfers via TN CyberCash app, internet banking, or *236#.',
        'Receive Funds Globally: Receive money from any VISA card through VISA Direct.',
        'PIN Management: Manage your PIN via the TN CyberCash app or any TN CyberTech Bank ATM.',
        'Flexible Funding: Load funds from local nostro accounts and mobile wallets via ZIPIT and RTGS.',
        'Higher Limits: Monthly transaction limits of up to USD 20,000.',
      ],
    },
    {
      name: 'VISA Credit Infinite',
      type: 'Premium Credit',
      limit: 'USD 250,000/month',
      premium: true,
      features: [
        'Global Transfers: Send and receive funds using Square Omni, internet banking, or *236#.',
        'PIN Management: Set, change, or reset your PIN easily via the Square Omni app or any TN CyberTech Bank ATM.',
        'No Strings Attached: No need for a USD account-simply load your card and enjoy.',
        'High Transaction Limits: Monthly limit of up to USD 250,000.',
        'No Monthly Fees: Enjoy all the benefits with zero monthly service charges.',
        'Exclusive Travel Benefits: Up to 12% off on hotel bookings through Agoda.com.',
        'Worldwide Lounge Access: Access over 1,200 premium airport lounges across the globe.',
        'Car Hire and Travel Insurance: Access exclusive car hire services and comprehensive travel insurance.',
        'Medical Assistance: Telephone medical advice and referrals to trusted medical providers.',
        'Visa Concierge: Enjoy a premium lifestyle with access to Visa Concierge services for your every need.',
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
          <h1>Cards</h1>
          <p>Zimswitch and VISA cards for local and global transactions.</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-you">For You</Link>
          <span className="separator">/</span>
          <span className="current">Cards</span>
        </div>
      </nav>

      {/* Zimswitch Card */}
      <section className="content-section white-section">
        <div className="container">
          <div className="two-col-layout">
            <div>
              <span className="section-label">Local Transactions</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1rem' }}>
                Zimswitch Debit Card
              </h2>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                The TN CyberTech Bank Debit Card allows customers to transact from any Point of Sale (POS) machine with the TN CyberTech Bank or Zimswitch sign.
              </p>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Customers have 24-hour access to money from a wide network of retailers across the country. No need to carry cash to make payments for bills, groceries or fuel. The TN CyberTech Bank Debit card will also allow customers to access the cash-back facility from any TN CyberTech Bank or Zimswitch POS machine whenever they need cash. Now customers no longer need to fill in cash withdrawal slips to access money or deposit it. All one needs to do is walk into any TN CyberTech Bank branch and transact over the counter using their Debit card.
              </p>

              <div style={{ marginTop: '2rem', padding: '1rem', background: '#f9fafb', borderRadius: '12px' }}>
                <p style={{ color: '#4b5563', fontSize: '0.9rem' }}>
                  <strong>Get your card today:</strong> To experience ultimate swiping convenience, please call our Customer Contact Centre on <a href="tel:08088888" style={{ color: 'rgb(174, 106, 6)' }}>0808 8888</a> or simply go to your closest TN CyberTech Bank Branch and collect your card today.
                </p>
              </div>
            </div>

            <div className="card-visual">
              <div className="card-mock zimswitch">
                <img src="/zimswitch.jpg" alt="Zimswitch" style={{ width: '80px', marginBottom: '1rem' }} />
                <span>Zimswitch Debit Card</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISA Cards Section */}
      <section className="content-section dark-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label light">Global Payments</span>
            <h2>TN CyberTech Bank VISA Cards: Empowering Your Global Payments</h2>
            <p>TN CyberTech Bank VISA cards provide a seamless and secure way to make payments worldwide-whether you're shopping in-store, paying online, or withdrawing cash from an ATM. With our range of VISA products, you can enjoy unparalleled convenience, security, and exclusive benefits. Explore the features of our Visa card products below:</p>
          </div>

          {/* Key Features */}
          <div className="visa-features-grid">
            {visaKeyFeatures.map((feature) => (
              <div key={feature.title} className="visa-feature">
                <div className="visa-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISA Cards List */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <h2>Choose Your VISA Card</h2>
          </div>

          <div className="visa-cards-grid">
            {visaCards.map((card) => (
              <div key={card.name} className={`visa-card ${card.premium ? 'premium' : ''}`}>
                {card.premium && <div className="premium-badge">Premium</div>}
                <div className="visa-card-header">
                  <img src="/visa.jpg" alt="VISA" style={{ height: '24px' }} />
                  <span className="card-type">{card.type}</span>
                </div>
                <h3>{card.name}</h3>
                <div className="card-limit">
                  <span>Monthly Limit</span>
                  <strong>{card.limit}</strong>
                </div>
                <ul className="card-features">
                  {card.features.map((feature) => (
                    <li key={feature}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="card-cta">Apply Now</Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ color: '#6b7280' }}>
              Experience the world with confidence, security, and ease with TN CyberTech Bank VISA cards. Whether you're traveling, shopping, or managing finances, we offer a solution tailored to meet your needs. Choose the right card for you today and unlock a world of benefits.
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Email us at <a href="mailto:cards@tncybertechbank.co.zw" style={{ color: 'rgb(174, 106, 6)' }}>cards@tncybertechbank.co.zw</a>
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="content-section light-section" id="terms">
        <div className="container">
          <div className="section-header">
            <h2>Card Services</h2>
          </div>

          <div className="services-grid-3">
            <div className="service-card">
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
              </div>
              <h3>FCA to VISA</h3>
              <p>FCA to VISA Transactions on Internet Banking and TN CyberCash App.</p>
              <p>Transfer funds from your FC Account to your Visa Globetrotter card using Internet Banking and Mobile Application.</p>
              <p>Internet Banking</p>
              <ol className="feature-list">
                <li>Log on to Online Banking</li>
                <li>Select "Payments" tab</li>
                <li>Select Visa Deposit</li>
                <li>Complete Details and click Submit</li>
              </ol>
              <p>Mobile Application</p>
              <ol className="feature-list">
                <li>Log on to your Mobile Application</li>
                <li>Select FC Account on the Dashboard</li>
                <li>Select ''Visa Deposit''</li>
                <li>Complete Details and click Send</li>
              </ol>
              <p>FCA to Visa transactions are charged at 1% of transaction value, minimum USD$1.00 maximum USD$1.50</p>
            </div>

            <div className="service-card">
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h3>Digital Card Linking</h3>
              <p>Card linking process on Mobile Application</p>
              <ol className="feature-list">
                <li>Log on to TN CyberCash App</li>
                <li>Click more on Cards Management</li>
                <li>Select the Zimswitch card you want to link to an account</li>
                <li>Select link account to card option</li>
                <li>Confirm you want to link Account to Card</li>
                <li>Select the USD account you want to link</li>
                <li>You will receive a pop up message confirming card linking</li>
              </ol>
            </div>

            <div className="service-card">
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Card Security</h3>
              <p>Block or unblock your card instantly via the app. Report lost/stolen cards: 0808 8888 or cardcentre@tncybertechbank.co.zw</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Link */}
      <section className="content-section white-section" style={{ textAlign: 'center', padding: '2rem 0' }}>
        <div className="container">
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
            For card terms and conditions, please contact us at{' '}
            <a href="mailto:cards@tncybertechbank.co.zw" style={{ color: 'rgb(174, 106, 6)' }}>
              cards@tncybertechbank.co.zw
            </a>{' '}
            or call <a href="tel:08088888" style={{ color: 'rgb(174, 106, 6)' }}>0808 8888</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Cards
