"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NAV_ITEMS, SITE } from "@/lib/site";
import { SERVICES } from "@/lib/data/services";
import { SearchIcon } from "@/components/ui/Icons";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          isHome ? "bg-transparent" : "bg-primary/95 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent transition-transform group-hover:scale-105">
              <span className="text-lg font-bold text-text-dark">U</span>
            </span>
            <span className="text-xl font-bold tracking-tight text-text-primary">{SITE.name}</span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => "mega" in item && item.mega && setMegaOpen(true)}
                onMouseLeave={() => "mega" in item && item.mega && setMegaOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    pathname === item.href || pathname.startsWith(item.href + "/")
                      ? "text-accent"
                      : "text-text-primary/90"
                  }`}
                >
                  {item.label}
                </Link>
                {"mega" in item && item.mega && megaOpen && (
                  <div className="absolute left-1/2 top-full pt-4 -translate-x-1/2">
                    <div className="w-[640px] rounded-2xl border border-white/10 bg-primary p-6 shadow-2xl">
                      <div className="grid grid-cols-2 gap-3">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="rounded-xl p-3 transition-colors hover:bg-white/5"
                            onClick={() => setMegaOpen(false)}
                          >
                            <p className="text-sm font-semibold text-text-primary">{service.title}</p>
                            <p className="mt-1 text-xs text-text-secondary line-clamp-1">{service.shortDescription}</p>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/services"
                        className="mt-4 block text-center text-sm font-semibold text-accent hover:underline"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Link
              href="/get-quote"
              className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-text-dark transition-transform hover:scale-105 md:block"
            >
              Get a Quote
            </Link>
            <button type="button" aria-label="Search" className="hidden text-text-primary hover:text-accent lg:block">
              <SearchIcon />
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              className="flex flex-col items-end gap-1.5 p-1 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className={`block h-0.5 w-7 bg-text-primary transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-text-primary transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-7 bg-text-primary transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary pt-24 lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-white/10 py-4 text-lg font-medium text-text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/pricing"
                onClick={() => setMobileOpen(false)}
                className="border-b border-white/10 py-4 text-lg font-medium text-text-primary"
              >
                Pricing
              </Link>
              <Link
                href="/careers"
                onClick={() => setMobileOpen(false)}
                className="border-b border-white/10 py-4 text-lg font-medium text-text-primary"
              >
                Careers
              </Link>
              <Link
                href="/get-quote"
                onClick={() => setMobileOpen(false)}
                className="mt-6 rounded-full bg-accent py-4 text-center font-semibold text-text-dark"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
