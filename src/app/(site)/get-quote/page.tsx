import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/forms/QuoteForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Get a Quote",
  description: "Request a project quote. Multi-step form with budget, timeline, and instant estimate summary.",
  path: "/get-quote",
});

export default function GetQuotePage() {
  return (
    <>
      <PageHero badge="Get a Quote" title="Tell us about your project" subtitle="Complete the form below and receive an estimated project range within 24 hours." image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&auto=format&fit=crop" dark={false} />
      <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Breadcrumbs items={[{ label: "Get a Quote" }]} />
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
