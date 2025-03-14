'use client'
import { Github, Linkedin, BookOpen } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-black/50 text-white mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-4 md:space-y-0">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Lithierry.dev. All rights reserved.
        </p>

        <div className="flex space-x-6">
          <a
            href="https://www.salesforce.com/trailblazer/lithy-silva"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
            aria-label="Trailhead"
          >
            <BookOpen size={20} />
          </a>

          <a
            href="https://github.com/tsaahr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/lithierrydevforce/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
