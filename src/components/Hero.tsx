"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Particles from "@/components/ui/Particles";
import RotatingBadge from "@/components/ui/RotatingBadge";
import ServicesMarquee from "@/components/ServicesMarquee";

export default function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <section className="relative flex min-h-0 flex-1 flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80&auto=format&fit=crop"
            alt="Creative team collaborating in a modern office"
            fill
            priority
            className="object-cover object-center grayscale"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-primary/50 via-primary/70 to-primary/95" />
          <div className="absolute inset-0 bg-linear-to-r from-primary/30 via-transparent to-primary/50" />
        </div>

        <Particles />

        <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-10 pt-28 lg:px-10 lg:pb-16 lg:pt-32">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:justify-between lg:gap-12">
            {/* Headline */}
            <div className="relative min-w-0 max-w-4xl flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-start gap-y-2 md:gap-y-3"
              >
                <span className="inline-flex flex-wrap items-center gap-x-3 text-[clamp(2.5rem,6.5vw,6.25rem)] font-extrabold leading-none tracking-[-0.04em] text-text-primary md:gap-x-4">
                  <span className="whitespace-nowrap">Creating</span>
                  <span className="inline-flex shrink-0 items-center rounded-full bg-accent px-5 py-2 text-[0.92em] text-text-dark md:px-7 md:py-2.5">
                    brands
                  </span>
                </span>
                <span className="inline-flex flex-wrap items-center gap-x-3 text-[clamp(2.5rem,6.5vw,6.25rem)] font-extrabold leading-none tracking-[-0.04em] text-text-primary md:flex-nowrap md:gap-x-4">
                  <span className="whitespace-nowrap">and digital</span>
                  <span className="inline-flex shrink-0 items-center rounded-full bg-accent px-5 py-2 text-[0.92em] text-text-dark md:px-7 md:py-2.5">
                    solutions
                  </span>
                </span>
              </motion.h1>

              {/* Mobile subtext */}
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 max-w-sm text-[13px] leading-[1.7] text-text-secondary lg:hidden"
              >
                We design exceptional brands, products, web apps, mobile apps, and websites
                for startups and enterprises.
              </motion.p>
            </div>

            {/* Desktop: subtext top-right, badge lower-right */}
            <div className="hidden shrink-0 lg:grid lg:w-[260px] lg:grid-rows-[auto_1fr] xl:w-[280px]">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[220px] justify-self-end pt-2 text-right text-[13px] leading-[1.7] text-text-secondary"
              >
                We design exceptional brands, products, web apps, mobile apps, and websites
                for startups and enterprises.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-end justify-end pb-2"
              >
                <RotatingBadge size={148} textColor="#FFFFFF" />
              </motion.div>
            </div>
          </div>

          {/* Mobile badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 lg:hidden"
          >
            <RotatingBadge size={120} textColor="#FFFFFF" />
          </motion.div>
        </div>
      </section>

      <ServicesMarquee />
    </div>
  );
}
