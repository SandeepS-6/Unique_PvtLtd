import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validation";
import { sendEmail, formatEmailTable } from "@/lib/email";

const BUDGET_ESTIMATES: Record<string, { min: number; max: number }> = {
  "Under $10K": { min: 5000, max: 10000 },
  "$10K – $25K": { min: 10000, max: 25000 },
  "$25K – $50K": { min: 25000, max: 50000 },
  "$50K – $100K": { min: 50000, max: 100000 },
  "$100K+": { min: 100000, max: 250000 },
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = quoteSchema.parse(body);

    const estimate = BUDGET_ESTIMATES[data.budget] ?? { min: 10000, max: 50000 };

    await sendEmail({
      subject: `Quote Request: ${data.businessName} — ${data.projectType.join(", ")}`,
      replyTo: data.email,
      html: formatEmailTable({
        businessName: data.businessName,
        contactName: data.contactName,
        email: data.email,
        phone: data.phone,
        website: data.website ?? "N/A",
        industry: data.industry,
        projectType: data.projectType,
        budget: data.budget,
        timeline: data.timeline,
        requirements: data.requirements,
        features: data.features ?? [],
      }),
    });

    return NextResponse.json({
      success: true,
      estimate: {
        min: estimate.min,
        max: estimate.max,
        formatted: `$${estimate.min.toLocaleString()} – $${estimate.max.toLocaleString()}`,
        timeline: data.timeline,
        projectType: data.projectType,
      },
    });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to submit quote request" }, { status: 500 });
  }
}
