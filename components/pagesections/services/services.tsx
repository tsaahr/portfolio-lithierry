'use client';

import { Briefcase, Monitor, Smartphone, Feather, Send, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext'; 

export default function Services() {
  const { t, lang } = useLanguage(); // Pegando idioma e traduções

  const services = [
    {
      icon: <Monitor className="w-8 h-8 text-purple-500" />,
      title: t.services.list[0].title,
      description: t.services.list[0].description,
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: t.services.list[1].title,
      description: t.services.list[1].description,
    },
    {
      icon: <Briefcase className="w-8 h-8 text-purple-500" />,
      title: t.services.list[2].title,
      description: t.services.list[2].description,
    },
    {
      icon: <Feather className="w-8 h-8 text-purple-500" />,
      title: t.services.list[3].title,
      description: t.services.list[3].description,
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      title: t.services.list[4].title,
      description: t.services.list[4].description,
    },
    {
      icon: <Send className="w-8 h-8 text-purple-500" />,
      title: t.services.list[5].title,
      description: t.services.list[5].description,
    },
  ];

  return (
    <section key={lang} className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-400 text-center">
        {t.services.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-zinc-800 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/20 transition duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-zinc-300 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
