import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen text-white">
      <Image
        alt="Mountains"
        src="/bg.jpg"
        layout='fill'
        objectFit="cover"
        className="absolute"
      />

      <div className="z-10 text-center tracking-widest" >
        <header className="glow-effect p-8 mb-40" style={{ textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de' }}>
          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl custom-font underline-custom ">MINERALS</h1>
        </header>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-4 py-8 mx-auto bg-black bg-opacity-50 rounded-lg mb-40">
          <h2 className="text-lg sm:text-base md:text-lg lg:text-2xl roboto-mono-font mb-6">Start your quest for the multi-chain gems and glow</h2>
          <Link href="/" className="inline-block bg-gradient-to-r from-purple-600 to-purple-900 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg active:scale-90 transition duration-150 transform hover:scale-110 animate-bounce">
            COLLECT NOW
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero