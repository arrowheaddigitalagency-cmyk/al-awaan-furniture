"use client";

import { Phone } from "lucide-react";
import { PHONE_TEL } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/utils";

interface CardContactActionsProps {
  message?: string;
  location: string;
  size?: "sm" | "md";
  className?: string;
}

const defaultMessage =
  "Hello Al-Awan Furniture, I would like to get a quotation.";

export function CardContactActions({
  message = defaultMessage,
  location,
  size = "sm",
  className,
}: CardContactActionsProps) {
  const btnClass =
    size === "sm"
      ? "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wide"
      : "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wide";

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      <a
        href={PHONE_TEL}
        onClick={(e) => {
          e.stopPropagation();
          trackEvent("click_to_call", { location });
        }}
        className={cn(
          btnClass,
          "border border-bronze/40 bg-bronze/90 text-white transition-all hover:bg-bronze"
        )}
      >
        <Phone className="h-3 w-3" />
        Call
      </a>
      <a
        href={buildWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.stopPropagation();
          trackEvent("whatsapp_click", { location });
        }}
        className={cn(
          btnClass,
          "border border-[#1fb855] bg-[#25D366] text-white transition-all hover:bg-[#1fb855]"
        )}
      >
        <WhatsAppIcon size={12} />
        WhatsApp
      </a>
    </div>
  );
}
