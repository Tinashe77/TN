import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function MerchantServices() {
  const overview = [
    'Accept payments from Zimswitch, VISA, Mastercard, and EcoCash',
    'Real-time transaction processing and settlement',
    'Dedicated merchant support team',
    'Competitive transaction rates',
    'Suitable for corporates, small businesses, and event organisers',
  ]

  const features = [
    'Multi-card acceptance: Zimswitch, VISA, Mastercard, and EcoCash',
    'Real-time transaction notifications',
    'Next-day settlement to your TN CyberTech Bank account',
    'Secure EMV chip and PIN transactions',
    'Contactless (tap-to-pay) capability',
    'Receipt printing for customer records',
    'End-of-day transaction summaries',
    'Remote technical support',
  ]

  const benefits = [
    { title: 'Increased Sales', desc: 'Accept more payment methods and never miss a sale' },
    { title: 'Faster Settlement', desc: 'Next-day settlement into your business account' },
    { title: 'Security', desc: 'EMV chip technology and encrypted transactions reduce fraud risk' },
    { title: 'Customer Convenience', desc: 'Offer your customers the flexibility to pay how they prefer' },
    { title: 'Business Insights', desc: 'Track sales and transactions with detailed reporting' },
    { title: 'Dedicated Support', desc: '24/7 technical support for your POS devices' },
  ]

  const standAloneDevices = [
    { title: 'Countertop POS', desc: 'Ideal for fixed retail locations with stable connectivity. Connects via Ethernet or Wi-Fi.' },
    { title: 'Portable POS', desc: 'Wireless device for restaurants, delivery services, and businesses that need mobility within a premises.' },
    { title: 'Mobile POS', desc: 'Compact, SIM-enabled device for on-the-go businesses, market traders, and event organisers.' },
  ]

  const integratedPOSFeatures = [
    'Seamless integration with your existing point-of-sale or ERP system',
    'Eliminates manual entry errors and reduces reconciliation time',
    'Supports all major card schemes and EcoCash',
    'API-based integration for custom business solutions',
    'Ideal for supermarkets, fuel stations, and large retailers',
  ]

  const howToGetPOS = [
    'Contact our POS Merchant team at posmerchants@tncybertechbank.co.zw or call 0808 8888',
    'A member of our team will assess your business needs and recommend the right POS solution',
    'Complete the merchant application form and provide the required documents',
    'Our technical team will install, configure, and test your POS device on-site',
    'Start accepting card and mobile payments immediately',
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero" style={{ backgroundImage: "url('/banners/Merchant-Services-POS.jpg')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Merchant Services - POS</h1>
          <p>Accept Card and Mobile Payments at Your Business</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <span className="current">Merchant Services - POS</span>
        </div>
      </nav>

      {/* Overview Section */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <span className="section-label">Overview</span>
            <h2>Accept Card Payments Anywhere</h2>
            <p style={{ color: '#6b7280', maxWidth: '800px', margin: '1rem auto 0', lineHeight: '1.8' }}>
              TN CyberTech Bank offers Point of Sale (POS) machines for individuals and corporate customers alike.
              Whether you're a large corporate, small business, or hosting a one-day event, we have a POS solution
              tailored to your needs.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            {overview.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                padding: '1rem 1.25rem',
                background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.05) 0%, rgba(174, 106, 6, 0.02) 100%)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 222, 74, 0.2)',
              }}>
                <span style={{
                  width: '24px',
                  height: '24px',
                  background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" style={{ width: '12px', height: '12px' }}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                <span style={{ color: '#4b5563', fontSize: '0.9375rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="content-section light-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-label">Features</span>
            <h2>POS Features</h2>
          </div>

          <div style={{
            background: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            overflow: 'hidden',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1.25rem 1.5rem',
                borderBottom: index < features.length - 1 ? '1px solid #f3f4f6' : 'none',
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="rgb(174, 106, 6)" strokeWidth="2.5" style={{
                  width: '20px',
                  height: '20px',
                  flexShrink: 0,
                  marginTop: '2px',
                }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span style={{ color: '#4b5563', fontSize: '0.9375rem', lineHeight: '1.6' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-label">Benefits</span>
            <h2>Why Choose TN CyberTech Bank POS?</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
            {benefits.map((benefit, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                background: '#f9fafb',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" style={{ width: '18px', height: '18px' }}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 style={{ color: '#111827', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{benefit.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.9375rem', lineHeight: '1.6', margin: 0 }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stand Alone Devices Section */}
      <section className="content-section light-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-label">Devices</span>
            <h2>Stand Alone POS Devices</h2>
            <p style={{ color: '#6b7280' }}>Choose from our range of stand-alone POS terminals to suit your business needs.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
            {standAloneDevices.map((device, index) => (
              <div key={index} style={{
                padding: '2rem',
                background: '#fff',
                borderRadius: '16px',
                border: '2px solid rgba(255, 222, 74, 0.3)',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.1) 0%, rgba(174, 106, 6, 0.05) 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="rgb(174, 106, 6)" strokeWidth="1.5" style={{ width: '28px', height: '28px' }}>
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 10h20"/>
                  </svg>
                </div>
                <h3 style={{ color: '#111827', fontSize: '1.1rem', marginBottom: '0.75rem' }}>{device.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.9375rem', lineHeight: '1.6', margin: 0 }}>{device.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated POS Section */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-label">Integration</span>
            <h2>Integrated Point of Sale</h2>
            <p style={{ color: '#6b7280', maxWidth: '700px', margin: '1rem auto 0' }}>
              For businesses with existing point-of-sale systems, our integrated POS solution connects directly
              to your software for a seamless checkout experience.
            </p>
          </div>

          <div style={{
            background: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            overflow: 'hidden',
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            {integratedPOSFeatures.map((feature, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1.25rem 1.5rem',
                borderBottom: index < integratedPOSFeatures.length - 1 ? '1px solid #f3f4f6' : 'none',
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="rgb(174, 106, 6)" strokeWidth="2.5" style={{
                  width: '20px',
                  height: '20px',
                  flexShrink: 0,
                  marginTop: '2px',
                }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span style={{ color: '#4b5563', fontSize: '0.9375rem', lineHeight: '1.6' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get POS Section */}
      <section className="content-section light-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-label">Get Started</span>
            <h2>How to Get a POS Machine</h2>
          </div>

          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            {howToGetPOS.map((step, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.25rem',
                marginBottom: '1.5rem',
              }}>
                <span style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontWeight: '700',
                  color: '#000',
                  fontSize: '1rem',
                }}>
                  {index + 1}
                </span>
                <div style={{
                  padding: '1rem 1.5rem',
                  background: '#fff',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                  flex: 1,
                }}>
                  <span style={{ color: '#4b5563', fontSize: '0.9375rem', lineHeight: '1.6' }}>{step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="image-break-section">
        <div className="image-break-overlay"></div>
        <div className="image-break-content">
          <h2>Ready to Accept Card Payments?</h2>
          <p>Contact our POS Merchant team to get started with your merchant services today.</p>
        </div>
      </section>

      <section className="content-section white-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
            Email: <a href="mailto:posmerchants@tncybertechbank.co.zw" style={{ color: 'rgb(174, 106, 6)', fontWeight: '600' }}>posmerchants@tncybertechbank.co.zw</a>
            {' | '}
            Call: <a href="tel:08088888" style={{ color: 'rgb(174, 106, 6)', fontWeight: '600' }}>0808 8888</a>
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:posmerchants@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
              Email POS Team
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

export default MerchantServices
