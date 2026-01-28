import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/PageStyles.css'

function BoardOfDirectors() {
  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Board of Directors</h1>
          <p>New Board Profiles attached</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/about">About Us</Link>
          <span className="separator">/</span>
          <span className="current">Board of Directors</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <p>Home | About Us | TN CyberTech Bank | Board of Directors (New Board Profiles attached)</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BoardOfDirectors
