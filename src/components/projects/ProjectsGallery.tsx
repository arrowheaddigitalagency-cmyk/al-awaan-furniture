"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeIn, SectionHeading } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/conversion/CTASection";
import { CallImageLink } from "@/components/conversion/CallImageLink";
import { projectCategories, projects } from "@/data/projects";
import { pageBanners } from "@/lib/banners";
import { cn } from "@/lib/utils";

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        image={pageBanners.projects}
        alt="Kids room interior project by Al-Awan Furniture"
        eyebrow="Our Work"
        title="Projects & Portfolio"
        description="Explore our custom furniture and interior projects — from media walls and wardrobes to bedrooms, curtains, and kids rooms."
        breadcrumbs={[{ label: "Projects" }]}
      />

      <section className="section-padding-sm">
        <div className="container-wide">
          <div className="mb-8 flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === cat
                    ? "border-charcoal bg-charcoal text-ivory"
                    : "border-border bg-white text-charcoal hover:border-bronze"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <FadeIn key={project.id} delay={i * 0.05}>
                <article className="premium-card group overflow-hidden">
                  <CallImageLink
                    location="projects_gallery"
                    className="relative block aspect-[4/5] overflow-hidden"
                  >
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover/call:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/call:opacity-100" />
                  </CallImageLink>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-wider text-bronze">
                      {project.category}
                    </p>
                    <h2 className="mt-1 text-xl text-charcoal">{project.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                      {project.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-10 text-center text-warm-gray">
              No projects found in this category yet.
            </p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
