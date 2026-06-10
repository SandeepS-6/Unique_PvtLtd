import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";
import { AI_FEATURES } from "@/lib/data/pricing";

export const metadata = createMetadata({
  title: "AI Solutions",
  description: "AI chatbots, WhatsApp automation, lead qualification, OpenAI integrations, and business workflow automation.",
  path: "/ai-solutions",
});

export default function AISolutionsPage() {
  return (
    <>
      <PageHero badge="AI Solutions" title="Intelligent automation for modern businesses" subtitle="Practical AI that delivers ROI — from customer support bots to workflow automation and OpenAI integrations." image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop" />

      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Breadcrumbs items={[{ label: "AI Solutions" }]} />
          <SectionHeading title="AI capabilities" subtitle="We build AI solutions that integrate seamlessly with your existing tools and workflows." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AI_FEATURES.map((f, i) => (
              <div key={f.title} className={`rounded-3xl p-8 ${i === 0 ? "bg-primary text-text-primary lg:col-span-2" : "bg-white text-text-dark"}`}>
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-bold">{f.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${i === 0 ? "text-text-secondary" : "text-text-dark/65"}`}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading title="Why AI with Unique?" dark align="center" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Production-Ready", desc: "Not demos — deployed AI that handles real workloads with monitoring and fallbacks." },
              { title: "Secure by Design", desc: "Data isolation, encryption, and compliance-first architecture for sensitive industries." },
              { title: "Integrated", desc: "Connects with your CRM, helpdesk, WhatsApp, and existing product stack." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 p-6 text-center">
                <h3 className="font-bold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services/ai-solutions" className="text-sm font-semibold text-accent hover:underline">View full AI service details →</Link>
          </div>
        </div>
      </section>

      <CTASection title="Ready to automate with AI?" primaryLabel="Explore AI Solutions" primaryHref="/get-quote" />
    </>
  );
}
