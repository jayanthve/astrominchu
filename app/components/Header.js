"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import appLogo from "./logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const navLinks = [
    { href: "/#gallery", label: "Gallery" },
    { href: "/#about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-bgPrimary/80 border-b border-white/10 relative">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between min-h-[64px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={appLogo}
            alt="AstroMinchu Logo"
            width={48}
            height={48}
            className="rounded-full border-2 border-accentPrimary"
            priority
          />
          <span className="hidden sm:block font-heading font-bold tracking-wide uppercase">
            ASTROMINCHU
          </span>
        </Link>
        <nav className="space-x-4 text-textSecondary">
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  transition-all duration-200
                  ${
                    isActive(link.href)
                      ? "text-textPrimary font-bold"
                      : "text-textSecondary hover:text-textPrimary"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6 text-textPrimary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="sticky top-0 w-full md:hidden backdrop-blur bg-bgPrimary/80 border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`
                  block px-4 py-3 text-center text-sm border-b border-white/10 transition
                  ${
                    isActive(link.href)
                      ? "text-textPrimary font-bold bg-white/5"
                      : "text-textSecondary hover:text-textPrimary hover:bg-white/5"
                  }
                `}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
