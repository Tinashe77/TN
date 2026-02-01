import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/')

  const forYouItems = [
    { label: 'Mobile Banking', path: '/for-you/mobile-banking', desc: 'App, Online & USSD Banking' },
    { label: 'Personal Accounts', path: '/for-you/accounts', desc: 'Savings, Current & Student Accounts' },
    { label: 'Cards', path: '/for-you/cards', desc: 'Zimswitch & VISA Cards' },
    { label: 'Nano Loans', path: '/for-you/loans', desc: 'Quick loans in 60 seconds' },
  ]

  const forBusinessItems = [
    { label: 'Business Accounts', path: '/for-business/accounts', desc: 'SME, Corporate & Non-profit' },
    { label: 'Merchant Services - POS', path: '/for-business/merchant', desc: 'Point of Sale Machines' },
    { label: 'Business Loans', path: '/for-business/loans', desc: 'Loans and Bank Guarantees' },
    { label: 'Corporate & Investment Banking', path: '/for-business/corporate', desc: 'Corporate & Investment Banking' },
    { label: 'Visa Corporate Card', path: '/for-business/visa-corporate-card', desc: 'Reloadable prepaid card' },
    { label: 'International Banking', path: '/for-business/international', desc: 'Exchange Control & Payments' },
    { label: 'Agent Banking', path: '/for-business/agents', desc: 'Become an Agent' },
  ]

  const aboutItems = [
    { label: 'About Us', path: '/about', desc: 'Our story and values' },
    { label: 'Board of Directors', path: '/board-of-directors', desc: 'Our leadership board' },
    { label: 'Management Team', path: '/management-team', desc: 'Executive management' },
  ]

  return (
    <>
      <header className="site-header">
        <Link to="/" className="header-logo">
          <img src="/bank-logo.png" alt="TN CyberTech Bank" className="header-logo-img" />
        </Link>

        <nav className="header-nav desktop-nav">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setActiveDropdown('foryou')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/for-you" className={`nav-link ${isActive('/for-you') ? 'active' : ''}`}>
              For You
              <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </Link>
            {activeDropdown === 'foryou' && (
              <div className="dropdown-menu">
                {forYouItems.map((item) => (
                  <Link key={item.path} to={item.path} className="dropdown-item">
                    <span className="dropdown-item-label">{item.label}</span>
                    <span className="dropdown-item-desc">{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setActiveDropdown('forbusiness')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/for-business" className={`nav-link ${isActive('/for-business') ? 'active' : ''}`}>
              For Business
              <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </Link>
            {activeDropdown === 'forbusiness' && (
              <div className="dropdown-menu">
                {forBusinessItems.map((item) => (
                  <Link key={item.path} to={item.path} className="dropdown-item">
                    <span className="dropdown-item-label">{item.label}</span>
                    <span className="dropdown-item-desc">{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/diaspora" className={`nav-link ${isActive('/diaspora') ? 'active' : ''}`}>Diaspora</Link>
          <Link to="/partners" className={`nav-link ${isActive('/partners') ? 'active' : ''}`}>Our Partners</Link>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/about" className={`nav-link ${isActive('/about') || isActive('/board-of-directors') || isActive('/management-team') ? 'active' : ''}`}>
              About Us
              <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </Link>
            {activeDropdown === 'about' && (
              <div className="dropdown-menu">
                {aboutItems.map((item) => (
                  <Link key={item.path} to={item.path} className="dropdown-item">
                    <span className="dropdown-item-label">{item.label}</span>
                    <span className="dropdown-item-desc">{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-logo">
            <img src="/rotating-gif.gif" alt="TN CyberTech Bank" />
          </div>
          <nav className="mobile-nav">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <div className="mobile-nav-group">
              <span className="mobile-nav-label">For You</span>
              {forYouItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setMenuOpen(false)} className="mobile-nav-sub">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mobile-nav-group">
              <span className="mobile-nav-label">For Business</span>
              {forBusinessItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setMenuOpen(false)} className="mobile-nav-sub">
                  {item.label}
                </Link>
              ))}
            </div>
            <Link to="/diaspora" onClick={() => setMenuOpen(false)}>Diaspora</Link>
            <Link to="/partners" onClick={() => setMenuOpen(false)}>Our Partners</Link>
            <div className="mobile-nav-group">
              <span className="mobile-nav-label">About Us</span>
              {aboutItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setMenuOpen(false)} className="mobile-nav-sub">
                  {item.label}
                </Link>
              ))}
            </div>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
