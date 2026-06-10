"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = ["Business Info", "Project Type", "Budget", "Timeline", "Requirements", "Review"];
const PROJECT_TYPES = ["Website", "Web Application", "Mobile App", "SaaS Product", "AI Solution", "E-Commerce", "Dashboard/CRM", "Other"];
const BUDGETS = ["Under $10K", "$10K – $25K", "$25K – $50K", "$50K – $100K", "$100K+"];
const TIMELINES = ["ASAP (< 1 month)", "1-3 months", "3-6 months", "6-12 months", "Flexible"];

export default function QuoteForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [estimate, setEstimate] = useState<{ formatted: string; timeline: string; projectType: string[] } | null>(null);
  const [form, setForm] = useState({
    businessName: "", contactName: "", email: "", phone: "", website: "", industry: "",
    projectType: [] as string[], budget: "", timeline: "", requirements: "", features: [] as string[],
  });

  function toggleProjectType(type: string) {
    setForm((prev) => ({
      ...prev,
      projectType: prev.projectType.includes(type)
        ? prev.projectType.filter((t) => t !== type)
        : [...prev.projectType, type],
    }));
  }

  async function handleSubmit() {
    setLoading(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setEstimate(data.estimate);
      router.push(`/success?type=quote&estimate=${encodeURIComponent(data.estimate.formatted)}`);
    } catch {
      alert("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass = "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-text-dark outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20";
  const chipClass = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-medium transition cursor-pointer ${
      active ? "border-accent bg-accent text-text-dark" : "border-black/10 bg-white text-text-dark hover:border-accent/50"
    }`;

  return (
    <div className="rounded-3xl bg-secondary p-8 md:p-12">
      <div className="mb-8 flex gap-2 overflow-x-auto">
        {STEPS.map((s, i) => (
          <div key={s} className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${i <= step ? "bg-accent text-text-dark" : "bg-black/5 text-text-dark/40"}`}>
            {i + 1}. {s}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
          {step === 0 && (
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-text-dark">Business Information</h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <div><label className="mb-1.5 block text-sm font-medium">Business Name *</label><input required className={inputClass} value={form.businessName} onChange={(e) => setForm({ ...form, businessName: e.target.value })} /></div>
                <div><label className="mb-1.5 block text-sm font-medium">Contact Name *</label><input required className={inputClass} value={form.contactName} onChange={(e) => setForm({ ...form, contactName: e.target.value })} /></div>
                <div><label className="mb-1.5 block text-sm font-medium">Email *</label><input required type="email" className={inputClass} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
                <div><label className="mb-1.5 block text-sm font-medium">Phone *</label><input required type="tel" className={inputClass} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
                <div><label className="mb-1.5 block text-sm font-medium">Website</label><input className={inputClass} value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} /></div>
                <div><label className="mb-1.5 block text-sm font-medium">Industry *</label><input required className={inputClass} value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} /></div>
              </div>
            </div>
          )}
          {step === 1 && (
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-text-dark">What are you building?</h3>
              <div className="flex flex-wrap gap-3">
                {PROJECT_TYPES.map((type) => (
                  <button key={type} type="button" onClick={() => toggleProjectType(type)} className={chipClass(form.projectType.includes(type))}>{type}</button>
                ))}
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-text-dark">Project Budget</h3>
              <div className="flex flex-wrap gap-3">
                {BUDGETS.map((b) => (
                  <button key={b} type="button" onClick={() => setForm({ ...form, budget: b })} className={chipClass(form.budget === b)}>{b}</button>
                ))}
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-text-dark">Timeline</h3>
              <div className="flex flex-wrap gap-3">
                {TIMELINES.map((t) => (
                  <button key={t} type="button" onClick={() => setForm({ ...form, timeline: t })} className={chipClass(form.timeline === t)}>{t}</button>
                ))}
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-text-dark">Project Requirements</h3>
              <textarea required rows={8} className={inputClass} placeholder="Describe your project goals, features, and any specific requirements..." value={form.requirements} onChange={(e) => setForm({ ...form, requirements: e.target.value })} />
            </div>
          )}
          {step === 5 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-text-dark">Review & Submit</h3>
              <div className="rounded-2xl bg-white p-6 space-y-3 text-sm">
                <p><strong>Business:</strong> {form.businessName}</p>
                <p><strong>Contact:</strong> {form.contactName} ({form.email})</p>
                <p><strong>Project:</strong> {form.projectType.join(", ")}</p>
                <p><strong>Budget:</strong> {form.budget}</p>
                <p><strong>Timeline:</strong> {form.timeline}</p>
                <p><strong>Requirements:</strong> {form.requirements.slice(0, 200)}...</p>
              </div>
              {estimate && (
                <div className="rounded-2xl bg-accent/20 p-6">
                  <p className="font-bold text-text-dark">Estimated Range: {estimate.formatted}</p>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-between">
        <button type="button" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-text-dark disabled:opacity-30">
          Back
        </button>
        {step < 5 ? (
          <button type="button" onClick={() => setStep(step + 1)} className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-text-dark">
            Continue
          </button>
        ) : (
          <button type="button" onClick={handleSubmit} disabled={loading} className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-text-dark disabled:opacity-50">
            {loading ? "Submitting..." : "Submit Quote Request"}
          </button>
        )}
      </div>
    </div>
  );
}
