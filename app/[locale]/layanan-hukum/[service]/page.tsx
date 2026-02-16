"use client";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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
  CheckCircle,
  ArrowLeft,
  MessageCircle,
  Mail,
  Clock,
  Shield,
} from "lucide-react";

const serviceDetails = {
  id: {
    korporat: {
      title: "Hukum Korporat",
      icon: Building2,
      description:
        "Layanan hukum korporat komprehensif untuk mendukung pertumbuhan dan kepatuhan bisnis Anda.",
      longDescription:
        "Tim hukum korporat kami memberikan pendampingan menyeluruh untuk semua aspek hukum bisnis Anda. Dengan pengalaman menangani berbagai perusahaan dari berbagai skala, kami memastikan setiap transaksi dan keputusan bisnis Anda memiliki landasan hukum yang kuat.",
      features: [
        "Pendirian PT, CV, dan Badan Usaha Lainnya",
        "Merger & Akuisisi (M&A)",
        "Kepatuhan Regulasi Perusahaan",
        "Penyusunan & Review Kontrak Dagang",
        "Restrukturisasi Perusahaan",
        "Due Diligence Hukum",
        "Pendampingan RUPS",
        "Perizinan Usaha & NIB",
      ],
      process: [
        "Konsultasi Awal (Gratis)",
        "Analisis Kebutuhan",
        "Penyusunan Strategi",
        "Eksekusi & Pendampingan",
        "Evaluasi & Monitoring",
      ],
      faq: [
        {
          q: "Berapa lama proses pendirian PT?",
          a: "Proses pendirian PT umumnya memakan waktu 2-4 minggu tergantung kelengkapan dokumen.",
        },
        {
          q: "Apakah konsultasi awal benar-benar gratis?",
          a: "Ya, kami memberikan konsultasi awal gratis selama 30 menit untuk memahami kebutuhan Anda.",
        },
      ],
    },
    litigasi: {
      title: "Litigasi & Arbitrase",
      icon: Gavel,
      description:
        "Representasi hukum yang kuat dalam penyelesaian sengketa di pengadilan maupun di luar pengadilan.",
      longDescription:
        "Tim litigasi kami memiliki pengalaman luas dalam menangani berbagai jenis sengketa, mulai dari kasus perdata, pidana, hingga komersial. Kami berkomitmen untuk melindungi kepentingan klien dengan strategi hukum yang tepat dan efektif.",
      features: [
        "Sengketa Perdata",
        "Sengketa Pidana",
        "Sengketa Komersial",
        "Arbitrase (BANI)",
        "Mediasi & Negosiasi",
        "Kasuasi ke Mahkamah Agung",
        "Eksekusi Putusan",
        "Gugatan Sederhana",
      ],
      process: [
        "Konsultasi Awal",
        "Analisis Kasus",
        "Penyusunan Strategi",
        "Pendampingan di Pengadilan",
        "Upaya Hukum Lanjutan",
      ],
      faq: [
        {
          q: "Berapa lama proses litigasi?",
          a: "Lamanya proses bervariasi tergantung kompleksitas kasus, umumnya 3-12 bulan.",
        },
      ],
    },
    properti: {
      title: "Real Estat & Properti",
      icon: Home,
      description:
        "Nasihat hukum komprehensif untuk transaksi properti, sengketa lahan, dan pengembangan real estat.",
      longDescription:
        "Kami membantu klien dalam setiap tahap transaksi properti, dari due diligence hingga pengurusan sertifikat. Tim kami berpengalaman dalam menangani berbagai jenis properti, termasuk residensial, komersial, dan industrial.",
      features: [
        "Transaksi Jual Beli Properti",
        "Sertifikasi & Balik Nama",
        "Sengketa Lahan & Tanah",
        "PPAT & AJB",
        "Pengembangan Real Estat",
        "Sewa Menyewa",
        "Due Diligence Properti",
        "Perjanjian Pengikatan",
      ],
      process: [
        "Konsultasi",
        "Verifikasi Dokumen",
        "Due Diligence",
        "Penyusunan Perjanjian",
        "Proses di PPAT/BPN",
      ],
      faq: [
        {
          q: "Apa itu due diligence properti?",
          a: "Due diligence adalah proses pemeriksaan legalitas dokumen dan fisik properti sebelum transaksi.",
        },
      ],
    },
    ki: {
      title: "Kekayaan Intelektual",
      icon: Lightbulb,
      description:
        "Perlindungan aset tak berwujud Anda melalui pendaftaran dan penegakan hak kekayaan intelektual.",
      longDescription:
        "Kami membantu melindungi inovasi dan karya kreatif Anda melalui pendaftaran merek, hak cipta, paten, dan desain industri. Tim kami juga berpengalaman dalam menangani sengketa KI dan pelanggaran hak cipta.",
      features: [
        "Pendaftaran Merek",
        "Hak Cipta",
        "Paten",
        "Desain Industri",
        "Rahasia Dagang",
        "Lisensi & Royalti",
        "Sengketa KI",
        "Monitoring Pelanggaran",
      ],
      process: [
        "Konsultasi",
        "Search & Clearance",
        "Pendaftaran",
        "Monitoring",
        "Penegakan Hak",
      ],
      faq: [
        {
          q: "Berapa lama proses pendaftaran merek?",
          a: "Proses pendaftaran merek di DJKI umumnya 12-18 bulan.",
        },
      ],
    },
    keluarga: {
      title: "Hukum Keluarga & Waris",
      icon: Users,
      description:
        "Pendampingan hukum dengan pendekatan empatik untuk masalah keluarga dan pewarisan.",
      longDescription:
        "Kami memahami bahwa masalah keluarga adalah hal yang sensitif. Tim kami memberikan pendampingan dengan penuh empati sambil tetap profesional untuk mencapai solusi terbaik bagi semua pihak.",
      features: [
        "Perkawinan & Perceraian",
        "Pembagian Waris",
        "Wasiat & Hibah",
        "Perwalian Anak",
        "Harta Gono-gini",
        "Adopsi Anak",
        "Itsbat Nikah",
        "Mediasi Keluarga",
      ],
      process: [
        "Konsultasi",
        "Mediasi",
        "Penyusunan Dokumen",
        "Pendampingan di Pengadilan",
        "Eksekusi",
      ],
      faq: [
        {
          q: "Apakah bisa mengurus perceraian tanpa ke pengadilan?",
          a: "Untuk yang beragama Islam, perceraian harus melalui Pengadilan Agama. Untuk non-Islam melalui Pengadilan Negeri.",
        },
      ],
    },
    ketenagakerjaan: {
      title: "Hukum Ketenagakerjaan",
      icon: Briefcase,
      description:
        "Solusi hukum untuk hubungan industrial, kontrak kerja, dan kepatuhan ketenagakerjaan.",
      longDescription:
        "Kami membantu perusahaan dan pekerja dalam menavigasi kompleksitas hukum ketenagakerjaan. Dari penyusunan kontrak hingga penyelesaian sengketa, kami memastikan kepatuhan terhadap peraturan yang berlaku.",
      features: [
        "Kontrak Kerja (PKWT/PKWTT)",
        "Peraturan Perusahaan",
        "PHK & Pesangon",
        "Sengketa Hubungan Industrial",
        "BPJS Ketenagakerjaan",
        "Outsourcing",
        "Serikat Pekerja",
        "Mediasi di Dinas Tenaga Kerja",
      ],
      process: [
        "Konsultasi",
        "Audit Ketenagakerjaan",
        "Penyusunan Dokumen",
        "Mediasi",
        "Litigasi (jika diperlukan)",
      ],
      faq: [
        {
          q: "Apa perbedaan PKWT dan PKWTT?",
          a: "PKWT adalah kontrak waktu tertentu (karyawan kontrak), PKWTT adalah waktu tidak tertentu (karyawan tetap).",
        },
      ],
    },
  },
  en: {
    korporat: {
      title: "Corporate Law",
      icon: Building2,
      description:
        "Comprehensive corporate legal services to support your business growth and compliance.",
      longDescription:
        "Our corporate law team provides thorough assistance for all legal aspects of your business. With experience handling various companies of different scales, we ensure every transaction and business decision has a strong legal foundation.",
      features: [
        "Company Establishment (PT, CV)",
        "Mergers & Acquisitions",
        "Regulatory Compliance",
        "Commercial Contracts",
        "Corporate Restructuring",
        "Legal Due Diligence",
        "Shareholders Meeting",
        "Business Licenses",
      ],
      process: [
        "Initial Consultation (Free)",
        "Needs Analysis",
        "Strategy Formulation",
        "Execution & Assistance",
        "Evaluation & Monitoring",
      ],
      faq: [
        {
          q: "How long does company establishment take?",
          a: "Company establishment typically takes 2-4 weeks depending on document completeness.",
        },
        {
          q: "Is initial consultation really free?",
          a: "Yes, we provide free 30-minute initial consultation to understand your needs.",
        },
      ],
    },
    litigasi: {
      title: "Litigation & Arbitration",
      icon: Gavel,
      description:
        "Strong legal representation in dispute resolution both in court and out of court.",
      longDescription:
        "Our litigation team has extensive experience handling various types of disputes, from civil, criminal, to commercial cases. We are committed to protecting client interests with appropriate and effective legal strategies.",
      features: [
        "Civil Disputes",
        "Criminal Cases",
        "Commercial Disputes",
        "Arbitration",
        "Mediation",
        "Appeals",
        "Judgment Execution",
        "Small Claims Court",
      ],
      process: [
        "Initial Consultation",
        "Case Analysis",
        "Strategy Formulation",
        "Court Assistance",
        "Further Legal Remedies",
      ],
      faq: [
        {
          q: "How long does litigation take?",
          a: "The duration varies depending on case complexity, generally 3-12 months.",
        },
      ],
    },
  },
};

