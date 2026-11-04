import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#f5f3ee] py-14 sm:py-16 md:py-20 px-6 sm:px-10 border-t border-slate-200/60" aria-label="Site footer">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Brand Logo (Centered) */}
        <a
          href="/"
          className="group inline-flex items-baseline justify-center gap-2.5 text-slate-800 hover:opacity-90 transition-opacity mb-4"
          aria-label="LOGOS Psychotherapy Home"
        >
          <span className="font-display tracking-[0.2em] text-2xl sm:text-3xl font-light text-slate-900 uppercase">
            LOGOS
          </span>
          <span className="font-script text-3xl sm:text-4xl text-slate-800 font-normal tracking-wide pl-1 translate-y-[2px]">
            Psychotherapy
          </span>
        </a>

        {/* Contact Info: Phone & Email */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm sm:text-base text-slate-700 font-normal mb-3">
          <a href="tel:6092254016" className="hover:text-[#0e5c6e] transition-colors">
            (609) 225-4016
          </a>
          <span className="text-slate-400">|</span>
          <a
            href="mailto:mzaklikovsky@logos-psychotherapy.com"
            className="hover:text-[#0e5c6e] underline underline-offset-2 transition-colors"
          >
            mzaklikovsky@logos-psychotherapy.com
          </a>
        </div>

        {/* Office Addresses */}
        <div className="text-xs sm:text-sm text-slate-600 space-y-1 mb-6 max-w-xl">
          <p>Office address 1 - 19401 W Dixie Highway, Miami, FL 33180</p>
          <p>Office address 2 - 261 Gravel Hill Rd, Monroe Township, NJ 08831</p>
        </div>

        {/* Navigation & Legal Links */}
        <nav
          className="flex flex-wrap items-center justify-center gap-x-3.5 sm:gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-700 font-medium tracking-wide mb-8"
          aria-label="Footer Navigation"
        >
          <a href="/" className="hover:text-[#0e5c6e] transition-colors">Home</a>
          <span className="text-slate-400">·</span>
          <a href="/about" className="hover:text-[#0e5c6e] transition-colors">About</a>
          <span className="text-slate-400">·</span>
          <a href="/treatment" className="hover:text-[#0e5c6e] transition-colors">Treatment</a>
          <span className="text-slate-400">·</span>
          <a href="/emdr-therapy" className="hover:text-[#0e5c6e] transition-colors">EMDR Therapy</a>
          <span className="text-slate-400">·</span>
          <a href="/faq" className="hover:text-[#0e5c6e] transition-colors">FAQ</a>
          <span className="text-slate-400">·</span>
          <a href="/contact" className="hover:text-[#0e5c6e] transition-colors">Contact</a>
          <span className="text-slate-400">·</span>
          <span className="text-slate-600 cursor-default">Privacy Policy</span>
        </nav>

        {/* Verified Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-5">
          {/* Psychology Today Badge */}
          <a
            href="https://www.psychologytoday.com/us/therapists/moussia-zaklikovsky-miami-fl/1629484"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2a2927] hover:bg-[#1f1e1d] text-white rounded-lg px-4 py-2 inline-flex items-center gap-2.5 shadow-sm border border-[#3a3937] transition-all hover:scale-[1.02]"
            aria-label="Verified by Psychology Today"
          >
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-inner">
              <svg className="w-3.5 h-3.5 text-[#2a2927]" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[8px] sm:text-[9px] tracking-widest text-slate-300 font-semibold uppercase">
                VERIFIED BY
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight">
                Psychology Today
              </span>
            </div>
          </a>

          {/* EMDRIA Certified Therapist Badge */}
          <a
            href="https://credentials.emdria.org/bcf52088-834e-4283-9b41-45ecd49344db#acc.Yey2EwB9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1b2b36] hover:bg-[#14222b] text-white rounded-lg px-4 py-2 inline-flex items-center gap-2.5 shadow-sm border border-[#2b3e4c] transition-all hover:scale-[1.02]"
            aria-label="EMDRIA Certified Therapist"
          >
            <div className="w-5 h-5 rounded-full bg-[#cca869] flex items-center justify-center flex-shrink-0 shadow-inner">
              <svg className="w-3.5 h-3.5 text-[#1b2b36]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[8px] sm:text-[9px] tracking-widest text-[#cca869] font-semibold uppercase">
                EMDRIA CERTIFIED
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight">
                Therapist™
              </span>
            </div>
          </a>

          {/* OK Clarity Professional Listing Badge */}
          <a
            href="https://okclarity.com/directory/moussia-zaklikovsky/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#242b26] hover:bg-[#1a201c] text-white rounded-lg px-4 py-2 inline-flex items-center gap-2.5 shadow-sm border border-[#344037] transition-all hover:scale-[1.02]"
            aria-label="OK Clarity Professional Listing"
          >
            <div className="w-5 h-5 rounded-full bg-[#629b7a] flex items-center justify-center flex-shrink-0 shadow-inner">
              <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[8px] sm:text-[9px] tracking-widest text-[#8ec5a4] font-semibold uppercase">
                OK CLARITY
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight">
                Professional Listing
              </span>
            </div>
          </a>
        </div>

        {/* Verified textual links */}
        <p className="text-xs text-slate-600 mb-6 font-normal">
          Verified by{' '}
          <a
            href="https://www.psychologytoday.com/us/therapists/moussia-zaklikovsky-miami-fl/1629484"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2f788c] hover:underline"
          >
            Psychology Today
          </a>{' '}
          (badge) ·{' '}
          <a
            href="https://credentials.emdria.org/bcf52088-834e-4283-9b41-45ecd49344db#acc.Yey2EwB9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2f788c] hover:underline"
          >
            EMDRIA Certified Therapist
          </a>{' '}
          (badge) ·{' '}
          <a
            href="https://okclarity.com/directory/moussia-zaklikovsky/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2f788c] hover:underline"
          >
            OK Clarity Professional Listing
          </a>
        </p>

        {/* Legal & Copyright Notice */}
        <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-relaxed max-w-2xl">
          Copyright &copy; 2026 LOGOS Psychotherapy. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
