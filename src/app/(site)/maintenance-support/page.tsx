import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";
import { MAINTENANCE_FEATURES, MAINTENANCE_PLANS } from "@/lib/data/pricing";
import { CheckIcon } from "@/components/ui/Icons";

export const metadata = createMetadata({
  title: "Maintenance & Support",
  description: "Proactive maintenance, security updates, 24/7 monitoring, and dedicated support for your digital products.",
  path: "/maintenance-support",
});

export default function MaintenancePage() {
  return (
    <>
      <PageHero badge="Maintenance" title="Keep your product secure, fast, and evolving" subtitle="Proactive care that prevents problems before they impact your users or revenue." image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80&auto=format&fit=crop" />

      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Breadcrumbs items={[{ label: "Maintenance & Support" }]} />
          <SectionHeading title="What's included" subtitle="Comprehensive care for your digital products, from security patches to feature enhancements." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MAINTENANCE_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-bold text-text-dark">{f.title}</h3>
                <p className="mt-2 text-sm text-text-dark/65">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading title="Maintenance Plans" dark align="center" />
          <div className="grid gap-6 lg:grid-cols-3">
            {MAINTENANCE_PLANS.map((plan) => (
              <div key={plan.name} className={`rounded-3xl p-8 ${plan.highlighted ? "bg-accent text-text-dark ring-2 ring-accent" : "border border-white/10 text-text-primary"}`}>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-3xl font-extrabold">{plan.price}<span className="text-sm font-normal">/mo</span></p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckIcon className="h-4 w-4" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold ${plan.highlighted ? "bg-text-dark text-text-primary" : "bg-accent text-text-dark"}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Protect your investment" subtitle="Don't wait for a crisis. Proactive maintenance saves time, money, and reputation." primaryLabel="Start Maintenance Plan" primaryHref="/contact" />
    </>
  );
}
