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
            <img src="/bank-logo.png" alt="TN CyberTech Bank" className="mobile-logo-img" />
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
              <img src="/rotating-gif.gif" alt="TN CyberTech Bank" className="mobile-menu-icon" />
            </div>
            <nav className="mobile-menu-nav">
              <Link to="/" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>About Us</Link>
              <Link to="/for-you" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>For You</Link>
              <Link to="/for-business" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>For Business</Link>
              <Link to="/diaspora" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Diaspora</Link>
              <Link to="/partners" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Partners</Link>
              <Link to="/contact" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        </div>

        {/* Gold accent elements */}
        <div className="gold-accent accent-top-left"></div>
        <div className="gold-accent accent-bottom-right"></div>

        {/* Main Content Area */}
        <div className="mobile-main-content">
          {/* Continue in App CTA */}
          <Link to="/for-you/mobile-banking" className="cta-button cta-app">
            Get the App
          </Link>

          {/* Animated Icon */}
          <div className="icon-container">
            <img
              src="/rotating-gif.gif"
              alt="TN CyberTech Bank"
              className="animated-icon"
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
          <img src="/bank-logo.png" alt="TN CyberTech Bank" className="header-logo-img" />
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
          <div className="menu-icon-container">
            <img src="/rotating-gif.gif" alt="TN CyberTech Bank" className="menu-icon" />
          </div>
          <nav className="menu-nav">
            <Link to="/" className="menu-link" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="menu-link" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/for-you" className="menu-link" onClick={() => setMenuOpen(false)}>For You</Link>
            <Link to="/for-business" className="menu-link" onClick={() => setMenuOpen(false)}>For Business</Link>
            <Link to="/diaspora" className="menu-link" onClick={() => setMenuOpen(false)}>Diaspora</Link>
            <Link to="/partners" className="menu-link" onClick={() => setMenuOpen(false)}>Partners</Link>
            <Link to="/contact" className="menu-link" onClick={() => setMenuOpen(false)}>Contact</Link>
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
            <Link to="/for-you/mobile-banking" className="cta-button cta-secondary">
              Get the App
            </Link>
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
