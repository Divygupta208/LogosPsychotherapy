import React from 'react'
import { motion } from 'framer-motion'

interface EmdrOnlineSectionProps {
  imageSrc?: string
  ctaHref?: string
}

export const EmdrOnlineSection: React.FC<EmdrOnlineSectionProps> = ({
  imageSrc = '/EMDR 2.jpg.jpeg',
  ctaHref = '/contact',
}) => {
  const benefits = [
    'Focuses on how a memory feels now, not only on talking about what happened',
    'Does not require you to describe every detail',
    'Follows clear phases with steady preparation',
    'May reduce the distress tied to specific memories',
    'Can help shift unhelpful beliefs, such as "I\'m not safe" or "It was my fault"',
  ]

  return (
    <section
      className="relative w-full bg-[#f5f3ee] py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-12 text-slate-800"
      aria-label="What Is EMDR Therapy"
    >
      <div className="w-full max-w-[1040px] mx-auto">
        {/* Top Landscape Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full overflow-hidden shadow-md border border-slate-300/40 mb-10 sm:mb-12"
        >
          <img
            src={imageSrc}
            alt="Potted citrus tree overlooking the ocean — LOGOS Psychotherapy Online EMDR"
            className="w-full h-[240px] sm:h-[300px] md:h-[360px] object-cover object-center block"
            loading="lazy"
          />
        </motion.div>

        {/* Narrative Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="flex flex-col items-start max-w-4xl"
        >
          {/* Section Headline */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-light text-slate-900 tracking-tight leading-[1.15]">
              <span>What Is </span>
              <span className="font-script text-4xl sm:text-5xl lg:text-[3.75rem] text-slate-800 font-normal pl-1 align-baseline inline-block">
                EMDR Therapy?
              </span>
            </h2>
          </div>

          {/* Narrative Paragraphs */}
          <div className="space-y-5 text-[15px] sm:text-[15.5px] md:text-[16px] leading-[1.8] text-slate-700 font-normal mb-10 sm:mb-12">
            <p>
              In EMDR therapy, you briefly focus on a difficult memory while following guided bilateral stimulation. This is often side-to-side eye movements, but it can also be alternating taps or sounds.
            </p>
            <p>
              Some memories stay upsetting long after an event is over. They can appear as intrusive images, sudden emotional reactions, or physical tension. EMDR is designed to help the brain process these memories so they carry less emotional charge.
            </p>
            <p>
              You do not have to relive the past in detail. You stay awake and in control, and we can pause at any time.
            </p>
          </div>

          {/* Benefits of EMDR Treatment Box */}
          <div className="w-full bg-white/80 border border-slate-300/80 rounded-sm p-6 sm:p-8 md:p-9 shadow-xs mb-10 sm:mb-12 text-left">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight mb-5">
              Benefits of EMDR Treatment
            </h3>
            <ul className="space-y-3.5 text-slate-700 text-sm sm:text-[15px] md:text-[15.5px] leading-relaxed">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#2f788c] mt-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Link */}
          <a
            href={ctaHref}
            className="group inline-flex items-center text-xs sm:text-sm tracking-[0.22em] uppercase font-semibold text-[#2f788c] hover:text-[#1e5a6a] pb-1 border-b border-[#2f788c] hover:border-[#1e5a6a] transition-all"
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

export default EmdrOnlineSection
