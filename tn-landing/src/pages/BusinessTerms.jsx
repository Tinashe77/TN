import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/PageStyles.css'

function BusinessTerms() {
  const sections = [
    {
      number: '1',
      title: 'DEFINITIONS',
      content: [
        { clause: '1.1', text: '"Bank" means TN CyberTech Bank Limited, a registered commercial bank in Zimbabwe.' },
        { clause: '1.2', text: '"Business Customer" means any company, partnership, sole trader, association, trust or other legal entity that has entered into a banking relationship with the Bank.' },
        { clause: '1.3', text: '"Account" means any business banking account, facility or arrangement between the Bank and the Business Customer.' },
        { clause: '1.4', text: '"Authorised Signatory" means any person duly authorised by the Business Customer to operate the Account in accordance with the mandate provided to the Bank.' },
        { clause: '1.5', text: '"Business Day" means any day on which the Bank is open for business in Zimbabwe, excluding Saturdays, Sundays and public holidays.' },
        { clause: '1.6', text: '"Mandate" means the instruction given to the Bank by the Business Customer specifying the persons authorised to operate the Account and the conditions under which the Account may be operated.' },
      ],
    },
    {
      number: '2',
      title: 'ACCOUNT OPENING AND OPERATION',
      content: [
        { clause: '2.1', text: 'The Business Customer must provide all documentation required by the Bank for account opening, including but not limited to: certificate of incorporation, memorandum and articles of association, board resolution, identity documents of directors and authorised signatories, and proof of business address.' },
        { clause: '2.2', text: 'The Bank reserves the right to decline any application for a business account at its discretion without providing reasons.' },
        { clause: '2.3', text: 'The Business Customer must promptly notify the Bank of any changes to its business structure, directors, authorised signatories, or registered address.' },
        { clause: '2.4', text: 'The Bank may at any time require updated documentation or information from the Business Customer in connection with the Account.' },
        { clause: '2.5', text: 'Instructions given to the Bank by Authorised Signatories in accordance with the Mandate shall be binding on the Business Customer.' },
      ],
    },
    {
      number: '3',
      title: 'FEES AND CHARGES',
      content: [
        { clause: '3.1', text: 'The Business Customer agrees to pay all fees and charges applicable to the Account and services as may be determined by the Bank from time to time.' },
        { clause: '3.2', text: 'The Bank shall provide notice of any changes to fees and charges by posting such changes on its website or by other appropriate means.' },
        { clause: '3.3', text: 'The Bank is entitled to debit the Account with any fees, charges, interest or other amounts due under these Terms and Conditions without prior notice.' },
        { clause: '3.4', text: 'A schedule of fees and charges applicable to business accounts can be obtained from any TN CyberTech Bank branch or at https://tncybertechbank.co.zw.' },
      ],
    },
    {
      number: '4',
      title: 'OVERDRAFTS AND CREDIT FACILITIES',
      content: [
        { clause: '4.1', text: 'No overdraft or credit facility shall be available on the Account unless expressly agreed in writing by the Bank.' },
        { clause: '4.2', text: 'Any credit facility granted is subject to separate terms and conditions which shall be provided to the Business Customer at the time of application.' },
        { clause: '4.3', text: 'The Bank reserves the right to withdraw or reduce any approved credit facility at any time by giving the Business Customer reasonable notice.' },
        { clause: '4.4', text: 'All amounts advanced under a credit facility shall be repayable on demand unless otherwise agreed in writing.' },
      ],
    },
    {
      number: '5',
      title: 'DUTIES OF THE BUSINESS CUSTOMER',
      content: [
        { clause: '5.1', text: 'The Business Customer must ensure that the Account is operated within the limits and conditions agreed with the Bank.' },
        { clause: '5.2', text: 'The Business Customer must take all reasonable steps to prevent fraud, money laundering and financing of terrorism in relation to the Account.' },
        { clause: '5.3', text: 'The Business Customer must comply with all applicable laws and regulations including anti-money laundering and know-your-customer requirements.' },
        { clause: '5.4', text: 'The Business Customer must immediately notify the Bank of any suspected or actual fraud, unauthorised access, or misuse of the Account.' },
        { clause: '5.5', text: 'The Business Customer is responsible for the accuracy and completeness of all payment instructions issued to the Bank.' },
      ],
    },
    {
      number: '6',
      title: 'LIABILITY',
      content: [
        { clause: '6.1', text: 'The Bank shall not be liable for any loss or damage arising from the Business Customer\'s failure to comply with these Terms and Conditions.' },
        { clause: '6.2', text: 'The Bank shall not be liable for any indirect, consequential or special loss or damage suffered by the Business Customer.' },
        { clause: '6.3', text: 'The Business Customer indemnifies the Bank against any loss, damage, cost or expense arising from incorrect, incomplete or unauthorised instructions given to the Bank.' },
        { clause: '6.4', text: 'The Bank\'s liability for any direct loss shall in any event not exceed the amount of the transaction giving rise to the claim.' },
      ],
    },
    {
      number: '7',
      title: 'TERMINATION',
      content: [
        { clause: '7.1', text: 'The Business Customer may close the Account by giving the Bank 30 (thirty) days\' written notice, subject to settlement of all outstanding obligations.' },
        { clause: '7.2', text: 'The Bank may close the Account at any time by giving the Business Customer 30 (thirty) days\' written notice.' },
        { clause: '7.3', text: 'The Bank may close the Account immediately without notice where the Account is being used for fraudulent, illegal or suspicious purposes, or where required by law or regulatory directive.' },
        { clause: '7.4', text: 'Upon closure of the Account, the Business Customer remains liable for all transactions and obligations incurred up to and including the date of closure.' },
      ],
    },
    {
      number: '8',
      title: 'DATA PROTECTION AND CONFIDENTIALITY',
      content: [
        { clause: '8.1', text: 'The Bank will treat all information relating to the Business Customer and its Account as confidential in accordance with the Bank\'s Privacy Statement and applicable data protection laws.' },
        { clause: '8.2', text: 'The Bank may disclose information about the Business Customer where required by law, by a court order, by a regulatory authority, or with the consent of the Business Customer.' },
        { clause: '8.3', text: 'The Business Customer consents to the Bank sharing information with credit reference bureaus, the Reserve Bank of Zimbabwe, and other regulatory bodies as required.' },
      ],
    },
    {
      number: '9',
      title: 'GENERAL',
      content: [
        { clause: '9.1', text: 'These Terms and Conditions are governed by and construed in accordance with the laws of Zimbabwe.' },
        { clause: '9.2', text: 'Any dispute arising from these Terms and Conditions shall be subject to the jurisdiction of the courts of Zimbabwe.' },
        { clause: '9.3', text: 'The Bank may amend these Terms and Conditions at any time by giving the Business Customer reasonable notice by posting the amended terms on the Bank\'s website.' },
        { clause: '9.4', text: 'If any provision of these Terms and Conditions is found to be unenforceable, the remaining provisions shall continue in full force and effect.' },
        { clause: '9.5', text: 'These Terms and Conditions must be read together with any product-specific terms, facility agreements, or other agreements entered into between the Bank and the Business Customer.' },
      ],
    },
    {
      number: '10',
      title: 'COMPLAINT HANDLING',
      content: [
        { clause: '10.1', text: 'If you are dissatisfied with any service provided by TN CyberTech Bank, you may raise a complaint at any branch, by telephone, email or letter.' },
        { clause: '10.2', text: 'The Bank aims to resolve complaints within 48 hours. Unresolved complaints may be escalated to the Customer Experience Department at Head Office on 0808 8888 (Econet lines).' },
        { clause: '10.3', text: 'You may also email the Bank at customerservice@tncybertechbank.co.zw.' },
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
          <h1>Business Banking Terms &amp; Conditions</h1>
          <p>Terms and Conditions Applicable to Business Banking Accounts</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <span className="current">Business Banking Terms &amp; Conditions</span>
        </div>
      </nav>

      {/* Intro */}
      <section className="content-section white-section">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>

            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 222, 74, 0.08) 0%, rgba(174, 106, 6, 0.04) 100%)',
              border: '1px solid rgba(255, 222, 74, 0.3)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '3rem',
            }}>
              <p style={{ color: '#374151', lineHeight: '1.9', fontSize: '0.9375rem', margin: 0 }}>
                Please read the following Terms and Conditions carefully. By opening or operating a business banking account with TN CyberTech Bank Limited (the Bank), the Business Customer acknowledges that it has read, understood and agrees to be bound by these Terms and Conditions, as may be amended by the Bank from time to time and posted on this website. If the Business Customer does not agree to these Terms and Conditions, the Business Customer may not open or continue to operate a business account with the Bank.
              </p>
            </div>

            {sections.map((section) => (
              <div key={section.number} style={{ marginBottom: '2.5rem' }}>
                <h2 style={{
                  fontSize: '1.0625rem',
                  fontWeight: '700',
                  color: '#111827',
                  marginBottom: '1.25rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '2px solid rgb(255, 222, 74)',
                  display: 'inline-block',
                }}>
                  {section.number}. {section.title}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {section.content.map((item) => (
                    <div key={item.clause} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span style={{
                        fontWeight: '600',
                        color: 'rgb(174, 106, 6)',
                        fontSize: '0.875rem',
                        minWidth: '2.5rem',
                        paddingTop: '0.125rem',
                        flexShrink: 0,
                      }}>
                        {item.clause}
                      </span>
                      <p style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '0.9375rem', margin: 0 }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div style={{
              marginTop: '3rem',
              padding: '1.5rem 2rem',
              background: '#f9fafb',
              borderRadius: '12px',
              borderLeft: '4px solid rgb(174, 106, 6)',
            }}>
              <p style={{ color: '#374151', lineHeight: '1.8', fontSize: '0.9375rem', margin: 0 }}>
                <strong>I/We have read and understood the Terms and Conditions applicable to Business Banking Accounts with TN CyberTech Bank Limited and agree to be bound by them.</strong>
              </p>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="cta-btn cta-btn-primary">Contact Us</Link>
              <Link to="/for-business/accounts" className="cta-btn cta-btn-secondary">Business Accounts</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BusinessTerms
