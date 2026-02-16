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
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  Briefcase,
  MessageCircle,
  Mail,
  CheckCircle,
} from "lucide-react";

const caseDetails = {
  id: {
    "sengketa-korporat-1": {
      title: "Sengketa Saham Perusahaan Keluarga",
      client: "PT. Keluarga Sejahtera",
      category: "Hukum Korporat",
      year: "2024",
      duration: "4 bulan",
      icon: Briefcase,
      challenge:
        "Klien menghadapi sengketa kepemilikan saham antara anggota keluarga yang mengancam kelangsungan bisnis. Terdapat dua kelompok yang masing-masing mengklaim kepemilikan mayoritas. Masing-masing pihak telah mengadakan RUPS sendiri dan mengangkat direksi sendiri, menyebabkan kebuntuan dalam pengelolaan perusahaan.",
      background:
        "Perusahaan keluarga ini didirikan 20 tahun lalu oleh dua bersaudara. Setelah pendiri meninggal, terjadi perbedaan interpretasi tentang pembagian saham kepada ahli waris. Masing-masing pihak mengklaim memiliki bukti kepemilikan yang sah.",
      strategy: [
        "Melakukan audit hukum menyeluruh terhadap seluruh dokumen pendirian dan perubahan perusahaan",
        "Melacak riwayat pemindahan saham dan dokumen perpajakan",
        "Memfasilitasi mediasi dengan melibatkan mediator profesional",
        "Menyusun opsi penyelesaian yang mengakomodasi kepentingan semua pihak",
        "Membantu penyusunan kembali anggaran dasar dan pembagian saham baru",
      ],
      implementation:
        "Proses mediasi dilakukan dalam 8 sesi selama 3 bulan. Kami juga melibatkan akuntan publik untuk melakukan valuasi bisnis sebagai dasar pembagian. Setiap opsi didiskusikan secara terbuka dengan mempertimbangkan aspek bisnis dan kekeluargaan.",
      outcome: [
        "Kesepakatan damai tercapai dengan pembagian saham 60:40",
        "Penyusunan kembali anggaran dasar perusahaan",
        "Pembentukan dewan keluarga untuk mencegah konflik serupa",
        "Bisnis tetap berjalan normal tanpa gangguan operasional",
        "Hubungan kekeluargaan pulih dan kedua pihak sepakat bekerja sama",
      ],
      testimonial: {
        quote:
          "Terima kasih HMP Lawfirm yang tidak hanya membantu aspek hukum, tapi juga memulihkan hubungan keluarga kami. Pendekatan humanis tapi tetap profesional.",
        name: "Direktur Utama PT. Keluarga Sejahtera",
      },
    },
    "sengketa-properti-1": {
      title: "Sengketa Lahan Proyek Perumahan",
      client: "PT. Griya Indah",
      category: "Properti",
      year: "2023",
      duration: "6 bulan",
      icon: Briefcase,
      challenge:
        "Klien digugat oleh warga sekitar terkait pembangunan proyek perumahan yang dituduh melanggar garis sempadan sungai. Proyek terancam dihentikan.",
      background:
        "Proyek perumahan seluas 5 hektar ini telah mendapatkan semua perizinan yang diperlukan. Namun warga sekitar mengklaim bahwa pembangunan melanggar garis sempadan sungai dan berpotensi menyebabkan banjir.",
      strategy: [
        "Melakukan kajian ulang terhadap IMB dan dokumen perizinan",
        "Melakukan pengukuran ulang bersama BPN",
        "Memfasilitasi dialog dengan warga dan pemerintah daerah",
        "Menyusun opsi kompensasi dan penyesuaian",
      ],
      implementation:
        "Proses mediasi dilakukan dalam 5 pertemuan dengan melibatkan Dinas PUPR dan BPN. Kami berhasil membuktikan bahwa proyek telah sesuai perizinan, namun tetap memberikan kompensasi berupa fasilitas umum untuk warga sekitar.",
      outcome: [
        "Proyek dilanjutkan dengan penyesuaian minor",
        "Pembangunan fasilitas umum untuk warga",
        "Hubungan baik dengan warga sekitar terbangun",
        "Tidak ada gugatan lanjutan",
      ],
      testimonial: {
        quote:
          "Terima kasih HMP Lawfirm yang berhasil menyelamatkan proyek kami dan membangun hubungan baik dengan warga.",
        name: "Direktur PT. Griya Indah",
      },
    },
  },
  en: {
    "sengketa-korporat-1": {
      title: "Family Company Share Dispute",
      client: "PT. Keluarga Sejahtera",
      category: "Corporate Law",
      year: "2024",
      duration: "4 months",
      icon: Briefcase,
      challenge:
        "Client faced a share ownership dispute between family members threatening business continuity. Two groups each claimed majority ownership. Each party held their own shareholders meetings and appointed their own directors, causing deadlock in company management.",
      background:
        "This family company was founded 20 years ago by two brothers. After the founder passed away, there were different interpretations about share distribution to heirs. Each party claimed to have valid ownership evidence.",
      strategy: [
        "Conducted thorough legal audit of all incorporation and amendment documents",
        "Traced share transfer history and tax documents",
        "Facilitated mediation with professional mediator",
        "Prepared settlement options accommodating all parties interests",
        "Assisted in drafting new articles of association and share distribution",
      ],
      implementation:
        "Mediation process conducted in 8 sessions over 3 months. We also involved public accountants for business valuation as distribution basis. Each option was discussed openly considering business and family aspects.",
      outcome: [
        "Amicable agreement reached with 60:40 share distribution",
        "New articles of association drafted",
        "Family council established to prevent similar conflicts",
        "Business continued normally without operational disruption",
        "Family relationships restored and both parties agreed to cooperate",
      ],
      testimonial: {
        quote:
          "Thank you HMP Lawfirm for not only helping with legal aspects, but also restoring our family relationships. Humanist yet professional approach.",
        name: "President Director of PT. Keluarga Sejahtera",
      },
    },
    "sengketa-properti-1": {
      title: "Housing Project Land Dispute",
      client: "PT. Griya Indah",
      category: "Property",
      year: "2023",
      duration: "6 months",
      icon: Briefcase,
      challenge:
        "Client was sued by local residents regarding housing project development allegedly violating river border lines. Project threatened to be stopped.",
      background:
        "This 5-hectare housing project had obtained all necessary permits. However, local residents claimed the construction violated river border lines and could potentially cause flooding.",
      strategy: [
        "Conducted review of building permits and licensing documents",
        "Re-measured with National Land Agency",
        "Facilitated dialogue with residents and local government",
        "Prepared compensation and adjustment options",
      ],
      implementation:
        "Mediation process conducted in 5 meetings involving Public Works Office and Land Agency. We successfully proved the project complied with permits, while still providing public facility compensation to residents.",
      outcome: [
        "Project continued with minor adjustments",
        "Public facilities built for residents",
        "Good relations with local community established",
        "No further lawsuits",
      ],
      testimonial: {
        quote:
          "Thank you HMP Lawfirm for saving our project and building good relations with the community.",
        name: "Director of PT. Griya Indah",
      },
    },
  },
};

