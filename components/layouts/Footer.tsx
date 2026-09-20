import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { navLinks, serviceLinks, siteConfig } from "@/lib/site";

const socials = [
  {
    name: "Instagram",
    href: siteConfig.social.instagram,
    path: "M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z",
  },
  {
    name: "Facebook",
    href: siteConfig.social.facebook,
    path: "M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z",
  },
  {
    name: "X (Twitter)",
    href: siteConfig.social.twitter,
    path: "M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z",
  },
  {
    name: "LinkedIn",
    href: siteConfig.social.linkedin,
    path: "M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 4.98 3.5zM3 8.75h3.96V21H3V8.75zm6.25 0h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface px-6 pt-12 text-gray-500/90 md:px-16 lg:px-24 xl:px-32">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-xs">
          <Link href="/" aria-label={`${siteConfig.name} — home`}>
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={120}
              height={40}
              className="mb-4 h-8 w-auto md:h-9"
            />
          </Link>
          <p className="text-sm leading-relaxed">
            NAVO builds software, digital products, and AI-powered solutions for modern businesses.
            We combine rigorous engineering with practical design.
          </p>

          <ul className="mt-5 flex items-center gap-3">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${siteConfig.shortName} on ${social.name}`}
                  className="block transition-colors hover:text-brand-pink"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-lg text-gray-800">Navigation</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} title={link.title} className="transition-colors hover:text-brand-pink">
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="transition-colors hover:text-brand-pink">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Services navigation">
          <h2 className="text-lg text-gray-800">Services</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {serviceLinks.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  title={service.title}
                  className="transition-colors hover:text-brand-pink"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="max-w-xs">
          <h2 className="text-lg text-gray-800">Stay updated</h2>

          <form className="mt-4 flex items-center" action="/contact" method="get">
            <label htmlFor="footer-email" className="sr-only">
              Your email address
            </label>
            <input
              id="footer-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Your email"
              className="h-10 rounded-l-lg border border-gray-300 bg-white px-3 text-sm text-black outline-none transition-colors placeholder:text-gray-400 focus:border-brand-blue"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-r-lg bg-black transition-colors hover:bg-brand-pink"
            >
              <svg
                className="h-4 w-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </form>

          <div className="mt-5 grid gap-2">
            <h3 className="text-gray-800">Get in touch</h3>
            <p  
              className="flex gap-2 text-sm transition-colors hover:text-brand-pink"
            >
              <Phone size={16} aria-hidden="true" /> {siteConfig.phone}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex gap-2 text-sm transition-colors hover:text-brand-pink"
            >
              <Mail size={16} aria-hidden="true" /> {siteConfig.email}
            </a>
            <p className="flex gap-2 text-sm">
              <MapPin size={16} aria-hidden="true" /> {siteConfig.address.city},{" "}
              {siteConfig.address.region}, Nepal
            </p>
          </div>
        </div>
      </div>

      <hr className="mt-10 border-gray-300" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 py-5 text-sm md:flex-row">
        <p>
          &copy; {year}{" "}
          <Link href="/" className="transition-colors hover:text-brand-pink">
            {siteConfig.name}
          </Link>
          . All rights reserved.
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/privacy" className="transition-colors hover:text-brand-pink">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="transition-colors hover:text-brand-pink">
              Terms
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}