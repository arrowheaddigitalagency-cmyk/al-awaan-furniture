import { CONTACT_EMAIL } from "@/lib/constants";

export const WEB3FORMS_ACCESS_KEY = "40344aa9-93ee-42a8-be8f-e32e12b3f0e7";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export function getWeb3FormsAccessKey(): string {
  const fromEnv =
    process.env.WEB3FORMS_ACCESS_KEY?.trim() ||
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();

  return fromEnv || WEB3FORMS_ACCESS_KEY;
}

export type QuoteSubmission = {
  name: string;
  phone: string;
  email?: string;
  service: string;
  location?: string;
  details: string;
  contactMethod?: string;
  attribution?: string;
  botcheck?: string;
};

export async function submitQuoteToWeb3Forms(data: QuoteSubmission) {
  if (data.botcheck) {
    return { success: true as const };
  }

  const payload: Record<string, string> = {
    access_key: getWeb3FormsAccessKey(),
    subject: `Quote Request — ${data.service} — Al-Awan Furniture`,
    from_name: "Al-Awan Furniture Website",
    name: data.name.trim(),
    phone: data.phone.trim(),
    email: data.email?.trim() || CONTACT_EMAIL,
    message: [
      `Name: ${data.name.trim()}`,
      `Service: ${data.service}`,
      `Phone: ${data.phone.trim()}`,
      `Email: ${data.email?.trim() || "Not provided"}`,
      `Location: ${data.location?.trim() || "Not specified"}`,
      `Preferred Contact: ${data.contactMethod || "phone"}`,
      "",
      "Project Details:",
      data.details.trim(),
      "",
      data.attribution ? `Attribution:\n${data.attribution}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
    botcheck: "",
  };

  if (data.email?.trim()) {
    payload.replyto = data.email.trim();
  }

  const response = await fetch(WEB3FORMS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const raw = await response.text();
  let result: { success?: boolean; message?: string };

  try {
    result = JSON.parse(raw) as { success?: boolean; message?: string };
  } catch {
    throw new Error(
      "Could not reach the form service. Please call or WhatsApp us directly."
    );
  }

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Submission failed. Please try again.");
  }

  return { success: true as const };
}
