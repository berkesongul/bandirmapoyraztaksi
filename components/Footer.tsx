"use client";

import { Phone, MapPin, Mail, Car } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-[#050507] border-t border-zinc-900">
      <div className="container pb-12" style={{ paddingTop: "3rem" }}>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-20 mb-24">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-zinc-800">
                <Image src="/favicon.png" alt="Bandırma Poyraz Taksi" fill sizes="48px" className="object-cover" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#ffcc00] tracking-[0.2em] uppercase mb-1">Bandırma</p>
                <p className="text-lg font-bold text-white">Poyraz Taksi</p>
              </div>
            </div>
            <p className="text-base text-zinc-500 leading-relaxed max-w-sm mb-10">
              Bandırma&apos;nın köklü taksi hizmetlerinden Poyraz Taksi, lüks araç filosu
              ve profesyonel sürücüleriyle şehir içi ve şehirlerarası ulaşımda
              hizmetinizdedir.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold text-zinc-600 uppercase tracking-widest mb-8">İletişim</h3>
            <div className="flex flex-col gap-12">
              <a href="tel:+905532222222" className="flex items-start gap-5 group">
                <Phone size={18} className="text-[#ffcc00] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-zinc-600 mb-2">Telefon</p>
                  <p className="text-base font-semibold text-zinc-300 group-hover:text-white transition-colors">
                    +90 553 222 22 22
                  </p>
                </div>
              </a>
              <div className="flex items-start gap-5">
                <MapPin size={18} className="text-[#ffcc00] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-zinc-600 mb-2">Adres</p>
                  <p className="text-base text-zinc-400 leading-relaxed">
                    İskele Mh., 10200<br />Bandırma / Balıkesir
                  </p>
                </div>
              </div>
              <a href="mailto:info@poyraztaksi.com" className="flex items-start gap-5 group">
                <Mail size={18} className="text-[#ffcc00] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-zinc-600 mb-2">E-Posta</p>
                  <p className="text-base text-zinc-400 group-hover:text-white transition-colors">
                    info@poyraztaksi.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold text-zinc-600 uppercase tracking-widest mb-8">Hizmetler</h3>
            <div className="flex flex-col gap-6">
              {[
                "Bandırma Otogar Transfer",
                "Bandırma Liman (İDO)",
                "Üniversite Transfer",
                "Havaalanı Transfer",
                "Şehirlerarası Taksi",
                "Kurumsal Hizmet",
                "Gece Taksi Hizmeti",
              ].map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <Car size={14} className="text-[#ffcc00]/50 flex-shrink-0" />
                  <span className="text-base text-zinc-500">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Bandırma Poyraz Taksi. Tüm hakları saklıdır.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm font-semibold text-zinc-600 hover:text-[#ffcc00] transition-colors"
          >
            Sayfanın Başına Dön ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
