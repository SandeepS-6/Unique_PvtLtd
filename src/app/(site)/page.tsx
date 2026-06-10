import Hero from "@/components/Hero";
import ProblemsSection from "@/components/ProblemsSection";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";
import { createMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = createMetadata({
  title: `${SITE.name} — Design, Build, Deploy, Scale & Maintain`,
  description: SITE.description,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemsSection />
      <ServicesGrid />
      <CTASection />
    </>
  );
}
