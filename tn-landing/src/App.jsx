import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

function RouteTracker() {
  const location = useLocation()
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      })
    }
  }, [location])
  return null
}
import Home from './pages/Home'
import About from './pages/About'
import OurBelief from './pages/about/OurBelief'
import OurHistory from './pages/about/OurHistory'
import WhatWereBuilding from './pages/about/WhatWereBuilding'
import OurVision from './pages/about/OurVision'
import OurMission from './pages/about/OurMission'
import OurValues from './pages/about/OurValues'
import OurPromise from './pages/about/OurPromise'
import Partners from './pages/Partners'
import PartnerDetail from './pages/PartnerDetail'
import VisaCardsGallery from './pages/VisaCardsGallery'
import ZimswitchCardsGallery from './pages/ZimswitchCardsGallery'
import Calculators from './pages/Calculators'
import FinancialStatements from './pages/FinancialStatements'
import Contact from './pages/Contact'
import Diaspora from './pages/Diaspora'
import DiasporaAccounts from './pages/diaspora/DiasporaAccounts'
import DiasporaBenefits from './pages/diaspora/DiasporaBenefits'
import DiasporaRemittances from './pages/diaspora/DiasporaRemittances'
import DiasporaPartners from './pages/diaspora/DiasporaPartners'
import MaintenancePage from './pages/MaintenancePage'

// For You pages
import ForYou from './pages/foryou/ForYou'
import MobileBanking from './pages/foryou/MobileBanking'
import MobileApp from './pages/foryou/MobileApp'
import MobileAppFeatures from './pages/foryou/MobileAppFeatures'
import MobileAppRegister from './pages/foryou/MobileAppRegister'
import OnlineBanking from './pages/foryou/OnlineBanking'
import OnlineBankingIndividuals from './pages/foryou/OnlineBankingIndividuals'
import OnlineBankingBusinesses from './pages/foryou/OnlineBankingBusinesses'
import USSDBanking from './pages/foryou/USSDBanking'
import PersonalAccounts from './pages/foryou/PersonalAccounts'
import ISaveAccount from './pages/foryou/ISaveAccount'
import CurrentAccount from './pages/foryou/CurrentAccount'
import Cards from './pages/foryou/Cards'
import ZimswitchCard from './pages/foryou/ZimswitchCard'
import VisaCards from './pages/foryou/VisaCards'
import VisaPrepaid from './pages/foryou/VisaPrepaid'
import VisaDebit from './pages/foryou/VisaDebit'
import VisaDebitInfinite from './pages/foryou/VisaDebitInfinite'
import VisaCreditClassic from './pages/foryou/VisaCreditClassic'
import VisaCreditInfinite from './pages/foryou/VisaCreditInfinite'
import MicroLoans from './pages/foryou/MicroLoans'
import LoanAbout from './pages/foryou/LoanAbout'
import LoanHowItWorks from './pages/foryou/LoanHowItWorks'
import LoanBank from './pages/foryou/LoanBank'
import LoanEcoCash from './pages/foryou/LoanEcoCash'
import CardsTerms from './pages/foryou/CardsTerms'
import ATMServices from './pages/foryou/ATMServices'
import ATMLocations from './pages/foryou/ATMLocations'
import ATMGuides from './pages/foryou/ATMGuides'

// For Business pages
import ForBusiness from './pages/forbusiness/ForBusiness'
import BusinessAccounts from './pages/forbusiness/BusinessAccounts'
import SoleTraderAccount from './pages/forbusiness/SoleTraderAccount'
import BusinessSMEAccount from './pages/forbusiness/BusinessSMEAccount'
import CorporateAccount from './pages/forbusiness/CorporateAccount'
import NonProfitAccount from './pages/forbusiness/NonProfitAccount'
import InternationalBanking from './pages/forbusiness/InternationalBanking'
import ExchangeControl from './pages/forbusiness/ExchangeControl'
import ExportImport from './pages/forbusiness/ExportImport'
import InternationalPayments from './pages/forbusiness/InternationalPayments'
import TradeFinance from './pages/forbusiness/TradeFinance'
import MerchantServices from './pages/forbusiness/MerchantServices'
import MerchantCorporateCustomers from './pages/forbusiness/MerchantCorporateCustomers'
import MerchantNonCustomers from './pages/forbusiness/MerchantNonCustomers'
import BusinessLoans from './pages/forbusiness/BusinessLoans'
import WorkingCapitalLoans from './pages/forbusiness/WorkingCapitalLoans'
import CommercialMortgages from './pages/forbusiness/CommercialMortgages'
import AssetFinance from './pages/forbusiness/AssetFinance'
import BankGuarantees from './pages/forbusiness/BankGuarantees'
import CorporateBanking from './pages/forbusiness/CorporateBanking'
import HealthcareFinancing from './pages/forbusiness/HealthcareFinancing'
import RenewableEnergyFinancing from './pages/forbusiness/RenewableEnergyFinancing'
import ExportersFinancing from './pages/forbusiness/ExportersFinancing'
import AdvisoryServices from './pages/forbusiness/AdvisoryServices'
import CIBProductOfferings from './pages/forbusiness/CIBProductOfferings'
import VisaCorporateCard from './pages/forbusiness/VisaCorporateCard'
import VisaCardSecurity from './pages/forbusiness/VisaCardSecurity'
import VisaCardFlexibility from './pages/forbusiness/VisaCardFlexibility'
import VisaCardManagement from './pages/forbusiness/VisaCardManagement'
import VisaCardReporting from './pages/forbusiness/VisaCardReporting'
import VisaCardApply from './pages/forbusiness/VisaCardApply'
import AgentBanking from './pages/forbusiness/AgentBanking'
import AgentAbout from './pages/forbusiness/AgentAbout'
import AgentServices from './pages/forbusiness/AgentServices'
import AgentSoleTrader from './pages/forbusiness/AgentSoleTrader'
import AgentCorporate from './pages/forbusiness/AgentCorporate'
import AgentLocator from './pages/forbusiness/AgentLocator'
import ZimswitchCorporateCard from './pages/forbusiness/ZimswitchCorporateCard'

