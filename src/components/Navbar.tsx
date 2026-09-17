"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Industrial Spaces", href: "#inventory" },
  { label: "Locations", href: "#locations" },
  { label: "Why Casagrand", href: "#why" },
  { label: "Contact", href: "#enquire" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "py-3 shadow-panel" : "py-4"
        } bg-ink border-b border-white/[0.07]`}
      >
        <div className="section-wrap flex items-center justify-between h-11">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <Image
              src="/spaceintell-logo.png"
              alt="Casagrand Industrial & Warehousing"
              width={180}
              height={44}
              className="h-8 w-auto"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-white/60 hover:text-white/90 transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a href="#enquire" className="btn-primary ml-2">
              Get a Proposal
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-0 top-[68px] z-40 bg-ink border-b border-white/[0.07] px-6 pb-6"
        >
          <nav className="flex flex-col gap-5 pt-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#enquire"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-center mt-2"
            >
              Get a Proposal
            </a>
          </nav>
        </motion.div>
      )}
    </>
  );
}
