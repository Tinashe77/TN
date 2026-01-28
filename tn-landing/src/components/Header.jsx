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
    { label: 'Micro Loans', path: '/for-you/loans', desc: 'Quick loans in 60 seconds' },
  ]

  const forBusinessItems = [
    { label: 'Business Accounts', path: '/for-business/accounts', desc: 'SME, Corporate & Non-profit' },
    { label: 'International Banking', path: '/for-business/international', desc: 'Trade Finance & FX' },
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
          <Link to="/partners" className={`nav-link ${isActive('/partners') ? 'active' : ''}`}>Partners</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
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
            <Link to="/partners" onClick={() => setMenuOpen(false)}>Partners</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
