"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  image?: string;
  dark?: boolean;
  children?: React.ReactNode;
};

export default function PageHero({
  title,
  subtitle,
  badge,
  image,
  dark = true,
  children,
}: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 ${dark ? "bg-primary" : "bg-secondary"}`}>
      {image && (
        <div className="absolute inset-0">
          <Image src={image} alt="" fill className="object-cover grayscale opacity-20" sizes="100vw" />
          <div className="absolute inset-0 bg-linear-to-b from-primary/80 to-primary" />
        </div>
      )}
      <div className="relative mx-auto max-w-content px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {badge && (
            <span className="mb-4 inline-block rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              {badge}
            </span>
          )}
          <h1
            className={`text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] ${
              dark ? "text-text-primary" : "text-text-dark"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${dark ? "text-text-secondary" : "text-text-dark/65"}`}>
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
