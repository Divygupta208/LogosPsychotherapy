import React from 'react'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { AboutSection } from '../components/AboutSection'
import { EmdrSection } from '../components/EmdrSection'
import { HowTherapyWorksSection } from '../components/HowTherapyWorksSection'
import { OurApproachSection } from '../components/OurApproachSection'
import { ContactCta } from '../components/ContactCta'
import { Footer } from '../components/Footer'

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f5f3ee] text-slate-800 flex flex-col selection:bg-[#0e5c6e] selection:text-white">
      {/* Top Navigation */}
      <Navbar currentPath="/" logoSrc="/logoImage.png" theme="light" />

      {/* Main Content */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero
          backgroundImage="/homepagebg.jpg"
          headline="Psychotherapy for Trauma, Grief, and Related Stress"
          subtitle="Individual therapy with a licensed therapist who listens first and understands your unique experience. Online therapy sessions are available in New Jersey and Florida. Get a safe, supportive space to work through the experiences that have been difficult to carry alone."
          ctaText="Schedule a Consultation"
          ctaHref="/contact"
          secondaryLinkText="Learn about EMDR therapy"
          secondaryLinkHref="/emdr-therapy"
          credentialsText="Licensed Clinical Social Worker (LCSW) · EMDRIA Certified Therapist™ · Verified by Psychology Today and Okayclarity."
        />

        {/* Section 2: About & Online Counseling */}
        <AboutSection imageSrc="/Home 11.jpeg" ctaHref="#contact" />

        {/* Section 3: EMDR Therapy & Therapeutic Modalities */}
        <EmdrSection imageSrc="/HomeEMDR.jpeg" ctaHref="/emdr-therapy" />

        {/* Section 4: How Therapy Works */}
        <HowTherapyWorksSection />

        {/* Section 5: Our Approach: Evidence-Based and Personal */}
        <OurApproachSection imageSrc="/Home 3.jpeg" ctaHref="#contact" />

        {/* Section 5: Bottom CTA & Consultation Form */}
        <ContactCta />

        {/* Placeholder anchor targets for navigation */}
        <section id="treatment" className="sr-only">Treatment section anchor</section>
        <section id="faq" className="sr-only">FAQ section anchor</section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}

export default Home
