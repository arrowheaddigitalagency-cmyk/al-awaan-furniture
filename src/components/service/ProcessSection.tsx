"use client";

import { PROCESS_STEPS } from "@/lib/constants";
import {
  SectionHeading,
  SectionReveal,
  StaggerChildren,
  StaggerItem,
} from "@/components/ui/FadeIn";

export function ProcessSection() {
  return (
    <SectionReveal className="section-gold-dark section-padding-sm relative overflow-hidden grain-overlay">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,160,108,0.15),_transparent_60%)]" />
      <div className="container-wide relative">
        <SectionHeading
          eyebrow="Our Process"
          title="From Concept to Installation"
          description="A clear, collaborative process designed to bring your custom furniture project to life."
          align="center"
          dark
          className="mx-auto mb-10 md:mb-12"
        />

        <div className="relative">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-bronze/30 to-transparent lg:block" />

          <StaggerChildren className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-6" stagger={0.12}>
            {PROCESS_STEPS.map((step) => (
              <StaggerItem key={step.step} variant="fade-up">
                <div className="group relative text-center lg:text-left">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-bronze/30 bg-bronze/10 transition-all duration-500 group-hover:scale-110 group-hover:border-bronze/50 group-hover:bg-bronze/20 lg:mx-0">
                    <span className="font-display text-xl text-bronze-light">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-ivory">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/75">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </SectionReveal>
  );
}
