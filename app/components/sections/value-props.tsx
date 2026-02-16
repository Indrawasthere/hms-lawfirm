"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Shield, Users, Award, Clock, ArrowRight } from "lucide-react";
import Card from "../ui/card";
import Button from "../ui/button";

const icons = {
  pengalaman: Shield,
  pendekatan: Users,
  tim: Award,
  integritas: Clock,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function ValueProps() {
  const params = useParams();
  const locale = params.locale as string;

  const content = {
    id: {
      title: "Integritas, Keahlian, Dedikasi",
      subtitle: "Fondasi Pelayanan Hukum Kami",
      items: [
        {
          icon: "pengalaman",
          title: "Pengalaman Teruji",
          description:
            "Rekam jejak panjang dalam menangani kasus kompleks dengan presisi dan keberhasilan.",
        },
        {
          icon: "pendekatan",
          title: "Pendekatan Klien-Sentris",
          description:
            "Solusi hukum yang dipersonalisasi, dibangun di atas pemahaman mendalam tentang tujuan unik Anda.",
        },
        {
          icon: "tim",
          title: "Tim Ahli Berdedikasi",
          description:
            "Kumpulan advokat berintegritas tinggi dengan spesialisasi beragam siap membela hak Anda.",
        },
        {
          icon: "integritas",
          title: "Integritas Tanpa Kompromi",
          description:
            "Komitmen kami terhadap etika tertinggi dan transparansi dalam setiap aspek pelayanan hukum.",
        },
      ],
      cta: "Diskusikan Kebutuhan Hukum Anda",
    },
    en: {
      title: "Integrity, Expertise, Dedication",
      subtitle: "The Foundation of Our Legal Services",
      items: [
        {
          icon: "pengalaman",
          title: "Proven Experience",
          description:
            "Long track record in handling complex cases with precision and success.",
        },
        {
          icon: "pendekatan",
          title: "Client-Centric Approach",
          description:
            "Personalized legal solutions, built on deep understanding of your unique goals.",
        },
        {
          icon: "tim",
          title: "Dedicated Expert Team",
          description:
            "A group of highly integrity advocates with diverse specializations ready to defend your rights.",
        },
        {
          icon: "integritas",
          title: "Uncompromising Integrity",
          description:
            "Our commitment to the highest ethics and transparency in every aspect of legal services.",
        },
      ],
      cta: "Discuss Your Legal Needs",
    },
  };

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <section id="value-props" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - No animation on scroll, just fade in once */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-600 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gold-500 font-semibold mb-4">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Value Props Grid - Staggered children */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {t.items.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card variant="hover" className="text-center group h-full">
                  <motion.div
                    className="mb-4 inline-flex p-3 bg-navy-50 rounded-xl group-hover:bg-gold-50 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon className="w-8 h-8 text-navy-600 group-hover:text-gold-500 transition-colors" />
                  </motion.div>
                  <h3 className="font-serif text-xl font-semibold text-navy-600 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-navy-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA - Simple fade */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open("https://wa.me/6285774968522", "_blank")}
            className="group"
          >
            {t.cta}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
