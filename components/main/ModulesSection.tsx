// components/main/ModulesSection.tsx
"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type Pillar = {
  id: string;
  index: string;
  name: string;
  shortName: string;
  signal: string;
  eyebrow: string;
  description: string;
  capabilities: string[];
  note: string;
  accent: "cyan" | "purple" | "blend";
};

const PILLARS: Pillar[] = [
  {
    id: "products",
    index: "01",
    name: "Products",
    shortName: "Ready systems",
    signal: "PRODUCT SUITE",
    eyebrow: "Ready-made KYNSTACK business software",
    description:
      "Focused products built to give businesses a clear starting point without beginning every system from zero.",
    capabilities: ["KYNMENU", "KYNSTAY", "KYNMED", "KYNFLOW", "KYNBILL"],
    note: "Each product is scoped and configured around the business using it.",
    accent: "cyan",
  },
  {
    id: "engineering",
    index: "02",
    name: "Custom Engineering",
    shortName: "Workflow fit",
    signal: "BUILD PIPELINE",
    eyebrow: "Software shaped around real operations",
    description:
      "KYNSTACK designs, builds, integrates, and improves software around the way a team actually works.",
    capabilities: [
      "Web applications",
      "Mobile applications",
      "Windows & desktop software",
      "SaaS platforms",
      "Dashboards",
      "Portals",
      "APIs & integrations",
      "Automation",
      "Modernization & maintenance",
    ],
    note: "From a new platform to the next reliable version of an existing system.",
    accent: "purple",
  },
  {
    id: "deployment",
    index: "03",
    name: "Technology & Deployment",
    shortName: "Connected delivery",
    signal: "DEPLOYMENT LAYER",
    eyebrow: "The operational layer around the software",
    description:
      "Practical setup and deployment support that helps software, devices, and local environments work together.",
    capabilities: [
      "Thermal, Bluetooth & LAN printers",
      "Barcode scanners & POS hardware",
      "Device configuration",
      "Printer routing",
      "Local-network setup",
      "Software installation & configuration",
      "Remote support",
      "Scoped on-site deployment",
    ],
    note: "On-site work is planned by location, hardware, and project scope.",
    accent: "blend",
  },
];

const accentStyles = {
  cyan: {
    text: "text-brand-primary",
    border: "border-brand-primary/40",
    glow: "bg-brand-primary",
    dot: "bg-brand-primary shadow-[0_0_18px_rgba(0,194,255,0.75)]",
  },
  purple: {
    text: "text-brand-secondary",
    border: "border-brand-secondary/40",
    glow: "bg-brand-secondary",
    dot: "bg-brand-secondary shadow-[0_0_18px_rgba(166,82,255,0.75)]",
  },
  blend: {
    text: "text-[#c28cff]",
    border: "border-[#8b7dff]/45",
    glow: "bg-[#8b7dff]",
    dot: "bg-[#8b7dff] shadow-[0_0_18px_rgba(139,125,255,0.75)]",
  },
};

