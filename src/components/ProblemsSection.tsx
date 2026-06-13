"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RotatingBadge from "@/components/ui/RotatingBadge";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export default function ProblemsSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute right-8 top-16 hidden md:block lg:right-16 lg:top-20">
        <div className="relative h-16 w-16">
          <span className="absolute left-0 top-0 h-14 w-14 bg-accent" />
          <span className="absolute bottom-0 right-0 h-14 w-14 bg-text-dark" />
        </div>
      </div>

      <div className="mx-auto max-w-content px-6 lg:px-10">
        <motion.h2
          {...fadeUp}
          className="max-w-2xl text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.03em] text-text-dark"
        >
          Digital agency problems and their best solutions
        </motion.h2>

        <div className="relative mt-14 lg:mt-20">
          <div className="pointer-events-none absolute inset-0 hidden border border-black/8 lg:block">
            <div className="absolute left-[42%] top-0 h-full w-px bg-black/8" />
            <div className="absolute left-0 top-[52%] h-px w-full bg-black/8" />
          </div>

          <div className="absolute left-1/2 top-[58%] z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <RotatingBadge size={140} textColor="#0E1015" />
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-0">
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="relative lg:col-span-5 lg:row-span-2 lg:pr-10"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[3/4] lg:aspect-auto lg:h-[520px]">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80&auto=format&fit=crop"
                  alt="Team meeting around a laptop"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="flex flex-col justify-center lg:col-span-7 lg:pl-14 lg:pt-6"
            >
              <p className="max-w-xl text-base leading-[1.85] text-text-dark/70 md:text-[17px]">
                Many businesses struggle with fragmented digital strategies,
                outdated websites, and poor user experiences that fail to convert.
                At Unique, we identify these core challenges and deliver tailored
                solutions — from brand identity to full-stack development — that
                drive measurable growth and lasting impact.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              className="relative lg:col-span-7 lg:pl-14 lg:pt-10"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl md:aspect-[5/3]">
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80&auto=format&fit=crop"
                  alt="Developer working at a desk"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-10 flex justify-center md:hidden">
            <RotatingBadge size={110} textColor="#0E1015" />
          </div>
        </div>
      </div>
    </section>
  );
}
