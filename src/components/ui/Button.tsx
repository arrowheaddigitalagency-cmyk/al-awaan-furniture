import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp" | "luxury";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  children: ReactNode;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-charcoal text-ivory hover:bg-charcoal-soft border border-charcoal shadow-lg shadow-charcoal/20 hover:shadow-xl hover:-translate-y-0.5",
  secondary:
    "bg-gradient-to-r from-bronze to-bronze-dark text-white hover:from-bronze-light hover:to-bronze border border-bronze/50 shadow-md shadow-bronze/15 hover:shadow-lg hover:shadow-bronze/20 hover:-translate-y-0.5 btn-shine",
  luxury:
    "bg-transparent text-ivory border border-ivory/30 hover:bg-ivory hover:text-charcoal backdrop-blur-sm hover:-translate-y-0.5",
  outline:
    "bg-transparent text-charcoal border border-charcoal/30 hover:bg-charcoal hover:text-ivory hover:border-charcoal hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-charcoal hover:bg-cream border border-transparent",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1fb855] border border-[#25D366] shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-xs tracking-wide uppercase",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-sm tracking-wide",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none disabled:transform-none",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
