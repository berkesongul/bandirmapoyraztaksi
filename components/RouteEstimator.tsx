"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, ArrowRight, Phone } from "lucide-react";

const routes = [
  { from: "Bandırma Otogarı", to: "Bandırma Limanı (İDO)", time: "~8 dk", price: "₺80 – ₺120", km: "3.5 km", type: "Şehir İçi" },
  { from: "Üniversite Yerleşkesi", to: "Şehir Merkezi", time: "~10 dk", price: "₺90 – ₺130", km: "4.2 km", type: "Şehir İçi" },
  { from: "Bandırma Limanı", to: "Havaalanı (KCO)", time: "~20 dk", price: "₺200 – ₺280", km: "9 km", type: "Transfer" },
  { from: "Bandırma Merkez", to: "Erdek", time: "~35 dk", price: "₺350 – ₺450", km: "22 km", type: "Şehirlerarası" },
  { from: "Bandırma Otogarı", to: "Bursa", time: "~1.5 saat", price: "₺1.200 – ₺1.600", km: "95 km", type: "Şehirlerarası" },
  { from: "Bandırma Liman", to: "İstanbul (Anadolu)", time: "~3.5 saat", price: "₺2.500 – ₺3.200", km: "230 km", type: "Şehirlerarası" },
];

const typeBadge: Record<string, string> = {
  "Şehir İçi": "bg-blue-950/60 text-blue-400 border border-blue-800/50",
  Transfer: "bg-purple-950/60 text-purple-400 border border-purple-800/50",
  Şehirlerarası: "bg-[#ffcc00]/10 text-[#ffcc00] border border-[#ffcc00]/25",
};

export default function RouteEstimator() {
  return (
    <section id="fiyatlar" className="section-wrapper section-wrapper--alt">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="section-header"
        >
          <div className="eyebrow mx-auto w-fit">Tahmini Fiyatlar</div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">
            Popüler <span className="gradient-text">Güzergahlar</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed text-lg text-center">
            Fiyatlar tahmini olup trafik ve yolculuk koşullarına göre değişebilir.
            Kesin fiyat için bizi arayın.
          </p>
        </motion.div>

        {/* Route rows */}
        <div className="flex flex-col gap-3" style={{ marginBottom: "4rem" }}>
          {routes.map((r, i) => (
            <motion.div
              key={`${r.from}-${r.to}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card-hover bg-zinc-950/40 border border-zinc-800/40 rounded-3xl flex flex-col sm:flex-row sm:items-center gap-6 justify-between"
              style={{ padding: "2.5rem 3rem" }}
            >
              {/* Route */}
              <div className="flex items-center gap-6 flex-1 min-w-0">
                {/* Dot connector */}
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffcc00]" />
                  <div className="w-[2px] h-7 bg-gradient-to-b from-[#ffcc00]/60 to-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                </div>
                <div className="flex flex-col gap-2 min-w-0">
                  <p className="text-base font-semibold text-white flex items-center gap-2 truncate">
                    <MapPin size={14} className="text-[#ffcc00] flex-shrink-0" />
                    {r.from}
                  </p>
                  <p className="text-base text-zinc-500 flex items-center gap-2 truncate">
                    <MapPin size={14} className="text-zinc-600 flex-shrink-0" />
                    {r.to}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 sm:gap-12 flex-shrink-0 pl-8 sm:pl-0">
                <div className="flex items-center gap-2 text-zinc-500">
                  <Clock size={16} />
                  <span className="text-sm font-medium">{r.time}</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-zinc-600">
                  <ArrowRight size={16} />
                  <span className="text-sm">{r.km}</span>
                </div>
                <span className={`text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wide ${typeBadge[r.type]}`}>
                  {r.type}
                </span>
                <div className="text-right min-w-[140px] lg:min-w-[160px]">
                  <p className="text-[11px] text-zinc-600 uppercase tracking-wider mb-1.5">Tahmini</p>
                  <p className="text-lg lg:text-xl font-black text-[#ffcc00]">{r.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-zinc-500 text-base" style={{ marginBottom: "2rem" }}>Özel güzergah veya kurumsal fiyat teklifi için:</p>
          <motion.a
            href="tel:+905532222222"
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-5 bg-[#ffcc00] text-zinc-950 font-bold rounded-full hover:bg-[#ffe066] transition-all accent-glow"
            style={{
              padding: "1.2rem 2rem",
              fontSize: "1.4rem"
            }}
          >
            <Phone size={28} strokeWidth={2.5} />
            +90 553 222 22 22
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
