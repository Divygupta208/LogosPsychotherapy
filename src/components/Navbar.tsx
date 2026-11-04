import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export interface NavItem {
  label: string
  href: string
  isRoute?: boolean
  active?: boolean
}

export interface NavbarProps {
  currentPath?: string
  logoSrc?: string
  theme?: 'light' | 'dark'
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  logoSrc = '/logoImage.png',
  theme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Use provided currentPath or fallback to current router pathname
  const activePath = currentPath || location.pathname || '/'
  const normalizedPath = (activePath || '/').replace(/\/$/, '') || '/'

  // Auto-detect theme: About, FAQ, Contact use dark theme (white text + cream active)
  // Home, EMDR Therapy, Treatment use light theme (black text + blue active)
  const isDark =
    theme !== undefined
      ? theme === 'dark'
      : ['/about', '/faq', '/contact'].includes(normalizedPath)

  const navItems: NavItem[] = [
    { label: 'HOME', href: '/', isRoute: true, active: normalizedPath === '/' },
    { label: 'ABOUT', href: '/about', isRoute: true, active: normalizedPath === '/about' },
    { label: 'TREATMENT', href: '/treatment', isRoute: true, active: normalizedPath === '/treatment' },
    {
      label: 'EMDR THERAPY',
      href: '/emdr-therapy',
      isRoute: true,
      active: normalizedPath === '/emdr-therapy' || normalizedPath === '/emdr',
    },
    { label: 'FAQ', href: '/faq', isRoute: true, active: normalizedPath === '/faq' },
    { label: 'CONTACT', href: '/contact', isRoute: true, active: normalizedPath === '/contact' },
  ]

  return (
    <header className="absolute top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="w-full px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 pt-6 sm:pt-8 pb-4">
        <div className="flex items-center justify-between">
          {/* Brand Logo Image */}
          <Link
            to="/"
            className="group flex items-center hover:opacity-90 transition-all duration-200"
            aria-label="LOGOS Psychotherapy Home"
          >
            <img
              src={logoSrc}
              alt="LOGOS Psychotherapy"
              className={`h-10 sm:h-12 md:h-14 w-auto object-contain select-none transition-all duration-300 ${isDark
                  ? 'brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]'
                  : 'drop-shadow-sm'
                }`}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-5 lg:space-x-7 xl:space-x-9"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const isActive = item.active

              // Compact, elegant link text size: text-[12.5px] lg:text-[13px]
              // Dynamic colors based on background:
              // Dark background: white text, cream (#dfc9a7) active
              // Light background: black/slate-900 text, brand blue (#0e5c6e) active
              const linkClasses = `relative text-[12.5px] lg:text-[13px] tracking-[0.18em] font-medium transition-all duration-200 py-1.5 group ${isDark
                  ? isActive
                    ? 'text-[#dfc9a7] font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]'
                    : 'text-white/90 hover:text-[#dfc9a7] drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]'
                  : isActive
                    ? 'text-[#0e5c6e] font-semibold'
                    : 'text-slate-900/85 hover:text-[#0e5c6e]'
                }`

              const content = (
                <>
                  {/* Active top pill indicator */}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className={`absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full transition-all duration-200 ${isDark
                          ? 'bg-[#dfc9a7] shadow-[0_0_8px_rgba(223,201,167,0.7)]'
                          : 'bg-[#0e5c6e]'
                        }`}
                    />
                  )}
                  {item.label}
                  {/* Subtle underline hover effect */}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] transform transition-transform duration-200 origin-left ${isDark ? 'bg-[#dfc9a7]' : 'bg-[#0e5c6e]'
                      } ${isActive
                        ? 'scale-x-0'
                        : 'scale-x-0 group-hover:scale-x-100 hover:scale-x-100'
                      }`}
                  />
                </>
              )

              return item.isRoute ? (
                <Link key={item.label} to={item.href} className={linkClasses}>
                  {content}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className={linkClasses}>
                  {content}
                </a>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 transition-colors ${isDark
                ? 'text-white hover:text-[#dfc9a7] focus:ring-white/40'
                : 'text-slate-900 hover:text-[#0e5c6e] focus:ring-teal-700/40'
              }`}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full rounded transition-all duration-300 ${isDark ? 'bg-white' : 'bg-slate-900'
                  } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`h-0.5 w-full rounded transition-all duration-300 ${isDark ? 'bg-white' : 'bg-slate-900'
                  } ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`h-0.5 w-full rounded transition-all duration-300 ${isDark ? 'bg-white' : 'bg-slate-900'
                  } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden mt-4 pt-4 pb-6 px-4 rounded-2xl shadow-2xl transition-all duration-300 animate-fadeIn ${isDark
                ? 'bg-[#141b20]/95 backdrop-blur-md border border-white/10 text-white'
                : 'bg-white/95 backdrop-blur-md border border-slate-200/60 shadow-xl text-slate-800'
              }`}
          >
            <nav className="flex flex-col space-y-3.5">
              {navItems.map((item) => {
                const itemClasses = `text-sm tracking-[0.16em] py-2 px-3.5 rounded-lg font-medium transition-colors ${item.active
                    ? isDark
                      ? 'bg-white/10 text-[#dfc9a7] font-semibold'
                      : 'bg-teal-50 text-[#0e5c6e] font-semibold'
                    : isDark
                      ? 'text-white/90 hover:bg-white/5 hover:text-[#dfc9a7]'
                      : 'text-slate-800 hover:bg-slate-100/70 hover:text-[#0e5c6e]'
                  }`

                return item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={itemClasses}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={itemClasses}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
