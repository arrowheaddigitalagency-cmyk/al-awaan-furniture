import Image from "next/image";
import Link from "next/link";

export const showcaseImages = [
  {
    src: "/images/services/tv-units/IMG-20251223-WA0114-910x1024.jpg",
    alt: "Custom TV unit with integrated storage",
    category: "TV Units",
  },
  {
    src: "/images/services/cupboards/IMG-20251223-WA0105.jpg",
    alt: "Premium fitted wardrobe design",
    category: "Wardrobes",
  },
  {
    src: "/images/services/wall-paneling/IMG-20251223-WA0065-1-862x1024.jpg",
    alt: "Bedroom wall panel feature",
    category: "Wall Panels",
  },
  {
    src: "/images/services/kids-rooms/IMG-20251223-WA0042-1024x670.jpg",
    alt: "Kids room custom furniture",
    category: "Kids Rooms",
  },
  {
    src: "/images/services/curtains/IMG-20251223-WA0123-768x1024.jpg",
    alt: "Elegant custom curtains",
    category: "Curtains",
  },
  {
    src: "/images/services/dressing-tables/IMG-20251223-WA0054.jpg",
    alt: "Bedroom dressing table design",
    category: "Bedrooms",
  },
  {
    src: "/images/services/sofas-beds/IMG-20251223-WA0072-1.jpg",
    alt: "Custom sofa and bed upholstery",
    category: "Upholstery",
  },
  {
    src: "/images/services/gaming-rooms/IMG-20251223-WA0074-1.jpg",
    alt: "Gaming room interior setup",
    category: "Gaming Rooms",
  },
  {
    src: "/images/projects/IMG-20251223-WA0117-822x1024.jpg",
    alt: "Luxury living room furniture",
    category: "Living Rooms",
  },
  {
    src: "/images/projects/IMG-20251223-WA0118-828x1024.jpg",
    alt: "Modern media wall installation",
    category: "Media Walls",
  },
  {
    src: "/images/projects/IMG-20251223-WA0126.jpg",
    alt: "Custom curtain and interior styling",
    category: "Interiors",
  },
  {
    src: "/images/projects/IMG-20251223-WA0058.jpg",
    alt: "Bespoke bedroom furniture suite",
    category: "Bedrooms",
  },
];

export function HomeShowcaseGallery() {
  return (
    <section className="section-padding-sm relative overflow-hidden bg-charcoal text-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,160,108,0.12),_transparent_55%)]" />
      <div className="container-wide relative">
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-bronze-light">
              Our Craftsmanship
            </p>
            <h2 className="mt-2 font-display text-3xl text-ivory md:text-4xl">
              Real Projects. Real Finishing.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-ivory/65 md:text-base">
              A curated look at custom furniture, wardrobes, media walls, and interiors
              crafted for homes across the UAE.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-semibold text-bronze-light transition-colors hover:text-ivory"
          >
            View Full Portfolio →
          </Link>
        </div>

        <div className="columns-2 gap-3 md:columns-3 lg:columns-4 lg:gap-4">
          {showcaseImages.map((image, i) => (
            <div
              key={image.src}
              className="group mb-3 break-inside-avoid overflow-hidden rounded-lg border border-bronze/25 bg-charcoal-soft lg:mb-4"
            >
              <div className={`relative overflow-hidden ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-[4/5]" : "aspect-square"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-bronze-light md:text-[10px]">
                    {image.category}
                  </p>
                  <p className="mt-1 text-xs font-medium text-ivory/90 line-clamp-2 md:text-sm">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
