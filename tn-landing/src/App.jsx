import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Partners from './pages/Partners'
import PartnerDetail from './pages/PartnerDetail'
import Contact from './pages/Contact'
import Diaspora from './pages/Diaspora'

// For You pages
import ForYou from './pages/foryou/ForYou'
import MobileBanking from './pages/foryou/MobileBanking'
import PersonalAccounts from './pages/foryou/PersonalAccounts'
import Cards from './pages/foryou/Cards'
import MicroLoans from './pages/foryou/MicroLoans'

// For Business pages
import ForBusiness from './pages/forbusiness/ForBusiness'
import BusinessAccounts from './pages/forbusiness/BusinessAccounts'
import InternationalBanking from './pages/forbusiness/InternationalBanking'

function App() {
  return (
    <Router>
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/partners/:partnerId" element={<PartnerDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/diaspora" element={<Diaspora />} />

        {/* For You section */}
        <Route path="/for-you" element={<ForYou />} />
        <Route path="/for-you/mobile-banking" element={<MobileBanking />} />
        <Route path="/for-you/accounts" element={<PersonalAccounts />} />
        <Route path="/for-you/cards" element={<Cards />} />
        <Route path="/for-you/loans" element={<MicroLoans />} />

        {/* For Business section */}
        <Route path="/for-business" element={<ForBusiness />} />
        <Route path="/for-business/accounts" element={<BusinessAccounts />} />
        <Route path="/for-business/international" element={<InternationalBanking />} />
      </Routes>
    </Router>
  )
}

export default App
