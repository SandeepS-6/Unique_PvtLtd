import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";
import { SERVICES } from "@/lib/data/services";
import { CheckIcon } from "@/components/ui/Icons";

export const metadata = createMetadata({
  title: "Services",
  description: "End-to-end digital services — from product discovery and UI/UX design to SaaS development, AI solutions, and maintenance.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="Everything you need to build and scale"
        subtitle="Design, Build, Deploy, Scale, and Maintain — one partner for your entire product lifecycle."
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop"
      />

      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <SectionHeading title="11 services. One seamless experience." subtitle="Each service is designed to integrate with the others, giving you a unified team and consistent quality." />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-accent/30"
              >
                <h3 className="text-xl font-bold text-text-dark group-hover:text-accent transition">{service.title}</h3>
                <p className="mt-3 text-sm text-text-dark/65">{service.shortDescription}</p>
                <ul className="mt-5 space-y-2">
                  {service.benefits.slice(0, 3).map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-text-dark/60">
                      <CheckIcon className="h-3 w-3 text-accent" /> {b}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-block text-sm font-semibold text-accent">Learn more →</span>
                <span className="absolute bottom-0 right-0 h-4 w-4 bg-text-dark" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Not sure which service you need?" subtitle="Book a free discovery call and we'll recommend the right approach." primaryLabel="Book Discovery Call" primaryHref="/contact" />
    </>
  );
}
