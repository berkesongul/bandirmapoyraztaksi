"use client";

import { motion } from "framer-motion";
import { Car, Users, CheckCircle2, Truck, ShieldCheck } from "lucide-react";

const vehicles = [
  {
    Icon: Car,
    name: "Standart Sedan",
    desc: "Konforlu şehir içi yolculuklar için ideal. Ekonomik ve güvenilir araç seçeneği.",
    passengers: "1–4 kişi",
    features: ["Klima", "USB Şarj", "Müzik Sistemi"],
    badge: "Şehir İçi",
    featured: false,
  },
  {
    Icon: ShieldCheck,
    name: "Premium SUV",
    desc: "Uzun yolculuklar ve VIP transferler için geniş, lüks araçlar. En çok tercih edilen seçenek.",
    passengers: "1–6 kişi",
    features: ["Klima", "WiFi", "Deri Koltuk", "USB Şarj"],
    badge: "VIP Transfer",
    featured: true,
  },
  {
    Icon: Truck,
    name: "Minivan / Panelvan",
    desc: "Aile ve grup transferleri için geniş bagaj hacimleriyle maksimum konfor.",
    passengers: "1–8 kişi",
    features: ["Klima", "Geniş Bagaj", "Grup Transfer"],
    badge: "Grup",
    featured: false,
  },
];

export default function FleetSection() {
  return (
    <section id="filo" className="section-wrapper section-wrapper--alt">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="section-header"
        >
          <div className="eyebrow mx-auto w-fit">
            <Car size={14} />
            Araç Filomuz
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white" style={{ marginBottom: "3rem" }}>
            Prestijli <span className="gradient-text">Araç Seçenekleri</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed text-lg text-center">
            Her ihtiyacınıza uygun, bakımlı ve modern araçlarla Bandırma&apos;da
            ulaşım çok daha konforlu.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {vehicles.map(({ Icon, name, desc, passengers, features, badge, featured }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className={`card-hover relative bg-zinc-950/40 border rounded-[2rem] backdrop-blur-sm flex flex-col justify-between gap-10 ${featured
                  ? "border-[#ffcc00]/25 shadow-[0_0_40px_rgba(255,204,0,0.06)]"
                  : "border-zinc-800/40"
                }`}
              style={{ padding: "3rem" }}
            >
              {featured && (
                <div className="absolute -top-4 left-8">
                  <span className="text-xs font-black text-zinc-950 bg-[#ffcc00] px-4 py-1.5 rounded-full tracking-wider uppercase shadow-lg">
                    Popüler Seçim
                  </span>
                </div>
              )}

              <div className="flex flex-col gap-6">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#ffcc00]/10 border border-[#ffcc00]/20 flex items-center justify-center">
                    <Icon size={24} className="text-[#ffcc00]" strokeWidth={1.8} />
                  </div>
                  <span className="bg-zinc-800 text-zinc-300 border border-zinc-700 text-sm px-4 py-1.5 rounded-full font-medium">
                    {badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{name}</h3>
                  <p className="text-base text-zinc-500 leading-relaxed">{desc}</p>
                </div>
              </div>

              <div className="flex flex-col gap-5 pt-2">
                <div className="flex items-center gap-3 text-base text-zinc-500">
                  <Users size={16} className="text-[#ffcc00]/70" />
                  <span>{passengers}</span>
                </div>

                <div className="divider" />

                <div className="flex flex-col gap-3">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-base text-zinc-500">
                      <CheckCircle2 size={16} className="text-[#ffcc00]/60 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
