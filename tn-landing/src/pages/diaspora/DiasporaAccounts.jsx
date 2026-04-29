import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function DiasporaAccounts() {
  const accountTypes = [
    {
      name: 'Diaspora FCA Current Account',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      ),
      desc: 'For everyday transactions and payments',
      features: [
        'Everyday FCA transactions and payments',
        'Direct payments to family, friends and local suppliers',
      ],
      requirements: [
        'Completed account opening form',
        '2 passport photos',
        'Copy of ID and valid Zimbabwean passport',
        'Proof of residence, such as a foreign utility bill, foreign bank statement or lease agreement',
        'Initial deposit of $20',
      ],
      conditions: [
        { label: 'Minimum Balance', value: '$20' },
        { label: 'Withdrawal Fee', value: '3% (minimum $5)' },
        { label: 'Monthly Maintenance Fee', value: '$5' },
      ],
    },
    {
      name: 'Diaspora FCA Savings Account',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"/>
          <path d="M2 9v1c0 1.1.9 2 2 2h1"/>
        </svg>
      ),
      desc: 'Earn interest on your savings',
      features: [
        'Savings-focused FCA account',
        'Monthly interest earned at 2.5% p.a.',
      ],
      requirements: [
        'Completed account opening form',
        '2 passport photos',
        'Copy of ID and valid Zimbabwean passport',
        'Proof of residence, such as a foreign utility bill, foreign bank statement or lease agreement',
        'Initial deposit of $50',
      ],
      conditions: [
        { label: 'Minimum Balance', value: '$100' },
        { label: 'Withdrawal Fee', value: '3% (minimum $5)' },
        { label: 'Monthly Maintenance Fee', value: '$5 for more than 2 debit transactions a month' },
        { label: 'Monthly Interest', value: '2.5% p.a.' },
      ],
    },
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero" style={{ backgroundImage: "url('/banners/diaspora.jpg')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Diaspora Accounts</h1>
          <p>Current & Savings FCA</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/diaspora">Diaspora Banking</Link>
          <span className="separator">/</span>
          <span className="current">Accounts</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/diaspora" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to Diaspora Banking
          </Link>

          <div className="story-content" style={{ maxWidth: '100%' }}>
              <span className="section-label">Available Accounts</span>
              <h2>Choose Your Account Type</h2>
              <p style={{ maxWidth: '820px' }}>
                Open a TN CyberTech Bank Diaspora FCA Account today and unlock unparalleled convenience with our exclusive diaspora offering. This unique service allows individuals to make direct payments to family and friends both within and outside Zimbabwe, as well as to local suppliers, ensuring seamless financial management.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.25rem',
                marginTop: '2rem',
              }}>
                {accountTypes.map((account) => (
                  <div key={account.name} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    background: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    boxShadow: '0 16px 36px rgba(17, 24, 39, 0.06)',
                  }}>
                    <div style={{
                      padding: '1.5rem',
                      background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.18) 0%, rgba(174, 106, 6, 0.08) 100%)',
                      borderBottom: '1px solid rgba(174, 106, 6, 0.12)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                          width: '56px',
                          height: '56px',
                          background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 100%)',
                          borderRadius: '14px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <div style={{ width: '28px', height: '28px', color: '#000' }}>
                            {account.icon}
                          </div>
                        </div>
                        <div>
                          <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#111827', margin: '0 0 0.35rem' }}>{account.name}</h3>
                          <p style={{ color: '#6b7280', margin: 0 }}>{account.desc}</p>
                        </div>
                      </div>
                    </div>

                    <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                        gap: '1rem',
                      }}>
                        <div style={{
                          padding: '1rem',
                          background: '#f9fafb',
                          border: '1px solid #eef0f3',
                          borderRadius: '12px',
                        }}>
                          <h4 style={{ fontSize: '0.92rem', fontWeight: '700', color: '#111827', margin: '0 0 0.75rem' }}>Features</h4>
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#4b5563', lineHeight: '1.7' }}>
                            {account.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        </div>

                        <div style={{
                          padding: '1rem',
                          background: '#f9fafb',
                          border: '1px solid #eef0f3',
                          borderRadius: '12px',
                        }}>
                          <h4 style={{ fontSize: '0.92rem', fontWeight: '700', color: '#111827', margin: '0 0 0.75rem' }}>Requirements</h4>
                          <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#4b5563', lineHeight: '1.7' }}>
                            {account.requirements.map((requirement) => (
                              <li key={requirement}>{requirement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div style={{
                        border: '1px solid rgba(174, 106, 6, 0.16)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        marginTop: 'auto',
                      }}>
                        <div style={{
                          padding: '0.85rem 1rem',
                          background: 'rgba(255, 222, 74, 0.16)',
                          color: '#111827',
                          fontSize: '0.92rem',
                          fontWeight: '700',
                        }}>
                          Account Conditions
                        </div>
                        {account.conditions.map((condition, index) => (
                          <div key={condition.label} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '0.85rem 1rem',
                            background: '#fff',
                            borderTop: index > 0 ? '1px solid #f3f4f6' : 'none',
                          }}>
                            <span style={{ color: '#4b5563' }}>{condition.label}</span>
                            <span style={{ fontWeight: '600', color: 'rgb(174, 106, 6)', textAlign: 'right' }}>{condition.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: '2rem',
                padding: '1.25rem',
                background: '#f9fafb',
                border: '1px solid #eef0f3',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap',
              }}>
                <p style={{ color: '#4b5563', margin: 0 }}>
                  For account opening support, contact the Diaspora Banking team.
                </p>
                <a href="mailto:diasporabanking@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
                  Open an Account
                </a>
              </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DiasporaAccounts
