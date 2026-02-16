"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Container from "@/app/components/ui/container";
import Card from "@/app/components/ui/card";
import Button from "@/app/components/ui/button";
import AnimatedSection from "@/app/components/ui/animated-section";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Linkedin,
  Instagram,
  Twitter,
  CheckCircle,
} from "lucide-react";

export default function KontakPage() {
  const params = useParams();
  const locale = params.locale as string;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    id: {
      title: "Hubungi Kami",
      subtitle: "Tim Hukum Kami Siap Membantu Anda 24/7",
      form: {
        title: "Kirim Pesan",
        name: "Nama Lengkap",
        email: "Email",
        phone: "Nomor Telepon",
        subject: "Subjek",
        message: "Deskripsi Kasus",
        submit: "Kirim Pesan",
        sending: "Mengirim...",
        success: "Pesan berhasil dikirim!",
      },
      info: {
        title: "Informasi Kontak",
        address: "Virtual Office, Jakarta",
        phone: "+62 857-7496-8522",
        email: "advokathaerudinmuhamad@gmail.com",
        hours: "Senin - Sabtu: 10.00 - 19.00 WIB",
        consultation: "Konsultasi via WhatsApp",
        emailUs: "Email Tim Hukum",
      },
      social: {
        title: "Ikuti Kami",
        desc: "Dapatkan update dan informasi hukum terbaru",
      },
      map: {
        title: "Lokasi Kami",
      },
      faq: {
        title: "Pertanyaan Umum",
        items: [
          {
            q: "Apakah konsultasi awal gratis?",
            a: "Ya, kami memberikan konsultasi awal gratis selama 30 menit untuk memahami kebutuhan hukum Anda.",
          },
          {
            q: "Bagaimana cara membuat janji konsultasi?",
            a: "Anda dapat menghubungi kami via WhatsApp, email, atau mengisi form kontak di atas.",
          },
          {
            q: "Apakah ada biaya tersembunyi?",
            a: "Tidak. Kami menerapkan sistem biaya transparan dan akan menginformasikan semua biaya di awal.",
          },
        ],
      },
    },
    en: {
      title: "Contact Us",
      subtitle: "Our Legal Team Is Ready to Help You 24/7",
      form: {
        title: "Send Message",
        name: "Full Name",
        email: "Email",
        phone: "Phone Number",
        subject: "Subject",
        message: "Case Description",
        submit: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
      },
      info: {
        title: "Contact Information",
        address: "Virtual Office, Jakarta",
        phone: "+62 857-7496-8522",
        email: "advokathaerudinmuhamad@gmail.com",
        hours: "Monday - Saturday: 10:00 - 19:00 WIB",
        consultation: "Consult via WhatsApp",
        emailUs: "Email Legal Team",
      },
      social: {
        title: "Follow Us",
        desc: "Get the latest legal updates and information",
      },
      map: {
        title: "Our Location",
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            q: "Is initial consultation free?",
            a: "Yes, we provide free 30-minute initial consultation to understand your legal needs.",
          },
          {
            q: "How to schedule a consultation?",
            a: "You can contact us via WhatsApp, email, or fill out the contact form above.",
          },
          {
            q: "Are there any hidden fees?",
            a: "No. We implement transparent fee system and will inform all costs upfront.",
          },
        ],
      },
    },
  };

  const t = content[locale as keyof typeof content] || content.id;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert(t.form.success);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* ===== HERO SECTION - NAVY ===== */}
      <section className="relative bg-navy-900 text-white pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Decorative Elements */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-20 -right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        />

        <Container className="relative z-10 text-center">
          <AnimatedSection animation="fadeIn" delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t.title}
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={0.3}>
            <p className="text-xl text-navy-100 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </AnimatedSection>

          {/* Quick Contact Badges */}
          <AnimatedSection animation="fadeIn" delay={0.5}>
            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.a
                variants={itemVariants}
                href={`tel:${t.info.phone}`}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={16} />
                <span className="text-sm">+62 857-7496-8522</span>
              </motion.a>
              <motion.a
                variants={itemVariants}
                href={`mailto:${t.info.email}`}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={16} />
                <span className="text-sm">
                  advokathaerudinmuhamad@gmail.com
                </span>
              </motion.a>
            </motion.div>
          </AnimatedSection>
        </Container>
      </section>

      {/* ===== CONTACT FORM & INFO ===== */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form - Left */}
            <motion.div
              className="lg:col-span-2"
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <Card className="p-6 md:p-8">
                <motion.h2
                  variants={itemVariants}
                  className="font-serif text-2xl font-semibold text-navy-600 mb-6"
                >
                  {t.form.title}
                </motion.h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={containerVariants}
                  >
                    <motion.div variants={inputVariants}>
                      <label className="block text-sm font-medium text-navy-600 mb-2">
                        {t.form.name} *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition"
                      />
                    </motion.div>
                    <motion.div variants={inputVariants}>
                      <label className="block text-sm font-medium text-navy-600 mb-2">
                        {t.form.email} *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div variants={inputVariants}>
                    <label className="block text-sm font-medium text-navy-600 mb-2">
                      {t.form.phone} *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition"
                    />
                  </motion.div>

                  <motion.div variants={inputVariants}>
                    <label className="block text-sm font-medium text-navy-600 mb-2">
                      {t.form.subject} *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition"
                    />
                  </motion.div>

                  <motion.div variants={inputVariants}>
                    <label className="block text-sm font-medium text-navy-600 mb-2">
                      {t.form.message} *
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-2xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition resize-none"
                    />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      isLoading={isSubmitting}
                    >
                      <Send className="mr-2 w-4 h-4" />
                      {isSubmitting ? t.form.sending : t.form.submit}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info - Right */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Contact Cards */}
              <motion.div variants={itemVariants}>
                <Card className="p-6 bg-gold-50 border-gold-200 group">
                  <h3 className="font-serif text-xl font-semibold text-navy-600 mb-4">
                    {t.info.title}
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: MapPin,
                        label: "Alamat",
                        value: t.info.address,
                        href: null,
                      },
                      {
                        icon: Phone,
                        label: "Telepon",
                        value: t.info.phone,
                        href: `tel:${t.info.phone}`,
                      },
                      {
                        icon: Mail,
                        label: "Email",
                        value: t.info.email,
                        href: `mailto:${t.info.email}`,
                      },
                      {
                        icon: Clock,
                        label: "Jam Operasional",
                        value: t.info.hours,
                        href: null,
                      },
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-3"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Icon className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                          <div>
                            <p className="font-medium text-navy-600">
                              {item.label}
                            </p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="text-sm text-navy-500 hover:text-gold-500 transition-colors"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-sm text-navy-500">
                                {item.value}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>

              {/* Quick CTA */}
              <motion.div variants={itemVariants}>
                <Card className="p-6 bg-navy-900 text-white overflow-hidden relative">
                  {/* Decorative elements */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl"
                  />

                  <h4 className="font-serif font-semibold mb-3 relative z-10">
                    {locale === "id"
                      ? "Butuh Bantuan Cepat?"
                      : "Need Quick Help?"}
                  </h4>
                  <p className="text-sm text-navy-100 mb-4 relative z-10">
                    {locale === "id"
                      ? "Tim kami siap merespon dalam 1 jam kerja"
                      : "Our team responds within 1 business hour"}
                  </p>
                  <div className="space-y-3 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        fullWidth
                        onClick={() =>
                          window.open("https://wa.me/6285774968522", "_blank")
                        }
                        className="border-white text-white hover:bg-white/10"
                      >
                        <MessageCircle className="mr-2 w-4 h-4" />
                        {t.info.consultation}
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        fullWidth
                        onClick={() =>
                          (window.location.href = `mailto:${t.info.email}`)
                        }
                        className="border-white text-white hover:bg-white/10"
                      >
                        <Mail className="mr-2 w-4 h-4" />
                        {t.info.emailUs}
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>

              {/* Social Media */}
              <motion.div variants={itemVariants}>
                <Card className="p-6">
                  <h4 className="font-serif font-semibold text-navy-600 mb-2">
                    {t.social.title}
                  </h4>
                  <p className="text-sm text-navy-400 mb-4">{t.social.desc}</p>
                  <div className="flex gap-4">
                    {[
                      { icon: Linkedin, href: "#" },
                      { icon: Instagram, href: "#" },
                      { icon: Twitter, href: "#" },
                    ].map((social, idx) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={idx}
                          href={social.href}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-navy-100 rounded-2xl hover:bg-gold-100 transition-colors"
                        >
                          <Icon className="w-5 h-5 text-navy-600" />
                        </motion.a>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-16 bg-navy-50">
        <Container>
          <AnimatedSection animation="fadeIn" delay={0.1}>
            <h2 className="font-serif text-3xl font-bold text-navy-600 mb-8 text-center">
              {t.faq.title}
            </h2>
          </AnimatedSection>

          <motion.div
            className="max-w-3xl mx-auto space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {t.faq.items.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="p-6 group hover:shadow-lg transition-all">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="font-semibold text-navy-600 mb-2 group-hover:text-gold-600 transition-colors">
                      {item.q}
                    </h3>
                    <p className="text-navy-500 text-sm">{item.a}</p>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section className="py-16 bg-white">
        <Container>
          <AnimatedSection animation="fadeIn" delay={0.1}>
            <h2 className="font-serif text-3xl font-bold text-navy-600 mb-8 text-center">
              {t.map.title}
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={0.2}>
            <Card className="p-4 h-[400px] bg-navy-50 flex items-center justify-center overflow-hidden relative group">
              {/* Decorative map pattern */}
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 20px 20px, #0A1A3A 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center relative z-10"
              >
                <MapPin className="w-16 h-16 text-gold-500 mx-auto mb-4" />
                <p className="text-navy-700 font-semibold">{t.info.address}</p>
                <p className="text-sm text-navy-500 mt-2">
                  {locale === "id"
                    ? "Kantor virtual - Konsultasi via online/telepon"
                    : "Virtual office - Consultation via online/phone"}
                </p>
              </motion.div>
            </Card>
          </AnimatedSection>
        </Container>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="pb-16 bg-white">
        <Container>
          <AnimatedSection animation="fadeIn" delay={0.3}>
            <Card className="text-center p-8 bg-gradient-to-br from-navy-900 to-navy-800 text-white border-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <CheckCircle className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-bold mb-2">
                  {locale === "id"
                    ? "Siap Bantu Kasus Hukum Anda"
                    : "Ready to Help Your Legal Case"}
                </h3>
                <p className="text-navy-200 mb-6 max-w-2xl mx-auto">
                  {locale === "id"
                    ? "Tim kami siap memberikan konsultasi hukum terbaik untuk Anda"
                    : "Our team is ready to provide the best legal consultation for you"}
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <a
                    href={`https://wa.me/6285774968522`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-navy-900 font-semibold rounded-2xl hover:bg-gold-600 transition-colors"
                  >
                    <MessageCircle size={20} />
                    {locale === "id"
                      ? "Konsultasi Gratis"
                      : "Free Consultation"}
                  </a>
                </motion.div>
              </motion.div>
            </Card>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
