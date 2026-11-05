import React from 'react'
import { motion } from 'framer-motion'

export const WhereISeeClientsSection: React.FC = () => {
  return (
    <section
      id="locations"
      className="relative w-full bg-[#f5f3ee] text-slate-800 py-16 sm:py-20 lg:py-24 px-6 sm:px-10 md:px-12 border-t border-slate-300/60"
      aria-label="Where and How I See Clients"
    >
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Main Heading with cursive font curve */}
          <div className="flex flex-wrap items-baseline justify-center gap-2 sm:gap-3 mb-4 text-center">
            <h2 className="font-display tracking-tight text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 leading-tight">
              <span>Where &amp; How I </span>
              <span className="font-script text-4xl sm:text-5xl md:text-6xl text-slate-800 font-normal pl-1 inline-block align-baseline">
                See Clients
              </span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-[17px] text-slate-700 font-light max-w-2xl mx-auto mb-10 sm:mb-12">
            I offer virtual therapy in New Jersey, Florida and New York.
          </p>

          {/* 3 Structured Location & Session Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left mb-10 sm:mb-12">
            {/* Card 1: New Jersey Office */}
            <div className="bg-white/70 border border-slate-300/80 rounded-sm p-6 sm:p-7 shadow-xs flex flex-col">
              <span className="text-xs tracking-[0.2em] font-semibold text-[#2f788c] uppercase mb-3 block">
                New Jersey Office
              </span>
              <p className="text-sm sm:text-base text-slate-800 font-medium leading-snug">
                261 Gravel Hill Rd
              </p>
              <p className="text-sm sm:text-base text-slate-600 font-normal mt-0.5">
                Monroe Township, NJ 08831
              </p>
            </div>

            {/* Card 2: Florida Office */}
            <div className="bg-white/70 border border-slate-300/80 rounded-sm p-6 sm:p-7 shadow-xs flex flex-col">
              <span className="text-xs tracking-[0.2em] font-semibold text-[#2f788c] uppercase mb-3 block">
                Florida Office
              </span>
              <p className="text-sm sm:text-base text-slate-800 font-medium leading-snug">
                19401 W Dixie Highway
              </p>
              <p className="text-sm sm:text-base text-slate-600 font-normal mt-0.5">
                Miami, FL 33180
              </p>
            </div>

            {/* Card 3: Online Therapy */}
            <div className="bg-white/70 border border-slate-300/80 rounded-sm p-6 sm:p-7 shadow-xs flex flex-col">
              <span className="text-xs tracking-[0.2em] font-semibold text-[#2f788c] uppercase mb-3 block">
                Online Therapy
              </span>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                Secure video sessions for clients located in New Jersey, Florida or New York.
              </p>
            </div>
          </div>

          {/* Fees & Out-of-network Notice */}
          <div className="max-w-2xl mx-auto pt-4 border-t border-slate-300/60">
            <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
              Sessions are private pay. Out-of-network reimbursement options available through your insurance plan.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhereISeeClientsSection
