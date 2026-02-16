"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Container from "@/app/components/ui/container";
import Button from "@/app/components/ui/button";
import { Frown } from "lucide-react";

export default function NotFound() {
  const params = useParams();
  const locale = params.locale as string;

  const content = {
    id: {
      title: "Halaman Tidak Ditemukan",
      message: "Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.",
      backHome: "Kembali ke Beranda",
      contact: "Hubungi Kami",
    },
    en: {
      title: "Page Not Found",
      message:
        "Sorry, the page you are looking for does not exist or has been moved.",
      backHome: "Back to Home",
      contact: "Contact Us",
    },
  };

  const t = content[locale as keyof typeof content] || content.id;

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-white to-navy-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <Frown className="w-24 h-24 text-gold-500 mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy-600 mb-4">
            404
          </h1>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-navy-500 mb-4">
            {t.title}
          </h2>
          <p className="text-navy-400 mb-8">{t.message}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}`}>
              <Button variant="primary" size="lg">
                {t.backHome}
              </Button>
            </Link>
            <Link href={`/${locale}/kontak`}>
              <Button variant="secondary" size="lg">
                {t.contact}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
