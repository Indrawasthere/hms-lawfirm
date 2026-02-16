"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Phone,
  ArrowRight,
  Scale,
  Award,
  TrendingUp,
  MoveRight,
  ShieldCheck,
} from "lucide-react";
import Button from "../ui/button";

function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const particles: any[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, index) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 162, 39, ${p.opacity})`;
        ctx.fill();

        particles.slice(index + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(15, 23, 42, ${0.03 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-50"
    />
  );
}

export default function Hero() {
  const params = useParams();
  const locale = (params.locale as string) || "id";

  const content = {
    id: {
      badge: "Inovasi Hukum Abad 21",
      titleMain: "Navigasi Hukum",
      titleSub: "Tanpa Batas.",
      subtitle:
        "Kami menggabungkan presisi hukum konvensional dengan kecepatan eksekusi era digital. Melindungi visi Anda melalui strategi hukum yang tangguh dan adaptif.",
      ctaPrimary: "Konsultasi Strategis",
      ctaSecondary: "Eksplorasi Layanan",
      stats: [
        { v: "15+", l: "Tahun Dedikasi", icon: <Award size={16} /> },
        { v: "500+", l: "Klien Korporasi", icon: <Scale size={16} /> },
        { v: "95%", l: "Success Rate", icon: <TrendingUp size={16} /> },
      ],
      trustedBy: "DIANDALKAN OLEH PEMIMPIN INDUSTRI",
    },
    en: {
      badge: "21st Century Legal Innovation",
      titleMain: "Navigating Law",
      titleSub: "Without Borders.",
      subtitle:
        "Fusing conventional legal precision with digital-era execution speed. We safeguard your vision through resilient and adaptive legal strategies.",
      ctaPrimary: "Strategic Consultation",
      ctaSecondary: "Explore Services",
      stats: [
        { v: "15+", l: "Years Dedication", icon: <Award size={16} /> },
        { v: "500+", l: "Corporate Clients", icon: <Scale size={16} /> },
        { v: "95%", l: "Success Rate", icon: <TrendingUp size={16} /> },
      ],
      trustedBy: "TRUSTED BY INDUSTRY LEADERS",
    },
  };

  const t = content[locale as keyof typeof content];

  return (
    <section className="relative min-h-screen flex items-center bg-[#FDFDFD] overflow-hidden pt-20">
      {/* Background FX */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/5 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-navy-900/5 blur-[120px] rounded-full" />
      <AnimatedBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-[1px] w-12 bg-gold-500" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold-600">
                {t.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-navy-900 leading-[0.9] tracking-tighter mb-8"
            >
              {t.titleMain} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-900 via-navy-700 to-gold-600">
                {t.titleSub}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-navy-600/70 max-w-2xl mb-12 leading-relaxed font-light"
            >
              {t.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-5"
            >
              <Button
                onClick={() =>
                  window.open("https://wa.me/6285774968522", "_blank")
                }
                className="bg-navy-900 text-white hover:bg-gold-600 px-8 py-7 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all shadow-2xl shadow-navy-900/20"
              >
                {t.ctaPrimary}
                <MoveRight className="ml-3 w-4 h-4" />
              </Button>
              <Button
                onClick={() =>
                  (window.location.href = `/${locale}/layanan-hukum`)
                }
                className="bg-transparent border border-navy-200 text-navy-900 hover:border-navy-900 px-8 py-7 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all"
              >
                {t.ctaSecondary}
              </Button>
            </motion.div>
          </div>

          {/* Right Stats - Modern Vertical Stack */}
          <div className="lg:col-span-4 lg:border-l lg:border-navy-100 lg:pl-12">
            <div className="space-y-12">
              {t.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="group cursor-default"
                >
                  <div className="flex items-center gap-4 mb-2 text-gold-600">
                    {stat.icon}
                    <div className="h-[1px] w-0 group-hover:w-8 bg-gold-500 transition-all duration-500" />
                  </div>
                  <h3 className="text-4xl font-bold text-navy-900 tracking-tighter mb-1">
                    {stat.v}
                  </h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-400">
                    {stat.l}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 p-6 bg-navy-50 border-l-2 border-gold-500"
            >
              <ShieldCheck className="text-gold-600 mb-3" size={24} />
              <p className="text-[10px] font-bold text-navy-900 tracking-widest leading-tight">
                {t.trustedBy}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Aesthetic Border Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-navy-100 to-transparent" />
    </section>
  );
}
