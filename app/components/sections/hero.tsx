"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import Button from "../ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0.3,
    },
  },
};

export default function Hero() {
  const params = useParams();
  const locale = params.locale as string;

  const content = {
    id: {
      badge: "Dipercaya oleh 100+ klien korporat & individu",
      title: "Mendefinisikan Keadilan, Melindungi Masa Depan Anda",
      subtitle:
        "HMP Lawfirm: Mitra Hukum Terpercaya Anda untuk Solusi Strategis dan Hasil Optimal.",
      ctaWA: "Konsultasi via WhatsApp",
      ctaEmail: "Email Tim Hukum",
      stats: {
        years: "Tahun Pengalaman",
        cases: "Kasus Terselesaikan",
        satisfaction: "Kepuasan Klien",
      },
      learnMore: "Pelajari Lebih Lanjut",
    },
    en: {
      badge: "Trusted by 100+ corporate & individual clients",
      title: "Defining Justice, Protecting Your Future",
      subtitle:
        "HMP Lawfirm: Your Trusted Legal Partner for Strategic Solutions and Optimal Results.",
      ctaWA: "Consult via WhatsApp",
      ctaEmail: "Email Our Legal Team",
      stats: {
        years: "Years Experience",
        cases: "Cases Resolved",
        satisfaction: "Client Satisfaction",
      },
      learnMore: "Learn More",
    },
  };

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-navy-50 via-white to-gold-50/30">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #0A1A3A 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <motion.div
        className="absolute top-20 -right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-navy-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-navy-200 rounded-full px-4 py-2 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-navy-600">
                {t.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-600 leading-tight"
            >
              {t.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-navy-500 leading-relaxed max-w-xl"
            >
              {t.subtitle}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() =>
                  window.open("https://wa.me/6285774968522", "_blank")
                }
                className="group w-full sm:w-auto"
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
                className="group w-full sm:w-auto"
              >
                <Mail className="mr-2 group-hover:scale-110 transition-transform" />
                {t.ctaEmail}
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <a
                href="#value-props"
                className="inline-flex items-center gap-2 text-navy-600 hover:text-gold-500 transition-colors group"
              >
                <span className="font-medium">{t.learnMore}</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8"
            variants={statsVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { value: "15+", label: t.stats.years },
              { value: "500+", label: t.stats.cases },
              { value: "100%", label: t.stats.satisfaction },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-navy-100"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="font-serif text-4xl font-bold text-gold-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-navy-500 font-medium">
                  {stat.label}
                </div>
                <div className="w-12 h-0.5 bg-gold-500/30 mx-auto mt-3"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
