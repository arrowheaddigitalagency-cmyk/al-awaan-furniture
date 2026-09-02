"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { pageBanners } from "@/lib/banners";
import { PHONE_DISPLAY, PHONE_TEL, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";
import { Phone } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

interface CTASectionProps {
  title?: string;
  description?: string;
  whatsappMessage?: string;
  showPhone?: boolean;
}

export function CTASection({
  title = "Have an Idea for Your Space?",
  description = "Share your requirements with us and let our team help you create furniture designed around your home.",
  whatsappMessage = DEFAULT_WHATSAPP_MESSAGE,
  showPhone = true,
}: CTASectionProps) {
  return (
    <section className="section-gold-dark relative isolate mb-0 overflow-hidden py-20 pb-0 md:py-28 md:pb-0">
      <div className="absolute inset-0">
        <Image
          src={pageBanners.cta}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-charcoal/88" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,160,108,0.18),_transparent_65%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-bronze/40 to-transparent" />
      </div>

      <div className="container-wide relative">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn variant="blur">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-bronze-light">
              Start Your Project
            </p>
            <h2 className="hero-text-shadow font-display text-3xl font-medium text-white md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="hero-text-shadow-sm mt-5 text-base leading-relaxed text-ivory/90 md:text-lg">
              {description}
            </p>
          </FadeIn>
          <FadeIn variant="blur" delay={0.2} className="mt-10 flex flex-col items-center justify-center gap-4 pb-20 sm:flex-row sm:flex-wrap md:pb-28">
            <Button href="/contact" variant="secondary" size="lg">
              Get Free Quote
            </Button>
            <Button
              href={buildWhatsAppLink(whatsappMessage)}
              variant="whatsapp"
              size="lg"
              external
            >
              <WhatsAppIcon size={20} />
              WhatsApp Us
            </Button>
            {showPhone && (
              <Button href={PHONE_TEL} variant="luxury" size="lg">
                <Phone className="h-4 w-4" />
                Call {PHONE_DISPLAY}
              </Button>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