//export async function generateMetadata({
//  params,
//}: {
//  params: { locale: string; caseId: string };
//}): Promise<Metadata> {
//  const caseData =
//    caseDetails[params.locale as keyof typeof caseDetails]?.[
//      params.caseId as keyof typeof caseDetails.id
//    ];
//
//  if (!caseData) {
//    return {
//      title: "Case Study Not Found",
//    };
//  }
//
//  return {
//    title: `${caseData.title} | Studi Kasus HMP Lawfirm`,
//    description: caseData.challenge.substring(0, 160),
//  };
//}
//
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

export default function CaseDetailPage({
  params,
}: {
  params: { locale: string; caseId: string };
}) {
  const { locale, caseId } = params;
  const caseData =
    caseDetails[locale as keyof typeof caseDetails]?.[
      caseId as keyof typeof caseDetails.id
    ];

  if (!caseData) {
    notFound();
  }

  const Icon = caseData.icon || Briefcase;
  const t = {
    back: locale === "id" ? "Kembali ke Studi Kasus" : "Back to Case Studies",
    client: locale === "id" ? "Klien" : "Client",
    category: locale === "id" ? "Kategori" : "Category",
    year: locale === "id" ? "Tahun" : "Year",
    duration: locale === "id" ? "Durasi" : "Duration",
    challenge: locale === "id" ? "Tantangan" : "Challenge",
    background: locale === "id" ? "Latar Belakang" : "Background",
    strategy: locale === "id" ? "Strategi Hukum" : "Legal Strategy",
    implementation: locale === "id" ? "Implementasi" : "Implementation",
    outcome: locale === "id" ? "Hasil" : "Outcome",
    testimonial: locale === "id" ? "Testimoni Klien" : "Client Testimonial",
    consultation: locale === "id" ? "Konsultasi Gratis" : "Free Consultation",
    email: locale === "id" ? "Email Tim Hukum" : "Email Legal Team",
    related: locale === "id" ? "Kasus Terkait" : "Related Cases",
  };

  return (
    <>
      {/* ===== BACK NAVIGATION ===== */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-navy-50 py-4"
      >
        <Container>
          <Link
            href={`/${locale}/studi-kasus`}
            className="inline-flex items-center gap-2 text-navy-600 hover:text-gold-500 transition-colors group"
          >
            <motion.div
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowLeft size={18} />
            </motion.div>
            {t.back}
          </Link>
        </Container>
      </motion.div>

      {/* ===== HERO SECTION - NAVY (sesuai request) ===== */}
      <section className="relative bg-navy-900 text-white pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
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
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-20 -right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-4"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center"
            >
              <Icon className="w-8 h-8 text-gold-600" />
            </motion.div>
            <div>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block text-sm font-medium text-gold-400 bg-white/10 px-3 py-1 rounded-full mb-2"
              >
                {caseData.category}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              >
                {caseData.title}
              </motion.h1>
            </div>
          </motion.div>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-6 mt-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center gap-2 text-navy-200"
            >
              <Users className="w-4 h-4" />
              <span className="text-sm">
                {t.client}: {caseData.client}
              </span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center gap-2 text-navy-200"
            >
              <Calendar className="w-4 h-4" />
              <span className="text-sm">
                {t.year}: {caseData.year}
              </span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center gap-2 text-navy-200"
            >
              <Clock className="w-4 h-4" />
              <span className="text-sm">
                {t.duration}: {caseData.duration}
              </span>
            </motion.div>
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
              {/* Challenge */}
              <motion.div variants={itemVariants}>
                <Card>
                  <h2 className="font-serif text-2xl font-semibold text-navy-600 mb-4">
                    {t.challenge}
                  </h2>
                  <p className="text-navy-500 leading-relaxed">
                    {caseData.challenge}
                  </p>
                </Card>
              </motion.div>

              {/* Background */}
              <motion.div variants={itemVariants}>
                <Card>
                  <h2 className="font-serif text-2xl font-semibold text-navy-600 mb-4">
                    {t.background}
                  </h2>
                  <p className="text-navy-500 leading-relaxed">
                    {caseData.background}
                  </p>
                </Card>
              </motion.div>

              {/* Strategy */}
              <motion.div variants={itemVariants}>
                <Card>
                  <h2 className="font-serif text-2xl font-semibold text-navy-600 mb-4">
                    {t.strategy}
                  </h2>
                  <ul className="space-y-3">
                    {caseData.strategy.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <motion.span
                          whileHover={{ scale: 1.2 }}
                          className="w-5 h-5 bg-gold-500 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5"
                        >
                          {idx + 1}
                        </motion.span>
                        <span className="text-navy-500">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </motion.div>

              {/* Implementation */}
              <motion.div variants={itemVariants}>
                <Card>
                  <h2 className="font-serif text-2xl font-semibold text-navy-600 mb-4">
                    {t.implementation}
                  </h2>
                  <p className="text-navy-500 leading-relaxed">
                    {caseData.implementation}
                  </p>
                </Card>
              </motion.div>

              {/* Outcome */}
              <motion.div variants={itemVariants}>
                <Card>
                  <h2 className="font-serif text-2xl font-semibold text-navy-600 mb-4">
                    {t.outcome}
                  </h2>
                  <ul className="space-y-2">
                    {caseData.outcome.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                        <span className="text-navy-500">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </motion.div>

              {/* Testimonial */}
              {caseData.testimonial && (
                <motion.div variants={itemVariants}>
                  <Card className="bg-gold-50 border-gold-200">
                    <h2 className="font-serif text-2xl font-semibold text-navy-600 mb-4">
                      {t.testimonial}
                    </h2>
                    <motion.blockquote
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="italic text-navy-600 mb-3"
                    >
                      "{caseData.testimonial.quote}"
                    </motion.blockquote>
                    <p className="text-sm text-navy-500">
                      — {caseData.testimonial.name}
                    </p>
                  </Card>
                </motion.div>
              )}
            </motion.div>

            {/* Right Column - CTA */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-navy-900 text-white sticky top-24">
                <h3 className="font-serif text-xl font-semibold mb-4">
                  {locale === "id"
                    ? "Butuh Bantuan Hukum Serupa?"
                    : "Need Similar Legal Help?"}
                </h3>
                <p className="text-sm text-navy-100 mb-6">
                  {locale === "id"
                    ? "Tim kami siap membantu menangani kasus Anda dengan strategi yang terbukti berhasil."
                    : "Our team is ready to handle your case with proven successful strategies."}
                </p>
                <div className="space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      fullWidth
                      onClick={() =>
                        window.open("https://wa.me/6285774968522", "_blank")
                      }
                      className="border-white text-white hover:bg-white/10"
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
                      variant="outline"
                      fullWidth
                      onClick={() =>
                        (window.location.href =
                          "mailto:advokathaerudinmuhamad@gmail.com")
                      }
                      className="border-white text-white hover:bg-white/10"
                    >
                      <Mail className="mr-2 w-4 h-4" />
                      {t.email}
                    </Button>
                  </motion.div>
                </div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 pt-6 border-t border-navy-500"
                >
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="text-2xl font-bold text-gold-400">
                        15+
                      </div>
                      <div className="text-xs text-navy-200">
                        Tahun Pengalaman
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="text-2xl font-bold text-gold-400">
                        500+
                      </div>
                      <div className="text-xs text-navy-200">
                        Kasus Terselesaikan
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
