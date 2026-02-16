"use client";

import { useParams } from "next/navigation";
import { MessageCircle, Mail } from "lucide-react";
import Button from "../ui/button";

export default function Hero() {
  const params = useParams();
  const locale = params.locale as string;

  const content = {
    id: {
      title: "Mitra Hukum Strategis untuk Melindungi Aset & Masa Depan Anda",
      subtitle:
        "Kami hadir dengan integritas, keahlian, dan dedikasi untuk memberikan solusi hukum terbaik bagi Anda dan bisnis Anda.",
      ctaWA: "Konsultasi via WhatsApp",
      ctaEmail: "Email Tim Hukum",
      trust: "Dipercaya oleh 100+ klien korporat & individu",
    },
    en: {
      title: "Your Strategic Legal Partner to Protect Your Assets & Future",
      subtitle:
        "We stand with integrity, expertise, and dedication to provide the best legal solutions for you and your business.",
      ctaWA: "Consult via WhatsApp",
      ctaEmail: "Email Our Legal Team",
      trust: "Trusted by 100+ corporate & individual clients",
    },
  };

  const t = content[locale as keyof typeof content] || content.id;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-50 to-white -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${"#0A1A3A"} 1px, transparent 0)`,
            backgroundSize: "40px 40px",
            opacity: 0.05,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-navy-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-navy-200 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-navy-600">{t.trust}</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy-600 leading-tight mb-6">
            {t.title}
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-navy-500 mb-8 max-w-2xl mx-auto">
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                window.open("https://wa.me/6285774968522", "_blank")
              }
              className="w-full sm:w-auto min-w-[240px] group"
            >
              <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" />
              {t.ctaWA}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                (window.location.href =
                  "mailto:advokathaerudinmuhamad@gmail.com")
              }
              className="w-full sm:w-auto min-w-[240px] group"
            >
              <Mail className="mr-2 group-hover:scale-110 transition-transform" />
              {t.ctaEmail}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-8 border-t border-navy-200">
            <div>
              <div className="font-serif text-2xl font-bold text-gold-500">
                15+
              </div>
              <div className="text-sm text-navy-500">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-gold-500">
                500+
              </div>
              <div className="text-sm text-navy-500">Kasus Terselesaikan</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-gold-500">
                100%
              </div>
              <div className="text-sm text-navy-500">Kepuasan Klien</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
