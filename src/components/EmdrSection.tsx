import React from 'react'
import { motion } from 'framer-motion'

interface EmdrSectionProps {
  imageSrc?: string
  ctaHref?: string
}

export const EmdrSection: React.FC<EmdrSectionProps> = ({
  imageSrc = '/HomeEMDR.jpeg',
  ctaHref = '/emdr-therapy',
}) => {
  return (
    <section
      id="emdr-therapy"
      className="relative w-full bg-[#f5f3ee] py-6 sm:py-8 lg:py-10"
      aria-label="EMDR Therapy and Therapeutic Modalities"
    >
      {/* Full screen width container (edge to edge 100vw) */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full flex flex-col lg:flex-row overflow-hidden min-h-[390px] lg:min-h-[550px]"
        >
          {/* Left Column (70% Screen Width): Deep Navy Blue Content Pane */}
          <div className="w-full lg:w-[65%] bg-[#0f2432] text-white pl-6 sm:pl-10 md:pl-14 lg:pl-16 xl:pl-20 pr-6 sm:pr-8 lg:pr-10 xl:pr-14 py-7 sm:py-8 lg:py-9 flex flex-col justify-between">
            {/* Top Introductory Context */}
            <div className="mb-5 sm:mb-6">
              <p className="text-slate-300/85 text-xs sm:text-[0.8125rem] md:text-[0.875rem] font-light leading-relaxed max-w-3xl">
                Each client&apos;s path is unique. LOGOS Psychotherapy&apos;s online mental health therapy sessions offer evidence-based approaches, thoughtfully integrated to support your individual needs.
              </p>
            </div>

            {/* Core Feature: EMDR */}
            <div className="my-auto py-2">
              <div className="flex items-start gap-4 sm:gap-6 mb-5">
                {/* Circular Geometric Mandala Badge */}
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-slate-500/50 flex items-center justify-center flex-shrink-0 bg-white/[0.03] shadow-inner"
                  aria-hidden="true"
                >
                  <svg
                    className="w-6 h-6 text-[#cca869]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2C13.5 5 13.5 7 12 9C10.5 7 10.5 5 12 2Z" />
                    <path d="M12 15C13.5 17 13.5 19 12 22C10.5 19 10.5 17 12 15Z" />
                    <path d="M2 12C5 13.5 7 13.5 9 12C7 10.5 5 10.5 2 12Z" />
                    <path d="M15 12C17 13.5 19 13.5 22 12C19 10.5 17 10.5 15 12Z" />
                    <path d="M4.93 4.93C7.5 6.5 8.5 8 8.5 9.5C7 9.5 5.5 8.5 4.93 4.93Z" />
                    <path d="M19.07 19.07C16.5 17.5 15.5 16 15.5 14.5C17 14.5 18.5 15.5 19.07 19.07Z" />
                    <path d="M4.93 19.07C6.5 16.5 8 15.5 9.5 15.5C9.5 17 8.5 18.5 4.93 19.07Z" />
                    <path d="M19.07 4.93C17.5 7.5 16 8.5 14.5 8.5C14.5 7 15.5 5.5 19.07 4.93Z" />
                  </svg>
                </div>

                {/* EMDR Title and Explanatory Text */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl lg:text-[1.65rem] font-light text-white tracking-wide mb-4 leading-snug">
                    EMDR Therapy for Trauma and Distressing Memories
                  </h3>
                  <div className="space-y-3.5 text-slate-300/90 text-xs sm:text-sm md:text-[0.9375rem] font-light leading-relaxed mb-6 max-w-2xl">
                    <p>
                      Eye Movement Desensitization and Reprocessing (EMDR) is a structured therapy that helps people process distressing experiences. While you focus on a memory, you follow a specific protocol that often includes side-to-side eye movements or other bilateral stimulation.
                    </p>
                    <p>
                      EMDR is recommended as a treatment for post-traumatic stress disorder (PTSD) by organizations including the World Health Organization and the U.S. Department of Veterans Affairs. Many people also find it useful for other distressing experiences, though results vary from person to person.
                    </p>
                    <p>
                      Before any trauma processing begins, we focus on safety, preparation, and coping skills, so the work moves at a pace that feels manageable. I&apos;m an EMDRIA Certified Therapist&trade;, and I completed my EMDR training through The Center for Excellence in EMDR Therapy in 2025.
                    </p>
                  </div>

                  {/* CTA link with gold accent */}
                  <div>
                    <a
                      href={ctaHref}
                      className="group inline-flex items-center gap-2 text-[#cca869] hover:text-[#e4c284] text-xs sm:text-[0.8125rem] tracking-[0.2em] uppercase font-medium transition-colors duration-200"
                    >
                      <span>READ MORE ABOUT EMDR THERAPY ONLINE</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                        &rarr;
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Subtle Divider & Philosophical Closure */}
            <div className="mt-6 sm:mt-7 pt-4 sm:pt-5 border-t border-slate-700/50">
              <p className="text-slate-300/80 text-xs sm:text-[0.8125rem] md:text-[0.875rem] font-light leading-relaxed max-w-3xl">
                Our approach is grounded in research and adapted through an existential lens, supporting not only symptom relief but deeper insight and self-awareness.
              </p>
            </div>
          </div>

          {/* Right Column: Fixed Window / Aperture with Parallax Reveal Effect */}
          <div className="w-full lg:w-[35%] min-h-[380px] lg:min-h-full relative overflow-hidden flex flex-col justify-start pl-6 sm:pl-8 lg:pl-10 pr-6 sm:pr-8 md:pr-10 lg:pr-12 xl:pr-14 py-7 sm:py-8 lg:py-9">
            {/* The Fixed Viewport Background Image that reveals & hides as user scrolls */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none bg-no-repeat bg-cover bg-center fixed-aperture-bg"
              style={{
                backgroundImage: `url('${imageSrc}')`,
              }}
              aria-hidden="true"
            />

            {/* Subtle soft gradient scrim to ensure title contrast while preserving image fidelity */}
            <div
              className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/10 via-transparent to-transparent"
              aria-hidden="true"
            />

            {/* Overlaid Section Headline (Scrolls naturally with the section) */}
            <div className="relative z-10 select-none">
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-light tracking-tight text-slate-900 leading-[1.08]">
                Therapeutic
              </h2>
              <div className="-mt-1">
                <span className="font-script text-3xl sm:text-4xl lg:text-[3.25rem] text-slate-800 font-normal block leading-[1.05]">
                  Modalities
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EmdrSection
