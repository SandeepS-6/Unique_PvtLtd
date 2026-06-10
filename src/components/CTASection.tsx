"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type CTASectionProps = {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  title = "Ready to build something unique?",
  subtitle = "Let's discuss your project and create a roadmap to success.",
  primaryLabel = "Get a Free Quote",
  primaryHref = "/get-quote",
  secondaryLabel = "Schedule a Call",
  secondaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-accent py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-[-0.03em] text-text-dark">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-dark/70">{subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={primaryHref}
              className="rounded-full bg-text-dark px-8 py-4 text-sm font-semibold text-text-primary transition-transform hover:scale-105"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="rounded-full border-2 border-text-dark px-8 py-4 text-sm font-semibold text-text-dark transition-colors hover:bg-text-dark hover:text-text-primary"
            >
              {secondaryLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
