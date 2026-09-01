"use client";

import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { PHONE_TEL } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";
import { buildWhatsAppLink, cn } from "@/lib/utils";

interface CallImageLinkProps {
  children: React.ReactNode;
  className?: string;
  location: string;
  whatsappMessage?: string;
}

const defaultWhatsAppMessage =
  "Hello Al-Awan Furniture, I saw your work and would like to discuss my project.";

export function CallImageLink({
  children,
  className,
  location,
  whatsappMessage = defaultWhatsAppMessage,
}: CallImageLinkProps) {
  const whatsappHref = buildWhatsAppLink(whatsappMessage);

  const handleImageCall = () => {
    trackEvent("click_to_call", { location });
    window.location.href = PHONE_TEL;
  };

  return (
    <div
      className={cn("group/call relative block cursor-pointer", className)}
      onClick={handleImageCall}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleImageCall();
        }
      }}
      role="link"
      tabIndex={0}
      aria-label="Call Al-Awan Furniture"
    >
      {children}

      <div className="pointer-events-none absolute inset-0 z-[2] bg-charcoal/0 transition-colors duration-300 group-hover/call:bg-charcoal/25" />

      <div
        className="absolute right-3 top-3 z-[15] flex gap-2 sm:right-4 sm:top-4 sm:gap-2.5"
        onClick={(e) => e.stopPropagation()}
      >
        <a
          href={PHONE_TEL}
          onClick={() => trackEvent("click_to_call", { location })}
          className="image-contact-icon image-contact-icon--call"
          aria-label="Call Al-Awan Furniture"
        >
          <Phone className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={2.25} />
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { location })}
          className="image-contact-icon image-contact-icon--whatsapp"
          aria-label="WhatsApp Al-Awan Furniture"
        >
          <WhatsAppIcon size={18} />
        </a>
      </div>
    </div>
  );
}
