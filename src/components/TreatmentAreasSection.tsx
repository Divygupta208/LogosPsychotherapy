import React from 'react'
import { motion } from 'framer-motion'

interface TreatmentArea {
  id: string
  title: string
  icon: React.ReactNode
  description: string
}

export const TreatmentAreasSection: React.FC = () => {
  const areas: TreatmentArea[] = [
    {
      id: 'trauma',
      title: 'Trauma and PTSD Treatment',
      icon: (
        <svg className="w-5 h-5 text-sky-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Circular neuro-reprocessing / recovery motif */}
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.8 1.04 6.43 2.73" />
          <path d="M21 3v5h-5" />
          <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
        </svg>
      ),
      description:
        'Support for people living with the effects of overwhelming or frightening experiences, including distressing memories, avoidance, and feeling constantly on guard. Treatment focuses on safety and stability first, then on processing what happened.',
    },
    {
      id: 'anxiety-depression',
      title: 'Anxiety and Depression Treatment',
      icon: (
        <svg className="w-5 h-5 text-sky-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Calming mental waves / serenity tree leaf */}
          <path d="M12 2C8.5 2 6 4.5 6 8c0 4 6 11 6 11s6-7 6-11c0-3.5-2.5-6-6-6z" />
          <path d="M12 6v6" />
          <path d="M9.5 9.5l5 0" />
        </svg>
      ),
      description:
        'Therapy for constant worry, racing thoughts, low mood, fatigue, and loss of interest. We work on understanding what\'s driving these experiences and build practical skills to ease them.',
    },
    {
      id: 'grief-loss',
      title: 'Grief and Loss',
      icon: (
        <svg className="w-5 h-5 text-sky-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Gentle compassionate cloud / teardrop */}
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <path d="M12 19v3" />
        </svg>
      ),
      description:
        'Space to process loss without pressure to move on quickly. Grief can bring sadness, numbness, or confusion, and it often doesn\'t follow a clear timeline.',
    },
    {
      id: 'attachment-relationships',
      title: 'Attachment Work and Relationships',
      icon: (
        <svg className="w-5 h-5 text-sky-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round">
          {/* Interlocking relational connection nodes */}
          <circle cx="8" cy="12" r="4" />
          <circle cx="16" cy="12" r="4" />
          <path d="M12 9v6" strokeWidth="1.4" opacity="0.7" />
        </svg>
      ),
      description:
        'Early relationships often shape how we connect with others today. If you notice repeating patterns, such as pulling away when things get close, fearing being left, or finding it hard to trust, therapy can help you understand where they come from. Together we can practice new ways of relating, whether the focus is a current relationship, past ones, or the relationship you have with yourself.',
    },
  ]

  return (
    <section
      id="treatment-areas"
      className="relative w-full bg-[#f5f3ee] py-14 sm:py-18 md:py-20 px-6 sm:px-10 md:px-12 text-slate-800 scroll-mt-24"
      aria-label="Therapy Services We Offer"
    >
      <div className="w-full max-w-[1040px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full overflow-hidden shadow-lg border border-slate-300/30"
        >
          {/* Top Header Banner: Therapy Services We Offer */}
          <div className="bg-[#345870] py-7 sm:py-9 px-6 sm:px-10 text-white text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-[2.65rem] font-light text-white tracking-tight leading-tight">
              <span>Therapy Services </span>
              <span className="font-script text-4xl sm:text-5xl md:text-[3.25rem] text-[#f5ebd7] font-normal pl-1 align-baseline inline-block">
                We Offer
              </span>
            </h2>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light mt-3 max-w-2xl">
              Personalized, evidence-based therapy tailored to support your healing, clarity, and personal growth.
            </p>
          </div>

          {/* Lower Body (Deep Dark Navy with 2x2 Grid of 4 Cards) - Bold Headings & Scaled Text */}
          <div className="bg-[#10273a] p-6 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {areas.map((area) => (
                <div
                  key={area.id}
                  className="group border border-[#365975] p-6 sm:p-7 md:p-8 flex flex-col justify-start hover:bg-white/[0.04] hover:border-sky-300/50 transition-all duration-200"
                >
                  {/* Card Header: Icon + Bold Title */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#274861] flex items-center justify-center flex-shrink-0 text-sky-200 shadow-inner group-hover:bg-[#2e5470] transition-colors">
                      {area.icon}
                    </div>
                    <h3 className="text-2xl sm:text-[1.7rem] font-bold text-white tracking-wide">
                      {area.title}
                    </h3>
                  </div>

                  {/* Card Description - Scaled up by one unit */}
                  <p className="text-slate-200/90 text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.75] font-normal">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TreatmentAreasSection
