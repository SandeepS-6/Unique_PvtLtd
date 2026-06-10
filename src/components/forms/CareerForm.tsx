"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { OPEN_POSITIONS } from "@/lib/data/about";

export default function CareerForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", position: "", linkedin: "", portfolio: "", experience: "", message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      router.push("/success?type=career");
    } catch {
      setError("Failed to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass = "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && <p className="rounded-xl bg-red-500/10 p-3 text-sm text-red-400">{error}</p>}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-secondary">Full Name *</label>
          <input required className={inputClass} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-secondary">Email *</label>
          <input required type="email" className={inputClass} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-secondary">Phone *</label>
          <input required type="tel" className={inputClass} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-secondary">Position *</label>
          <select required className={inputClass} value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })}>
            <option value="">Select position</option>
            {OPEN_POSITIONS.map((p) => (
              <option key={p.id} value={p.title}>{p.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-secondary">LinkedIn</label>
          <input type="url" className={inputClass} value={form.linkedin} onChange={(e) => setForm({ ...form, linkedin: e.target.value })} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-secondary">Portfolio URL</label>
          <input type="url" className={inputClass} value={form.portfolio} onChange={(e) => setForm({ ...form, portfolio: e.target.value })} />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-text-secondary">Years of Experience *</label>
        <select required className={inputClass} value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })}>
          <option value="">Select experience</option>
          {["1-2 years", "3-5 years", "5-8 years", "8+ years"].map((exp) => (
            <option key={exp} value={exp}>{exp}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-text-secondary">Cover Letter *</label>
        <textarea required rows={5} className={inputClass} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </div>
      <button type="submit" disabled={loading} className="w-full rounded-full bg-accent py-4 font-semibold text-text-dark transition hover:scale-[1.02] disabled:opacity-50">
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}
