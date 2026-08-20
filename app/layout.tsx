// app/layout.tsx

import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fontSans = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kynstack | Digital & Tech Powerhouse",
  description:
    "Your one-stop solution for SaaS products, custom software development, IT services, and AI integration.",
  keywords: [
    "SaaS",
    "Custom Development",
    "IT Services",
    "AI Integration",
    "Tech Solutions",
  ],
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "92x92", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
