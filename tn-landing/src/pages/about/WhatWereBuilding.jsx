import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'

function WhatWereBuilding() {
  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero" style={{ backgroundImage: "url('/banners/About-us-op.png')" }}>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>What We're Building</h1>
          <p>An Embedded Bank</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/about">About Us</Link>
          <span className="separator">/</span>
          <span className="current">What We're Building</span>
        </div>
      </nav>

      <section className="content-section white-section building-section">
        <div className="container">
          <Link to="/about" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to About
          </Link>
          <div className="centered-content dark-text">
            <span className="section-label">What We're Building</span>
            <h2>An Embedded Bank</h2>
            <p>
              We are building a digital financial services hub that connects people, businesses, and platforms. A bank that integrates into lifestyles, rather than interrupts. A bank that empowers rather than excludes. An embedded bank that is accessible wherever life happens and whenever.
            </p>
            <p>
              Through technology, partnerships, and secure digital channels, we bring banking to the point of need.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default WhatWereBuilding
