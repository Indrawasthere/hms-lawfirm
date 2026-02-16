"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Halo, saya ingin konsultasi hukum dengan HMP Lawfirm.",
    );
    window.open(`https://wa.me/6285774968522?text=${message}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-4 z-40 md:right-6">
      {/* Chat Panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-navy-100 overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-green-500 p-4 text-white">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MessageCircle size={20} />
                <span className="font-semibold">WhatsApp</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-sm mt-1 text-green-50">
              Biasanya membalas dalam 1 jam
            </p>
          </div>

          {/* Body */}
          <div className="p-4">
            <div className="bg-navy-50 rounded-2xl p-3 mb-4">
              <p className="text-sm text-navy-600">
                👋 Halo! Ada yang bisa kami bantu? Tim hukum kami siap
                memberikan konsultasi cepat via WhatsApp.
              </p>
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-2xl transition-colors flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Mulai Chat Sekarang
            </button>

            <p className="text-xs text-center text-navy-400 mt-3">
              Gratis konsultasi awal 30 menit
            </p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp consultation"
      >
        <MessageCircle size={28} className="md:w-8 md:h-8" />

        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>

        {/* Tooltip */}
        <span className="absolute right-16 bg-navy-900 text-white text-sm py-1 px-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Konsultasi via WA
        </span>
      </button>
    </div>
  );
}
