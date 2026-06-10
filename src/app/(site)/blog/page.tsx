import PageHero from "@/components/PageHero";
import BlogListing from "@/components/BlogListing";
import Breadcrumbs from "@/components/Breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog",
  description: "Insights on development, design, AI, DevOps, and business strategy from the Unique team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero badge="Blog" title="Insights & ideas" subtitle="Expert perspectives on building, scaling, and maintaining digital products." dark />
      <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <BlogListing />
        </div>
      </section>
    </>
  );
}
