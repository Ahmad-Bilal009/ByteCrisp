import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Services from './pages/Services'
import Work from './pages/Work'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()

  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-content" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
