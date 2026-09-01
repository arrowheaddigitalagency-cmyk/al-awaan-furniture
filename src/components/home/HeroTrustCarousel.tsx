"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { PHONE_TEL } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const trustItems = [
  {
    label: "Custom Made",
    action: "call" as const,
    message: "Hello Al-Awan Furniture, I am interested in custom made furniture.",
  },
  {
    label: "UAE Wide Service",
    action: "whatsapp" as const,
    message: "Hello Al-Awan Furniture, I need furniture service across the UAE.",
  },
  {
    label: "Free Quotation",
    action: "call" as const,
    message: "Hello Al-Awan Furniture, I would like a free quotation.",
  },
  {
    label: "Expert Installation",
    action: "whatsapp" as const,
    message: "Hello Al-Awan Furniture, I need professional furniture installation.",
  },
];

export function HeroTrustCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % trustItems.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + trustItems.length) % trustItems.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [paused, next]);

  const visible = [
    trustItems[index],
    trustItems[(index + 1) % trustItems.length],
  ];

  return (
    <div
      className="mt-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={prev}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ivory/20 bg-charcoal/40 text-ivory backdrop-blur-sm transition-colors hover:border-bronze/50"
          aria-label="Previous highlight"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="grid flex-1 grid-cols-2 gap-2 sm:gap-3">
          {visible.map((item) => {
            const isCall = item.action === "call";
            const href = isCall
              ? PHONE_TEL
              : buildWhatsAppLink(item.message);

            return (
              <a
                key={item.label}
                href={href}
                target={isCall ? undefined : "_blank"}
                rel={isCall ? undefined : "noopener noreferrer"}
                onClick={() =>
                  isCall
                    ? trackEvent("click_to_call", { location: "hero_trust_carousel" })
                    : trackEvent("whatsapp_click", { location: "hero_trust_carousel" })
                }
                className="group flex items-center justify-between gap-2 rounded-lg border border-bronze/30 bg-charcoal/40 px-3 py-3 backdrop-blur-sm transition-all hover:border-bronze/60 hover:bg-charcoal/55 sm:px-4"
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-bronze-light sm:text-[11px]">
                  {item.label}
                </p>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-110 ${
                    isCall
                      ? "bg-bronze/25 text-bronze-light"
                      : "bg-[#25D366]/20 text-[#25D366]"
                  }`}
                >
                  {isCall ? <Phone className="h-3.5 w-3.5" /> : <WhatsAppIcon size={14} />}
                </span>
              </a>
            );
          })}
        </div>

        <button
          type="button"
          onClick={next}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ivory/20 bg-charcoal/40 text-ivory backdrop-blur-sm transition-colors hover:border-bronze/50"
          aria-label="Next highlight"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-3 flex justify-center gap-1.5">
        {trustItems.map((item, i) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all ${
              i === index ? "w-6 bg-bronze-light" : "w-2 bg-ivory/30"
            }`}
            aria-label={`Show ${item.label}`}
          />
        ))}
      </div>
    </div>
  );
}
