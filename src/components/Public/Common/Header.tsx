"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/utils/cn";

const navItems = [
  { label: "Products", href: "#", hasDropdown: true },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#", hasDropdown: false },
];

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggle = (label: string) =>
    setOpenMenu((prev) => (prev === label ? null : label));

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/asset/Logo.png" alt="NOOI" className="h-8 w-auto" />
          <span className="font-bold text-lg text-gray-900 tracking-tight">
            NOOI
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.hasDropdown ? (
                <button
                  type="button"
                  onClick={() => toggle(item.label)}
                  className={cn(
                    "flex items-center gap-0.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                    openMenu === item.label
                      ? "text-gray-900 bg-gray-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                  )}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={cn(
                      "transition-transform",
                      openMenu === item.label ? "rotate-180" : "",
                    )}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="px-3.5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              )}

              {/* Simple dropdown placeholder */}
              {item.hasDropdown && openMenu === item.label && (
                <div className="absolute top-full left-0 mt-1 w-44 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50">
                  <p className="px-4 py-2 text-xs text-gray-400">Coming soon</p>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            aria-label="Help"
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          >
            <HelpCircle size={18} />
          </button>

          <Link
            href="/signin"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Log in
          </Link>

          <Link
            href="/signup"
            className="px-4 py-2 text-sm font-semibold text-white bg-[#1a4731] hover:bg-[#15392a] rounded-full transition-colors"
          >
            Start for free
          </Link>
        </div>
      </div>
    </header>
  );
}
