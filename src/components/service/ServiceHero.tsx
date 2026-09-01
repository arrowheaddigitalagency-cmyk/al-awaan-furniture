"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { CallImageLink } from "@/components/conversion/CallImageLink";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";
import type { Service } from "@/types";

interface ServiceHeroProps {
  service: Service;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal grain-overlay">
      <div className="absolute inset-0">
        <Image
          src={service.heroImage}
          alt={service.name}
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal/60 to-charcoal/45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(160,120,74,0.12),_transparent_60%)]" />
      </div>

      <div className="pointer-events-none absolute inset-4 border border-ivory/8 md:inset-8" />

      <div className="absolute left-0 right-0 top-0 z-10">
        <nav aria-label="Breadcrumb" className="container-wide py-4">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-ivory/55">
            <li>
              <a href="/" className="transition-colors hover:text-ivory">Home</a>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-ivory/30">/</span>
              <a href="/services" className="transition-colors hover:text-ivory">Services</a>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-ivory/30">/</span>
              <span className="text-ivory/90" aria-current="page">{service.shortName}</span>
            </li>
          </ol>
        </nav>
      </div>

      <div className="container-wide relative grid min-h-[58vh] items-center gap-10 py-20 pt-16 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:pt-20">
        <FadeIn>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-bronze/30 bg-bronze/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-bronze-light">
              {service.shortName}
            </span>
          </div>
          <h1 className="font-display text-4xl leading-[1.05] text-ivory md:text-5xl lg:text-6xl">
            {service.headline}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ivory/70 md:text-lg">
            {service.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/contact" variant="secondary" size="lg">
              Get Free Quote
            </Button>
            <a
              href={buildWhatsAppLink(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("whatsapp_click", {
                  location: "service_hero",
                  service: service.slug,
                })
              }
              className="inline-flex items-center justify-center gap-2.5 rounded-md border border-[#25D366] bg-[#25D366] px-9 py-4 text-sm font-medium text-white shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-0.5 hover:bg-[#1fb855] hover:shadow-xl"
            >
              <WhatsAppIcon size={20} />
              WhatsApp Us
            </a>
          </div>
          <a
            href={PHONE_TEL}
            onClick={() =>
              trackEvent("click_to_call", {
                location: "service_hero",
                service: service.slug,
              })
            }
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ivory/60 transition-colors hover:text-ivory"
          >
            <Phone className="h-4 w-4 text-bronze-light" />
            Call {PHONE_DISPLAY}
          </a>
        </FadeIn>

        <FadeIn delay={0.15} className="hidden lg:block">
          <div className="relative">
            <CallImageLink
              location={`service_hero_${service.slug}`}
              className="relative block aspect-[4/5] overflow-hidden rounded-lg shadow-2xl"
            >
              <Image
                src={service.heroImage}
                alt={`${service.name} example`}
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-500 group-hover/call:scale-[1.02]"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/15" />
            </CallImageLink>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 border-l-2 border-b-2 border-bronze/40" />
            <div className="absolute -right-4 -top-4 h-24 w-24 border-r-2 border-t-2 border-bronze/40" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
