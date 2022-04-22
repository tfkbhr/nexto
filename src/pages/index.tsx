import { Icon } from '@iconify/react'
import type { NextPage } from 'next'

import Layout from '@/components/Layout'
import meta from '@/configs/meta'

const Home: NextPage = () => {
  return (
    <Layout meta={meta.home}>
      <Icon icon="ri:skull-2-line" className=" mr-4 text-6xl text-indigo-500" />
      <h1 className="font-semibold uppercase tracking-widest text-slate-300">Nexto</h1>
    </Layout>
  )
}

export default Home
