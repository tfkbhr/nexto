import cx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface ItemProps {
  path: string
  name: string
}

const Item = ({ path, name }: ItemProps) => {
  const router = useRouter()

  return (
    <li className="group inline-block">
      <Link href={path}>
        <a
          className={cx(
            'flex items-center justify-center',
            'h-10 pl-6 pr-5 group-first:rounded-l-full group-last:rounded-r-full',
            'text-sm hover:text-slate-200',
            [router.pathname === path ? 'bg-primary-500 text-white' : 'bg-slate-800 text-slate-400']
          )}
        >
          {name}
        </a>
      </Link>
    </li>
  )
}

interface NavProps {
  children: React.ReactNode
}

const Nav = ({ children }: NavProps) => (
  <nav className="flex h-28 items-center justify-center">
    <ul>{children}</ul>
  </nav>
)

Nav.Item = Item

export default Nav
