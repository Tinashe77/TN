import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/PageStyles.css'

function FinancialReports() {
  return (
    <div className="page-container">
      <Header />

      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Financial Reports</h1>
          <p>(Maintain)</p>
        </div>
      </section>

      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/about">About Us</Link>
          <span className="separator">/</span>
          <span className="current">Financial Reports</span>
        </div>
      </nav>

      <section className="content-section white-section">
        <div className="container">
          <p>Home | About Us | Financial Reports (Maintain)</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FinancialReports
