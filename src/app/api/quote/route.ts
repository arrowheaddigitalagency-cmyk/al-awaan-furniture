import { NextResponse } from "next/server";
import { submitQuoteToWeb3Forms } from "@/lib/web3forms";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name?.trim() || !body.phone?.trim() || !body.service || !body.details?.trim()) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    await submitQuoteToWeb3Forms({
      name: body.name,
      phone: body.phone,
      email: body.email,
      service: body.service,
      location: body.location,
      details: body.details,
      contactMethod: body.contactMethod,
      attribution: body.attribution,
      botcheck: body.botcheck,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again.";

    return NextResponse.json({ success: false, message }, { status: 502 });
  }
}
