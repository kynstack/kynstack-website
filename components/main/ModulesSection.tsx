// components/main/ModulesSection.tsx
"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Module = {
  id: string;
  name: string;
  tag: string;
  desc: string;
  bullets: string[];
  status: "LIVE" | "DEPLOYING" | "R&D";
};

const MODULES: Module[] = [
  {
    id: "saas",
    name: "SaaS Products",
    tag: "Ready-made platforms",
    desc: "Production-ready systems you can deploy fast and customize later.",
    bullets: [
      "Inventory & Ops",
      "CRM & Sales Flow",
      "Hospital / Hotel Systems",
      "Restaurant & POS",
    ],
    status: "DEPLOYING",
  },
  {
    id: "custom",
    name: "Custom Development",
    tag: "Built for your workflow",
    desc: "Web + mobile systems built around real operations, not generic templates.",
    bullets: [
      "Next.js / React Apps",
      "Mobile Apps",
      "APIs & Integrations",
      "Dashboards & Admins",
    ],
    status: "LIVE",
  },
  {
    id: "services",
    name: "IT & Digital Services",
    tag: "Setup → support → scale",
    desc: "From branding to deployment to infra and maintenance — all under one roof.",
    bullets: [
      "Branding & Design",
      "Digital Marketing",
      "Cloud & Hosting",
      "IT Setup & Support",
    ],
    status: "LIVE",
  },
  {
    id: "ai",
    name: "AI Integration",
    tag: "Automation layer",
    desc: "AI assistants that reduce manual work: support, workflows, data actions.",
    bullets: [
      "AI Chatbot for Support",
      "Internal Copilot",
      "Process Automation",
      "Smart Search & Insights",
    ],
    status: "R&D",
  },
];

function StatusPill({ status }: { status: Module["status"] }) {
  const map = {
    LIVE: {
      label: "LIVE",
      glow: "shadow-[0_0_20px_rgba(0,194,255,0.35)]",
      ring: "ring-brand-primary/30",
    },
    DEPLOYING: {
      label: "DEPLOYING",
      glow: "shadow-[0_0_20px_rgba(166,82,255,0.35)]",
      ring: "ring-brand-secondary/30",
    },
    "R&D": {
      label: "R&D",
      glow: "shadow-[0_0_20px_rgba(255,255,255,0.15)]",
      ring: "ring-white/15",
    },
  }[status];

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] tracking-[0.3em] font-bold uppercase bg-white/5 ring-1 ${map.ring} ${map.glow}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
      {map.label}
    </span>
  );
}

export default function ModulesSection() {
  const [active, setActive] = useState(1);

  const current = useMemo(() => MODULES[active], [active]);

  return (
    <section className="relative w-full py-20 md:py-28 px-4 sm:px-10">
      {/* ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[700px] h-[350px] bg-brand-primary/10 blur-[120px] rounded-full" />
        <div className="absolute left-10 bottom-10 w-[450px] h-[450px] bg-brand-secondary/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-white/50 text-xs tracking-[0.4em] font-bold uppercase">
              Kynstack OS
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-white">
              One company.{" "}
              <span className="text-brand-primary">Many modules.</span>
            </h2>
            <p className="mt-4 text-white/70 max-w-xl leading-relaxed">
              We don’t “just build apps”. We ship a connected system — products,
              services, and automation — designed to scale operations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-white/60 text-xs uppercase tracking-[0.3em] font-bold">
                Delivery Mode
              </p>
              <p className="text-white text-sm font-semibold mt-1">
                SaaS + Custom + Services
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* left list */}
          <div className="md:col-span-5 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            {MODULES.map((m, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={m.id}
                  onClick={() => setActive(idx)}
                  className={`w-full text-left px-6 py-5 border-b border-white/10 transition ${
                    isActive ? "bg-white/10" : "hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p
                        className={`text-sm font-bold ${isActive ? "text-white" : "text-white/80"}`}
                      >
                        {m.name}
                      </p>
                      <p className="mt-1 text-xs tracking-[0.25em] uppercase font-bold text-white/40">
                        {m.tag}
                      </p>
                    </div>
                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : 0.4,
                        scale: isActive ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      <StatusPill status={m.status} />
                    </motion.div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* right active card */}
          <div className="md:col-span-7 relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent pointer-events-none" />
            <div className="relative bg-[#0a0a0a]/35 border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden">
              {/* blueprint lines */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute -left-20 top-10 w-[420px] h-[420px] border border-white/10 rounded-full" />
                <div className="absolute left-40 -top-24 w-[520px] h-[520px] border border-white/10 rounded-full" />
                <div className="absolute left-0 bottom-0 w-full h-[1px] bg-white/10" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="relative"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white">
                        {current.name}
                      </h3>
                      <p className="mt-2 text-white/70 leading-relaxed">
                        {current.desc}
                      </p>
                    </div>
                    <StatusPill status={current.status} />
                  </div>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.bullets.map((b) => (
                      <div
                        key={b}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10"
                      >
                        <span className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_15px_rgba(0,194,255,0.6)]" />
                        <p className="text-white/80 text-sm font-semibold">
                          {b}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row gap-3">
                    <button className="px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition">
                      Explore Modules
                    </button>
                    <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition">
                      Talk to Kynstack
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
