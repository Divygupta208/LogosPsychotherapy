import React from 'react'
import { motion } from 'framer-motion'

interface TreatmentIntroSectionProps {
  imageSrc?: string
  ctaHref?: string
}

export const TreatmentIntroSection: React.FC<TreatmentIntroSectionProps> = ({
  imageSrc = '/Treatment 2.jpg.jpeg',
  ctaHref = '#contact',
}) => {
  return (
    <section
      className="relative w-full bg-[#f5f3ee] py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-12 text-slate-800"
      aria-label="Treatment Approach and Philosophy"
    >
      <div className="w-full max-w-[1040px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Bold Heading, Scaled Paragraphs & CTA Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Headline with cursive curve */}
            <div className="mb-6 sm:mb-7">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-light text-slate-900 tracking-tight leading-[1.15]">
                <span>Our Treatment </span>
                <span className="font-script text-4xl sm:text-5xl lg:text-[3.75rem] text-slate-800 font-normal pl-1 align-baseline inline-block">
                  Approach
                </span>
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-[14.5px] sm:text-[15px] md:text-[15.5px] leading-[1.75] text-slate-700 font-normal mb-8 sm:mb-10">
              <p>
                Psychotherapy treatment at Logos Psychotherapy starts with listening. In our first conversations, I want to understand what brought you in, what you&apos;ve already tried, and what you hope will change. From there, we build a plan around your goals instead of using a one-size-fits-all protocol.
              </p>
              <p>
                My work draws on several evidence-based therapies, including EMDR, attachment-based approaches, somatic approaches, and behavior therapy. Which ones we use depends on what you&apos;re facing and what feels workable for you.
              </p>
              <p>
                When trauma is part of the picture, we begin with safety and coping skills. Processing difficult memories comes later, once you feel prepared and at a pace you can manage.
              </p>
              <p>
                Along the way, we review your goals together and adjust as needed. The aim is not only symptom relief. It&apos;s about understanding the underlying causes of challenges, recognizing patterns from their beginnings, and developing healthier ways to respond that support lasting and sustainable change.
              </p>
            </div>

            {/* CTA Underlined Link */}
            <a
              href={ctaHref}
              className="group inline-flex items-center text-xs sm:text-sm tracking-[0.22em] uppercase font-semibold text-[#2f788c] hover:text-[#1e5a6a] pb-1 border-b border-[#2f788c] hover:border-[#1e5a6a] transition-all"
            >
              <span>SCHEDULE A CONSULTATION</span>
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                &rarr;
              </span>
            </a>
          </motion.div>

          {/* Right Column: Treatment 2 Journal & Botanical Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[390px] overflow-hidden rounded-sm shadow-md border border-slate-300/40 bg-white">
              <img
                src={imageSrc}
                alt="Therapy journal, golden pen, and dried botanicals — LOGOS Psychotherapy"
                className="w-full h-auto object-cover aspect-[4/5] hover:scale-[1.01] transition-transform duration-500 block"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TreatmentIntroSection
