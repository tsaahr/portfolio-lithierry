'use client';

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t, lang } = useLanguage();

  return (
    <section
      key={lang}
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 text-zinc-100"
    >
      <div className="max-w-4xl p-8 rounded-2xl shadow-lg border border-zinc-700">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-purple-400 text-center">
          {t.about.title}
        </h2>

        <div className="text-xl leading-relaxed text-zinc-300">
          {t.about.text.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}