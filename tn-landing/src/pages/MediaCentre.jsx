import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/PageStyles.css'

function MediaCentre() {
  const testimonials = [
    {
      quote: 'Thanks for the wonderful effort and quick response and follow up from online team with great customer care services got my card guys keep it up.',
      author: 'Lizzie Cathrine Mpatila',
    },
    {
      quote: 'On efficiency I give you a 5 star keep up the good work TN CyberTech Bank.',
      author: 'Tapfumanei Mutusva',
    },
    {
      quote: 'Ndinotenda zvikuru nekubatsira kwamunotiita murambe makadaro keep on doing a good job.',
      author: 'Onias Zhuwankie',
    },
  ]

  const mediaSections = [
    { id: 'news', title: 'News', desc: 'Latest updates and news from TN CyberTech Bank' },
    { id: 'press', title: 'Press Releases', desc: 'Official press releases and announcements' },
    { id: 'promotions', title: 'Promotions', desc: 'Current offers and promotions' },
    { id: 'notices', title: 'Notices', desc: 'Important notices and updates' },
    { id: 'newsletters', title: 'Newsletters', desc: 'Subscribe to stay updated' },
  ]

  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Media Centre</h1>
          <p>News, Press Releases, Testimonials, Promotions, Notices, and Newsletters</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <span className="current">Media Centre</span>
        </div>
      </nav>

      {/* Media Sections Grid */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Stay Informed</span>
            <h2>Latest from TN CyberTech Bank</h2>
          </div>

          <div className="services-grid-3">
            {mediaSections.map((section) => (
              <div key={section.id} className="service-card" style={{ cursor: 'default' }}>
                <div className="service-card-icon">
                  {section.id === 'news' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1M19 20a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2v11a2 2 0 0 0 2 2zM3 6h10M3 10h10M3 14h5M3 18h5"/>
                    </svg>
                  )}
                  {section.id === 'press' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                  )}
                  {section.id === 'promotions' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  )}
                  {section.id === 'notices' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 16v-4M12 8h.01"/>
                    </svg>
                  )}
                  {section.id === 'newsletters' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  )}
                </div>
                <h3>{section.title}</h3>
                <p>{section.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="content-section light-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Customer Testimonials</span>
            <h2>What Our Customers Say</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((item, idx) => (
              <div key={idx} style={{
                padding: '2rem',
                background: '#fff',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '1.5rem',
                  fontSize: '3rem',
                  color: 'rgba(255, 222, 74, 0.3)',
                  fontFamily: 'Georgia, serif',
                  lineHeight: 1,
                }}>
                  "
                </div>
                <p style={{
                  color: '#4b5563',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem',
                  paddingTop: '1.5rem',
                  fontStyle: 'italic',
                }}>
                  {item.quote}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000',
                    fontWeight: '600',
                    fontSize: '0.875rem',
                  }}>
                    {item.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <span style={{ fontWeight: '600', color: '#111827' }}>{item.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSI Section */}
      <section className="content-section white-section">
        <div className="container">
          <div className="two-col-layout">
            <div>
              <span className="section-label">Corporate Social Investment</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#111827', marginBottom: '1rem' }}>
                Making a Difference
              </h2>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                TN CyberTech Bank is committed to making a positive impact in our communities. Through various CSI initiatives including tree planting days and community support programs, we strive to contribute to sustainable development and environmental conservation.
              </p>
              <Link to="/corporate-social-investment" className="cta-btn cta-btn-primary">
                Learn More About CSI
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                width: '200px',
                height: '200px',
                background: 'linear-gradient(135deg, rgb(174, 106, 6) 0%, rgb(255, 222, 74) 50%, rgb(174, 106, 6) 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 60px rgba(255, 222, 74, 0.3)'
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" style={{ width: '80px', height: '80px' }}>
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="content-section dark-section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Media Enquiries</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            For press enquiries, interview requests, or media information, please contact our communications team.
          </p>
          <a href="mailto:customerservice@tncybertechbank.co.zw" className="cta-btn cta-btn-primary">
            Contact Media Team
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MediaCentre
