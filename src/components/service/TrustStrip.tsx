"use client";

import { TRUST_ITEMS } from "@/lib/constants";
import { Ruler, Gem, Wrench, MapPin } from "lucide-react";
import { StaggerChildren, StaggerItem } from "@/components/ui/FadeIn";

const icons = [Ruler, Gem, Wrench, MapPin];

export function TrustStrip() {
  return (
    <section className="section-gold-dark relative border-t border-bronze/20 py-5 md:py-6">
      <div className="container-wide">
        <StaggerChildren className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6" stagger={0.08}>
          {TRUST_ITEMS.map((item, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={item} variant="fade-up">
                <div className="group flex flex-col items-center gap-2.5 px-2 py-2 text-center md:flex-row md:gap-3 md:text-left">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bronze/15 ring-1 ring-bronze/25 transition-all duration-300 group-hover:bg-bronze/25">
                    <Icon className="h-4 w-4 text-bronze-light" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold text-ivory md:text-sm">{item}</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
