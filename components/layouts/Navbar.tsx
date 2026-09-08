"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navbarLinks = [
  { name: "Home", link: "/", title: "Home" },
  { name: "Services", link: "/services", title: "Services" },
  { name: "Products", link: "/products", title: "Products" },
  { name: "Articles", link: "/articles", title: "Articles" },
  { name: "About Us", link: "/about-us", title: "About Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 z-50 w-full flex justify-between items-center md:px-10 px-3 py-4 bg-white text-black shadow-sm">
      <div className="flex items-center gap-3">
        <button
          onMouseDown={toggle}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="lg:hidden block z-50"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
        <Link href="/">
          <Image src={"/Logo.webp"} alt="Navo Logo" width={120} height={60} />
        </Link>
      </div>

      <div className="gap-8 text-lg hidden lg:flex">
        {navbarLinks.map((link) => (
          <Link
            href={link.link}
            title={link.title}
            key={link.link}
            className="hover:text-[#cf3f9a] transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <button className="py-3 px-7 bg-black text-white rounded-2xl flex gap-1 cursor-pointer font-semibold">
        BUILD <span className="sm:block hidden">WITH US</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 z-40 w-full bg-white text-black lg:hidden">
          <div className="flex flex-col">
            {navbarLinks.map((link) => (
              <Link
                href={link.link}
                key={link.link}
                onClick={() => setIsOpen(false)}
                className="px-6 py-4 hover:text-[#cf3f9a]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}