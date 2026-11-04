import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Treatment } from './pages/Treatment'
import { EMDR } from './pages/EMDR'
import { Faq } from './pages/Faq'
import { Contact } from './pages/Contact'

// Automatically scroll to the top of the page when navigating between routes
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If a hash exists (e.g. #contact or #treatment-areas), smoothly scroll to that element
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    // Otherwise scroll to top on page transition
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/emdr-therapy" element={<EMDR />} />
        <Route path="/emdr" element={<EMDR />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallback redirect to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
