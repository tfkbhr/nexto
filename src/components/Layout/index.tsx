import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SEO, { SEOProps } from '@/components/SEO'

interface LayoutProps extends SEOProps {
  children: React.ReactNode
}

const Layout = ({ meta, children }: LayoutProps) => (
  <div className="h-screen bg-slate-900">
    <SEO meta={meta} />
    <Header />
    <main className="flex h-[calc(100vh-11rem)] items-center justify-center">{children}</main>
    <Footer />
  </div>
)

export default Layout
