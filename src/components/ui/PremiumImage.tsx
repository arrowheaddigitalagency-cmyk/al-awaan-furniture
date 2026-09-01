"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface PremiumImageProps {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  shine?: boolean;
}

export function PremiumImage({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority,
  className,
  containerClassName,
  shine = true,
}: PremiumImageProps) {
  return (
    <div
      className={cn(
        "premium-image group relative h-full w-full overflow-hidden bg-charcoal/10",
        containerClassName
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]",
          className
        )}
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
      {shine && (
        <>
          <div className="premium-shine pointer-events-none absolute inset-0 z-20" />
          <div className="pointer-events-none absolute inset-0 z-20 ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-bronze/25" />
        </>
      )}
    </div>
  );
}
