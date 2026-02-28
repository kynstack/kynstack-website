// components/BottomSection.tsx
export default function BottomSection() {
  const techStack = ["React", "Next.js", "AI", "AWS", "Node"];

  return (
    <div className="absolute bottom-10 w-full px-8 flex flex-col md:flex-row items-end justify-between z-30 pointer-events-none">
      {/* Bottom Left Text */}
      <div className="max-w-md pointer-events-auto">
        <p className="text-foreground/80 text-lg leading-relaxed font-medium">
          Building Digital Platforms, SaaS Products, And Automation Systems For
          The Next Generation.
        </p>
      </div>

      {/* Bottom Right Carousel / Tech Stack */}
      <div className="flex items-center gap-3 mt-6 md:mt-0 pointer-events-auto">
        {techStack.map((item, idx) => {
          // Making the middle item (AI) the "Active" glowing one
          const isActive = idx === 2;

          return (
            <div
              key={idx}
              className={`w-14 h-14 flex items-center justify-center rounded-2xl transition-all duration-300 cursor-pointer
                ${
                  isActive
                    ? "bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.6)] scale-110 relative z-10"
                    : "bg-white/5 text-white/50 hover:bg-white/10 border border-white/5"
                }`}
            >
              <span
                className={`text-xs font-bold ${isActive ? "text-black" : ""}`}
              >
                {item}
              </span>

              {/* Active Indicator Triangle */}
              {isActive && (
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-transparent border-b-white" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
