import type { Metadata } from "next";
import { Kalnia } from "next/font/google";
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
      <body className={`${syncopate.className} bg-transparent overflow-y-scroll overflow-x-hidden`}>{children}</body>
    </html>
  );
}
