"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { QuoteForm } from "./QuoteForm";
import { services } from "@/data/services";

export function ContactQuoteForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  const defaultService =
    services.find((s) => s.name === serviceParam)?.name ?? serviceParam ?? "";

  useEffect(() => {
    if (window.location.hash === "#quote-form") {
      document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return <QuoteForm defaultService={defaultService} id="quote-form" />;
}
