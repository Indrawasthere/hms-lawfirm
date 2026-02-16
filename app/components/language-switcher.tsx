"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const currentLocale = params.locale as string;

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchLanguage = (locale: string) => {
    // Save preference
    localStorage.setItem("preferred-language", locale);
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;

    // Replace locale in path
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-navy-50 transition-colors"
        aria-label="Switch language"
      >
        <Globe size={20} className="text-navy-600" />
        <span className="text-sm font-medium text-navy-600">
          {currentLocale === "id" ? "ID" : "EN"}
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-navy-100 z-50 overflow-hidden animate-slide-up">
            <button
              onClick={() => switchLanguage("id")}
              className={`w-full text-left px-4 py-3 hover:bg-navy-50 transition-colors ${
                currentLocale === "id"
                  ? "text-gold-500 font-medium bg-navy-50"
                  : "text-navy-600"
              }`}
            >
              🇮🇩 Indonesia
            </button>
            <button
              onClick={() => switchLanguage("en")}
              className={`w-full text-left px-4 py-3 hover:bg-navy-50 transition-colors border-t border-navy-100 ${
                currentLocale === "en"
                  ? "text-gold-500 font-medium bg-navy-50"
                  : "text-navy-600"
              }`}
            >
              🇬🇧 English
            </button>
          </div>
        </>
      )}
    </div>
  );
}
