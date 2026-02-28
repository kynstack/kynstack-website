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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-secondary/20 blur-[100px] rounded-full pointer-events-none" />

      {/* MAIN HERO SECTION */}
      <main className="flex-1 relative flex items-center justify-center w-full h-full overflow-hidden">
        {/* BACKGROUND TEXT */}
        <h1 className="absolute text-[12vw] font-bold tracking-tighter whitespace-nowrap z-10 text-white select-none opacity-90 pointer-events-none">
          Design Snack
        </h1>

        {/* 3D MODEL CONTAINER - Perfect sizing, no overflow */}
        <div className="relative z-20 w-[380px] h-[380px] flex items-center justify-center pointer-events-auto">
          <ThreeScene />
        </div>
      </main>
    </>
  );
}
