"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/conversion/CTASection";
import {
  getServiceHrefForProject,
  projectCategories,
  projects,
} from "@/data/projects";
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
            {filtered.map((project, i) => {
              const href = getServiceHrefForProject(project);

              return (
                <FadeIn key={project.id} delay={i * 0.05}>
                  <article className="premium-card group overflow-hidden">
                    <Link href={href} className="block">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>
                      <div className="p-5">
                        <p className="text-xs uppercase tracking-wider text-bronze">
                          {project.category}
                        </p>
                        <h2 className="mt-1 text-xl text-charcoal transition-colors group-hover:text-bronze">
                          {project.title}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                          {project.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-bronze">
                          View Service
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  </article>
                </FadeIn>
              );
            })}
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
