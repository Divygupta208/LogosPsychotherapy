
import { SEO } from '../components/SEO'
import { Navbar } from '../components/Navbar'
import { ContactHeroSection } from '../components/ContactHeroSection'
import { Footer } from '../components/Footer'

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f5f3ee] text-slate-800 flex flex-col selection:bg-[#0e5c6e] selection:text-white">
      <SEO
        title="Contact Logos Psychotherapy | Schedule Therapy"
        description="Contact Logos Psychotherapy to schedule consultation or book a therapy appointment. online sessions in New Jersey and Florida."
        canonicalUrl="/contact"
        ogImage="https://logos-psychotherapy.com/contact%201.jpg.jpeg"
      />

      {/* Top Navigation Bar with active Contact tab (Dark Hero Theme) */}
      <Navbar currentPath="/contact" logoSrc="/logoImage.png" theme="dark" />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Full-bleed Contact Hero Section with Milos landscape, inquiry form, and zen stones */}
        <ContactHeroSection
          backgroundImage="/contact 1.jpg.jpeg"
          stonesImage="/contact 2.jpg.jpeg"
        />
      </main>

      {/* Global Footer (Reusable) */}
      <Footer />
    </div>
  )
}

export default Contact
