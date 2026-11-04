import React, { useEffect } from 'react'

export interface SEOProps {
  title: string
  description: string
  canonicalUrl?: string
  ogType?: 'website' | 'article' | 'profile'
  ogImage?: string
  jsonLd?: Record<string, unknown>
}

const DEFAULT_IMAGE = 'https://logos-psychotherapy.com/homepagebg.jpg'
const SITE_NAME = 'Logos Psychotherapy'
const DOMAIN = 'https://logos-psychotherapy.com'

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  jsonLd,
}) => {
  const fullCanonical = canonicalUrl
    ? canonicalUrl.startsWith('http')
      ? canonicalUrl
      : `${DOMAIN}${canonicalUrl.startsWith('/') ? '' : '/'}${canonicalUrl}`
    : DOMAIN

  useEffect(() => {
    // 1. Update Title
    document.title = title

    // 2. Helper to set or create meta tag
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attrName, attrValue)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Standard Description
    setMetaTag('name', 'description', description)

    // Open Graph Meta Tags
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:type', ogType)
    setMetaTag('property', 'og:url', fullCanonical)
    setMetaTag('property', 'og:site_name', SITE_NAME)
    setMetaTag('property', 'og:image', ogImage)

    // Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', ogImage)

    // Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!linkCanonical) {
      linkCanonical = document.createElement('link')
      linkCanonical.setAttribute('rel', 'canonical')
      document.head.appendChild(linkCanonical)
    }
    linkCanonical.setAttribute('href', fullCanonical)

    // Optional page-specific JSON-LD
    let scriptJsonLd = document.querySelector('script[data-page-jsonld]') as HTMLScriptElement | null
    if (jsonLd) {
      if (!scriptJsonLd) {
        scriptJsonLd = document.createElement('script')
        scriptJsonLd.setAttribute('type', 'application/ld+json')
        scriptJsonLd.setAttribute('data-page-jsonld', 'true')
        document.head.appendChild(scriptJsonLd)
      }
      scriptJsonLd.text = JSON.stringify(jsonLd)
    } else if (scriptJsonLd) {
      scriptJsonLd.remove()
    }
  }, [title, description, fullCanonical, ogType, ogImage, jsonLd])

  // React 19 native document metadata hoisting
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={fullCanonical} />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  )
}

export default SEO

