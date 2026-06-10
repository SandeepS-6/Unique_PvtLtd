import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import CareerForm from "@/components/forms/CareerForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";
import { OPEN_POSITIONS, CAREER_BENEFITS, COMPANY_CULTURE } from "@/lib/data/about";
import { CheckIcon } from "@/components/ui/Icons";

export const metadata = createMetadata({
  title: "Careers",
  description: "Join Unique — remote-first culture, competitive benefits, and impactful work on products used by millions.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHero badge="Careers" title="Build the future with us" subtitle="Join a team of senior engineers and designers shipping products for global clients." image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop" />

      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Breadcrumbs items={[{ label: "Careers" }]} />
          <SectionHeading badge="Open Positions" title="Current openings" />
          <div className="space-y-4">
            {OPEN_POSITIONS.map((job) => (
              <div key={job.id} id={job.id} className="rounded-2xl bg-white p-6 md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-text-dark">{job.title}</h3>
                    <p className="mt-1 text-sm text-text-dark/50">{job.department} · {job.location} · {job.type}</p>
                    <p className="mt-3 text-sm text-text-dark/65">{job.description}</p>
                  </div>
                  <a href="#apply" className="shrink-0 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-text-dark">Apply Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading badge="Benefits" title="Why you'll love working here" dark />
              <ul className="grid gap-3 sm:grid-cols-2">
                {CAREER_BENEFITS.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-text-secondary">
                    <CheckIcon className="h-4 w-4 text-accent" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading badge="Culture" title="How we work" dark />
              <div className="space-y-4">
                {COMPANY_CULTURE.map((c) => (
                  <div key={c.title} className="rounded-xl border border-white/10 p-4">
                    <h3 className="font-semibold text-text-primary">{c.title}</h3>
                    <p className="mt-1 text-sm text-text-secondary">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading title="Apply now" subtitle="Tell us about yourself and the role you're interested in." />
          <div className="mx-auto max-w-2xl rounded-3xl bg-primary p-8 md:p-12">
            <CareerForm />
          </div>
        </div>
      </section>

      <CTASection title="Don't see the right role?" subtitle="Send us your resume anyway — we're always looking for exceptional talent." primaryLabel="General Application" primaryHref="#apply" secondaryLabel="Contact HR" secondaryHref="/contact" />
    </>
  );
}
