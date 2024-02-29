import React from 'react';
import Image from 'next/image';

export default function Hero2() {
    return (
        <section className="relative flex flex-col md:flex-row-reverse items-center justify-center min-h-screen text-white">
            <Image
                alt="Mountains"
                src="/bg3.png"
                layout='fill'
                objectFit="cover"
                className="absolute"
            />
           <div className='z-10 right-0 mr-4 md:mr-8 text-left text-lg ml-6 md:text-3xl mt-20 lg:text-3xl lg:mr-80 space-y-5 tracking-wider'>
                <p>Minerals exist across the multi-chain world.</p>
                <p>Each mineral is unique by its</p>
                <ul className='list-disc ml-10'>
                    <li>blockchain</li>
                    <li>size</li>
                    <li>density</li>
                    <li>expected purity</li>
                </ul>
                <p>Start by extracting stones at the Mine.</p>
                <p>Once the Refinery opens, you will be able to purify them <br/>and collect gems.</p>
           </div>
        </section>
    );
}