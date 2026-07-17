import { useEffect } from 'react'
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

const HOME_MERGED_PATHS = ['/', '/about', '/services', '/work', '/contact']

function App() {
  const location = useLocation()

  useEffect(() => {
    if (!HOME_MERGED_PATHS.includes(location.pathname)) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])

  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-content" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Home />} />
          <Route path="/work" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
