import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfólio | Lithierry.dev',
  description: 'Portfólio pessoal do Lithierry, desenvolvedor front-end com foco em Next.js, TypeScript e TailwindCSS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="relative min-h-screen text-white">
        {/* Background fixo com overlay escuro */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/background.jpeg')",
            filter: 'brightness(0.3)',
          }}
        />

        <div className="relative z-10">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
