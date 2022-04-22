import getConfig from 'next/config'
import { NextSeo } from 'next-seo'

const { publicRuntimeConfig } = getConfig()

interface SEO {
  path?: string
  title: string
  description: string
}

export interface SEOProps {
  meta: SEO
}

const SEO = ({ meta }: SEOProps) => (
  <NextSeo
    titleTemplate={`%s - ${publicRuntimeConfig.siteName}`}
    title={meta.title}
    description={meta.description}
    canonical={[publicRuntimeConfig.siteUrl, meta.path].join('')}
    openGraph={{
      type: 'website',
      locale: 'en_IE',
      site_name: publicRuntimeConfig.siteName,
      url: [publicRuntimeConfig.siteUrl, meta.path].join(''),
      title: meta.title,
      description: meta.description,
      images: [{ url: 'https://www.example.ie/og-image.jpg' }],
    }}
  />
)

export default SEO
