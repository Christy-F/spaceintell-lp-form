"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { tenantLogos } from "@/data/logos";
import { trustStats } from "@/data/stats";

// Helper component for count-up animation with consistent color
const CountUpNumeral = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const prefixMatch = value.match(/^[^0-9]+/);
  const prefix = prefixMatch ? prefixMatch[0] : "";
  const suffix = value.replace(/^[^0-9]+|[0-9,]/g, "");
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);

  useEffect(() => {
    if (isInView && !isNaN(numericValue) && ref.current) {
      const controls = animate(0, numericValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toLocaleString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue]);

  if (isNaN(numericValue)) return <span>{value}</span>;

  return (
    <span>
      {prefix && <span className="font-light tracking-tight pr-[1px]">{prefix}</span>}
      <span ref={ref}>0</span>
      {suffix && <span className="text-amber font-light tracking-tight ml-[2px]">{suffix}</span>}
    </span>
  );
};

export default function TrustSection() {
  return (
    <section className="bg-paper py-[150px] overflow-hidden">
      
      {/* BESPOKE SINGLE-ROW ANCHORED STATS */}
      <div className="w-full mb-[200px]">
        <div className="section-wrap">
          
          {/* DESKTOP VIEW: Synchronized Grid for perfect alignment & gaps */}
          <div className="hidden md:grid grid-cols-[auto_auto_auto_auto] justify-between border-b border-ink/10 pb-16 gap-y-4">
            
            {/* ROW 1: Amber Accents */}
            {trustStats.map((_, i) => (
              <motion.div 
                key={`tick-${i}`} 
                className="self-end mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              >
                <div className="w-6 h-[2px] bg-amber" />
              </motion.div>
            ))}

            {/* ROW 2: Numerals */}
            {trustStats.map((stat, i) => {
              const isAnchor = i === 1; // 6M+
              
              return (
                <motion.div
                  key={`num-${i}`}
                  className={`self-baseline text-ink leading-[0.85] tracking-tighter font-sans whitespace-nowrap
                    ${isAnchor ? 'text-[80px] lg:text-[130px] font-medium' : 'text-[50px] lg:text-[70px] font-light'}
                  `}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                >
                  <CountUpNumeral value={stat.value} />
                </motion.div>
              );
            })}

            {/* ROW 3: Labels */}
            {trustStats.map((stat, i) => (
              <motion.div
                key={`label-${i}`}
                className="self-start mt-4 text-[10px] font-semibold text-ink/60 uppercase tracking-[0.2em] leading-relaxed max-w-[15ch]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
              >
                {stat.label}
              </motion.div>
            ))}
          </div>

          {/* MOBILE VIEW: Stacked Flex Col (Grid row separation breaks on mobile) */}
          <div className="flex flex-col md:hidden gap-16 border-b border-ink/10 pb-16">
            {trustStats.map((stat, i) => {
              const isAnchor = i === 1;
              return (
                <motion.div
                  key={`mob-${i}`}
                  className="flex flex-col items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="w-6 h-[2px] bg-amber mb-6" />
                  <div className={`text-ink leading-[0.85] tracking-tighter font-sans whitespace-nowrap mb-4 ${isAnchor ? 'text-[80px] font-medium' : 'text-[50px] font-light'}`}>
                    <CountUpNumeral value={stat.value} />
                  </div>
                  <div className="text-[10px] font-semibold text-ink/60 uppercase tracking-[0.2em] leading-relaxed max-w-[15ch]">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      <div className="section-wrap">
        {/* Occupants Logo Lockups */}
        <div className="border-t border-line pt-24">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <h2 className="text-[32px] md:text-[44px] font-light text-ink leading-tight max-w-[20ch]">
              Trusted by the world's most demanding operators.
            </h2>
            <p className="text-[14px] text-steel/70 max-w-[40ch] font-light">
              From Fortune 500 electronics manufacturers to leading 3PL providers, Casagrand delivers the infrastructure required for seamless, scalable operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {tenantLogos.map((cat, catIdx) => (
              <div key={catIdx} className="flex flex-col">
                <h4 className="text-[10px] font-semibold uppercase tracking-widest text-ink/60 mb-8 pb-4 border-b border-line">
                  {cat.category}
                </h4>
                <div className="flex flex-col gap-4">
                  {cat.companies.map((company, cIdx) => (
                    <motion.div
                      key={company}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (catIdx * 0.1) + (cIdx * 0.05) }}
                    >
                      <span className="logo-placeholder w-full justify-start hover:pl-8">
                        {company}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
