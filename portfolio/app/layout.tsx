import './globals.css';
import Header from '@/components/header/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfólio | Lithierry.dev',
  description: 'Portfólio pessoal do Lithierry, desenvolvedor front-end com foco em Next.js, TypeScript e TailwindCSS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-800">
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
