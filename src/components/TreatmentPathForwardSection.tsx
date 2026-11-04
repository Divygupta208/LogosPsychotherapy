import React from 'react'
import { motion } from 'framer-motion'

interface TreatmentPathForwardSectionProps {
  imageSrc?: string
  ctaHref?: string
}

interface ReasonCard {
  title: string
  description: string
  icon: React.ReactNode
}

export const TreatmentPathForwardSection: React.FC<TreatmentPathForwardSectionProps> = ({
  imageSrc = '/Treatment 3.jpg.jpeg',
  ctaHref = '/contact',
}) => {
  const reasons: ReasonCard[] = [
    {
      title: 'Licensed and Certified',
      description:
        'Moussia Zaklikovsky is a Licensed Clinical Social Worker (LCSW) in New Jersey, Florida, and New York, and an EMDRIA Certified Therapist™.',
      icon: (
        <svg
          className="w-5 h-5 text-[#2f788c]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Evidence-Based, Not Formulaic',
      description:
        'Methods are chosen to fit you, and we review your goals together over time.',
      icon: (
        <svg
          className="w-5 h-5 text-[#2f788c]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
    {
      title: 'Individual Therapy',
      description:
        'One-on-one sessions built around your concerns, goals, and pace.',
      icon: (
        <svg
          className="w-5 h-5 text-[#2f788c]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: 'Non-Judgmental',
      description:
        'You can speak honestly at your own pace.',
      icon: (
        <svg
          className="w-5 h-5 text-[#2f788c]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
    {
      title: 'Flexible Access',
      description:
        'Virtual sessions in New Jersey and Florida for adults located in either state.',
      icon: (
        <svg
          className="w-5 h-5 text-[#2f788c]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      ),
    },
    {
      title: 'Transparent',
      description:
        'Logos Psychotherapy is a private-pay practice, and you can ask any questions during your consultation.',
      icon: (
        <svg
          className="w-5 h-5 text-[#2f788c]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      ),
    },
  ]

  return (
    <section
      className="relative w-full min-h-[580px] sm:min-h-[680px] treatment-fixed-bg py-20 sm:py-24 lg:py-28 px-6 sm:px-10 md:px-12 overflow-hidden flex items-center justify-center text-center"
      style={{
        backgroundImage: `url('${imageSrc}')`,
      }}
      aria-label="Why Choose Logos Psychotherapy"
    >
      {/* Soft translucent backdrop to ensure text readability over palm shadows */}
      <div
        className="absolute inset-0 bg-[#f5f3ee]/85 backdrop-blur-[1px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Centered Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center w-full"
        >
          {/* Section Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light text-slate-900 tracking-tight leading-[1.15] mb-8 sm:mb-10">
            <span>Why Choose </span>
            <span className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-slate-900 font-normal pl-1 align-baseline inline-block">
              Logos Psychotherapy
            </span>
          </h2>

          {/* 6 Small Cards Responsive Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 text-left">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-white/90 backdrop-blur-xs border border-slate-200/90 rounded-sm p-6 sm:p-7 flex flex-col justify-start items-start shadow-xs hover:shadow-md hover:border-[#2f788c]/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#2f788c]/10 flex items-center justify-center mb-4 flex-shrink-0">
                  {reason.icon}
                </div>
                <h3 className="text-base sm:text-[17px] font-semibold text-slate-900 tracking-tight leading-snug mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* Underlined CTA Link */}
          <a
            href={ctaHref}
            className="group inline-flex flex-col items-center cursor-pointer focus:outline-none"
            aria-label="Schedule a Consultation"
          >
            <span className="text-[#2f788c] group-hover:text-[#1d5766] text-xs sm:text-sm tracking-[0.22em] font-medium uppercase transition-colors duration-200">
              SCHEDULE A CONSULTATION
            </span>
            <span
              aria-hidden="true"
              className="w-28 sm:w-36 h-[1.5px] bg-[#2f788c] mt-2 group-hover:bg-[#1d5766] group-hover:w-44 transition-all duration-300"
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default TreatmentPathForwardSection
