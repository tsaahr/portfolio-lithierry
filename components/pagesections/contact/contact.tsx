'use client';
import { MessageCircle, Linkedin, Github, Globe } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t, lang } = useLanguage();

  const whatsappLink = `https://wa.me/5553991799058?text=${encodeURIComponent(t.contact.whatsappText)}`;

  return (
    <section
      key={lang}
      id="contact"
      className="h-screen snap-start flex justify-center items-center px-4 text-zinc-100"
    >
      <div className="w-full max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-400">
          {t.contact.title}
        </h2>

        <p className="mb-6 text-zinc-300">{t.contact.whatsappPrompt}</p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-5 py-3 rounded text-white transition"
        >
          <MessageCircle size={20} />
          {t.contact.whatsappButton}
        </a>

        <div className="mt-10 flex justify-center space-x-6 text-purple-400">
          <a
            href="https://www.linkedin.com/in/lithierrydevforce/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/tsaahr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.salesforce.com/trailblazer/lithy-silva"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition"
          >
            <Globe size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
