"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SERVICES } from "@/lib/data/services";

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", service: "", message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      router.push("/success?type=contact");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const inputClass = "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-text-dark outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && <p className="rounded-xl bg-red-50 p-3 text-sm text-red-600">{error}</p>}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-dark">Full Name *</label>
          <input required className={inputClass} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-dark">Email *</label>
          <input required type="email" className={inputClass} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-dark">Phone *</label>
          <input required type="tel" className={inputClass} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-dark">Company</label>
          <input className={inputClass} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-text-dark">Service *</label>
        <select required className={inputClass} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
          <option value="">Select a service</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-text-dark">Message *</label>
        <textarea required rows={5} className={inputClass} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </div>
      <button type="submit" disabled={loading} className="w-full rounded-full bg-accent py-4 font-semibold text-text-dark transition hover:scale-[1.02] disabled:opacity-50">
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
