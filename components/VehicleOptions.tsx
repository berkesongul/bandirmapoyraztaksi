"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Briefcase, CheckCircle2, Wind, Sparkles, Shield } from "lucide-react";

// Import vehicle images
import egeaImg from "@/app/Taksi/egea Background Removed.png";
import lineaImg from "@/app/Taksi/linea Background Removed.png";
import symbolImg from "@/app/Taksi/symbol Background Removed.png";
import courierImg from "@/app/Taksi/courier Background Removed.png";
import lodgyImg from "@/app/Taksi/lodgy Background Removed.png";

const vehicles = [
  {
    name: "Fiat Egea",
    subtitle: "Modern & Konforlu Sedan",
    image: egeaImg,
    passengers: "1-4 Yolcu",
    luggage: "2-3 Büyük Valiz",
    desc: "Şehir içi ve şehirler arası seyahatlerinizde şık tasarımı, gelişmiş süspansiyon sistemi ve geniş iç hacmiyle üst düzey konfor sunar.",
    features: ["Dijital Klima", "USB Şarj Noktası", "Geniş Diz Mesafesi", "Modern Güvenlik Sistemleri"],
    accent: "Yeni Nesil",
  },
  {
    name: "Fiat Linea",
    subtitle: "Güvenilir & Klasik Sedan",
    image: lineaImg,
    passengers: "1-4 Yolcu",
    luggage: "2-3 Büyük Valiz",
    desc: "Geniş bagaj hacmi ve konforlu koltuk yapısıyla yıllardır güvenle tercih edilen, hem ekonomik hem de son derece konforlu bir yolculuk seçeneği.",
    features: ["Klima", "Ergonomik Koltuklar", "Geniş Bagaj Hacmi", "Yumuşak Süspansiyon"],
    accent: "Ekonomik & Geniş",
  },
  {
    name: "Renault Symbol",
    subtitle: "Pratik & Bütçe Dostu Sedan",
    image: symbolImg,
    passengers: "1-4 Yolcu",
    luggage: "2 Valiz",
    desc: "Özellikle şehir içi kısa ve orta mesafeli seyahatlerinizde kıvraklığı, yakıt verimliliği ve temiz kabiniyle pratik ve konforlu bir deneyim sağlar.",
    features: ["Klima", "Temiz & Hijyenik Kabin", "Pratik Bagaj Alanı", "Şehir İçi Kolaylık"],
    accent: "Bütçe Dostu",
  },
  {
    name: "Ford Courier",
    subtitle: "Pratik & Bagaj Dostu Kombi",
    image: courierImg,
    passengers: "1-4 Yolcu",
    luggage: "3-4 Valiz",
    desc: "Geniş bagaj hacmi, yüksek tavan yapısı ve konforlu binek sürüş özellikleri ile hem yolcularımız hem de eşyaları için ideal, pratik ve ekonomik bir seyahat alternatifi.",
    features: ["Klima", "Geniş Bagaj Hacmi", "Yüksek Tavan Konforu", "Yakıt Verimliliği"],
    accent: "Pratik & Geniş Kombi",
  },
  {
    name: "Dacia Lodgy",
    subtitle: "Geniş Aile & Bagaj Dostu MPV",
    image: lodgyImg,
    passengers: "1-6 Yolcu",
    luggage: "4-5 Büyük Valiz",
    desc: "Geniş aileler ve kalabalık seyahat grupları için ideal olan, yüksek konforu ve 7 kişilik geniş yapısıyla bagaj dostu MPV aracımız.",
    features: ["Klima", "7 Koltuk Seçeneği", "Yüksek Tavan & Hacim", "Geniş Diz Mesafesi"],
    accent: "Geniş Aile & MPV",
  },
];

export default function VehicleOptions() {
  return (
    <section id="araclar" className="section-wrapper bg-[#0a0a0c]">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="section-header"
          style={{ marginBottom: "1.5rem" }}
        >
          <div className="eyebrow mx-auto w-fit mb-4">
            <Sparkles size={14} className="text-[#ffcc00]" />
            Araç Filomuz
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white" style={{ marginBottom: "1.5rem" }}>
            Araç <span className="gradient-text">Seçeneklerimiz</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed text-lg text-center">
            Sizler için özenle seçilmiş, tüm bakımları düzenli yapılan ve hijyen kurallarına 
            uygun 5 farklı araç seçeneğimiz ile her seyahat ihtiyacınıza cevap veriyoruz.
          </p>
        </motion.div>

        {/* Vehicles List */}
        <div className="flex flex-col gap-16 sm:gap-24">
          {vehicles.map((v, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center bg-zinc-950/30 border border-zinc-800/40 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 backdrop-blur-sm"
              >
                {/* Vehicle Image (Responsive Left / Right layout on desktop) */}
                <div
                  className={`lg:col-span-6 flex justify-center items-center relative rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950/10 border border-zinc-800/20 group p-4 sm:p-6 ${
                    isEven ? "lg:order-first" : "lg:order-last"
                  }`}
                >
                  <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[340px] flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
                    <Image
                      src={v.image}
                      alt={v.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter brightness-95 group-hover:brightness-100 transition-all"
                      priority={i < 2}
                    />
                  </div>
                </div>

                {/* Vehicle Specifications */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="bg-[#ffcc00]/10 text-[#ffcc00] border border-[#ffcc00]/25 text-xs font-semibold px-3 py-1 rounded-full w-fit">
                      {v.accent}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {v.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#ffcc00] tracking-wider uppercase">
                      {v.subtitle}
                    </p>
                  </div>

                  <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                    {v.desc}
                  </p>

                  {/* Core details */}
                  <div className="grid grid-cols-2 gap-4 bg-zinc-900/40 border border-zinc-800/30 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-800/50 flex items-center justify-center flex-shrink-0">
                        <Users size={18} className="text-[#ffcc00]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Kapasite</span>
                        <span className="text-sm font-semibold text-zinc-300">{v.passengers}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-800/50 flex items-center justify-center flex-shrink-0">
                        <Briefcase size={18} className="text-[#ffcc00]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Bagaj</span>
                        <span className="text-sm font-semibold text-zinc-300">{v.luggage}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Öne Çıkan Özellikler</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {v.features.map((f) => (
                        <div key={f} className="flex items-center gap-2.5 text-zinc-400 text-sm">
                          <CheckCircle2 size={16} className="text-[#ffcc00] flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
