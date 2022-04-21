import type { NextPage } from 'next'

import SEO from '@/components/SEO'
import meta from '@/configs/meta'

const Home: NextPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-900 font-semibold uppercase tracking-widest text-slate-300">
      <SEO meta={meta.about} />
      About
    </div>
  )
}

export default Home
