import Image from "next/image"

export default function Footer() {
  return (
    <section className="relative flex items-center justify-center min-h-screen text-white">
      <Image
        alt="Mountains"
        src="/img38-2@2x.png"
        layout='fill'
        objectFit="cover"
        className="absolute"
      />

      <div className="z-10 text-center">
        <header className="glow-effect p-8 mb-40" style={{ textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de' }}>
          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl custom-font tracking-widest underline-custom ">MINERALS</h1>
        </header>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-4 py-8 mx-auto bg-black bg-opacity-50 rounded-lg mb-40">
          <button className="bg-metal-800 hover-metal-800 tracking-widest text-white font-bold py-2 px-4 rounded-full custom-font transition duration-300 ease-in-out transform hover:-translate-y-1">
            THE REFINERY IS<br/>
            CURRENTLY CLOSED
          </button>
        </div>
      </div>
    </section>
  )
}
