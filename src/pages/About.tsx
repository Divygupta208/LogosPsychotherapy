import React from 'react'
import { SEO } from '../components/SEO'
import { Navbar } from '../components/Navbar'
import { AboutHero } from '../components/AboutHero'
import { AboutMeSection } from '../components/AboutMeSection'
import { AboutCredentialsSection } from '../components/AboutCredentialsSection'
import { WhereISeeClientsSection } from '../components/WhereISeeClientsSection'
import { ContactCta } from '../components/ContactCta'
import { Footer } from '../components/Footer'

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f5f3ee] text-slate-800 flex flex-col selection:bg-[#0e5c6e] selection:text-white">
      <SEO
        title="Psychotherapist in New Jersey, Florida & New York | Logos Psychotherapy"
        description="Meet Moussia Zaklikovsky, LCSW, an EMDRIA Certified Therapist and licensed psychotherapist in New Jersey, Florida and New York, offering online therapy."
        canonicalUrl="/about"
        ogType="profile"
        ogImage="https://logos-psychotherapy.com/About%202.jpg.jpeg"
      />

      {/* Top Navigation Bar with active About indicator (Dark Hero Theme) */}
      <Navbar currentPath="/about" logoSrc="/logoImage.png" theme="dark" />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1: Hero with workspace coffee image & cursive name */}
        <AboutHero
          backgroundImage="/About 1.jpg.jpeg"
          ctaHref="/contact"
        />

        {/* Section 2: About Me narrative bio, portrait photo & core values bar */}
        <AboutMeSection
          imageSrc="/About 2.jpg.jpeg"
        />

        {/* Section 3: Credentials and Experience */}
        <AboutCredentialsSection />

        {/* Section 4: Where and How I See Clients */}
        <WhereISeeClientsSection />

        {/* Section 5: Bottom CTA Customized for About Page */}
        <ContactCta
          headlinePart1="Take the "
          headlinePart2="Next Step"
          subtitle="If you're considering therapy, you're welcome to reach out. We can talk through what you're dealing with and what your options might be."
          ctaText="Schedule a consultation"
          ctaHref="https://calendly.com/logos-psychotherapy"
        />
      </main>

      {/* Section 6: Global Footer (Reusable) */}
      <Footer />
    </div>
  )
}

export default About
