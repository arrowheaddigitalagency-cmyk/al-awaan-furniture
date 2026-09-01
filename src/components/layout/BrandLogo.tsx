import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  priority?: boolean;
  frame?: "header" | "header-overlay" | "footer";
}

export function BrandLogo({ className, priority, frame }: BrandLogoProps) {
  const image = (
    <Image
      src="/logo-footer.png"
      alt="Al-Awan Furniture"
      width={280}
      height={72}
      className={cn(
        "h-10 w-auto object-contain sm:h-11 lg:h-12",
        frame === "footer" && "h-12 sm:h-14",
        className
      )}
      priority={priority}
    />
  );

  if (!frame) return image;

  const frameClass =
    frame === "footer"
      ? "inline-flex rounded-lg border border-bronze/30 bg-white px-3 py-2 shadow-md shadow-bronze/10"
      : frame === "header-overlay"
        ? "inline-flex rounded-lg border border-bronze/25 bg-white/95 px-2.5 py-1.5 shadow-md shadow-black/10"
        : "inline-flex rounded-lg border border-bronze/25 bg-white px-2.5 py-1.5 shadow-sm shadow-black/5";

  return <span className={frameClass}>{image}</span>;
}
