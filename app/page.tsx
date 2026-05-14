"use client";

import Cards from "@/components/Cards";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      {/* ═══════════════════════════════════════
          SECTION 1 — VIDEO HERO
      ═══════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "100svh" }}>

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/optimized-video.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

        {/* Corner accents */}
        <div className="absolute top-5 left-5 w-6 h-6 border-l-2 border-t-2 border-[#e3b433]/50 hidden sm:block" />
        <div className="absolute top-5 right-5 w-6 h-6 border-r-2 border-t-2 border-[#e3b433]/50 hidden sm:block" />
        <div className="absolute bottom-5 left-5 w-6 h-6 border-l-2 border-b-2 border-[#e3b433]/50 hidden sm:block" />
        <div className="absolute bottom-5 right-5 w-6 h-6 border-r-2 border-b-2 border-[#e3b433]/50 hidden sm:block" />

        {/* Hero Content */}
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-5 sm:px-8"
          style={{ minHeight: "100svh" }}
        >
          <div className="w-full max-w-4xl mx-auto">

            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 mb-5 sm:mb-7 px-4 py-1.5 rounded-full border border-[#e3b433]/40 bg-[#e3b433]/10 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e3b433] animate-pulse" />
              <span
                className="text-[#e3b433] text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold"
              >
                Arez Tech — Digital Growth Agency
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-black text-white leading-[1.08] tracking-tight mb-5 sm:mb-7"
              style={{
                fontSize: "clamp(2.2rem, 8vw, 5.5rem)",
                fontFamily: "'Georgia', 'Times New Roman', serif",
                textShadow: "0 4px 32px rgba(0,0,0,0.6)",
              }}
            >
              Outdated Businesses
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #e3b433, #f5d080, #e3b433)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Get Replaced.
              </span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mx-auto mb-5 sm:mb-7 h-px origin-center"
              style={{
                width: "min(200px, 60%)",
                background: "linear-gradient(90deg, transparent, #e3b433aa, transparent)",
              }}
            />

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mx-auto mb-8 sm:mb-10 text-white/70 leading-relaxed"
              style={{
                fontSize: "clamp(0.875rem, 2.5vw, 1.125rem)",
                maxWidth: "36rem",
                fontFamily: "'Georgia', serif",
              }}
            >
              Arez Tech helps businesses grow through branding, marketing, AI
              solutions, automation systems, scalable websites, and digital
              infrastructure designed for long-term growth.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            >
              <button
                className="relative overflow-hidden rounded-full font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
                style={{
                  background: "linear-gradient(135deg, #e3b433, #c99d28)",
                  padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)",
                  fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                  boxShadow: "0 8px 32px rgba(227,180,51,0.35)",
                }}
              >
                <span className="relative z-10">Transform My Business</span>
                <span
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, #f5d080, #e3b433)" }}
                />
              </button>

              <button
                className="rounded-full font-semibold uppercase tracking-widest text-white/70 border border-white/25 backdrop-blur-sm hover:border-[#e3b433]/60 hover:text-[#e3b433] transition-all duration-300 w-full sm:w-auto"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)",
                  fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                }}
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="text-white/30 text-[9px] uppercase tracking-[0.25em]">Scroll</span>
          <div className="w-px h-7 bg-gradient-to-b from-[#e3b433]/50 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2 — DIGITAL SOLUTIONS
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#f7f6f2] py-16 sm:py-20 md:py-28">

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dcdcdc2a_1px,transparent_1px),linear-gradient(to_bottom,#dcdcdc2a_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:70px_70px]" />

        {/* Subtle top gradient */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white/60 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-6 sm:mb-8 inline-block rounded-full border border-yellow-200 bg-white px-5 sm:px-8 py-2 sm:py-3 shadow-sm"
          >
            <span
              className="font-bold uppercase text-[#d4a017]"
              style={{
                fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)",
                letterSpacing: "clamp(0.15em, 0.4vw, 0.35em)",
              }}
            >
              Digital Solutions
            </span>
          </motion.div>

          {/* H2 / Section heading */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto font-black leading-[1.05] tracking-tight text-black mb-12 sm:mb-16"
            style={{
              fontSize: "clamp(2rem, 8vw, 7rem)",
              maxWidth: "900px",
              fontFamily: "'Georgia', 'Times New Roman', serif",
            }}
          >
            Digital Transformation
            <br />
            <span className="text-[#d4a017]">Services That Scale</span>
          </motion.h2>

          <Cards />
        </div>
      </section>
    </>
  );
}