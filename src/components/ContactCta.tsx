import React from 'react'
import { motion } from 'framer-motion'

interface ContactCtaProps {
  headlinePart1?: string
  headlinePart2?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  footerNote?: React.ReactNode
}

export const ContactCta: React.FC<ContactCtaProps> = ({
  headlinePart1 = 'Start with a ',
  headlinePart2 = 'Conversation',
  subtitle = "If you're considering therapy, reaching out is a good first step. Share a few details through the form.",
  ctaText = 'Schedule a Consultation',
  ctaHref = 'https://calendly.com/logos-psychotherapy',
  footerNote,
}) => {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#24211f] text-white py-20 sm:py-24 md:py-28 px-6 sm:px-10 md:px-14 lg:px-20 text-center"
      aria-label={headlinePart1 + (headlinePart2 || '')}
    >
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Main Headline Group */}
          <div className="mb-5 sm:mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light text-white tracking-tight leading-[1.15]">
              <span>{headlinePart1}</span>
              {headlinePart2 && (
                <span className="font-script text-4xl sm:text-5xl md:text-6xl text-white font-normal block sm:inline pl-1">
                  {headlinePart2}
                </span>
              )}
            </h2>
          </div>

          {/* Subtitle / Paragraph */}
          <p className="text-slate-300/90 text-sm sm:text-base md:text-[1.0625rem] font-light leading-relaxed max-w-xl mx-auto mb-9 sm:mb-11">
            {subtitle}
          </p>

          {/* Call to Action Button */}
          <div>
            <a
              href={ctaHref}
              {...(ctaHref.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="group inline-flex flex-col items-center cursor-pointer focus:outline-none"
              aria-label={ctaText}
            >
              <span className="text-[#f5ebd7] group-hover:text-white text-xs sm:text-sm tracking-[0.24em] font-medium uppercase transition-colors duration-300">
                {ctaText}
              </span>
              <span
                aria-hidden="true"
                className="w-32 sm:w-40 h-[1.5px] bg-[#c7ab72] mt-2 group-hover:bg-white group-hover:w-48 transition-all duration-300"
              />
            </a>
          </div>

          {/* Optional Footer Note (e.g. Phone & Email) */}
          {footerNote && (
            <div className="mt-8 text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-lg mx-auto">
              {footerNote}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCta
