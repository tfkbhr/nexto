import type { NextPage } from 'next'

import SEO from '@/components/SEO'
import meta from '@/configs/meta'

const Home: NextPage = () => {
  return (
    <>
      <SEO meta={meta.about} />
      About
    </>
  )
}

export default Home
