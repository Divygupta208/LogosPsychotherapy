import React from 'react'
import { motion } from 'framer-motion'

interface TreatmentHeroProps {
  backgroundImage?: string
  ctaHref?: string
}

export const TreatmentHero: React.FC<TreatmentHeroProps> = ({
  backgroundImage = '/Treatment 1.jpg.jpeg',
  ctaHref = '/contact',
}) => {
  return (
    <section
      className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex items-end bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
      aria-label="Mental Health Treatment Hero"
    >
      {/* Gentle gradient scrim to ensure text and navbar legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/30 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content Container positioned bottom-left */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 pb-10 sm:pb-12 lg:pb-16 pt-32 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="max-w-3xl flex flex-col items-start"
        >
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light text-white tracking-tight leading-[1.18] drop-shadow-md mb-5 sm:mb-6">
            Mental Health Treatment and{' '}
            <span className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-[#f5ebd7] font-normal block sm:inline pl-1">
              Therapy Services
            </span>{' '}
            in New Jersey, Florida and New York
          </h1>

          {/* Narrative Paragraph */}
          <p className="text-white/90 text-sm sm:text-base md:text-[1.0625rem] font-light leading-relaxed max-w-2xl mb-8 sm:mb-10 drop-shadow-sm">
            Logos Psychotherapy offers online mental health treatment for adults in New Jersey, Florida and New York. If anxiety, trauma, stress, or painful emotions have been hard to carry, therapy gives you a place to understand what is happening and learn ways to respond that fit your life. Treatment is personalized, collaborative, and paced with you.
          </p>

          {/* Underlined CTA link pointing to /contact */}
          <a
            href={ctaHref}
            className="group inline-flex items-center text-xs sm:text-sm tracking-[0.22em] uppercase font-medium text-[#f5ebd7] hover:text-white transition-all pb-1 border-b border-[#cca869] hover:border-white"
            aria-label="Schedule a Consultation"
          >
            <span>SCHEDULE A CONSULTATION</span>
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
              &rarr;
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default TreatmentHero
