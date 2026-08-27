const siteUrl = 'https://dominikkrystul.com'
const socialImageUrl = `${siteUrl}/social-preview.png`

interface SeoMetadata {
  title: string
  description: string
  path: string
}

function setMeta(selector: string, content: string) {
  document
    .querySelector<HTMLMetaElement>(selector)
    ?.setAttribute('content', content)
}

export function updateSeoMetadata({ title, description, path }: SeoMetadata) {
  const canonicalUrl = `${siteUrl}${path === '/' ? '/' : path}`

  document.title = title
  document
    .querySelector<HTMLLinkElement>('link[rel="canonical"]')
    ?.setAttribute('href', canonicalUrl)
  setMeta('meta[name="description"]', description)
  setMeta('meta[property="og:title"]', title)
  setMeta('meta[property="og:description"]', description)
  setMeta('meta[property="og:url"]', canonicalUrl)
  setMeta('meta[property="og:image"]', socialImageUrl)
  setMeta('meta[name="twitter:title"]', title)
  setMeta('meta[name="twitter:description"]', description)
  setMeta('meta[name="twitter:image"]', socialImageUrl)
}
