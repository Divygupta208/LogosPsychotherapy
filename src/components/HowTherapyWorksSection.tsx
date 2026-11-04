import React from 'react'
import { motion } from 'framer-motion'

export const HowTherapyWorksSection: React.FC = () => {
  return (
    <section
      id="how-therapy-works"
      className="relative w-full bg-[#f5f3ee] text-slate-800 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 px-6 sm:px-10 md:px-14 lg:px-20"
      aria-label="How Therapy Works"
    >
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Main Heading with cursive font curve on 'Works' */}
          <div className="flex flex-wrap items-baseline justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 text-center">
            <h2 className="font-display tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light text-slate-900 leading-tight">
              <span>How Therapy </span>
              <span className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-slate-800 font-normal pl-1 inline-block align-baseline">
                Works
              </span>
            </h2>
          </div>

          {/* Narrative Content */}
          <div className="space-y-5 text-slate-700 text-sm sm:text-[0.9375rem] md:text-base leading-relaxed font-normal max-w-2xl sm:max-w-3xl mx-auto">
            <p>
              Sessions take place over a secure, private video platform at my office in Miami. You can attend online from home or any private space where you feel comfortable.
            </p>

            <div className="pt-2">
              <p className="font-medium text-slate-900 mb-3">
                Getting started is simple:
              </p>
              <ul className="space-y-2.5 list-disc list-inside pl-1 text-slate-700">
                <li>
                  <strong>Reach out.</strong> Fill out the contact form with a few details. You don&apos;t need to explain everything.
                </li>
                <li>
                  <strong>Schedule a consultation.</strong> We&apos;ll talk about what brings you in, answer your questions, and decide together whether we&apos;re a good fit.
                </li>
                <li>
                  <strong>Begin sessions.</strong> We&apos;ll set goals based on what matters to you and adjust as we go.
                </li>
              </ul>
            </div>

            <p className="pt-2">
              Online sessions can be a good fit if you have a busy schedule, or prefer to talk from a familiar space. Online therapy is available to adults located in Florida and New Jersey.
            </p>

            <p className="pt-1 font-medium text-slate-800">
              Fees: Logos Psychotherapy is a private-pay practice. Out-of-network reimbursement options available through your insurance plan.
            </p>
          </div>

          {/* Subtle elegant divider separating sections */}
          <div className="w-24 sm:w-32 h-[1px] bg-[#cca869]/50 mx-auto mt-14 sm:mt-18" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  )
}

export default HowTherapyWorksSection
