import Link from "next/link";
import { CheckCircle2, Home, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Thank You | Al-Awan Furniture",
  description: "Thank you for contacting Al-Awan Furniture. We will be in touch shortly.",
  path: "/thank-you",
  noIndex: true,
});

interface PageProps {
  searchParams: Promise<{ service?: string }>;
}

export default async function ThankYouPage({ searchParams }: PageProps) {
  const { service } = await searchParams;

  return (
    <section className="section-padding-sm bg-gradient-to-b from-cream/60 via-ivory to-cream/40">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-bronze/25 bg-white shadow-[0_20px_50px_rgba(160,120,74,0.12)]">
          <div className="border-b border-bronze/15 bg-gradient-to-br from-bronze/10 via-white to-bronze/5 px-8 py-10 text-center md:px-12 md:py-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-bronze/30 bg-bronze/10">
              <CheckCircle2 className="h-8 w-8 text-bronze" strokeWidth={1.75} />
            </div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-bronze">
              Request Received
            </p>
            <h1 className="mt-3 font-display text-3xl text-charcoal md:text-4xl">
              Thank You!
            </h1>
            <p className="mt-4 text-base leading-relaxed text-warm-gray">
              Our team will review your requirements
              {service ? (
                <>
                  {" "}
                  for <span className="font-semibold text-charcoal">{service}</span>
                </>
              ) : (
                ""
              )}{" "}
              and contact you shortly.
            </p>
          </div>

          <div className="bg-ivory/40 px-6 py-8 md:px-10 md:py-9">
            <p className="mb-5 text-center text-sm font-medium text-charcoal">
              Prefer a quicker reply? Reach us directly:
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={buildWhatsAppLink(
                  "Hello Al-Awan Furniture, I just submitted a quote request."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#25D366] px-5 py-4 text-sm font-semibold text-white shadow-md shadow-[#25D366]/25 transition-all hover:-translate-y-0.5 hover:bg-[#1fb855] hover:shadow-lg"
              >
                <WhatsAppIcon size={20} />
                WhatsApp Us
              </a>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-bronze/50 bg-gradient-to-r from-bronze to-bronze-dark px-5 py-4 text-sm font-semibold text-white shadow-md shadow-bronze/20 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Call {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-bronze transition-colors hover:text-charcoal"
              >
                <Home className="h-4 w-4" />
                Return Home
              </Link>
            </div>
          </div>

          <span id="conversion-complete" data-service={service ?? ""} className="sr-only" />
        </div>
      </div>
    </section>
  );
}
