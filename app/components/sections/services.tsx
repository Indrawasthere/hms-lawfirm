"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Building2,
  Gavel,
  Home,
  Lightbulb,
  Users,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import Card from "../ui/card";
import Button from "../ui/button";

const icons = {
  korporat: Building2,
  litigasi: Gavel,
  properti: Home,
  ki: Lightbulb,
  keluarga: Users,
  ketenagakerjaan: Briefcase,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Services() {
  const params = useParams();
  const locale = params.locale as string;

  const content = {
    id: {
      title: "Spektrum Layanan Hukum Komprehensif",
      subtitle: "Solusi hukum strategis untuk setiap kebutuhan Anda",
      items: [
        {
          icon: "korporat",
          title: "Hukum Korporat",
          description:
            "Pendampingan 360° untuk bisnis Anda, mulai dari pendirian perusahaan, M&A, kepatuhan regulasi, hingga kontrak dagang.",
          features: [
            "Pendirian PT",
            "Merger & Akuisisi",
            "Kepatuhan Regulasi",
            "Kontrak Dagang",
          ],
        },
        {
          icon: "litigasi",
          title: "Litigasi & Arbitrase",
          description:
            "Representasi kuat dalam sengketa perdata, pidana, dan komersial, baik di pengadilan maupun jalur arbitrase.",
          features: [
            "Sengketa Perdata",
            "Sengketa Pidana",
            "Arbitrase",
            "Mediasi",
          ],
        },
        {
          icon: "properti",
          title: "Real Estat & Properti",
          description:
            "Nasihat hukum komprehensif untuk transaksi properti, sengketa lahan, dan pengembangan real estat.",
          features: [
            "Transaksi Properti",
            "Sengketa Lahan",
            "AJB/PPAT",
            "Pengembangan Real Estat",
          ],
        },
        {
          icon: "ki",
          title: "Kekayaan Intelektual",
          description:
            "Perlindungan aset tak berwujud Anda: merek dagang, hak cipta, paten, dan rahasia dagang.",
          features: ["Merek Dagang", "Hak Cipta", "Paten", "Rahasia Dagang"],
        },
        {
          icon: "keluarga",
          title: "Hukum Keluarga & Waris",
          description:
            "Pendekatan empatik dan solusi hukum yang adil untuk isu pernikahan, perceraian, dan warisan.",
          features: ["Pernikahan", "Perceraian", "Warisan", "Perwalian Anak"],
        },
        {
          icon: "ketenagakerjaan",
          title: "Hukum Ketenagakerjaan",
          description:
            "Mediasi dan penyelesaian sengketa, penyusunan kontrak, serta kepatuhan regulasi ketenagakerjaan.",
          features: [
            "Kontrak Kerja",
            "PHK",
            "Sengketa Buruh",
            "BPJS Ketenagakerjaan",
          ],
        },
      ],
      cta: "Konsultasi Sekarang",
    },
    en: {
      title: "Comprehensive Legal Services",
      subtitle: "Strategic legal solutions for every your need",
      items: [
        {
          icon: "korporat",
          title: "Corporate Law",
          description:
            "360° legal assistance for your business, from company incorporation, M&A, regulatory compliance, to commercial contracts.",
          features: [
            "Company Setup",
            "M&A",
            "Compliance",
            "Commercial Contracts",
          ],
        },
        {
          icon: "litigasi",
          title: "Litigation & Arbitration",
          description:
            "Strong representation in civil, criminal, and commercial disputes.",
          features: [
            "Civil Disputes",
            "Criminal Cases",
            "Arbitration",
            "Mediation",
          ],
        },
        {
          icon: "properti",
          title: "Real Estate & Property",
          description:
            "Comprehensive legal advice for property transactions and land disputes.",
          features: [
            "Property Transactions",
            "Land Disputes",
            "Notary Services",
            "Development",
          ],
        },
        {
          icon: "ki",
          title: "Intellectual Property",
          description:
            "Protection of your intangible assets: trademarks, copyrights, patents.",
          features: ["Trademarks", "Copyrights", "Patents", "Trade Secrets"],
        },
        {
          icon: "keluarga",
          title: "Family & Inheritance Law",
          description:
            "Empathetic approach and fair legal solutions for family issues.",
          features: ["Marriage", "Divorce", "Inheritance", "Child Custody"],
        },
        {
          icon: "ketenagakerjaan",
          title: "Employment Law",
          description:
            "Mediation and dispute resolution, contract drafting, and compliance.",
          features: [
            "Employment Contracts",
            "Termination",
            "Disputes",
            "Compliance",
          ],
        },
      ],
      cta: "Consult Now",
    },
  };

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <section className="py-20 md:py-28 bg-navy-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-600 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-navy-500">{t.subtitle}</p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {t.items.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card variant="hover" className="group h-full flex flex-col">
                  <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                      <Icon className="w-7 h-7 text-gold-500 group-hover:text-white transition-colors" />
                    </div>
                  </motion.div>

                  <h3 className="font-serif text-xl font-semibold text-navy-600 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-navy-500 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.span
                        key={idx}
                        className="text-xs bg-navy-100 text-navy-600 px-2 py-1 rounded-full"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "#C9A227",
                          color: "#fff",
                        }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        window.open("https://wa.me/6285774968522", "_blank")
                      }
                      className="w-full group"
                    >
                      {t.cta}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
