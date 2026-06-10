import { NextResponse } from "next/server";
import { careerSchema } from "@/lib/validation";
import { sendEmail, formatEmailTable } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = careerSchema.parse(body);

    await sendEmail({
      subject: `Career Application: ${data.name} — ${data.position}`,
      replyTo: data.email,
      html: formatEmailTable({
        name: data.name,
        email: data.email,
        phone: data.phone,
        position: data.position,
        experience: data.experience,
        linkedin: data.linkedin ?? "N/A",
        portfolio: data.portfolio ?? "N/A",
        message: data.message,
      }),
    });

    return NextResponse.json({ success: true, message: "Application submitted successfully" });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to submit application" }, { status: 500 });
  }
}
