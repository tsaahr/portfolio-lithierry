'use client';
import React, { useState } from 'react'
import { Mail, Send, Linkedin, Github, Globe, MessageCircle } from 'lucide-react'
import { useLanguage } from "@/context/LanguageContext"; // Importando o contexto de idioma

export default function ContactSection() {
  const { t, lang } = useLanguage(); // Pegando traduções do contexto
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus(t.contact.sending)

    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    })

    if (res.ok) {
      setStatus(t.contact.success)
      setForm({ name: '', email: '', message: '' })
    } else {
      setStatus(t.contact.error)
    }
  }

  const whatsappLink = `https://wa.me/5553991799058?text=${encodeURIComponent(t.contact.whatsappText)}`

  return (
    <section
      key={lang} // Garante atualização ao mudar idioma
      id="contact"
      className="h-screen snap-start flex justify-center items-center px-4 text-zinc-100"
    >
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-400 text-center">
          {t.contact.title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder={t.contact.namePlaceholder}
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label={t.contact.namePlaceholder}
          />
          <input
            type="email"
            name="email"
            placeholder={t.contact.emailPlaceholder}
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label={t.contact.emailPlaceholder}
          />
          <textarea
            name="message"
            placeholder={t.contact.messagePlaceholder}
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label={t.contact.messagePlaceholder}
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded text-white flex items-center gap-2"
          >
            <Send size={18} />
            {t.contact.sendButton}
          </button>

          {status && (
            <p
              className={`text-sm mt-2 ${
                status === t.contact.success
                  ? 'text-green-500'
                  : status === t.contact.sending
                  ? 'text-yellow-400'
                  : 'text-red-500'
              }`}
            >
              {status}
            </p>
          )}
        </form>

        <div className="mt-10 text-center">
          <p className="mb-2">{t.contact.whatsappPrompt}</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition"
          >
            <MessageCircle size={20} />
            {t.contact.whatsappButton}
          </a>
        </div>

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
  )
}
