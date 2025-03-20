'use client'
import React, { useState } from 'react'
import { Mail, Send, Linkedin, Github, Globe, MessageCircle } from 'lucide-react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    })

    if (res.ok) {
      setStatus('Message sent!')
      setForm({ name: '', email: '', message: '' })
    } else {
      setStatus('Something went wrong. Please try again.')
    }
  }

  const whatsappLink = `https://wa.me/5553991799058?text=Ol%C3%A1,%20Lithierry!%20Vi%20seu%20portf%C3%B3lio%20e%20me%20interessei%20pelo%20seu%20trabalho.%20`

  return (
    <section
      id="contact"
      className="h-screen snap-start flex justify-center items-center px-4 text-zinc-100"
    >
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-400 text-center">
          Contact
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Your name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Your email"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Your message"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded text-white flex items-center gap-2"
          >
            <Send size={18} />
            Send Email
          </button>

          {status && (
            <p
              className={`text-sm mt-2 ${
                status === 'Message sent!'
                  ? 'text-green-500'
                  : status === 'Sending...'
                  ? 'text-yellow-400'
                  : 'text-red-500'
              }`}
            >
              {status}
            </p>
          )}
        </form>

        <div className="mt-10 text-center">
          <p className="mb-2">Prefer WhatsApp?</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition"
          >
            <MessageCircle size={20} />
            Talk via WhatsApp
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
