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
    <div className="mt-8 overflow-hidden">
      <div className="trust-marquee flex w-max gap-3">
        {loopItems.map((label, i) => (
          <a
            key={`${label}-${i}`}
            href={PHONE_TEL}
            onClick={() => trackEvent("click_to_call", { location: "hero_trust_carousel" })}
            className="flex w-[200px] shrink-0 items-center justify-center rounded-lg border border-bronze/30 bg-charcoal/40 px-4 py-3 text-center backdrop-blur-sm transition-colors hover:border-bronze/55 hover:bg-charcoal/55 sm:w-[220px]"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-bronze-light sm:text-[11px]">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
