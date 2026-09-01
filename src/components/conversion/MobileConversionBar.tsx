"use client";

import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { PHONE_TEL } from "@/lib/constants";
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
      <div className="mx-3 mb-3 overflow-hidden rounded-2xl border border-white/10 bg-charcoal/95 shadow-[0_-8px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <div className="grid grid-cols-2">
          <a
            href={PHONE_TEL}
            onClick={() => trackEvent("click_to_call", { location: "mobile_bar" })}
            className="group flex items-center justify-center gap-2.5 border-r border-white/10 py-4 transition-colors active:bg-white/5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bronze/20 ring-1 ring-bronze/40 transition-all group-active:scale-95">
              <Phone className="h-5 w-5 text-bronze-light" />
            </span>
            <div className="text-left">
              <p className="text-[10px] font-medium uppercase tracking-wider text-ivory/50">
                Call Now
              </p>
              <p className="text-sm font-semibold text-ivory">+971 56 459 4043</p>
            </div>
          </a>

          <a
            href={buildWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("whatsapp_click", { location: "mobile_bar" })
            }
            className="group flex items-center justify-center gap-2.5 py-4 transition-colors active:bg-white/5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-all group-active:scale-95">
              <WhatsAppIcon size={22} />
            </span>
            <div className="text-left">
              <p className="text-[10px] font-medium uppercase tracking-wider text-ivory/50">
                WhatsApp
              </p>
              <p className="text-sm font-semibold text-ivory">Chat With Us</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
