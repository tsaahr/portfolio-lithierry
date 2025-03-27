"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section key={lang} className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 text-white gap-8">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl mb-2">{t.hero.greeting} 👋</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {t.hero.intro} <span className="text-purple-400">Lithierry</span>
        </h1>
        <h3 className="text-xl md:text-2xl mb-6 min-h-[40px]">{t.hero.fullstack}</h3>

        <Link href="https://wa.me/5553991799058" target="_blank" className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-xl transition duration-300">
          {t.hero.button}
        </Link>
      </div>

      <div className="w-full md:w-1/2 max-w-[400px] mx-auto">
        <Image src="/images/dev.png" alt={t.hero.imageAlt} width={400} height={400} className="w-full h-auto object-contain" priority />
      </div>
    </section>
  );
}
