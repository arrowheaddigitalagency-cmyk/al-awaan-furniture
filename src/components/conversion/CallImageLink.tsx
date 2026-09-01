"use client";

import { PHONE_TEL } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

interface CallImageLinkProps {
  children: React.ReactNode;
  className?: string;
  location: string;
}

export function CallImageLink({ children, className, location }: CallImageLinkProps) {
  return (
    <a
      href={PHONE_TEL}
      onClick={() => trackEvent("click_to_call", { location })}
      className={cn("group/call block", className)}
      aria-label="Call Al-Awan Furniture"
    >
      {children}
    </a>
  );
}
