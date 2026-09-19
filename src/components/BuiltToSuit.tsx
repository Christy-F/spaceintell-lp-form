"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { engagementModels } from "@/data/engagementModels";

export default function BuiltToSuit() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="models" className="bg-paper border-t border-line relative">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Side: Sticky Pitch */}
        <div className="w-full lg:w-[45%] lg:border-r border-line relative z-10 bg-paper">
          <div className="lg:sticky lg:top-0 h-auto lg:h-screen flex flex-col justify-center px-6 md:px-12 py-24 lg:py-0">
            <div className="flex items-center gap-4 mb-8 opacity-40">
              <span className="w-1.5 h-1.5 rounded-full bg-ink" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-ink">
                Engagement Models
              </span>
            </div>
            
            <h2 className="text-[44px] md:text-[56px] font-light text-ink leading-[1.05] tracking-tight mb-8">
              Built-to-Suit vs Ready-to-Occupy.
            </h2>
            <p className="text-[16px] font-light text-steel max-w-[40ch] leading-relaxed mb-12">
              Structured options aligned to your ownership preference, capital strategy and timeline — under one accountable framework.
            </p>

            <a href="#enquire" className="btn-primary self-start">
              Discuss Your Requirement
            </a>
          </div>
        </div>

        {/* Right Side: Scrolling Models */}
        <div className="w-full lg:w-[55%] relative z-0">
          {engagementModels.map((model, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 30 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center px-6 md:px-16 py-20 lg:py-0 border-t border-line lg:border-t-0 lg:border-b last:border-b-0 relative overflow-hidden"
            >
              {/* Oversized background index number */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-4 pointer-events-none select-none opacity-5">
                <span className="text-[200px] md:text-[400px] font-bold text-ink leading-none tracking-tighter">
                  0{idx + 1}
                </span>
              </div>

              <div className="relative z-10">
                <p className="text-[11px] uppercase tracking-widest text-amber font-semibold mb-4">
                  {model.tag}
                </p>
                <h3 className="text-[32px] md:text-[48px] font-light text-ink mb-8 leading-tight tracking-tight">
                  {model.title}
                </h3>
                <p className="text-[16px] md:text-[18px] font-light text-steel leading-relaxed max-w-[50ch] mb-8">
                  {model.description}
                </p>
                <div className="p-5 border-l-2 border-amber bg-ink/5 max-w-[50ch]">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-ink/40 block mb-1">
                    Ideal Profile
                  </span>
                  <span className="text-[14px] text-ink/80 font-medium leading-relaxed">
                    {model.ideal}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
