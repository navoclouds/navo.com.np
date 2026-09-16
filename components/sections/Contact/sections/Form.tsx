"use client";

import { useState, type FormEvent } from "react";
import type { ContactContent } from "../data";

const FIELD =
  "w-full rounded-xl border border-gray-300 bg-surface px-4 py-3.5 text-sm text-black outline-none transition-colors placeholder:text-gray-400 focus:border-brand-blue";
const LABEL = "mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500";

function Select({ field }: { field: ContactContent["form"]["projectTypes"] }) {
  return (
    <div>
      <label htmlFor={field.id} className={LABEL}>
        {field.label}
      </label>
      <select id={field.id} name={field.id} className={FIELD} defaultValue="">
        <option value="" disabled>
          Select an option
        </option>
        {field.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function Form({ form }: { form: ContactContent["form"] }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Replace with a POST to your own API route / email provider.
    setSubmitted(true);
  }

  return (
    <div className="rounded-2xl border border-gray-300 bg-white p-8 md:p-10">
      <h2 className="text-2xl font-extrabold text-black">{form.title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-500">{form.description}</p>

      {submitted ? (
        <div className="mt-8 rounded-2xl border border-brand-blue bg-surface p-6" role="status">
          <h3 className="text-base font-bold text-black">{form.successTitle}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">{form.successBody}</p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-5 text-sm font-semibold text-brand-navy transition-colors hover:text-brand-pink"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2" noValidate={false}>
          <div>
            <label htmlFor="name" className={LABEL}>
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Jane Doe"
              className={FIELD}
            />
          </div>

          <div>
            <label htmlFor="email" className={LABEL}>
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="jane@company.com"
              className={FIELD}
            />
          </div>

          <div>
            <label htmlFor="company" className={LABEL}>
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Company name"
              className={FIELD}
            />
          </div>

          <Select field={form.timelines} />
          <Select field={form.projectTypes} />
          <Select field={form.budgets} />

          <div className="sm:col-span-2">
            <label htmlFor="message" className={LABEL}>
              Project brief
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="What are you building, what's blocking it, and is there a hard deadline?"
              className={`${FIELD} resize-y`}
            />
          </div>

          <div className="flex items-start gap-3 sm:col-span-2">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 rounded border-gray-300 accent-brand-pink"
            />
            <label htmlFor="consent" className="text-sm leading-relaxed text-gray-500">
              {form.consentLabel}
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
            <button
              type="submit"
              className="rounded-xl bg-brand-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-pink"
            >
              {form.submitLabel}
            </button>
            <p className="text-sm text-gray-500">{form.note}</p>
          </div>
        </form>
      )}
    </div>
  );
}