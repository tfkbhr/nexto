import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const SEO = {
  titleTemplate: `%s - ${publicRuntimeConfig.siteName}`,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    site_name: publicRuntimeConfig.siteName,
  },
}

export default SEO
