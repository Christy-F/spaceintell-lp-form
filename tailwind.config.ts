import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:        "#1B1D1F",   // nav bg, footer bg, primary text
        "ink-2":    "#2E3439",   // dark sidebar, table header
        paper:      "#EDEAE2",   // warm off-white page bg
        "paper-2":  "#FAF8F4",   // near-white panel
        steel:      "#3E4A52",   // secondary text
        "steel-dark":"#222A2F",  // deep dark utility
        amber:      "#E2A63B",   // accent ONLY — CTAs, stat nums, accents
        "amber-dark":"#BD850F",  // hover state
        muted:      "#5B5F58",   // body text, captions
        line:       "#C7C0AC",   // hairline rules, table borders
        white:      "#FAF8F4",   // near white
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        regular: "400",
        semibold: "600",
        bold: "700",
      },
      fontSize: {
        // Hero headline — 80–96px, clamp
        "hero":       ["clamp(3rem, 6.5vw, 6rem)",  { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        // Section H2 — 52–64px
        "section":    ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        // Card H3
        "card":       ["clamp(1.25rem, 2vw, 1.625rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        // Stat numeral — 44–56px
        "stat":       ["clamp(2.5rem, 4vw, 3.5rem)",  { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        // Eyebrow / label
        "eyebrow":    ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.18em" }],
        // Body
        "body":       ["1.0625rem", { lineHeight: "1.7", letterSpacing: "0" }],
        // Caption
        "caption":    ["0.8125rem", { lineHeight: "1.6", letterSpacing: "0" }],
        // Form label
        "form-label": ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.1em" }],
      },
      spacing: {
        // Section padding tokens
        "section-desktop": "140px",
        "section-tablet":  "100px",
        "section-mobile":  "72px",
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        DEFAULT: "2px",
        sm:      "2px",
        md:      "2px",
        lg:      "2px",
        xl:      "2px",
        "2xl":   "2px",
        full:    "9999px",
      },
      maxWidth: {
        content: "1180px",
        prose:   "58ch",
      },
      animation: {
        "fade-up":    "fadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in":    "fadeIn 0.5s ease both",
        marquee:      "marquee 36s linear infinite",
        "spin-slow":  "spin 25s linear infinite",
        pulse:        "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        "panel":  "0 4px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)",
        "card":   "0 2px 8px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)",
        "amber":  "0 4px 20px rgba(226,166,59,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
