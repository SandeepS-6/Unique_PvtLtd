import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { createMetadata, articleJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { getPostBySlug, getRelatedPosts, BLOG_POSTS } from "@/lib/data/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return createMetadata({ title: post.title, description: post.excerpt, path: `/blog/${slug}`, type: "article" });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, post.category);
  const headings = post.content.filter((b) => b.type === "heading").map((b) => b.content as string);
  const jsonLd = articleJsonLd(post.title, post.excerpt, `${SITE.url}/blog/${slug}`, post.date, post.author.name);

  const shareUrl = `${SITE.url}/blog/${slug}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero badge={post.category} title={post.title} subtitle={post.excerpt} image={post.image} />

      <article className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

          <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
            {headings.length > 0 && (
              <aside className="hidden lg:block">
                <div className="sticky top-28 rounded-2xl bg-white p-6">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-accent">Contents</h4>
                  <ul className="mt-4 space-y-2">
                    {headings.map((h) => (
                      <li key={h}><a href={`#${h.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm text-text-dark/65 hover:text-accent transition">{h}</a></li>
                    ))}
                  </ul>
                </div>
              </aside>
            )}

            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <p className="font-semibold text-text-dark">{post.author.name}</p>
                  <p className="text-xs text-text-dark/50">{post.author.role} · {post.date} · {post.readTime} read</p>
                </div>
              </div>

              <div className="prose-custom space-y-6">
                {post.content.map((block, i) => {
                  if (block.type === "heading") {
                    const text = block.content as string;
                    return <h2 key={i} id={text.toLowerCase().replace(/\s+/g, "-")} className="text-2xl font-bold text-text-dark">{text}</h2>;
                  }
                  if (block.type === "paragraph") {
                    return <p key={i} className="text-text-dark/70 leading-relaxed">{block.content as string}</p>;
                  }
                  if (block.type === "list") {
                    return (
                      <ul key={i} className="space-y-2">
                        {(block.content as string[]).map((item) => (
                          <li key={item} className="flex items-start gap-2 text-text-dark/70">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
              </div>

              <div className="mt-12 flex items-center gap-4 border-t border-black/10 pt-8">
                <span className="text-sm font-semibold text-text-dark">Share:</span>
                <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary px-4 py-2 text-xs text-text-primary hover:bg-accent hover:text-text-dark transition">Twitter</a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary px-4 py-2 text-xs text-text-primary hover:bg-accent hover:text-text-dark transition">LinkedIn</a>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-text-dark">Related Articles</h3>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="group rounded-2xl bg-white p-6 transition hover:shadow-lg">
                    <span className="text-xs font-semibold text-accent">{r.category}</span>
                    <h4 className="mt-2 font-bold text-text-dark group-hover:text-accent transition">{r.title}</h4>
                    <p className="mt-2 text-sm text-text-dark/60 line-clamp-2">{r.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
      <CTASection />
    </>
  );
}
