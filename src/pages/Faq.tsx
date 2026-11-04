import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { FaqMainSection } from '../components/FaqMainSection'
import { ContactCta } from '../components/ContactCta'
import { Footer } from '../components/Footer'

export const Faq: React.FC = () => {
  // Set page title for branding and SEO
  useEffect(() => {
    document.title = 'Frequently Asked Questions | Virtual Therapy | LOGOS Psychotherapy'
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f3ee] text-slate-800 flex flex-col selection:bg-[#0e5c6e] selection:text-white">
      {/* Top Navigation Bar with active FAQ tab (Dark Hero Theme) */}
      <Navbar currentPath="/faq" logoSrc="/logoImage.png" theme="dark" />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Full-bleed FAQ background image with centered Q&A Card Panel */}
        <FaqMainSection backgroundImage="/FAQ.jpg.jpeg" />

        {/* Customized Consultation CTA */}
        <ContactCta
          headlinePart1="Still have "
          headlinePart2="questions?"
          subtitle="Reaching out is a good first step. Share a few details through the contact form and we can talk through your options."
          ctaText="Schedule a Consultation"
          ctaHref="https://calendly.com/logos-psychotherapy"
        />
      </main>

      {/* Global Footer (Reusable) */}
      <Footer />
    </div>
  )
}

export default Faq
