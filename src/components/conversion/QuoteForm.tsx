"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Phone } from "lucide-react";
import { services } from "@/data/services";
import { PHONE_TEL, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";
import { getStoredAttribution } from "@/lib/attribution";
import { submitQuoteToWeb3Forms } from "@/lib/web3forms";
import { buildWhatsAppLink } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface QuoteFormProps {
  defaultService?: string;
  compact?: boolean;
  id?: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  details: string;
  contactMethod: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  details: "",
  contactMethod: "phone",
};

const fallbackWhatsApp = buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE);

export function QuoteForm({
  defaultService = "",
  compact = false,
  id = "quote-form",
}: QuoteFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<FormData>({ ...initialForm, service: defaultService });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const started = useRef(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.service) newErrors.service = "Please select a service";
    if (!form.details.trim()) newErrors.details = "Please describe your project";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    if (!started.current) {
      started.current = true;
      trackEvent("form_start", { form: "quote" });
    }
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrorMessage("");

    const attribution = getStoredAttribution();
    const attributionStr = Object.entries(attribution)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

    try {
      await submitQuoteToWeb3Forms({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        service: form.service,
        location: form.location.trim(),
        details: form.details.trim(),
        contactMethod: form.contactMethod,
        attribution: attributionStr,
        botcheck: "",
      });

      setStatus("success");
      trackEvent("form_submit", { form: "quote", service: form.service });
      trackEvent("generate_lead", { form: "quote", service: form.service });
      const params = new URLSearchParams({ service: form.service });
      router.push(`/thank-you?${params.toString()}`);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or contact us directly via phone or WhatsApp."
      );
    }
  };

  const inputClass =
    "w-full rounded-lg border border-bronze/25 bg-white px-4 py-3 text-sm text-charcoal shadow-sm placeholder:text-warm-gray/60 focus:border-bronze focus:outline-none focus:ring-2 focus:ring-bronze/15";

  return (
    <form id={id} onSubmit={handleSubmit} className="space-y-4" noValidate>
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className={compact ? "grid gap-4 sm:grid-cols-2" : "grid gap-4"}>
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
            Name <span className="text-bronze">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600" role="alert">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
            Phone / WhatsApp <span className="text-bronze">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600" role="alert">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className={compact ? "grid gap-4 sm:grid-cols-2" : "grid gap-4"}>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600" role="alert">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-charcoal">
            Service <span className="text-bronze">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={inputClass}
            aria-invalid={!!errors.service}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-600" role="alert">{errors.service}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="location" className="mb-1.5 block text-sm font-medium text-charcoal">
          Location / Emirate
        </label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="e.g. Dubai, Sharjah, Ajman"
          value={form.location}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="details" className="mb-1.5 block text-sm font-medium text-charcoal">
          Project Details <span className="text-bronze">*</span>
        </label>
        <textarea
          id="details"
          name="details"
          rows={compact ? 3 : 4}
          value={form.details}
          onChange={handleChange}
          placeholder="Tell us about your space, requirements, and preferred style..."
          className={inputClass}
          aria-invalid={!!errors.details}
        />
        {errors.details && (
          <p className="mt-1 text-xs text-red-600" role="alert">{errors.details}</p>
        )}
      </div>

      <div>
        <label htmlFor="contactMethod" className="mb-1.5 block text-sm font-medium text-charcoal">
          Preferred Contact Method
        </label>
        <select
          id="contactMethod"
          name="contactMethod"
          value={form.contactMethod}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="phone">Phone Call</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="email">Email</option>
        </select>
      </div>

      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          <p>{errorMessage}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={PHONE_TEL}
              onClick={() => trackEvent("click_to_call", { location: "form_error" })}
              className="inline-flex items-center gap-2 rounded-lg bg-bronze px-4 py-2 text-xs font-semibold text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              Call Now
            </a>
            <a
              href={fallbackWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "form_error" })}
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-xs font-semibold text-white"
            >
              <WhatsAppIcon size={14} />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}

      <Button
        type="submit"
        variant="secondary"
        size="lg"
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Submitting..." : "Request Free Quote"}
      </Button>

      <p className="text-center text-xs text-warm-gray">
        Prefer instant contact?{" "}
        <Link href={PHONE_TEL} className="font-semibold text-bronze hover:underline">
          Call us
        </Link>{" "}
        or{" "}
        <a
          href={fallbackWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#1a9e4b] hover:underline"
        >
          WhatsApp
        </a>
      </p>
    </form>
  );
}
