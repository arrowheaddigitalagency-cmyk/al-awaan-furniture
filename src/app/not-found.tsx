import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WhatsAppLink } from "@/components/conversion/WhatsAppLink";
import { buildWhatsAppLink } from "@/lib/utils";
import { DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";
import { pageBanners } from "@/lib/banners";

export default function NotFound() {
  return (
    <>
      <PageHero
        image={pageBanners.notFound}
        alt="Custom furniture by Al-Awan Furniture"
        eyebrow="404"
        title="This Page Isn't Available"
        description="The page you are looking for does not exist or may have been moved."
        compact
      />
      <section className="section-padding-sm">
        <div className="container-wide text-center">
          <div className="mx-auto max-w-lg rounded-lg border border-border bg-white p-8 shadow-sm">
            <p className="text-6xl font-light text-bronze/25">404</p>
            <p className="mt-4 text-warm-gray">
              Looks like this room isn&apos;t finished yet — but we can help you find what you need.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/" variant="primary" size="lg">
                Return Home
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Services
              </Button>
              <WhatsAppLink
                href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                payload={{ location: "not_found" }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#25D366] bg-[#25D366] px-9 py-4 text-sm font-medium text-white shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-0.5 hover:bg-[#1fb855] hover:shadow-xl"
              >
                <WhatsAppIcon size={18} />
                WhatsApp Us
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
