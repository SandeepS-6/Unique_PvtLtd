"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/data/blog";

const POSTS_PER_PAGE = 4;

export default function BlogListing() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [category, search]);

  const featured = BLOG_POSTS.filter((p) => p.featured);
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <>
      {featured.length > 0 && category === "All" && !search && (
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {featured.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group grid overflow-hidden rounded-3xl bg-primary md:grid-cols-2">
              <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[240px]">
                <Image src={post.image} alt={post.title} fill className="object-cover grayscale transition group-hover:grayscale-0" sizes="50vw" />
              </div>
              <div className="flex flex-col justify-center p-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">Featured</span>
                <h3 className="mt-2 text-xl font-bold text-text-primary group-hover:text-accent transition">{post.title}</h3>
                <p className="mt-2 text-sm text-text-secondary line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input type="search" placeholder="Search articles..." value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-text-primary outline-none focus:border-accent md:w-72" />
        <div className="flex flex-wrap gap-2">
          {BLOG_CATEGORIES.map((cat) => (
            <button key={cat} type="button" onClick={() => { setCategory(cat); setPage(1); }} className={`rounded-full px-4 py-2 text-xs font-semibold transition ${category === cat ? "bg-accent text-text-dark" : "bg-white/5 text-text-secondary hover:bg-accent/20"}`}>{cat}</button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {paginated.map((post, i) => (
          <motion.article key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image src={post.image} alt={post.title} fill className="object-cover grayscale transition group-hover:grayscale-0" sizes="50vw" />
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-3 text-xs text-text-secondary">
                  <span className="font-semibold text-accent">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-text-primary group-hover:text-accent transition">{post.title}</h3>
                <p className="mt-2 text-sm text-text-secondary line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} type="button" onClick={() => setPage(i + 1)} className={`h-10 w-10 rounded-full text-sm font-semibold transition ${page === i + 1 ? "bg-accent text-text-dark" : "bg-white/5 text-text-secondary hover:bg-accent/20"}`}>{i + 1}</button>
          ))}
        </div>
      )}
    </>
  );
}
