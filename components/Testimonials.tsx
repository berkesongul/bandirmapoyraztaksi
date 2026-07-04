"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Ahmet Yılmaz", role: "Kurumsal Müşteri", rating: 5, text: "İDO'ya yetişmem gerekiyordu, 10 dakika içinde kapımda hazırdılar. Sürücü son derece profesyonel ve kibardı. Kesinlikle tavsiye ederim.", date: "Mayıs 2025" },
  { name: "Fatma Kaya", role: "Üniversite Öğrencisi", rating: 5, text: "Üniversiteden şehir merkezine düzenli olarak kullanıyorum. Her seferinde temiz araç, güler yüzlü sürücü. Fiyatlar da çok makul.", date: "Nisan 2025" },
  { name: "Mehmet Demir", role: "İş Seyahatçisi", rating: 5, text: "Bandırma'dan Bursa'ya şehirlerarası transfer kullandım. Yolculuk boyunca konfor ve güvenlik mükemmeldi. Zamanında teslim aldık.", date: "Haziran 2025" },
  { name: "Ayşe Çelik", role: "Yerel Müşteri", rating: 5, text: "Gece geç saatte arayıp taksi istedim, 15 dakika içinde geldi. 7/24 hizmet vaatlerine gerçekten sadık bir firma.", date: "Mart 2025" },
  { name: "Emre Arslan", role: "Liman Çalışanı", rating: 5, text: "Her sabah limana gidiş için Poyraz Taksi'yi tercih ediyorum. Güvenilir, dakik ve kibar. Sürücüler yolları çok iyi biliyor.", date: "Mayıs 2025" },
  { name: "Zeynep Koç", role: "Tatilci", rating: 5, text: "Erdek'e transfer istedik, çok uygun fiyatla ve kaliteli bir araçla götürdüler. Şehirlerarası transferlerde de birinci tercihim.", date: "Nisan 2025" },
];

function ReviewCard({ r }: { r: (typeof reviews)[0] }) {
  return (
    <div className="flex-shrink-0 w-[85vw] sm:w-[22rem] bg-zinc-950/40 border border-zinc-800/40 rounded-3xl flex flex-col gap-8 mx-4 sm:mx-6 backdrop-blur-sm hover:border-zinc-700/60 transition-all" style={{ padding: "2.5rem" }}>
      <div className="flex items-start justify-between">
        <Quote size={24} className="text-[#ffcc00]/30" />
        <div className="flex gap-1">
          {Array.from({ length: r.rating }).map((_, i) => (
            <Star key={i} size={16} className="star-filled" />
          ))}
        </div>
      </div>
      <p className="text-base text-zinc-400 leading-relaxed flex-1">
        &ldquo;{r.text}&rdquo;
      </p>
      <div className="flex items-center justify-between pt-5 border-t border-zinc-800/60">
        <div>
          <p className="text-base font-semibold text-white mb-1">{r.name}</p>
          <p className="text-sm text-zinc-600">{r.role}</p>
        </div>
        <p className="text-sm text-zinc-700">{r.date}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let animId: number;
    const speed = 0.55;

    const animate = () => {
      pos += speed;
      const half = track.scrollWidth / 2;
      if (pos >= half) pos = 0;
      track.style.transform = `translateX(-${pos}px)`;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    const pause = () => cancelAnimationFrame(animId);
    const resume = () => { animId = requestAnimationFrame(animate); };
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animId);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  const doubled = [...reviews, ...reviews];

  return (
    <section id="yorumlar" className="section-wrapper overflow-hidden">
      <div className="container mb-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <div className="eyebrow mx-auto w-fit mb-6">
            <Star size={10} className="fill-[#ffcc00]" />
            Müşteri Yorumları
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white" style={{ marginBottom: "1rem" }}>
            Müşterilerimiz <span className="gradient-text">Ne Diyor?</span>
          </h2>
          <p style={{ textAlign: "center", marginBottom: "1.5rem", marginLeft: "auto", marginRight: "auto", maxWidth: "30rem", display: "block" }} className="text-zinc-400 text-lg leading-relaxed">
            Yüzlerce memnun müşterimizin gerçek Google değerlendirmeleri.
          </p>
          {/* Score pill */}
          <div className="inline-flex items-center gap-7 bg-zinc-870/60 border border-zinc-700/80 rounded-2xl px-8 py-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={17} className="star-filled" />)}
            </div>
            <span className="text-2xl font-black text-white">5.0</span>
            <span className="text-sm text-zinc-500">/ 5.0 Google Puanı</span>

          </div>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#09090b] to-transparent z-50 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#09090b] to-transparent z-50 pointer-events-none" />
        <div ref={trackRef} className="flex will-change-transform" style={{ width: "max-content" }}>
          {doubled.map((r, i) => <ReviewCard key={i} r={r} />)}
        </div>
      </div>
    </section>
  );
}
