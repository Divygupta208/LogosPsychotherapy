import React from 'react'
import { motion } from 'framer-motion'

interface OurApproachSectionProps {
  imageSrc?: string
  ctaHref?: string
}

export const OurApproachSection: React.FC<OurApproachSectionProps> = ({
  imageSrc = '/Home 3.jpeg',
  ctaHref = '#contact',
}) => {
  return (
    <section
      id="our-approach"
      className="relative w-full bg-[#f5f3ee] text-slate-800 pt-10 sm:pt-14 pb-0 overflow-hidden"
      aria-label="Our Approach: Evidence-Based and Personal"
    >
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Main Heading with cursive font curve on 'Approach' */}
          <div className="flex flex-col items-center justify-center mb-6 sm:mb-8 text-center">
            <h2 className="font-display tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light text-slate-900 leading-tight">
              <span>Our </span>
              <span className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-slate-800 font-normal pl-1 inline-block align-baseline">
                Approach
              </span>
            </h2>
            <span className="text-xl sm:text-2xl md:text-[1.65rem] font-light text-[#2f788c] tracking-wide mt-2">
              Evidence-Based and Personal
            </span>
          </div>

          {/* Narrative Content */}
          <div className="space-y-5 text-slate-700 text-sm sm:text-[0.9375rem] md:text-base leading-relaxed font-normal max-w-2xl sm:max-w-3xl mx-auto mb-10 sm:mb-12">
            <p>
              Good therapy needs both skill and a real working relationship. At Logos Psychotherapy, that means:
            </p>

            <ul className="space-y-2.5 list-disc list-inside pl-1 text-slate-700">
              <li>Evidence-informed methods chosen to fit your needs, not applied the same way to everyone</li>
              <li>A non-judgmental space where you can speak honestly at your own pace</li>
              <li>Attention to meaning and values, not only symptom relief, so the changes you make feel like yours</li>
              <li>Collaboration, with clear goals that we review together over time</li>
            </ul>

            <p className="pt-2">
              Therapy isn&apos;t just about addressing problems. It&apos;s also a chance to understand your patterns, build resilience, and respond to life&apos;s challenges in ways that support your well-being.
            </p>
          </div>

          {/* Call to Action Link */}
          <div className="flex justify-center mb-14 sm:mb-18">
            <a
              href={ctaHref}
              className="group inline-flex flex-col items-center cursor-pointer focus:outline-none"
              aria-label="Schedule a Consultation with LOGOS Psychotherapy"
            >
              <span className="text-[#2f788c] group-hover:text-[#1d5766] text-xs sm:text-sm tracking-[0.22em] font-medium uppercase transition-colors duration-200">
                SCHEDULE A CONSULTATION
              </span>
              <span
                aria-hidden="true"
                className="w-28 sm:w-36 h-[1.5px] bg-[#2f788c] mt-2 group-hover:bg-[#1d5766] group-hover:w-44 transition-all duration-300"
              />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Dedicated visual image banner below text without ANY text overlap */}
      {imageSrc && (
        <div className="w-full h-56 sm:h-72 md:h-80 lg:h-96 overflow-hidden relative">
          <img
            src={imageSrc}
            alt="Serene wooden pier stretching over calm water"
            className="w-full h-full object-cover object-bottom"
            loading="lazy"
          />
          {/* Subtle top dissolving gradient into #f5f3ee */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#f5f3ee] to-transparent pointer-events-none" />
        </div>
      )}
    </section>
  )
}

export default OurApproachSection
