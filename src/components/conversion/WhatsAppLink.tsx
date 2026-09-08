"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { gtagSendEvent, type TrackingPayload } from "@/lib/tracking";

interface WhatsAppLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> {
  href: string;
  children: ReactNode;
  payload?: TrackingPayload;
}

export function WhatsAppLink({
  href,
  children,
  payload,
  className,
  ...rest
}: WhatsAppLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    gtagSendEvent(href, payload);
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
