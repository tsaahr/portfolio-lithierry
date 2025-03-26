import './globals.css';
import Header from '@/components/header/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfólio | Lithierry.dev',
  description: 'Portfólio pessoal do Lithierry, desenvolvedor front-end com foco em Next.js, TypeScript e TailwindCSS.',
  openGraph: {
    type: 'website',
    url: 'https://portfolio-lithierry.vercel.app',
    title: 'Portfólio | Lithierry.dev',
    description: 'Desenvolvedor front-end especializado em Next.js, TypeScript e TailwindCSS.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="relative min-h-screen text-white pt-16 overflow-x-hidden">
        {/* Background fixo com overlay escuro */}
        <div
          className="fixed inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/background.jpeg')",
            filter: 'brightness(0.3)',
          }}
        />

        <div className="relative z-10">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
