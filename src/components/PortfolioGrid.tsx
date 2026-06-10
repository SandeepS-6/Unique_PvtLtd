"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from "@/lib/data/portfolio";

export default function PortfolioGrid() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return PORTFOLIO.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [category, search]);

  return (
    <>
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          type="search"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-text-dark outline-none focus:border-accent md:w-72"
        />
        <div className="flex flex-wrap gap-2">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                category === cat ? "bg-accent text-text-dark" : "bg-white text-text-dark/60 hover:bg-accent/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <motion.div key={project.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            <Link href={`/portfolio/${project.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image src={project.image} alt={project.title} fill className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" sizes="(max-width:768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="mt-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">{project.category}</span>
                <h3 className="mt-1 text-xl font-bold text-text-dark group-hover:text-accent transition">{project.title}</h3>
                <p className="mt-2 text-sm text-text-dark/60">{project.excerpt}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-text-dark/50">No projects match your search.</p>
      )}
    </>
  );
}
