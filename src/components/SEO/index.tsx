import { NextSeo } from 'next-seo'

interface SEO {
  title: string
  description: string
}

interface SEOProps {
  meta: SEO
}

const SEO = ({ meta }: SEOProps) => (
  <NextSeo
    title={meta.title}
    description={meta.description}
    canonical="http://canonical.co"
    openGraph={{
      url: 'http://url.co',
      title: meta.title,
      description: meta.description,
      images: [{ url: 'https://www.example.ie/og-image.jpg' }],
    }}
  />
)

export default SEO
