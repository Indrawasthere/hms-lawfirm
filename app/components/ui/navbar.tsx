"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Scale,
  ChevronDown,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import LanguageSwitcher from "@/app/components/language-switcher";
import Button from "@/app/components/ui/button";

const navigation = [
  { href: "", key: "home", label: "Beranda", labelEn: "Home" },
  {
    href: "tentang-kami",
    key: "about",
    label: "Tentang Kami",
    labelEn: "About Us",
  },
  {
    href: "layanan-hukum",
    key: "services",
    label: "Layanan",
    labelEn: "Services",
    dropdown: [
      {
        href: "layanan-hukum/korporat",
        label: "Hukum Korporat",
        labelEn: "Corporate Law",
      },
      {
        href: "layanan-hukum/litigasi",
        label: "Litigasi",
        labelEn: "Litigation",
      },
      {
        href: "layanan-hukum/properti",
        label: "Real Estat",
        labelEn: "Real Estate",
      },
      {
        href: "layanan-hukum/ki",
        label: "Kekayaan Intelektual",
        labelEn: "Intellectual Property",
      },
    ],
  },
  {
    href: "studi-kasus",
    key: "caseStudies",
    label: "Studi Kasus",
    labelEn: "Case Studies",
    dropdown: [
      { href: "studi-kasus", label: "Semua Kasus", labelEn: "All Cases" },
      {
        href: "riwayat-kasus",
        label: "Riwayat Kasus",
        labelEn: "Case History",
      },
    ],
  },
  {
    href: "testimoni",
    key: "testimonials",
    label: "Testimoni",
    labelEn: "Testimonials",
  },
  { href: "kontak", key: "contact", label: "Kontak", labelEn: "Contact" },
];

