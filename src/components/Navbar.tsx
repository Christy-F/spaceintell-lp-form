"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
              src="/casagrandwarehouse_logo.webp"
              alt="Casagrand Industrial & Warehousing"
              width={180}
              height={44}
              className="h-8 w-auto"
              priority
            />
          </a>

          {/* Right Action CTA */}
          <div className="flex items-center">
            <a href="#enquire" className="bg-amber hover:bg-amber-dark text-ink font-semibold px-6 py-2.5 text-[12px] tracking-wide uppercase transition-colors duration-300 rounded-[2px]">
              Get a Proposal
            </a>
          </div>
        </div>
      </motion.header>
    </>
  );
}
