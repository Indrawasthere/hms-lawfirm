"use client";

import { Metadata } from "next";
import Link from "next/link";
import Container from "@/app/components/ui/container";
import Card from "@/app/components/ui/card";
import Button from "@/app/components/ui/button";
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
    // ... tambahkan sisanya dengan pola yang sama
  ],
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
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="space-y-8">
            {cases.map((caseItem, idx) => {
              const Icon = caseItem.icon;
              return (
                <Card key={idx} variant="hover" className="p-6 md:p-8">
                  <div className="grid md:grid-cols-4 gap-6">
                    {/* Category & Icon */}
                    <div className="md:col-span-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gold-100 rounded-2xl flex items-center justify-center">
                          <Icon className="w-5 h-5 text-gold-600" />
                        </div>
                        <span className="text-sm font-medium text-gold-600 bg-gold-50 px-3 py-1 rounded-full">
                          {caseItem.category}
                        </span>
                      </div>
                      <p className="text-xs text-navy-400 mt-2">
                        {t.client}: {caseItem.client}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2">
                      <h2 className="font-serif text-xl font-semibold text-navy-600 mb-3">
                        {caseItem.title}
                      </h2>
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-medium text-navy-600">
                            Tantangan:
                          </span>
                          <p className="text-navy-500">{caseItem.challenge}</p>
                        </div>
                        <div>
                          <span className="font-medium text-navy-600">
                            Strategi:
                          </span>
                          <p className="text-navy-500">{caseItem.strategy}</p>
                        </div>
                        <div>
                          <span className="font-medium text-navy-600">
                            Hasil:
                          </span>
                          <p className="text-navy-500">{caseItem.outcome}</p>
                        </div>
                      </div>
                    </div>

                    {/* Meta & CTA */}
                    <div className="md:col-span-1 flex flex-col items-end justify-between">
                      <div className="text-right mb-4">
                        <p className="text-sm text-navy-400">
                          {t.year}: {caseItem.year}
                        </p>
                        <p className="text-sm text-navy-400">
                          {t.duration}: {caseItem.duration}
                        </p>
                      </div>
                      <Link href={`/${locale}/studi-kasus/${caseItem.id}`}>
                        <Button variant="primary" size="sm">
                          {t.readMore}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
