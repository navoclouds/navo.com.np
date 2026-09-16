import type { ArticlesContent } from "../data";

export default function Newsletter({
  newsletter,
}: {
  newsletter: ArticlesContent["newsletter"];
}) {
  return (
    <section
      id="subscribe"
      className="scroll-mt-28 border-b border-gray-300 px-6 py-20"
      aria-labelledby="newsletter-title"
    >
      <div className="mx-auto max-w-7xl rounded-3xl border border-gray-300 bg-white p-8 md:p-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-pink">SUBSCRIBE</p>
            <h2 id="newsletter-title" className="mt-4 text-2xl font-extrabold text-black md:text-3xl">
              {newsletter.title}
            </h2>
            <p className="mt-3 leading-relaxed text-gray-500">{newsletter.description}</p>
          </div>

          <div>
            {/* Point action at your own API route or email provider endpoint. */}
            <form className="flex flex-col gap-3 sm:flex-row" action="/contact" method="get">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder={newsletter.placeholder}
                className="w-full rounded-xl border border-gray-300 bg-surface px-4 py-3.5 text-sm text-black outline-none transition-colors placeholder:text-gray-400 focus:border-brand-blue"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-brand-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-pink"
              >
                {newsletter.buttonLabel}
              </button>
            </form>
            <p className="mt-3 text-sm text-gray-500">{newsletter.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}