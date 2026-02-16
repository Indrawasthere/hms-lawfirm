"use client";

import { Metadata } from "next";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Container from "@/app/components/ui/container";
import Card from "@/app/components/ui/card";
import Button from "@/app/components/ui/button";
import AnimatedSection from "@/app/components/ui/animated-section";
import {
  Building2,
  Gavel,
  Home,
  Lightbulb,
  Users,
  Briefcase,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

//export async function generateMetadata({
//  params: { locale },
//}: {
//  params: { locale: string };
//}): Promise<Metadata> {
//  const titles = {
//    id: "Layanan Hukum Profesional | HMP Lawfirm",
//    en: "Professional Legal Services | HMP Lawfirm",
//  };
//
//  const descriptions = {
//    id: "Jelajahi layanan hukum komprehensif kami: Hukum Korporat, Litigasi, Properti, Kekayaan Intelektual, dan lainnya.",
//    en: "Explore our comprehensive legal services: Corporate Law, Litigation, Property, Intellectual Property, and more.",
//  };
//
//  return {
//    title: titles[locale as keyof typeof titles] || titles.id,
//    description:
//      descriptions[locale as keyof typeof descriptions] || descriptions.id,
//  };
//}

const servicesData = {
  id: [
    {
      id: "korporat",
      icon: Building2,
      title: "Hukum Korporat",
      description:
        "Pendampingan 360° untuk bisnis Anda, mulai dari pendirian perusahaan, M&A, kepatuhan regulasi, hingga kontrak dagang.",
      features: [
        "Pendirian PT & Badan Usaha",
        "Merger & Akuisisi",
        "Kepatuhan Regulasi",
        "Kontrak Dagang & Perjanjian",
        "Restrukturisasi Perusahaan",
        "Due Diligence",
      ],
      price: "Konsultasi Awal Gratis",
    },
    {
      id: "litigasi",
      icon: Gavel,
      title: "Litigasi & Arbitrase",
      description:
        "Representasi kuat dalam sengketa perdata, pidana, dan komersial, baik di pengadilan maupun jalur arbitrase.",
      features: [
        "Sengketa Perdata",
        "Sengketa Pidana",
        "Arbitrase BANI",
        "Mediasi & Negosiasi",
        "Kasuasi",
        "Eksekusi Putusan",
      ],
      price: "Konsultasi Awal Gratis",
    },
    {
      id: "properti",
      icon: Home,
      title: "Real Estat & Properti",
      description:
        "Nasihat hukum komprehensif untuk transaksi properti, sengketa lahan, dan pengembangan real estat.",
      features: [
        "Transaksi Jual Beli",
        "Sertifikasi & Balik Nama",
        "Sengketa Lahan",
        "PPAT & AJB",
        "Pengembangan Real Estat",
        "Sewa Menyewa",
      ],
      price: "Konsultasi Awal Gratis",
    },
    {
      id: "ki",
      icon: Lightbulb,
      title: "Kekayaan Intelektual",
      description:
        "Perlindungan aset tak berwujud Anda: merek dagang, hak cipta, paten, dan rahasia dagang.",
      features: [
        "Pendaftaran Merek",
        "Hak Cipta",
        "Paten",
        "Rahasia Dagang",
        "Lisensi & Royalti",
        "Sengketa KI",
      ],
      price: "Konsultasi Awal Gratis",
    },
    {
      id: "keluarga",
      icon: Users,
      title: "Hukum Keluarga & Waris",
      description:
        "Pendekatan empatik dan solusi hukum yang adil untuk isu pernikahan, perceraian, dan warisan.",
      features: [
        "Perkawinan & Perceraian",
        "Pembagian Waris",
        "Wasiat & Hibah",
        "Perwalian Anak",
        "Harta Gono-gini",
        "Adopsi",
      ],
      price: "Konsultasi Awal Gratis",
    },
    {
      id: "ketenagakerjaan",
      icon: Briefcase,
      title: "Hukum Ketenagakerjaan",
      description:
        "Mediasi dan penyelesaian sengketa, penyusunan kontrak, serta kepatuhan regulasi ketenagakerjaan.",
      features: [
        "Kontrak Kerja",
        "PKWT & PKWTT",
        "PHK & Pesangon",
        "Sengketa Buruh",
        "BPJS Ketenagakerjaan",
        "Peraturan Perusahaan",
      ],
      price: "Konsultasi Awal Gratis",
    },
  ],
  en: [
    {
      id: "korporat",
      icon: Building2,
      title: "Corporate Law",
      description:
        "360° legal assistance for your business, from company incorporation, M&A, regulatory compliance, to commercial contracts.",
      features: [
        "Company Establishment",
        "Mergers & Acquisitions",
        "Regulatory Compliance",
        "Commercial Contracts",
        "Corporate Restructuring",
        "Due Diligence",
      ],
      price: "Free Initial Consultation",
    },
    {
      id: "litigasi",
      icon: Gavel,
      title: "Litigation & Arbitration",
      description:
        "Strong representation in civil, criminal, and commercial disputes, both in court and arbitration.",
      features: [
        "Civil Disputes",
        "Criminal Cases",
        "Arbitration",
        "Mediation",
        "Appeals",
        "Judgment Execution",
      ],
      price: "Free Initial Consultation",
    },
    {
      id: "properti",
      icon: Home,
      title: "Real Estate & Property",
      description:
        "Comprehensive legal advice for property transactions, land disputes, and real estate development.",
      features: [
        "Sale & Purchase",
        "Certification",
        "Land Disputes",
        "Notary Services",
        "Real Estate Development",
        "Lease Agreements",
      ],
      price: "Free Initial Consultation",
    },
    {
      id: "ki",
      icon: Lightbulb,
      title: "Intellectual Property",
      description:
        "Protection of your intangible assets: trademarks, copyrights, patents, and trade secrets.",
      features: [
        "Trademark Registration",
        "Copyrights",
        "Patents",
        "Trade Secrets",
        "Licensing",
        "IP Disputes",
      ],
      price: "Free Initial Consultation",
    },
    {
      id: "keluarga",
      icon: Users,
      title: "Family & Inheritance Law",
      description:
        "Empathetic approach and fair legal solutions for marriage, divorce, and inheritance issues.",
      features: [
        "Marriage & Divorce",
        "Inheritance",
        "Wills & Trusts",
        "Child Custody",
        "Matrimonial Property",
        "Adoption",
      ],
      price: "Free Initial Consultation",
    },
    {
      id: "ketenagakerjaan",
      icon: Briefcase,
      title: "Employment Law",
      description:
        "Mediation and dispute resolution, contract drafting, and employment regulatory compliance.",
      features: [
        "Employment Contracts",
        "Termination",
        "Severance",
        "Labor Disputes",
        "Social Security",
        "Company Regulations",
      ],
      price: "Free Initial Consultation",
    },
  ],
};

// Animation variants untuk services cards
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
  hidden: { opacity: 0, y: 20 },
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

export default function LayananHukumPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const services =
    servicesData[locale as keyof typeof servicesData] || servicesData.id;

  const pageText = {
    id: {
      title: "Layanan Hukum",
      subtitle: "Solusi Hukum Komprehensif untuk Kebutuhan Anda",
      ourServices: "Layanan Kami",
      whyChoose: "Mengapa Memilih Kami",
      benefits: [
        "Tim Advokat Berpengalaman",
        "Pendekatan Personal",
        "Biaya Transparan",
        "Konsultasi Awal Gratis",
      ],
      cta: "Konsultasi Sekarang",
    },
    en: {
      title: "Legal Services",
      subtitle: "Comprehensive Legal Solutions for Your Needs",
      ourServices: "Our Services",
      whyChoose: "Why Choose Us",
      benefits: [
        "Experienced Legal Team",
        "Personal Approach",
        "Transparent Fees",
        "Free Initial Consultation",
      ],
      cta: "Consult Now",
    },
  };

  const t = pageText[locale as keyof typeof pageText] || pageText.id;

  return (
    <>
      {/* ===== HERO SECTION - NAVY ===== */}
      <section className="bg-navy-900 text-white pt-40 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        {/* Background Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Decorative Elements */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-20 -right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        />

        <Container className="relative z-10 text-center">
          <AnimatedSection animation="fadeIn" delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t.title}
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={0.3}>
            <p className="text-xl text-navy-100 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* ===== SERVICES LIST ===== */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <AnimatedSection animation="fadeIn" delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-600 mb-12 text-center">
              {t.ourServices}
            </h2>
          </AnimatedSection>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <Card variant="hover" className="p-6 md:p-8 group">
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Left - Icon & Title */}
                      <div className="md:col-span-1">
                        <div className="flex items-center gap-4">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300"
                          >
                            <Icon className="w-7 h-7 text-gold-600 group-hover:text-white transition-colors duration-300" />
                          </motion.div>
                          <div>
                            <h3 className="font-serif text-xl font-semibold text-navy-600">
                              {service.title}
                            </h3>
                            <p className="text-sm text-gold-500">
                              {service.price}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Middle - Description & Features */}
                      <div className="md:col-span-1">
                        <p className="text-navy-500 text-sm mb-4">
                          {service.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.slice(0, 4).map((feature, fidx) => (
                            <motion.div
                              key={fidx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + fidx * 0.05 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                              <span className="text-xs text-navy-500">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Right - CTA */}
                      <div className="md:col-span-1 flex flex-col items-end justify-center">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link href={`/${locale}/layanan-hukum/${service.id}`}>
                            <Button variant="primary" size="sm">
                              {t.cta}
                              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </motion.div>
                        <p className="text-xs text-navy-400 mt-2">
                          {service.features.length} layanan tersedia
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="py-16 bg-navy-50">
        <Container>
          <AnimatedSection animation="fadeIn" delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-600 mb-12 text-center">
              {t.whyChoose}
            </h2>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {t.benefits.map((benefit, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="text-center p-6 group hover:shadow-xl transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-600 transition-colors"
                  >
                    <CheckCircle className="w-7 h-7 text-white" />
                  </motion.div>
                  <p className="text-sm font-medium text-navy-600">{benefit}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ===== CTA BOTTOM SECTION ===== */}
      <section className="py-16 bg-white">
        <Container>
          <AnimatedSection animation="scaleIn" delay={0.2}>
            <Card className="text-center p-8 md:p-12 bg-gradient-to-br from-navy-50 to-white border-navy-200">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy-600 mb-4">
                {locale === "id"
                  ? "Siap Memulai Konsultasi Hukum?"
                  : "Ready to Start Legal Consultation?"}
              </h3>
              <p className="text-navy-500 mb-6 max-w-2xl mx-auto">
                {locale === "id"
                  ? "Tim ahli kami siap membantu Anda dengan layanan hukum terbaik dan konsultasi awal gratis."
                  : "Our expert team is ready to help you with the best legal services and free initial consultation."}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() =>
                    window.open("https://wa.me/6285774968522", "_blank")
                  }
                >
                  {locale === "id" ? "Konsultasi Gratis" : "Free Consultation"}
                </Button>
              </motion.div>
            </Card>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
