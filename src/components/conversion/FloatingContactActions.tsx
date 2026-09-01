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

export function FloatingContactActions() {
  const pathname = usePathname();
  const serviceSlug = pathname.startsWith("/services/")
    ? pathname.split("/")[2]
    : undefined;
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const whatsappMessage = service?.whatsappMessage ?? defaultMessage;
  const whatsappHref = buildWhatsAppLink(whatsappMessage);

  return (
    <div
      className="fixed bottom-28 right-4 z-[55] hidden flex-col gap-3 md:bottom-8 md:right-6 md:flex"
      aria-label="Quick contact actions"
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_click", { location: "floating_stack" })}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/35 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/45"
        aria-label="Chat on WhatsApp"
        title="WhatsApp Us"
      >
        <WhatsAppIcon size={26} />
      </a>

      <a
        href={PHONE_TEL}
        onClick={() => trackEvent("click_to_call", { location: "floating_stack" })}
        className="group flex h-14 w-14 items-center justify-center rounded-full border border-bronze/40 bg-gradient-to-br from-bronze to-bronze-dark text-white shadow-lg shadow-bronze/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-bronze/40"
        aria-label="Call us now"
        title="Call Now"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
