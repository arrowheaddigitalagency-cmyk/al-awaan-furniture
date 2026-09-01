"use client";

import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { buildWhatsAppLink } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";
import { getServiceBySlug } from "@/data/services";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  label?: string;
  variant?: "button" | "floating";
}

const defaultMessage =
  "Hello Al-Awan Furniture, I would like to discuss my project and get a quotation.";

export function WhatsAppButton({
  message,
  className = "",
  label = "WhatsApp Us",
  variant = "button",
}: WhatsAppButtonProps) {
  const pathname = usePathname();
  const serviceSlug = pathname.startsWith("/services/")
    ? pathname.split("/")[2]
    : undefined;
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const resolvedMessage = message ?? service?.whatsappMessage ?? defaultMessage;
  const href = buildWhatsAppLink(resolvedMessage);

  const handleClick = () => {
    trackEvent("whatsapp_click", { label, location: variant });
  };

  if (variant === "floating") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`fixed bottom-8 right-6 z-40 items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-medium text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-all hover:scale-105 hover:shadow-[0_12px_40px_rgba(37,211,102,0.55)] ${className}`}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={22} />
        <span className="hidden lg:inline">{label}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
      aria-label={label}
    >
      <WhatsAppIcon size={18} />
      {label}
    </a>
  );
}
