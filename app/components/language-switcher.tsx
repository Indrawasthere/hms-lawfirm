"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LanguageSwitcherProps {
  isDarkMode?: boolean;
}

export default function LanguageSwitcher({
  isDarkMode = false,
}: LanguageSwitcherProps) {
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
    localStorage.setItem("preferred-language", locale);
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;

    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300
          ${
            isDarkMode
              ? "text-white/90 hover:bg-white/10"
              : "text-navy-600 hover:bg-navy-50"
          }
        `}
        aria-label="Switch language"
      >
        <Globe size={18} />
        <span className="text-sm font-medium">
          {currentLocale === "id" ? "ID" : "EN"}
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className={`
                absolute right-0 mt-2 w-32 rounded-xl shadow-xl border overflow-hidden z-50
                ${
                  isDarkMode
                    ? "bg-navy-800 border-white/10"
                    : "bg-white border-navy-100"
                }
              `}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={() => switchLanguage("id")}
                className={`
                  w-full text-left px-4 py-3 transition-colors text-sm
                  ${
                    isDarkMode
                      ? currentLocale === "id"
                        ? "bg-gold-500/20 text-gold-400"
                        : "text-white/80 hover:bg-white/10"
                      : currentLocale === "id"
                        ? "bg-gold-50 text-gold-600 font-medium"
                        : "text-navy-600 hover:bg-navy-50"
                  }
                `}
              >
                🇮🇩 Indonesia
              </button>
              <button
                onClick={() => switchLanguage("en")}
                className={`
                  w-full text-left px-4 py-3 transition-colors text-sm border-t
                  ${
                    isDarkMode
                      ? currentLocale === "en"
                        ? "bg-gold-500/20 text-gold-400"
                        : "text-white/80 hover:bg-white/10 border-white/10"
                      : currentLocale === "en"
                        ? "bg-gold-50 text-gold-600 font-medium"
                        : "text-navy-600 hover:bg-navy-50 border-navy-100"
                  }
                `}
              >
                🇬🇧 English
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
