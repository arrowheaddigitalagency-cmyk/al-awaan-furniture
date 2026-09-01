import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn, SectionHeading } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/conversion/CTASection";
import { services, serviceGroups, getServiceBySlug } from "@/data/services";
import { pageBanners } from "@/lib/banners";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Our Services | Custom Furniture UAE | Al-Awan Furniture",
  description:
    "Explore our full range of custom furniture and interior services in the UAE — upholstery, wardrobes, TV units, curtains, kids rooms, wall paneling, and more.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image={pageBanners.services}
        alt="Custom media wall and TV unit by Al-Awan Furniture"
        eyebrow="Our Services"
        title="Custom Furniture & Interior Solutions"
        description="From upholstery and bespoke beds to media walls, wardrobes, and complete room interiors — every service is designed around your home."
        breadcrumbs={[{ label: "Services" }]}
      />

      {serviceGroups.map((group, gi) => (
        <section
          key={group.title}
          className={`section-padding-sm ${gi % 2 === 0 ? "bg-ivory" : "bg-cream/40"}`}
        >
          <div className="container-wide">
            <FadeIn>
              <SectionHeading
                eyebrow={group.title}
                title={group.description}
                className="mb-8 capitalize"
              />
            </FadeIn>

            <div className="space-y-10">
              {group.services.map((slug, i) => {
                const service = getServiceBySlug(slug);
                if (!service) return null;
                const reversed = i % 2 === 1;

                return (
                  <FadeIn key={slug} delay={i * 0.05}>
                    <div
                      className={`grid items-center gap-8 md:grid-cols-2 md:gap-10 ${
                        reversed ? "md:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      <div className="image-glow relative aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                          src={service.heroImage}
                          alt={service.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                        />
                      </div>
                      <div>
                        <h2 className="text-3xl text-charcoal md:text-4xl">
                          {service.name}
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-warm-gray">
                          {service.description}
                        </p>
                        <Link
                          href={`/services/${slug}`}
                          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-bronze hover:text-charcoal"
                        >
                          Explore Service <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding-sm border-t border-border bg-ivory">
        <div className="container-wide">
          <h2 className="mb-6 text-2xl text-charcoal">All Services</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-lg border border-border bg-white px-5 py-4 text-sm font-medium text-charcoal transition-all hover:border-bronze hover:text-bronze hover:shadow-sm"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
