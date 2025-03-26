"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, changeLanguage, t } = useLanguage(); // <-- Agora usa o contexto global

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.menu.inicio, href: "#home" },
    { label: t.menu.projetos, href: "#projects" },
    { label: t.menu.servicos, href: "#services" },
    { label: t.menu.habilidades, href: "#skills" },
    { label: t.menu.sobre, href: "#about" },
    { label: t.menu.contato, href: "#contact" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-black/10 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#home" className="text-xl font-bold text-white">
          Lithierry.dev
        </a>

        <button
          onClick={() => changeLanguage(lang === "pt" ? "en" : "pt")}
          className="flex items-center gap-2 text-white text-sm font-medium border px-3 py-1 rounded-md absolute left-1/2 transform -translate-x-1/2 hover:bg-white/20 transition"
        >
          <span className="w-5 h-5">
            {lang === "en" ? (
              <img src="/images/flags/eua.webp" alt="English" className="w-full h-full" />
            ) : (
              <img src="/images/flags/br.webp" alt="Português" className="w-full h-full" />
            )}
          </span>
          {lang === "pt" ? "PT" : "EN"}
        </button>


        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden md:flex space-x-6">
          {navItems.map(({ label, href }) => (
            <a key={href} href={href} className="text-white hover:text-purple-400 transition-colors text-sm font-medium">
              {label}
            </a>
          ))}
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm px-6 pb-4 pt-2">
          <nav className="flex flex-col space-y-4">
            {navItems.map(({ label, href }) => (
              <a key={href} href={href} onClick={() => setIsOpen(false)} className="text-white hover:text-purple-400 transition-colors text-base">
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
