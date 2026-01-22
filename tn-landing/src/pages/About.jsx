import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <div className="about-page">
      {/* Header */}
      <header className="about-header">
        <Link to="/" className="header-logo">
          <img src="/icon.png" alt="TN CyberTech Bank" />
          <div className="header-logo-text">
            <span className="logo-name">TN CyberTech</span>
            <span className="logo-sub">Bank Limited</span>
          </div>
        </Link>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link active">About</Link>
          <a href="#" className="nav-link">Services</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
      </header>

      {/* Hero Banner */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Us</h1>
          <p>The Future of Banking</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="breadcrumb-bar">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <span className="current">About Us</span>
        </div>
      </div>

      {/* Our Story Section - White Background */}
      <section className="content-section white-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">Our Story</span>
              <h2>We Believe Banking Should Move With Life</h2>
              <p>
                Banking should not interrupt life. It should move with it. It should be present
                where people live, work, play, and travel — not behind walls, queues, or complexity.
              </p>
              <p>
                The future of banking is not a place. It is an experience. It is embedded. It is
                digital. It is trusted. It is everywhere.
              </p>
              <p className="highlight">We are the future of banking.</p>
            </div>
            <div className="story-image">
              <img src="/LADY.jpg" alt="TN CyberTech Bank" className="story-img" />
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building - Dark Section */}
      <section className="content-section dark-section">
        <div className="container">
          <div className="centered-content">
            <span className="section-label light">What We're Building</span>
            <h2>A Digital Financial Services Hub</h2>
            <p>
              We are building a digital financial services hub that connects people, businesses,
              and platforms. A bank that integrates into lifestyles, rather than interrupts.
              A bank that empowers rather than excludes. A bank that is accessible wherever
              life happens and whenever.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Secure</h3>
              <p>Built on robust security frameworks to protect your financial data</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3>Accessible</h3>
              <p>Banking wherever life happens, whenever you need it</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Partnered</h3>
              <p>Open partnerships and responsible collaborations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - White Section */}
      <section className="content-section white-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card vision-card">
              <div className="vm-accent"></div>
              <span className="vm-label">Our Vision</span>
              <h3>Embedded Banking for Everyone</h3>
              <p>
                To embed banking seamlessly — through trusted partnerships and digital technology —
                into the products and services people everywhere use every day.
              </p>
            </div>
            <div className="vm-card mission-card">
              <div className="vm-accent"></div>
              <span className="vm-label">Our Mission</span>
              <h3>Innovative Banking Services</h3>
              <p>
                To design, operate, and securely integrate innovative banking services into partner
                platforms — enabling effortless financial access through trusted technology channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break Section */}
      <section className="image-break-section">
        <div className="image-break-overlay"></div>
        <div className="image-break-content">
          <h2>Banking at the Point of Need</h2>
          <p>Through technology, partnerships, and secure digital channels</p>
        </div>
      </section>

      {/* Our Values - White Section */}
      <section className="content-section white-section values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Culture</span>
            <h2>Guided by Three Enduring Values</h2>
            <p className="section-subtitle">Our culture is represented by the acronym <strong>IDI</strong></p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-letter-badge">I</div>
              <h3>Innovation</h3>
              <p>
                We imagine boldly and build for the future. We think independently
                and create authentically.
              </p>
            </div>

            <div className="value-card">
              <div className="value-letter-badge">D</div>
              <h3>Dignity</h3>
              <p>
                We treat every person with respect and fairness. We operate with
                purpose, integrity, and belief beyond profit.
              </p>
            </div>

            <div className="value-card">
              <div className="value-letter-badge">I</div>
              <h3>Industry</h3>
              <p>
                We apply discipline, excellence, and accountability in all we do.
                We serve with grace and learn continuously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise - Dark Section */}
      <section className="content-section dark-section promise-section">
        <div className="container">
          <div className="promise-content">
            <span className="section-label light">Our Promise</span>
            <h2>Building Trust Through Action</h2>
            <div className="promise-grid">
              <div className="promise-item">
                <div className="promise-check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p>We will build secure, reliable, and scalable banking solutions</p>
              </div>
              <div className="promise-item">
                <div className="promise-check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p>We will partner openly and responsibly</p>
              </div>
              <div className="promise-item">
                <div className="promise-check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p>We will earn trust through action, transparency, and performance</p>
              </div>
              <div className="promise-item">
                <div className="promise-check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p>We will never forget that banking exists to serve people</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/icon.png" alt="TN CyberTech Bank" />
              <span>TN CyberTech Bank Limited</span>
            </div>
            <p className="footer-legal">
              &copy; 2026 TN CyberTech Bank Limited. A Registered Commercial Bank | Member of the Deposit Protection Corporation
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About
