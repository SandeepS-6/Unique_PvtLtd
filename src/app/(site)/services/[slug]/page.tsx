import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata, serviceJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/data/services";
import { CheckIcon } from "@/components/ui/Icons";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = serviceJsonLd(service.title, service.shortDescription, `${SITE.url}/services/${slug}`);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero badge="Service" title={service.title} subtitle={service.shortDescription} image={service.heroImage} />

      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.title }]} />

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionHeading badge="Benefits" title="Why choose this service" />
              <div className="grid gap-4 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3 rounded-2xl bg-white p-5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent"><CheckIcon className="h-3 w-3" /></span>
                    <span className="text-sm font-medium text-text-dark">{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-16">
                <SectionHeading badge="Features" title="What's included" />
                <div className="space-y-6">
                  {service.features.map((f) => (
                    <div key={f.title} className="rounded-2xl border border-black/5 bg-white p-6">
                      <h3 className="font-bold text-text-dark">{f.title}</h3>
                      <p className="mt-2 text-sm text-text-dark/65">{f.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-primary p-6 text-text-primary">
                <h3 className="font-bold">Technologies</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.technologies.map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs">{t}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6">
                <h3 className="font-bold text-text-dark">Industries Served</h3>
                <ul className="mt-4 space-y-2">
                  {service.industries.map((i) => (
                    <li key={i} className="text-sm text-text-dark/65">• {i}</li>
                  ))}
                </ul>
              </div>
              <Link href="/get-quote" className="block rounded-full bg-accent py-4 text-center font-semibold text-text-dark transition hover:scale-[1.02]">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading badge="Process" title="How we deliver" dark />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => (
              <div key={step.step} className="rounded-2xl border border-white/10 p-6">
                <span className="text-3xl font-extrabold text-accent">0{step.step}</span>
                <h3 className="mt-3 font-bold text-text-primary">{step.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-secondary">
        <FAQSection faqs={service.faqs} />
      </div>
      <CTASection primaryLabel={`Start Your ${service.title.split(" ")[0]} Project`} />
    </>
  );
}
