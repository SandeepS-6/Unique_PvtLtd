import PageHero from "@/components/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact Us",
  description: "Get in touch with Unique. Contact form, WhatsApp, phone, email, and Calendly booking available.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero badge="Contact" title="Let's start a conversation" subtitle="Tell us about your project. We respond within 24 hours." image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80&auto=format&fit=crop" />

      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading title="Get in touch" subtitle="Whether you have a project in mind or just want to explore possibilities, we'd love to hear from you." />
              <div className="space-y-6">
                <div className="rounded-2xl bg-white p-6">
                  <h3 className="font-semibold text-text-dark">Email</h3>
                  <a href={`mailto:${SITE.email}`} className="mt-1 text-accent hover:underline">{SITE.email}</a>
                </div>
                <div className="rounded-2xl bg-white p-6">
                  <h3 className="font-semibold text-text-dark">Phone</h3>
                  <a href={`tel:${SITE.phone}`} className="mt-1 text-accent hover:underline">{SITE.phone}</a>
                </div>
                <div className="rounded-2xl bg-white p-6">
                  <h3 className="font-semibold text-text-dark">WhatsApp</h3>
                  <a href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block rounded-full bg-[#25D366] px-5 py-2 text-sm font-semibold text-white hover:opacity-90">
                    Chat on WhatsApp
                  </a>
                </div>
                <div className="rounded-2xl bg-white p-6">
                  <h3 className="font-semibold text-text-dark">Office</h3>
                  <p className="mt-1 text-sm text-text-dark/65">{SITE.address}</p>
                </div>
                <div className="rounded-2xl bg-primary p-6 text-text-primary">
                  <h3 className="font-semibold">Book a Discovery Call</h3>
                  <p className="mt-2 text-sm text-text-secondary">Schedule a free 30-minute consultation with our team.</p>
                  <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-text-dark hover:scale-105 transition">
                    Schedule on Calendly
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 md:p-10 shadow-sm">
              <h3 className="text-xl font-bold text-text-dark">Send us a message</h3>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-3xl">
            <iframe
              title="Office Location"
              src="https://maps.google.com/maps?q=350+Fifth+Avenue+New+York+NY&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="h-[400px] w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
