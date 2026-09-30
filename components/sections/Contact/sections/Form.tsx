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
          template: `<div style="margin:0; padding:40px 20px; background:#f4f7fb; font-family:Arial,Helvetica,sans-serif; color:#172033;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td align="center">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                          style="max-width:640px; background:#ffffff; border-radius:20px; overflow:hidden; box-shadow:0 10px 40px rgba(15,23,42,0.10);">

                          <!-- Header -->
                          <tr>
                            <td style="padding:32px 36px; background:#ffffff;">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td valign="middle">
                                    <img src=${logoUrl || "https://navo.com.np/images/Logo.webp"} alt="brand-logo" height="32" style="display:block; height:32px; width:auto;" />
                                  </td>
                                  <td align="right" valign="middle">
                                    <span style="display:inline-block; padding:8px 14px; border-radius:999px; background:rgba(30,174,252,0.12); border:1px solid rgba(30,174,252,0.3); color:#1eaefc; font-size:11px; font-weight:700; letter-spacing:0.5px;">
                                      NEW ENQUIRY
                                    </span>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <!-- Accent bar -->
                          <tr>
                            <td style="height:4px; background:linear-gradient(90deg,#1eaefc,#ffffff);"></td>
                          </tr>

                          <!-- Intro -->
                          <tr>
                            <td style="padding:40px 36px 8px;">
                              <div style="font-size:12px; font-weight:800; color:#1eaefc; letter-spacing:1.5px; text-transform:uppercase;">
                                Contact Form Submission
                              </div>
                              <h1 style="margin:12px 0 10px; font-size:26px; line-height:1.3; color:#ffffff; font-weight:800;">
                                New enquiry from ${name}
                              </h1>
                              <p style="margin:0; font-size:14px; line-height:1.7; color:#667085;">
                                Someone just reached out through the Navo website. Details below.
                              </p>
                            </td>
                          </tr>

                          <!-- Contact card -->
                          <tr>
                            <td style="padding:24px 36px 0;">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                style="border:1px solid #e7eaf0; border-radius:14px; overflow:hidden;">

                                <tr>
                                  <td width="35%" style="padding:16px 20px; font-size:12px; font-weight:700; color:#98a2b3; text-transform:uppercase; letter-spacing:0.4px; border-bottom:1px solid #eef0f4; background:#fafbfc;">
                                    Name
                                  </td>
                                  <td style="padding:16px 20px; font-size:14px; font-weight:700; color:#ffffff; border-bottom:1px solid #eef0f4;">
                                    ${name}
                                  </td>
                                </tr>

                                <tr>
                                  <td style="padding:16px 20px; font-size:12px; font-weight:700; color:#98a2b3; text-transform:uppercase; letter-spacing:0.4px; border-bottom:1px solid #eef0f4; background:#fafbfc;">
                                    Email
                                  </td>
                                  <td style="padding:16px 20px; font-size:14px; border-bottom:1px solid #eef0f4;">
                                    <a href="mailto:${email}" style="color:#1eaefc; text-decoration:none; font-weight:600;">${email}</a>
                                  </td>
                                </tr>

                                <tr>
                                  <td style="padding:16px 20px; font-size:12px; font-weight:700; color:#98a2b3; text-transform:uppercase; letter-spacing:0.4px; background:#fafbfc;">
                                    Project Type
                                  </td>
                                  <td style="padding:16px 20px; font-size:14px; color:#ffffff;">
                                    ${projectType || "-"}
                                  </td>
                                </tr>

                              </table>
                            </td>
                          </tr>

                          <!-- Budget / Timeline -->
                          <tr>
                            <td style="padding:20px 36px 0;">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td width="50%" style="padding-right:8px;">
                                    <div style="padding:18px 20px; background:#fafbfc; border:1px solid #e7eaf0; border-radius:14px;">
                                      <div style="font-size:11px; font-weight:800; color:#98a2b3; text-transform:uppercase; letter-spacing:0.6px;">
                                        Budget
                                      </div>
                                      <div style="margin-top:8px; font-size:16px; font-weight:800; color:#ffffff;">
                                        ${budget || "-"}
                                      </div>
                                    </div>
                                  </td>
                                  <td width="50%" style="padding-left:8px;">
                                    <div style="padding:18px 20px; background:#fafbfc; border:1px solid #e7eaf0; border-radius:14px;">
                                      <div style="font-size:11px; font-weight:800; color:#98a2b3; text-transform:uppercase; letter-spacing:0.6px;">
                                        Timeline
                                      </div>
                                      <div style="margin-top:8px; font-size:16px; font-weight:800; color:#ffffff;">
                                        ${timeline || "-"}
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <!-- Message -->
                          <tr>
                            <td style="padding:28px 36px 0;">
                              <div style="font-size:12px; font-weight:800; color:#98a2b3; text-transform:uppercase; letter-spacing:0.6px; margin-bottom:10px;">
                                Message
                              </div>
                              <div style="padding:20px; background:#fafbfc; border-left:4px solid #1eaefc; border-radius:10px; font-size:14px; line-height:1.8; color:#344054;">
                                ${message.replace(/\n/g, "<br/>")}
                              </div>
                            </td>
                          </tr>

                          <!-- CTA -->
                          <tr>
                            <td style="padding:32px 36px 40px;">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td align="center" style="border-radius:12px; background:#ffffff;">
                                    <a href="mailto:${email}" style="display:block; padding:16px 24px; font-size:14px; font-weight:700; color:#ffffff; text-decoration:none;">
                                      Reply to ${name} →
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <!-- Footer -->
                          <tr>
                            <td style="padding:24px 36px; background:#fafbfc; border-top:1px solid #eef0f4; text-align:center;">
                              <img src=${logoUrl || "https://navo.com.np/images/Logo.webp"} alt="brand-logo" height="20" style="display:inline-block; height:20px; width:auto; opacity:0.7; margin-bottom:8px;" />
                              <div style="font-size:12px; color:#98a2b3;">
                                Build Smarter. Build With Navo.
                              </div>
                              <div style="margin-top:10px; font-size:11px; color:#c1c7d0;">
                                This notification was generated from the Navo website contact form.
                              </div>
                            </td>
                          </tr>

                        </table>
                      </td>
                    </tr>
                  </table>
                </div>`,
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
