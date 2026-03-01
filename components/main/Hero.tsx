// components/Hero.tsx
"use client";

import dynamic from "next/dynamic";

const ThreeScene = dynamic(() => import("./ThreeScene"), {
  ssr: false,
  loading: () => (
    <p className="text-brand-primary animate-pulse font-mono text-sm">
      Loading 3D Engine...
    </p>
  ),
});

export default function Hero() {
  return (
    <>
      {/* SUBTLE BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-secondary/20 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      {/* MAIN HERO SECTION */}
      <main className="flex-1 relative flex flex-col md:flex-row items-center justify-center w-full h-full overflow-hidden">
        {/* BACKGROUND TEXT */}
        <div className="relative md:absolute z-10 flex flex-col md:flex-row items-center justify-center md:justify-between w-full px-4 sm:px-10 lg:px-8 pointer-events-none select-none mb-6 md:mb-0 md:-translate-y-14">
          <h1 className="text-[20vw] sm:text-[18vw] md:text-[13vw] font-black tracking-tight text-white scale-y-[1.2] origin-center leading-none md:leading-normal">
            BUILD
          </h1>
          <h1 className="text-[20vw] sm:text-[18vw] md:text-[13vw] font-black tracking-tight text-white scale-y-[1.2] origin-center leading-none md:leading-normal mt-2 md:mt-0">
            SCALE
          </h1>
        </div>

        {/* 3D MODEL CONTAINER */}

        <div className="relative z-20 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] max-w-[100vw] flex items-center justify-center pointer-events-auto drop-shadow-2xl md:-translate-y-12">
          <ThreeScene />
        </div>
      </main>
    </>
  );
}
