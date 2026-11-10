import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FaqMainSectionProps {
  backgroundImage?: string
}

interface FaqItem {
  id: string
  question: string
  answer: React.ReactNode
}

export const FaqMainSection: React.FC<FaqMainSectionProps> = ({
  backgroundImage = '/FAQ.jpg.jpeg',
}) => {
  const [openIds, setOpenIds] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const faqItems: FaqItem[] = [
    {
      id: 'what-is-psychotherapy',
      question: 'What happens in first session?',
      answer: (
        <p>
          We talk about what brought you in and what you hope to change. You decide how much to share, and we go at your pace. There is no pressure to describe painful events before you are ready. The free consultation is a chance to talk through your history and goals. If EMDR does not seem like the right fit, I will tell you and point you toward other options.
        </p>
      ),
    },
    {
      id: 'therapy-cost',
      question: 'HOW MUCH DOES THERAPY COST?',
      answer: (
        <p>
          Logos Psychotherapy is a private-pay practice. Individual sessions are $225 a session. To learn more about fees, please contact Logos Psychotherapy at{' '}
          <a
            href="tel:6092254016"
            className="text-[#2f788c] underline hover:text-[#1d5766] transition-colors font-medium"
          >
            (609) 225-4016
          </a>{' '}
          or{' '}
          <a
            href="mailto:mzaklikovsky@logos-psychotherapy.com"
            className="text-[#2f788c] underline hover:text-[#1d5766] transition-colors font-medium"
          >
            mzaklikovsky@logos-psychotherapy.com
          </a>
          . You&apos;re welcome to ask any billing questions before you book.
        </p>
      ),
    },
    {
      id: 'need-therapy-counseling',
      question: 'DO I NEED THERAPY OR COUNSELING?',
      answer: (
        <p>
          You don&apos;t need a diagnosis or a crisis to start. Many people reach out when worry, stress, grief, or a life change feels hard to manage alone. &ldquo;Therapy&rdquo; and &ldquo;counseling&rdquo; are often used interchangeably, so what matters most is that your provider is licensed and trained in your area of concern. A consultation is a low-pressure way to talk through your options.
        </p>
      ),
    },
    {
      id: 'confidentiality',
      question: 'IS THERAPY CONFIDENTIAL?',
      answer: (
        <p>
          Yes. What you share is kept private, with legal exceptions such as a risk of serious harm to yourself or others, suspected abuse of a child or vulnerable adult, or a court order. I&apos;m happy to explain how confidentiality works before we begin.
        </p>
      ),
    },
    {
      id: 'session-length',
      question: 'How long are sessions, and how often do we meet?',
      answer: (
        <p>
          Sessions are 60 minutes. Most clients begin weekly, and we adjust as you progress.
        </p>
      ),
    },
    // {
    //   id: 'first-session',
    //   question: 'WHAT HAPPENS IN THE FIRST THERAPY SESSION?',
    //   answer: (
    //     <p>
    //       We talk about what brought you in, what you&apos;ve already tried, and what you hope will change. You can share as much or as little as you like, and ask me anything about how I work. Then we set goals based on what matters to you.
    //     </p>
    //   ),
    // },
  ]

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden flex flex-col items-center justify-start pt-36 sm:pt-40 md:pt-44 pb-20 sm:pb-28 px-4 sm:px-6 md:px-10 lg:px-12"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
      aria-label="Frequently Asked Questions"
    >
      {/* Gentle overall overlay for the full-bleed background image with top contrast for navbar */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Unified QnA Card Panel Container */}
      <div className="relative z-10 w-full max-w-[1040px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="w-full shadow-2xl rounded-none sm:rounded-sm overflow-hidden border border-white/30"
        >
          {/* Upper Slate-Blue Header Banner */}
          <div className="bg-[#4d7085] text-white p-7 sm:p-10 md:p-12">
            {/* Headline */}
            <div className="mb-4 sm:mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.15]">
                <span className="text-[#dfc9a7] font-normal">Therapy FAQs: </span>
                <span className="font-script text-white text-4xl sm:text-5xl md:text-6xl font-normal pl-1 align-baseline inline-block">
                  Common Questions
                </span>{' '}
                <span className="text-white font-light block sm:inline">
                  About Psychotherapy
                </span>
              </h1>
            </div>

            {/* Introductory Narrative */}
            <p className="text-white/95 text-xs sm:text-[13.5px] md:text-[14.5px] leading-[1.8] font-light max-w-4xl">
              Starting therapy often raises practical questions. Here are answers about psychotherapy, cost, privacy, and what to expect. If your question isn&apos;t covered, you&apos;re welcome to reach out to Logos Psychotherapy.
            </p>
          </div>

          {/* Lower Q&A Accordion List Panel */}
          <div className="bg-white p-6 sm:p-8 md:p-12">
            <div className="space-y-3 sm:space-y-3.5">
              {faqItems.map((item) => {
                const isOpen = openIds.includes(item.id)
                return (
                  <div
                    key={item.id}
                    className="border border-slate-300 hover:border-slate-400 transition-colors bg-white overflow-hidden rounded-none"
                  >
                    {/* Toggle Button */}
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                      className="w-full text-left py-3.5 sm:py-4 px-4 sm:px-6 flex items-center justify-between gap-4 group focus:outline-none focus:ring-1 focus:ring-teal-700/30"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Triangle / Chevron Indicator */}
                        <span
                          className={`text-slate-600 group-hover:text-slate-900 transform transition-transform duration-200 text-xs sm:text-sm ${
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

                      {/* Plus / Minus Indicator */}
                      <span className="text-slate-400 group-hover:text-slate-700 font-light text-lg select-none">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {/* Expandable Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 sm:px-12 pb-5 pt-2 text-slate-700 text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.8] font-normal border-t border-slate-200/80 bg-slate-50/50">
                            <p>{item.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FaqMainSection