export default function ModulesSection() {
  const [activeId, setActiveId] = useState(PILLARS[0].id);
  const reduceMotion = useReducedMotion();
  const activeIndex = PILLARS.findIndex((pillar) => pillar.id === activeId);
  const activePillar = PILLARS[activeIndex];
  const accent = accentStyles[activePillar.accent];

  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-title"
      className="relative isolate overflow-hidden bg-[#080d19] px-4 py-20 text-white sm:px-6 md:py-28 lg:px-10 lg:py-32"
    >
      <div className="ecosystem-grid absolute inset-0 -z-20 opacity-55" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-brand-primary/70 to-transparent" />
      <div className="absolute left-[8%] top-0 -z-10 h-72 w-72 rounded-full bg-brand-primary/10 blur-[110px]" />
      <div className="absolute bottom-0 right-[5%] -z-10 h-80 w-80 rounded-full bg-brand-secondary/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:items-end lg:gap-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55 sm:text-xs">
              <span className="h-px w-8 bg-brand-primary" aria-hidden="true" />
              The KYNSTACK Ecosystem
            </div>
            <h2
              id="ecosystem-title"
              className="mt-5 max-w-4xl text-[clamp(2.65rem,7vw,6.5rem)] font-black leading-[0.92] tracking-[-0.055em]"
            >
              One company.
              <span className="block bg-gradient-to-r from-brand-primary via-[#63d9ff] to-brand-secondary bg-clip-text text-transparent">
                Multiple ways to build.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base font-medium leading-7 text-white/62 lg:pb-2 lg:text-lg">
            Products, custom software, and hands-on deployment capability—connected
            by one engineering team.
          </p>
        </div>

        <div className="mt-12 border-y border-white/10 py-3 sm:mt-16 sm:py-4">
          <div
            className="grid grid-cols-1 gap-2 sm:grid-cols-3"
            aria-label="Ecosystem pillars"
          >
            {PILLARS.map((pillar) => {
              const isActive = pillar.id === activeId;
              const pillarAccent = accentStyles[pillar.accent];

              return (
                <motion.button
                  key={pillar.id}
                  type="button"
                  aria-pressed={isActive}
                  aria-controls="ecosystem-panel"
                  onClick={() => setActiveId(pillar.id)}
                  whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                  className={`group relative min-h-24 overflow-hidden rounded-xl border px-4 py-4 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#080d19] sm:min-h-32 sm:px-5 sm:py-5 ${
                    isActive
                      ? `${pillarAccent.border} bg-white/[0.075]`
                      : "border-transparent bg-white/[0.025] hover:border-white/15 hover:bg-white/[0.05]"
                  }`}
                >
                  <span
                    className={`absolute inset-x-0 top-0 h-px origin-left transition-transform duration-500 ${pillarAccent.glow} ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    aria-hidden="true"
                  />
                  <span className="flex items-start justify-between gap-4">
                    <span>
                      <span
                        className={`block font-mono text-[10px] font-bold tracking-[0.24em] transition-colors ${
                          isActive ? pillarAccent.text : "text-white/35"
                        }`}
                      >
                        NODE {pillar.index}
                      </span>
                      <span className="mt-2 block text-base font-bold leading-tight text-white sm:text-lg">
                        {pillar.name}
                      </span>
                      <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-white/42">
                        {pillar.shortName}
                      </span>
                    </span>
                    <span
                      className={`mt-1 h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
                        isActive ? pillarAccent.dot : "bg-white/20"
                      }`}
                      aria-hidden="true"
                    />
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 sm:mt-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              id="ecosystem-panel"
              key={activePillar.id}
              role="region"
              aria-live="polite"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0c1322]/90 shadow-[0_30px_100px_rgba(0,0,0,0.28)] sm:rounded-[2rem]"
            >
              <div
                className={`absolute -right-24 -top-24 h-72 w-72 rounded-full ${accent.glow} opacity-[0.08] blur-[90px]`}
                aria-hidden="true"
              />
              <div className="grid min-h-[500px] lg:grid-cols-[0.82fr_1.18fr]">
                <div className="relative flex flex-col border-b border-white/10 p-6 sm:p-9 lg:border-b-0 lg:border-r lg:p-12">
                  <div className="flex items-center justify-between gap-4">
                    <span className={`font-mono text-[11px] font-bold tracking-[0.22em] ${accent.text}`}>
                      {activePillar.signal}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/35">
                      {activePillar.index} / 03
                    </span>
                  </div>

                  <div className="my-auto py-10 lg:py-14">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                      {activePillar.eyebrow}
                    </p>
                    <h3 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                      {activePillar.name}
                    </h3>
                    <p className="mt-6 max-w-lg text-base leading-7 text-white/64 sm:text-lg sm:leading-8">
                      {activePillar.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                    <span className={`h-2 w-2 shrink-0 rounded-full ${accent.dot}`} aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
                      Selected ecosystem layer
                    </span>
                  </div>
                </div>

                <div className="relative flex flex-col p-6 sm:p-9 lg:p-12">
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                      Capability map
                    </p>
                    <span className="font-mono text-[10px] text-white/30">
                      {String(activePillar.capabilities.length).padStart(2, "0")} ITEMS
                    </span>
                  </div>

                  <div className="grid flex-1 content-center gap-2.5 py-7 sm:grid-cols-2 sm:gap-3">
                    {activePillar.capabilities.map((capability, index) => (
                      <motion.div
                        key={capability}
                        initial={reduceMotion ? false : { opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.26,
                          delay: reduceMotion ? 0 : index * 0.025,
                        }}
                        className="group flex min-h-14 items-center gap-4 rounded-xl border border-white/[0.075] bg-white/[0.025] px-4 py-3 transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.055]"
                      >
                        <span className={`font-mono text-[10px] font-bold ${accent.text}`}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-semibold leading-5 text-white/78">
                          {capability}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <p className="border-t border-white/10 pt-5 text-sm leading-6 text-white/43">
                    {activePillar.note}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
