import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../components/PageStyles.css'
import '../About.css'
import './OurHistory.css'

function OurHistory() {
  const [activeYear, setActiveYear] = useState(null)

  const historyData = [
    {
      year: '2008',
      title: 'The Beginning',
      content: [
        'Until 2008, TN CyberTech Bank Limited was a registered Finance House known as Trust Finance Limited, part of the Trust Holdings Group. In 2008, the TN Financial Holdings Limited acquired a 75% stake in the Finance House and recapitalised it to prevent its imminent collapse. TN Financial Holdings Limited acquired the remaining 25% in 2009 and sought, and obtained, the conversion of the Finance House into a Commercial Bank, named TN Bank Limited.',
        "TN Bank Limited's channel strategy was based on delivering banking convenience through standalone banking branches, in-store banking branches, the TN Cash Card with online and offline capabilities, through EcoCash, and through salespersons who delivered cash withdrawals, picked up cash deposits, and delivered other banking services to customers in the comfort of their homes or offices. Thus, the bank was a pioneer in Zimbabwe in embracing technology as a suitable channel for delivering banking products and services.",
      ],
    },
    {
      year: '2011',
      title: 'Acquisition by Econet',
      content: [
        'In 2011 the bank launched Ecocash in partnership with Econet. In addition to being a trustee for the physical money against which Ecocash issued electronic money, TN Bank also held the EcoCash license. This was followed by the acquisition of a 20% stake in the Bank by Econet. In 2012, Econet eventually acquired 100% of TN Bank. The Bank was renamed Steward Bank Limited. The bank closed its in-store branches and discontinued the TN Cash Card. The number of stand-alone branches was reduced. The Bank rolled out several tech products.',
      ],
    },
    {
      year: '2024',
      title: 'Repurchase by TN',
      content: [
        'In 2024, Mr Tawanda Nyambirai acquired a controlling interest in the Bank. TN proceeded to distribute the shares to discretionary trusts established for the benefit of his family members, some of his Senior Executives, and an Employee Trust intended to promote good customer care and innovation.',
        "The Bank will transform into a tech-driven bank whose products and services are embedded in the everyday products and services people use. This entails integrating the bank's systems with the platforms of partners that provide everyday products and services people use. Thus, the bank changed its name from Steward Bank Limited to TN CyberTech Bank Limited.",
      ],
    },
  ]

  const handleYearClick = (year) => {
    setActiveYear(activeYear === year ? null : year)
  }

  const activeData = historyData.find((item) => item.year === activeYear)

  return (
    <div className="about-page">
      <Header />

      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Our History</h1>
          <p>A Legacy of Innovation</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/about">About Us</Link>
          <span className="separator">/</span>
          <span className="current">Our History</span>
        </div>
      </nav>

      <section className="content-section dark-section history-section">
        <div className="container">
          <Link to="/about" className="back-link light">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to About
          </Link>
          <div className="centered-content">
            <span className="section-label light">Our History</span>
            <h2>A Legacy of Innovation</h2>
            <p style={{ color: '#9ca3af', marginTop: '1rem' }}>Click on a year to explore our journey</p>
          </div>

          {/* Year Icons */}
          <div className="history-years-grid">
            {historyData.map((item) => (
              <button
                key={item.year}
                className={`history-year-btn ${activeYear === item.year ? 'active' : ''}`}
                onClick={() => handleYearClick(item.year)}
              >
                <div className="history-year-icon">
                  <span>{item.year}</span>
                </div>
                <p className="history-year-title">{item.title}</p>
              </button>
            ))}
          </div>

          {/* Expanded Content */}
          {activeData && (
            <div className="history-expanded">
              <div className="history-expanded-header">
                <div className="history-expanded-year">{activeData.year}</div>
                <h3>{activeData.title}</h3>
                <button className="history-close-btn" onClick={() => setActiveYear(null)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
              <div className="history-expanded-content">
                {activeData.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OurHistory
