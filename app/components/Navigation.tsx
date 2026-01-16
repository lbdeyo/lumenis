"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full font-sans bg-[#281e32] sticky top-0 z-50 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3),0_2px_4px_-1px_rgba(0,0,0,0.2)]">
      <div className="mx-auto flex max-w-5xl items-center px-6 py-4 relative">
        <Link
          href="/"
          className="transition-all hover:drop-shadow-[0_0_8px_#f9b731,0_0_12px_#f9b731] flex-shrink-0"
        >
          <Image
            src="/img/old-lumenis-logo.png"
            alt="Lumenis Partners"
            width={250}
            height={63}
            priority
          />
        </Link>

        {/* Centered Link - Desktop Only */}
        <Link
          href="/about"
          className="hidden md:block flex-1 text-center text-[#f9b731] transition-colors hover:text-[#f9b731]/80 whitespace-nowrap text-xl"
          style={{ fontFamily: 'var(--font-forum), serif' }}
        >
          Anna Maria Larsen, Executive Mentor
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 flex-shrink-0">
          <Link
            href="/about"
            className="text-white transition-colors hover:text-zinc-200 text-base"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white transition-colors hover:text-zinc-200 text-base"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/20">
          <div className="flex flex-col px-6 py-4 gap-4">
            <Link
              href="/about"
              className="text-white transition-colors hover:text-zinc-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white transition-colors hover:text-zinc-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
