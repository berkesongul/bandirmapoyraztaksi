"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function StickyMobileCTA() {
  return (
    <div className="mobile-cta-bar">
      <motion.a
        href="tel:+905372738182"
        whileTap={{ scale: 0.96 }}
        className="pulse-cta flex items-center justify-center gap-3 bg-[#ffcc00] text-zinc-950 font-black text-base w-full py-4 rounded-2xl"
        aria-label="Taksi çağır: +90 537 273 81 82"
      >
        <Phone size={18} strokeWidth={2.5} />
        <span>7/24 TAKSİ ÇAĞIR</span>
        <span className="text-zinc-800 font-semibold text-sm">· +90 537 273 81 82</span>
      </motion.a>
    </div>
  );
}
