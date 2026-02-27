// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-20">
      <main className="flex flex-col items-center gap-8 text-center max-w-4xl">
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
            Kynstack
          </span>
        </h1>

        <p className="max-w-2xl text-lg text-foreground/80 sm:text-xl">
          Your one-stop digital and tech powerhouse. We build scalable SaaS
          products, craft custom software solutions, and integrate cutting-edge
          AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="rounded-full bg-brand-primary px-8 py-3 text-white font-medium hover:bg-opacity-90 transition-all">
            Explore Our Products
          </button>
          <button className="rounded-full border border-foreground/20 px-8 py-3 font-medium hover:bg-foreground/5 transition-all">
            Get Custom Solutions
          </button>
        </div>
      </main>
    </div>
  );
}
