// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <>
      {/* NAVBAR WRAPPER */}
      <header className="relative w-full z-50 px-4 py-4 md:px-4 md:py-3 flex justify-center">
        {/* INNER PILL CONTAINER */}
        <nav className="w-full bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3 md:px-8 md:py-4 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
          {/* LOGO (Left) */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-32 h-8 md:w-40 md:h-9 overflow-hidden transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/KynstackWhite.png"
                alt="Kynstack Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* DESKTOP NAVIGATION (Middle) */}
          <ul className="hidden md:flex items-center gap-10 text-[16px] font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative py-2 text-white/70 transition-all duration-300 hover:text-white group flex flex-col items-center"
                >
                  {/* Glowing text effect on hover */}
                  <span className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,194,255,0.8)]">
                    {link.name}
                  </span>
                  {/* glowing dot indicator */}
                  <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-[0_0_10px_#00c2ff]"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* DESKTOP BUTTON */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-white text-black px-7 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:-translate-y-0.5">
                Book a Call
              </button>
            </Link>
          </div>

          {/* MOBILE HAMBURGER TOGGLE */}
          <button
            className="md:hidden text-white p-2 relative z-[70]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* MOBILE MENU BACKDROP - Dismiss on click */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* SLIDE-IN MOBILE MENU FROM RIGHT */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-[#0a0a0a] z-[60] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with Close Button */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
          <h2 className="text-white/70 text-sm font-semibold tracking-widest uppercase">
            Navigation
          </h2>
          <button
            className="text-white p-2 hover:text-brand-primary transition-colors duration-300"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links - Scrollable */}
        <div className="flex-1 flex flex-col px-6 py-8 overflow-y-auto">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`block text-2xl font-bold text-white/90 hover:text-brand-primary transition-all duration-500 py-4 px-4 rounded-lg border-l-3 border-transparent hover:border-brand-primary hover:bg-white/5 ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-12 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${i * 80}ms` : "0ms",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Full-Width CTA Button at Bottom */}
        <div className="px-6 py-6 border-t border-white/10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a] to-transparent">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full"
          >
            <button
              className={`w-full bg-white text-black px-6 py-4 rounded-xl text-lg font-bold shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,194,255,0.3)] active:scale-95 transition-all duration-500 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: isOpen ? "240ms" : "0ms",
              }}
            >
              Book a Call
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
