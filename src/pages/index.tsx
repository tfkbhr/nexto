import type { NextPage } from 'next'
import SEO from '@/components/SEO'
import meta from '@/configs/meta'

import { Icon } from '@iconify/react'

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-slate-50">
      <SEO meta={meta.home} />
      <main className="flex h-[calc(100vh-4rem)] items-center justify-center">
        <Icon icon="ri:skull-2-line" className=" mr-4 text-6xl text-indigo-500" />
        <h1 className="font-semibold uppercase tracking-widest text-slate-800">Nexto</h1>
      </main>
      <footer className="inline-flex h-16 w-full items-center justify-center text-sm text-slate-600">
        <Icon icon="logos:nextjs-icon" className="mr-1" />
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-1 decoration-slate-300 decoration-dotted hover:text-cyan-500"
        >
          Next.js
        </a>
        Boilerplate by
        <a
          href="https://github.com/tfkbhr/nexto"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 decoration-slate-300 decoration-dotted hover:text-green-500"
        >
          @tfkbhr
        </a>
        . Powered by <Icon icon="logos:vercel-icon" className="mx-1 " />{' '}
        <a
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
          className="decoration-slate-300 decoration-dotted hover:text-yellow-500"
        >
          Vercel
        </a>
      </footer>
    </div>
  )
}

export default Home
