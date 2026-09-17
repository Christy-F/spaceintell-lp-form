import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AntdRegistry from "@/components/AntdRegistry";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casagrand Industrial & Warehousing | Grade-A Industrial Space — South India",
  description:
    "Ready-built factories, built-to-suit facilities and large-format industrial parks across South India. 6M+ sq. ft. delivered. Serving Chennai, Bengaluru and Coimbatore corridors.",
  openGraph: {
    title: "Casagrand Industrial & Warehousing",
    description: "Grade-A industrial space across South India. Ready-built and built-to-suit factories, warehouses and industrial parks.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
