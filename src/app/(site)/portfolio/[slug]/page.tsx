import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";
import { getProjectBySlug, PORTFOLIO } from "@/lib/data/portfolio";
import { CheckIcon } from "@/components/ui/Icons";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PORTFOLIO.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return createMetadata({ title: project.title, description: project.excerpt, path: `/portfolio/${slug}` });
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <PageHero badge={project.category} title={project.title} subtitle={project.excerpt} image={project.image} />
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Breadcrumbs items={[{ label: "Portfolio", href: "/portfolio" }, { label: project.title }]} />
          <div className="mb-8 flex flex-wrap gap-4 text-sm text-text-dark/60">
            <span>Client: <strong className="text-text-dark">{project.client}</strong></span>
            <span>Year: <strong className="text-text-dark">{project.year}</strong></span>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading badge="Challenge" title="The problem" />
              <p className="text-text-dark/70 leading-relaxed">{project.challenge}</p>
              <div className="mt-10">
                <SectionHeading badge="Solution" title="Our approach" />
                <p className="text-text-dark/70 leading-relaxed">{project.solution}</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src={project.image} alt={project.title} fill className="object-cover grayscale" sizes="50vw" />
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 lg:col-span-2">
              <h3 className="font-bold text-text-dark">Results</h3>
              <ul className="mt-4 space-y-3">
                {project.results.map((r) => (
                  <li key={r} className="flex items-center gap-3 text-sm text-text-dark/70">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent"><CheckIcon className="h-3 w-3" /></span>{r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-primary p-6 text-text-primary">
              <h3 className="font-bold">Tech Stack</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <blockquote className="mt-16 rounded-3xl border-l-4 border-accent bg-white p-8 md:p-12">
            <p className="text-xl italic leading-relaxed text-text-dark/80">&ldquo;{project.testimonial.quote}&rdquo;</p>
            <footer className="mt-6">
              <p className="font-bold text-text-dark">{project.testimonial.author}</p>
              <p className="text-sm text-text-dark/60">{project.testimonial.role}</p>
            </footer>
          </blockquote>

          <div className="mt-12 text-center">
            <Link href="/portfolio" className="text-sm font-semibold text-accent hover:underline">← Back to Portfolio</Link>
          </div>
        </div>
      </section>
      <CTASection title="Ready for your success story?" />
    </>
  );
}
