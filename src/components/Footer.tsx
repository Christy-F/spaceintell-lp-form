import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/[0.05] relative overflow-hidden">

      {/* Rich visual treatment: subtle grid pattern background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent pointer-events-none" />

      <div className="section-wrap pt-16 md:pt-24 pb-8 relative z-10">

        {/* Call to Action Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/[0.08] pb-12 mb-12 gap-8">
          <div className="flex items-center gap-6">
            <h2 className="text-[32px] md:text-[48px] font-light text-white leading-none tracking-tight">
              Build your next facility.
            </h2>
          </div>

          <a href="#enquire" className="group flex items-center gap-4 text-amber hover:text-white transition-colors">
            <span className="text-[12px] uppercase tracking-widest font-semibold">Start a Discussion</span>
            <div className="w-10 h-10 rounded-full border border-amber/30 flex items-center justify-center group-hover:border-white transition-colors duration-300">
              <ArrowRight size={14} />
            </div>
          </a>
        </div>

        {/* 3-Column Layout: Brand, Enquiries, HQ */}
        {/* Switched to true 3-column grid for even column spacing instead of arbitrary spans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start pb-16">

          {/* Left: Brand Lockup */}
          <div className="flex flex-col gap-6">
            {/* <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50 block leading-none">
              Casagrand Industrial
            </span>
             */}
            <div className="relative w-full max-w-[180px]">
              <Image
                src="/spaceintell-logo.png"
                alt="Casagrand Industrial & Warehousing"
                width={180}
                height={45}
                className="w-full h-auto opacity-100 object-contain object-left"
              />
            </div>

            <p className="text-[13px] text-white/80 font-light max-w-[35ch] leading-relaxed">
              The industrial vertical of the Casagrand Group — delivering Grade-A manufacturing and warehousing infrastructure across South India since 2015.
            </p>
          </div>

          {/* Middle: Enquiries */}
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-6 block leading-none">
              Direct Enquiries
            </span>
            <div className="flex flex-col gap-3">
              <a href="tel:+919047052222" className="text-[15px] font-light text-white hover:text-amber transition-colors">
                +91 90470 52222
              </a>
              <a href="mailto:industrial@casagrand.co.in" className="text-[15px] font-light text-white hover:text-amber transition-colors">
                industrial@casagrand.co.in
              </a>
            </div>
          </div>

          {/* Right: Headquarters */}
          <div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-6 block leading-none">
              Headquarters
            </span>
            <address className="not-italic text-[13px] text-white/80 leading-relaxed font-light">
              Casagrand Ecotech Park, Tower 3, 4th Floor,<br />
              Wipro Street, Elcot SEZ, Sholinganallur,<br />
              Chennai, Tamil Nadu 600119
            </address>
          </div>

        </div>

        {/* Dedicated Legal/Copyright Bar at the true bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/[0.08] gap-4">
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">
            © {new Date().getFullYear()} Casagrand Group
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">
            Registered Developer · RERA Compliant
          </span>
        </div>

      </div>
    </footer>
  );
}
