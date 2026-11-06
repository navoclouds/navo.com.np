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

  const logoUrl = "https://navo.com.np/images/Logo.webp";

  const inputClass =
    "w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600";

  const labelClass = "mb-2 block text-sm font-medium text-gray-800";

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
          to: ["info@navo.com.np", "navoclouds@gmail.com"],
          fromEmail: "noreply@navo.com.np",
          fromName: "Enquiry Form",
          template: `
            <div style="margin:0;padding:40px 20px;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;color:#172033;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:640px;background:#ffffff;border-radius:12px;overflow:hidden;">
                      <tr>
                        <td style="padding:28px 36px;">
                          <img src="${logoUrl}" alt="Navo" height="32" style="display:block;height:32px;width:auto;" />
                        </td>
                      </tr>
                      <tr>
                        <td style="height:3px;background:#1eaefc;"></td>
                      </tr>
                      <tr>
                        <td style="padding:36px 36px 20px;">
                          <p style="font-size:12px;font-weight:bold;color:#1eaefc;text-transform:uppercase;letter-spacing:1px;">New website enquiry</p>
                          <h1 style="font-size:24px;color:#172033;margin:12px 0;">Enquiry from ${name}</h1>
                          <p style="font-size:14px;line-height:1.7;color:#667085;">A new enquiry has been submitted through the Navo website.</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:0 36px;">
                          <table width="100%" cellpadding="12" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
                            <tr><td style="color:#667085;border-bottom:1px solid #eee;">Name</td><td style="color:#172033;font-weight:bold;border-bottom:1px solid #eee;">${name}</td></tr>
                            <tr><td style="color:#667085;border-bottom:1px solid #eee;">Email</td><td style="border-bottom:1px solid #eee;"><a href="mailto:${email}" style="color:#1677bd;">${email}</a></td></tr>
                            <tr><td style="color:#667085;border-bottom:1px solid #eee;">Project</td><td style="color:#172033;border-bottom:1px solid #eee;">${projectType || "-"}</td></tr>
                            <tr><td style="color:#667085;border-bottom:1px solid #eee;">Budget</td><td style="color:#172033;border-bottom:1px solid #eee;">${budget || "-"}</td></tr>
                            <tr><td style="color:#667085;">Timeline</td><td style="color:#172033;">${timeline || "-"}</td></tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:28px 36px;">
                          <h3 style="font-size:14px;color:#172033;">Project message</h3>
                          <div style="padding:18px;background:#f8fafc;border-left:3px solid #1eaefc;font-size:14px;line-height:1.8;color:#344054;white-space:pre-wrap;">${message}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:0 36px 36px;">
                          <a href="mailto:${email}" style="display:inline-block;padding:13px 22px;background:#172033;color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;">Reply to ${name}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:22px 36px;background:#f8fafc;text-align:center;border-top:1px solid #eee;">
                          <p style="font-size:12px;color:#667085;margin:0;">Build Smarter. Build With Navo.</p>
                          <p style="font-size:11px;color:#98a2b3;margin:8px 0 0;">Automated notification from navo.com.np</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          `,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-2xl py-12 text-center">
        <h3 className="text-3xl font-semibold tracking-tight text-gray-900">
          {form.successTitle}
        </h3>
        <p className="mt-3 text-base leading-7 text-gray-600">
          {form.successBody}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          {form.title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
          {form.description}
        </p>
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            required
            autoComplete="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            required
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="projectType" className={labelClass}>
          {form.projectTypes.label}
        </label>
        <select
          id="projectType"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className={`${inputClass} ${!projectType ? "text-gray-400" : ""}`}
        >
          <option value="">Select a project type</option>
          {form.projectTypes.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Budget and Timeline */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className={labelClass}>
            {form.budgets.label}
          </label>
          <input
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="USD 2500"
            className={`${inputClass} ${!budget ? "text-gray-400" : ""}`}
          />
        </div>

        <div>
          <label htmlFor="timeline" className={labelClass}>
            {form.timelines.label}
          </label>
          <select
            id="timeline"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className={`${inputClass} ${!timeline ? "text-gray-400" : ""}`}
          >
            <option value="">Select your timeline</option>
            {form.timelines.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your project <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={6}
          placeholder="Describe your project, goals, requirements or any questions you have..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} min-h-36 resize-y`}
        />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 size-4 shrink-0 accent-blue-600"
        />
        <label htmlFor="consent" className="text-sm leading-6 text-gray-600">
          {form.consentLabel}
        </label>
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={status === "loading" || !consent}
          className="inline-flex min-h-12 w-full items-center justify-center bg-slate-950 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          {status === "loading" ? "Sending enquiry..." : form.submitLabel}
        </button>

        {status === "error" && (
          <p role="alert" className="mt-3 text-sm text-red-600">
            Something went wrong. Please try again or email us directly.
          </p>
        )}

        <p className="mt-4 text-xs leading-5 text-gray-500">{form.note}</p>
      </div>
    </form>
  );
}
