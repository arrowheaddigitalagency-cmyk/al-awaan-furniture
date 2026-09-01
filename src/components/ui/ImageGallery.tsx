"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { CallImageLink } from "@/components/conversion/CallImageLink";

interface ImageGalleryProps {
  images: string[];
  alt: string;
  className?: string;
  location?: string;
}

export function ImageGallery({
  images,
  alt,
  className,
  location = "service_gallery",
}: ImageGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className={cn("columns-1 gap-4 sm:columns-2 lg:columns-3", className)}>
      {images.map((src, i) => (
        <CallImageLink
          key={src}
          location={location}
          className="image-flash group mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
            <Image
              src={src}
              alt={`${alt} - project photo ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover/call:scale-105"
            />
          </div>
        </CallImageLink>
      ))}
    </div>
  );
}
