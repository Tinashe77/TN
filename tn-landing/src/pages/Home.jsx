import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CardShowcase from '../components/CardShowcase'
import './Home.css'

const navigation = [
  ['Home', '/'], ['About Us', '/about'], ['For You', '/for-you'],
  ['For Business', '/for-business'], ['Diaspora', '/diaspora'],
  ['Our Partners', '/partners'], ['Contact', '/contact'],
]

function Home() {
  const menu = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  function openMenu() { menu.current.showModal(); setMenuOpen(true) }
  function closeMenu() { menu.current.close(); setMenuOpen(false) }

  return (
    <div className="desktop-container desktop-minimal home-landing">
      <header className="header">
        <Link to="/" className="logo-container" aria-label="TN CyberTech Bank home">
          <img src="/bank-logo.png" alt="TN CyberTech Bank" className="header-logo-img" />
        </Link>
        <button className="menu-button" onClick={openMenu} aria-haspopup="dialog" aria-expanded={menuOpen} aria-controls="home-navigation">
          <span className="menu-text">Menu</span>
          <span className="hamburger" aria-hidden="true"><span /><span /><span /></span>
        </button>
      </header>

      <dialog ref={menu} id="home-navigation" className="home-navigation" aria-label="Website navigation" onClose={() => setMenuOpen(false)}>
        <button className="home-menu-close" onClick={closeMenu} autoFocus>Close <span aria-hidden="true">×</span></button>
        <div className="menu-content">
          <div className="menu-icon-container"><img src="/rotating-gif.gif" alt="TN CyberTech Bank" className="menu-icon" /></div>
          <nav className="menu-nav" aria-label="Main navigation">
            {navigation.map(([label, path]) => <Link key={path} to={path} className="menu-link" onClick={closeMenu}>{label}</Link>)}
          </nav>
        </div>
      </dialog>

      <main className="home-main">
        <section className="home-welcome" aria-label="Welcome to TN CyberTech Bank">
          <div className="home-brand-mark">
            <img src="/rotating-gif.gif" alt="TN CyberTech Bank rotating logo" className="home-rotating-logo" />
            <p>THE FUTURE OF BANKING</p>
          </div>
          <div className="home-quick-links">
            <Link to="/for-you/mobile-banking" className="desktop-cta-button desktop-cta-app">Get the App <span aria-hidden="true">↗</span></Link>
            <a href="https://banking.tncybertechbank.co.zw/login" target="_blank" rel="noopener noreferrer" className="desktop-cta-button desktop-cta-browser">Online Banking Login <span aria-hidden="true">↗</span></a>
            <Link to="/about" className="home-explore-link">Continue in Browser <span aria-hidden="true">→</span></Link>
          </div>
        </section>
        <CardShowcase suspended={menuOpen} />
      </main>

      <footer className="desktop-footer home-footer">
        <div className="desktop-footer-links">
          <Link to="/privacy-statement">Privacy Statement</Link>
          <Link to="/terms-of-use">Terms of Use</Link>
          <a href="/TNCB-Business-Conditions-October-2026.pdf" target="_blank" rel="noopener noreferrer">Business Conditions</a>
          <Link to="/customer-service">Customer Service</Link>
        </div>
        <p className="desktop-copyright">&copy; 2026 TN CyberTech Bank Limited. A Registered Commercial Bank | Member of the Deposit Protection Corporation</p>
      </footer>
    </div>
  )
}

export default Home
