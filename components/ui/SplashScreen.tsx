// components/ui/SplashScreen.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.012,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden px-6"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(0,194,255,0.12), transparent 38%), radial-gradient(circle at bottom right, rgba(166,82,255,0.12), transparent 42%), linear-gradient(180deg,#070a12 0%,#0b1020 100%)",
          }}
        >
          <div className="flex w-full max-w-4xl flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
            >
              <Image
                src="/KynstackWhite.png"
                alt="KYNSTACK"
                width={320}
                height={90}
                priority
                className="h-16 w-auto max-w-full object-contain sm:h-20"
              />
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                y: 8,
                filter: "blur(4px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.45,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="mt-5 text-sm font-medium tracking-[0.08em] text-white/60 sm:mt-6 sm:text-base sm:tracking-[0.12em]"
            >
              One Stack. Infinite Solutions.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
