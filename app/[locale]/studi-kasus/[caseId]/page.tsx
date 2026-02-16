"use client";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/app/components/ui/container";
import Card from "@/app/components/ui/card";
import Button from "@/app/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  Briefcase,
  MessageCircle,
  Mail,
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
    // ... tambahkan detail untuk kasus lainnya
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
    // ... tambahkan detail untuk kasus lainnya
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
      {/* Back Navigation */}
      <div className="bg-navy-50 py-4">
        <Container>
          <Link
            href={`/${locale}/studi-kasus`}
            className="text-navy-300 hover:text-gold-400 inline-flex items-center gap-2 mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            {t.back}
          </Link>
        </Container>
      </div>

      {/* Hero */}
      <section className="bg-navy-900 text-white pt-40 pb-20 md:pt-48 md:pb-32">
        <Container>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center">
              <Icon className="w-7 h-7 text-gold-600" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-sm font-medium text-gold-600 bg-gold-50 px-3 py-1 rounded-full">
                  {caseData.category}
                </span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy-600">
                {caseData.title}
              </h1>
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 mt-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-navy-400" />
              <span className="text-sm text-navy-500">
                {t.client}: {caseData.client}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-navy-400" />
              <span className="text-sm text-navy-500">
                {t.year}: {caseData.year}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-navy-400" />
              <span className="text-sm text-navy-500">
                {t.duration}: {caseData.duration}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Challenge */}
              <Card>
                <h2 className="font-serif text-2xl font-semibold text-navy-600 mb-4">
                  {t.challenge}
                </h2>
                <p className="text-navy-500 leading-relaxed">
                  {caseData.challenge}
                </p>
              </Card>

              {/* Background */}
              <Card>
                <h2 className="font-serif text-2xl font-semibold text-navy-600 mb-4">
                  {t.background}
                </h2>
                <p className="text-navy-500 leading-relaxed">
                  {caseData.background}
                </p>
              </Card>

              {/* Strategy */}
              <Card>
                <h2 className="font-serif text-2xl font-semibold text-navy-600 mb-4">
                  {t.strategy}
                </h2>
                <ul className="space-y-3">
                  {caseData.strategy.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-gold-500 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-navy-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Implementation */}
              <Card>
                <h2 className="font-serif text-2xl font-semibold text-navy-600 mb-4">
                  {t.implementation}
                </h2>
                <p className="text-navy-500 leading-relaxed">
                  {caseData.implementation}
                </p>
              </Card>

              {/* Outcome */}
              <Card>
                <h2 className="font-serif text-2xl font-semibold text-navy-600 mb-4">
                  {t.outcome}
                </h2>
                <ul className="space-y-2">
                  {caseData.outcome.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-gold-500 font-bold">✓</span>
                      <span className="text-navy-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Testimonial */}
              {caseData.testimonial && (
                <Card className="bg-gold-50 border-gold-200">
                  <h2 className="font-serif text-2xl font-semibold text-navy-600 mb-4">
                    {t.testimonial}
                  </h2>
                  <blockquote className="italic text-navy-600 mb-3">
                    "{caseData.testimonial.quote}"
                  </blockquote>
                  <p className="text-sm text-navy-500">
                    — {caseData.testimonial.name}
                  </p>
                </Card>
              )}
            </div>

            {/* Right Column - CTA */}
            <div className="space-y-6">
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
                </div>

                {/* Quick Stats */}
                <div className="mt-6 pt-6 border-t border-navy-500">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gold-400">
                        15+
                      </div>
                      <div className="text-xs text-navy-200">
                        Tahun Pengalaman
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gold-400">
                        500+
                      </div>
                      <div className="text-xs text-navy-200">
                        Kasus Terselesaikan
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
