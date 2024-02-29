"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../components/ui/google-gemini-effect";
import Link from 'next/link'
import NextImg from 'next/image'
import Hero from "@/components/main/Hero";
import Gems from "@/components/main/Gems";
import Footer from "@/components/main/Footer";
import Hero2 from "@/components/main/Hero2";



const Success = () => {

  return (
    <>
      <main className="h-full w-full">
        <div className="flex flex-col ">
          <Hero />
          <Gems />
          <Hero2/>
          <Footer/>
          
        </div>
      </main>

    </>
  )
}

export default Success
// /img38-2@2x.png