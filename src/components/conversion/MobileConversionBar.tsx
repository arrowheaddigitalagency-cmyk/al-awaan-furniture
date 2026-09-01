"use client";

import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";
import { getServiceBySlug } from "@/data/services";

const defaultMessage =
  "Hello Al-Awan Furniture, I would like to get a quotation.";

export function MobileConversionBar() {
  const pathname = usePathname();
  const serviceSlug = pathname.startsWith("/services/")
    ? pathname.split("/")[2]
    : undefined;
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const whatsappMessage = service?.whatsappMessage ?? defaultMessage;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      role="navigation"
      aria-label="Quick contact"
    >
      <div className="border-t border-bronze/20 bg-charcoal/98 shadow-[0_-10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="grid grid-cols-2">
          <a
            href={PHONE_TEL}
            onClick={() => trackEvent("click_to_call", { location: "mobile_bar" })}
            className="group flex items-center justify-center gap-2.5 border-r border-white/10 px-3 py-3.5 transition-colors active:bg-white/5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-bronze to-bronze-dark text-white shadow-md shadow-bronze/30">
              <Phone className="h-5 w-5" />
            </span>
            <div className="text-left">
              <p className="text-[9px] font-bold uppercase tracking-wider text-bronze-light">
                Call Now
              </p>
              <p className="text-xs font-bold text-ivory">{PHONE_DISPLAY}</p>
            </div>
          </a>

          <a
            href={buildWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "mobile_bar" })}
            className="group flex items-center justify-center gap-2.5 px-3 py-3.5 transition-colors active:bg-white/5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md shadow-[#25D366]/35">
              <WhatsAppIcon size={22} />
            </span>
            <div className="text-left">
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#7dffb0]">
                WhatsApp
              </p>
              <p className="text-xs font-bold text-ivory">Chat With Us</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
