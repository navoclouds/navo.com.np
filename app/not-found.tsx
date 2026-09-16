import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for does not exist.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-surface px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-brand-pink">ERROR 404</p>
        <div className="mx-auto mt-4 h-3 w-16 bg-brand-blue" />
        <h1 className="mt-6 text-4xl font-extrabold text-black md:text-5xl">
          We can&apos;t find that page.
        </h1>
        <p className="mt-4 leading-relaxed text-gray-500">
          The link may be out of date, or the page may have moved. These are the places people
          usually want.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-xl bg-brand-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-pink"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:border-brand-blue"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}