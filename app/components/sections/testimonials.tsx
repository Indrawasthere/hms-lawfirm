"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Card from "../ui/card";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export default function Testimonials() {
  const params = useParams();
  const locale = params.locale as string;
  const [[page, direction], setPage] = useState([0, 0]);

  const content = {
    id: {
      title: "Apa Kata Klien Kami",
      subtitle: "Kepercayaan yang Dibangun Melalui Hasil Nyata",
      items: [
        {
          quote:
            "Profesionalisme HMP Lawfirm dalam menangani kasus perusahaan kami sungguh luar biasa. Mereka memberikan solusi yang tepat waktu dan efektif, jauh melampaui ekspektasi.",
          name: "Sarah Lestari",
          role: "Direktur Keuangan, PT. Inovasi Jaya",
          rating: 5,
        },
        {
          quote:
            "Keahlian tim HMP Lawfirm dalam hukum ketenagakerjaan sangat membantu perusahaan kami dalam menavigasi regulasi yang kompleks.",
          name: "Rudi Santoso",
          role: "Pengusaha Properti",
          rating: 5,
        },
        {
          quote:
            "Untuk pertama kalinya, saya membutuhkan bantuan hukum terkait hak cipta desain saya. HMP Lawfirm menjelaskan setiap langkah dengan sangat gamblang.",
          name: "Dian Pramono",
          role: "Desainer Kreatif",
          rating: 5,
        },
        {
          quote:
            "Sangat puas dengan pendampingan hukum HMP Lawfirm dalam transaksi properti saya. Mereka sangat teliti dan komunikatif.",
          name: "Bambang Wijaya",
          role: "Pengembang Properti",
          rating: 5,
        },
      ],
    },
    en: {
      title: "What Our Clients Say",
      subtitle: "Trust Built Through Real Results",
      items: [
        {
          quote:
            "HMP Lawfirm's professionalism in handling our corporate cases was truly outstanding. They provided timely and effective solutions.",
          name: "Sarah Lestari",
          role: "Finance Director, PT. Inovasi Jaya",
          rating: 5,
        },
        {
          quote:
            "The HMP Lawfirm team's expertise in employment law greatly helped our company navigate complex regulations.",
          name: "Rudi Santoso",
          role: "Property Entrepreneur",
          rating: 5,
        },
        {
          quote:
            "When I first needed legal help for my design copyright, HMP Lawfirm explained every step clearly.",
          name: "Dian Pramono",
          role: "Creative Designer",
          rating: 5,
        },
        {
          quote:
            "Very satisfied with HMP Lawfirm's legal assistance in my property transaction.",
          name: "Bambang Wijaya",
          role: "Property Developer",
          rating: 5,
        },
      ],
    },
  };

  const t = content[locale as keyof typeof content] || content.id;
  const currentIndex = page % t.items.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // Auto advance
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [page]);

  return (
    <section className="py-20 md:py-28 bg-navy-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-navy-200">{t.subtitle}</p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Main Card */}
          <div className="relative h-[300px] md:h-[250px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <Card className="bg-white text-navy-600 p-8 md:p-12">
                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(t.items[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-gold-500 text-gold-500"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-center">
                    <p className="text-lg md:text-xl italic leading-relaxed mb-6">
                      "{t.items[currentIndex].quote}"
                    </p>
                    <footer>
                      <div className="font-serif font-semibold text-navy-600">
                        {t.items[currentIndex].name}
                      </div>
                      <div className="text-sm text-navy-400">
                        {t.items[currentIndex].role}
                      </div>
                    </footer>
                  </blockquote>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gold-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-navy-600" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gold-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-navy-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {t.items.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  const newDirection = index > currentIndex ? 1 : -1;
                  setPage([index, newDirection]);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-gold-500"
                    : "bg-navy-300 hover:bg-navy-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
