"use client";

import { useEffect } from "react";
import { captureAttributionFromUrl } from "@/lib/attribution";

export function TrackingProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    captureAttributionFromUrl();
  }, []);

  return <>{children}</>;
}
