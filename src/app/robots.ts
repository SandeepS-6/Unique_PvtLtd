import { SITE } from "@/lib/site";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/success"] },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
