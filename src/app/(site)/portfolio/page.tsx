import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import PortfolioGrid from "@/components/PortfolioGrid";
import Breadcrumbs from "@/components/Breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Portfolio",
  description: "Explore our portfolio of SaaS products, mobile apps, corporate websites, dashboards, CRM systems, and AI applications.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero badge="Our Work" title="Projects that drive results" subtitle="500+ digital products designed, built, and scaled for clients worldwide." image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop" />
      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Breadcrumbs items={[{ label: "Portfolio" }]} />
          <PortfolioGrid />
        </div>
      </section>
      <CTASection title="Want results like these?" primaryLabel="Start Your Project" />
    </>
  );
}
