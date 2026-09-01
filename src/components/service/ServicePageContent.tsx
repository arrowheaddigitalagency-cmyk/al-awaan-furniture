"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, SectionHeading } from "@/components/ui/FadeIn";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { TrustStrip } from "@/components/service/TrustStrip";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ProcessSection } from "@/components/service/ProcessSection";
import { CTASection } from "@/components/conversion/CTASection";
import { QuoteForm } from "@/components/conversion/QuoteForm";
import { WHY_CHOOSE } from "@/lib/constants";
import { getRelatedProjects } from "@/data/projects";
import { trackEvent } from "@/lib/tracking";
import type { Service } from "@/types";

interface ServicePageContentProps {
  service: Service;
}

export function ServicePageContent({ service }: ServicePageContentProps) {
  const relatedProjects = getRelatedProjects(service.relatedProjectCategories);

  useEffect(() => {
    trackEvent("service_view", { service: service.slug });
  }, [service.slug]);

  return (
    <>
      <ServiceHero service={service} />
      <TrustStrip />

      <section className="section-padding-sm">
        <div className="container-wide max-w-3xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Overview"
              title={`About Our ${service.shortName} Service`}
            />
            <p className="mt-6 text-base leading-relaxed text-warm-gray">
              {service.intro}
            </p>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm text-charcoal"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                  {benefit}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding-sm bg-cream/50 relative">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }} />
        <div className="container-wide relative">
          <FadeIn>
            <SectionHeading
              eyebrow="Gallery"
              title="Our Work"
              description={`Explore recent ${service.shortName.toLowerCase()} projects from our portfolio.`}
              align="center"
              className="mx-auto mb-8"
            />
          </FadeIn>
          <ImageGallery images={service.gallery} alt={service.name} />
        </div>
      </section>

      <section className="section-padding-sm">
        <div className="container-wide">
          <FadeIn>
            <div id="quote-form" className="premium-card mx-auto max-w-xl p-6 md:p-8">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-bronze">
                Free Quotation
              </p>
              <h2 className="font-display text-2xl text-charcoal">Request a Quote</h2>
              <p className="mb-6 mt-2 text-sm text-warm-gray">
                Tell us about your project and we will get back to you shortly.
              </p>
              <QuoteForm defaultService={service.name} compact />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding-sm">
        <div className="container-wide">
          <FadeIn>
            <SectionHeading
              eyebrow="Customization"
              title="Tailored to Your Preferences"
              description="Every project is unique. Here are some of the options available for your space."
              align="center"
              className="mx-auto mb-8"
            />
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.customization.map((group, i) => (
              <FadeIn key={group.title} delay={i * 0.08}>
                <div className="premium-card h-full p-6">
                  <h3 className="font-display text-xl text-charcoal">{group.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-warm-gray">
                        <span className="h-1 w-1 rounded-full bg-bronze" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="section-padding-sm bg-white">
        <div className="container-wide">
          <FadeIn>
            <SectionHeading
              eyebrow="Why Al-Awan"
              title="Why Choose Al-Awan Furniture"
              align="center"
              className="mx-auto mb-8"
            />
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.06}>
                <div className="premium-card h-full p-5">
                  <h3 className="text-lg text-charcoal">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section-padding-sm bg-cream/40">
          <div className="container-wide">
            <FadeIn>
              <SectionHeading
                eyebrow="Related Work"
                title="Related Projects"
                align="center"
                className="mx-auto mb-8"
              />
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedProjects.map((project, i) => (
                <FadeIn key={project.id} delay={i * 0.08}>
                  <article className="premium-card group overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs uppercase tracking-wider text-bronze">
                        {project.category}
                      </p>
                      <h3 className="mt-1 text-lg text-charcoal">{project.title}</h3>
                      <p className="mt-2 text-sm text-warm-gray line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/projects"
                className="text-sm font-medium text-bronze hover:text-charcoal"
              >
                View All Projects →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="section-padding">
        <div className="container-wide">
          <FadeIn>
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              align="center"
              className="mx-auto mb-10"
            />
          </FadeIn>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={service.faq} />
          </div>
        </div>
      </section>

      <CTASection whatsappMessage={service.whatsappMessage} />
    </>
  );
}
