import React from 'react'
import { SEO } from '../components/SEO'
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
      <SEO
        title="Online Psychotherapy in New Jersey, Florida and New York | Logos Psychotherapy"
        description="Psychotherapy in Miami, FL and online in Florida, New Jersey and New York. Individual therapy with an EMDRIA certified therapist for trauma, grief, and related stress."
        canonicalUrl="/"
      />

      {/* Top Navigation */}
      <Navbar currentPath="/" logoSrc="/logoImage.png" theme="light" />

      {/* Main Content */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero
          backgroundImage="/homepagebg.jpg"
          headline="Online EMDR therapy for Florida adults, healing from PTSD, childhood abuse, and relational trauma."
          subtitle="When life feels uncertain, overwhelming, or detached from meaning, therapy can become a space to reflect, gain clarity, and move forward with intention."
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
