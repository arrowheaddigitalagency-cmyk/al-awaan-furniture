import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";
import { buildWhatsAppLink } from "@/lib/utils";
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
              <Button
                href={buildWhatsAppLink("Hello Al-Awan Furniture, I need some help finding something on your website.")}
                variant="whatsapp"
                size="lg"
                external
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
