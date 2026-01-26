import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Partners from './pages/Partners'
import PartnerDetail from './pages/PartnerDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/partners/:partnerId" element={<PartnerDetail />} />
      </Routes>
    </Router>
  )
}

export default App
