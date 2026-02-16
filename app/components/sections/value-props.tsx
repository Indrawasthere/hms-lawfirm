"use client";

import { useParams } from "next/navigation";
import { Shield, Users, Award, Clock } from "lucide-react";
import Card from "../ui/card";

const icons = {
  pengalaman: Shield,
  pendekatan: Users,
  tim: Award,
  integritas: Clock,
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
    },
  };

  const t = content[locale as keyof typeof content] || content.id;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-600 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-navy-500">{t.subtitle}</p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Card key={index} variant="hover" className="text-center group">
                <div className="mb-4 inline-flex p-3 bg-navy-50 rounded-xl group-hover:bg-gold-50 transition-colors">
                  <Icon className="w-8 h-8 text-navy-600 group-hover:text-gold-500 transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
