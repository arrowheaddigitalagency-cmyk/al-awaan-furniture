"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { gtagSendEvent, type TrackingPayload } from "@/lib/tracking";

interface CallLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> {
  href: string;
  children: ReactNode;
  payload?: TrackingPayload;
}

export function CallLink({
  href,
  children,
  payload,
  className,
  ...rest
}: CallLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    gtagSendEvent(href, "call_click", payload);
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
