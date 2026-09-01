"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  alt: string;
  className?: string;
}

export function ImageGallery({ images, alt, className }: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, [images.length]);
  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, close, prev, next]);

  if (images.length === 0) return null;

  return (
    <>
      <div
        className={cn(
          "columns-1 gap-4 sm:columns-2 lg:columns-3",
          className
        )}
      >
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg focus-visible:outline-none"
            onClick={() => setLightboxIndex(i)}
            aria-label={`View ${alt} image ${i + 1}`}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
              <Image
                src={src}
                alt={`${alt} - project photo ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={prev}
            className="absolute left-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="relative h-[70vh] w-full max-w-5xl">
            <Image
              src={images[lightboxIndex]}
              alt={`${alt} - enlarged view`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:right-16"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
