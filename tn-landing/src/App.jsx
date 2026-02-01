import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Partners from './pages/Partners'
import PartnerDetail from './pages/PartnerDetail'
import Contact from './pages/Contact'
import Diaspora from './pages/Diaspora'
import MaintenancePage from './pages/MaintenancePage'

// For You pages
import ForYou from './pages/foryou/ForYou'
import MobileBanking from './pages/foryou/MobileBanking'
import PersonalAccounts from './pages/foryou/PersonalAccounts'
import Cards from './pages/foryou/Cards'
import MicroLoans from './pages/foryou/MicroLoans'
import CardsTerms from './pages/foryou/CardsTerms'

// For Business pages
import ForBusiness from './pages/forbusiness/ForBusiness'
import BusinessAccounts from './pages/forbusiness/BusinessAccounts'
import InternationalBanking from './pages/forbusiness/InternationalBanking'
import MerchantServices from './pages/forbusiness/MerchantServices'
import BusinessLoans from './pages/forbusiness/BusinessLoans'
import CorporateBanking from './pages/forbusiness/CorporateBanking'
import VisaCorporateCard from './pages/forbusiness/VisaCorporateCard'
import AgentBanking from './pages/forbusiness/AgentBanking'

import CustomerService from './pages/CustomerService'
import MediaCentre from './pages/MediaCentre'
import BoardOfDirectors from './pages/BoardOfDirectors'
import CorporateSocialInvestment from './pages/CorporateSocialInvestment'
import FinancialReports from './pages/FinancialReports'
import PrivacyStatement from './pages/PrivacyStatement'
import TermsOfUse from './pages/TermsOfUse'

// Set to true to show maintenance page, false to show normal site
const MAINTENANCE_MODE = true

function App() {
  // Show maintenance page for all routes when maintenance mode is enabled
  if (MAINTENANCE_MODE) {
    return (
      <Router>
        <Routes>
          <Route path="*" element={<MaintenancePage />} />
        </Routes>
      </Router>
    )
  }

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
        <Route path="/for-you/cards/terms" element={<CardsTerms />} />

        {/* For Business section */}
        <Route path="/for-business" element={<ForBusiness />} />
        <Route path="/for-business/accounts" element={<BusinessAccounts />} />
        <Route path="/for-business/international" element={<InternationalBanking />} />
        <Route path="/for-business/merchant" element={<MerchantServices />} />
        <Route path="/for-business/loans" element={<BusinessLoans />} />
        <Route path="/for-business/corporate" element={<CorporateBanking />} />
        <Route path="/for-business/visa-corporate-card" element={<VisaCorporateCard />} />
        <Route path="/for-business/agents" element={<AgentBanking />} />

        {/* Support and Media */}
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/media-centre" element={<MediaCentre />} />
        <Route path="/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="/corporate-social-investment" element={<CorporateSocialInvestment />} />
        <Route path="/financial-reports" element={<FinancialReports />} />

        {/* Legal pages */}
        <Route path="/privacy-statement" element={<PrivacyStatement />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
    </Router>
  )
}

export default App
