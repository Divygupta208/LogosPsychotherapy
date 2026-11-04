import React from 'react'
import { motion } from 'framer-motion'

export const AboutCredentialsSection: React.FC = () => {
  return (
    <section
      id="credentials"
      className="relative w-full bg-[#f5f3ee] text-slate-800 py-16 sm:py-20 px-6 sm:px-10 md:px-12 border-t border-slate-300/60"
      aria-label="Credentials and Experience"
    >
      <div className="w-full max-w-280 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Main Heading with cursive font curve */}
          <div className="flex flex-wrap items-baseline justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 text-center">
            <h2 className="font-display tracking-tight text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 leading-tight">
              <span>Credentials &amp; </span>
              <span className="font-script text-4xl sm:text-5xl md:text-6xl text-slate-800 font-normal pl-1 inline-block align-baseline">
                Experience
              </span>
            </h2>
          </div>

          {/* 4 Clean Structured Cards in 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Card 1: Licensure */}
            <div className="bg-white/60 border border-slate-300/80 rounded-sm p-6 sm:p-7 shadow-xs flex flex-col justify-start">
              <span className="text-xs tracking-[0.2em] font-semibold text-[#2f788c] uppercase mb-2 block">
                Licensure
              </span>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                Licensed Clinical Social Worker (LCSW) in New Jersey, Florida and New York
              </p>
            </div>

            {/* Card 2: Education */}
            <div className="bg-white/60 border border-slate-300/80 rounded-sm p-6 sm:p-7 shadow-xs flex flex-col justify-start">
              <span className="text-xs tracking-[0.2em] font-semibold text-[#2f788c] uppercase mb-2 block">
                Education
              </span>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                Master of Social Work, Yeshiva University; Bachelor of Social Work, College of Mount Saint Vincent
              </p>
            </div>

            {/* Card 3: EMDR Credentials */}
            <div className="bg-white/60 border border-slate-300/80 rounded-sm p-6 sm:p-7 shadow-xs flex flex-col justify-start">
              <span className="text-xs tracking-[0.2em] font-semibold text-[#2f788c] uppercase mb-2 block">
                EMDR Credentials
              </span>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                <a
                  href="https://credentials.emdria.org/bcf52088-834e-4283-9b41-45ecd49344db#acc.Yey2EwB9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2f788c] underline underline-offset-2 hover:text-[#1e5a6a] font-medium transition-colors"
                >
                  EMDRIA Certified Therapist&trade;
                </a>
                . EMDR training completed through The Center for Excellence in EMDR Therapy (2025).
              </p>
            </div>

            {/* Card 4: Professional Listing */}
            <div className="bg-white/60 border border-slate-300/80 rounded-sm p-6 sm:p-7 shadow-xs flex flex-col justify-start">
              <span className="text-xs tracking-[0.2em] font-semibold text-[#2f788c] uppercase mb-2 block">
                Professional Listings
              </span>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                Verified listings on{' '}
                <a
                  href="https://www.psychologytoday.com/us/therapists/moussia-zaklikovsky-miami-fl/1629484"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2f788c] underline underline-offset-2 hover:text-[#1e5a6a] font-medium transition-colors"
                >
                  Psychology Today
                </a>{' '}
                and{' '}
                <a
                  href="https://okclarity.com/directory/moussia-zaklikovsky/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2f788c] underline underline-offset-2 hover:text-[#1e5a6a] font-medium transition-colors"
                >
                  Okayclarity
                </a>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutCredentialsSection
