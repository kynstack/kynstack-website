// app/page.tsx
"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/main/Navbar";
import Hero from "@/components/main/Hero";
import BottomSection from "@/components/main/BottomSection";
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

      {/* FUTURE SECTIONS PLACEHOLDER */}
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-black bg-white">
        {/* Modern Construction Icon */}
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-6"
        >
          <svg
            className="w-12 h-12 text-brand-dark/20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        </motion.div>

        <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-brand-dark">
          System <span className="text-brand-secondary">Expanding</span>
        </h2>

        <p className="mt-4 text-brand-dark/40 font-medium tracking-[0.2em] text-xs uppercase text-center px-6">
          We are currently deploying the next modules of our digital powerhouse.{" "}
          <br />
          Stay tuned for the full experience.
        </p>

        {/* Simple progress bar placeholder */}
        <div className="w-32 h-[1px] bg-brand-dark/10 mt-8 relative overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-brand-primary"
          />
        </div>
      </div>
    </div>
  );
}
