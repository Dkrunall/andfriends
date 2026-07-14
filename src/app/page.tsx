'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Artists from "@/components/Artists";
import PastEvents from "@/components/PastEvents";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [heroTheme, setHeroTheme] = useState('bg-neon-lilac');

  return (
    <main className="bg-black text-white min-h-screen font-sans selection:bg-neon-pink selection:text-black">
      <Navbar themeColor={heroTheme} />
      <Hero onThemeChange={setHeroTheme} />
      <Services />
      <Artists />
      <PastEvents />
      <Footer />
    </main>
  );
}
