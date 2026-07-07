"use client";

import { motion } from "framer-motion";
import { Clock, Car, Shield, Zap, BadgeCheck, Globe } from "lucide-react";
import Image from "next/image";

const features = [
  {
    Icon: Clock,
    title: "7/24 Kesintisiz Hizmet",
    desc: "Gece ya da gündüz, haftanın 7 günü 24 saat hizmetinizdeyiz. Hiçbir zaman beklemenize gerek yok.",
  },
  {
    Icon: Car,
    title: "Lüks Araç Filosu",
    desc: "Temiz, modern ve üst segmentten araçlarla seyahat edin. Konforun farkını her yolculukta hissedin.",
  },
  {
    Icon: Shield,
    title: "Güvenli & Profesyonel",
    desc: "Deneyimli ve lisanslı sürücülerimiz her yolculukta en güvenli rotayı seçer.",
  },
  {
    Icon: Zap,
    title: "Hızlı Karşılama",
    desc: "Bandırma genelinde dakikalar içinde kapınızda. Otogar ve limanda özel karşılama hizmeti.",
  },
  {
    Icon: BadgeCheck,
    title: "Şeffaf Fiyatlandırma",
    desc: "Gizli ücret yok. Güzergah öncesinde net fiyat bilgisi. Güvenilir ve dürüst hizmet anlayışı.",
  },
  {
    Icon: Globe,
    title: "Şehirlerarası Transfer",
    desc: "İstanbul, Bursa, İzmir, Çanakkale ve daha fazlası. Konforlu şehirlerarası yolculuk.",
  },
];

export default function TrustBadges() {
  return (
    <section id="hizmetler" className="relative section-wrapper overflow-hidden bg-[#09090b]">
      
      {/* ── Background: backgrounds/1.png + black overlays ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/backgrounds/1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="container relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="section-header"
        >
          <div className="eyebrow mx-auto w-fit">Neden Poyraz Taksi?</div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white" style={{ marginBottom: "3rem" }}>
            Ayrıcalıklı Hizmet <span className="gradient-text">Deneyimi</span>
          </h2>
          <p className="text-zinc-400 w-full max-w-2xl mx-auto leading-relaxed text-lg text-center block">
            Bandırma&apos;nın en güvenilir taksi hizmeti olarak, her yolculukta
            mükemmel deneyimi sunmayı taahhüt ediyoruz.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {features.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="card-hover bg-zinc-950/40 border border-zinc-800/40 rounded-3xl p-12 sm:p-14 lg:p-16 backdrop-blur-sm flex flex-col items-center text-center gap-8 min-h-[320px] justify-center"
            >
              <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                <Icon size={36} className="text-[#ffcc00]" strokeWidth={1.8} />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-base text-zinc-500 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
