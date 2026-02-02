import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function InternationalPayments() {
  const outgoingCurrencies = ['USD', 'EUR', 'ZAR', 'BWP']
  const incomingCurrencies = ['USD', 'EUR', 'ZAR', 'BWP', 'GBP']

  const settlementInstructions = [
    { currency: 'USD', beneficiarySwift: 'STBLZWHX', correspondentSwift: 'ECOCFRPP', correspondentBank: 'EBI SA Paris' },
    { currency: 'USD', beneficiarySwift: 'STBLZWHX', correspondentSwift: 'AFXMEGCA', correspondentBank: 'Afrexim Bank' },
    { currency: 'USD', beneficiarySwift: 'STBLZWHX', correspondentSwift: 'FIRNZAJJ', correspondentBank: 'FNB South Africa' },
    { currency: 'EUR', beneficiarySwift: 'STBLZWHX', correspondentSwift: 'ECOCFRPP', correspondentBank: 'EBI SA Paris' },
    { currency: 'EUR', beneficiarySwift: 'STBLZWHX', correspondentSwift: 'FIRNZAJJ', correspondentBank: 'FNB South Africa' },
    { currency: 'ZAR', beneficiarySwift: 'STBLZWHX', correspondentSwift: 'FIRNZAJJ', correspondentBank: 'FNB South Africa' },
    { currency: 'ZAR', beneficiarySwift: 'STBLZWHX', correspondentSwift: 'ABSAZAJJ', correspondentBank: 'ABSA Bank South Africa' },
    { currency: 'BWP', beneficiarySwift: 'STBLZWHX', correspondentSwift: 'FIRNBWGX', correspondentBank: 'FNB Botswana' },
    { currency: 'GBP', beneficiarySwift: 'STBLZWHX', correspondentSwift: 'FIRNZAJJ', correspondentBank: 'FNB South Africa' },
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Cross-border Payments</h1>
          <p>SWIFT payments worldwide</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-business">For Business</Link>
          <span className="separator">/</span>
          <Link to="/for-business/international">International Banking</Link>
          <span className="separator">/</span>
          <span className="current">Cross-border Payments</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/for-business/international" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to International Banking
          </Link>

          <div className="story-content" style={{ maxWidth: '100%' }}>
            <span className="section-label">International Banking</span>
            <h2>Cross-border Payments</h2>
            <p>
              TN CyberTech Bank facilitates International Payments through SWIFT and the Bank's network of Correspondent Banks.
            </p>

            {/* Outgoing Payments */}
            <div style={{
              background: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              padding: '2rem',
              marginTop: '2rem',
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>1. Outgoing Cross-border Payments</h3>
              <p style={{ color: '#4b5563', marginBottom: '1rem' }}>
                TN CyberTech Bank can process outgoing Telegraphic payments for Corporates and Individuals in the following currencies:
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {outgoingCurrencies.map((currency) => (
                  <span key={currency} style={{
                    background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.2) 0%, rgba(174, 106, 6, 0.1) 100%)',
                    color: 'rgb(174, 106, 6)',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontWeight: '600',
                  }}>{currency}</span>
                ))}
              </div>
            </div>

            {/* Incoming Payments */}
            <div style={{
              background: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              padding: '2rem',
              marginTop: '1.5rem',
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>2. Incoming Cross-border Payments</h3>
              <p style={{ color: '#4b5563', marginBottom: '1rem' }}>
                TN CyberTech Bank can process incoming Cross-border Payments for Corporates and Individuals in the following currencies:
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {incomingCurrencies.map((currency) => (
                  <span key={currency} style={{
                    background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.2) 0%, rgba(174, 106, 6, 0.1) 100%)',
                    color: 'rgb(174, 106, 6)',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontWeight: '600',
                  }}>{currency}</span>
                ))}
              </div>
            </div>

            {/* Settlement Instructions */}
            <div style={{
              background: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              padding: '2rem',
              marginTop: '1.5rem',
              overflowX: 'auto',
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>Standard Settlement Instructions</h3>
              <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
                Please make use of the Standard Settlement Instructions below.
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.2) 0%, rgba(174, 106, 6, 0.1) 100%)' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#111827', borderBottom: '2px solid #e5e7eb' }}>Currency</th>
                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#111827', borderBottom: '2px solid #e5e7eb' }}>Beneficiary Bank SWIFT Code</th>
                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#111827', borderBottom: '2px solid #e5e7eb' }}>Correspondent Bank SWIFT code</th>
                    <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#111827', borderBottom: '2px solid #e5e7eb' }}>Correspondent Bank</th>
                  </tr>
                </thead>
                <tbody>
                  {settlementInstructions.map((row, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #f3f4f6' }}>
                      <td style={{ padding: '0.75rem 1rem', color: 'rgb(174, 106, 6)', fontWeight: '600' }}>{row.currency}</td>
                      <td style={{ padding: '0.75rem 1rem', color: '#4b5563', fontFamily: 'monospace' }}>{row.beneficiarySwift}</td>
                      <td style={{ padding: '0.75rem 1rem', color: '#4b5563', fontFamily: 'monospace', fontWeight: '600' }}>{row.correspondentSwift}</td>
                      <td style={{ padding: '0.75rem 1rem', color: '#4b5563' }}>{row.correspondentBank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Important Note */}
            <div style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.15) 0%, rgba(174, 106, 6, 0.1) 100%)',
              borderRadius: '12px',
              border: '2px solid rgba(255, 222, 74, 0.3)',
              marginTop: '1.5rem',
            }}>
              <p style={{ color: '#111827', margin: 0, fontWeight: '600' }}>
                <strong>NB.</strong> It is mandatory to quote our Correspondent Bank (Intermediary Bank) on all Incoming Cross-border Payments.
              </p>
            </div>

            {/* PAPSS Section */}
            <div style={{
              background: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              padding: '2rem',
              marginTop: '1.5rem',
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>PAPSS - Pan-African Payment and Settlement System</h3>
              <p style={{ color: '#4b5563', marginBottom: '1rem' }}>
                TN CyberTech Bank is also a member of PAPSS (Pan-African Payment and Settlement System) for regional payments to and from participating Banks.
              </p>
              <p style={{ color: '#4b5563' }}>
                Please see the link below for participating Banks and jurisdictions:
              </p>
              <a
                href="https://papss.com/live-commercial-banks/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'rgb(174, 106, 6)',
                  fontWeight: '600',
                  textDecoration: 'underline',
                }}
              >
                PAPSS - LIST OF LIVE COMMERCIAL BANKS
              </a>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="mailto:international_banking@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
                Contact International Banking
              </a>
              <Link to="/contact" className="cta-btn cta-btn-secondary">
                Visit a Branch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default InternationalPayments
