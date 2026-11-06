"use static";

import Image from "next/image";
import Link from "next/link";

import { navLinks, siteConfig } from "@/lib/site";
import ActiveLink from "./ActiveLink";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <header className="fixed w-full h-fit p-4 z-50 ">
      <nav
        aria-label="Main navigation"
        className="flex max-w-7xl inset-x-0 p-4 top-4 mx-auto bg-white shadow-[0_0_5px_rgba(0,0,0,0.15)] rounded-2xl items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <Link
            href="/"
            aria-label={`${siteConfig.name} — home`}
            className="flex items-center"
          >
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
            return (
              <li key={link.href}>
                <Link href={link.href} title={link.title}>
                  <ActiveLink link={link.href}>{link.name}</ActiveLink>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="flex shrink-0 gap-1 rounded-2xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-pink sm:px-6"
          >
            BUILD <span className="hidden sm:block">WITH US</span>
          </Link>

          <MobileNav>
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
                      className="block px-6 py-4 text-black transition-colors hover:text-brand-pink"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </MobileNav>
        </div>
      </nav>
    </header>
  );
}
