import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";
import { INDUSTRIES } from "@/lib/data/industries";

export const metadata = createMetadata({
  title: "Industries",
  description: "Industry-specific digital solutions for startups, healthcare, real estate, e-commerce, SaaS, finance, and more.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero badge="Industries" title="Solutions tailored to your industry" subtitle="Deep domain expertise across 10 industries, delivering solutions that understand your unique challenges." image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop" />
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Breadcrumbs items={[{ label: "Industries" }]} />
          <div className="space-y-16">
            {INDUSTRIES.map((industry) => (
              <article key={industry.slug} id={industry.slug} className="grid gap-8 rounded-3xl bg-white p-8 md:p-12 lg:grid-cols-2">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[280px]">
                  <Image src={industry.image} alt={industry.title} fill className="object-cover grayscale" sizes="50vw" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text-dark">{industry.title}</h2>
                  <p className="mt-3 text-text-dark/65">{industry.description}</p>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">Challenges</h3>
                      <ul className="mt-3 space-y-2">
                        {industry.challenges.map((c) => (
                          <li key={c} className="text-sm text-text-dark/65">• {c}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">Solutions</h3>
                      <ul className="mt-3 space-y-2">
                        {industry.solutions.map((s) => (
                          <li key={s} className="text-sm text-text-dark/65">• {s}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">Related Services</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {industry.relatedServices.map((s) => (
                        <Link key={s.href} href={s.href} className="rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-text-dark hover:bg-accent transition">{s.title}</Link>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Don't see your industry?" subtitle="We work across many sectors. Let's discuss your specific needs." primaryLabel="Contact Us" primaryHref="/contact" />
    </>
  );
}
