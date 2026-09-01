import { Phone, Home } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";
import { pageBanners } from "@/lib/banners";
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
    <>
      <PageHero
        image={pageBanners.thankYou}
        alt="Custom curtains by Al-Awan Furniture"
        eyebrow="Request Received"
        title="Thank You"
        description="We received your request and will be in touch shortly."
        compact
      />
      <section className="section-padding-sm">
        <div className="container-wide">
          <div className="mx-auto max-w-xl rounded-lg border border-border bg-white p-8 text-center shadow-sm md:p-10">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-bronze/10">
              <span className="text-xl text-bronze">✓</span>
            </div>
            <h2 className="text-2xl text-charcoal md:text-3xl">
              We Received Your Request
            </h2>
            <p className="mt-3 text-base leading-relaxed text-warm-gray">
              Our team will review your requirements
              {service ? ` for ${service}` : ""} and contact you shortly.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                href={buildWhatsAppLink(
                  "Hello Al-Awan Furniture, I just submitted a quote request."
                )}
                variant="whatsapp"
                size="lg"
                external
              >
                <WhatsAppIcon size={18} />
                WhatsApp Us
              </Button>
              <Button href={PHONE_TEL} variant="outline" size="lg">
                <Phone className="h-4 w-4" />
                Call {PHONE_DISPLAY}
              </Button>
              <Button href="/" variant="ghost" size="lg">
                <Home className="h-4 w-4" />
                Return Home
              </Button>
            </div>

            <span id="conversion-complete" data-service={service ?? ""} className="sr-only" />
          </div>
        </div>
      </section>
    </>
  );
}
