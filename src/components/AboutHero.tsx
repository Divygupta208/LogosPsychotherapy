import React from 'react'
import { motion } from 'framer-motion'

interface AboutHeroProps {
  backgroundImage?: string
  ctaHref?: string
}

export const AboutHero: React.FC<AboutHeroProps> = ({
  backgroundImage = '/About 1.jpg.jpeg',
  ctaHref = '/contact',
}) => {
  return (
    <section
      className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] flex items-end bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
      aria-label="About Hero"
    >
      {/* Gentle gradient scrim to ensure text and navbar legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85 pointer-events-none"
        aria-hidden="true"
      />


      {/* Content Container shifted towards bottom-left */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 pb-10 sm:pb-12 lg:pb-14 pt-32 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="max-w-3xl flex flex-col items-start"
        >
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light text-white tracking-tight leading-[1.18] drop-shadow-md mb-5 sm:mb-6">
            Meet{' '}
            <span className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-[#f5ebd7] font-normal block sm:inline pl-1">
              Moussia Zaklikovsky
            </span>
            , Licensed Psychotherapist
          </h1>

          {/* Narrative Paragraphs */}
          <div className="space-y-4 text-white/90 text-sm sm:text-base md:text-[1.0625rem] font-light leading-relaxed max-w-2xl mb-8 sm:mb-10 drop-shadow-sm">
            <p>
              I&apos;m Moussia Zaklikovsky, a Licensed Clinical Social Worker and the psychotherapist behind Logos Psychotherapy. I&apos;m licensed in New Jersey, Florida, and New York. I work with people dealing with trauma, anxiety, depression, and painful relationship patterns. I also see people who feel stuck and aren&apos;t sure why.
            </p>
            <p>
              If you&apos;re looking for a therapist, you probably want to know who you&apos;d be talking to and how they work. This page covers my background, my approach, and what working together can look like.
            </p>
          </div>

          {/* Underlined CTA link */}
          <a
            href={ctaHref}
            className="group inline-flex items-center text-xs sm:text-sm tracking-[0.22em] uppercase font-medium text-[#f5ebd7] hover:text-white transition-all pb-1 border-b border-[#cca869] hover:border-white"
            aria-label="Schedule a consultation"
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

export default AboutHero
