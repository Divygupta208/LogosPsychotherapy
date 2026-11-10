import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface ContactHeroSectionProps {
  backgroundImage?: string
  stonesImage?: string
}

export const ContactHeroSection: React.FC<ContactHeroSectionProps> = ({
  backgroundImage = '/contact 1.jpg.jpeg',

}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    comments: '',
  })
  const [captchaChecked, setCaptchaChecked] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!captchaChecked) {
      alert('Please complete the verification checkbox.')
      return
    }
    setSubmitted(true)
  }

  return (
    <section
      className="relative w-full min-h-[740px] sm:min-h-[800px] lg:min-h-[860px] flex items-center justify-center bg-cover bg-center overflow-hidden pt-36 sm:pt-40 md:pt-44 pb-36 sm:pb-44 md:pb-52 px-6 sm:px-10 md:px-14 lg:px-20 text-white"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
      aria-label="Contact and Consultation Inquiry"
    >
      {/* Dark gradient overlay scrim ensuring high contrast over the white rocks and blue sea */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/50 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Grid: Left Narrative + Right Form */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-14 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column: Heading, Paragraph & Divider Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col justify-start"
          >
            {/* Main Heading */}
            <h1 className="tracking-tight mb-6 sm:mb-8">
              <span className="block text-[#dfc9a7] text-3xl sm:text-4xl md:text-5xl font-light font-display tracking-tight drop-shadow-sm mb-2 sm:mb-3">
                Begin Where You Are
              </span>
              <span className="block font-script text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal leading-[1.05] tracking-wide drop-shadow-md">
                Take The First Step.
              </span>
            </h1>

            {/* Explanatory Paragraph */}
            <p className="text-white/95 text-xs sm:text-[13.5px] md:text-[14.5px] leading-relaxed font-light max-w-xl mb-8 sm:mb-10 drop-shadow-sm">
              Connection starts with intention. If you&apos;re ready to explore support, ask questions, or take the next step, Logos Psychotherapy is here. Searching for a therapist near you? Reach out to schedule therapy or book a therapy appointment. Online sessions are available in Florida, New Jersey and New York.
            </p>

            {/* Subtle Divider Line */}
            <div className="w-full max-w-lg border-t border-white/25" aria-hidden="true" />
          </motion.div>

          {/* Right Column: Underlined Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-6 w-full"
          >
            {submitted ? (
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center animate-fadeIn shadow-xl">
                <h3 className="text-2xl font-light text-white mb-2">Thank you for reaching out.</h3>
                <p className="text-slate-200 text-sm">
                  Your message has been received. I will be in touch with you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ fullName: '', email: '', phone: '', comments: '' })
                    setCaptchaChecked(false)
                  }}
                  className="mt-6 text-xs uppercase tracking-[0.2em] text-[#cca869] hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
                {/* Full Name */}
                <div>
                  <label htmlFor="contactFullName" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="contactFullName"
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-transparent border-b border-white/40 pb-2.5 text-sm sm:text-base text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contactEmail" className="sr-only">
                    Email
                  </label>
                  <input
                    id="contactEmail"
                    type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/40 pb-2.5 text-sm sm:text-base text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contactPhone" className="sr-only">
                    Phone
                  </label>
                  <input
                    id="contactPhone"
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-white/40 pb-2.5 text-sm sm:text-base text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Additional Comments or Questions */}
                <div>
                  <label htmlFor="contactComments" className="sr-only">
                    Additional comments or questions
                  </label>
                  <textarea
                    id="contactComments"
                    rows={3}
                    placeholder="Additional comments or questions"
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    className="w-full bg-transparent border-b border-white/40 pb-2 text-sm sm:text-base text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                {/* Captcha Verification Box */}
                <div className="pt-2">
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3">
                    <input
                      id="contactCaptcha"
                      type="checkbox"
                      checked={captchaChecked}
                      onChange={(e) => setCaptchaChecked(e.target.checked)}
                      className="w-5 h-5 rounded border-white/50 text-teal-700 focus:ring-teal-700 focus:ring-offset-0 cursor-pointer accent-[#cca869]"
                    />
                    <label htmlFor="contactCaptcha" className="text-xs sm:text-sm text-white/90 select-none cursor-pointer">
                      I&apos;m not a robot
                    </label>
                    <span className="text-[10px] text-white/50 pl-2">CAPTCHA</span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="text-xs sm:text-sm tracking-[0.24em] uppercase font-semibold text-[#dfc9a7] hover:text-white pb-1.5 border-b border-[#dfc9a7] hover:border-white transition-all cursor-pointer"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default ContactHeroSection
