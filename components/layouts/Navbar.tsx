"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navLinks, siteConfig } from "@/lib/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-gray-200 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 md:px-10"
      >
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="z-50 block rounded-lg p-1 text-black transition-colors hover:text-brand-pink lg:hidden"
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>

          <Link href="/" aria-label={`${siteConfig.name} — home`} className="flex items-center">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={120}
              height={40}
              priority
              className="h-9 w-auto"
            />
          </Link>
        </div>

        <ul className="hidden gap-8 text-base lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  title={link.title}
                  aria-current={active ? "page" : undefined}
                  className={`transition-colors hover:text-brand-pink ${
                    active ? "font-semibold text-brand-pink" : "text-black"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="flex shrink-0 gap-1 rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-pink sm:px-7"
        >
          BUILD <span className="hidden sm:block">WITH US</span>
        </Link>

        {isOpen && (
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-full z-40 border-b border-gray-200 bg-white lg:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    title={link.title}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className="block px-6 py-4 text-black transition-colors hover:text-brand-pink"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}