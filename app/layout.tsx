import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arez Tech",
  description: "Creative Digital Agency & Development Studio",
  icons: {
    icon: "/favicon.ico",
    apple: "/arez-apple.png",  // 180×180 PNG
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        scroll-smooth
      `}
    >
      <body
        className="
          bg-black
          text-white
          min-h-screen
          flex
          flex-col
          antialiased
          overflow-x-hidden
        "
      >
        {/* Global Background */}
        <div
          className="
            fixed
            inset-0
            -z-50
            bg-[radial-gradient(circle_at_top,rgba(227,180,51,0.08),transparent_35%),linear-gradient(to_bottom,#000,#050505,#000)]
          "
        />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 pt-[120px]">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
