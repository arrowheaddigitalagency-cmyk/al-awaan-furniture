"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Phone, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { PHONE_TEL } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";
import { HeroTrustCarousel } from "@/components/home/HeroTrustCarousel";

const heroContent = {
  eyebrow: "Premium Custom Furniture UAE",
  title: "Furniture Made",
  highlight: "Around Your Space",
  description:
    "Custom furniture, upholstery and interior solutions designed and crafted for homes across the UAE.",
};

const slides = [
  {
    image: "/images/hero/hero-main.jpg",
    alt: "Custom media wall and TV unit interior",
    eyebrow: "Media Walls & TV Units",
  },
  {
    image: "/images/hero/hero-bedroom.jpg",
    alt: "Luxury custom bedroom furniture",
    eyebrow: "Bedrooms & Upholstery",
  },
  {
    image: "/images/hero/hero-wardrobe.jpg",
    alt: "Premium fitted wardrobe design",
    eyebrow: "Wardrobes & Storage",
  },
  {
    image: "/images/services/kids-rooms/IMG-20251223-WA0041-1024x809.jpg",
    alt: "Kids room custom furniture design",
    eyebrow: "Kids & Family Rooms",
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

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-charcoal grain-overlay"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero showcase"
    >
      {/* Background slides — crossfade only */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <motion.div
            key={s.image}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === current ? 1 : 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden={i !== current}
          >
            <Image
              src={s.image}
              alt={s.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover brightness-[1.18] contrast-[1.06] saturate-[1.12]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/35 to-charcoal/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/15 to-charcoal/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,_rgba(201,160,108,0.08),_transparent_55%)]" />
          </motion.div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-4 bottom-4 top-[4.5rem] border border-ivory/15 md:inset-x-8 md:bottom-8 md:top-20 lg:inset-x-12" />
      <div className="pointer-events-none absolute left-4 top-1/2 hidden h-32 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-bronze/60 to-transparent md:block lg:left-12" />
      <div className="pointer-events-none absolute right-4 top-1/2 hidden h-32 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-bronze/60 to-transparent md:block lg:right-12" />

      <div className="container-wide relative z-10 flex min-h-[100svh] flex-col justify-center pb-24 pt-[5.5rem] max-md:pb-32 md:pb-32 md:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-bronze/50 bg-charcoal/40 px-4 py-2 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-bronze-light" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze-light">
                {heroContent.eyebrow}
              </span>
            </div>

            <h1 className="hero-text-shadow font-display text-[2.75rem] font-medium leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-[5rem]">
              {heroContent.title}
              <br />
              <span className="hero-text-gold font-semibold italic">
                {heroContent.highlight}
              </span>
            </h1>

            <p className="hero-text-shadow-sm mt-6 max-w-lg text-base font-medium leading-relaxed text-ivory/95 md:text-lg">
              {heroContent.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm sm:text-base">
              <Link
                href="/contact"
                className="hero-text-shadow-sm font-semibold text-bronze-light underline decoration-bronze/50 underline-offset-4 transition-colors hover:text-white hover:decoration-bronze-light"
              >
                Get Free Quote
              </Link>
              <span className="text-ivory/25">|</span>
              <Link
                href="/projects"
                className="hero-text-shadow-sm inline-flex items-center gap-1.5 font-semibold text-ivory/90 underline decoration-ivory/30 underline-offset-4 transition-colors hover:text-white hover:decoration-ivory/60"
              >
                Explore Our Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={PHONE_TEL}
                onClick={() => trackEvent("click_to_call", { location: "hero" })}
                className="image-contact-icon image-contact-icon--call h-11 w-11 sm:h-12 sm:w-12"
                aria-label="Call Al-Awan Furniture"
              >
                <Phone className="h-5 w-5" strokeWidth={2.25} />
              </a>
              <a
                href={buildWhatsAppLink(
                  "Hello Al-Awan Furniture, I would like to get a quotation."
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "hero" })}
                className="image-contact-icon image-contact-icon--whatsapp h-11 w-11 sm:h-12 sm:w-12"
                aria-label="WhatsApp Al-Awan Furniture"
              >
                <WhatsAppIcon size={20} />
              </a>
            </div>

            <HeroTrustCarousel />
          </div>

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
                      : "border-ivory/15 bg-ivory/10 hover:border-ivory/30"
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

        <div className="relative mt-10 max-md:mt-6 md:absolute md:bottom-8 md:left-0 md:right-0 md:mt-0 md:px-8 lg:bottom-10">
          <div className="flex items-center justify-between">
            <div className="hidden items-center gap-3 font-mono text-xs text-ivory/50 md:flex">
              <span className="text-lg font-display text-bronze-light">0{current + 1}</span>
              <span className="text-ivory/30">/</span>
              <span>0{slides.length}</span>
            </div>

            <div className="mx-auto flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 bg-charcoal/40 text-ivory backdrop-blur-md transition-all hover:border-bronze/60 hover:bg-charcoal/60"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

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
