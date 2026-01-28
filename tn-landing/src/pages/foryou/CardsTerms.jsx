import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'

function CardsTerms() {
  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Card Terms & Conditions</h1>
          <p>VISA Debit Card</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/for-you">For You</Link>
          <span className="separator">/</span>
          <Link to="/for-you/cards">Cards</Link>
          <span className="separator">/</span>
          <span className="current">Card Terms & Conditions</span>
        </div>
      </nav>

      <section className="content-section white-section" id="terms">
        <div className="container">
          <ol className="feature-list">
            <li>The card remains the property of TN CyberTech Bank and upon cancellation, must be surrendered on demand to TN CyberTech Bank.</li>
            <li>The card is not transferrable and may only be used by the cardholder.</li>
            <li>TN CyberTech Bank is authorised to debit the cardholder's FCA (USD) account with all such withdrawals. TN CyberTech Bank, at its sole discretion, is entitled to select any funded account to be debited.</li>
            <li>The card does not allow cardholder automatic overdraft facilities nor will it entitle the cardholder the right to countermand or stop payment without prior approval from TN CyberTech Bank.</li>
            <li>TN CyberTech Bank may, at its sole discretion withdraw the card if the Cardholder issues a cheque under the protection of this card for which funds are not provided or were no prior arrangements for overdraft facilities have been made. A penalty charge will be levied at current rates for any cheques issued or guaranteed by this Card without sufficient funds to meet them.</li>
            <li>A cardholder must exercise all due care to prevent:</li>
            <li>The loss of the card.</li>
            <li>The use of the card and PIN by third parties.</li>
            <li>If the card is lost, stolen or the PIN has become known to an unauthorised person, the cardholder must notify TN CyberTech Bank of such a loss, theft or disclosure. Any verbal communication must be confirmed in writing within seven days. The cardholder shall remain liable for any transactions done by any unauthorised user prior to receipt by TN CyberTech Bank of notification of such a loss, theft or disclosure. Hotline 0808888; Email cardcentre@tncybertechbank.co.zw</li>
            <li>The cardholder may at any time cancel the card by returning it to TN CyberTech Bank.</li>
            <li>TN CyberTech Bank may at its discretion, if it is being used contrary to any of the foregoing conditions, cancel a card without consulting the cardholder.</li>
            <li>TN CyberTech Bank is authorised to charge and debit the cardholder account with such fees as it may from time to time determine.</li>
            <li>These conditions have been drawn up in accordance with the laws of Zimbabwe.</li>
            <li>TN CyberTech Bank Limited through Visa will honour and verify transactions from internet sites that request for a CVV2 or a Card Verification Value or check Digit Number or Secure Code (The three digits at the back of the Card). TN CyberTech Bank Limited will not be held liable for any losses that occur where internet transactions are conducted on internet sites that DO NOT request a CVV2 or Card Verification Value or Check Digit.</li>
            <li>Keeping your VISA card Secure: The PIN or secure code and the card shall always be in the control and possession of the authorised cardholder. The cardholder hereby indemnifies and holds the Bank harmless from any direct or indirect loss, damage, costs, claims, liability or losses whatsoever arising transacting made using the card and PIN.</li>
            <li>Keeping of documents and information relating to operations by means of card-time limit for claims: The cardholder shall inform the Bank as soon as reasonably practical if the Cardholder notices an item which seems to be wrong on their statement.</li>
            <li>No claim or action whatsoever relating to a transaction shall be entertained after the expiry of 30 days from the date of the statement of account whereon the transaction is borne In case of cardholder's complaint, the Bank shall follow the rules and regulations set by initiating and processing such complaint.</li>
          </ol>

          <p>
            The cardholder shall advise the bank of any discrepancies within 30 days from the statement date. Cardholder may seek for retrieval request for any transaction that is reflected on statement of the cardholder which needs to be verified. The cardholder will file such a request within 30 days from the statement date and will be liable to pay a retrieval request fee for each such request. This fee is as per the Bank's card fees which will be advised from time to time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CardsTerms
