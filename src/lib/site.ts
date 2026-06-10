export const SITE = {
  name: "Unique",
  tagline: "Design, Build, Deploy, Scale & Maintain",
  description:
    "End-to-end technology partner helping businesses design, build, deploy, scale, and maintain digital products.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://unique.agency",
  email: "hello@unique.agency",
  phone: "+1 (555) 987-6543",
  whatsapp: "+15559876543",
  address: "350 Fifth Avenue, New York, NY 10118",
  founded: 2007,
  social: {
    linkedin: "https://linkedin.com/company/unique-agency",
    instagram: "https://instagram.com/unique.agency",
    twitter: "https://twitter.com/uniqueagency",
    dribbble: "https://dribbble.com/unique-agency",
  },
  calendly: "https://calendly.com/unique-agency/discovery",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", mega: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Industries", href: "/industries" },
    { label: "Pricing", href: "/pricing" },
  ],
  services: [
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "Web Development", href: "/services/web-development" },
    { label: "SaaS Development", href: "/services/saas-development" },
    { label: "Mobile Apps", href: "/services/mobile-app-development" },
    { label: "AI Solutions", href: "/ai-solutions" },
    { label: "Maintenance", href: "/maintenance-support" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Get a Quote", href: "/get-quote" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
