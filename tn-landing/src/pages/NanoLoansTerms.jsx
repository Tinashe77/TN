import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/PageStyles.css'

function NanoLoansTerms() {
  const sections = [
    {
      number: '1',
      title: 'GENERAL CLAUSES',
      intro: 'In this agreement, unless the context clearly indicates a contrary intention the words herein below defined shall have the meanings assigned to them and similar expressions shall bear corresponding meanings:',
      content: [
        { clause: '1.1', text: '"Bank" means TN CyberTech Bank of 79 Oliver Tambo Avenue, Corner 7th Street, Harare, or any of its branches within Zimbabwe.' },
        { clause: '1.2', text: '"Equipment" includes mobile phone handset, SIM Card, and/or other equipment which when used together enables the mobile banking services customer to access the network.' },
        { clause: '1.3', text: '"Charges" means the NANO loans charges and any other charges pertaining to the provision of the Nano loan services.' },
        { clause: '1.4', text: '"Parties" means the Bank and the Customer.' },
        { clause: '1.5', text: '"Agreed Rate" means the rate of interest per month which will be indicated, or the loan-handling fee or the penalty fee in the event of default.' },
        { clause: '1.6', text: '"We," "our," and "us," means the Bank and include the successors and assigns of the Bank.' },
        { clause: '1.7', text: '"You" or "your" means the Customer and includes the personal representatives of the Customer.' },
        { clause: '1.8', text: 'The word "Customer" shall include both the masculine and feminine gender as well as juristic persons.' },
      ],
    },
    {
      number: '2',
      title: 'COMMENCEMENT AND ACCEPTANCE',
      content: [
        { clause: '2.1', text: 'The Agreement shall commence upon acceptance of the terms and conditions and approval of the Nano loan application by the Bank.' },
        { clause: '2.2', text: 'The customer shall be deemed to have read, understood, and accepted the NANO loans terms and conditions:' },
        { clause: '2.2.1', text: 'On clicking the "accept" on the NANO loans menu.' },
        { clause: '2.2.2', text: 'Using and continuing to use and operate the *236# menu, or any other platform through which the Bank provides NANO loans from.' },
        { clause: '2.2.3', text: 'By applying to access the NANO loans offered by the Bank, you agree to be bound by the terms and conditions and that the terms and conditions herein are without prejudice to any right that the Bank may have with respect to the NANO loans in law or otherwise.' },
        { clause: '2.2.4', text: 'The Terms and Conditions may be amended or varied by the Bank from time to time and your continued use of *236# or any other platform or channel where NANO loans can be accessed constitutes your agreement to be bound by the terms and conditions as amended or varied from time to time.' },
      ],
    },
    {
      number: '3',
      title: 'NANO LOAN APPLICATION',
      content: [
        { clause: '3.1', text: 'The existing or prospective NANO loans Customer must be at least 18 years old and be a registered TN CyberTech Bank Account Holder. The Bank has the right to request further information from you pertaining to your application, even during the tenure of your NANO loan.' },
        { clause: '3.2', text: 'You access your NANO loan by way of an electronic application made by you using your Equipment via the *236# Menu and any other channel that the Bank may specify.' },
        { clause: '3.3', text: 'You hereby consent to the disclosure of personal information from any source to the Bank including information held by the Credit Reference Bureau and the Registrar Generals Officer.' },
        { clause: '3.4', text: 'Acceptance by the Bank of your application for your NANO loan does not create any contractual relationships between you and the Bank beyond the terms and conditions that apply to your NANO loan from time to time.' },
        { clause: '3.5', text: 'The Bank has the right to decline your application or to revoke the same at any stage at its sole discretion and without assigning any reason or giving any notice thereto.' },
        { clause: '3.6', text: 'The NANO loan minimum application amount is USD20.00 and the maximum is USD100.00 based on account activity. This may be reviewed from time to time. The Bank will advise the Customer of any change in minimum lending rates, charges, or fees by the publication of a notice in a local or national newspaper or by notice at its branches in Zimbabwe or through publication on the TN CyberTech Bank website or by statement messaging. The Customer understands and agrees that the Bank is not obliged to obtain the Customer\'s signature for receipt of such communication.' },
      ],
    },
    {
      number: '3a',
      title: 'NANO LOAN ACCOUNT',
      content: [
        { clause: '3.7', text: 'Subject to terms and conditions, a qualifying borrowing customer may apply for a NANO loan from the Bank using the *236# menu or any other channel the Bank may specify on your equipment.' },
        { clause: '3.8', text: 'The loan application shall be appraised electronically.' },
        { clause: '3.9', text: 'The Bank reserves the right at its sole discretion and without assigning any reason to approve or decline your application for a loan.' },
        { clause: '3.10', text: 'Subject to the approval of your application for a loan, the bank shall disburse to you a loan amount based on the Bank\'s discretion and subject to the deduction of a handling fee of 15% of the loan amount.' },
        { clause: '3.11', text: 'The Loan amount shall be disbursed and credited into the customer\'s account that is registered with TN CyberTech Bank less the applicable handling fees.' },
        { clause: '3.12', text: 'You shall repay the loan in over 30 calendar days from the date of disbursement of the loan or any such time as may be stipulated by the Bank from time to time based on the amount loaned.' },
        { clause: '3.13', text: 'You shall pay the applicable fees in advance and all repayments due shall be deducted automatically from the TN CyberTech Bank registered Account.' },
        { clause: '3.14', text: 'In the event that the loan is not paid up in full within 33 calendar days of the date of disbursement, the Bank will automatically enact a penalty fee of 5% on the outstanding loan amount per month. The penalty fee will be compounded monthly. In the event of failure to pay back the loan within the agreed time, the Bank will deduct the funds from either the customer\'s account.' },
        { clause: '3.15', text: 'All amounts received by the Bank will be first apportioned towards overdue interest, charges, or fees. Any balance left thereafter will be apportioned towards the principal amount due.' },
        { clause: '3.16', text: 'The Bank has the right to vary the terms of the loan including fees or interest payable thereon relative to market changes and other regulatory provisions. If thereafter the Borrower continues to use the loan facility by not repaying all outstanding amounts in full immediately, then the Borrower shall be deemed to have agreed to such other rates of fees or interest.' },
        { clause: '3.17', text: 'The Bank has the right to set off your outstanding loan amount with any credit balances held in any of your Bank accounts.' },
        { clause: '3.18', text: 'If any part of the facility is denominated in foreign currency, payment under or the repayment of such facility will be made in such foreign currency. Any money received by the Bank, in a foreign currency other than the currency of the account or such other currency as the Bank considers necessary to cover the obligations or liabilities of the Borrower, will be converted at the Bank\'s spot rate of exchange for such conversation. In exercising the aforementioned rights, the Bank will not be held liable for any losses resulting from exchange rate fluctuations.' },
        { clause: '3.19', text: 'You hereby expressly consent and authorize the Bank to make inquiries from any bank, financial institution, or approved credit reference bureau to confirm any information you will have provided to the Bank; seek information from any Bank financial institution or approved credit reference bureau, or to disclose, respond and advise and communicate information relating to your account maintained at the Bank to approved credit reference bureaus or regulatory authorities or any authorized agencies at Law.' },
        { clause: '3.20', text: 'Should the borrower fail to meet its commitments in terms of this agreement, the Borrower acknowledges that the Bank may record the borrower\'s non-performance with any credit bureau. In such event, the Borrower shall be liable to pay any administrative costs required by the Bank and/or the credit bureau in clearing the borrowers\' non-performance record with the credit bureau.' },
      ],
    },
    {
      number: '4',
      title: 'SUSPENSION OF NANO LOANS',
      intro: 'The Bank may at any time, and upon giving notice to the customer where possible, suspend its provision of NANO loan services to the customer in the event that:',
      content: [
        { clause: '4.1', text: 'Any modification, maintenance, or remedial work is required to be undertaken pertaining to any matter whatsoever to the Nano loans Application Service Platforms or the Network.' },
        { clause: '4.2', text: 'The customer fails to perform any of his obligations, or breaches any term of this agreement.' },
      ],
    },
    {
      number: '5',
      title: 'LIMITATION OF LIABILITY',
      intro: 'Without detracting from any of the other provisions of this Agreement, the Bank shall not be liable to the Customer for any loss or damage suffered by the customer, whether direct or consequential, in any circumstance.',
      content: [],
    },
    {
      number: '6',
      title: 'INTELLECTUAL PROPERTY RIGHTS',
      content: [
        { clause: '6.1', text: 'You shall not duplicate, reproduce or in any way tamper with the NANO loans feature and associated documentation without the prior written consent of the Bank.' },
      ],
    },
    {
      number: '7',
      title: 'APPLICABLE LAW, JURISDICTION & TERMINATION OF NANO LOANS SERVICE',
      content: [
        { clause: '7.1', text: 'This agreement shall be governed by, construed or otherwise interpreted in accordance with the laws of Zimbabwe.' },
        { clause: '7.2', text: 'The parties shall comply with all applicable laws and governmental regulations issued from time to time. None of the parties is authorized or otherwise expected to take any action in the name of or otherwise on behalf of the other which would violate applicable laws and regulations, and any such representation shall be null and void.' },
        { clause: '7.3', text: 'The Customer hereby submits to the jurisdiction of the Magistrates Court in the event of any dispute leading to litigation arising out of matters in terms of this contract or connected thereto, and in any such event, the customer, if found liable, shall be obliged to pay the Bank\'s costs at the legal-practitioner-client scale, and any and all other costs and collection commission incidental thereto and so charged.' },
        { clause: '7.4', text: 'The Bank may at any time upon notice to you terminate the NANO loans service.' },
      ],
    },
    {
      number: '8',
      title: 'CONFIDENTIALITY',
      intro: 'The Customer shall keep all knowledge and information acquired or supplied by the Bank in terms of this agreement confidential. All such information disclosed by either party during the term of this agreement shall be regarded as confidential unless expressly stated otherwise by the disclosing party and shall not be disclosed to third parties, or used for any other purpose other than for which it was disclosed, without the prior written consent of the disclosing party; provided that such information shall not be regarded as confidential if:',
      content: [
        { clause: '8.1', text: 'It was the position of or known to the receiving party or disclosure thereof by the disclosing party other than pursuant to a breach by the receiving party of its obligation in terms of this clause; or' },
        { clause: '8.2', text: 'It is or becomes publicly known otherwise than pursuant to a breach of its obligation in terms of this clause by the receiving party; or' },
        { clause: '8.3', text: 'The receiving party is required, pursuant to the order of a court of competent jurisdiction or otherwise as authorized by law to disclose such information; or' },
        { clause: '8.4', text: 'The Bank transfers the Borrower\'s information and data to third parties as is necessary for it to carry out its legitimate professional and business needs under this Agreement, to carry out the Borrower\'s requests, and/or as required or permitted by law or professional standards. This includes but is not limited to entities in partnership with the Bank for the provision of NANO loan services, real estate companies, legal practitioners, insurers, auditors, courts, tribunals, law enforcement or regulatory bodies etc.' },
      ],
      outro: 'The obligations of the parties in terms of this clause shall survive any termination of this agreement.',
    },
    {
      number: '9',
      title: 'DATA PROTECTION',
      intro: 'The Bank processes Customer personal data in accordance with the Cyber and Data Protection Act [Chapter 12:07] and applicable laws.',
      content: [
        { clause: '', text: 'By accepting these Terms, the Customer consents to the collection and use of personal data for purposes including credit assessment, loan processing, fraud prevention, regulatory compliance, and service improvement.' },
        { clause: '', text: 'The Bank may share personal data with credit reference bureaus, regulators, and authorized service providers, subject to confidentiality obligations. Where data is transferred outside Zimbabwe, appropriate safeguards will be applied.' },
        { clause: '', text: 'The Bank implements reasonable security measures to protect personal data and retains it only as necessary for lawful purposes.' },
        { clause: '', text: 'Customers have the right to access and correct their personal data and to raise complaints with the relevant authority.' },
      ],
    },
    {
      number: '10',
      title: 'ANTI-MONEY LAUNDERING (AML) AND KNOW YOUR CUSTOMER (KYC)',
      content: [
        { clause: '10.1', text: 'You acknowledge and agree to comply with all applicable Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations, as required under Zimbabwean law, including the Banking Act [Chapter 24:20], the Money Laundering and Proceeds of Crime Act [Chapter 9:24], and any relevant regulations or policies issued by the Bank.' },
        { clause: '10.2', text: 'You agree to provide accurate, complete, and timely information and documentation as requested by the Bank for the purposes of complying with AML/KYC requirements. This includes, but is not limited to, proof of identity, proof of address, source of funds, and any other documentation that the Bank may reasonably require.' },
        { clause: '10.3', text: 'The Bank reserves the right to suspend, restrict, or terminate your account or services should you fail to provide the requested information or if the Bank suspects that your account is being used for fraudulent or unlawful activities, in accordance with AML/CFT/CPF regulations.' },
      ],
    },
    {
      number: '11',
      title: 'CONSUMER PROTECTION',
      content: [
        { clause: '11.1', text: 'The Bank is committed to upholding your rights in accordance with Zimbabwean consumer protection laws.' },
        { clause: '11.2', text: 'Complaints will be handled promptly and efficiently. You are encouraged to familiarize yourself with your rights and responsibilities and contact the Bank with any concerns.' },
        { clause: '11.3', text: 'If you are dissatisfied with the service, you may raise a complaint through any branch, by phone, email, fax, or letter. Complaints will be resolved within 48 hours. Unresolved complaints may be escalated to the Customer Experience Department.' },
      ],
    },
    {
      number: '12',
      title: 'GENERAL',
      content: [
        { clause: '12.1', text: 'In the event of the customer failing to effect payment of any amount owing to the Bank on the due date, then without derogating from the Bank\'s rights, the customer shall be liable to effect payment of Interest or a penalty fee to the Bank, on the amount owing at the agreed rate.' },
        { clause: '12.2', text: 'All prices and charges set out in this Agreement and/or Tariff Schedule are inclusive of Value Added Tax (VAT) and any other applicable Tax, the liability for which shall vest with the customer.' },
        { clause: '12.3', text: 'The rights and obligations of the customer in terms of this Agreement may not be ceded or delegated by it to any third party. The rights and obligations of the Bank in terms of this Agreement, may be ceded and delegated by it to any other party, to the extent permitted by law, on written notice to the customer.' },
        { clause: '12.4', text: 'This document contains the entire Agreement between the Parties regarding the matters contained herein irrespective of whether such undertakings, representation, or warranties have been made and approved by the Bank.' },
        { clause: '12.5', text: 'No indulgence, leniency, or extension of time, which the Bank show to the customer, shall in any way prejudice it from exercising any of this right in the future.' },
        { clause: '12.6', text: 'A certificate under the hand of any managers of the Bank certifying the amount owing by the customer to the Bank shall be prima facie proof of its contents and sufficient proof for the purpose of enabling the Bank to obtain any judgement or order against the customer.' },
        { clause: '12.7', text: 'In the event of any one or more of these terms and conditions being unenforceable, the same will be deemed severable from the remainder of this Agreement, which will nevertheless be binding and enforceable.' },
        { clause: '12.8', text: 'Each of the Parties chooses the domicilium citandi et executandi ("domicilium") for the purpose of the giving any notice, the serving of any process, and for any purpose arising from the Agreement at their respective addresses stated in their Know Your Customer (KYC) details held with either the Bank, EcoCash or Econet Wireless.' },
        { clause: '12.9', text: 'Each of the Parties shall be entitled from time to time by written notice to the other to vary its domicilium to any other address within Zimbabwe which is not a Post Office box or Poste Restante.' },
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
          <h1>Nano Loans Terms &amp; Conditions</h1>
          <p>Terms and Conditions Applicable to NANO Loans — 2026</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-you/loans">Nano Loans</Link>
          <span className="separator">/</span>
          <span className="current">Terms &amp; Conditions</span>
        </div>
      </nav>

      {/* Content */}
      <section className="content-section white-section">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>

            {/* Address block */}
            <div style={{
              background: '#f9fafb',
              borderRadius: '12px',
              padding: '1.25rem 1.5rem',
              marginBottom: '2.5rem',
              borderLeft: '4px solid rgb(174, 106, 6)',
            }}>
              <p style={{ color: '#374151', fontSize: '0.9375rem', lineHeight: '1.7', margin: 0 }}>
                2nd Floor, 79 Oliver Tambo Avenue, Corner 7th Street, Harare Zimbabwe<br />
                Tel: +2638677020267
              </p>
            </div>

            {/* Intro banner */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255,222,74,0.08) 0%, rgba(174,106,6,0.04) 100%)',
              border: '1px solid rgba(255,222,74,0.3)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '3rem',
            }}>
              <p style={{ color: '#374151', lineHeight: '1.9', fontSize: '0.9375rem', margin: 0 }}>
                Please read the following Terms and Conditions carefully. By applying for or using a NANO loan from TN CyberTech Bank Limited, you acknowledge that you have read, understood and agree to be bound by these Terms and Conditions as may be amended from time to time.
              </p>
            </div>

            {sections.map((section) => (
              <div key={section.number} style={{ marginBottom: '2.5rem' }}>
                <h2 style={{
                  fontSize: '1.0625rem',
                  fontWeight: '700',
                  color: '#111827',
                  marginBottom: '1rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '2px solid rgb(255,222,74)',
                  display: 'inline-block',
                }}>
                  {section.number !== '3a' ? `${section.number}.` : ''} {section.title}
                </h2>

                {section.intro && (
                  <p style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '0.9375rem', marginBottom: '1rem' }}>
                    {section.intro}
                  </p>
                )}

                {section.content.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                    {section.content.map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        {item.clause && (
                          <span style={{
                            fontWeight: '600',
                            color: 'rgb(174,106,6)',
                            fontSize: '0.875rem',
                            minWidth: '3rem',
                            paddingTop: '0.125rem',
                            flexShrink: 0,
                          }}>
                            {item.clause}
                          </span>
                        )}
                        <p style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '0.9375rem', margin: 0 }}>
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.outro && (
                  <p style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '0.9375rem', marginTop: '1rem', fontStyle: 'italic' }}>
                    {section.outro}
                  </p>
                )}
              </div>
            ))}

            <div style={{
              marginTop: '3rem',
              padding: '1.5rem 2rem',
              background: '#f9fafb',
              borderRadius: '12px',
              borderLeft: '4px solid rgb(174,106,6)',
            }}>
              <p style={{ color: '#374151', lineHeight: '1.8', fontSize: '0.9375rem', margin: 0 }}>
                <strong>I/We have read and understood the Nano Loans Terms and Conditions and agree to be bound by them.</strong>
              </p>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/for-you/loans" className="cta-btn cta-btn-primary">Apply for a Nano Loan</Link>
              <Link to="/contact" className="cta-btn cta-btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default NanoLoansTerms
