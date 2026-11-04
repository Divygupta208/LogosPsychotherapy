import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { ContactHeroSection } from '../components/ContactHeroSection'
import { Footer } from '../components/Footer'

export const Contact: React.FC = () => {
  // Set page title for branding and SEO
  useEffect(() => {
    document.title = 'Contact | Consultation Inquiry | LOGOS Psychotherapy'
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f3ee] text-slate-800 flex flex-col selection:bg-[#0e5c6e] selection:text-white">
      {/* Top Navigation Bar with active Contact tab (Dark Hero Theme) */}
      <Navbar currentPath="/contact" logoSrc="/logoImage.png" theme="dark" />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Full-bleed Contact Hero Section with Milos landscape, inquiry form, and zen stones */}
        <ContactHeroSection
          backgroundImage="/contact 1.jpg.jpeg"
          stonesImage="/contact 2.jpg.jpeg"
        />
      </main>

      {/* Global Footer (Reusable) */}
      <Footer />
    </div>
  )
}

export default Contact
