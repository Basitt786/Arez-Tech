"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const services = [
  {
    title: "Web Development",
    desc: "Modern and scalable websites with high performance.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    tag: "Most Popular",
    accent: "#d4a017",
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful and user-focused digital experiences.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
    tag: "Creative",
    accent: "#d4a017",
  },
  {
    title: "SEO Marketing",
    desc: "Boost rankings and grow your online presence.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tag: "Growth",
    accent: "#d4a017",
  },
  {
    title: "Brand Strategy",
    desc: "Creative branding solutions for modern businesses.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    tag: "Strategy",
    accent: "#d4a017",
  },
  {
    title: "Mobile Apps",
    desc: "Fast and responsive mobile app development.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    tag: "Innovation",
    accent: "#d4a017",
  },
];

export default function Cards() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const getCardWidth = () => {
    if (typeof window === "undefined") return 300;
    if (window.innerWidth < 640) return window.innerWidth - 48; // near full width on mobile
    if (window.innerWidth < 1024) return 340;
    return 380;
  };

  const checkScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
    const cw = getCardWidth() + 20;
    setActiveIndex(Math.min(Math.round(scrollLeft / cw), services.length - 1));
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const slide = (dir: "left" | "right") => {
    const cw = getCardWidth() + 20;
    sliderRef.current?.scrollBy({ left: dir === "left" ? -cw : cw, behavior: "smooth" });
  };

  const scrollToCard = (i: number) => {
    const cw = getCardWidth() + 20;
    sliderRef.current?.scrollTo({ left: i * cw, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-[#f7f6f2] py-10 sm:py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* ── Header row ── */}
        <div className="mb-8 sm:mb-10 flex items-center justify-between">
          {/* Left: label */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="h-px w-8 bg-[#d4a017]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a017]">
              Our Services
            </span>
          </div>

          {/* Right: nav buttons */}
          <div className="flex gap-3 ml-auto">
                <button
                    onClick={() => slide("left")}
                    disabled={!canScrollLeft}
                    aria-label="Previous"
                    className={`flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full transition-all duration-300
                    ${
                        canScrollLeft
                        ? "bg-black text-white hover:bg-gray-700 shadow-md hover:shadow-lg hover:scale-105"
                        : "bg-black/40 text-white/60 cursor-not-allowed"
                    }`}
                >
                    <ArrowLeft size={18} />
                </button>

                <button
                    onClick={() => slide("right")}
                    disabled={!canScrollRight}
                    aria-label="Next"
                    className={`flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full transition-all duration-300
                    ${
                        canScrollRight
                        ? "bg-[#d4a017] text-white shadow-md shadow-[#d4a017]/30 hover:bg-[#bb8d11] hover:scale-105 hover:shadow-lg"
                        : "bg-[#d4a017]/40 text-white/70 cursor-not-allowed"
                    }`}
                >
                    <ArrowRight size={18} />
                </button>
                </div>
            </div>

        {/* ── Slider ── */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex-shrink-0 snap-start overflow-hidden rounded-[24px] bg-white shadow-lg hover:shadow-2xl transition-shadow duration-500"
              style={{
                width: "calc(100vw - 48px)",
                maxWidth: "360px",
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "220px" }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  sizes="(max-width: 640px) calc(100vw - 48px), 360px"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Tag badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 backdrop-blur-md shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4a017] animate-pulse" />
                  <span className="text-[11px] font-bold text-black tracking-wide">
                    {item.tag}
                  </span>
                </div>

                {/* Index number */}
                <div className="absolute bottom-4 right-4 text-white/20 font-black leading-none select-none"
                  style={{ fontSize: "4rem", lineHeight: 1 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3
                  className="mb-2 font-black text-black leading-tight"
                  style={{
                    fontSize: "clamp(1.25rem, 4vw, 1.5rem)",
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  {item.title}
                </h3>

                <p className="mb-5 text-sm sm:text-base leading-relaxed text-gray-500">
                  {item.desc}
                </p>

                {/* Bottom row */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 rounded-full bg-[#d4a017] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#bb8d11] hover:gap-3 hover:shadow-md active:scale-95">
                    Explore
                    <ArrowUpRight size={14} />
                  </button>

                  {/* Decorative line */}
                  <div className="h-px flex-1 mx-4 bg-gradient-to-r from-[#d4a017]/30 to-transparent" />
                </div>
              </div>

              {/* Bottom glow blob */}
              <div className="pointer-events-none absolute -bottom-12 -right-6 h-32 w-32 rounded-full bg-[#d4a017]/15 blur-3xl transition-all duration-500 group-hover:bg-[#d4a017]/35 group-hover:scale-125" />
            </motion.div>
          ))}
        </div>

        {/* ── Dots — mobile only ── */}
        <div className="mt-6 flex justify-center gap-2 md:hidden">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              aria-label={`Go to card ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "w-7 bg-[#d4a017]"
                  : "w-2 bg-gray-300 hover:bg-[#d4a017]/50"
              }`}
            />
          ))}
        </div>

        {/* ── Swipe hint — only shows on touch devices briefly ── */}
        <motion.p
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-3 text-center text-[11px] text-gray-400 tracking-widest uppercase sm:hidden select-none"
        >
          ← swipe to explore →
        </motion.p>
      </div>
    </section>
  );
}