import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FaqItem {
  id: string
  question: string
  answer: string
}

export const EmdrFaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const faqItems: FaqItem[] = [
    {
      id: 'what-is-emdr',
      question: 'What is EMDR therapy?',
      answer:
        'Online EMDR therapy is a virtual form of Eye Movement Desensitization and Reprocessing that helps individuals heal from distressing or traumatic experiences. It uses guided bilateral stimulation to support the brain’s natural ability to process and integrate difficult memories in a safe, structured online setting.',
    },
    {
      id: 'how-emdr-works',
      question: 'How does EMDR therapy online work?',
      answer:
        'During online EMDR therapy, a therapist guides you through bilateral stimulation, such as eye movements or tapping, while you focus briefly on specific memories or experiences. This process helps reduce emotional intensity and allows memories to be stored in a more adaptive, less distressing way.',
    },
    {
      id: 'effective-for-trauma',
      question: 'Is EMDR therapy effective for trauma?',
      answer:
        'Yes. EMDR therapy is widely recognized as an effective treatment for trauma. It helps the brain safely reprocess traumatic experiences, reducing emotional reactivity and restoring a sense of internal safety and balance without requiring detailed retelling of the event.',
    },
    {
      id: 'anxiety-depression',
      question: 'Can EMDR therapy help with anxiety and depression?',
      answer:
        'EMDR therapy can help with anxiety and depression by addressing unresolved experiences or beliefs that continue to affect emotional well-being. As these underlying roots are processed, many clients experience reduced anxiety, improved mood, and greater emotional flexibility.',
    },
    {
      id: 'attachment-relationship',
      question: 'How does EMDR therapy support attachment and relationship work?',
      answer:
        'EMDR therapy can help reprocess early attachment wounds that influence how you experience trust, boundaries, and connection in relationships. By addressing these foundational experiences, EMDR supports healthier relational patterns and a stronger sense of emotional security.',
    },
    {
      id: 'different-from-talk-therapy',
      question: 'What makes EMDR therapy different from traditional talk therapy?',
      answer:
        'Unlike talk therapy alone, EMDR therapy focuses on how memories are stored in the brain rather than on extended discussion of past events. It emphasizes integration and healing at a neurological level, helping clients move forward with greater clarity, calm, and resilience.',
    },
  ]

  return (
    <section
      className="relative w-full bg-[#f5f3ee] py-18 sm:py-24 md:py-28 px-6 sm:px-10 md:px-12 text-slate-800"
      aria-label="Frequently Asked Questions about EMDR Therapy"
    >
      <div className="w-full max-w-[1040px] mx-auto">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-light text-slate-800 tracking-tight">
            <span>Support Starts With </span>
            <span className="font-script text-4xl sm:text-5xl lg:text-[3.75rem] text-slate-900 font-normal pl-1 align-baseline">
              Understanding
            </span>
          </h2>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-3.5 max-w-4xl mx-auto">
          {faqItems.map((item, index) => {
            const isOpen = openIds.includes(item.id)
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
                className="border border-slate-300/85 hover:border-slate-400/90 transition-colors bg-[#f5f3ee] overflow-hidden"
              >
                {/* Accordion Row Header */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-3.5 sm:py-4 px-4 sm:px-6 flex items-center justify-between gap-4 group focus:outline-none focus:ring-1 focus:ring-teal-700/30"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Small Chevron Arrow */}
                    <span
                      className={`text-slate-500 group-hover:text-slate-900 transform transition-transform duration-200 text-xs sm:text-sm ${
                        isOpen ? 'rotate-90' : 'rotate-0'
                      }`}
                      aria-hidden="true"
                    >
                      &#9654;
                    </span>

                    {/* Question Title in uppercase */}
                    <span className="text-xs sm:text-[13px] md:text-[14px] font-semibold tracking-[0.14em] uppercase text-slate-800 group-hover:text-slate-950 transition-colors">
                      {item.question}
                    </span>
                  </div>

                  {/* Plus / Minus or subtle indicator */}
                  <span className="text-slate-400 group-hover:text-slate-700 font-light text-lg select-none">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* Accordion Expandable Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-11 pb-5 pt-1 text-slate-700 text-[14px] sm:text-[15px] leading-[1.75] font-normal border-t border-slate-200/60 bg-white/40">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EmdrFaqSection