//// Metadata tetap bisa di-export meskipun pake "use client"
//export async function generateMetadata({
//  params,
//}: {
//  params: { locale: string; service: string };
//}): Promise<Metadata> {
//  const serviceData =
//    serviceDetails[params.locale as keyof typeof serviceDetails]?.[
//      params.service as keyof typeof serviceDetails.id
//    ];
//
//  if (!serviceData) {
//    return {
//      title: "Service Not Found",
//    };
//  }
//
//  return {
//    title: `${serviceData.title} | HMP Lawfirm`,
//    description: serviceData.description,
//  };
//}

// Animation variants
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

export default function ServiceDetailPage({
  params,
}: {
  params: { locale: string; service: string };
}) {
  const { locale, service } = params;
  const serviceData =
    serviceDetails[locale as keyof typeof serviceDetails]?.[
      service as keyof typeof serviceDetails.id
    ];

  if (!serviceData) {
    notFound();
  }

  const Icon = serviceData.icon;
  const t = {
    back: locale === "id" ? "Kembali ke Layanan" : "Back to Services",
    overview: locale === "id" ? "Gambaran Umum" : "Overview",
    features: locale === "id" ? "Layanan yang Tersedia" : "Available Services",
    process: locale === "id" ? "Proses Penanganan" : "Handling Process",
    faq: locale === "id" ? "Pertanyaan Umum" : "Frequently Asked Questions",
    consultation: locale === "id" ? "Konsultasi Gratis" : "Free Consultation",
    email: locale === "id" ? "Email Tim Hukum" : "Email Legal Team",
    guarantee: locale === "id" ? "Garansi Layanan" : "Service Guarantee",
    guaranteeText:
      locale === "id"
        ? "Konsultasi awal gratis 30 menit. Biaya transparan tanpa biaya tersembunyi."
        : "Free 30-minute initial consultation. Transparent fees with no hidden costs.",
  };

  return (
    <>
      {/* ===== HERO SECTION - NAVY ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-navy-900 pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden"
      >
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

        <Container>
          {/* Back Link */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href={`/${locale}/layanan-hukum`}
              className="text-navy-300 hover:text-gold-400 inline-flex items-center gap-2 mb-8 transition-colors group"
            >
              <motion.div
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowLeft size={18} />
              </motion.div>
              {t.back}
            </Link>
          </motion.div>
        </Container>
      </motion.section>

      {/* ===== TITLE SECTION ===== */}
      <section className="py-12 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 mb-6"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center"
            >
              <Icon className="w-8 h-8 text-gold-600" />
            </motion.div>
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy-600">
                {serviceData.title}
              </h1>
              <p className="text-navy-500">{serviceData.description}</p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-12 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Overview */}
              <motion.div variants={itemVariants}>
                <Card>
                  <h2 className="font-serif text-2xl font-semibold text-navy-600 mb-4">
                    {t.overview}
                  </h2>
                  <p className="text-navy-500 leading-relaxed">
                    {serviceData.longDescription}
                  </p>
                </Card>
              </motion.div>

              {/* Features */}
              <motion.div variants={itemVariants}>
                <Card>
                  <h2 className="font-serif text-2xl font-semibold text-navy-600 mb-4">
                    {t.features}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {serviceData.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                        <span className="text-navy-500 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Process */}
              <motion.div variants={itemVariants}>
                <Card>
                  <h2 className="font-serif text-2xl font-semibold text-navy-600 mb-4">
                    {t.process}
                  </h2>
                  <div className="space-y-4">
                    {serviceData.process.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                        >
                          {idx + 1}
                        </motion.div>
                        <div>
                          <p className="text-navy-600 font-medium">{step}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* FAQ */}
              <motion.div variants={itemVariants}>
                <Card>
                  <h2 className="font-serif text-2xl font-semibold text-navy-600 mb-4">
                    {t.faq}
                  </h2>
                  <div className="space-y-4">
                    {serviceData.faq.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        className="border-b border-navy-100 pb-4 last:border-0"
                      >
                        <p className="font-medium text-navy-600 mb-2">
                          {item.q}
                        </p>
                        <p className="text-navy-500 text-sm">{item.a}</p>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            {/* Right Column - CTA (Sticky) */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-gold-50 border-gold-200 sticky top-24">
                <h3 className="font-serif text-xl font-semibold text-navy-600 mb-4">
                  {t.consultation}
                </h3>
                <p className="text-sm text-navy-500 mb-6">{t.guaranteeText}</p>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="primary"
                      fullWidth
                      onClick={() =>
                        window.open("https://wa.me/6285774968522", "_blank")
                      }
                    >
                      <MessageCircle className="mr-2 w-4 h-4" />
                      {t.consultation}
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="secondary"
                      fullWidth
                      onClick={() =>
                        (window.location.href =
                          "mailto:advokathaerudinmuhamad@gmail.com")
                      }
                    >
                      <Mail className="mr-2 w-4 h-4" />
                      {t.email}
                    </Button>
                  </motion.div>
                </div>

                {/* Quick Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 pt-6 border-t border-gold-200"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3"
                  >
                    <Clock className="w-4 h-4 text-gold-500 shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-medium text-navy-600">
                        Respon Cepat
                      </p>
                      <p className="text-xs text-navy-400">Dalam 1 jam kerja</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 mt-3"
                  >
                    <Shield className="w-4 h-4 text-gold-500 shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-medium text-navy-600">
                        Garansi
                      </p>
                      <p className="text-xs text-navy-400">
                        Konsultasi awal gratis
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
