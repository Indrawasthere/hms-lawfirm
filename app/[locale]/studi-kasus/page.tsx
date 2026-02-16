"use client";

import { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/app/components/ui/container";
import Card from "@/app/components/ui/card";
import Button from "@/app/components/ui/button";
import AnimatedSection from "@/app/components/ui/animated-section";
import { ArrowRight, Briefcase, Users, Home, Scale } from "lucide-react";

//export async function generateMetadata({
//  params: { locale },
//}: {
//  params: { locale: string };
//}): Promise<Metadata> {
//  const titles = {
//    id: "Studi Kasus | HMP Lawfirm",
//    en: "Case Studies | HMP Lawfirm",
//  };
//
//  const descriptions = {
//    id: "Lihat bagaimana kami membantu klien menyelesaikan berbagai kasus hukum dengan strategi yang tepat dan hasil optimal.",
//    en: "See how we helped clients resolve various legal cases with right strategies and optimal results.",
//  };
//
//  return {
//    title: titles[locale as keyof typeof titles] || titles.id,
//    description:
//      descriptions[locale as keyof typeof descriptions] || descriptions.id,
//  };
//}

const caseStudiesData = {
  id: [
    {
      id: "sengketa-korporat-1",
      icon: Briefcase,
      category: "Hukum Korporat",
      title: "Sengketa Saham Perusahaan Keluarga",
      client: "PT. Keluarga Sejahtera",
      challenge:
        "Klien menghadapi sengketa kepemilikan saham antara anggota keluarga yang mengancam kelangsungan bisnis. Terdapat dua kelompok yang masing-masing mengklaim kepemilikan mayoritas.",
      strategy:
        "Kami melakukan mediasi intensif selama 3 bulan, didukung dengan audit hukum atas dokumen pendirian perusahaan dan riwayat pemindahan saham. Kami juga menyusun opsi penyelesaian yang mengakomodasi kepentingan semua pihak.",
      outcome:
        "Berhasil mencapai kesepakatan damai dengan pembagian saham yang adil dan penyusunan kembali anggaran dasar perusahaan. Bisnis tetap berjalan dan hubungan keluarga pulih.",
      year: "2024",
      duration: "4 bulan",
    },
    {
      id: "sengketa-properti-1",
      icon: Home,
      category: "Properti",
      title: "Sengketa Lahan Proyek Perumahan",
      client: "PT. Griya Indah",
      challenge:
        "Klien digugat oleh warga sekitar terkait pembangunan proyek perumahan yang dituduh melanggar garis sempadan sungai. Proyek terancam dihentikan.",
      strategy:
        "Kami melakukan kajian ulang terhadap IMB dan dokumen perizinan, serta melakukan pengukuran ulang bersama BPN. Kami juga memfasilitasi dialog dengan warga dan pemerintah daerah.",
      outcome:
        "Berhasil membuktikan bahwa proyek telah sesuai perizinan. Mendapatkan rekomendasi penyesuaian dari Pemda dan proyek dilanjutkan dengan kompensasi fasilitas umum.",
      year: "2023",
      duration: "6 bulan",
    },
    {
      id: "sengketa-ketenagakerjaan-1",
      icon: Users,
      category: "Ketenagakerjaan",
      title: "PHK Massal Akibat Restrukturisasi",
      client: "PT. Manufaktur Maju",
      challenge:
        "Perusahaan harus melakukan PHK terhadap 50 karyawan akibat otomatisasi. Terjadi demo dan ancaman laporan ke Dinas Tenaga Kerja.",
      strategy:
        "Kami membantu menyusun paket pesangon yang sesuai UU, melakukan negosiasi dengan serikat pekerja, dan mendampingi proses bipartit hingga mediasi di Disnaker.",
      outcome:
        "Kesepakatan tercapai dengan paket pesangon di atas ketentuan minimal. Tidak ada gugatan ke PHI. Proses selesai dalam 2 bulan.",
      year: "2024",
      duration: "2 bulan",
    },
    {
      id: "sengketa-ki-1",
      icon: Scale,
      category: "Kekayaan Intelektual",
      title: "Pelanggaran Merek Terkenal",
      client: "PT. F&B Internasional",
      challenge:
        "Merek klien ditiru oleh kompetitor dengan modifikasi minor. Produk tiruan beredar luas dan merusak reputasi.",
      strategy:
        "Kami melakukan somasi, pengumpulan bukti, dan pendaftaran gugatan ke Pengadilan Niaga. Juga melaporkan ke aparat untuk penindakan produk palsu.",
      outcome:
        "Pengadilan memenangkan klien. Kompetitor dihukum ganti rugi dan menarik semua produk tiruan dari pasaran.",
      year: "2023",
      duration: "8 bulan",
    },
  ],
  en: [
    {
      id: "sengketa-korporat-1",
      icon: Briefcase,
      category: "Corporate Law",
      title: "Family Company Share Dispute",
      client: "PT. Keluarga Sejahtera",
      challenge:
        "Client faced a share ownership dispute between family members threatening business continuity. Two groups each claimed majority ownership.",
      strategy:
        "We conducted intensive mediation for 3 months, supported by legal audit of incorporation documents and share transfer history. We also prepared settlement options accommodating all parties interests.",
      outcome:
        "Successfully reached amicable agreement with fair share distribution and company articles revision. Business continued and family relationships restored.",
      year: "2024",
      duration: "4 months",
    },
    {
      id: "sengketa-properti-1",
      icon: Home,
      category: "Property",
      title: "Housing Project Land Dispute",
      client: "PT. Griya Indah",
      challenge:
        "Client was sued by local residents regarding housing project development allegedly violating river border lines. Project threatened to be stopped.",
      strategy:
        "We conducted a review of building permits and licensing documents, and re-measured with the National Land Agency. We also facilitated dialogue with residents and local government.",
      outcome:
        "Successfully proved that the project complied with permits. Obtained adjustment recommendations from local government and project continued with public facility compensation.",
      year: "2023",
      duration: "6 months",
    },
    {
      id: "sengketa-ketenagakerjaan-1",
      icon: Users,
      category: "Employment",
      title: "Mass Layoffs Due to Restructuring",
      client: "PT. Manufaktur Maju",
      challenge:
        "Company had to lay off 50 employees due to automation. Demonstrations occurred with threats of reports to Manpower Office.",
      strategy:
        "We helped prepare severance packages according to law, negotiated with labor unions, and assisted in bipartite process up to mediation at Manpower Office.",
      outcome:
        "Agreement reached with severance packages above minimum requirements. No lawsuit to Industrial Relations Court. Process completed in 2 months.",
      year: "2024",
      duration: "2 months",
    },
    {
      id: "sengketa-ki-1",
      icon: Scale,
      category: "Intellectual Property",
      title: "Famous Trademark Infringement",
      client: "PT. F&B Internasional",
      challenge:
        "Client's trademark was imitated by competitor with minor modifications. Counterfeit products widely circulated and damaged reputation.",
      strategy:
        "We sent a cease and desist letter, gathered evidence, and filed a lawsuit to the Commercial Court. Also reported to authorities for enforcement against counterfeit products.",
      outcome:
        "Court ruled in favor of client. Competitor ordered to pay compensation and withdraw all counterfeit products from market.",
      year: "2023",
      duration: "8 months",
    },
  ],
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function StudiKasusPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const cases =
    caseStudiesData[locale as keyof typeof caseStudiesData] ||
    caseStudiesData.id;

  const pageText = {
    id: {
      title: "Studi Kasus",
      subtitle: "Kisah Nyata Keberhasilan Kami dalam Menangani Kasus Hukum",
      categories: "Kategori",
      allCategories: "Semua",
      readMore: "Baca Detail Kasus",
      year: "Tahun",
      duration: "Durasi",
      client: "Klien",
    },
    en: {
      title: "Case Studies",
      subtitle: "Real Stories of Our Success in Handling Legal Cases",
      categories: "Categories",
      allCategories: "All",
      readMore: "Read Case Details",
      year: "Year",
      duration: "Duration",
      client: "Client",
    },
  };

  const t = pageText[locale as keyof typeof pageText] || pageText.id;

  return (
    <>
      {/* ===== HERO SECTION - NAVY ===== */}
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

          {/* Stats Summary */}
          <AnimatedSection animation="fadeIn" delay={0.5}>
            <div className="mt-8 flex items-center justify-center gap-4 text-sm">
              <span className="text-navy-200">{cases.length}+ Kasus</span>
              <span className="text-navy-500">•</span>
              <span className="text-navy-200">2019 - 2024</span>
              <span className="text-navy-500">•</span>
              <span className="text-navy-200">95% Keberhasilan</span>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* ===== CASE STUDIES LIST ===== */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {cases.map((caseItem, idx) => {
              const Icon = caseItem.icon;
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <Card variant="hover" className="p-6 md:p-8 group">
                    <div className="grid md:grid-cols-4 gap-6">
                      {/* Left - Category & Icon */}
                      <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-2">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            className="w-12 h-12 bg-gold-100 rounded-2xl flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300"
                          >
                            <Icon className="w-6 h-6 text-gold-600 group-hover:text-white transition-colors duration-300" />
                          </motion.div>
                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="text-sm font-medium text-gold-600 bg-gold-50 px-3 py-1 rounded-full group-hover:bg-gold-100 transition-colors"
                          >
                            {caseItem.category}
                          </motion.span>
                        </div>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-xs text-navy-400 mt-2"
                        >
                          {t.client}: {caseItem.client}
                        </motion.p>
                      </div>

                      {/* Middle - Content */}
                      <div className="md:col-span-2">
                        <h2 className="font-serif text-xl font-semibold text-navy-600 mb-3 group-hover:text-gold-600 transition-colors">
                          {caseItem.title}
                        </h2>
                        <div className="space-y-3 text-sm">
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            <span className="font-medium text-navy-600">
                              {locale === "id" ? "Tantangan:" : "Challenge:"}
                            </span>
                            <p className="text-navy-500">
                              {caseItem.challenge}
                            </p>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <span className="font-medium text-navy-600">
                              {locale === "id" ? "Strategi:" : "Strategy:"}
                            </span>
                            <p className="text-navy-500">{caseItem.strategy}</p>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <span className="font-medium text-navy-600">
                              {locale === "id" ? "Hasil:" : "Outcome:"}
                            </span>
                            <p className="text-navy-500">{caseItem.outcome}</p>
                          </motion.div>
                        </div>
                      </div>

                      {/* Right - Meta & CTA */}
                      <div className="md:col-span-1 flex flex-col items-end justify-between">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-right mb-4"
                        >
                          <p className="text-sm text-navy-400">
                            {t.year}: {caseItem.year}
                          </p>
                          <p className="text-sm text-navy-400">
                            {t.duration}: {caseItem.duration}
                          </p>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {/* <Link href={`/${locale}/studi-kasus/${caseItem.id}`}>
                            <Button variant="primary" size="sm">
                              {t.readMore}
                              <motion.div
                                animate={{ x: 0 }}
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <ArrowRight className="ml-2 w-4 h-4" />
                              </motion.div>
                            </Button>
                          </Link> */}
                        </motion.div>
                      </div>
                    </div>

                    {/* Decorative gradient line on hover */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-gold-300 rounded-b-2xl"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA */}
          <AnimatedSection animation="fadeIn" delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-navy-500 mb-4">
                {locale === "id"
                  ? "Ingin tahu bagaimana kami dapat membantu kasus Anda?"
                  : "Want to know how we can help with your case?"}
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
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
