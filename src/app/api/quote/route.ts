import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/constants";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ??
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      return NextResponse.json(
        { success: false, message: "Form is not configured." },
        { status: 500 }
      );
    }

    const { name, phone, email, service, location, details, contactMethod, botcheck } =
      body;

    if (botcheck) {
      return NextResponse.json({ success: true });
    }

    if (!name?.trim() || !phone?.trim() || !service || !details?.trim()) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const attribution =
      typeof body.attribution === "string" ? body.attribution : "";

    const payload: Record<string, string> = {
      access_key: accessKey,
      subject: `Quote Request — ${service} — Al-Awan Furniture`,
      from_name: "Al-Awan Furniture Website",
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim() || CONTACT_EMAIL,
      message: [
        `Name: ${name.trim()}`,
        `Service: ${service}`,
        `Phone: ${phone.trim()}`,
        `Email: ${email?.trim() || "Not provided"}`,
        `Location: ${location?.trim() || "Not specified"}`,
        `Preferred Contact: ${contactMethod || "phone"}`,
        "",
        "Project Details:",
        details.trim(),
        "",
        attribution ? `Attribution:\n${attribution}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
      botcheck: "",
    };

    if (email?.trim()) {
      payload.replyto = email.trim();
    }

    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const raw = await response.text();
    let data: { success?: boolean; message?: string };
    try {
      data = JSON.parse(raw) as { success?: boolean; message?: string };
    } catch {
      if (process.env.NODE_ENV === "development") {
        console.error("Web3Forms non-JSON response:", raw.slice(0, 500));
      }
      return NextResponse.json(
        {
          success: false,
          message:
            "Could not reach the form service. Please call or WhatsApp us directly.",
        },
        { status: 502 }
      );
    }

    if (!response.ok || !data.success) {
      return NextResponse.json(
        { success: false, message: data.message || "Submission failed." },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote form error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
