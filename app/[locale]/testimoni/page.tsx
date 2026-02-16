"use client";

import { Metadata } from "next";
import { motion } from "framer-motion";
import Container from "@/app/components/ui/container";
import Card from "@/app/components/ui/card";
import AnimatedSection from "@/app/components/ui/animated-section";
import { Star, Quote } from "lucide-react";

//export async function generateMetadata({
//  params: { locale },
//}: {
//  params: { locale: string };
//}): Promise<Metadata> {
//  const titles = {
//    id: "Testimoni Klien | HMP Lawfirm",
//    en: "Client Testimonials | HMP Lawfirm",
//  };
//
//  const descriptions = {
//    id: "Apa kata klien kami tentang layanan hukum profesional HMP Lawfirm.",
//    en: "What our clients say about HMP Lawfirm professional legal services.",
//  };
//
//  return {
//    title: titles[locale as keyof typeof titles] || titles.id,
//    description:
//      descriptions[locale as keyof typeof descriptions] || descriptions.id,
//  };
//}

const testimonialsData = {
  id: [
    {
      name: "Sarah Lestari",
      role: "Direktur Keuangan, PT. Inovasi Jaya",
      quote:
        "Profesionalisme HMP Lawfirm dalam menangani kasus perusahaan kami sungguh luar biasa. Mereka memberikan solusi yang tepat waktu dan efektif, jauh melampaui ekspektasi. Pendekatan personal dan perhatian terhadap detail membuat kami merasa sangat dihargai.",
      rating: 5,
      case: "Sengketa Kontrak Korporat",
      year: "2024",
    },
    {
      name: "Rudi Santoso",
      role: "Pengusaha Properti",
      quote:
        "Keahlian tim HMP Lawfirm dalam hukum ketenagakerjaan sangat membantu perusahaan kami dalam menavigasi regulasi yang kompleks. Mereka memberikan saran yang jelas, praktis, dan selalu tersedia untuk konsultasi. Layanan yang sangat direkomendasikan!",
      rating: 5,
      case: "Kepatuhan Ketenagakerjaan",
      year: "2023",
    },
    {
      name: "Dian Pramono",
      role: "Desainer Kreatif",
      quote:
        "Untuk pertama kalinya, saya membutuhkan bantuan hukum terkait hak cipta desain saya. HMP Lawfirm menjelaskan setiap langkah dengan sangat gamblang dan membantu saya mengamankan hak-hak saya dengan efisien. Sangat direkomendasikan untuk para profesional kreatif!",
      rating: 5,
      case: "Pendaftaran Hak Cipta",
      year: "2024",
    },
    {
      name: "Bambang Wijaya",
      role: "Pengembang Properti",
      quote:
        "Saya sangat puas dengan pendampingan hukum HMP Lawfirm dalam transaksi properti saya. Mereka sangat teliti, komunikatif, dan memastikan semua proses berjalan lancar tanpa hambatan. Kepercayaan adalah kunci, dan HMP Lawfirm telah membuktikannya.",
      rating: 5,
      case: "Transaksi Properti",
      year: "2023",
    },
    {
      name: "Maya Indriani",
      role: "Founder, Startup Teknologi",
      quote:
        "HMP Lawfirm membantu kami dari pendirian perusahaan hingga perlindungan kekayaan intelektual. Mereka memahami kebutuhan startup dengan cepat dan memberikan solusi yang sesuai budget. Partner hukum terbaik untuk startup!",
      rating: 5,
      case: "Pendirian PT & KI",
      year: "2024",
    },
    {
      name: "Hendra Wijaya",
      role: "Direktur Utama, PT. Manufaktur",
      quote:
        "Menghadapi gugatan dari mantan karyawan, HMP Lawfirm berhasil membela kami dengan sangat baik. Strategi hukum mereka tepat dan komunikasi selalu jelas. Kasus selesai dengan hasil terbaik.",
      rating: 5,
      case: "Sengketa Ketenagakerjaan",
      year: "2023",
    },
  ],
  en: [
    {
      name: "Sarah Lestari",
      role: "Finance Director, PT. Inovasi Jaya",
      quote:
        "HMP Lawfirm professionalism in handling our corporate cases was outstanding. They provided timely and effective solutions, far exceeding expectations. Their personal approach made us feel truly valued.",
      rating: 5,
      case: "Corporate Contract Dispute",
      year: "2024",
    },
    {
      name: "Rudi Santoso",
      role: "Property Entrepreneur",
      quote:
        "The HMP Lawfirm team's expertise in employment law greatly helped our company navigate complex regulations. They provide clear, practical advice and are always available for consultation. Highly recommended!",
      rating: 5,
      case: "Employment Compliance",
      year: "2023",
    },
    {
      name: "Dian Pramono",
      role: "Creative Designer",
      quote:
        "When I first needed legal help for my design copyright, HMP Lawfirm explained every step clearly and helped me secure my rights efficiently. Highly recommended for creative professionals!",
      rating: 5,
      case: "Copyright Registration",
      year: "2024",
    },
    {
      name: "Bambang Wijaya",
      role: "Property Developer",
      quote:
        "Very satisfied with HMP Lawfirm's legal assistance in my property transaction. They were thorough, communicative, and ensured everything went smoothly without obstacles.",
      rating: 5,
      case: "Property Transaction",
      year: "2023",
    },
    {
      name: "Maya Indriani",
      role: "Founder, Tech Startup",
      quote:
        "HMP Lawfirm helped us from company establishment to intellectual property protection. They quickly understood startup needs and provided budget-friendly solutions. Best legal partner for startups!",
      rating: 5,
      case: "Company Setup & IP",
      year: "2024",
    },
    {
      name: "Hendra Wijaya",
      role: "President Director, PT. Manufaktur",
      quote:
        "Facing a lawsuit from a former employee, HMP Lawfirm defended us excellently. Their legal strategy was precise and communication always clear. Case resolved with best outcome.",
      rating: 5,
      case: "Employment Dispute",
      year: "2023",
    },
  ],
};

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

const starVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5 + i * 0.1,
      type: "spring",
      stiffness: 300,
    },
  }),
};

export default function TestimoniPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const testimonials =
    testimonialsData[locale as keyof typeof testimonialsData] ||
    testimonialsData.id;

  const pageText = {
    id: {
      title: "Testimoni Klien",
      subtitle: "Apa Kata Mereka Tentang Layanan Hukum Kami",
      rating: "Rating",
      case: "Kasus",
      year: "Tahun",
      allReviews: "Semua Ulasan",
    },
    en: {
      title: "Client Testimonials",
      subtitle: "What They Say About Our Legal Services",
      rating: "Rating",
      case: "Case",
      year: "Year",
      allReviews: "All Reviews",
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

          {/* Rating Summary dengan Animated Stars */}
          <AnimatedSection animation="fadeIn" delay={0.5}>
            <motion.div
              className="mt-8 flex items-center justify-center gap-4 flex-wrap"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star, i) => (
                  <motion.div key={star} custom={i} variants={starVariants}>
                    <Star className="w-5 h-5 fill-gold-400 text-gold-400" />
                  </motion.div>
                ))}
              </div>
              <motion.span variants={itemVariants} className="text-navy-200">
                |
              </motion.span>
              <motion.span variants={itemVariants} className="text-navy-200">
                4.9/5 {t.rating}
              </motion.span>
              <motion.span variants={itemVariants} className="text-navy-200">
                |
              </motion.span>
              <motion.span variants={itemVariants} className="text-navy-200">
                {testimonials.length}+ {t.allReviews}
              </motion.span>
            </motion.div>
          </AnimatedSection>
        </Container>
      </section>

      {/* ===== TESTIMONIALS GRID ===== */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card variant="hover" className="h-full flex flex-col group">
                  {/* Quote Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="mb-4"
                  >
                    <Quote className="w-8 h-8 text-gold-300 group-hover:text-gold-500 transition-colors" />
                  </motion.div>

                  {/* Rating */}
                  <motion.div
                    className="flex gap-1 mb-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.05 },
                      },
                    }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        variants={{
                          hidden: { opacity: 0, scale: 0 },
                          visible: { opacity: 1, scale: 1 },
                        }}
                      >
                        <Star className="w-4 h-4 fill-gold-500 text-gold-500" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Quote */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-navy-500 text-sm leading-relaxed mb-4 flex-1"
                  >
                    "{testimonial.quote}"
                  </motion.p>

                  {/* Case Info */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xs text-gold-500 mb-3"
                  >
                    {testimonial.case} • {testimonial.year}
                  </motion.div>

                  {/* Author */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="border-t border-navy-100 pt-3"
                  >
                    <p className="font-serif font-semibold text-navy-600 group-hover:text-gold-600 transition-colors">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-navy-400">{testimonial.role}</p>
                  </motion.div>

                  {/* Decorative line on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-gold-300 rounded-b-2xl"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-navy-50">
        <Container>
          <AnimatedSection animation="scaleIn" delay={0.2}>
            <Card className="text-center p-8 md:p-12 bg-gradient-to-br from-navy-600 to-navy-700 text-white border-none overflow-hidden relative">
              {/* Decorative elements */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"
              />

              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 relative z-10">
                {locale === "id"
                  ? "Siap Membantu Kasus Anda?"
                  : "Ready to Help Your Case?"}
              </h2>
              <p className="text-navy-100 mb-6 max-w-2xl mx-auto relative z-10">
                {locale === "id"
                  ? "Bergabunglah dengan ratusan klien puas yang telah mempercayakan kasus mereka kepada kami."
                  : "Join hundreds of satisfied clients who have entrusted their cases to us."}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block relative z-10"
              >
                <a
                  href={`/${locale}/kontak`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-navy-900 font-semibold rounded-2xl hover:bg-gold-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  {locale === "id" ? "Konsultasi Gratis" : "Free Consultation"}
                </a>
              </motion.div>
            </Card>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
