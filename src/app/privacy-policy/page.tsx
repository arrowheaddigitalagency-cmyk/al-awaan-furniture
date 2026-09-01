import { PageHero } from "@/components/layout/PageHero";
import { createMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
import { pageBanners } from "@/lib/banners";

export const metadata = createMetadata({
  title: "Privacy Policy | Al-Awan Furniture",
  description: "Privacy policy for Al-Awan Furniture website and contact forms.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        image={pageBanners.privacy}
        alt="Premium interior design by Al-Awan Furniture"
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect your information."
        breadcrumbs={[{ label: "Privacy Policy" }]}
        compact
      />
      <section className="section-padding-sm">
        <div className="container-wide mx-auto max-w-3xl">
          <p className="text-sm text-warm-gray">
            Last updated: {new Date().toLocaleDateString("en-AE", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="prose-custom mt-8 space-y-6 rounded-lg border border-border bg-white p-6 text-base leading-relaxed text-warm-gray md:p-8">
            <p>
              {SITE_NAME} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy.
              This policy explains how we collect, use, and protect your personal
              information when you visit our website or submit a contact form.
            </p>

            <h2 className="text-xl text-charcoal">Information We Collect</h2>
            <p>
              When you submit a quotation or contact form, we may collect your
              name, phone number, email address, location, service interest, and
              project details. We may also collect technical data such as browser
              type and referral information through analytics tools.
            </p>

            <h2 className="text-xl text-charcoal">How We Use Your Information</h2>
            <p>
              We use your information to respond to your enquiries, provide
              quotations, communicate about your project, and improve our services.
              We do not sell your personal information to third parties.
            </p>

            <h2 className="text-xl text-charcoal">Form Processing</h2>
            <p>
              Contact form submissions are processed through Web3Forms to deliver
              your enquiry to our team securely.
            </p>

            <h2 className="text-xl text-charcoal">Cookies & Analytics</h2>
            <p>
              We may use cookies and analytics tools such as Google Analytics and
              Google Tag Manager to understand website usage and improve our
              services. You can manage cookie preferences through your browser settings.
            </p>

            <h2 className="text-xl text-charcoal">Data Retention</h2>
            <p>
              We retain your contact information only as long as necessary to
              respond to your enquiry and manage our business relationship.
            </p>

            <h2 className="text-xl text-charcoal">Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal data by contacting us via phone or WhatsApp.
            </p>

            <h2 className="text-xl text-charcoal">Contact</h2>
            <p>
              For privacy-related questions, contact {SITE_NAME} at +971 56 459 4043
              or via WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
