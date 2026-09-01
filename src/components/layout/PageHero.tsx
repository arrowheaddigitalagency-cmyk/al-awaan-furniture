import Image from "next/image";

interface PageHeroProps {
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  compact?: boolean;
}

export function PageHero({
  image,
  alt,
  eyebrow,
  title,
  description,
  breadcrumbs,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-charcoal grain-overlay ${
        compact ? "min-h-[42vh]" : "min-h-[52vh] md:min-h-[58vh]"
      }`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal/92 via-charcoal/72 to-charcoal/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-charcoal/35" />
      <div className="pointer-events-none absolute inset-4 border border-ivory/10 md:inset-8" />

      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="absolute left-0 right-0 top-0 z-10">
          <nav aria-label="Breadcrumb" className="container-wide py-4">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-ivory/55">
              <li>
                <a href="/" className="transition-colors hover:text-ivory">
                  Home
                </a>
              </li>
              {breadcrumbs.map((item, i) => (
                <li key={item.label} className="flex items-center gap-1">
                  <span className="text-ivory/30">/</span>
                  {item.href && i < breadcrumbs.length - 1 ? (
                    <a href={item.href} className="transition-colors hover:text-ivory">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-ivory/90" aria-current="page">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      )}

      <div className="container-wide relative flex min-h-[inherit] items-end pb-12 pt-24 md:pb-16 md:pt-28">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-bronze-light">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl leading-[1.05] text-ivory md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ivory/70 md:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
