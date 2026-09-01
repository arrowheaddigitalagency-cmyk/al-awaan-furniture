"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";

const slides = [
  {
    image: "/images/hero/hero-main.jpg",
    alt: "Custom media wall and TV unit interior",
    eyebrow: "Media Walls & TV Units",
    title: "Furniture Made",
    highlight: "Around Your Space",
    description:
      "Custom furniture, upholstery and interior solutions designed and crafted for homes across the UAE.",
  },
  {
    image: "/images/hero/hero-bedroom.jpg",
    alt: "Luxury custom bedroom furniture",
    eyebrow: "Bedrooms & Upholstery",
    title: "Crafted for",
    highlight: "Comfort & Elegance",
    description:
      "Bespoke beds, wardrobes, and upholstery tailored to your room dimensions and lifestyle.",
  },
  {
    image: "/images/hero/hero-wardrobe.jpg",
    alt: "Premium fitted wardrobe design",
    eyebrow: "Wardrobes & Storage",
    title: "Designed to",
    highlight: "Fit Perfectly",
    description:
      "Smart storage solutions with premium finishes — from walk-in closets to fitted wardrobes.",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduced = useReducedMotion();

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused || reduced) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next, reduced]);

  const slide = slides[current];

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-charcoal grain-overlay"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero showcase"
    >
      {/* Background slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={current === 0}
            sizes="100vw"
            className="object-cover brightness-[1.18] contrast-[1.06] saturate-[1.12]"
          />
          {/* Lighter overlays — image visible, text readable on left */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/35 to-charcoal/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/15 to-charcoal/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,_rgba(201,160,108,0.08),_transparent_55%)]" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative frame — tighter top */}
      <div className="pointer-events-none absolute inset-x-4 bottom-4 top-[4.5rem] border border-ivory/15 md:inset-x-8 md:bottom-8 md:top-20 lg:inset-x-12" />
      <div className="pointer-events-none absolute left-4 top-1/2 hidden h-32 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-bronze/60 to-transparent md:block lg:left-12" />
      <div className="pointer-events-none absolute right-4 top-1/2 hidden h-32 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-bronze/60 to-transparent md:block lg:right-12" />

      {/* Content — centered higher, less top gap */}
      <div className="container-wide relative z-10 flex min-h-[100svh] flex-col justify-center pb-28 pt-[5.5rem] md:pb-32 md:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-bronze/50 bg-charcoal/40 px-4 py-2 backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-bronze-light" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze-light">
                    {slide.eyebrow}
                  </span>
                </div>

                <h1 className="hero-text-shadow font-display text-[2.75rem] font-medium leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-[5rem]">
                  {slide.title}
                  <br />
                  <span className="hero-text-gold font-semibold italic">
                    {slide.highlight}
                  </span>
                </h1>

                <p className="hero-text-shadow-sm mt-6 max-w-lg text-base font-medium leading-relaxed text-ivory/95 md:text-lg">
                  {slide.description}
                </p>

                <div className="mt-9 flex flex-row items-stretch gap-2 sm:gap-3">
                  <Button
                    href="/contact"
                    variant="secondary"
                    size="lg"
                    className="flex-1 px-3 py-3.5 text-[11px] leading-tight sm:flex-initial sm:px-9 sm:py-4 sm:text-sm"
                  >
                    Get Free Quote
                  </Button>
                  <Button
                    href="/projects"
                    variant="luxury"
                    size="lg"
                    className="flex-1 px-3 py-3.5 text-[11px] leading-tight sm:flex-initial sm:px-9 sm:py-4 sm:text-sm"
                  >
                    <span className="sm:hidden">Our Work</span>
                    <span className="hidden sm:inline">Explore Our Work</span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-bronze/20 pt-8">
                  <a
                    href={PHONE_TEL}
                    className="group flex items-center gap-3 text-ivory transition-colors hover:text-bronze-light"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-bronze/40 bg-charcoal/50 transition-colors group-hover:border-bronze/70 group-hover:bg-bronze/10">
                      <Phone className="h-4 w-4 text-bronze-light" />
                    </span>
                    <span className="hero-text-shadow-sm text-sm font-semibold">{PHONE_DISPLAY}</span>
                  </a>
                  <a
                    href={buildWhatsAppLink(
                      "Hello Al-Awan Furniture, I would like to get a quotation."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-text-shadow-sm flex items-center gap-2 text-sm font-semibold text-ivory transition-colors hover:text-bronze-light"
                  >
                    <WhatsAppIcon size={18} className="text-[#25D366]" />
                    WhatsApp Us
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide thumbnails — desktop */}
          <div className="hidden lg:col-span-4 lg:block">
            <div className="space-y-3">
              {slides.map((s, i) => (
                <button
                  key={s.image}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-lg border p-2 text-left transition-all duration-500 ${
                    i === current
                      ? "border-bronze/60 bg-ivory/15 shadow-lg shadow-bronze/10"
                      : "border-ivory/15 bg-ivory/8 hover:border-ivory/30"
                  }`}
                  aria-label={`View slide ${i + 1}: ${s.eyebrow}`}
                  aria-current={i === current}
                >
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-sm">
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover brightness-110 saturate-110"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-bronze-light">
                      0{i + 1}
                    </p>
                    <p className="text-sm font-medium text-ivory/90">{s.eyebrow}</p>
                  </div>
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-bronze transition-all duration-500 ${
                      i === current ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar — desktop controls + counter + dots */}
        <div className="absolute bottom-8 left-0 right-0 z-10 px-4 md:px-8 lg:bottom-10">
          <div className="flex items-center justify-between">
            {/* Slide counter — left */}
            <div className="hidden items-center gap-3 font-mono text-xs text-ivory/50 md:flex">
              <span className="text-lg font-display text-bronze-light">0{current + 1}</span>
              <span className="text-ivory/30">/</span>
              <span>0{slides.length}</span>
            </div>

            {/* Center controls — desktop */}
            <div className="mx-auto flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 bg-charcoal/40 text-ivory backdrop-blur-md transition-all hover:border-bronze/60 hover:bg-charcoal/60"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Progress dots — mobile center */}
              <div className="flex gap-2 lg:hidden">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === current ? "w-8 bg-bronze-light" : "w-4 bg-ivory/30"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Progress bar — desktop center */}
              <div className="hidden items-center gap-2 lg:flex">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === current ? "w-10 bg-bronze-light" : "w-6 bg-ivory/25 hover:bg-ivory/40"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 bg-charcoal/40 text-ivory backdrop-blur-md transition-all hover:border-bronze/60 hover:bg-charcoal/60"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Scroll indicator — right */}
            <motion.div
              className="hidden items-center gap-2 md:flex"
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <span className="text-[10px] uppercase tracking-widest text-ivory/40">Scroll</span>
              <div className="h-8 w-px bg-gradient-to-b from-bronze/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
