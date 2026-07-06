"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Hizmet saatleriniz nelerdir?",
    a: "Bandırma Poyraz Taksi olarak haftanın 7 günü, günün 24 saati kesintisiz (gece ve gündüz dahil) olarak hizmetinizdeyiz. Dilediğiniz saatte bizi arayarak güvenle seyahat edebilirsiniz.",
  },
  {
    q: "Şehirler arası seyahat veya transfer imkanınız var mı?",
    a: "Evet, sadece Bandırma içi değil; başta Erdek, Balıkesir, Bursa, İzmir, İstanbul ve çevre iller olmak üzere Türkiye'nin her noktasına şehirler arası konforlu transfer hizmeti sunuyoruz.",
  },
  {
    q: "Fiyatlarınız nasıl belirleniyor? Sabit fiyat alabilir miyim?",
    a: "Şehir içi ulaşımlarda taksimetre tarifesi geçerlidir. Ancak şehirler arası yolculuklar, otogar/liman transferleri veya özel güzergahlar için yola çıkmadan önce bizimle iletişime geçerek net ve sabit bir fiyat teklifi alabilirsiniz.",
  },
  {
    q: "Geniş aileler veya grup transferleri için uygun aracınız var mı?",
    a: "Evet, filomuzda yer alan 1-8 yolcu kapasiteli ve geniş bagaj hacmine sahip Ford Tourneo aracımız kalabalık gruplar, aileler ve fazla bagajı olan yolcularımız için VIP konforunda hizmet vermektedir.",
  },
  {
    q: "Araçlarınızın temizliği ve bakımları ne sıklıkla yapılıyor?",
    a: "Tüm araçlarımızın periyodik mekanik bakımları ve muayeneleri zamanında yetkili servislerde yapılmaktadır. Yolcu sağlığı ve konforu için araç içi temizlik ve dezenfeksiyon işlemleri her gün düzenli olarak tekrarlanmaktadır.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="section-wrapper bg-[#09090b]">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="section-header"
          style={{ marginBottom: "3rem" }}
        >
          <div className="eyebrow mx-auto w-fit mb-4">
            <HelpCircle size={14} className="text-[#ffcc00]" />
            Sıkça Sorulan Sorular
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Merak <span className="gradient-text">Edilenler</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed text-lg text-center" style={{ marginTop: "1rem" }}>
            Bandırma Poyraz Taksi hizmetlerimiz, fiyatlandırma politikalarımız ve araçlarımız hakkında en çok sorulan soruları yanıtladık.
          </p>
        </motion.div>

        {/* FAQ Accordion Accordion */}
        <div className="flex flex-col gap-4" style={{ marginLeft: "auto", marginRight: "auto", width: "100%", maxWidth: "64rem" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className={`bg-zinc-950/40 border rounded-[2rem] overflow-hidden backdrop-blur-sm transition-all duration-300 ${
                  isOpen ? "border-[#ffcc00]/30 bg-zinc-900/10 shadow-[0_0_30px_rgba(255,204,0,0.02)]" : "border-zinc-800/40 hover:border-zinc-700/60"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between text-left outline-none"
                  style={{
                    paddingTop: "2.5rem",
                    paddingBottom: "2.5rem",
                    paddingLeft: "3.5rem",
                    paddingRight: "3.5rem",
                  }}
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] sm:text-[17px] font-bold text-white pr-4">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 border-[#ffcc00]/30 text-[#ffcc00]" : "text-zinc-400"
                  }`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div
                        className="text-zinc-400 text-[13px] sm:text-[15px] leading-relaxed border-t border-zinc-900/60"
                        style={{
                          paddingLeft: "3.5rem",
                          paddingRight: "3.5rem",
                          paddingBottom: "2.5rem",
                          paddingTop: "1.5rem",
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