import CustomerService from './pages/CustomerService'
import MediaCentre from './pages/MediaCentre'
import BoardOfDirectors from './pages/BoardOfDirectors'
import ManagementTeam from './pages/ManagementTeam'
import CorporateSocialInvestment from './pages/CorporateSocialInvestment'
import FinancialReports from './pages/FinancialReports'
import PrivacyStatement from './pages/PrivacyStatement'
import TermsOfUse from './pages/TermsOfUse'

// Set to true to show maintenance page, false to show normal site
const MAINTENANCE_MODE = false

function App() {
  // Show maintenance page for all routes when maintenance mode is enabled
  if (MAINTENANCE_MODE) {
    return (
      <Router>
        <RouteTracker />
        <Routes>
          <Route path="*" element={<MaintenancePage />} />
        </Routes>
      </Router>
    )
  }

  return (
    <Router>
      <RouteTracker />
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/our-belief" element={<OurBelief />} />
        <Route path="/about/our-history" element={<OurHistory />} />
        <Route path="/about/what-were-building" element={<WhatWereBuilding />} />
        <Route path="/about/our-vision" element={<OurVision />} />
        <Route path="/about/our-mission" element={<OurMission />} />
        <Route path="/about/our-values" element={<OurValues />} />
        <Route path="/about/our-promise" element={<OurPromise />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/partners/visa-cards" element={<VisaCardsGallery />} />
        <Route path="/partners/zimswitch-cards" element={<ZimswitchCardsGallery />} />
        <Route path="/partners/:partnerId" element={<PartnerDetail />} />
        <Route path="/financial-statements" element={<FinancialStatements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/diaspora" element={<Diaspora />} />
        <Route path="/diaspora/accounts" element={<DiasporaAccounts />} />
        <Route path="/diaspora/benefits" element={<DiasporaBenefits />} />
        <Route path="/diaspora/remittances" element={<DiasporaRemittances />} />
        <Route path="/diaspora/partners" element={<DiasporaPartners />} />

        {/* For You section */}
        <Route path="/for-you" element={<ForYou />} />
        <Route path="/for-you/mobile-banking" element={<MobileBanking />} />
        <Route path="/for-you/mobile-banking/app" element={<MobileApp />} />
        <Route path="/for-you/mobile-banking/app/features" element={<MobileAppFeatures />} />
        <Route path="/for-you/mobile-banking/app/register" element={<MobileAppRegister />} />
        <Route path="/for-you/mobile-banking/online" element={<OnlineBanking />} />
        <Route path="/for-you/mobile-banking/online/individuals" element={<OnlineBankingIndividuals />} />
        <Route path="/for-you/mobile-banking/online/businesses" element={<OnlineBankingBusinesses />} />
        <Route path="/for-you/mobile-banking/ussd" element={<USSDBanking />} />
        <Route path="/for-you/accounts" element={<PersonalAccounts />} />
        <Route path="/for-you/accounts/isave" element={<ISaveAccount />} />
        <Route path="/for-you/accounts/current" element={<CurrentAccount />} />
        <Route path="/for-you/cards" element={<Cards />} />
        <Route path="/for-you/cards/zimswitch" element={<ZimswitchCard />} />
        <Route path="/for-you/cards/visa" element={<VisaCards />} />
        <Route path="/for-you/cards/visa/prepaid" element={<VisaPrepaid />} />
        <Route path="/for-you/cards/visa/debit" element={<VisaDebit />} />
        <Route path="/for-you/cards/visa/debit-infinite" element={<VisaDebitInfinite />} />
        <Route path="/for-you/cards/visa/credit-classic" element={<VisaCreditClassic />} />
        <Route path="/for-you/cards/visa/credit-infinite" element={<VisaCreditInfinite />} />
        <Route path="/for-you/cards/terms" element={<CardsTerms />} />
        <Route path="/for-you/loans" element={<MicroLoans />} />
        <Route path="/for-you/loans/about" element={<LoanAbout />} />
        <Route path="/for-you/loans/how-it-works" element={<LoanHowItWorks />} />
        <Route path="/for-you/loans/bank" element={<LoanBank />} />
        <Route path="/for-you/loans/ecocash" element={<LoanEcoCash />} />
        <Route path="/for-you/atm" element={<ATMServices />} />
        <Route path="/for-you/atm/locations" element={<ATMLocations />} />
        <Route path="/for-you/atm/guides" element={<ATMGuides />} />

        {/* For Business section */}
        <Route path="/for-business" element={<ForBusiness />} />
        <Route path="/for-business/accounts" element={<BusinessAccounts />} />
        <Route path="/for-business/accounts/sole-trader" element={<SoleTraderAccount />} />
        <Route path="/for-business/accounts/sme" element={<BusinessSMEAccount />} />
        <Route path="/for-business/accounts/corporate" element={<CorporateAccount />} />
        <Route path="/for-business/accounts/nonprofit" element={<NonProfitAccount />} />
        <Route path="/for-business/international" element={<InternationalBanking />} />
        <Route path="/for-business/international/exchange-control" element={<ExchangeControl />} />
        <Route path="/for-business/international/export-import" element={<ExportImport />} />
        <Route path="/for-business/international/payments" element={<InternationalPayments />} />
        <Route path="/for-business/international/trade-finance" element={<TradeFinance />} />
        <Route path="/for-business/merchant" element={<MerchantServices />} />
        <Route path="/for-business/merchant/corporate-customers" element={<MerchantCorporateCustomers />} />
        <Route path="/for-business/merchant/non-customers" element={<MerchantNonCustomers />} />
        <Route path="/for-business/loans" element={<BusinessLoans />} />
        <Route path="/for-business/loans/working-capital" element={<WorkingCapitalLoans />} />
        <Route path="/for-business/loans/commercial-mortgages" element={<CommercialMortgages />} />
        <Route path="/for-business/loans/asset-finance" element={<AssetFinance />} />
        <Route path="/for-business/loans/bank-guarantees" element={<BankGuarantees />} />
        <Route path="/for-business/corporate" element={<CorporateBanking />} />
        <Route path="/for-business/corporate/healthcare" element={<HealthcareFinancing />} />
        <Route path="/for-business/corporate/renewable-energy" element={<RenewableEnergyFinancing />} />
        <Route path="/for-business/corporate/exporters" element={<ExportersFinancing />} />
        <Route path="/for-business/corporate/advisory" element={<AdvisoryServices />} />
        <Route path="/for-business/corporate/products" element={<CIBProductOfferings />} />
        <Route path="/for-business/visa-corporate-card" element={<VisaCorporateCard />} />
        <Route path="/for-business/visa-corporate-card/security" element={<VisaCardSecurity />} />
        <Route path="/for-business/visa-corporate-card/flexibility" element={<VisaCardFlexibility />} />
        <Route path="/for-business/visa-corporate-card/management" element={<VisaCardManagement />} />
        <Route path="/for-business/visa-corporate-card/reporting" element={<VisaCardReporting />} />
        <Route path="/for-business/visa-corporate-card/apply" element={<VisaCardApply />} />
        <Route path="/for-business/agents" element={<AgentBanking />} />
        <Route path="/for-business/agents/about" element={<AgentAbout />} />
        <Route path="/for-business/agents/services" element={<AgentServices />} />
        <Route path="/for-business/agents/sole-trader" element={<AgentSoleTrader />} />
        <Route path="/for-business/agents/corporate" element={<AgentCorporate />} />
        <Route path="/for-business/agents/locator" element={<AgentLocator />} />
        <Route path="/for-business/zimswitch-corporate-card" element={<ZimswitchCorporateCard />} />

        {/* Support and Media */}
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/media-centre" element={<MediaCentre />} />
        <Route path="/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="/management-team" element={<ManagementTeam />} />
        <Route path="/corporate-social-investment" element={<CorporateSocialInvestment />} />
        <Route path="/financial-reports" element={<FinancialReports />} />

        {/* Legal pages */}
        <Route path="/privacy-statement" element={<PrivacyStatement />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />

        {/* Catch-all route - redirects unknown paths to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
