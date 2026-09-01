import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { PHONE_DISPLAY, PHONE_TEL, SITE_NAME, BUSINESS_ADDRESS, MAP_URL, CONTACT_EMAIL } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";
import { GoogleMap } from "@/components/layout/GoogleMap";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="mt-0">
      {/* Map — clean white section */}
      <div className="map-section-white py-10 md:py-12">
        <div className="container-wide">
          <GoogleMap variant="light" />
        </div>
      </div>

      {/* Footer links — dark with golden effect */}
      <div className="footer-gold-panel section-gold-dark gold-border-top relative pb-10 pt-12 md:pt-16">
        <div className="container-wide relative">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block">
                <span className="inline-flex rounded-lg border border-bronze/30 bg-white px-3 py-2 shadow-md shadow-bronze/10">
                  <Image
                    src="/logo-footer.png"
                    alt={SITE_NAME}
                    width={280}
                    height={80}
                    className="h-12 w-auto max-w-[240px] object-contain sm:h-14 sm:max-w-[270px]"
                  />
                </span>
              </Link>
              <p className="mt-5 text-sm leading-relaxed text-ivory/65">
                Premium custom furniture, upholstery, and interior solutions crafted
                for homes across the UAE.
              </p>
            </div>

            <div className="border-t border-bronze/15 pt-8 md:border-t-0 md:border-l md:border-bronze/15 md:pl-8 md:pt-0">
              <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-bronze-light">
                Services
              </h3>
              <ul className="space-y-2.5">
                {services.slice(0, 6).map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm text-ivory/65 transition-colors hover:text-bronze-light"
                    >
                      {service.shortName}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="text-sm font-medium text-bronze-light transition-colors hover:text-ivory"
                  >
                    View All →
                  </Link>
                </li>
              </ul>
            </div>

            <div className="border-t border-bronze/15 pt-8 md:border-t-0 md:border-l md:border-bronze/15 md:pl-8 md:pt-0">
              <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-bronze-light">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ivory/65 transition-colors hover:text-bronze-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-bronze/15 pt-8 md:border-t-0 md:border-l md:border-bronze/15 md:pl-8 md:pt-0">
              <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-bronze-light">
                Contact
              </h3>
              <ul className="space-y-3 text-sm text-ivory/65">
                <li>
                  <a href={PHONE_TEL} className="transition-colors hover:text-bronze-light">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a
                    href={buildWhatsAppLink(
                      "Hello Al-Awan Furniture, I would like to get in touch."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-bronze-light"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-bronze-light">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-bronze-light"
                  >
                    {BUSINESS_ADDRESS}
                  </a>
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-5 inline-block rounded-lg border border-bronze/40 bg-gradient-to-r from-bronze to-bronze-dark px-6 py-3 text-sm font-medium text-white shadow-md shadow-bronze/20 transition-all hover:-translate-y-0.5 hover:border-bronze/60 hover:shadow-lg hover:shadow-bronze/25"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-bronze/20 pt-8 text-center text-xs text-ivory/50 sm:flex-row sm:text-left">
            <p>© {new Date().getFullYear()} {SITE_NAME}</p>
            <p className="bg-gradient-to-r from-bronze-light via-[#e8c88a] to-bronze-light bg-clip-text font-medium text-transparent">
              Premium Custom Furniture & Interiors — UAE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
