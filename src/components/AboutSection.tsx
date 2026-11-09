import React from 'react'
import { motion } from 'framer-motion'

interface AboutSectionProps {
  imageSrc?: string
  ctaHref?: string
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  imageSrc = '/Home 11.jpeg',
}) => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#f5f3ee] text-slate-800 py-16 sm:py-24 lg:py-32 px-6 sm:px-10 md:px-14 lg:px-20"
      aria-label="About LOGOS Psychotherapy"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 sm:gap-14 lg:gap-16 xl:gap-20">
          {/* Left Column: Portrait Zen Stones Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full lg:w-[32%] xl:w-[30%] flex-shrink-0"
          >
            <div className="relative w-full max-w-[340px] mx-auto lg:max-w-none shadow-sm overflow-hidden">
              <img
                src={imageSrc}
                alt="Stacked serene river stones in fine sand representing balance, mindfulness, and healing"
                className="w-full h-auto max-h-[760px] object-cover block"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Column: Narrative Content & Online Counseling Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="w-full lg:w-[68%] xl:w-[70%] flex flex-col justify-start"
          >
            {/* Header: LOGOS Psychotherapy */}
            <div className="flex flex-wrap items-baseline gap-3 sm:gap-4 mb-5 sm:mb-6">
              <h2 className="font-display tracking-[0.16em] text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 uppercase leading-none">
                LOGOS
              </h2>
              <span className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-slate-800 font-normal pl-1 leading-none translate-y-[3px]">
                Psychotherapy
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-[1.65rem] font-light text-[#2f788c] tracking-wide mb-5 leading-snug">
              Psychotherapy with a Licensed Therapist Who Listens First
            </h3>

            {/* Intro Paragraphs */}
            <div className="space-y-4 sm:space-y-5 text-slate-700 text-sm sm:text-[0.9375rem] md:text-base leading-relaxed font-normal mb-7 sm:mb-8">
              <p>
                At Logos Psychotherapy, therapy is an invitation to pause, to breathe, to reconnect with what truly matters. When life feels uncertain, overwhelming, or detached from meaning, therapy can become a space to reflect, gain clarity, and move forward with intention. Logos Psychotherapy is a Florida-based practice offering psychotherapy online to adults in Florida, New Jersey, and New York. The focus is on processing what happened so the past stops shaping your relationships, your reactions, and how safe you feel. 
              </p>

              <p>
                I&apos;m Moussia Zaklikovsky, a licensed clinical social worker (LCSW), licensed in Florida, New Jersey and New York. I&apos;m also an EMDRIA Certified Therapist&trade;. My work combines evidence-based methods with attention to meaning, values, and the bigger questions that often come up when life changes or feels off course. You can see my verified profile on{' '}
                <a
                  href="https://www.psychologytoday.com/us/therapists/moussia-zaklikovsky-miami-fl/1629484"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2f788c] underline underline-offset-2 hover:text-[#1e5a6a] transition-colors"
                >
                  Psychology Today
                </a>{' '}
                and{' '}
                <a
                  href="https://okclarity.com/directory/moussia-zaklikovsky/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2f788c] underline underline-offset-2 hover:text-[#1e5a6a] transition-colors"
                >
                  Okayclarity
                </a>.
              </p>
            </div>

            {/* CTA Link: Learn more about my background and approach */}
            <div className="mb-8 sm:mb-10">
              <a
                href="/about"
                className="group inline-flex flex-col items-start cursor-pointer focus:outline-none"
                aria-label="Learn more about my background and approach"
              >
                <span className="text-[#2f788c] group-hover:text-[#1e5a6a] text-xs sm:text-sm tracking-[0.22em] font-medium uppercase transition-colors duration-200">
                  LEARN MORE ABOUT MY BACKGROUND AND APPROACH
                </span>
                <span
                  aria-hidden="true"
                  className="w-full h-[1.5px] bg-[#2f788c] mt-1.5 group-hover:bg-[#1e5a6a] group-hover:w-[104%] transition-all duration-300 origin-left"
                />
              </a>
            </div>

            {/* Feature Bordered Box: What Therapy Can Help With */}
            <div className="border border-slate-900 p-6 sm:p-8 md:p-9 bg-transparent">
              <h3 className="text-xl sm:text-2xl md:text-[1.65rem] font-light text-[#2f788c] tracking-wide mb-4 leading-snug">
                What Therapy at Logos Psychotherapy Can Help With
              </h3>

              <div className="space-y-4 text-xs sm:text-sm md:text-[0.875rem] leading-relaxed text-slate-700">
                <p>
                  People come to individual therapy for many reasons. Some know exactly what they want to work on. Others only know that something feels off. Both are good places to start.
                </p>

                <p className="font-medium text-slate-800">
                  Therapy may help if you are dealing with:
                </p>

                <ul className="space-y-2 list-disc list-inside text-slate-700">
                  <li>Anxiety, including constant worry, racing thoughts, or feeling on edge</li>
                  <li>Trauma and PTSD, including distressing memories and reactions that continue long after an event</li>
                  <li>Stress and burnout, when pressure at work or home feels hard to manage</li>
                  <li>Life transitions, such as a move, career change, loss, or the end of a relationship</li>
                  <li>Emotional health concerns, including feeling stuck, disconnected, or unsure what you want</li>
                  <li>Difficult life experiences you haven&apos;t had space to talk through</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
