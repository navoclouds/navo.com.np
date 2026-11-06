import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { navLinks, companyLink, siteConfig } from "@/lib/site";

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
    name: "X",
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
    <footer className="bg-gray-100 px-6 pt-14 text-gray-600 md:px-16 lg:px-24 xl:px-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1.1fr] lg:gap-10">
        {/* Company information */}
        <div className="max-w-sm">
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            title={`${siteConfig.name} homepage`}
            className="inline-block"
          >
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={120}
              height={40}
              className="mb-4 h-8 w-auto md:h-9"
            />
          </Link>

          <p className="text-sm leading-7">
            Navo Cloud Solutions builds professional websites, custom software,
            mobile applications and AI-powered solutions for businesses in Nepal
            and worldwide.
          </p>

          <ul
            aria-label="Navo Cloud Solutions social media profiles"
            className="mt-6 flex items-center gap-4"
          >
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${siteConfig.shortName} on ${social.name}`}
                  title={`Follow ${siteConfig.name} on ${social.name}`}
                  className="block text-gray-500 transition-colors hover:text-blue-700"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services navigation */}
        <nav aria-label="Our services">
          <h2 className="text-base font-semibold text-gray-900">Services</h2>

          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  title={link.title}
                  className="transition-colors hover:text-blue-700"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company navigation */}
        <nav aria-label="Company information">
          <h2 className="text-base font-semibold text-gray-900">Company</h2>

          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {companyLink.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  title={link.title}
                  className="transition-colors hover:text-blue-700"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/contact"
                title="Contact Navo Cloud Solutions"
                className="transition-colors hover:text-blue-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact information */}
        <div className="max-w-sm">
          <h2 className="text-base font-semibold text-gray-900">
            Get in touch
          </h2>

          <p className="mt-4 text-sm leading-6">
            Have a project in mind? Contact our team to discuss your website,
            software or AI development requirements.
          </p>

          <div className="mt-6 space-y-4">
            {siteConfig.email.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-blue-700"
              >
                <Mail size={17} className="shrink-0" aria-hidden="true" />
                <span>{email}</span>
              </a>
            ))}

            {siteConfig.phone.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-3 text-sm transition-colors hover:text-blue-700"
              >
                <Phone size={17} className="shrink-0" aria-hidden="true" />
                <span>{phone}</span>
              </a>
            ))}

            <p className="flex items-center gap-3 text-sm">
              <MapPin size={17} className="shrink-0" aria-hidden="true" />
              <span>
                {siteConfig.address.city}, {siteConfig.address.region}, Nepal
              </span>
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
          >
            Discuss your project
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-gray-300">
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm md:flex-row">
          <p className="text-center md:text-left">
            &copy; {year}{" "}
            <Link
              href="/"
              title={`${siteConfig.name} homepage`}
              className="font-medium text-gray-800 transition-colors hover:text-blue-700"
            >
              {siteConfig.name}
            </Link>
            . All rights reserved.
          </p>

          <ul className="flex items-center gap-5">
            <li>
              <Link
                href="/privacy-policy"
                title="Privacy Policy"
                className="transition-colors hover:text-blue-700"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                href="/terms-and-conditions"
                title="Terms and Conditions"
                className="transition-colors hover:text-blue-700"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
