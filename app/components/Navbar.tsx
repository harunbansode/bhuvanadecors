"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Rental", href: "/rental" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-primary shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="text-3xl md:text-4xl tracking-wider text-accent hover:scale-105 transition-transform duration-300"
            style={{ fontFamily: "Priestacy, cursive" }}
          >
            Bhuvana Decors
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-body text-dark hover:text-highlight transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Phone Number */}
        <div className="border-1 border-accent px-5 py-3 rounded-lg hidden md:flex flex-shrink-0 font-body text-dark font-semibold">
          <a href="tel:+1234567890" className="hover:text-highlight transition-colors duration-300">
            +1(609) 604-4947
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-dark text-2xl cursor-pointer select-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-primary overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="block text-lg font-body text-dark hover:text-highlight px-6 py-2"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <hr className="border-7 border-accent" />
    </nav>
  );
}
