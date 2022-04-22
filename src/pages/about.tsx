import { Icon } from '@iconify/react'
import type { NextPage } from 'next'

import Layout from '@/components/Layout'
import meta from '@/configs/meta'

const About: NextPage = () => {
  return (
    <Layout meta={meta.about}>
      <Icon icon="akar-icons:info" className=" mr-4 text-6xl text-indigo-500" />
      <h1 className="font-semibold uppercase tracking-widest text-slate-300">About</h1>
    </Layout>
  )
}

export default About
