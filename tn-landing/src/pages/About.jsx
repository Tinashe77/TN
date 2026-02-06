import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/PageStyles.css'
import './About.css'

function About() {
  const sections = [
    {
      id: 'our-belief',
      title: 'Our Belief',
      subtitle: 'The Future of Banking',
      link: '/about/our-belief',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
    },
    {
      id: 'our-history',
      title: 'Our History',
      subtitle: 'A Legacy of Innovation',
      link: '/about/our-history',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
    },
    {
      id: 'what-were-building',
      title: "What We're Building",
      subtitle: 'An Embedded Bank',
      link: '/about/what-were-building',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      ),
    },
    {
      id: 'our-vision',
      title: 'Our Vision',
      subtitle: 'Embedded Banking for Everyone',
      link: '/about/our-vision',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
    },
    {
      id: 'our-mission',
      title: 'Our Mission',
      subtitle: 'Innovative Banking Services',
      link: '/about/our-mission',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      ),
    },
    {
      id: 'our-values',
      title: 'Our Values',
      subtitle: 'Innovation, Dignity, Industry',
      link: '/about/our-values',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
    },
    {
      id: 'our-promise',
      title: 'Our Promise',
      subtitle: 'Building Trust Through Action',
      link: '/about/our-promise',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="about-page">
      <Header />

      {/* Hero Banner */}
      <section className="page-hero about-hero" style={{ backgroundImage: "url('/banners/About-us-op.jpg')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>About Us</h1>
          <p>The Future of Banking</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <span className="current">About Us</span>
        </div>
      </nav>

      {/* Section Hub */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <h2>Discover Who We Are</h2>
            <p style={{ color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Learn about our journey, our values, and our commitment to transforming banking in Zimbabwe.
            </p>
          </div>

          <div className="about-hub-grid">
            {sections.map((section) => (
              <Link to={section.link} key={section.id} className="about-hub-card">
                <div className="about-hub-icon">
                  {section.icon}
                </div>
                <h3>{section.title}</h3>
                <p>{section.subtitle}</p>
                <span className="about-hub-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </Link>
            ))}
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

      <Footer />
    </div>
  )
}

export default About
