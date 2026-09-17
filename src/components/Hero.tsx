"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroStats } from "@/data/stats";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[100vh] flex flex-col overflow-hidden bg-ink"
    >
      {/* Deep Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0 w-full h-[120%]"
        style={{ y: yBg }}
      >
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=85&w=2940&auto=format&fit=crop"
          alt="Casagrand Industrial Park interior"
          fill
          unoptimized
          className="object-cover object-center"
          priority
        />
        {/* Aggressive gradient for legibility of scattered stats */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(27,29,31,0.2) 0%, rgba(27,29,31,0.85) 75%, #1B1D1F 100%)",
          }}
        />
      </motion.div>

      {/* Content — Parallax Text */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center w-full px-6 md:px-12 pt-32"
        style={{ y: yText, opacity: opacityText }}
      >
        <div className="w-full max-w-[1200px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="block w-8 h-[1px] bg-amber" />
            <span className="text-[10px] font-semibold text-white/70 uppercase tracking-[0.2em]">
              Industrial & Warehousing
            </span>
          </motion.div>

          {/* Main headline — Massive, breaking grid */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[54px] md:text-[80px] lg:text-[90px] font-light text-white leading-[0.95] tracking-[-0.04em] mb-10 w-[110vw] max-w-none"
          >
            Grade-A space, <br />
            <span className="text-amber">built around you.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-start md:items-center gap-8"
          >
            <a href="#enquire" className="btn-primary">
              Get a Proposal
            </a>
            <p className="text-[14px] md:text-[14px] font-medium text-white/90 max-w-[40ch] leading-relaxed drop-shadow-md">
              Delivered under one accountable framework, backed by 22 years of execution discipline.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scattered Floating Stats (Asymmetric layout) */}
      <div className="absolute bottom-10 left-0 w-full z-20 px-6 md:px-12 pointer-events-none hidden md:block">
        <div className="relative w-full h-[150px] max-w-[1400px] mx-auto">
          {heroStats.map((stat: { value: string; label: string }, i: number) => {
            // Scatter logic
            const positions = [
              { left: '40%', bottom: '0%' },
              { left: '60%', bottom: '40%' },
              { left: '78%', bottom: '10%' },
              { left: '90%', bottom: '50%' }
            ];
            const pos = positions[i];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                className="absolute flex flex-col items-start"
                style={{ left: pos.left, bottom: pos.bottom }}
              >
                <span className="text-[28px] lg:text-[40px] font-bold text-amber leading-none tracking-tight drop-shadow-lg">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-[11px] font-semibold text-white/90 uppercase mt-2 whitespace-nowrap drop-shadow-md">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
