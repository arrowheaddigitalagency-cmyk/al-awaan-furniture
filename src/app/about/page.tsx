import Image from "next/image";
import { FadeIn, SectionHeading } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/layout/PageHero";
import { ProcessSection } from "@/components/service/ProcessSection";
import { CTASection } from "@/components/conversion/CTASection";
import { WHY_CHOOSE } from "@/lib/constants";
import { pageBanners } from "@/lib/banners";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Us | Al-Awan Furniture UAE",
  description:
    "Learn about Al-Awan Furniture — premium custom furniture and interior solutions crafted for homes across the UAE with attention to detail and craftsmanship.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={pageBanners.about}
        alt="Custom wardrobe and interior craftsmanship by Al-Awan Furniture"
        eyebrow="About Al-Awan Furniture"
        title="Craftsmanship Meets Custom Design"
        description="We create furniture and interior solutions designed around your space — not the other way around."
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="section-padding-sm !pt-10">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Approach"
              title="Design That Starts With Your Room"
              description="Every home is different. We begin each project by understanding your space, how you use it, and what you want it to feel like."
            />
            <p className="mt-4 text-base leading-relaxed text-warm-gray">
              Whether it is a custom wardrobe that maximizes storage, a media wall
              that anchors your living room, or upholstery that refreshes a beloved
              sofa — our focus is on practical design with premium finishing.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="image-flash image-glow relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/services/cupboards/IMG-20251223-WA0101.jpg"
                alt="Custom wardrobe craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding-sm bg-cream/40">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <div className="image-flash image-glow relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/services/wall-paneling/IMG-20251223-WA0061.jpg"
                alt="Wall paneling and bedroom design"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading
              eyebrow="Craftsmanship"
              title="Attention to Every Detail"
              description="From material selection to final installation, we take pride in the finishing touches that make furniture feel truly bespoke."
            />
            <p className="mt-4 text-base leading-relaxed text-warm-gray">
              Our team works with quality materials and proven techniques to deliver
              furniture that looks refined and performs well in everyday use — for
              families and homeowners across the UAE.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding-sm">
        <div className="container-wide">
          <FadeIn>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="What Sets Al-Awan Apart"
              align="center"
              className="mx-auto mb-10"
            />
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.06}>
                <div className="premium-card h-full p-6">
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

      <ProcessSection />
      <CTASection />
    </>
  );
}
