'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-blue-600">Lithierry.dev</h1>
      <nav className="space-x-6 text-gray-700 font-medium">
        <Link href="/">Início</Link>
        <Link href="/projetos">Projetos</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </header>
  );
}
