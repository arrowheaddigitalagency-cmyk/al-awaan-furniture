"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "blur"
  | "none";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  variant?: AnimationVariant;
  duration?: number;
  once?: boolean;
}

const variantMap: Record<
  AnimationVariant,
  { initial: Record<string, number | string>; animate: Record<string, number | string> }
> = {
  "fade-up": { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } },
  "fade-down": { initial: { opacity: 0, y: -24 }, animate: { opacity: 1, y: 0 } },
  "fade-left": { initial: { opacity: 0, x: -24 }, animate: { opacity: 1, x: 0 } },
  "fade-right": { initial: { opacity: 0, x: 24 }, animate: { opacity: 1, x: 0 } },
  scale: { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 } },
  blur: { initial: { opacity: 0, filter: "blur(6px)" }, animate: { opacity: 1, filter: "blur(0px)" } },
  none: { initial: { opacity: 0 }, animate: { opacity: 1 } },
};

function directionToVariant(
  direction: FadeInProps["direction"]
): AnimationVariant {
  if (direction === "down") return "fade-down";
  if (direction === "left") return "fade-left";
  if (direction === "right") return "fade-right";
  if (direction === "none") return "none";
  return "fade-up";
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  variant,
  duration = 0.75,
  once = true,
}: FadeInProps) {
  const reduced = useReducedMotion();
  const v = variantMap[variant ?? directionToVariant(direction)];

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={v.animate}
      viewport={{ once, margin: "-40px", amount: 0.15 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({
  children,
  className,
  stagger = 0.1,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-40px", amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variant = "fade-up",
}: {
  children: ReactNode;
  className?: string;
  variant?: AnimationVariant;
}) {
  const reduced = useReducedMotion();
  const v = variantMap[variant];

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={v.animate}
      whileInView={v.animate}
      viewport={{ once: true, margin: "-40px", amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionReveal({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial={false}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <FadeIn variant="blur" className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <div
          className={cn(
            "mb-4 flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          <motion.span
            className="gold-line-left"
            initial={false}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformOrigin: "left" }}
          />
          <p
            className={cn(
              "text-[11px] font-semibold uppercase tracking-[0.25em]",
              dark ? "text-bronze-light" : "text-bronze"
            )}
          >
            {eyebrow}
          </p>
        </div>
      )}
      <h2
        className={cn(
          "text-3xl leading-[1.1] md:text-4xl lg:text-[2.75rem]",
          dark ? "text-ivory" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            dark ? "text-ivory/65" : "text-warm-gray"
          )}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
