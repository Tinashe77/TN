import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // Mobile View
  if (isMobile) {
    return (
      <div className="mobile-container">
        {/* Mobile Header */}
        <header className="mobile-header">
          <div className="mobile-logo">
            <img src="/icon.png" alt="TN CyberTech Bank" className="mobile-logo-icon" />
            <div className="mobile-logo-text">
              <span className="mobile-logo-tn">TN</span>
              <span className="mobile-logo-sub">CyberTech</span>
            </div>
          </div>
          <button className="mobile-menu-button" onClick={toggleMenu}>
            <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </header>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${menuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <div className="mobile-menu-icon-container">
              <img src="/icon.png" alt="TN CyberTech Bank" className="mobile-menu-icon spinning" />
            </div>
            <nav className="mobile-menu-nav">
              <Link to="/" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>About Us</Link>
              <a href="#" className="mobile-menu-link">For You</a>
              <a href="#" className="mobile-menu-link">For Business</a>
              <a href="#" className="mobile-menu-link">Contact</a>
            </nav>
          </div>
        </div>

        {/* Gold accent elements */}
        <div className="gold-accent accent-top-left"></div>
        <div className="gold-accent accent-bottom-right"></div>

        {/* Main Content Area */}
        <div className="mobile-main-content">
          {/* Continue in App CTA */}
          <button className="cta-button cta-app">
            Continue in App
          </button>

          {/* Spinning Icon */}
          <div className="icon-container">
            <img
              src="/icon.png"
              alt="TN CyberTech Bank"
              className="spinning-icon"
            />
          </div>

          {/* Continue in Browser CTA */}
          <Link to="/about" className="cta-button cta-browser">
            Continue in Browser
          </Link>
        </div>

        {/* Footer text */}
        <p className="mobile-tagline">The Future of Banking</p>
      </div>
    )
  }

  // Desktop View
  return (
    <div className="desktop-container">
      {/* Background overlay */}
      <div className="background-overlay"></div>

      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="/icon.png" alt="TN CyberTech Bank" className="header-icon" />
          <div className="logo-text">
            <span className="logo-tn">TN</span>
            <span className="logo-cybertech">CyberTech</span>
            <span className="logo-bank">Bank Limited</span>
          </div>
        </div>

        <nav className="nav-container">
          <button className="menu-button" onClick={toggleMenu}>
            <span className="menu-text">Menu</span>
            <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </nav>
      </header>

      {/* Menu Overlay */}
      <div className={`menu-overlay ${menuOpen ? 'active' : ''}`}>
        <div className="menu-content">
          <div className={`menu-icon-container ${menuOpen ? 'spinning' : ''}`}>
            <img src="/icon.png" alt="TN CyberTech Bank" className="menu-icon" />
          </div>
          <nav className="menu-nav">
            <Link to="/" className="menu-link" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="menu-link" onClick={() => setMenuOpen(false)}>About Us</Link>
            <a href="#" className="menu-link">For You</a>
            <a href="#" className="menu-link">For Business</a>
            <a href="#" className="menu-link">Contact</a>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <h1 className="hero-title">The Future of Banking</h1>
          <p className="hero-subtitle">
            Banking that moves with life. Embedded. Digital. Trusted. Everywhere.
          </p>

          <div className="cta-container">
            <Link to="/about" className="cta-button cta-primary">
              Learn More
            </Link>
            <button className="cta-button cta-secondary">
              Get the App
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 TN CyberTech Bank Limited. A Registered Commercial Bank | Member of the Deposit Protection Corporation</p>
      </footer>
    </div>
  )
}

export default Home
