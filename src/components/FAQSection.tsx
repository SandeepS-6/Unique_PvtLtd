"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type FAQ = { question: string; answer: string };

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-text-dark md:text-4xl">{title}</h2>
        <div className="divide-y divide-black/10">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="text-lg font-semibold text-text-dark">{faq.question}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-text-dark">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-text-dark/65 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
