import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function OurPromise() {
  const promises = [
    'We will build secure, reliable, and scalable banking solutions',
    'We will partner openly and responsibly',
    'We will earn trust through action, transparency, and performance',
    'We will never forget that banking and technology exist to serve people - not the other way around',
  ]

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero" style={{ backgroundImage: "url('/banners/About-us-op.png')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Our Promise</h1>
          <p>Building Trust Through Action</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/about">About Us</Link>
          <span className="separator">/</span>
          <span className="current">Our Promise</span>
        </div>
      </nav>

      <section className="content-section dark-section promise-section">
        <div className="container">
          <Link to="/about" className="back-link light">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to About
          </Link>
          <div className="promise-content">
            <span className="section-label light">Our Promise</span>
            <h2>Building Trust Through Action</h2>
            <div className="promise-grid">
              {promises.map((promise, index) => (
                <div key={index} className="promise-item">
                  <div className="promise-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <p>{promise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OurPromise
