import type { Metadata } from "next";
import { Kalnia } from "next/font/google";
import Head from 'next/head';
import "./globals.css";

const syncopate = Kalnia({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minerals NFT",
  description: "Mint your minerals NFT today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Minerals NFT</title>
        <meta name="description" content="Mint your minerals NFT today!" />
        <meta name="keywords" content="Minerals,NFT,Blockchain,Crypto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/g1.ico" />
      </Head>
      <body className={`${syncopate.className} bg-transparent overflow-y-scroll overflow-x-hidden`}>{children}</body>
    </html>
  );
}