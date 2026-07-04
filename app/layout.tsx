import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Bandırma Poyraz Taksi | Bandırma'da 7/24 Lüks Taksi Hizmeti",
  description:
    "Bandırma Poyraz Taksi ile konforlu, hızlı ve güvenli ulaşım. Bandırma Limanı, Otogar, Üniversite ve şehir içi tüm noktalar. 7/24 hizmet. +90 553 222 22 22",
  keywords:
    "Bandırma Taksi, Bandırma Otogar Taksi, Bandırma Liman Taksi, Bandırma Üniversitesi Taksi, Bandırma Transfer, Bandırma Shuttle, Bandırma Havaalanı Transfer, Bandırma İzmir Taksi, Bandırma Bursa Taksi",
  authors: [{ name: "Bandırma Poyraz Taksi" }],
  openGraph: {
    title: "Bandırma Poyraz Taksi | 7/24 Lüks Ulaşım",
    description:
      "Bandırma'da lüks ve güvenilir taksi hizmeti. Otogar, Liman, Üniversite ve şehiriçi tüm güzergahlar.",
    locale: "tr_TR",
    type: "website",
    siteName: "Bandırma Poyraz Taksi",
  },
  other: {
    "geo.region": "TR-10",
    "geo.placename": "Bandırma",
    "geo.position": "40.3506;27.9769",
    ICBM: "40.3506, 27.9769",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/bandirmapoyraztaksi/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/bandirmapoyraztaksi/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0e0e0e" />
        {/* JSON-LD Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              name: "Bandırma Poyraz Taksi",
              telephone: "+905532222222",
              address: {
                "@type": "PostalAddress",
                streetAddress: "İskele Mh.",
                addressLocality: "Bandırma",
                addressRegion: "Balıkesir",
                postalCode: "10200",
                addressCountry: "TR",
              },
              openingHours: "Mo-Su 00:00-24:00",
              priceRange: "₺₺",
              description:
                "Bandırma'da 7/24 lüks ve güvenilir taksi hizmeti. Otogar, liman, üniversite transferleri.",
              areaServed: "Bandırma",
            }),
          }}
        />
        {/* Google Translate */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="lazyOnload"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'tr',
                  includedLanguages: 'tr,en,de',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false,
                }, 'google_translate_element');
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
