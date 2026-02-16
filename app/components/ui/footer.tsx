"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Scale,
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Instagram,
} from "lucide-react";
import Button from "./button";

export default function Footer() {
  const params = useParams();
  const locale = params.locale as string;

  const content = {
    id: {
      about: "Solusi Hukum Strategis",
      quickLinks: "Tautan Cepat",
      services: "Layanan",
      contact: "Kontak",
      followUs: "Ikuti Kami",
      rights: "Hak Cipta Dilindungi.",
      consultation: "Konsultasi via WhatsApp",
      email: "Email Tim Hukum",
    },
    en: {
      about:
        "Trusted legal partner with integrity, expertise, and dedication to provide the best legal solutions.",
      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact",
      followUs: "Follow Us",
      rights: "All Rights Reserved.",
      consultation: "Consult via WhatsApp",
      email: "Email Legal Team",
    },
  };

  const t = content[locale as keyof typeof content] || content.id;

  const quickLinks = [
    { href: "", label: locale === "id" ? "Beranda" : "Home" },
    {
      href: "tentang-kami",
      label: locale === "id" ? "Tentang Kami" : "About Us",
    },
    { href: "layanan-hukum", label: locale === "id" ? "Layanan" : "Services" },
    {
      href: "studi-kasus",
      label: locale === "id" ? "Studi Kasus" : "Case Studies",
    },
    {
      href: "testimoni",
      label: locale === "id" ? "Testimoni" : "Testimonials",
    },
    { href: "kontak", label: locale === "id" ? "Kontak" : "Contact" },
  ];

  const serviceLinks = [
    {
      href: "layanan-hukum/korporat",
      label: locale === "id" ? "Hukum Korporat" : "Corporate Law",
    },
    {
      href: "layanan-hukum/litigasi",
      label: locale === "id" ? "Litigasi" : "Litigation",
    },
    {
      href: "layanan-hukum/properti",
      label: locale === "id" ? "Real Estat" : "Real Estate",
    },
    {
      href: "layanan-hukum/ki",
      label: locale === "id" ? "Kekayaan Intelektual" : "Intellectual Property",
    },
  ];

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="w-8 h-8 text-gold-500" />
              <span className="font-serif text-xl font-bold">
                HMP<span className="text-gold-500">.</span> Lawfirm
              </span>
            </div>
            <p className="text-navy-100 text-sm leading-relaxed">{t.about}</p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="text-navy-100 hover:text-gold-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-navy-100 hover:text-gold-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              {t.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}/${link.href}`}
                    className="text-navy-100 hover:text-gold-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              {t.services}
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}/${link.href}`}
                    className="text-navy-100 hover:text-gold-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              {t.contact}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-navy-100">Virtual Office, Jakarta</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <a
                  href="tel:+6285774968522"
                  className="text-navy-100 hover:text-gold-500"
                >
                  +62 857-7496-8522
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <a
                  href="mailto:advokathaerudinmuhamad@gmail.com"
                  className="text-navy-100 hover:text-gold-500 break-all"
                >
                  advokathaerudinmuhamad@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-navy-100">
                  Senin - Sabtu: 10.00 - 19.00 WIB
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-navy-500">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              onClick={() =>
                window.open("https://wa.me/6285774968522", "_blank")
              }
              className="min-w-[200px]"
            >
              {t.consultation}
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                (window.location.href =
                  "mailto:advokathaerudinmuhamad@gmail.com")
              }
              className="min-w-[200px] border-white text-white hover:bg-white/10"
            >
              {t.email}
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-navy-500 text-center text-navy-300 text-sm">
          <p>
            © {new Date().getFullYear()} HMP Lawfirm. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
