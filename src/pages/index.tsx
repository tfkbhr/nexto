import { Icon } from '@iconify/react'
import type { NextPage } from 'next'

import SEO from '@/components/SEO'
import meta from '@/configs/meta'

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-slate-900">
      <SEO meta={meta.home} />
      <main className="flex h-[calc(100vh-4rem)] items-center justify-center">
        <Icon icon="ri:skull-2-line" className=" mr-4 text-6xl text-indigo-500" />
        <h1 className="font-semibold uppercase tracking-widest text-slate-300">Nexto</h1>
      </main>
      <footer className="inline-flex h-16 w-full items-center justify-center text-sm text-slate-400">
        <Icon icon="tabler:brand-nextjs" className="mr-1" />
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="mr-1 hover:text-white">
          Next.js
        </a>
        Boilerplate by
        <a
          href="https://github.com/tfkbhr/nexto"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 hover:text-green-500"
        >
          @tfkbhr
        </a>
        . Powered by <Icon icon="tabler:brand-vercel" className="mx-1" />
        <a
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Vercel
        </a>
      </footer>
    </div>
  )
}

export default Home
