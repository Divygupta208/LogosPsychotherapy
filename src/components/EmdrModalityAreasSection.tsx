import React from 'react'
import { motion } from 'framer-motion'

interface ModalityArea {
  id: string
  title: string
  icon: React.ReactNode
  description: string
}

export const EmdrModalityAreasSection: React.FC = () => {
  const modalityAreas: ModalityArea[] = [
    {
      id: 'trauma-ptsd',
      title: 'EMDR for Trauma and PTSD',
      icon: (
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.0"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.8 1.04 6.43 2.73" />
          <path d="M21 3v5h-5" />
          <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
        </svg>
      ),
      description:
        'EMDR trauma therapy is the most researched use of this approach. Trauma can come from a single event, such as an accident or assault, or from experiences that happened over time. It can affect sleep, mood, relationships, and how safe your body feels.',
    },
    {
      id: 'childhood-trauma',
      title: 'EMDR for Childhood Trauma',
      icon: (
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.0"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22v-9" />
          <path d="M9 13a3 3 0 0 1 6 0" />
          <path d="M12 4a5 5 0 0 0-5 5c0 2 1 3.5 3 4.5" />
          <path d="M12 4a5 5 0 0 1 5 5c0 2-1 3.5-3 4.5" />
        </svg>
      ),
      description:
        'Adults often seek EMDR for childhood trauma when early experiences still shape how they feel or relate to others. We build safety and coping skills first, and begin processing only when you are ready.',
    },
    {
      id: 'panic-attacks',
      title: 'EMDR for Panic Attacks',
      icon: (
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.0"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      description:
        'Panic attacks can be tied to past distressing experiences, though not always. EMDR may be appropriate when panic is linked to specific memories or events. Research is more limited than for PTSD, so we would discuss what is likely to help in your situation.',
    },
    {
      id: 'grief',
      title: 'EMDR for Grief',
      icon: (
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.0"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <path d="M12 19v3" />
        </svg>
      ),
      description:
        'Grief can include painful, stuck memories, such as the circumstances of a death. EMDR may help you process those memories so you can remember the person with less distress. It does not aim to make you "move on."',
    },
    {
      id: 'anxiety-depression',
      title: 'EMDR for Anxiety and Depression',
      icon: (
        <svg
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.0"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2C8.5 2 6 4.5 6 8c0 4 6 11 6 11s6-7 6-11c0-3.5-2.5-6-6-6z" />
          <path d="M12 6v6" />
          <path d="M9.5 9.5l5 0" />
        </svg>
      ),
      description:
        'Anxiety and depression often connect to earlier experiences, even when the link is not obvious. EMDR for anxiety may help when worry, fear, or physical tension is tied to specific memories or beliefs. EMDR for depression may be considered when low mood is connected to painful experiences, such as loss or ongoing criticism.',
    },
  ]

  return (
    <section
      className="relative w-full bg-[#f5f3ee] py-14 sm:py-18 md:py-20 px-6 sm:px-10 md:px-12 text-slate-800"
      aria-label="EMDR Treatment Focus Areas"
    >
      <div className="w-full max-w-[1040px] mx-auto">
        {/* Top Slate-Teal Header Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="bg-[#4a7086] py-6 sm:py-7 px-6 sm:px-10 text-white rounded-none sm:rounded-sm shadow-sm mb-12 sm:mb-14"
        >
          <p className="text-white/95 text-sm sm:text-[15px] md:text-[15.5px] leading-relaxed font-normal">
            EMDR therapy is tailored to meet your unique needs and goals. Through online EMDR therapy, we can address a
            wide range of concerns, supporting you in resolving past distress and navigating present challenges with
            greater resilience and confidence.
          </p>
        </motion.div>

        {/* 2-Column Grid of Modality Items - Identical to original UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {modalityAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: 'easeOut' }}
              className="flex items-start gap-4 sm:gap-5"
            >
              {/* Circular Dark Icon Badge */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1c2c38] flex items-center justify-center flex-shrink-0 text-white shadow-sm mt-0.5">
                {area.icon}
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-wide mb-2.5">
                  {area.title}
                </h3>
                <p className="text-[14.5px] sm:text-[15px] md:text-[15.5px] leading-[1.75] text-slate-700 font-normal">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="mt-12 sm:mt-14 pt-8 border-t border-slate-300/70 text-slate-700 text-[14.5px] sm:text-[15px] md:text-[15.5px] leading-[1.75] font-normal">
          <p>
            My work also draws on attachment-based, somatic, and behavioral approaches, depending on your needs. You don&apos;t need a diagnosis to begin.
          </p>
        </div>
      </div>
    </section>
  )
}

export default EmdrModalityAreasSection
