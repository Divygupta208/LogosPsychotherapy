import React from 'react'
import { motion } from 'framer-motion'

interface EmdrHeroProps {
  backgroundImage?: string
  ctaHref?: string
}

export const EmdrHero: React.FC<EmdrHeroProps> = ({
  backgroundImage = '/EMDR 1.jpg.jpeg',
  ctaHref = '/contact',
}) => {
  return (
    <section
      className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-end overflow-hidden"
      aria-label="EMDR Therapy Hero"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover pointer-events-none transform scale-[1.2] sm:scale-[1.25] lg:scale-[1.3] origin-[12%_30%] transition-transform duration-700"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundPosition: '12% 30%',
        }}
        aria-hidden="true"
      />

      {/* Gentle gradient scrim to ensure text legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30 pointer-events-none"
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
            EMDR Therapy for{' '}
            <span className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-[#f5ebd7] font-normal block sm:inline pl-1">
              Trauma, PTSD, and Anxiety
            </span>
          </h1>

          {/* Narrative Paragraph */}
          <p className="text-white/90 text-sm sm:text-base md:text-[1.0625rem] font-light leading-relaxed max-w-2xl mb-8 sm:mb-10 drop-shadow-sm">
            Eye Movement Desensitization and Reprocessing (EMDR) is a structured therapy that helps people process distressing memories so they feel less overwhelming. At Logos Psychotherapy, I offer virtual EMDR therapy to adults in New Jersey and Florida.
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

export default EmdrHero
