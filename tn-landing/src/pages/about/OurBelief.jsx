import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function OurBelief() {
  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero" style={{ backgroundImage: "url('/banners/About-us-op.jpg')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Our Belief</h1>
          <p>The Future of Banking</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/about">About Us</Link>
          <span className="separator">/</span>
          <span className="current">Our Belief</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <Link to="/about" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to About
          </Link>
          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">Our Belief</span>
              <h2>The Future Of Banking</h2>
              <p>
                Banking should not interrupt life. It should move with it. It should be present where people live, work, play, and travel — not behind walls, queues, or complexity.
              </p>
              <p>
                The future of banking is not a place. It is an experience. It is embedded. It is digital. It is trusted. It is everywhere.
              </p>
              <p className="highlight">We are the future of banking.</p>
            </div>
            <div className="story-image">
              <img src="/about-us-image.jpg" alt="TN CyberTech Bank" className="story-img" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OurBelief
