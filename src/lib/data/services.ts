export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  benefits: string[];
  features: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  technologies: string[];
  industries: string[];
  faqs: { question: string; answer: string }[];
};

const baseProcess = [
  { step: 1, title: "Discovery", description: "We analyze your goals, users, and technical requirements." },
  { step: 2, title: "Strategy", description: "We define scope, architecture, and a phased delivery roadmap." },
  { step: 3, title: "Design & Build", description: "Our team designs and develops with weekly progress reviews." },
  { step: 4, title: "Launch & Scale", description: "We deploy, monitor, and optimize for long-term growth." },
];

function service(partial: Service): Service {
  return partial;
}

export const SERVICES: Service[] = [
  service({
    slug: "product-discovery",
    title: "Product Discovery & Consulting",
    shortDescription: "Validate ideas, define roadmaps, and reduce risk before you build.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop",
    benefits: ["Reduce build risk by 60%", "Clear MVP scope in weeks", "Investor-ready documentation", "User-validated feature priorities"],
    features: [
      { title: "Stakeholder Workshops", description: "Align leadership, product, and engineering on vision and outcomes." },
      { title: "Market & Competitor Analysis", description: "Identify gaps, positioning, and differentiation opportunities." },
      { title: "Technical Feasibility", description: "Assess architecture options, integrations, and build complexity." },
      { title: "MVP Roadmapping", description: "Prioritized feature backlog with timeline and budget estimates." },
    ],
    process: baseProcess,
    technologies: ["Figma", "Miro", "Notion", "Jira", "Mixpanel"],
    industries: ["Startups", "SaaS", "Healthcare", "Finance"],
    faqs: [
      { question: "How long does discovery take?", answer: "Typically 2–4 weeks depending on product complexity and stakeholder availability." },
      { question: "Do we get a prototype?", answer: "Yes. We deliver clickable prototypes and a technical specification document." },
    ],
  }),
  service({
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "Human-centered interfaces that convert visitors into loyal customers.",
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80&auto=format&fit=crop",
    benefits: ["40% higher conversion rates", "Reduced user friction", "Design systems that scale", "Accessibility-compliant UI"],
    features: [
      { title: "User Research", description: "Interviews, personas, and journey mapping grounded in real user behavior." },
      { title: "Wireframing & Prototyping", description: "Low and high-fidelity prototypes tested before development begins." },
      { title: "Visual Design", description: "Premium brand-aligned interfaces with micro-interactions and motion." },
      { title: "Design Systems", description: "Reusable component libraries for consistent product evolution." },
    ],
    process: baseProcess,
    technologies: ["Figma", "Framer", "Adobe CC", "Principle", "Storybook"],
    industries: ["E-Commerce", "SaaS", "Healthcare", "Education"],
    faqs: [
      { question: "Do you hand off developer-ready files?", answer: "Yes. We provide Figma specs, assets, and component documentation." },
      { question: "Can you redesign existing products?", answer: "Absolutely. We audit current UX and deliver phased improvement plans." },
    ],
  }),
  service({
    slug: "web-development",
    title: "Website Development",
    shortDescription: "High-performance marketing and corporate websites built to rank and convert.",
    heroImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80&auto=format&fit=crop",
    benefits: ["90+ Lighthouse scores", "SEO-optimized architecture", "CMS flexibility", "Global CDN delivery"],
    features: [
      { title: "Custom Development", description: "Tailored sites built with Next.js, WordPress, or headless CMS." },
      { title: "Performance Optimization", description: "Core Web Vitals optimization for speed and search rankings." },
      { title: "SEO Foundation", description: "Structured data, meta optimization, and sitemap integration." },
      { title: "Analytics Integration", description: "GA4, Hotjar, and conversion tracking from day one." },
    ],
    process: baseProcess,
    technologies: ["Next.js", "WordPress", "Sanity", "Vercel", "Cloudflare"],
    industries: ["Corporate", "Real Estate", "Local Businesses", "Finance"],
    faqs: [
      { question: "How long to launch a corporate website?", answer: "Most corporate sites launch in 4–8 weeks from kickoff." },
      { question: "Can we manage content ourselves?", answer: "Yes. We integrate intuitive CMS solutions with training included." },
    ],
  }),
  service({
    slug: "web-app-development",
    title: "Web Application Development",
    shortDescription: "Scalable, secure web applications for complex business workflows.",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop",
    benefits: ["Enterprise-grade security", "Real-time capabilities", "Multi-tenant architecture", "API-first development"],
    features: [
      { title: "Full-Stack Development", description: "End-to-end web apps with robust backend and polished frontend." },
      { title: "Dashboard & Admin Panels", description: "Data-rich interfaces for operations, analytics, and management." },
      { title: "Third-Party Integrations", description: "Payment gateways, CRMs, ERPs, and custom API connections." },
      { title: "Role-Based Access", description: "Granular permissions and audit trails for enterprise compliance." },
    ],
    process: baseProcess,
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Redis"],
    industries: ["SaaS", "Logistics", "Manufacturing", "Finance"],
    faqs: [
      { question: "Do you build MVPs and enterprise apps?", answer: "Yes. We scale from MVP to enterprise with the same engineering standards." },
      { question: "What about ongoing maintenance?", answer: "We offer dedicated maintenance plans with SLA-backed support." },
    ],
  }),
  service({
    slug: "saas-development",
    title: "SaaS Product Development",
    shortDescription: "Launch and scale subscription products with billing, auth, and analytics built in.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
    benefits: ["Faster time-to-market", "Subscription billing ready", "Multi-tenant from day one", "Investor-ready metrics"],
    features: [
      { title: "MVP to Scale", description: "Rapid MVP delivery with architecture designed for growth." },
      { title: "Billing & Subscriptions", description: "Stripe integration with plans, trials, and usage-based pricing." },
      { title: "User Management", description: "Auth, teams, roles, and onboarding flows out of the box." },
      { title: "Analytics Dashboard", description: "MRR, churn, activation, and product usage tracking." },
    ],
    process: baseProcess,
    technologies: ["Next.js", "Stripe", "Supabase", "PostgreSQL", "Vercel"],
    industries: ["SaaS", "Startups", "Education", "Healthcare"],
    faqs: [
      { question: "Can you help with go-to-market?", answer: "Yes. We support landing pages, onboarding, and growth integrations." },
      { question: "How do you handle scaling?", answer: "Cloud-native architecture with auto-scaling and performance monitoring." },
    ],
  }),
  service({
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "Native and cross-platform mobile apps that users love and businesses rely on.",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80&auto=format&fit=crop",
    benefits: ["iOS & Android coverage", "Offline-first capabilities", "App Store optimization", "Push notification systems"],
    features: [
      { title: "Native Development", description: "Swift and Kotlin apps optimized for platform-specific experiences." },
      { title: "Cross-Platform", description: "React Native and Flutter for faster multi-platform delivery." },
      { title: "Backend Integration", description: "APIs, real-time sync, and cloud storage integration." },
      { title: "App Store Launch", description: "Submission, ASO, and post-launch monitoring support." },
    ],
    process: baseProcess,
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    industries: ["Healthcare", "E-Commerce", "Logistics", "Education"],
    faqs: [
      { question: "Native or cross-platform?", answer: "We recommend based on budget, timeline, and performance requirements." },
      { question: "Do you maintain apps post-launch?", answer: "Yes. Our maintenance plans cover OS updates, bug fixes, and features." },
    ],
  }),
  service({
    slug: "backend-development",
    title: "Backend Development",
    shortDescription: "Robust APIs, microservices, and database architecture for demanding applications.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop",
    benefits: ["99.9% uptime architecture", "Secure API design", "Horizontal scalability", "Comprehensive documentation"],
    features: [
      { title: "REST & GraphQL APIs", description: "Well-documented APIs with versioning and rate limiting." },
      { title: "Microservices", description: "Modular services for independent scaling and deployment." },
      { title: "Database Design", description: "Optimized schemas, indexing, and migration strategies." },
      { title: "Authentication", description: "OAuth, JWT, SSO, and enterprise identity integration." },
    ],
    process: baseProcess,
    technologies: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB"],
    industries: ["SaaS", "Finance", "Healthcare", "Manufacturing"],
    faqs: [
      { question: "Can you audit existing backends?", answer: "Yes. We perform security, performance, and architecture audits." },
      { question: "Do you provide API documentation?", answer: "Full OpenAPI/Swagger docs with integration guides included." },
    ],
  }),
  service({
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortDescription: "Infrastructure automation, CI/CD pipelines, and cloud optimization for reliability.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&auto=format&fit=crop",
    benefits: ["50% faster deployments", "Reduced cloud costs", "Automated monitoring", "Disaster recovery ready"],
    features: [
      { title: "Cloud Migration", description: "AWS, GCP, and Azure migration with zero-downtime strategies." },
      { title: "CI/CD Pipelines", description: "Automated testing, building, and deployment workflows." },
      { title: "Infrastructure as Code", description: "Terraform and CloudFormation for reproducible environments." },
      { title: "Monitoring & Alerting", description: "Datadog, Grafana, and PagerDuty integration for 24/7 visibility." },
    ],
    process: baseProcess,
    technologies: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"],
    industries: ["SaaS", "Finance", "Logistics", "Manufacturing"],
    faqs: [
      { question: "Can you reduce our cloud bill?", answer: "We typically find 20–40% savings through right-sizing and optimization." },
      { question: "Do you offer managed DevOps?", answer: "Yes. Ongoing DevOps support is available on retainer." },
    ],
  }),
  service({
    slug: "ai-solutions",
    title: "AI Solutions",
    shortDescription: "Practical AI integrations that automate workflows and enhance customer experiences.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop",
    benefits: ["24/7 automated support", "60% faster lead qualification", "Workflow automation", "Custom model fine-tuning"],
    features: [
      { title: "AI Chatbots", description: "Intelligent conversational agents for web, app, and messaging." },
      { title: "WhatsApp Automation", description: "Automated customer journeys via WhatsApp Business API." },
      { title: "OpenAI Integrations", description: "GPT-powered features embedded in your existing products." },
      { title: "Workflow Automation", description: "AI-driven process automation across sales, support, and ops." },
    ],
    process: baseProcess,
    technologies: ["OpenAI", "LangChain", "Pinecone", "Whisper", "Python"],
    industries: ["E-Commerce", "Healthcare", "Finance", "Local Businesses"],
    faqs: [
      { question: "Is our data secure with AI?", answer: "We implement data isolation, encryption, and compliance-first AI architecture." },
      { question: "Can AI integrate with our CRM?", answer: "Yes. We connect AI workflows with Salesforce, HubSpot, and custom systems." },
    ],
  }),
  service({
    slug: "maintenance-support",
    title: "Maintenance & Support",
    shortDescription: "Keep your digital products secure, fast, and evolving with proactive care.",
    heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80&auto=format&fit=crop",
    benefits: ["99.9% uptime SLA", "Security patch management", "Performance monitoring", "Priority bug resolution"],
    features: [
      { title: "Security Updates", description: "Proactive patching and vulnerability monitoring." },
      { title: "Performance Monitoring", description: "Real-time alerts and monthly performance reports." },
      { title: "Database Optimization", description: "Query tuning, indexing, and backup management." },
      { title: "Feature Enhancements", description: "Continuous improvements based on user feedback." },
    ],
    process: baseProcess,
    technologies: ["Sentry", "Datadog", "GitHub Actions", "AWS", "PostgreSQL"],
    industries: ["All Industries"],
    faqs: [
      { question: "What's included in 24/7 support?", answer: "Critical issue response within 1 hour, with dedicated escalation paths." },
      { question: "Can we upgrade plans anytime?", answer: "Yes. Plans scale with your product growth and support needs." },
    ],
  }),
  service({
    slug: "digital-growth",
    title: "Digital Growth Services",
    shortDescription: "Data-driven marketing and optimization to accelerate user acquisition and revenue.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop",
    benefits: ["3x average ROAS improvement", "Conversion rate optimization", "Full-funnel analytics", "Growth experimentation"],
    features: [
      { title: "SEO & Content Strategy", description: "Technical SEO, content planning, and authority building." },
      { title: "Paid Media", description: "Google, Meta, and LinkedIn campaigns with ROI tracking." },
      { title: "CRO", description: "A/B testing and landing page optimization for higher conversions." },
      { title: "Marketing Automation", description: "Email sequences, lead nurturing, and CRM workflows." },
    ],
    process: baseProcess,
    technologies: ["GA4", "HubSpot", "SEMrush", "Hotjar", "Google Ads"],
    industries: ["E-Commerce", "SaaS", "Real Estate", "Local Businesses"],
    faqs: [
      { question: "Do you work with existing marketing teams?", answer: "Yes. We complement in-house teams or operate as your full growth partner." },
      { question: "How quickly will we see results?", answer: "Paid media shows results in weeks; SEO compounds over 3–6 months." },
    ],
  }),
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}

export const SERVICE_CATEGORIES: Record<string, string> = {
  "product-discovery": "Consulting",
  "ui-ux-design": "Design",
  "web-development": "Websites",
  "web-app-development": "Development",
  "saas-development": "SaaS",
  "mobile-app-development": "Featured",
  "backend-development": "Backend",
  "cloud-devops": "DevOps",
  "ai-solutions": "AI",
  "maintenance-support": "Support",
  "digital-growth": "Growth",
};

export const FEATURED_SERVICE_SLUG = "mobile-app-development";
