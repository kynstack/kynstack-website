// components/main/BottomSection.tsx
"use client";

import { useState, useEffect } from "react";

export default function BottomSection() {
  const [activeIndex, setActiveIndex] = useState(3);

  const services = [
    {
      id: "saas",
      name: "SaaS",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      id: "web",
      name: "Web Apps",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      id: "mobile",
      name: "Mobile",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "ai",
      name: "AI & ML",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      id: "cloud",
      name: "Cloud",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
    },
    {
      id: "data",
      name: "Big Data",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
    },
    {
      id: "devops",
      name: "DevOps",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  // Auto-shift logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  const getRelativePosition = (index: number) => {
    const total = services.length;
    let diff = index - activeIndex;

    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;

    return diff;
  };

  return (
    <div className="absolute bottom-6 md:bottom-10 w-full px-4 md:px-10 flex flex-col md:flex-row items-center md:items-end justify-between z-30 pointer-events-none gap-6 md:gap-0">
      {/* Bottom Left Text */}
      <div className="max-w-[500px] pointer-events-auto text-center md:text-left">
        <p className="text-foreground/80 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
          Building scalable SaaS platforms, custom software, and smart AI
          automation to power the next generation of business.
        </p>
      </div>

      {/* Bottom Right Carousel */}
      <div className="relative flex items-center justify-center w-full max-w-[420px] h-[80px] md:h-[100px] pointer-events-auto">
        {services.map((item, index) => {
          const relativePos = getRelativePosition(index);
          const isActive = relativePos === 0;

          let transformStyle = "";
          let zIndex = 30;
          let opacityStyle = "";
          let bgStyle = "";
          let shadowStyle = "";
          let iconColorStyle = "";
          let textColorStyle = "";

          if (isActive) {
            transformStyle = "translate-x-0 scale-[1.15] md:scale-125";
            zIndex = 50;
            opacityStyle = "opacity-100";
            bgStyle = "bg-white/95 backdrop-blur-sm border border-white/60";
            shadowStyle =
              "shadow-[0_0_30px_rgba(0,194,255,0.5)] hover:shadow-[0_0_40px_rgba(0,194,255,0.7)]";
            iconColorStyle = "text-brand-primary";
            textColorStyle = "text-gray-900 font-semibold";
          } else if (relativePos === -1) {
            transformStyle =
              "-translate-x-[50px] md:-translate-x-[70px] scale-90 md:scale-100";
            zIndex = 40;
            opacityStyle = "opacity-80";
            bgStyle = "bg-white/70 backdrop-blur-md border border-white/40";
            shadowStyle = "shadow-[0_0_20px_rgba(166,82,255,0.3)]";
            iconColorStyle = "text-brand-secondary";
            textColorStyle = "text-gray-800/70";
          } else if (relativePos === 1) {
            transformStyle =
              "translate-x-[50px] md:translate-x-[70px] scale-90 md:scale-100";
            zIndex = 40;
            opacityStyle = "opacity-80";
            bgStyle = "bg-white/70 backdrop-blur-md border border-white/40";
            shadowStyle = "shadow-[0_0_20px_rgba(166,82,255,0.3)]";
            iconColorStyle = "text-brand-secondary";
            textColorStyle = "text-gray-800/70";
          } else if (relativePos === -2) {
            transformStyle =
              "-translate-x-[90px] md:-translate-x-[130px] scale-75";
            zIndex = 30;
            opacityStyle = "opacity-60";
            bgStyle = "bg-white/50 backdrop-blur-sm border border-white/30";
            shadowStyle = "shadow-[0_0_15px_rgba(0,194,255,0.2)]";
            iconColorStyle = "text-brand-primary/60";
            textColorStyle = "text-gray-700/50";
          } else if (relativePos === 2) {
            transformStyle =
              "translate-x-[90px] md:translate-x-[130px] scale-75";
            zIndex = 30;
            opacityStyle = "opacity-60";
            bgStyle = "bg-white/50 backdrop-blur-sm border border-white/30";
            shadowStyle = "shadow-[0_0_15px_rgba(0,194,255,0.2)]";
            iconColorStyle = "text-brand-primary/60";
            textColorStyle = "text-gray-700/50";
          } else if (relativePos <= -3) {
            transformStyle =
              "-translate-x-[120px] md:-translate-x-[170px] scale-50";
            zIndex = 20;
            opacityStyle = "opacity-30 md:opacity-40";
            bgStyle = "bg-white/30 backdrop-blur-sm border border-white/20";
            shadowStyle = "";
            iconColorStyle = "text-gray-600/40";
            textColorStyle = "text-gray-600/30";
          } else if (relativePos >= 3) {
            transformStyle =
              "translate-x-[120px] md:translate-x-[170px] scale-50";
            zIndex = 20;
            opacityStyle = "opacity-30 md:opacity-40";
            bgStyle = "bg-white/30 backdrop-blur-sm border border-white/20";
            shadowStyle = "";
            iconColorStyle = "text-gray-600/40";
            textColorStyle = "text-gray-600/30";
          }

          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`absolute flex flex-col items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl cursor-pointer transition-all duration-700 ease-out ${transformStyle} ${opacityStyle} ${bgStyle} ${shadowStyle}`}
              style={{ zIndex }}
            >
              <div
                className={`mb-1 transition-colors duration-700 ${iconColorStyle}`}
              >
                {item.icon}
              </div>
              <span
                className={`text-[8px] md:text-[9px] tracking-tight font-semibold leading-tight transition-colors duration-700 ${textColorStyle}`}
              >
                {item.name}
              </span>

              {/* Active Indicator Triangle */}
              {isActive && (
                <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] md:border-l-[6px] border-r-[5px] md:border-r-[6px] border-b-[6px] md:border-b-[8px] border-transparent border-b-brand-primary animate-fade-in" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
