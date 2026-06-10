export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  excerpt: string;
  image: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  testimonial: { quote: string; author: string; role: string };
};

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Corporate Websites",
  "SaaS Products",
  "Mobile Apps",
  "Dashboards",
  "CRM Systems",
  "ERP Systems",
  "AI Applications",
] as const;

export const PORTFOLIO: PortfolioProject[] = [
  {
    slug: "nexaflow-saas",
    title: "NexaFlow SaaS Platform",
    category: "SaaS Products",
    client: "NexaFlow Inc.",
    year: "2025",
    excerpt: "A workflow automation SaaS serving 12,000+ teams worldwide.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
    tags: ["SaaS", "Dashboard", "Automation"],
    challenge: "NexaFlow needed to migrate from a monolithic app to a scalable multi-tenant SaaS with subscription billing.",
    solution: "We rebuilt the platform on Next.js with Stripe billing, real-time collaboration, and a modular plugin architecture.",
    results: ["40% reduction in churn", "3x faster feature delivery", "$2M ARR in 8 months"],
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis", "AWS"],
    testimonial: { quote: "Unique transformed our product from MVP to enterprise-ready. Their engineering quality is unmatched.", author: "Sarah Chen", role: "CEO, NexaFlow" },
  },
  {
    slug: "healthtrack-mobile",
    title: "HealthTrack Patient App",
    category: "Mobile Apps",
    client: "HealthTrack Medical",
    year: "2024",
    excerpt: "HIPAA-compliant patient engagement app with telehealth integration.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format&fit=crop",
    tags: ["Healthcare", "Mobile", "Telehealth"],
    challenge: "HealthTrack required a secure mobile app connecting patients with providers while meeting HIPAA compliance.",
    solution: "We built native iOS and Android apps with end-to-end encryption, video consultations, and EHR integration.",
    results: ["85% patient satisfaction", "50% reduction in no-shows", "200K+ active users"],
    technologies: ["React Native", "Node.js", "AWS", "Twilio", "FHIR"],
    testimonial: { quote: "The team understood healthcare compliance deeply. Launch was smooth and our users love the experience.", author: "Dr. James Wright", role: "CMO, HealthTrack" },
  },
  {
    slug: "urbanest-corporate",
    title: "Urbanest Corporate Website",
    category: "Corporate Websites",
    client: "Urbanest Properties",
    year: "2024",
    excerpt: "Premium real estate corporate site with property search and virtual tours.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80&auto=format&fit=crop",
    tags: ["Real Estate", "Corporate", "CMS"],
    challenge: "Urbanest needed a luxury brand website showcasing $500M+ in properties with immersive experiences.",
    solution: "We delivered a Next.js site with 3D virtual tours, advanced property filtering, and multilingual support.",
    results: ["120% increase in leads", "95 Lighthouse score", "15 language support"],
    technologies: ["Next.js", "Sanity CMS", "Three.js", "Vercel"],
    testimonial: { quote: "Our new website reflects the premium quality of our properties. Lead quality improved dramatically.", author: "Maria Lopez", role: "Marketing Director, Urbanest" },
  },
  {
    slug: "logitrack-erp",
    title: "LogiTrack ERP System",
    category: "ERP Systems",
    client: "LogiTrack Global",
    year: "2023",
    excerpt: "End-to-end logistics ERP managing fleet, inventory, and supply chain.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop",
    tags: ["Logistics", "ERP", "Enterprise"],
    challenge: "LogiTrack operated on fragmented legacy systems causing delays and inventory discrepancies.",
    solution: "We built a unified ERP with real-time fleet tracking, warehouse management, and automated invoicing.",
    results: ["35% operational cost reduction", "Real-time visibility across 50 warehouses", "99.8% inventory accuracy"],
    technologies: ["React", "Node.js", "PostgreSQL", "MQTT", "AWS"],
    testimonial: { quote: "Unique delivered an ERP that replaced 5 legacy systems. ROI was achieved within 14 months.", author: "Robert Kim", role: "COO, LogiTrack" },
  },
  {
    slug: "finpulse-dashboard",
    title: "FinPulse Analytics Dashboard",
    category: "Dashboards",
    client: "FinPulse Capital",
    year: "2024",
    excerpt: "Real-time financial analytics dashboard for institutional investors.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
    tags: ["Finance", "Analytics", "Dashboard"],
    challenge: "FinPulse needed real-time portfolio analytics processing millions of data points with sub-second latency.",
    solution: "We architected a streaming data pipeline with interactive D3 visualizations and custom alert systems.",
    results: ["Sub-200ms query response", "Processing 10M+ data points daily", "Used by 500+ analysts"],
    technologies: ["React", "D3.js", "Python", "Kafka", "TimescaleDB"],
    testimonial: { quote: "The dashboard gives our analysts insights they never had before. Performance is exceptional.", author: "Alexandra Reed", role: "Head of Analytics, FinPulse" },
  },
  {
    slug: "salesforge-crm",
    title: "SalesForge CRM",
    category: "CRM Systems",
    client: "SalesForge",
    year: "2023",
    excerpt: "AI-powered CRM with predictive lead scoring and automation.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=80&auto=format&fit=crop",
    tags: ["CRM", "AI", "Sales"],
    challenge: "SalesForge wanted a CRM that automatically prioritizes leads and automates follow-up sequences.",
    solution: "We built a CRM with ML-based lead scoring, email automation, and pipeline forecasting.",
    results: ["45% increase in close rate", "60% less manual data entry", "10K+ sales teams onboarded"],
    technologies: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Redis"],
    testimonial: { quote: "Our sales team closes more deals with less effort. The AI features are genuinely useful.", author: "Tom Bradley", role: "VP Sales, SalesForge" },
  },
  {
    slug: "shopwise-ai",
    title: "ShopWise AI Assistant",
    category: "AI Applications",
    client: "ShopWise Retail",
    year: "2025",
    excerpt: "AI shopping assistant increasing conversions through personalized recommendations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80&auto=format&fit=crop",
    tags: ["AI", "E-Commerce", "Chatbot"],
    challenge: "ShopWise needed an AI assistant to guide shoppers and reduce cart abandonment on their platform.",
    solution: "We integrated GPT-powered chat with product catalog search, WhatsApp support, and personalized upsells.",
    results: ["28% conversion lift", "70% support ticket reduction", "4.8★ customer rating"],
    technologies: ["OpenAI", "Next.js", "Pinecone", "WhatsApp API", "Stripe"],
    testimonial: { quote: "The AI assistant feels like having a personal shopper for every customer. Revenue impact was immediate.", author: "Lisa Park", role: "E-Commerce Director, ShopWise" },
  },
  {
    slug: "edulearn-platform",
    title: "EduLearn Learning Platform",
    category: "SaaS Products",
    client: "EduLearn Academy",
    year: "2024",
    excerpt: "Interactive e-learning platform with live classes and progress tracking.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80&auto=format&fit=crop",
    tags: ["Education", "SaaS", "Video"],
    challenge: "EduLearn needed to scale from 1,000 to 100,000 students with live video and adaptive learning.",
    solution: "We built a scalable LMS with WebRTC live classes, AI-powered assessments, and gamification.",
    results: ["100K+ students enrolled", "92% course completion rate", "4.9★ app store rating"],
    technologies: ["Next.js", "WebRTC", "MongoDB", "AWS", "OpenAI"],
    testimonial: { quote: "Unique built a platform that scales with our growth. Student engagement metrics are through the roof.", author: "Prof. David Miller", role: "Founder, EduLearn" },
  },
];

export function getProjectBySlug(slug: string) {
  return PORTFOLIO.find((p) => p.slug === slug);
}
