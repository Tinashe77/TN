import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/PageStyles.css'
import './About.css'

function About() {
  return (
    <div className="about-page">
      <Header />

      {/* Hero Banner */}
      <section className="page-hero about-hero">
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

      {/* Our Belief Section - White Background */}
      <section className="content-section white-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <h2>About Us</h2>
         
          </div>
          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">Our Belief</span>
              <h2>The Future Of Banking Is Not A Place</h2>
              <p>
                Banking should not interrupt life. It should move with it. It should be present where people live, work, play, and travel —not behind walls, queues, or complexity. The future of banking is not a place. It is an experience. It is embedded. It is digital. It is trusted. It is everywhere. We are the future of banking.
              </p>
             
              <p className="highlight">We are the future of banking.</p>
            </div>
            <div className="story-image">
              <img src="/about-us-image.jpg" alt="TN CyberTech Bank" className="story-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Our History - Dark Section */}
      <section className="content-section dark-section history-section">
        <div className="container">
          <div className="centered-content">
            <span className="section-label light">Our History</span>
            <h2>A Legacy of Innovation</h2>
          </div>
          <div className="history-timeline">
            <div className="history-item">
              <div className="history-year">2008</div>
              <div className="history-content">
                <h3>The Beginning</h3>
                <p>
Until 2008, TN CyberTech Bank Limited was a registered Finance House known as Trust Finance Limited, part of the Trust Holdings Group.  In 2008, the TN Financial Holdings Limited acquired a 75% stake in the Finance House and recapitalised it to prevent its imminent collapse.  TN Financial Holdings Limited acquired the remaining 25% in 2009 and sought, and obtained, the conversion of the Finance House into a Commercial Bank, named TN Bank Limited.
                </p>
                <p>TN Bank Limited’s channel strategy was based on delivering banking convenience through standalone banking branches, in-store banking branches, the TN Cash Card with online and offline capabilities, through EcoCash, and through salespersons who delivered cash withdrawals, picked up cash deposits, and delivered other banking services to customers in the comfort of their homes or offices.  Thus, the bank was a pioneer in Zimbabwe in embracing technology as a suitable channel for delivering banking products and services.
</p>
              </div>
            </div>
            <div className="history-item">
              <div className="history-year">2011</div>
              <div className="history-content">
                <h3>Acquisition by Econet</h3>
                <p>
In 2011 the bank launched Ecocash in partnership with Econet, In addition to being a trustee for the physical money against which Ecocash issued electronic money, TN Bank also held the EcoCash license. This was followed by the acquisition of a 20% stake in the Bank by Econet. In 2012, Econet eventually acquired 100% of TN Bank. The Bank was renamed Steward Bank Limited.  The bank closed its in-store branches and discontinued the TN Cash Card.  The number of stand-alone branches was reduced.  The Bank rolled out several tech products.                  </p>
              </div>
            </div>
            <div className="history-item">
              <div className="history-year">2024</div>
              <div className="history-content">
                <h3>Repurchase by TN</h3>
                <p>
In 2024, Mr Tawanda Nyambirai acquired a controlling interest in the Bank.  TN proceeded to distribute the shares to discretionary trusts established for the benefit of his family members, some of his Senior Executives, and an Employee Trust intended to promote good customer care and innovation.  
                </p>
                <p>The Bank will transform into a tech-driven bank whose products and services are embedded in the everyday products and services people use.  This entails integrating the bank’s systems with the platforms of partners that provide everyday products and services people use.  Thus, the bank changed its name from Steward Bank Limited to TN CyberTech Bank Limited.        
</p>
              </div>
            </div>
            {/* <div className="history-item">
              <div className="history-year">2024</div>
              <div className="history-content">
                <h3>A New Chapter</h3>
                <p>
                  In 2024, Mr Tawanda Nyambirai acquired a controlling interest in the Bank, which he distributed to discretionary trusts established for the benefit of his family members, some of his Senior Executives, and an Employee Trust intended to promote good customer care and innovation. The controlling shareholder resolved to transform the Bank into a tech-driven bank whose products and services are embedded in the everyday products and services people use. This entails integrating the bank's systems with the platforms of partners that provide everyday products and services people use. Thus, the bank changed its name from Steward Bank Limited to TN CyberTech Bank Limited.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* What We're Building - White Section */}
      <section className="content-section white-section building-section">
        <div className="container">
          <div className="centered-content dark-text">
            <span className="section-label">What We're Building</span>
            <h2>An Embedded Bank</h2>
            <p>
              We are building a digital financial services hub that connects people, businesses,
              and platforms. A bank that integrates into lifestyles, rather than interrupts.
              A bank that empowers rather than excludes. An embedded bank that is accessible wherever
              life happens and whenever.
            </p>
            <p>
              Through technology, partnerships, and secure digital channels, we bring banking
              to the point of need.
            </p>
          </div>

          <div className="features-grid dark-cards">
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

      {/* Vision & Mission - Dark Section */}
      <section className="content-section dark-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card vision-card">
              <div className="vm-accent"></div>
              <span className="vm-label">Our Vision</span>
              <h3>Embedded Banking for Everyone</h3>
              <p>
                To embed banking seamlessly - through trusted partnerships and digital technology -
                into the products and services people everywhere use every day.
              </p>
            </div>
            <div className="vm-card mission-card">
              <div className="vm-accent"></div>
              <span className="vm-label">Our Mission</span>
              <h3>Innovative Banking Services</h3>
              <p>
                To design, operate, and securely integrate innovative banking services into partner
                platforms - enabling effortless financial access through trusted technology channels.
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
            <span className="section-label">Our Values</span>
            <h2>Guided by Three Enduring Values</h2>
            <p className="section-subtitle">Our culture is represented by the acronym <strong>IDI</strong></p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-letter-badge">I</div>
              <h3>Innovation</h3>
              <p>
                We imagine boldly and build for the future, and we think independently
                and create authentically.
              </p>
            </div>

            <div className="value-card">
              <div className="value-letter-badge">D</div>
              <h3>Dignity</h3>
              <p>
                We treat every person with respect and fairness, and we operate with
                purpose, integrity, and belief beyond profit.
              </p>
            </div>

            <div className="value-card">
              <div className="value-letter-badge">I</div>
              <h3>Industry</h3>
              <p>
                We apply discipline, excellence, and accountability in all we do, and we
                serve with grace, listen deeply, and learn continuously.
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
                <p>We will never forget that banking and technology exist to serve people - not the other way around</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
