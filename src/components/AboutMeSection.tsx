import React from 'react'

interface AboutMeSectionProps {
  imageSrc?: string
}

interface ValueBadge {
  id: string
  label: string
  icon: React.ReactNode
}

export const AboutMeSection: React.FC<AboutMeSectionProps> = ({
  imageSrc = '/About 2.jpg.jpeg',
}) => {
  // 5 core values with larger badges and icons matching the reference
  const valueBadges: ValueBadge[] = [
    {
      id: 'peace',
      label: 'Peace',
      icon: (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#335670] flex items-center justify-center flex-shrink-0 text-white shadow-inner">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4a8 8 0 0 1 8 8c0 4-3 7-8 7s-8-3-8-7a8 8 0 0 1 8-8z" strokeWidth="1.2" opacity="0.35" />
            <path d="M7.5 13.5c1.5 0 2.5-1 4-1s2.5 1 4 1" />
            <path d="M12 8.5v4" />
            <path d="M10 10.5l2-2 2 2" />
          </svg>
        </div>
      ),
    },
    {
      id: 'tranquil',
      label: 'Tranquil',
      icon: (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#335670] flex items-center justify-center flex-shrink-0 text-white shadow-inner">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 3c-1.5 2.5-2 4-2.1 8.5A7 7 0 0 1 11 20z" />
            <path d="M9 14l5-5" />
          </svg>
        </div>
      ),
    },
    {
      id: 'loved',
      label: 'Loved',
      icon: (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#335670] flex items-center justify-center flex-shrink-0 text-white shadow-inner">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 18.5l-5.5-5.5a3.8 3.8 0 0 1 5.5-5.5l0 0a3.8 3.8 0 0 1 5.5 5.5L12 18.5z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'meaning',
      label: 'Meaning',
      icon: (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-sm bg-[#335670] flex items-center justify-center flex-shrink-0 text-white shadow-inner">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="4" width="14" height="16" rx="1.5" />
            <line x1="9" y1="8" x2="15" y2="8" />
            <line x1="9" y1="12" x2="15" y2="12" />
            <line x1="9" y1="16" x2="13" y2="16" />
          </svg>
        </div>
      ),
    },
    {
      id: 'secure',
      label: 'Secure',
      icon: (
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#335670] flex items-center justify-center flex-shrink-0 text-white shadow-inner">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="9" x2="17" y2="9" />
            <line x1="7" y1="12" x2="17" y2="12" />
            <line x1="7" y1="15" x2="17" y2="15" />
          </svg>
        </div>
      ),
    },
  ]

  return (
    <section
      className="relative w-full bg-[#f5f3ee] pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 px-6 sm:px-10 md:px-12 text-slate-800"
      aria-label="About Moussia Zaklikovsky and LOGOS Psychotherapy"
    >
      {/* Container aligned so left of text and right of image precisely match the navy cards width */}
      <div className="w-full max-w-280 mx-auto">
        {/* Top Grid: Bio Text (Left) & Portrait (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-12 sm:mb-16">
          {/* Left Column: Narrative Subsections with Single Flowing Paragraphs */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 text-[14px] sm:text-[14.5px] md:text-[15px] leading-[1.75] text-slate-800 font-normal">
            {/* Subsection 1: Who I Work With */}
            <div>
              {/* <h2 className="text-2xl sm:text-3xl font-light text-[#2f788c] tracking-tight leading-snug mb-3">
                Who I Work With
              </h2> */}
              <p className="text-slate-700">
                I am a Licensed Clinical Social Worker dedicated to helping individuals move toward emotional wellness and a more meaningful life. My work is grounded in the belief that while pain is an inevitable part of being human, suffering is shaped by how we experience, interpret, and carry that pain.
              </p>
             <br />
              <p className="text-slate-700">
                The name Logos comes from the Greek word for meaning and is inspired by Viktor Frankl’s understanding that meaning can lessen the suffering that accompanies unavoidable hardship. Therapy, to me, is not about erasing pain; it is about building resilience, deepening understanding, and creating a life that feels purposeful even in the presence of difficulty.
              </p>
              <br />
              <p className="text-slate-700">
                I am EMDR trained and specialize in trauma-focused work. In EMDR therapy, we can work together to reduce the suffering those experiences continue to cause. By helping the nervous system process and integrate trauma, healing becomes possible without reliving the past.
              </p>
              <br />
              <p className="text-slate-700">
                Trained in early childhood attachment-based and somatic approaches as well as behavior therapy, I have extensive experience working with individuals navigating anxiety, depression, and relational challenges. My approach integrates formal clinical training with a deep personal understanding of emotional resistance and pain. It was this dual perspective that drew me to trauma work, where I now walk alongside others on their journeys.
              </p>
              <br />
              <p className="text-slate-700">
                At Logos Psychotherapy, therapy is a collaborative space to explore your values, strengthen resilience, and create meaning, even when life feels uncertain or heavy.
              </p>
            </div>

            {/* Subsection 2: My Approach to Therapy */}
            <div>
              {/* <h2 className="text-2xl sm:text-3xl font-light text-[#2f788c] tracking-tight leading-snug mb-3">
                My Approach to Therapy
              </h2> */}
              {/* <p className="text-slate-700 mb-5">
                As a trauma therapist, I choose methods based on your needs and goals. My training includes EMDR therapy (an EMDRIA-certified, structured approach that helps the brain process distressing memories so they feel less overwhelming, without having to relive the past in detail), attachment-based approaches looking at how early relationships shape the way we connect with others today, somatic approaches paying attention to how stress and emotion show up in the body, and behavioural therapy focusing on practical skills and changes in daily patterns for anxiety and depression. I don&apos;t use one method for everyone. We&apos;ll decide together what fits you best.
              </p> */}

              {/* Action Links directly below the paragraph */}
              <div className="flex flex-wrap items-center gap-5 sm:gap-7 pt-1">
                <a
                  href="/emdr-therapy"
                  className="text-[#2f788c] text-xs sm:text-[13px] tracking-wide font-medium underline underline-offset-4 hover:text-[#1e5a6a] transition-colors"
                >
                  Learn more about EMDR therapy &rarr;
                </a>
                <a
                  href="/treatment"
                  className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] tracking-[0.18em] uppercase font-semibold text-[#2f788c] hover:text-[#1e5a6a] pb-0.5 border-b border-[#2f788c] hover:border-[#1e5a6a] transition-all"
                  aria-label="See all treatment options"
                >
                  <span>SEE ALL TREATMENT OPTIONS</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Photo */}
          <div className="lg:col-span-5 h-full flex flex-col pt-0 lg:sticky lg:top-24">
            <img
              src={imageSrc}
              alt="Moussia Zaklikovsky, LCSW — LOGOS Psychotherapy"
              className="w-full h-auto max-h-[720px] object-cover object-top block rounded-sm shadow-sm"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom Cards Section: Deep navy bar flush against the bottom of the image with larger, prominent cards */}
        <div className="bg-[#102a3e] py-7 sm:py-8 lg:py-10 px-5 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 md:gap-5">
            {valueBadges.map((badge) => (
              <div
                key={badge.id}
                className="group border border-[#3f637e] min-h-[84px] sm:min-h-[96px] lg:min-h-[105px] py-4 sm:py-5 px-3.5 sm:px-4 lg:px-5 flex items-center justify-start gap-3.5 sm:gap-4 text-white hover:bg-white/[0.06] hover:border-white/60 transition-all duration-200 cursor-default"
              >
                {badge.icon}
                <span className="text-base sm:text-[17px] lg:text-[18px] font-normal sm:font-medium tracking-wide text-white">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection
