import { Suspense } from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { FadeIn, SectionHeading } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/layout/PageHero";
import { ContactQuoteForm } from "@/components/conversion/ContactQuoteForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PHONE_DISPLAY, PHONE_TEL, BUSINESS_ADDRESS, MAP_URL, CONTACT_EMAIL, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";
import { pageBanners } from "@/lib/banners";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact & Get a Quote | Al-Awan Furniture UAE",
  description:
    "Request a free quotation for custom furniture and interior solutions in the UAE. Call, WhatsApp, or fill out our contact form.",
  path: "/contact",
});

const contactFaq = [
  {
    question: "How do I request a quotation?",
    answer:
      "Fill out the form on this page, call us, or send a WhatsApp message with your requirements. We will discuss your project and provide a quote.",
  },
  {
    question: "What information should I include?",
    answer:
      "Share the type of furniture or service you need, your location in the UAE, room dimensions if available, and any style preferences or reference images.",
  },
  {
    question: "Do you provide on-site measurement?",
    answer:
      "Yes. We arrange on-site visits to take accurate measurements before production begins.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "Our team reviews your request and contacts you via your preferred method to discuss details and next steps.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={pageBanners.contact}
        alt="Custom media wall project by Al-Awan Furniture"
        eyebrow="Get in Touch"
        title="Request Your Free Quote"
        description="Tell us about your project and we will get back to you shortly."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="section-padding-sm">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <FadeIn delay={0.1}>
                <div className="space-y-6 rounded-lg border border-border bg-cream/30 p-6 md:p-8">
                  <div>
                    <h2 className="text-xl text-charcoal">Contact Us Directly</h2>
                    <p className="mt-2 text-sm text-warm-gray">
                      Prefer to speak with us? Reach out anytime.
                    </p>
                  </div>

                  <a
                    href={PHONE_TEL}
                    className="flex items-center gap-3 text-charcoal hover:text-bronze"
                  >
                    <Phone className="h-5 w-5 text-bronze" />
                    <div>
                      <p className="text-sm font-medium">Call Us</p>
                      <p className="text-sm text-warm-gray">{PHONE_DISPLAY}</p>
                    </div>
                  </a>

                  <a
                    href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-charcoal hover:text-bronze"
                  >
                    <WhatsAppIcon size={22} className="text-[#25D366]" />
                    <div>
                      <p className="text-sm font-medium">WhatsApp</p>
                      <p className="text-sm text-warm-gray">Chat with our team</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-3 text-charcoal hover:text-bronze"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bronze/10 text-sm font-semibold text-bronze">
                      @
                    </span>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-warm-gray">{CONTACT_EMAIL}</p>
                    </div>
                  </a>

                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-charcoal hover:text-bronze"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bronze/10">
                      <svg className="h-5 w-5 text-bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-medium">Our Location</p>
                      <p className="text-sm text-warm-gray">{BUSINESS_ADDRESS}</p>
                    </div>
                  </a>
                </div>

                <div className="mt-6 rounded-lg border border-border bg-white p-6">
                  <h3 className="mb-4 text-lg text-charcoal">What Happens Next?</h3>
                  <ol className="space-y-3 text-sm text-warm-gray">
                    <li className="flex gap-3">
                      <span className="font-medium text-bronze">1.</span>
                      We review your requirements
                    </li>
                    <li className="flex gap-3">
                      <span className="font-medium text-bronze">2.</span>
                      We contact you to discuss details
                    </li>
                    <li className="flex gap-3">
                      <span className="font-medium text-bronze">3.</span>
                      We arrange measurement if needed
                    </li>
                    <li className="flex gap-3">
                      <span className="font-medium text-bronze">4.</span>
                      You receive a tailored quotation
                    </li>
                  </ol>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-3">
              <FadeIn delay={0.15}>
                <div className="rounded-lg border border-border bg-white p-6 md:p-8">
                  <Suspense fallback={<div className="h-96 animate-pulse rounded-lg bg-cream" />}>
                    <ContactQuoteForm />
                  </Suspense>
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="mt-12">
            <FadeIn>
              <SectionHeading
                eyebrow="FAQ"
                title="Common Questions"
                className="mb-6"
              />
              <div className="max-w-3xl">
                <FAQAccordion items={contactFaq} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
