import React from 'react'
import { motion } from 'framer-motion'

interface EmdrIntegratingSectionProps {
  imageSrc?: string
  ctaHref?: string
}

export const EmdrIntegratingSection: React.FC<EmdrIntegratingSectionProps> = ({
  imageSrc = '/EMDR 3.jpg.jpeg',
  ctaHref = '#contact',
}) => {
  return (
    <section
      className="relative w-full min-h-[580px] sm:min-h-[680px] lg:min-h-[780px] xl:min-h-[820px] treatment-fixed-bg py-32 sm:py-40 lg:py-48 px-6 sm:px-10 md:px-12 overflow-hidden flex items-center justify-center text-center"
      style={{
        backgroundImage: `url('${imageSrc}')`,
      }}
      aria-label="Integrating the Lived Experience"
    >


      {/* Centered Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Section Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-medium text-slate-900 tracking-tight leading-[1.15] mb-6 sm:mb-8">
            <span>Integrating the </span>
            <span className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] text-slate-900 font-normal pl-2 align-baseline">
              Lived Experience
            </span>
          </h2>

          {/* Narrative Paragraph 1 */}
          <p className="text-[15.5px] sm:text-[16.5px] md:text-[17.5px] leading-[1.8] text-slate-800 font-normal max-w-3xl mb-5">
            LOGOS Psychotherapy provides online EMDR therapy that prioritizes the human connection, focusing on how
            relational patterns and life themes that define your journey. Therapy is not rushed or forced; instead, it
            unfolds with care, respect, and collaboration. EMDR becomes not only a method for symptom relief, but a pathway
            toward deeper understanding, meaning, and resilience.
          </p>

          {/* Narrative Paragraph 2 */}
          <p className="text-[15.5px] sm:text-[16.5px] md:text-[17.5px] leading-[1.8] text-slate-800 font-normal max-w-3xl mb-7 sm:mb-8">
            Healing happens not by erasing the past, but by integrating it. Through online EMDR therapy, clients are
            supported in releasing what no longer serves them and moving forward with greater clarity, calm, and a renewed
            sense of possibility.
          </p>

          {/* Prompt */}
          <p className="text-[16px] sm:text-[17px] font-medium text-slate-800 mb-6">
            Ready to start your journey?
          </p>

          {/* Underlined CTA Link */}
          <a
            href={ctaHref}
            className="group inline-flex items-center text-xs sm:text-sm md:text-[14.5px] tracking-[0.24em] uppercase font-bold text-slate-900 hover:text-[#0e5c6e] pb-1.5 border-b-2 border-slate-700/80 hover:border-[#0e5c6e] transition-all"
          >
            <span>SCHEDULE A CONSULTATION</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default EmdrIntegratingSection
