"use client";

// Placed in components/layout/ (not components/sections/) to match the
// established directory convention — Navbar/Footer are page-frame chrome,
// not homepage content sections.
//
// Mobile menu uses a hidden checkbox + peer, same stateless pattern as
// SegmentedFAQ — no client component, no hydration cost.

import { MenuIcon } from "../ui/Icons";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/products/domestic", label: "Domestic" },
  { href: "/products/commercial", label: "Commercial" },
  { href: "/products/industrial", label: "Industrial" },
  { href: "/products/spare-parts", label: "Spare Parts" },
  { href: "/services", label: "Services" },
  // { href: "/projects", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

function normalizePath(pathname: string | null) {
  return (pathname ?? "").replace(/\/$/, "");
}

export default function Navbar() {
  const pathname = usePathname();
  const currentPath = normalizePath(pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/5 bg-white/90 backdrop-blur-md">
      {/* Mobile trigger checkbox lives as a direct child of <header> so the
          drawer <nav> below (also a direct child) is a true sibling and
          peer-checked/nav can target it. */}
      <input type="checkbox" id="mobile-nav-toggle" className="peer/nav sr-only" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left — Logo */}
        <a href="/" className="text-lg font-extrabold tracking-tight text-navy">
          Aqua<span className="text-primary">Pure</span>
        </a>

        {/* Center — desktop links only */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => {
            const target = normalizePath(link.href);
            const isActive = currentPath === target || currentPath.startsWith(target + "/");

            return (
              <a
                key={link.href}
                href={link.href}
                className={`group relative py-2 transition-all duration-200 ${
                  isActive
                    ? "text-primary font-bold opacity-100"
                    : "text-navy opacity-85 hover:text-primary hover:opacity-100"
                }`}
              >
                <span className="block pr-1">{link.label}</span>
                {/* Animated bottom-border that slides in on hover */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-primary transition-all duration-300" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right — micro CTA, desktop only */}
        <a
          href="https://wa.me/92XXXXXXXXXX"
          className="hidden min-h-12 items-center rounded-lg bg-gradient-to-r from-primary to-blue-600 px-4 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 md:inline-flex"
        >
          WhatsApp Us
        </a>

        {/* Mobile trigger label — targets the checkbox above via htmlFor */}
        <label
          htmlFor="mobile-nav-toggle"
          aria-label="Toggle menu"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg border border-navy/10 md:hidden hover:bg-primary/10 hover:border-primary/30 hover:underline"
        >
          <MenuIcon className="h-6 w-6 text-navy" />
        </label>
      </div>

      {/* Mobile drawer — direct sibling of the checkbox input above */}
      <nav className="peer-checked/nav:max-h-screen max-h-0 overflow-hidden border-t border-navy/5 bg-white transition-all duration-300 md:hidden">
        <div className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => {
            const target = normalizePath(link.href);
            const isActive = currentPath === target || currentPath.startsWith(target + "/");

            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative flex min-h-12 items-center rounded-lg px-3 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-primary font-bold bg-primary/5"
                    : "text-navy/70 hover:bg-primary/5 hover:text-primary"
                }`}
              >
                <span className="block w-full pr-1">{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-1 left-3 h-[2px] w-[calc(100%-1.5rem)] bg-primary transition-all duration-300" />
                )}
              </a>
            );
          })}
          <a
            href="https://wa.me/92XXXXXXXXXX"
            className="mt-2 flex min-h-12 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-blue-600 px-4 text-center text-sm font-bold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            WhatsApp Us
          </a>
        </div>
      </nav>
    </header>
  );
}

