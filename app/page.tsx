// app/page.tsx
"use client";

import Navbar from "@/components/main/Navbar";
import Hero from "@/components/main/Hero";
import BottomSection from "@/components/main/BottomSection";
import ModulesSection from "@/components/main/ModulesSection";
import SplashScreen from "@/components/ui/SplashScreen";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <SplashScreen />

      {/* HERO ISLAND WRAPPER */}
      <div className="w-full h-screen px-3 py-3">
        {/* THE DARK ROUNDED ISLAND */}
        <div className="relative w-full h-full bg-brand-dark rounded-2xl overflow-hidden flex flex-col shadow-2xl">
          <Navbar />
          <Hero />
          <BottomSection />
        </div>
      </div>

      <ModulesSection />
    </div>
  );
}
