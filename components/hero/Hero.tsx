'use client'

import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 text-white">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl mb-2">Hi There! 👋</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          I&apos;M <span className="text-purple-400">LITHIERRY</span>
        </h1>
        <h3 className="text-xl md:text-2xl">
          <Typewriter
            words={['Salesforce Developer', 'Fullstack Developer']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={2000}
          />
        </h3>
      </div>

      <div className="flex-1 mt-10 md:mt-0">
        <Image
          src="/images/dev.png"
          alt="Developer illustration"
          width={500}
          height={500}
          className="mx-auto"
        />
      </div>
    </section>
  )
}
