"use client";

import { usePathname } from "next/navigation";
import React, { ReactNode, useState } from "react";

const ActiveLink = ({
  children,
  link,
}: {
  children: ReactNode;
  link: string;
}) => {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const active = isActive(link);

  return (
    <span
      className={`transition-colors hover:text-brand-pink ${active ? "font-semibold text-brand-pink" : "text-black"}`}
    >
      {children}
    </span>
  );
};

export default ActiveLink;
