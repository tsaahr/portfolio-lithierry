'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

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

        {/* Botão mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6">
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

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm px-6 pb-4 pt-2">
          <nav className="flex flex-col space-y-4">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
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
      )}
    </header>
  )
}
