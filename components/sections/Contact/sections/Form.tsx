"use client";

import { useState } from "react";
import type { ContactContent } from "../data";

export default function Form({ form }: { form: ContactContent["form"] }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/resend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          projectType,
          budget,
          timeline,
          message,
          to: "info@navo.com.np",
          fromEmail: "noreply@navo.com.np",
          fromName: "Enquiry Form",
          logoUrl: "https://navo.com.np/images/Logo.webp",
        }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div>
        <h3 className="text-2xl font-semibold">{form.successTitle}</h3>
        <p className="mt-2 text-gray-600">{form.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">{form.title}</h2>
        <p className="mt-2 text-gray-600">{form.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          required
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 px-4 py-3"
        />
        <input
          required
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm">{form.projectTypes.label}</label>
        <select
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="w-full border border-gray-300 px-4 py-3"
        >
          <option value="">Select...</option>
          {form.projectTypes.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm">{form.budgets.label}</label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3"
          >
            <option value="">Select...</option>
            {form.budgets.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm">{form.timelines.label}</label>
          <select
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3"
          >
            <option value="">Select...</option>
            {form.timelines.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <textarea
        required
        rows={6}
        placeholder="Tell us about your project"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border border-gray-300 px-4 py-3"
      />

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        {form.consentLabel}
      </label>

      <button
        type="submit"
        disabled={status === "loading" || !consent}
        className="bg-black px-6 py-3 text-white disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : form.submitLabel}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <p className="text-sm text-gray-500">{form.note}</p>
    </form>
  );
}
