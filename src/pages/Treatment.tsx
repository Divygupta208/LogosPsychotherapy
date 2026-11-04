import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { TreatmentHero } from '../components/TreatmentHero'
import { TreatmentIntroSection } from '../components/TreatmentIntroSection'
import { TreatmentAreasSection } from '../components/TreatmentAreasSection'
import { TreatmentPathForwardSection } from '../components/TreatmentPathForwardSection'
import { ContactCta } from '../components/ContactCta'
import { Footer } from '../components/Footer'

export const Treatment: React.FC = () => {
  // Set page title for branding and SEO
  useEffect(() => {
    document.title = 'Treatment Areas | Mental Health Counseling | LOGOS Psychotherapy'
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f3ee] text-slate-800 flex flex-col selection:bg-[#0e5c6e] selection:text-white">
      {/* Top Navigation */}
      <Navbar currentPath="/treatment" logoSrc="/logoImage.png" theme="light" />

      {/* Main Content */}
      <main className="flex-1">
        {/* Section 1: Hero with Santorini ocean view and cursive headline */}
        <TreatmentHero
          backgroundImage="/Treatment 1.jpg.jpeg"
          ctaHref="/contact"
        />

        {/* Section 2: Calm minds, Clear paths & Treatment 2 journal photo */}
        <TreatmentIntroSection
          imageSrc="/Treatment 2.jpg.jpeg"
          ctaHref="/contact"
        />

        {/* Section 3: Treatment Areas 2-tier navy card container (Trauma, Anxiety, Grief, Attachment) */}
        <TreatmentAreasSection />

        {/* Section 4: A Supportive Path Forward with fixed parallax palm shadow background */}
        <TreatmentPathForwardSection
          imageSrc="/Treatment 3.jpg.jpeg"
          ctaHref="/contact"
        />

        {/* Section 5: Reusable Consultation CTA Form */}
        <ContactCta />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}

export default Treatment
