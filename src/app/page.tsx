"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  FadeIn,
  SectionHeading,
  SectionReveal,
  StaggerChildren,
  StaggerItem,
} from "@/components/ui/FadeIn";
import { HeroSlider } from "@/components/home/HeroSlider";
import { HomeShowcaseGallery } from "@/components/home/HomeShowcaseGallery";
import { TrustStrip } from "@/components/service/TrustStrip";
import { ProcessSection } from "@/components/service/ProcessSection";
import { CTASection } from "@/components/conversion/CTASection";
import { CallImageLink } from "@/components/conversion/CallImageLink";
import { services } from "@/data/services";
import { getFeaturedProjects } from "@/data/projects";

const featuredServices = [
  "tv-units",
  "cupboards",
  "sofa-bed-upholstery",
  "wall-paneling",
  "kids-rooms",
  "curtains",
];

export default function HomePage() {
  const projects = getFeaturedProjects().slice(0, 9);

  return (
    <>
      <HeroSlider />
      <TrustStrip />

      <SectionReveal className="section-padding-sm !pt-10 section-luxury relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-bronze/5 blur-3xl" />
        <div className="container-wide relative">
          <SectionHeading
            eyebrow="What We Do"
            title="Crafted for the Way You Live"
            description="From bespoke wardrobes to media walls and upholstery — every piece is designed around your room, your style, and your daily routine."
            className="mb-12 md:mb-14"
          />

          <StaggerChildren className="grid gap-5 md:grid-cols-12" stagger={0.12}>
            {featuredServices.map((slug, i) => {
              const service = services.find((s) => s.slug === slug);
              if (!service) return null;
              const isLarge = i === 0 || i === 3;

              return (
                <StaggerItem
                  key={slug}
                  variant="scale"
                  className={isLarge ? "md:col-span-7" : "md:col-span-5"}
                >
                  <article className="group relative overflow-hidden rounded-lg border border-bronze/25">
                    <CallImageLink
                      location="home_service_card"
                      whatsappMessage={`Hello Al-Awan Furniture, I am interested in ${service.name}.`}
                      className={`image-flash image-glow relative overflow-hidden ${isLarge ? "aspect-[16/10]" : "aspect-[4/3]"}`}
                    >
                      <Image
                        src={service.heroImage}
                        alt={service.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover/call:scale-105"
                      />
                      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-charcoal/10" />
                      <div className="absolute inset-0 z-[1] ring-1 ring-inset ring-white/10" />
                    </CallImageLink>

                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8 pointer-events-none">
                      <span className="inline-block rounded-full border border-bronze/30 bg-bronze/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-bronze-light backdrop-blur-sm">
                        {service.shortName}
                      </span>
                      <h3 className="mt-3 font-display text-2xl text-ivory md:text-3xl lg:text-4xl">
                        <Link
                          href={`/services/${slug}`}
                          className="pointer-events-auto hover:text-bronze-light"
                        >
                          {service.name}
                        </Link>
                      </h3>
                      <p className="mt-2 max-w-md text-sm text-ivory/70 line-clamp-2">
                        {service.description}
                      </p>
                      <Link
                        href={`/services/${slug}`}
                        className="pointer-events-auto mt-4 inline-flex items-center gap-2 text-sm font-medium text-bronze-light transition-all hover:gap-3"
                      >
                        Explore Service
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerChildren>

          <FadeIn variant="fade-up" delay={0.3} className="mt-12 text-center">
            <Button href="/services" variant="outline" size="lg">
              View All Services
            </Button>
          </FadeIn>
        </div>
      </SectionReveal>

      <SectionReveal className="section-padding-sm bg-cream/60 relative">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container-wide relative">
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured Projects"
            description="A selection of our recent custom furniture and interior work across the UAE."
            className="mb-14"
          />

          <StaggerChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {projects.map((project) => (
              <StaggerItem key={project.id} variant="fade-up">
                <article className="premium-card group image-glow overflow-hidden">
                  <CallImageLink
                    location="home_project_card"
                    whatsappMessage={`Hello Al-Awan Furniture, I am interested in your ${project.title} project.`}
                    className="image-flash relative block aspect-[4/5] overflow-hidden"
                  >
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover/call:scale-105"
                    />
                    <div className="absolute inset-0 z-[1] bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-bronze-light">
                        {project.category}
                      </p>
                      <h3 className="mt-1 font-display text-xl text-ivory md:text-2xl">
                        {project.title}
                      </h3>
                    </div>
                  </CallImageLink>
                </article>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn variant="fade-up" delay={0.2} className="mt-12">
            <Button href="/projects" variant="primary" size="lg">
              View All Projects
            </Button>
          </FadeIn>
        </div>
      </SectionReveal>

      <SectionReveal className="section-padding-sm overflow-hidden">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn variant="fade-right" className="relative">
              <CallImageLink
                location="home_about_image"
                className="image-flash image-glow relative block aspect-[4/5] overflow-hidden rounded-lg"
              >
                <Image
                  src="/images/hero/hero-bedroom.jpg"
                  alt="Custom bedroom furniture by Al-Awan Furniture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </CallImageLink>
              <FadeIn
                variant="scale"
                delay={0.3}
                className="absolute -bottom-6 -right-4 hidden md:block lg:-right-8"
              >
                <CallImageLink
                  location="home_about_image_accent"
                  className="image-flash image-glow relative block aspect-square w-48 overflow-hidden rounded-lg border-4 border-ivory shadow-2xl lg:w-56"
                >
                  <Image
                    src="/images/hero/hero-wardrobe.jpg"
                    alt="Custom wardrobe detail"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </CallImageLink>
              </FadeIn>
            </FadeIn>

            <FadeIn variant="fade-left" delay={0.15}>
              <SectionHeading
                eyebrow="About Al-Awan"
                title="Furniture Tailored to Your Room"
                description="We believe great furniture starts with understanding your space. Every project begins with listening — to how you use your rooms, what you need to store, and the atmosphere you want to create."
              />
              <p className="mt-5 text-base leading-relaxed text-warm-gray">
                From consultation and measurement to production and installation,
                our team works closely with you to deliver custom pieces with
                premium finishing and practical design — for homes across the UAE.
              </p>
              <StaggerChildren className="mt-8 grid grid-cols-2 gap-4" stagger={0.08}>
                {["Custom Made", "UAE Service", "Premium Finish", "Free Quote"].map(
                  (item) => (
                    <StaggerItem key={item} variant="scale">
                      <div className="rounded-lg border border-border bg-cream/50 px-4 py-3 text-center text-sm font-medium text-charcoal transition-colors hover:border-bronze/30 hover:bg-cream">
                        {item}
                      </div>
                    </StaggerItem>
                  )
                )}
              </StaggerChildren>
              <FadeIn variant="fade-up" delay={0.4} className="mt-8">
                <Button href="/about" variant="outline" size="lg">
                  Learn More About Us
                </Button>
              </FadeIn>
            </FadeIn>
          </div>
        </div>
      </SectionReveal>

      <ProcessSection />
      <HomeShowcaseGallery />
      <CTASection />
    </>
  );
}
