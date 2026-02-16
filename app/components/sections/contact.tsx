"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import Card from "../ui/card";
import Button from "../ui/button";

export default function Contact() {
  const params = useParams();
  const locale = params.locale as string;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const content = {
    id: {
      title: "Dapatkan Solusi Hukum Anda Sekarang",
      subtitle:
        "Tim ahli kami siap memberikan konsultasi awal yang komprehensif",
      form: {
        name: "Nama Lengkap",
        email: "Email",
        phone: "Nomor Telepon",
        message: "Deskripsi Kasus",
        submit: "Kirim Pesan",
        sending: "Mengirim...",
      },
      info: {
        title: "Informasi Kontak",
        address: "Virtual Office, Jakarta",
        phone: "+62 857-7496-8522",
        email: "advokathaerudinmuhamad@gmail.com",
        hours: "Senin - Sabtu: 10.00 - 19.00 WIB",
      },
      cta: {
        wa: "Konsultasi via WhatsApp",
        email: "Email Tim Hukum",
      },
    },
    en: {
      title: "Get Your Legal Solution Now",
      subtitle:
        "Our expert team is ready to provide comprehensive initial consultation",
      form: {
        name: "Full Name",
        email: "Email",
        phone: "Phone Number",
        message: "Case Description",
        submit: "Send Message",
        sending: "Sending...",
      },
      info: {
        title: "Contact Information",
        address: "Virtual Office, Jakarta",
        phone: "+62 857-7496-8522",
        email: "advokathaerudinmuhamad@gmail.com",
        hours: "Monday - Saturday: 10:00 - 19:00 WIB",
      },
      cta: {
        wa: "Consult via WhatsApp",
        email: "Email Legal Team",
      },
    },
  };

  const t = content[locale as keyof typeof content] || content.en;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert(
      locale === "id"
        ? "Pesan berhasil dikirim!"
        : "Message sent successfully!",
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-600 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-navy-500">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card variant="default" className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-600 mb-2">
                      {t.form.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition"
                      placeholder={t.form.name}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-600 mb-2">
                      {t.form.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition"
                      placeholder={t.form.email}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-600 mb-2">
                    {t.form.phone} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition"
                    placeholder={t.form.phone}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-600 mb-2">
                    {t.form.message} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-2xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition resize-none"
                    placeholder={t.form.message}
                  />
                </div>

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
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card variant="default" className="p-6">
              <h3 className="font-serif text-xl font-semibold text-navy-600 mb-6">
                {t.info.title}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-navy-600">Address</p>
                    <p className="text-navy-500 text-sm">{t.info.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-navy-600">Phone</p>
                    <a
                      href={`tel:${t.info.phone}`}
                      className="text-navy-500 text-sm hover:text-gold-500 transition-colors"
                    >
                      {t.info.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-navy-600">Email</p>
                    <a
                      href={`mailto:${t.info.email}`}
                      className="text-navy-500 text-sm hover:text-gold-500 transition-colors break-all"
                    >
                      {t.info.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-navy-600">Hours</p>
                    <p className="text-navy-500 text-sm">{t.info.hours}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick CTA Cards */}
            <Card variant="default" className="p-6 bg-gold-50 border-gold-200">
              <h4 className="font-serif font-semibold text-navy-600 mb-3">
                {locale === "id" ? "Butuh Bantuan Cepat?" : "Need Quick Help?"}
              </h4>
              <p className="text-sm text-navy-500 mb-4">
                {locale === "id"
                  ? "Tim kami siap merespon dalam 1 jam kerja"
                  : "Our team responds within 1 business hour"}
              </p>
              <div className="space-y-3">
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  onClick={() =>
                    window.open("https://wa.me/6285774968522", "_blank")
                  }
                >
                  <MessageCircle className="mr-2 w-4 h-4" />
                  {t.cta.wa}
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  fullWidth
                  onClick={() =>
                    (window.location.href =
                      "mailto:advokathaerudinmuhamad@gmail.com")
                  }
                >
                  <Mail className="mr-2 w-4 h-4" />
                  {t.cta.email}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
