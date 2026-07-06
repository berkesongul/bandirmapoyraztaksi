"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Navigation2 } from "lucide-react";

const localZones = [
  "Bandırma Limanı (İDO)",
  "Bandırma Otogarı",
  "Liman AVM",
  "17 Eylül Üniversitesi",
  "Paşabayır",
  "17 Eylül",
  "İskele Mahallesi",
  "Havaalanı Transferi",
  "Erdek",
  "Gönen",
];

const intercityRoutes = [
  { from: "Bandırma", to: "İstanbul", time: "~3.5 saat" },
  { from: "Bandırma", to: "Bursa", time: "~1.5 saat" },
  { from: "Bandırma", to: "İzmir", time: "~3 saat" },
  { from: "Bandırma", to: "Çanakkale", time: "~2.5 saat" },
  { from: "Bandırma", to: "Balıkesir", time: "~1 saat" },
  { from: "Bandırma", to: "Edremit", time: "~2 saat" },
];

export default function ServiceZones() {
  return (
    <section id="bolgeler" className="section-wrapper">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="section-header"
          style={{ marginBottom: "1.5rem" }}
        >
          <div className="eyebrow mx-auto w-fit">
            <Navigation2 size={14} />
            Hizmet Bölgeleri
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white" style={{ marginBottom: "1.5rem" }}>
            Bandırma&apos;nın Her Noktasına{" "}
            <span className="gradient-text">Ulaşım</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed text-lg text-center">
            Şehir içi her mahalle, liman, otogar, üniversite ve şehirlerarası
            tüm güzergahlar — kesintisiz taksi hizmeti.
          </p>
        </motion.div>

        {/* ── Local zone chips ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4" style={{ marginBottom: "2rem" }}>
            <MapPin size={18} className="text-[#ffcc00]" />
            <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
              Bandırma İçi Noktalar
            </span>
          </div>
          <div className="flex flex-wrap gap-5 lg:gap-6" style={{ marginTop: "1rem" }}>
            {localZones.map((z, i) => (
              <motion.span
                key={z}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
                className="tag-chip text-base sm:text-lg"
                style={{
                  paddingTop: "0.85rem",
                  paddingBottom: "0.85rem",
                  paddingLeft: "1.75rem",
                  paddingRight: "1.75rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}
              >
                <MapPin size={16} />
                {z}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ── Intercity routes — dashboard rows ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          style={{ marginTop: "1.75rem" }}
        >
          <div className="flex items-center gap-4" style={{ marginBottom: "2rem" }}>
            <Navigation2 size={18} className="text-[#ffcc00]" />
            <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
              Şehirlerarası Transfer
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-10">
            {intercityRoutes.map((r, i) => (
              <motion.div
                key={`${r.from}-${r.to}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-hover bg-zinc-950/40 border border-zinc-800/40 rounded-3xl flex justify-between items-center group gap-6 min-h-[120px]"
                style={{
                  paddingTop: "2.5rem",
                  paddingBottom: "2.5rem",
                  paddingLeft: "3rem",
                  paddingRight: "3rem"
                }}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Güzergah</span>
                    <div className="flex flex-wrap items-center gap-2 text-base lg:text-lg font-bold text-white">
                      <span>{r.from}</span>
                      <ArrowRight size={16} className="text-[#ffcc00] flex-shrink-0" />
                      <span>{r.to}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-2">Tahmini Süre</span>
                  <span className="text-base font-semibold text-zinc-300">{r.time}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-zinc-600" style={{ marginTop: "1.5rem" }}>
            Listelenmemiş bir bölge için{" "}
            <a href="tel:+905372738182" className="text-[#ffcc00] hover:underline font-semibold">
              bizi arayın
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
