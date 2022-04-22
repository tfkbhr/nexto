import cx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  return (
    <nav className="flex h-28 items-center justify-center">
      <ul>
        <li className="inline-block">
          <Link href="/">
            <a
              className={cx('flex items-center justify-center', 'h-10 rounded-l-full pl-6 pr-5', 'text-sm ', [
                router.pathname === '/' ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400',
              ])}
            >
              Home
            </a>
          </Link>
        </li>
        <li className="inline-block">
          <Link href="/about">
            <a
              className={cx('flex items-center justify-center', 'h-10 rounded-r-full pl-5 pr-6', 'text-sm', [
                router.pathname === '/about' ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400',
              ])}
            >
              About
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
