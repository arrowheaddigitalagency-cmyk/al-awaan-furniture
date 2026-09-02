"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { DEFAULT_WHATSAPP_MESSAGE, PHONE_TEL } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";
import { buildWhatsAppLink, cn } from "@/lib/utils";

interface CallImageLinkProps {
  children: React.ReactNode;
  className?: string;
  location: string;
  whatsappMessage?: string;
  href?: string;
}

export function CallImageLink({
  children,
  className,
  location,
  whatsappMessage = DEFAULT_WHATSAPP_MESSAGE,
  href,
}: CallImageLinkProps) {
  const whatsappHref = buildWhatsAppLink(whatsappMessage);

  const content = (
    <>
      {children}
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
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn("group/call relative block", className)}>
        {content}
      </Link>
    );
  }

  return <div className={cn("group/call relative block", className)}>{content}</div>;
}
