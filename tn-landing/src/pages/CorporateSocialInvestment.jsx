import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/PageStyles.css'

function CorporateSocialInvestment() {
  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Corporate Social Investment</h1>
          <p>Add Tree planting Days - attached</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/about">About Us</Link>
          <span className="separator">/</span>
          <span className="current">Corporate Social Investment</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <p>Home | About Us | Corporate Social Investment Add Tree planting Days - attached</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CorporateSocialInvestment
