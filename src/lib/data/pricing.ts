export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$4,999",
    period: "project",
    description: "Perfect for small businesses launching their first digital presence.",
    features: [
      "Custom website (up to 8 pages)",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "30 days post-launch support",
      "CMS training included",
    ],
    cta: "Get Started",
  },
  {
    id: "growth",
    name: "Growth",
    price: "$14,999",
    period: "project",
    description: "For growing businesses ready to scale with web apps and integrations.",
    features: [
      "Web application development",
      "Custom UI/UX design",
      "API integrations (up to 3)",
      "Admin dashboard",
      "Performance optimization",
      "90 days post-launch support",
      "Analytics & conversion tracking",
    ],
    highlighted: true,
    cta: "Most Popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    description: "Full-scale digital products for organizations with complex requirements.",
    features: [
      "SaaS / enterprise application",
      "Dedicated project team",
      "Custom architecture design",
      "Unlimited integrations",
      "SLA-backed delivery",
      "12 months priority support",
      "DevOps & cloud setup",
      "Security audit included",
    ],
    cta: "Contact Sales",
  },
  {
    id: "maintenance",
    name: "Maintenance",
    price: "$999",
    period: "/month",
    description: "Keep your product secure, fast, and evolving with proactive care.",
    features: [
      "Security updates & patches",
      "Bug fixes (48hr response)",
      "Performance monitoring",
      "Monthly health reports",
      "Database optimization",
      "Cloud monitoring",
      "Backup management",
      "4 hours feature development/mo",
    ],
    cta: "Start Maintenance",
  },
];

export const COMPARISON_FEATURES = [
  { feature: "Custom Design", starter: true, growth: true, enterprise: true, maintenance: false },
  { feature: "Web Application", starter: false, growth: true, enterprise: true, maintenance: false },
  { feature: "Mobile App", starter: false, growth: false, enterprise: true, maintenance: false },
  { feature: "API Integrations", starter: "Basic", growth: "Up to 3", enterprise: "Unlimited", maintenance: "Existing" },
  { feature: "Dedicated Team", starter: false, growth: false, enterprise: true, maintenance: true },
  { feature: "24/7 Support", starter: false, growth: false, enterprise: true, maintenance: "Priority" },
  { feature: "Security Updates", starter: "30 days", growth: "90 days", enterprise: "12 months", maintenance: true },
  { feature: "Performance Monitoring", starter: false, growth: true, enterprise: true, maintenance: true },
  { feature: "SLA Guarantee", starter: false, growth: false, enterprise: true, maintenance: true },
];

export const PRICING_FAQS = [
  { question: "Can I upgrade my plan later?", answer: "Yes. All plans are designed to scale. Contact us anytime to discuss upgrading." },
  { question: "Do you offer payment plans?", answer: "We offer milestone-based payments: 40% upfront, 30% at midpoint, 30% at delivery." },
  { question: "What's included in post-launch support?", answer: "Bug fixes, minor content updates, and performance monitoring during the support period." },
  { question: "How do custom enterprise quotes work?", answer: "We schedule a discovery call, assess requirements, and deliver a detailed proposal within 5 business days." },
];

export const MAINTENANCE_FEATURES = [
  { title: "Security Updates", description: "Proactive patching and vulnerability monitoring to keep your product safe." },
  { title: "Bug Fixes", description: "Priority resolution with 48-hour SLA for critical issues." },
  { title: "Performance Monitoring", description: "Real-time uptime and performance alerts with monthly reports." },
  { title: "Database Optimization", description: "Query tuning, indexing, and backup management." },
  { title: "Cloud Monitoring", description: "Infrastructure health checks and cost optimization." },
  { title: "Backups", description: "Automated daily backups with disaster recovery procedures." },
  { title: "Monthly Reports", description: "Detailed health, performance, and security reports." },
  { title: "24/7 Support", description: "Round-the-clock monitoring with escalation for critical issues." },
  { title: "Emergency Support", description: "1-hour response time for production-critical emergencies." },
  { title: "Feature Enhancements", description: "Dedicated development hours for continuous improvement." },
];

export const MAINTENANCE_PLANS = [
  { name: "Essential", price: "$999", features: ["Security updates", "Bug fixes (48hr)", "Monthly reports", "Email support"] },
  { name: "Professional", price: "$2,499", features: ["Everything in Essential", "24/7 monitoring", "4hr dev hours/mo", "Priority support"], highlighted: true },
  { name: "Enterprise", price: "$4,999", features: ["Everything in Professional", "Dedicated engineer", "Emergency 1hr SLA", "16hr dev hours/mo"] },
];

export const AI_FEATURES = [
  { title: "AI Chatbots", description: "Intelligent conversational agents for web, mobile, and messaging platforms." },
  { title: "WhatsApp Automation", description: "Automated customer journeys, order updates, and support via WhatsApp Business API." },
  { title: "Lead Qualification", description: "AI-powered lead scoring and automated qualification workflows." },
  { title: "Customer Support Bots", description: "24/7 support bots that resolve 70% of queries without human intervention." },
  { title: "AI Workflow Automation", description: "Automate repetitive business processes with intelligent decision-making." },
  { title: "OpenAI Integrations", description: "GPT-powered features embedded seamlessly into your existing products." },
  { title: "Business Automation", description: "End-to-end automation across sales, marketing, and operations." },
];
