"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  SERVICES,
  SERVICE_CATEGORIES,
  FEATURED_SERVICE_SLUG,
} from "@/lib/data/services";
import { CheckIcon, ServiceIcon } from "@/components/ui/Icons";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

function ServiceCard({
  slug,
  category,
  title,
  items,
  featured = false,
  delay = 0,
}: {
  slug: string;
  category: string;
  title: string;
  items: string[];
  featured?: boolean;
  delay?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={`group relative flex h-full flex-col rounded-3xl p-8 transition-shadow duration-300 md:p-10 ${
        featured
          ? "bg-primary text-text-primary shadow-2xl shadow-primary/30 ring-1 ring-accent/20 hover:shadow-accent/10 hover:ring-accent/40"
          : "bg-white/80 text-text-dark shadow-lg shadow-black/5 ring-1 ring-black/5 hover:shadow-xl hover:ring-accent/30"
      }`}
    >
      <Link href={`/services/${slug}`} className="absolute inset-0 z-10" aria-label={title} />
      <span
        className={`mb-6 inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest ${
          featured ? "bg-accent/15 text-accent" : "bg-secondary text-text-dark/60"
        }`}
      >
        {category}
      </span>
      <ServiceIcon variant={featured ? "featured" : "default"} className="mb-6 h-9 w-9" />
      <h3
        className={`mb-6 text-xl font-bold leading-tight tracking-tight md:text-2xl ${
          featured ? "text-text-primary" : "text-text-dark"
        }`}
      >
        {title}
      </h3>
      <ul className="mt-auto space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm md:text-[15px]">
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                featured ? "bg-accent text-text-dark" : "bg-accent/80 text-text-dark"
              }`}
            >
              <CheckIcon className="h-3 w-3" />
            </span>
            <span className={featured ? "text-text-secondary" : "text-text-dark/70"}>{item}</span>
          </li>
        ))}
      </ul>
      <span
        className={`absolute bottom-0 right-0 h-5 w-5 ${featured ? "bg-accent" : "bg-text-dark"}`}
        aria-hidden="true"
      />
    </motion.article>
  );
}

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-[#ECECE4] py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <motion.div {...fadeUp} className="mb-12 max-w-2xl md:mb-16">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
            Our Services
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-text-dark">
            Explore{" "}
            <span className="inline-block rounded-full bg-accent px-4 py-0.5 text-text-dark md:px-5 md:py-1">
              Unique
            </span>{" "}
            digital agency services
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-dark/65">
            Design, build, deploy, scale, and maintain — we partner with you across the full
            product lifecycle, from first prototype to long-term growth.
          </p>
          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-text-dark transition hover:text-accent"
          >
            Browse full services overview
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const featured = service.slug === FEATURED_SERVICE_SLUG;
            return (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                category={SERVICE_CATEGORIES[service.slug] ?? "Service"}
                title={service.title}
                items={service.features.slice(0, 3).map((f) => f.title)}
                featured={featured}
                delay={index * 0.05}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
