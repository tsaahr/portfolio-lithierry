'use client';

import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 text-white gap-8">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl mb-2">Hi there! 👋</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          I&apos;m <span className="text-purple-400">Lithierry</span>
        </h1>
        <h3 className="text-xl md:text-2xl mb-6 min-h-[40px]">
          <Typewriter
            words={['Full-stack Developer', 'Problem Solver', 'Creative Builder']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={2000}
          />
        </h3>

        <Link
          href="https://wa.me/5553991799058?text=Ol%C3%A1,%20Lithierry!%20Vi%20seu%20portf%C3%B3lio%20e%20me%20interessei%20pelo%20seu%20trabalho."
          target="_blank"
          className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-xl transition duration-300"
        >
          Let&apos;s Connect
        </Link>
      </div>

      {/* Imagem */}
      <div className="w-full md:w-1/2 max-w-[400px] mx-auto">
        <Image
          src="/images/dev.png"
          alt="Developer illustration"
          width={400}
          height={400}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
