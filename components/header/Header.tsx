'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all ${
        scrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-black/10 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#home" className="text-xl font-bold text-white">
          Lithierry.dev
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden md:flex space-x-6">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-white hover:text-purple-400 transition-colors text-sm font-medium"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm px-6 pb-4 pt-2">
          <nav className="flex flex-col space-y-4">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-purple-400 transition-colors text-base"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
