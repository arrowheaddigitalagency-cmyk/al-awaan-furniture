"use client";

import { Phone } from "lucide-react";
import { PHONE_TEL } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const trustItems = [
  {
    label: "Custom Made",
    message: "Hello Al-Awan Furniture, I am interested in custom made furniture.",
  },
  {
    label: "UAE Wide Service",
    message: "Hello Al-Awan Furniture, I need furniture service across the UAE.",
  },
  {
    label: "Free Quotation",
    message: "Hello Al-Awan Furniture, I would like a free quotation.",
  },
  {
    label: "Expert Installation",
    message: "Hello Al-Awan Furniture, I need professional furniture installation.",
  },
];

function TrustCard({
  label,
  message,
}: {
  label: string;
  message: string;
}) {
  return (
    <div className="flex w-[220px] shrink-0 flex-col gap-3 rounded-lg border border-bronze/30 bg-charcoal/45 px-4 py-3 backdrop-blur-sm sm:w-[240px]">
      <p className="text-[10px] font-bold uppercase tracking-wider text-bronze-light sm:text-[11px]">
        {label}
      </p>
      <div className="flex gap-2">
        <a
          href={PHONE_TEL}
          onClick={() => trackEvent("click_to_call", { location: "hero_trust_carousel" })}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-bronze/40 bg-bronze/90 py-2 text-[10px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-bronze"
        >
          <Phone className="h-3 w-3" />
          Call
        </a>
        <a
          href={buildWhatsAppLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { location: "hero_trust_carousel" })}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-[#25D366] py-2 text-[10px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#1fb855]"
        >
          <WhatsAppIcon size={12} />
          Chat
        </a>
      </div>
    </div>
  );
}

export function HeroTrustCarousel() {
  const loopItems = [...trustItems, ...trustItems];

  return (
    <div className="mt-8 overflow-hidden">
      <div className="trust-marquee flex w-max gap-3">
        {loopItems.map((item, i) => (
          <TrustCard key={`${item.label}-${i}`} label={item.label} message={item.message} />
        ))}
      </div>
    </div>
  );
}
