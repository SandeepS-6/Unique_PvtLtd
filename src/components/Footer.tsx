"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FOOTER_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary py-16 md:py-20">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                <span className="text-lg font-bold text-text-dark">U</span>
              </span>
              <span className="text-xl font-bold text-text-primary">{SITE.name}</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-text-secondary">
              {SITE.description} Trusted technology partner since {SITE.founded}.
            </p>
            <div className="mt-6 flex gap-4">
              {Object.entries(SITE.social).map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm capitalize text-text-secondary transition-colors hover:text-accent"
                >
                  {key}
                </a>
              ))}
            </div>
          </motion.div>

          {Object.entries(FOOTER_LINKS).map(([section, links], i) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-text-primary">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-text-secondary transition-colors hover:text-accent">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-text-primary">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-accent">{SITE.email}</a>
              </li>
              <li>
                <a href={`tel:${SITE.phone}`} className="hover:text-accent">{SITE.phone}</a>
              </li>
              <li>{SITE.address}</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-text-secondary">
            <Link href="/contact" className="hover:text-accent">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-accent">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
