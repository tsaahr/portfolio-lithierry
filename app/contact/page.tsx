'use client'
import { useState } from 'react'

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

  const whatsappLink = `https://wa.me/5592984364714?text=Hi%20Lithierry%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk!`

  return (
    <section id="contact" className="max-w-3xl mx-auto py-16 px-4 text-white">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 rounded text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 rounded text-black"
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-2 rounded text-black"
        />
        <button type="submit" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white">
          Send Email
        </button>
        {status && <p className="text-sm mt-2">{status}</p>}
      </form>

      <div className="mt-8">
        <p className="mb-2">Prefer WhatsApp?</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
        >
          Talk via WhatsApp
        </a>
      </div>
    </section>
  )
}
