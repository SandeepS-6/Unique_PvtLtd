"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export function SectionHeading({
  badge,
  title,
  subtitle,
  dark = false,
  align = "left",
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <motion.div {...fadeUp} className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}>
      {badge && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
          {badge}
        </span>
      )}
      <h2
        className={`text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-[-0.02em] ${
          dark ? "text-text-primary" : "text-text-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-text-secondary" : "text-text-dark/65"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