export default function Navbar({ forceSolid = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as string;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const getNavLabel = (item: (typeof navigation)[0]) =>
    locale === "id" ? item.label : item.labelEn;

  const isActive = (href: string) => {
    if (href === "") return pathname === `/${locale}`;
    if (pathname === `/${locale}`) return false;
    return pathname.startsWith(`/${locale}/${href}`);
  };

  const darkPages = [
    "kontak",
    "testimoni",
    "studi-kasus",
    "riwayat-kasus",
    "tentang-kami",
    "layanan-hukum",
  ];
  const isDarkPage = darkPages.some((page) => pathname.includes(page));

  const isDarkMode = isDarkPage && !isScrolled;

  const bgColors = {
    nav: isScrolled
      ? "bg-navy-900/90 backdrop-blur-lg border-b border-white/10 shadow-2xl"
      : "bg-transparent border-transparent",
    hover: isDarkMode ? "hover:bg-white/10" : "hover:bg-navy-50",
    active: isDarkMode ? "bg-white/20" : "bg-gold-50",
    dropdown: isDarkMode
      ? "bg-navy-900/90 backdrop-blur-md border-white/10"
      : "bg-white border-navy-50",
  };

  const textColors = {
    primary: isScrolled
      ? "text-white"
      : isDarkPage
        ? "text-white"
        : "text-navy-900",

    secondary: isScrolled ? "text-white/80" : "text-navy-600",
    muted: isScrolled || isDarkMode ? "text-white/60" : "text-navy-400",
    gold: "text-gold-500",
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
        pointer-events-auto
        flex items-center justify-between
        w-[95%] max-w-7xl mx-auto mt-4
        px-6 py-3 md:px-10 md:py-4
        transition-all duration-500
        /* Update Border Radius biar lebih floating */
        ${isScrolled ? "rounded-2xl mt-2" : "rounded-xl"}
        ${bgColors.nav}
      `}
      >
        <Link href={`/${locale}`} className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Scale
              className={`w-6 h-6 md:w-7 md:h-7 transition-colors ${
                isScrolled || isDarkMode ? "text-gold-400" : "text-gold-600"
              }`}
            />
          </motion.div>
          <span
            className={`font-serif text-lg md:text-xl font-bold tracking-tight transition-colors ${
              isScrolled || isDarkMode ? "text-white" : "text-navy-600"
            }`}
          >
            HMP<span className="text-gold-500">.</span>
          </span>
        </Link>

        {/* ===== DESKTOP NAVIGATION ===== */}
        <div className="hidden md:flex items-center gap-2">
          {navigation.map((item) => (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.key)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={`/${locale}/${item.href}`}
                className={`
                  px-4 py-2 text-sm font-medium transition-all duration-300 relative
                  ${
                    isActive(item.href)
                      ? "text-gold-400"
                      : `${isScrolled || isDarkMode ? "text-white/90" : "text-navy-600"} hover:text-gold-400`
                  }
                `}
              >
                {getNavLabel(item)}
                {/* Active indicator border-bottom */}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gold-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                {item.dropdown && (
                  <motion.div
                    animate={{ rotate: activeDropdown === item.key ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block ml-1"
                  >
                    <ChevronDown
                      size={14}
                      className={
                        isScrolled || isDarkMode
                          ? "text-white/60"
                          : "text-navy-400"
                      }
                    />
                  </motion.div>
                )}
              </Link>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {item.dropdown && activeDropdown === item.key && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className={`absolute top-full left-0 mt-3 w-56 rounded-xl shadow-2xl border overflow-hidden py-2 ${bgColors.dropdown}`}
                  >
                    {item.dropdown.map((drop) => (
                      <Link
                        key={drop.href}
                        href={`/${locale}/${drop.href}`}
                        className={`
                          block px-4 py-2.5 text-sm transition-colors
                          ${
                            isScrolled || isDarkMode
                              ? "text-white/80 hover:bg-white/10 hover:text-white"
                              : "text-navy-700 hover:bg-gold-50 hover:text-gold-600"
                          }
                        `}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {locale === "id" ? drop.label : drop.labelEn}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* ===== RIGHT SECTION ===== */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="hidden sm:block">
            <LanguageSwitcher isDarkMode={isScrolled || isDarkMode} />
          </div>

          {/* Desktop CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Button
              variant={isScrolled || isDarkMode ? "outline" : "primary"}
              size="sm"
              className={`
                rounded-xl px-6 transition-all duration-300
                ${
                  isScrolled || isDarkMode
                    ? "border-white/30 text-white hover:bg-white/20 hover:border-white/50"
                    : ""
                }
              `}
              onClick={() =>
                window.open("https://wa.me/6285774968522", "_blank")
              }
            >
              <MessageCircle className="mr-2 w-4 h-4" />
              {locale === "id" ? "Konsultasi" : "Consultation"}
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`
              md:hidden p-2 rounded-xl transition-all duration-300
              ${
                isScrolled || isDarkMode
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-navy-100 text-navy-900 hover:bg-navy-200"
              }
            `}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* ===== MOBILE MENU (sama persis seperti sebelumnya) ===== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-navy-900/60 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-2xl md:hidden flex flex-col"
            >
              {/* Header */}
              <div className="bg-navy-900 p-6 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Scale className="w-6 h-6 text-gold-500" />
                      <span className="font-serif text-lg font-bold">
                        HMP<span className="text-gold-500">.</span>
                      </span>
                    </div>
                    <p className="text-xs text-navy-200">
                      {locale === "id"
                        ? "Mitra Hukum Terpercaya"
                        : "Trusted Legal Partner"}
                    </p>
                  </div>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                {/* Quick Contact */}
                <div className="mt-4 pt-4 border-t border-navy-500 space-y-2">
                  <a
                    href="tel:+6285774968522"
                    className="flex items-center gap-2 text-xs text-navy-100 hover:text-gold-500 transition-colors"
                  >
                    <Phone size={12} />
                    +62 857-7496-8522
                  </a>
                  <a
                    href="mailto:advokathaerudinmuhamad@gmail.com"
                    className="flex items-center gap-2 text-xs text-navy-100 hover:text-gold-500 transition-colors break-all"
                  >
                    <Mail size={12} />
                    advokathaerudinmuhamad@gmail.com
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-2">
                  {navigation.map((item) => (
                    <li key={item.key}>
                      {item.dropdown ? (
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-navy-400 px-3 py-2">
                            {getNavLabel(item)}
                          </div>
                          <div className="pl-4 space-y-1 border-l-2 border-navy-100">
                            {item.dropdown.map((drop) => (
                              <Link
                                key={drop.href}
                                href={`/${locale}/${drop.href}`}
                                className="block px-3 py-2 text-sm text-navy-600 hover:text-gold-500 hover:bg-gold-50 rounded-lg transition-all"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {locale === "id" ? drop.label : drop.labelEn}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={`/${locale}/${item.href}`}
                          className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                            isActive(item.href)
                              ? "text-gold-500 bg-gold-50"
                              : "text-navy-600 hover:text-gold-500 hover:bg-navy-50"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {getNavLabel(item)}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer CTA */}
              <div className="p-6 border-t border-navy-100 space-y-3">
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => {
                    window.open("https://wa.me/6285774968522", "_blank");
                    setIsMobileMenuOpen(false);
                  }}
                  className="rounded-xl"
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  {locale === "id"
                    ? "Konsultasi via WA"
                    : "Consult via WhatsApp"}
                </Button>
                <Button
                  variant="secondary"
                  fullWidth
                  onClick={() => {
                    window.location.href =
                      "mailto:advokathaerudinmuhamad@gmail.com";
                    setIsMobileMenuOpen(false);
                  }}
                  className="rounded-xl"
                >
                  <Mail className="mr-2 w-4 h-4" />
                  {locale === "id" ? "Email Tim Hukum" : "Email Legal Team"}
                </Button>

                <div className="flex justify-center pt-2">
                  <LanguageSwitcher isDarkMode={false} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
