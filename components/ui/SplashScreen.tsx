// components/ui/SplashScreen.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-dark"
        >
          {/* Ambient Background Glow */}
          <div className="absolute w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full" />

          <div className="relative flex flex-col items-center justify-center">
            {/*  'K' Drawing Animation */}
            <svg width="100" height="100" viewBox="0 0 100 100">
              <defs>
                <linearGradient
                  id="kGradient"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#a652ff" />
                  <stop offset="100%" stopColor="#00c2ff" />
                </linearGradient>
              </defs>

              {/* The Vertical Spine of the 'K' */}
              <motion.path
                d="M35 20 L35 80"
                stroke="url(#kGradient)"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              {/* The Upper Arm - Kicking out from the middle */}
              <motion.path
                d="M35 50 L70 20"
                stroke="url(#kGradient)"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              />

              {/* The Lower Arm - Kicking down from the middle */}
              <motion.path
                d="M35 50 L70 80"
                stroke="url(#kGradient)"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
              />
            </svg>

            {/* 2. Kynstack Wordmark & Slogan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="mt-8 text-center"
            >
              <h1 className="relative text-white font-sans font-bold text-4xl tracking-tighter">
                Kynstack
                <motion.span
                  animate={{ opacity: [0, 1, 0], x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 1 }}
                className="text-brand-primary/80 text-[11px] tracking-[0.4em] font-bold uppercase mt-3"
              >
                The Next Generation Powerhouse
              </motion.p>
            </motion.div>

            {/* 3. Minimalist Loading Bar */}
            <div className="w-56 h-[1px] bg-white/5 mt-10 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.8, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
