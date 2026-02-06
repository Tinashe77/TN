import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/icon.png" alt="TN CyberTech Bank" />
              <span>TN CyberTech Bank</span>
            </div>
            <p className="footer-tagline">The Future of Banking</p>
            <div className="footer-contact-info">
              <p>Toll Free: <strong>08080 36100</strong></p>
              <p>Phone: +263 242 886 646-53</p>
              <p>Email: customerservice@tncybertechbank.co.zw</p>
            </div>
          </div>

          {/* For You Column */}
          <div className="footer-links-col">
            <h4>For You</h4>
            <Link to="/for-you/mobile-banking">Mobile Banking</Link>
            <Link to="/for-you/accounts">Personal Accounts</Link>
            <Link to="/for-you/cards">Cards</Link>
            <Link to="/for-you/loans">Micro Loans</Link>
          </div>

          {/* For Business Column */}
          <div className="footer-links-col">
            <h4>For Business</h4>
            <Link to="/for-business/accounts">Business Accounts</Link>
            <Link to="/for-business/international">International Banking</Link>
            <Link to="/for-business">All Business Services</Link>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <Link to="/diaspora">Diaspora Banking</Link>
            <Link to="/partners">Partners</Link>
            <Link to="/about">About Us</Link>
            <Link to="/board-of-directors">Board of Directors</Link>
            <Link to="/management-team">Management Team</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-legal">
            &copy; 2026 TN CyberTech Bank Limited. A Registered Commercial Bank | Member of the Deposit Protection Corporation
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy-statement">Privacy Statement</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
            <Link to="/customer-service">Customer Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
