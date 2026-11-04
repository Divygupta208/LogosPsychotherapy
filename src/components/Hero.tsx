import React from 'react'
import { motion } from 'framer-motion'

interface HeroProps {
  backgroundImage?: string
  headline?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  secondaryLinkText?: string
  secondaryLinkHref?: string
  credentialsText?: string
}

export const Hero: React.FC<HeroProps> = ({
  backgroundImage = '/homepagebg.jpg',
  headline = 'Psychotherapy for Trauma, Grief, and Related Stress',
  subtitle = 'Individual therapy with a licensed therapist who listens first and understands your unique experience. Online therapy sessions are available in New Jersey and Florida. Get a safe, supportive space to work through the experiences that have been difficult to carry alone.',
  ctaText = 'Schedule a Consultation',
  ctaHref = '/contact',
  secondaryLinkText = 'Learn about EMDR therapy',
  secondaryLinkHref = '/emdr-therapy',
  credentialsText = 'Licensed Clinical Social Worker (LCSW) · EMDRIA Certified Therapist™ · Verified by Psychology Today and Okayclarity.',
}) => {
  return (
    <section
      className="relative w-full h-screen min-h-[640px] max-h-[1080px] bg-cover bg-center flex flex-col justify-end pb-8 sm:pb-10 md:pb-12 lg:pb-14 px-6 sm:px-10 md:px-14 lg:px-20 overflow-hidden"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
      aria-label="Welcome to LOGOS Psychotherapy"
    >
      {/* Main Hero Content in Bottom-Left Corner */}
      <div className="relative z-10 w-full max-w-xl lg:max-w-2xl">
        {/* Main Headline Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-4 sm:mb-5"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-tight text-white leading-[1.15] drop-shadow-[0_2px_10px_rgba(10,35,45,0.6)]">
            {headline}
          </h1>
        </motion.div>

        {/* Subtitle / Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-white/95 text-xs sm:text-sm md:text-[0.9375rem] font-normal leading-relaxed max-w-[500px] lg:max-w-[560px] mb-7 sm:mb-8 drop-shadow-[0_1px_6px_rgba(10,35,45,0.5)]"
        >
          {subtitle}
        </motion.p>

        {/* Call to Action Group */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          className="flex flex-wrap items-center gap-6 sm:gap-8 mb-6"
        >
          {/* Button: Schedule a Consultation */}
          <a
            href={ctaHref}
            className="group inline-flex flex-col items-start cursor-pointer focus:outline-none"
            aria-label={ctaText}
          >
            <span className="text-[#f5ebd7] group-hover:text-white text-xs sm:text-sm tracking-[0.22em] font-medium uppercase transition-colors duration-300">
              {ctaText}
            </span>
            <span
              aria-hidden="true"
              className="w-full h-[1.5px] bg-[#c7ab72] mt-1.5 group-hover:bg-white group-hover:w-[104%] transition-all duration-300 origin-left"
            />
          </a>

          {/* Text link: Learn about EMDR therapy */}
          {secondaryLinkText && secondaryLinkHref && (
            <a
              href={secondaryLinkHref}
              className="group inline-flex items-center gap-1.5 text-white/90 hover:text-white text-xs sm:text-sm tracking-[0.16em] uppercase font-light transition-colors duration-200"
              aria-label={secondaryLinkText}
            >
              <span className="underline underline-offset-4 decoration-[#c7ab72]/70 group-hover:decoration-white">
                {secondaryLinkText}
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                &rarr;
              </span>
            </a>
          )}
        </motion.div>

        {/* Credentials / Trust line */}
        {credentialsText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="pt-4 border-t border-white/20 text-white/80 text-[0.75rem] sm:text-xs tracking-wide font-light leading-relaxed max-w-xl drop-shadow-[0_1px_4px_rgba(10,35,45,0.6)]"
          >
            {credentialsText}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Hero
