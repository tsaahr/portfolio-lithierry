'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
  const { t, lang } = useLanguage(); // Pegando o idioma e a função de tradução

  const projects = [
    {
      title: t.projects.list[0].title,
      url: 'https://loja-e-lar.vercel.app',
      description: t.projects.list[0].description,
    },
    {
      title: t.projects.list[1].title,
      url: 'https://gaveta-de-mulher.vercel.app',
      description: t.projects.list[1].description,
    },
    {
      title: t.projects.list[2].title,
      url: 'https://sabor-e-arte-mauve.vercel.app',
      description: t.projects.list[2].description,
    },
  ];

  return (
    <section key={lang} className="min-h-screen flex flex-col justify-center items-center px-6 py-20 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-400 text-center">
        {t.projects.title}
      </h2>

      <div className="grid gap-8 md:grid-cols-2 w-full max-w-5xl">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.url}
            target="_blank"
            className="p-6 rounded-2xl bg-gray-800 hover:bg-gray-700 transition-colors shadow-md flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-2 text-indigo-400">{project.title}</h3>
            <p className="text-lg text-gray-300 line-clamp-2 h-[3.5rem]">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
