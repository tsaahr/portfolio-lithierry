'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/">
          <span className="text-xl font-bold text-white">Lithierry.dev</span>
        </Link>

        {/* Navegação */}
        <nav className="space-x-6">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`transition ${
                  isActive ? 'text-purple-400 font-semibold' : 'text-white hover:text-purple-400'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
