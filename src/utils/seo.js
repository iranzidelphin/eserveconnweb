export const SITE_URL = 'https://eserveconn.com'

const defaultDescription =
  'Eserveconn is a Rwanda-based technology company delivering modern software development, web applications, mobile apps, and digital solutions for businesses and organizations.'

function getOrCreateElement(selector, create) {
  const existing = document.head.querySelector(selector)
  if (existing) return existing

  const element = create()
  document.head.appendChild(element)
  return element
}

function setMeta(attribute, key, content) {
  const meta = getOrCreateElement(`meta[${attribute}="${key}"]`, () => {
    const element = document.createElement('meta')
    element.setAttribute(attribute, key)
    return element
  })
  meta.setAttribute('content', content)
}

function setCanonical(url) {
  const link = getOrCreateElement('link[rel="canonical"]', () => {
    const element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    return element
  })
  link.setAttribute('href', url)
}

function setStructuredData(data) {
  const script = getOrCreateElement('script#structured-data', () => {
    const element = document.createElement('script')
    element.id = 'structured-data'
    element.type = 'application/ld+json'
    return element
  })
  script.textContent = JSON.stringify(data)
}

export function setPageMeta({
  title,
  description = defaultDescription,
  path = '/',
  type = 'website',
  noIndex = false,
  structuredData = [],
}) {
  const url = new URL(path, SITE_URL).toString()
  const canonicalUrl = path === '/' ? SITE_URL + '/' : url

  document.title = title
  setMeta('name', 'description', description)
  setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
  setCanonical(canonicalUrl)

  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', description)
  setMeta('property', 'og:url', canonicalUrl)
  setMeta('property', 'og:type', type)
  setMeta('property', 'og:site_name', 'Eserveconn')
  setMeta('property', 'og:image', `${SITE_URL}/favicon.svg`)

  setMeta('name', 'twitter:card', 'summary')
  setMeta('name', 'twitter:title', title)
  setMeta('name', 'twitter:description', description)
  setMeta('name', 'twitter:image', `${SITE_URL}/favicon.svg`)

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonicalUrl,
    isPartOf: { '@id': `${SITE_URL}/#website` },
  }

  setStructuredData([webPage, ...structuredData])
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Eserveconn',
    legalName: 'Eserveconn Ltd',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/favicon.svg`,
    description: defaultDescription,
    email: 'eserveconne@gmail.com',
    telephone: '+250788836180',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gisenyi',
      addressRegion: 'Rubavu District',
      addressCountry: 'RW',
    },
  }
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Eserveconn',
    alternateName: ['Eserve Conn', 'Eserveconn Ltd'],
    url: `${SITE_URL}/`,
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}
