import { MAP_EMBED_URL, MAP_URL, BUSINESS_ADDRESS } from "@/lib/constants";
import { MapPin, ExternalLink } from "lucide-react";

interface GoogleMapProps {
  variant?: "light" | "dark";
  className?: string;
}

export function GoogleMap({ variant = "dark", className = "" }: GoogleMapProps) {
  const isDark = variant === "dark";

  return (
    <div className={className}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <MapPin className={`mt-0.5 h-5 w-5 shrink-0 ${isDark ? "text-bronze-light" : "text-bronze"}`} />
          <div>
            <p className={`text-sm font-semibold ${isDark ? "text-ivory" : "text-charcoal"}`}>
              Visit Our Workshop
            </p>
            <p className={`text-sm ${isDark ? "text-ivory/55" : "text-warm-gray"}`}>
              {BUSINESS_ADDRESS}
            </p>
          </div>
        </div>
        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${
            isDark ? "text-bronze-light hover:text-ivory" : "text-bronze hover:text-charcoal"
          }`}
        >
          Open in Google Maps
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
      <div className="relative aspect-[16/7] overflow-hidden rounded-lg shadow-[0_4px_30px_rgba(160,120,74,0.12)] ring-1 ring-bronze/20 sm:aspect-[21/9]">
        <iframe
          src={MAP_EMBED_URL}
          title="Al-Awan Furniture location — Industrial Area Sajja Sharjah"
          className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-[1.05] transition-all duration-500 hover:grayscale-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent" />
      </div>
    </div>
  );
}
