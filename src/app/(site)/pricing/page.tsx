import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";
import { PRICING_PLANS, COMPARISON_FEATURES, PRICING_FAQS } from "@/lib/data/pricing";
import { CheckIcon } from "@/components/ui/Icons";

export const metadata = createMetadata({
  title: "Pricing",
  description: "Transparent pricing for websites, web apps, SaaS products, and maintenance plans. Starter, Growth, Enterprise, and Maintenance tiers.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero badge="Pricing" title="Transparent pricing, exceptional value" subtitle="Choose the plan that fits your stage. Every plan includes our senior-only team and transparent process." image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&auto=format&fit=crop" />

      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Breadcrumbs items={[{ label: "Pricing" }]} />
          <div className="grid gap-6 lg:grid-cols-4">
            {PRICING_PLANS.map((plan) => (
              <div key={plan.id} className={`relative rounded-3xl p-8 ${plan.highlighted ? "bg-primary text-text-primary ring-2 ring-accent" : "bg-white text-text-dark"}`}>
                {plan.highlighted && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-text-dark">Most Popular</span>}
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className={`text-sm ${plan.highlighted ? "text-text-secondary" : "text-text-dark/50"}`}>/{plan.period}</span>
                </div>
                <p className={`mt-3 text-sm ${plan.highlighted ? "text-text-secondary" : "text-text-dark/65"}`}>{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckIcon className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlighted ? "text-accent" : "text-accent"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/get-quote" className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition hover:scale-[1.02] ${plan.highlighted ? "bg-accent text-text-dark" : "bg-primary text-text-primary"}`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading title="Feature Comparison" dark align="center" />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 text-left text-text-secondary">Feature</th>
                  <th className="py-4 text-center text-text-primary">Starter</th>
                  <th className="py-4 text-center text-text-primary">Growth</th>
                  <th className="py-4 text-center text-text-primary">Enterprise</th>
                  <th className="py-4 text-center text-text-primary">Maintenance</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((row) => (
                  <tr key={row.feature} className="border-b border-white/5">
                    <td className="py-3 text-text-secondary">{row.feature}</td>
                    {[row.starter, row.growth, row.enterprise, row.maintenance].map((val, i) => (
                      <td key={i} className="py-3 text-center text-text-primary">
                        {val === true ? "✓" : val === false ? "—" : val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="bg-secondary"><FAQSection faqs={PRICING_FAQS} title="Pricing FAQ" /></div>
      <CTASection title="Need a custom quote?" primaryLabel="Get Custom Quote" />
    </>
  );
}
