import React, { useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { EmdrHero } from '../components/EmdrHero'
import { EmdrOnlineSection } from '../components/EmdrOnlineSection'
import { EmdrModalityAreasSection } from '../components/EmdrModalityAreasSection'
import { ContactCta } from '../components/ContactCta'
import { Footer } from '../components/Footer'

export const EMDR: React.FC = () => {
  // Set page title for branding and SEO
  useEffect(() => {
    document.title = 'EMDR Therapy Online | Trauma, Anxiety & Healing | LOGOS Psychotherapy'
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f3ee] text-slate-800 flex flex-col selection:bg-[#0e5c6e] selection:text-white">
      {/* Top Navigation Bar with active EMDR Therapy tab */}
      <Navbar currentPath="/emdr-therapy" logoSrc="/logoImage.png" theme="light" />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <EmdrHero
          backgroundImage="/EMDR 1.jpg.jpeg"
          ctaHref="/contact"
        />

        {/* Section 2: What Is EMDR Therapy & Benefits */}
        <EmdrOnlineSection
          imageSrc="/EMDR 2.jpg.jpeg"
          ctaHref="/contact"
        />

        {/* Section 3: EMDR Modality Focus Areas */}
        <EmdrModalityAreasSection />

        {/* Section 4: Take the Next Step CTA */}
        <ContactCta
          headlinePart1="Take the "
          headlinePart2="Next Step"
          subtitle="If you're wondering whether EMDR therapy may be right for you, a consultation is a good place to start. We can talk about what you're dealing with, answer your questions, and decide together what comes next."
          ctaText="Schedule a Consultation"
          ctaHref="https://calendly.com/logos-psychotherapy"
          footerNote={
            <span>
              Prefer to call or email? Reach Logos Psychotherapy at{' '}
              <a
                href="tel:6092254016"
                className="text-[#f5ebd7] underline hover:text-white transition-colors"
              >
                (609) 225-4016
              </a>{' '}
              or{' '}
              <a
                href="mailto:mzaklikovsky@logos-psychotherapy.com"
                className="text-[#f5ebd7] underline hover:text-white transition-colors"
              >
                mzaklikovsky@logos-psychotherapy.com
              </a>
              .
            </span>
          }
        />
      </main>

      {/* Section 7: Global Footer (Reusable) */}
      <Footer />
    </div>
  )
}

export default EMDR
