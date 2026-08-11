import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL;

  if (!APPS_SCRIPT_URL) {
    console.error("APPS_SCRIPT_URL environment variable is not set.");
    return NextResponse.json(
      { error: "Server configuration error. Please contact admissions@Blockwaveconsults.com" },
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
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Apps Script responded with error:", response.status, text);
      return NextResponse.json(
        { error: "Failed to record application. Please try again." },
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
