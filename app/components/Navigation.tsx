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
    <nav
      className="w-full font-sans"
      style={{ backgroundColor: "rgb(76, 56, 89)" }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="transition-all hover:drop-shadow-[0_0_8px_#f9b731,0_0_12px_#f9b731]">
          <Image
            src="/img/lumenis-partners-logo.svg"
            alt="Lumenis Partners"
            width={250}
            height={63}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link
            href="/about"
            className="text-white transition-colors hover:text-zinc-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white transition-colors hover:text-zinc-200"
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
