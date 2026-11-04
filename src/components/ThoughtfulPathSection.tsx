import React from 'react'
import { HowTherapyWorksSection } from './HowTherapyWorksSection'
import { OurApproachSection } from './OurApproachSection'

interface ThoughtfulPathSectionProps {
  imageSrc?: string
  ctaHref?: string
}

export const ThoughtfulPathSection: React.FC<ThoughtfulPathSectionProps> = ({
  imageSrc = '/Home 3.jpeg',
  ctaHref = '#contact',
}) => {
  return (
    <>
      <HowTherapyWorksSection />
      <OurApproachSection imageSrc={imageSrc} ctaHref={ctaHref} />
    </>
  )
}

export default ThoughtfulPathSection
