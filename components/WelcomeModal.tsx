"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, ShieldCheck, Clock } from "lucide-react";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal 1 second after page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800/80 rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-10"
            style={{
              paddingTop: "4rem",
              paddingBottom: "3.5rem",
              paddingLeft: "3.5rem",
              paddingRight: "3.5rem",
              textAlign: "center",
              boxShadow: "0 0 60px rgba(255, 204, 0, 0.05)"
            }}
          >
            {/* Close button (top right) */}
            <button
              onClick={close}
              className="absolute top-6 right-6 p-2 rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all outline-none"
              aria-label="Kapat"
            >
              <X size={18} />
            </button>

            {/* Glowing Icon Header */}
            <div className="w-12 h-12 rounded-2xl bg-[#ffcc00]/10 border border-[#ffcc00]/20 flex items-center justify-center mb-6 text-[#ffcc00]">
              <Clock size={22} className="animate-pulse" strokeWidth={1.8} />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3" style={{ textAlign: "center", marginBottom: "1rem" }}>
              <span
                className="text-[10px] sm:text-xs font-black text-[#ffcc00] tracking-[0.2em] uppercase"
                style={{ textAlign: "center", display: "block", width: "100%" }}
              >
                Bandırma Poyraz Taksi
              </span>
              <h3
                className="text-2xl sm:text-3xl font-black text-white leading-tight"
                style={{ textAlign: "center", display: "block", width: "100%" }}
              >
                5 Dakikada <br />
                <span className="gradient-text">Yanınızda!</span>
              </h3>
              <p
                className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-2 max-w-sm"
                style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto", display: "block", width: "100%" }}
              >
                Konforlu araçlarımız ve deneyimli şoförlerimizle Bandırma içi her noktaya en hızlı ve en güvenli şekilde ulaştırıyoruz.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+905372738182"
                className="bg-[#ffcc00] hover:bg-[#ffe066] text-zinc-950 font-black rounded-2xl flex items-center justify-center gap-3 transition-all uppercase tracking-wider accent-glow"
                style={{
                  paddingTop: "1.25rem",
                  paddingBottom: "1.25rem",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  fontSize: "1.15rem"
                }}
              >
                <Phone size={18} strokeWidth={2.5} />
                Hemen Taksi Çağır
              </a>
              <button
                onClick={close}
                className="text-xs font-semibold text-zinc-500 hover:text-zinc-300 transition-colors py-2 outline-none"
              >
                Kapat ve İncele
              </button>
            </div>

            {/* Trust badge */}
            <div
              className="flex items-center gap-2 mt-6 text-[11px] text-zinc-650"
              style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}
            >
              <ShieldCheck size={14} className="text-[#ffcc00]/50" />
              <span>Güvenli & Hijyenik Yolculuk Garantisi</span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
