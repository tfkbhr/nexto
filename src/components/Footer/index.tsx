import { Icon } from '@iconify/react'

const Footer = () => (
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
)

export default Footer
