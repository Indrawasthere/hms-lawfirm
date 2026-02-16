import { Metadata } from "next";
import Container from "@/app/components/ui/container";
import Card from "@/app/components/ui/card";
import { Calendar, Briefcase, ChevronRight } from "lucide-react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const titles = {
    id: "Riwayat Kasus | HMP Lawfirm",
    en: "Case History | HMP Lawfirm",
  };

  const descriptions = {
    id: "Jejak rekam kasus-kasus yang telah kami tangani selama 15 tahun terakhir.",
    en: "Track record of cases we have handled over the past 15 years.",
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.id,
    description:
      descriptions[locale as keyof typeof descriptions] || descriptions.id,
  };
}

const caseHistoryData = {
  id: [
    {
      year: "2024",
      cases: [
        {
          category: "Korporat",
          count: 12,
          highlight: "Merger 2 perusahaan manufaktur",
        },
        {
          category: "Litigasi",
          count: 8,
          highlight: "Sengketa saham perusahaan keluarga",
        },
        {
          category: "Properti",
          count: 15,
          highlight: "Pendampingan proyek properti 50 hektar",
        },
      ],
    },
    {
      year: "2023",
      cases: [
        {
          category: "Korporat",
          count: 10,
          highlight: "Pendirian 5 PT asing di Indonesia",
        },
        {
          category: "Litigasi",
          count: 12,
          highlight: "Kasus wanprestasi kontrak",
        },
        {
          category: "KI",
          count: 20,
          highlight: "Pendaftaran 50 merek terkenal",
        },
      ],
    },
    {
      year: "2022",
      cases: [
        {
          category: "Ketenagakerjaan",
          count: 25,
          highlight: "PHK massal 200 karyawan",
        },
        {
          category: "Properti",
          count: 18,
          highlight: "Sengketa lahan 10 kasus",
        },
        {
          category: "Keluarga",
          count: 30,
          highlight: "Mediasi perceraian dan waris",
        },
      ],
    },
    {
      year: "2021",
      cases: [
        {
          category: "Litigasi",
          count: 15,
          highlight: "Kasasi di Mahkamah Agung",
        },
        { category: "Korporat", count: 20, highlight: "Restrukturisasi utang" },
      ],
    },
    {
      year: "2020",
      cases: [
        { category: "KI", count: 25, highlight: "Sengketa hak cipta" },
        {
          category: "Ketenagakerjaan",
          count: 20,
          highlight: "Penyusunan peraturan perusahaan",
        },
      ],
    },
  ],
  en: [
    {
      year: "2024",
      cases: [
        {
          category: "Corporate",
          count: 12,
          highlight: "Merger of 2 manufacturing companies",
        },
        {
          category: "Litigation",
          count: 8,
          highlight: "Family company share dispute",
        },
        {
          category: "Property",
          count: 15,
          highlight: "50-hectare property project assistance",
        },
      ],
    },
    // ... tambahkan sisanya
  ],
};

export default function RiwayatKasusPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const history =
    caseHistoryData[locale as keyof typeof caseHistoryData] ||
    caseHistoryData.id;

  const pageText = {
    id: {
      title: "Riwayat Kasus",
      subtitle: "Jejak Rekam Kasus yang Telah Kami Tangani",
      totalCases: "Total Kasus",
      categories: "Kategori",
      viewDetails: "Lihat Detail",
    },
    en: {
      title: "Case History",
      subtitle: "Track Record of Cases We Have Handled",
      totalCases: "Total Cases",
      categories: "Categories",
      viewDetails: "View Details",
    },
  };

  const t = pageText[locale as keyof typeof pageText] || pageText.id;

  // Calculate total cases
  const totalCases = history.reduce(
    (acc, year) => acc + year.cases.reduce((sum, cat) => sum + cat.count, 0),
    0,
  );

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
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
          <div className="mt-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <Calendar className="w-5 h-5" />
            <span className="font-semibold">2010 - 2024</span>
            <span className="text-navy-200">|</span>
            <span>
              {totalCases}+ {t.totalCases}
            </span>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {history.map((yearData, idx) => (
              <div key={idx} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline Line */}
                {idx < history.length - 1 && (
                  <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-navy-200"></div>
                )}

                {/* Year Marker */}
                <div className="absolute left-0 top-0">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {yearData.year.slice(-2)}
                  </div>
                </div>

                {/* Content */}
                <div className="ml-8">
                  <h2 className="font-serif text-2xl font-bold text-navy-600 mb-4">
                    {yearData.year}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {yearData.cases.map((caseCat, cidx) => (
                      <Card key={cidx} variant="hover" className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm font-medium text-gold-600 bg-gold-50 px-2 py-1 rounded">
                            {caseCat.category}
                          </span>
                          <span className="text-2xl font-bold text-navy-400">
                            {caseCat.count}
                          </span>
                        </div>
                        <p className="text-xs text-navy-500">
                          {caseCat.highlight}
                        </p>
                        <div className="mt-3 flex items-center text-xs text-gold-500">
                          <span>{t.viewDetails}</span>
                          <ChevronRight className="w-3 h-3 ml-1" />
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats Summary */}
      <section className="py-16 bg-navy-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-serif text-3xl md:text-4xl font-bold text-gold-500">
                500+
              </div>
              <div className="text-sm text-navy-500">Total Kasus</div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl font-bold text-gold-500">
                6
              </div>
              <div className="text-sm text-navy-500">Bidang Hukum</div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl font-bold text-gold-500">
                15
              </div>
              <div className="text-sm text-navy-500">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl font-bold text-gold-500">
                95%
              </div>
              <div className="text-sm text-navy-500">Tingkat Keberhasilan</div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
