'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo ou nome */}
        <Link href="/">
          <span className="text-xl font-bold text-white">Lithierry.dev</span>
        </Link>

        {/* Navegação */}
        <nav className="space-x-6">
          <Link href="/" className="text-white hover:text-purple-400 transition">Início</Link>
          <Link href="#projects" className="text-white hover:text-purple-400 transition">Projetos</Link>
          <Link href="#about" className="text-white hover:text-purple-400 transition">Sobre</Link>
          <Link href="#contact" className="text-white hover:text-purple-400 transition">Contato</Link>
        </nav>
      </div>
    </header>
  )
}

