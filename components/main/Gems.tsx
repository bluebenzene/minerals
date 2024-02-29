import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Gems() {
    return (
        <section className="relative flex items-center justify-center min-h-screen">
            <Image
                alt="Mountains"
                src="/bg2.jpg"
                layout='fill'
                objectFit="cover"
                className="absolute"
            />

            <div className="z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
                <div className='flex flex-col items-center justify-center py-10 max-w-sm mx-auto'>
                    <p className='text-white text-center text-xl tracking-wides '>Genesis Minerals have been extracted on Alephium</p>
                    <Image
                        alt="gem1"
                        src="/11@2x.png"
                        width={280}
                        height={280}
                        className="object-contain sm:object-cover"
                    />
                    <Link href='/' className="mt-4 bg-gradient-to-r from-purple-600 to-purple-900 tracking-wide text-white font-bold py-2 px-4 rounded-full custom-font transition duration-300 ease-in-out transform hover:scale-110 animate-pulse hover:shadow-lg">
                        Collect Now
                    </Link>
                </div>
                <div className='flex flex-col items-center justify-center py-10 max-w-sm mx-auto'>
                    <p className='text-white text-center text-xl tracking-widest' >Genesis Minerals have been extracted on Alephium</p>
                    <Image
                        alt="gem2"
                        src="/2@2x.png"
                        width={260}
                        height={260}
                        className="object-contain sm:object-cover"
                    />
                   <Link href='/' className="mt-4 bg-gradient-to-r from-purple-600 to-purple-900 text-white tracking-wide font-bold py-2 px-4 rounded-full custom-font transition duration-300 ease-in-out transform hover:scale-110 animate-pulse hover:shadow-lg">
                        Collect Now
                    </Link>
                </div>
                <div className='flex flex-col items-center justify-center py-10 max-w-sm mx-auto'>
                    <p className='text-white text-center text-xl tracking-widest'>Genesis Minerals have been extracted on Alephium</p>
                    <Image
                        alt="gem3"
                        src="/31@2x.png"
                        width={270}
                        height={270}
                        className="object-contain sm:object-cover"
                    />
                    <Link href='/' className="mt-4 bg-gradient-to-r tracking-wide from-purple-600 to-purple-900 text-white font-bold py-2 px-4 rounded-full custom-font transition duration-300 ease-in-out transform hover:scale-110 animate-pulse hover:shadow-lg">
                        Collect Now
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Gems;