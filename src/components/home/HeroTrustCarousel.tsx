"use client";

import { PHONE_TEL } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";

const trustItems = [
  "Custom Made",
  "UAE Wide Service",
  "Free Quotation",
  "Expert Installation",
];

export function HeroTrustCarousel() {
  const loopItems = [...trustItems, ...trustItems];

  return (
    <div className="relative mt-6 overflow-hidden md:mt-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-charcoal/90 to-transparent sm:w-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-charcoal/90 to-transparent sm:w-10" />

      <div className="trust-marquee flex w-max gap-2.5 sm:gap-3">
        {loopItems.map((label, i) => (
          <a
            key={`${label}-${i}`}
            href={PHONE_TEL}
            onClick={() => trackEvent("click_to_call", { location: "hero_trust_carousel" })}
            className="flex w-[148px] shrink-0 items-center justify-center rounded-lg border border-bronze/30 bg-charcoal/50 px-3 py-2.5 text-center backdrop-blur-sm transition-colors hover:border-bronze/55 hover:bg-charcoal/65 sm:w-[168px] sm:px-4 sm:py-3"
          >
            <span className="text-[9px] font-bold uppercase tracking-wider text-bronze-light sm:text-[10px]">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
