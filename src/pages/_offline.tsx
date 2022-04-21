import type { NextPage } from 'next'

import SEO from '@/components/SEO'
import meta from '@/configs/meta'

const Offline: NextPage = () => (
  <>
    <SEO meta={meta.offline} />
    <div className="h-screen bg-slate-100">
      <main className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-slate-300">You are offline</h1>
        </div>
      </main>
    </div>
  </>
)

export default Offline
