import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { createMetadata, organizationJsonLd } from "@/lib/seo";
import { LEADERSHIP, VALUES, TIMELINE, TECHNOLOGIES, WHY_CHOOSE_US } from "@/lib/data/about";

export const metadata = createMetadata({
  title: "About Us",
  description: "Learn about Unique — our story, mission, values, and the team behind 500+ digital products.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
      <PageHero
        badge="About Unique"
        title="We design, build, and scale digital products that matter"
        subtitle="Since 2007, we've partnered with startups and enterprises to transform ideas into products used by millions."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop"
      />

      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading badge="Our Story" title="From boutique studio to global technology partner" />
              <p className="text-text-dark/70 leading-relaxed">
                Unique began in 2007 as a small design studio in New York with a simple belief: great digital products require equal parts creativity and engineering excellence. Today, we're a 80+ person team serving clients across 30 countries — from pre-seed startups to Fortune 500 enterprises.
              </p>
              <p className="mt-4 text-text-dark/70 leading-relaxed">
                Our end-to-end approach means you work with one team from discovery through maintenance. No handoffs, no miscommunication — just consistent quality and accountability.
              </p>
            </div>
            <div className="space-y-8">
              <div className="rounded-3xl bg-primary p-8 text-text-primary">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">Mission</h3>
                <p className="mt-3 text-lg leading-relaxed">Empower businesses to design, build, deploy, scale, and maintain world-class digital products.</p>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white p-8">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">Vision</h3>
                <p className="mt-3 text-lg leading-relaxed text-text-dark/70">To be the most trusted technology partner for ambitious companies worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading badge="Values" title="What drives us every day" dark align="center" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/10 p-6">
                <h3 className="font-bold text-text-primary">{v.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading badge="Why Choose Us" title="The Unique difference" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-bold text-text-dark">{item.title}</h3>
                <p className="mt-2 text-sm text-text-dark/65">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading badge="Leadership" title="Meet the team" dark align="center" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {LEADERSHIP.map((person) => (
              <div key={person.name} className="group text-center">
                <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-3xl">
                  <Image src={person.image} alt={person.name} fill className="object-cover grayscale transition group-hover:grayscale-0" sizes="200px" />
                </div>
                <h3 className="mt-4 font-bold text-text-primary">{person.name}</h3>
                <p className="text-sm text-accent">{person.role}</p>
                <p className="mt-2 text-xs text-text-secondary">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading badge="Timeline" title="Our journey" />
          <div className="relative space-y-8 border-l-2 border-accent/30 pl-8">
            {TIMELINE.map((item) => (
              <div key={item.year} className="relative">
                <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-accent">
                  <span className="h-2 w-2 rounded-full bg-text-dark" />
                </span>
                <span className="text-sm font-bold text-accent">{item.year}</span>
                <h3 className="mt-1 text-lg font-bold text-text-dark">{item.title}</h3>
                <p className="mt-1 text-sm text-text-dark/65">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading badge="Technologies" title="Tools we master" dark align="center" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TECHNOLOGIES.map((group) => (
              <div key={group.category} className="rounded-2xl border border-white/10 p-6">
                <h3 className="font-bold text-accent">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs text-text-secondary">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
