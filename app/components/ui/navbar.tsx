"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Menu, X, Scale } from "lucide-react";
import LanguageSwitcher from "@/app/components/language-switcher";
import Button from "@/app/components/ui/button";

const navigation = [
  { href: "", key: "home" },
  { href: "tentang-kami", key: "about" },
  { href: "layanan-hukum", key: "services" },
  { href: "studi-kasus", key: "caseStudies" },
  { href: "testimoni", key: "testimonials" },
  { href: "kontak", key: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as string;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const getNavLabel = (key: string) => {
    const labels: Record<string, Record<string, string>> = {
      home: { id: "Beranda", en: "Home" },
      about: { id: "Tentang Kami", en: "About Us" },
      services: { id: "Layanan", en: "Services" },
      caseStudies: { id: "Studi Kasus", en: "Case Studies" },
      testimonials: { id: "Testimoni", en: "Testimonials" },
      contact: { id: "Kontak", en: "Contact" },
    };
    return labels[key]?.[locale] || key;
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-2 group">
              <Scale className="w-8 h-8 text-gold-500 group-hover:rotate-12 transition-transform" />
              <span className="font-serif text-xl font-bold text-navy-600">
                HMP<span className="text-gold-500">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={`/${locale}/${item.href}`}
                  className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                    pathname === `/${locale}/${item.href}`
                      ? "text-gold-500"
                      : "text-navy-600"
                  }`}
                >
                  {getNavLabel(item.key)}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher />

              {/* Desktop CTA */}
              <div className="hidden md:block">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() =>
                    window.open("https://wa.me/6285774968522", "_blank")
                  }
                >
                  {locale === "id" ? "Konsultasi Gratis" : "Free Consultation"}
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-navy-600 hover:text-gold-500 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-navy-900/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-xl transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-navy-600 hover:text-gold-500"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="px-6 py-8">
            <ul className="space-y-6">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${locale}/${item.href}`}
                    className={`block text-lg font-medium transition-colors hover:text-gold-500 ${
                      pathname === `/${locale}/${item.href}`
                        ? "text-gold-500"
                        : "text-navy-600"
                    }`}
                  >
                    {getNavLabel(item.key)}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3">
              <Button
                variant="primary"
                fullWidth
                onClick={() =>
                  window.open("https://wa.me/6285774968522", "_blank")
                }
              >
                {locale === "id" ? "Konsultasi via WA" : "Consult via WhatsApp"}
              </Button>
              <Button
                variant="secondary"
                fullWidth
                onClick={() =>
                  (window.location.href =
                    "mailto:advokathaerudinmuhamad@gmail.com")
                }
              >
                {locale === "id" ? "Email Tim Hukum" : "Email Legal Team"}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
