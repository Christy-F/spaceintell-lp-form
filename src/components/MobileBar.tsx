"use client";

import React from "react";
import { Phone, MessageSquare } from "lucide-react";

export default function MobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-ink border-t border-white/[0.1] flex">
      <a
        href="tel:+919047052222"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-[13.5px] font-semibold text-white/75 hover:text-white border-r border-white/[0.1] transition-colors"
        onClick={() => (window as any).gtag?.("event", "mobile_phone_click")}
      >
        <Phone size={16} />
        Call Us
      </a>
      <a
        href="#enquire"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-[13.5px] font-semibold bg-amber text-ink hover:bg-amber-dark transition-colors"
        onClick={() => (window as any).gtag?.("event", "mobile_enquire_click")}
      >
        <MessageSquare size={16} />
        Get a Proposal
      </a>
    </div>
  );
}
