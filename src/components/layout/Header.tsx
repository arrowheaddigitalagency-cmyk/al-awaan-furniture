"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { services, serviceGroups } from "@/data/services";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/projects", label: "What We Can Do" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close menu"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col overflow-y-auto bg-ivory shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <BrandLogo frame="footer" className="max-w-[220px] sm:max-w-[240px]" />
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-border p-2 text-charcoal transition-colors hover:bg-cream"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col px-6 pb-8 pt-4">
              <nav className="space-y-1" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="block rounded-md px-3 py-3.5 text-lg font-medium text-charcoal transition-colors hover:bg-cream hover:text-bronze"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 border-t border-border pt-6">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-bronze">
                  All Services
                </p>
                <ul className="grid grid-cols-1 gap-1">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        onClick={onClose}
                        className="block rounded-md px-3 py-2 text-sm text-warm-gray transition-colors hover:bg-cream hover:text-bronze"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 space-y-3 border-t border-border pt-6">
                <a
                  href={PHONE_TEL}
                  onClick={() => {
                    trackEvent("click_to_call", { location: "mobile_menu" });
                    onClose();
                  }}
                  className="flex items-center gap-3 rounded-lg border border-bronze/25 bg-cream/60 px-4 py-3 text-base font-medium text-charcoal"
                >
                  <Phone className="h-5 w-5 text-bronze" />
                  {PHONE_DISPLAY}
                </a>
                <Button href="/contact" variant="secondary" size="lg" className="w-full" onClick={onClose}>
                  Get Free Quote
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isOverlay = isHome && !scrolled;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinkClass = (active: boolean) =>
    cn(
      "group relative rounded-md px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300",
      isOverlay
        ? active
          ? "text-bronze-light"
          : "text-ivory/90 hover:text-white"
        : active
          ? "text-bronze"
          : "text-charcoal hover:text-bronze",
      "after:absolute after:bottom-1.5 after:left-4 after:right-4 after:h-px after:origin-left after:scale-x-0 after:bg-bronze after:transition-transform after:duration-300 group-hover:after:scale-x-100",
      active && "after:scale-x-100"
    );

  return (
    <>
      <header
        className={cn(
          "z-50 w-full transition-all duration-500",
          isHome ? "fixed top-0 left-0 right-0" : "sticky top-0",
          isOverlay
            ? "border-b border-bronze/25 bg-gradient-to-b from-charcoal/80 via-charcoal/45 to-transparent backdrop-blur-md"
            : scrolled
              ? "border-b border-border/60 bg-white/97 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl"
              : "border-b border-border/40 bg-white/95 backdrop-blur-md"
        )}
      >
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-px transition-opacity duration-500",
            isOverlay
              ? "bg-gradient-to-r from-transparent via-bronze/70 to-transparent opacity-100"
              : "bg-gradient-to-r from-transparent via-bronze/40 to-transparent opacity-80"
          )}
        />

        <div className="container-wide">
          <div className="flex h-[4.25rem] items-center justify-between gap-4 lg:h-[4.75rem]">
            <Link href="/" className="relative z-50 shrink-0" aria-label="Al-Awan Furniture Home">
              <BrandLogo
                frame={isOverlay ? "header-overlay" : "header"}
                className="max-w-[230px] transition-transform duration-300 hover:scale-[1.02] sm:max-w-[250px] lg:max-w-[270px]"
                priority
              />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(navLinkClass(pathname.startsWith("/services")), "flex items-center gap-1")}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-300",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </Link>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 top-full z-50 w-[740px] -translate-x-1/2 pt-3"
                        >
                          <div className="grid grid-cols-2 gap-8 rounded-lg border border-bronze/25 bg-white/98 p-8 shadow-[0_12px_40px_rgba(0,0,0,0.1)] backdrop-blur-xl">
                            {serviceGroups.map((group) => (
                              <div key={group.title}>
                                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-bronze">
                                  {group.title}
                                </p>
                                <ul className="space-y-2.5">
                                  {group.services.map((slug) => {
                                    const service = services.find((s) => s.slug === slug);
                                    if (!service) return null;
                                    return (
                                      <li key={slug}>
                                        <Link
                                          href={`/services/${slug}`}
                                          className="group flex items-center gap-2 text-sm text-charcoal transition-colors hover:text-bronze"
                                        >
                                          <span className="h-px w-0 bg-bronze transition-all group-hover:w-3" />
                                          {service.name}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href} className={navLinkClass(pathname === link.href)}>
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <a
                href={PHONE_TEL}
                onClick={() => trackEvent("click_to_call", { location: "header" })}
                className={cn(
                  "flex items-center gap-2.5 text-sm font-semibold transition-colors",
                  isOverlay ? "text-ivory hover:text-bronze-light" : "text-charcoal hover:text-bronze"
                )}
              >
                <span
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
                    isOverlay
                      ? "border-bronze/40 bg-charcoal/40"
                      : "border-bronze/20 bg-bronze/10"
                  )}
                >
                  <Phone className="h-3.5 w-3.5 text-bronze-light" />
                </span>
                {PHONE_DISPLAY}
              </a>
              <Button
                href="/contact"
                variant="secondary"
                size="sm"
                className={cn(isOverlay && "shadow-md shadow-bronze/20")}
              >
                Get Free Quote
              </Button>
            </div>

            <button
              type="button"
              className={cn(
                "relative z-[210] rounded-lg border p-2.5 transition-all lg:hidden",
                isOverlay
                  ? "border-ivory/20 bg-charcoal/30 text-ivory backdrop-blur-sm hover:border-bronze/40"
                  : "border-border text-charcoal hover:bg-cream"
              )}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {mounted && <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />}
    </>
  );
}
