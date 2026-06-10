import Link from "next/link";
import { SITE } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Thank You",
  description: "Your submission was received successfully.",
  path: "/success",
  noIndex: true,
});

type Props = { searchParams: Promise<{ type?: string; estimate?: string }> };

export default async function SuccessPage({ searchParams }: Props) {
  const { type, estimate } = await searchParams;

  const messages: Record<string, { title: string; desc: string }> = {
    contact: { title: "Message Sent!", desc: "We've received your message and will respond within 24 hours." },
    career: { title: "Application Submitted!", desc: "Thank you for applying. Our HR team will review your application and get back to you soon." },
    quote: { title: "Quote Request Received!", desc: estimate ? `Your estimated project range: ${decodeURIComponent(estimate)}. Our team will send a detailed proposal within 24 hours.` : "Our team will prepare a detailed proposal and contact you within 24 hours." },
  };

  const msg = messages[type ?? "contact"] ?? messages.contact;

  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-primary px-6">
      <div className="max-w-lg text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent">
          <span className="text-3xl text-text-dark">✓</span>
        </div>
        <h1 className="mt-8 text-4xl font-extrabold text-text-primary">{msg.title}</h1>
        <p className="mt-4 text-text-secondary">{msg.desc}</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/" className="rounded-full bg-accent px-8 py-4 text-sm font-semibold text-text-dark hover:scale-105 transition">
            Back to Home
          </Link>
          <Link href="/portfolio" className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-text-primary hover:border-accent transition">
            View Our Work
          </Link>
        </div>
        <p className="mt-8 text-xs text-text-secondary">Questions? Email us at {SITE.email}</p>
      </div>
    </section>
  );
}
