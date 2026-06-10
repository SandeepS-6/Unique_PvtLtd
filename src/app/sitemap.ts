import { SITE } from "@/lib/site";
import { getAllServiceSlugs } from "@/lib/data/services";
import { PORTFOLIO } from "@/lib/data/portfolio";
import { BLOG_POSTS } from "@/lib/data/blog";

export default function sitemap() {
  const base = SITE.url;
  const staticPages = [
    "", "/about", "/services", "/portfolio", "/industries", "/pricing",
    "/maintenance-support", "/ai-solutions", "/careers", "/blog", "/contact", "/get-quote",
  ];

  const servicePages = getAllServiceSlugs().map((slug) => `/services/${slug}`);
  const portfolioPages = PORTFOLIO.map((p) => `/portfolio/${p.slug}`);
  const blogPages = BLOG_POSTS.map((p) => `/blog/${p.slug}`);

  const allPages = [...staticPages, ...servicePages, ...portfolioPages, ...blogPages];

  return allPages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : path.startsWith("/services") ? 0.9 : 0.7,
  }));
}
