"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Bölgeler", href: "#bolgeler" },
  { label: "Araç Filomuz", href: "#filo" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-50 transition-all duration-500">
      <div className="container">
        <div className={`flex items-center justify-between px-6 lg:px-10 h-[76px] rounded-2xl border transition-all duration-500 ${scrolled
          ? "bg-zinc-950/85 backdrop-blur-2xl border-zinc-800/80 shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
          : "bg-zinc-950/30 backdrop-blur-xl border-zinc-800/20"
          }`}>

          {/* Logo */}
          <button onClick={() => go("#hero")} className="flex items-center gap-4 group" aria-label="Ana Sayfa">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-zinc-800 group-hover:border-[#ffcc00]/50 transition-all flex-shrink-0">
              <Image src="/favicon.png" alt="Bandırma Poyraz Taksi" fill sizes="44px" className="object-cover" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[9px] font-bold text-[#ffcc00] tracking-[0.25em] uppercase mb-1">Bandırma</span>
              <span className="text-base font-bold text-white tracking-wide">Poyraz Taksi</span>
            </div>
          </button>

          {/* Desktop links — spacious */}
          <nav className="hidden lg:flex items-center gap-8 lg:gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="text-[15px] font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-6">

            <motion.a
              href="tel:+905532222222"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.04 }}
              className="hidden md:flex items-center gap-3 bg-[#ffcc00] text-zinc-950 font-bold rounded-full hover:bg-[#ffe066] transition-all accent-glow"
              style={{
                padding: "0.75rem 1.5rem",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginRight: "4rem"
              }}
            >
              <Phone size={18} strokeWidth={2.5} />
              Hemen Ara
            </motion.a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-3 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
              aria-label="Menü"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-zinc-800/60 bg-zinc-950"
          >
            <div className="container py-6 flex flex-col gap-2">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className="w-full text-left px-6 py-4 text-base font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-2xl transition-all"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
