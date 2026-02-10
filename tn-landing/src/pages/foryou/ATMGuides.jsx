import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function ATMGuides() {
  const [activeGuide, setActiveGuide] = useState('cardless-withdrawal')

  const guides = [
    {
      id: 'cardless-withdrawal',
      title: 'Cardless Withdrawal',
      subtitle: 'Withdraw cash without your ATM card',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      ),
      steps: [
        {
          title: 'Open the TN CyberTech Bank app or dial *236#',
          description: 'Access your mobile banking through the app or USSD channel.',
        },
        {
          title: 'Select Cardless Cash Withdrawal',
          description: 'Navigate to the cardless withdrawal option in the menu.',
        },
        {
          title: 'Enter the amount you want to withdraw',
          description: 'Specify how much cash you need (up to USD 1,000).',
        },
        {
          title: 'Receive your one-time code (OTP)',
          description: 'The system generates a unique OTP or reference number.',
        },
        {
          title: 'At the ATM: Choose Cardless Withdrawal',
          description: 'Select the cardless withdrawal option on the ATM screen.',
        },
        {
          title: 'Enter your OTP',
          description: 'Input the one-time code you received.',
        },
        {
          title: 'Confirm and collect your cash',
          description: 'Verify the details and collect your money.',
        },
        {
          title: 'Take your receipt',
          description: 'Always collect your receipt for your records.',
        },
      ],
      note: 'This works even if you forget or don\'t have your physical ATM card.',
    },
    {
      id: 'cardless-deposit',
      title: 'Cardless Deposit',
      subtitle: 'Deposit cash at Smart ATMs without a card',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M2 12h20"/>
        </svg>
      ),
      steps: [
        {
          title: 'Visit a Smart ATM that supports cardless deposit',
          description: 'Available at Joina, Eastgate, Avondale, Borrowdale, Mutare, Masvingo, and Bulawayo.',
        },
        {
          title: 'Select Cardless Deposit on the ATM screen',
          description: 'Choose the cardless deposit option from the menu.',
        },
        {
          title: 'Select USD Currency',
          description: 'Choose the currency you want to deposit.',
        },
        {
          title: 'Follow the guidelines on how to insert cash notes',
          description: 'Read the instructions on screen and click continue.',
        },
        {
          title: 'Insert cash into the ATM when prompted',
          description: 'Place your notes in the deposit slot as instructed.',
        },
        {
          title: 'The system counts and displays the cash amount',
          description: 'Verify the amount shown on screen.',
        },
        {
          title: 'Confirm the deposit amount',
          description: 'For TNCB accounts: enter your 10-digit account number. For VISA prepaid card: enter the full 16-digit card number.',
        },
        {
          title: 'Confirm account details',
          description: 'Verify that the account information is correct.',
        },
        {
          title: 'Take your receipt',
          description: 'Collect your receipt as proof of deposit.',
        },
      ],
      note: 'Available only on Smart ATMs that support cardless deposit transactions.',
    },
    {
      id: 'ecocash-cashin',
      title: 'EcoCash Cash-in',
      subtitle: 'Add money to your EcoCash wallet at Smart ATMs',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      steps: [
        {
          title: 'Initiate EcoCash cash-in on your mobile app or USSD',
          description: 'Start the transaction from your EcoCash mobile app or dial the USSD code.',
        },
        {
          title: 'Visit a Smart ATM that supports EcoCash',
          description: 'Go to a TN CyberTech Bank Smart ATM location.',
        },
        {
          title: 'Select EcoCash Services on the ATM screen',
          description: 'Choose the EcoCash services option from the menu.',
        },
        {
          title: 'Follow guidelines on how to insert cash notes',
          description: 'Read the instructions on screen and click continue.',
        },
        {
          title: 'Insert cash into the ATM when prompted',
          description: 'Place your notes in the deposit slot as instructed.',
        },
        {
          title: 'Confirm the cash amount to be deposited',
          description: 'Verify the amount shown on screen.',
        },
        {
          title: 'Input your OTP and mobile number',
          description: 'Enter the one-time PIN and your EcoCash registered mobile number.',
        },
        {
          title: 'Take your receipt',
          description: 'Collect your receipt as proof of transaction.',
        },
      ],
      note: 'Ensure you have initiated the EcoCash cash-in transaction on your phone before visiting the ATM.',
    },
    {
      id: 'ecocash-cashout',
      title: 'EcoCash Cash-out',
      subtitle: 'Withdraw cash from your EcoCash wallet at ATMs',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 12H3M12 5l-7 7 7 7"/>
        </svg>
      ),
      steps: [
        {
          title: 'Open the EcoCash app or dial *151#',
          description: 'Access your EcoCash account through the mobile app or USSD.',
        },
        {
          title: 'Select Cash',
          description: 'Navigate to the cash-out option.',
        },
        {
          title: 'Enter agent code and amount',
          description: 'Input the agent code and the amount you want to withdraw.',
        },
        {
          title: 'Receive your one-time code (OTP)',
          description: 'The system generates a unique OTP or reference number.',
        },
        {
          title: 'At the ATM: Select EcoCash Services',
          description: 'Choose EcoCash services on the ATM screen.',
        },
        {
          title: 'Enter your OTP',
          description: 'Input the one-time code you received.',
        },
        {
          title: 'Confirm and collect your cash',
          description: 'Verify the details and collect your money.',
        },
        {
          title: 'Take your receipt',
          description: 'Always collect your receipt for your records.',
        },
      ],
      note: 'Daily limit for EcoCash cash-out is USD 1,000.',
    },
  ]

  const activeGuideData = guides.find(g => g.id === activeGuide)

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero" style={{ backgroundImage: "url('/banners/ATM-banner.jpg')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>ATM How-To Guides</h1>
          <p>Step-by-step instructions for using our ATM services.</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-you">For You</Link>
          <span className="separator">/</span>
          <Link to="/for-you/atm">ATM Services</Link>
          <span className="separator">/</span>
          <span className="current">How-To Guides</span>
        </div>
      </nav>

      {/* Guide Selection */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-label">Select a Guide</span>
            <h2>What Would You Like To Do?</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1rem',
            maxWidth: '1000px',
            margin: '0 auto 3rem'
          }}>
            {guides.map((guide) => (
              <button
                key={guide.id}
                onClick={() => setActiveGuide(guide.id)}
                style={{
                  padding: '1.25rem',
                  background: activeGuide === guide.id ? 'rgb(174, 106, 6)' : '#fff',
                  border: activeGuide === guide.id ? 'none' : '1px solid #e5e7eb',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: activeGuide === guide.id ? 'rgba(255,255,255,0.2)' : 'rgba(174, 106, 6, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.75rem',
                  color: activeGuide === guide.id ? '#fff' : 'rgb(174, 106, 6)'
                }}>
                  <div style={{ width: '22px', height: '22px' }}>
                    {guide.icon}
                  </div>
                </div>
                <h3 style={{
                  color: activeGuide === guide.id ? '#fff' : '#111827',
                  fontSize: '1rem',
                  marginBottom: '0.25rem',
                  fontWeight: '600'
                }}>
                  {guide.title}
                </h3>
                <p style={{
                  color: activeGuide === guide.id ? 'rgba(255,255,255,0.8)' : '#6b7280',
                  fontSize: '0.8rem',
                  margin: 0
                }}>
                  {guide.subtitle}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Guide Steps */}
      <section className="content-section light-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <h2>{activeGuideData.title}</h2>
            <p style={{ color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              {activeGuideData.subtitle}
            </p>
          </div>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {activeGuideData.steps.map((step, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  marginBottom: '1.5rem',
                  alignItems: 'flex-start'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgb(174, 106, 6)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  flexShrink: 0
                }}>
                  {index + 1}
                </div>
                <div style={{
                  background: '#fff',
                  padding: '1.25rem',
                  borderRadius: '10px',
                  border: '1px solid #e5e7eb',
                  flex: 1
                }}>
                  <h4 style={{ color: '#111827', marginBottom: '0.5rem', fontSize: '1rem' }}>
                    {step.title}
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Note */}
            <div style={{
              marginTop: '2rem',
              padding: '1.25rem',
              background: 'rgba(174, 106, 6, 0.1)',
              borderRadius: '10px',
              border: '1px solid rgba(174, 106, 6, 0.2)',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start'
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="rgb(174, 106, 6)" strokeWidth="2" style={{ width: '20px', height: '20px', flexShrink: 0, marginTop: '2px' }}>
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
              <p style={{ color: 'rgb(174, 106, 6)', fontSize: '0.9rem', margin: 0, fontWeight: '500' }}>
                {activeGuideData.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Support</span>
            <h2>Having Issues?</h2>
          </div>

          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Failed Transaction */}
            <div style={{
              padding: '1.5rem',
              background: '#f9fafb',
              borderRadius: '12px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{ color: '#111827', marginBottom: '1rem', fontSize: '1.1rem' }}>
                Failed ATM Transaction?
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Most failed ATM transactions automatically reverse within <strong>24 hours</strong>.
              </p>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>
                If funds do not reverse automatically, contact us via toll-free <strong>08088888</strong> or WhatsApp <strong>0772 191 191</strong>.
              </p>
            </div>

            {/* No OTP Received */}
            <div style={{
              padding: '1.5rem',
              background: '#f9fafb',
              borderRadius: '12px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{ color: '#111827', marginBottom: '1rem', fontSize: '1.1rem' }}>
                Cardless Withdrawal - No OTP Received?
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                If an OTP is not received:
              </p>
              <ul style={{ color: '#6b7280', fontSize: '0.9rem', paddingLeft: '1.25rem', margin: 0 }}>
                <li>Log in to the mobile banking platform</li>
                <li>Navigate to Recent Transactions</li>
                <li>Select the relevant cash withdrawal entry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section light-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem', color: '#111827' }}>
            Find Your Nearest ATM
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Locate our ATMs across Zimbabwe for convenient cash access.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/for-you/atm/locations" className="cta-btn cta-btn-primary">
              View ATM Locations
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/contact" className="cta-btn cta-btn-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ATMGuides
