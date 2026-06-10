import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { contactSchema } from "@/lib/validation";
import { sendEmail, formatEmailTable } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    await sendEmail({
      subject: `New Contact: ${data.name} — ${data.service}`,
      replyTo: data.email,
      html: formatEmailTable({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company ?? "N/A",
        service: data.service,
        message: data.message,
      }),
    });

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ success: false, message: "Validation failed", errors: error.flatten() }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 });
  }
}
