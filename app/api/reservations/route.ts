import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json(
        {
          success: false,
          error: "Google Sheets connection is not configured.",
        },
        { status: 500 }
      );
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name || "",
        phone: data.phone || "",
        date: data.date || "",
        time: data.time || "",
        guests: data.guests || "",
        notes: data.notes || "",
      }),
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok || result.success === false) {
      return NextResponse.json(
        {
          success: false,
          error: result.error || "Google Sheets submission failed.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Reservation received",
    });
  } catch (error) {
    console.error("Reservation API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to submit reservation.",
      },
      { status: 500 }
    );
  }
}