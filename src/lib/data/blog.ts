export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: { name: string; role: string; avatar: string };
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content: { type: "heading" | "paragraph" | "list"; content: string | string[] }[];
};

export const BLOG_CATEGORIES = [
  "All",
  "Development",
  "Design",
  "AI",
  "Business",
  "DevOps",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "building-scalable-saas-architecture",
    title: "Building Scalable SaaS Architecture in 2025",
    excerpt: "A comprehensive guide to multi-tenant architecture, billing systems, and scaling strategies for modern SaaS products.",
    category: "Development",
    author: { name: "Michael Torres", role: "CTO", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop" },
    date: "2025-05-15",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
    featured: true,
    content: [
      { type: "paragraph", content: "Building a SaaS product that scales from 100 to 100,000 users requires deliberate architectural decisions from day one. In this guide, we share the patterns that have powered our most successful client launches." },
      { type: "heading", content: "Multi-Tenant vs Single-Tenant" },
      { type: "paragraph", content: "Multi-tenant architecture reduces infrastructure costs and simplifies deployments, but requires careful data isolation. We recommend schema-based isolation for most B2B SaaS products." },
      { type: "heading", content: "Billing Infrastructure" },
      { type: "paragraph", content: "Stripe Billing handles subscriptions, trials, and usage-based pricing. Integrate webhooks early to keep your database in sync with payment events." },
      { type: "list", content: ["Design for horizontal scaling from MVP", "Implement feature flags for gradual rollouts", "Use event-driven architecture for async processing", "Monitor MRR, churn, and activation from launch"] },
    ],
  },
  {
    slug: "ai-chatbots-customer-support",
    title: "How AI Chatbots Are Transforming Customer Support",
    excerpt: "Learn how businesses are reducing support costs by 70% while improving customer satisfaction with intelligent chatbots.",
    category: "AI",
    author: { name: "Sarah Chen", role: "AI Lead", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop" },
    date: "2025-04-22",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80&auto=format&fit=crop",
    featured: true,
    content: [
      { type: "paragraph", content: "AI-powered chatbots have evolved from simple FAQ bots to sophisticated agents capable of resolving complex customer issues autonomously." },
      { type: "heading", content: "The Business Case for AI Support" },
      { type: "paragraph", content: "Companies implementing AI chatbots report 60-70% reduction in support ticket volume and 24/7 availability without additional headcount." },
      { type: "heading", content: "Implementation Best Practices" },
      { type: "list", content: ["Start with high-volume, low-complexity queries", "Maintain human handoff for edge cases", "Train on your actual support history", "Measure resolution rate and CSAT continuously"] },
    ],
  },
  {
    slug: "ux-design-conversion-optimization",
    title: "UX Design Patterns That Drive Conversions",
    excerpt: "Proven UI/UX patterns that increased conversion rates by 40% across our client portfolio.",
    category: "Design",
    author: { name: "Emma Walsh", role: "Design Director", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&auto=format&fit=crop" },
    date: "2025-03-10",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&auto=format&fit=crop",
    content: [
      { type: "paragraph", content: "Great UX isn't just about aesthetics — it's about removing friction at every step of the user journey." },
      { type: "heading", content: "Above the Fold" },
      { type: "paragraph", content: "Your value proposition must be clear within 3 seconds. Use bold headlines, social proof, and a single primary CTA." },
      { type: "list", content: ["Reduce form fields to essentials only", "Use progressive disclosure for complex flows", "Add micro-interactions for feedback", "Test mobile experience first"] },
    ],
  },
  {
    slug: "cloud-cost-optimization-guide",
    title: "Cloud Cost Optimization: A Practical Guide",
    excerpt: "How we helped clients reduce AWS bills by 40% without sacrificing performance or reliability.",
    category: "DevOps",
    author: { name: "David Park", role: "DevOps Engineer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop" },
    date: "2025-02-18",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80&auto=format&fit=crop",
    content: [
      { type: "paragraph", content: "Cloud costs can spiral quickly without proper governance. Here's our proven framework for optimization." },
      { type: "heading", content: "Right-Sizing Resources" },
      { type: "paragraph", content: "Most companies over-provision by 30-50%. Use CloudWatch metrics to identify underutilized instances." },
      { type: "list", content: ["Implement auto-scaling policies", "Use reserved instances for predictable workloads", "Archive cold data to cheaper storage tiers", "Set budget alerts and tagging policies"] },
    ],
  },
  {
    slug: "startup-mvp-development-guide",
    title: "The Complete Guide to MVP Development for Startups",
    excerpt: "Everything founders need to know about building an MVP that validates ideas and attracts investors.",
    category: "Business",
    author: { name: "Michael Torres", role: "CTO", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop" },
    date: "2025-01-25",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80&auto=format&fit=crop",
    content: [
      { type: "paragraph", content: "An MVP isn't about building less — it's about building the right thing to validate your core hypothesis." },
      { type: "heading", content: "Defining Your MVP Scope" },
      { type: "paragraph", content: "Focus on one core user problem. Every feature should directly support validating your primary business hypothesis." },
      { type: "list", content: ["Identify your riskiest assumption first", "Build for 100 users, architect for 100,000", "Launch in 8-12 weeks maximum", "Measure activation, retention, and NPS from day one"] },
    ],
  },
  {
    slug: "mobile-app-performance-tips",
    title: "Mobile App Performance: 10 Tips for Speed",
    excerpt: "Technical strategies to achieve 60fps animations and sub-second load times on mobile apps.",
    category: "Development",
    author: { name: "James Liu", role: "Mobile Lead", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&auto=format&fit=crop" },
    date: "2024-12-08",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80&auto=format&fit=crop",
    content: [
      { type: "paragraph", content: "Performance directly impacts retention. Apps that load in under 2 seconds retain 30% more users." },
      { type: "heading", content: "Optimization Strategies" },
      { type: "list", content: ["Lazy load images and heavy components", "Implement efficient caching strategies", "Minimize bundle size with code splitting", "Profile and fix memory leaks early", "Use native modules for performance-critical features"] },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3) {
  return BLOG_POSTS.filter((p) => p.slug !== currentSlug && p.category === category).slice(0, limit);
}
