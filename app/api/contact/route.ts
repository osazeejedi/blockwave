import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const CONTACT_SCRIPT_URL = process.env.CONTACT_SCRIPT_URL;

  if (!CONTACT_SCRIPT_URL) {
    console.error("CONTACT_SCRIPT_URL environment variable is not set.");
    return NextResponse.json(
      { error: "Server configuration error. Please contact hello@whiteboxconsults.com" },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  try {
    const response = await fetch(CONTACT_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Apps Script responded with error:", response.status, text);
      return NextResponse.json(
        { error: "Failed to record enquiry. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Error forwarding to Apps Script:", err);
    return NextResponse.json(
      { error: "Failed to reach submission endpoint. Please try again." },
      { status: 500 }
    );
  }
}
