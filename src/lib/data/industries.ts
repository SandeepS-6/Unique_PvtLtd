export type Industry = {
  slug: string;
  title: string;
  description: string;
  image: string;
  challenges: string[];
  solutions: string[];
  relatedServices: { title: string; href: string }[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "startups",
    title: "Startups",
    description: "From MVP to market leader — we help startups move fast without breaking things.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop",
    challenges: ["Limited runway and tight timelines", "Finding product-market fit", "Scaling engineering team", "Technical debt accumulation"],
    solutions: ["Rapid MVP development in 8-12 weeks", "Product discovery and validation", "Scalable architecture from day one", "Fractional CTO advisory"],
    relatedServices: [
      { title: "Product Discovery", href: "/services/product-discovery" },
      { title: "SaaS Development", href: "/services/saas-development" },
      { title: "UI/UX Design", href: "/services/ui-ux-design" },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description: "HIPAA-compliant digital solutions for providers, patients, and healthcare innovators.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop",
    challenges: ["HIPAA and regulatory compliance", "Legacy system integration", "Patient data security", "Telehealth adoption"],
    solutions: ["HIPAA-compliant app development", "EHR/EMR integration", "Telehealth platforms", "Patient engagement apps"],
    relatedServices: [
      { title: "Mobile App Development", href: "/services/mobile-app-development" },
      { title: "Web App Development", href: "/services/web-app-development" },
      { title: "AI Solutions", href: "/ai-solutions" },
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    description: "Digital platforms that showcase properties and streamline transactions.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop",
    challenges: ["Property visualization at scale", "Lead management complexity", "Multi-listing integrations", "Mobile-first buyer journeys"],
    solutions: ["Virtual tour platforms", "CRM-integrated websites", "Property search engines", "Agent management dashboards"],
    relatedServices: [
      { title: "Website Development", href: "/services/web-development" },
      { title: "Web App Development", href: "/services/web-app-development" },
      { title: "Digital Growth", href: "/services/digital-growth" },
    ],
  },
  {
    slug: "education",
    title: "Education",
    description: "Engaging learning platforms and ed-tech solutions for institutions and startups.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80&auto=format&fit=crop",
    challenges: ["Student engagement at scale", "Content delivery complexity", "Assessment and grading automation", "Accessibility requirements"],
    solutions: ["Custom LMS platforms", "Live class integration", "AI-powered assessments", "Mobile learning apps"],
    relatedServices: [
      { title: "SaaS Development", href: "/services/saas-development" },
      { title: "Mobile App Development", href: "/services/mobile-app-development" },
      { title: "AI Solutions", href: "/ai-solutions" },
    ],
  },
  {
    slug: "e-commerce",
    title: "E-Commerce",
    description: "High-converting online stores and marketplaces built for growth.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop",
    challenges: ["Cart abandonment", "Inventory management", "Payment security", "Personalization at scale"],
    solutions: ["Custom e-commerce platforms", "AI shopping assistants", "Payment gateway integration", "Conversion optimization"],
    relatedServices: [
      { title: "Web Development", href: "/services/web-development" },
      { title: "AI Solutions", href: "/ai-solutions" },
      { title: "Digital Growth", href: "/services/digital-growth" },
    ],
  },
  {
    slug: "saas",
    title: "SaaS",
    description: "Full-lifecycle SaaS development from MVP to enterprise scale.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
    challenges: ["Multi-tenant architecture", "Subscription billing complexity", "Feature velocity vs stability", "Churn reduction"],
    solutions: ["SaaS platform development", "Billing and subscription systems", "Analytics and growth tooling", "DevOps and scaling"],
    relatedServices: [
      { title: "SaaS Development", href: "/services/saas-development" },
      { title: "Cloud & DevOps", href: "/services/cloud-devops" },
      { title: "Maintenance & Support", href: "/maintenance-support" },
    ],
  },
  {
    slug: "logistics",
    title: "Logistics",
    description: "Supply chain visibility, fleet management, and logistics automation.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop",
    challenges: ["Real-time tracking requirements", "Route optimization", "Warehouse management", "Integration with carriers"],
    solutions: ["Fleet management systems", "Warehouse ERP modules", "Real-time tracking dashboards", "API integrations with carriers"],
    relatedServices: [
      { title: "Web App Development", href: "/services/web-app-development" },
      { title: "Backend Development", href: "/services/backend-development" },
      { title: "Mobile App Development", href: "/services/mobile-app-development" },
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description: "Industry 4.0 solutions for production, quality, and supply chain management.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop",
    challenges: ["Legacy system modernization", "IoT data integration", "Quality control automation", "Supply chain visibility"],
    solutions: ["Manufacturing ERP systems", "IoT dashboard development", "Quality management platforms", "Predictive maintenance AI"],
    relatedServices: [
      { title: "Web App Development", href: "/services/web-app-development" },
      { title: "AI Solutions", href: "/ai-solutions" },
      { title: "Cloud & DevOps", href: "/services/cloud-devops" },
    ],
  },
  {
    slug: "finance",
    title: "Finance",
    description: "Secure fintech applications, dashboards, and compliance-ready platforms.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
    challenges: ["Regulatory compliance (SOC2, PCI)", "Real-time data processing", "Security and fraud prevention", "Legacy banking integrations"],
    solutions: ["Fintech app development", "Analytics dashboards", "Payment processing systems", "Compliance-ready architecture"],
    relatedServices: [
      { title: "Backend Development", href: "/services/backend-development" },
      { title: "Web App Development", href: "/services/web-app-development" },
      { title: "Cloud & DevOps", href: "/services/cloud-devops" },
    ],
  },
  {
    slug: "local-businesses",
    title: "Local Businesses",
    description: "Affordable digital solutions that help local businesses compete and grow online.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80&auto=format&fit=crop",
    challenges: ["Limited digital presence", "Competing with larger brands", "Managing online reviews", "Local SEO visibility"],
    solutions: ["Professional websites", "WhatsApp business automation", "Local SEO optimization", "Online booking systems"],
    relatedServices: [
      { title: "Website Development", href: "/services/web-development" },
      { title: "AI Solutions", href: "/ai-solutions" },
      { title: "Digital Growth", href: "/services/digital-growth" },
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
