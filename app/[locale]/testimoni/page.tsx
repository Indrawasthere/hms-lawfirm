import { Metadata } from "next";
import Container from "@/app/components/ui/container";
import Card from "@/app/components/ui/card";
import { Star, Quote } from "lucide-react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const titles = {
    id: "Testimoni Klien | HMP Lawfirm",
    en: "Client Testimonials | HMP Lawfirm",
  };

  const descriptions = {
    id: "Apa kata klien kami tentang layanan hukum profesional HMP Lawfirm.",
    en: "What our clients say about HMP Lawfirm professional legal services.",
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.id,
    description:
      descriptions[locale as keyof typeof descriptions] || descriptions.id,
  };
}

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
    // ... tambahkan sisanya
  ],
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
      {/* Hero */}
      <section className="bg-navy-900 text-white pt-40 pb-20 md:pt-48 md:pb-32">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <Container className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-navy-100 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-gold-400 text-gold-400"
                />
              ))}
            </div>
            <span className="text-navy-200">|</span>
            <span>4.9/5 {t.rating}</span>
            <span className="text-navy-200">|</span>
            <span>
              {testimonials.length}+ {t.allReviews}
            </span>
          </div>
        </Container>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} variant="hover" className="h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-gold-300" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold-500 text-gold-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-navy-500 text-sm leading-relaxed mb-4 flex-1">
                  "{testimonial.quote}"
                </p>

                {/* Case Info */}
                <div className="text-xs text-gold-500 mb-3">
                  {testimonial.case} • {testimonial.year}
                </div>

                {/* Author */}
                <div className="border-t border-navy-100 pt-3">
                  <p className="font-serif font-semibold text-navy-600">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-navy-400">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-50">
        <Container>
          <Card className="text-center p-8 md:p-12 bg-gradient-to-br from-navy-600 to-navy-700 text-white">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              {locale === "id"
                ? "Siap Membantu Kasus Anda?"
                : "Ready to Help Your Case?"}
            </h2>
            <p className="text-navy-100 mb-6 max-w-2xl mx-auto">
              {locale === "id"
                ? "Bergabunglah dengan ratusan klien puas yang telah mempercayakan kasus mereka kepada kami."
                : "Join hundreds of satisfied clients who have entrusted their cases to us."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}/kontak`}
                className="inline-flex items-center justify-center px-6 py-3 bg-gold-500 text-navy-900 font-semibold rounded-2xl hover:bg-gold-600 transition-colors"
              >
                {locale === "id" ? "Konsultasi Gratis" : "Free Consultation"}
              </a>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
