"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Container from "@/app/components/ui/container";
import Card from "@/app/components/ui/card";
import Button from "@/app/components/ui/button";
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

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white pt-40 pb-20 md:pt-48 md:pb-32">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <Container className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-navy-100 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form - Left */}
            <div className="lg:col-span-2">
              <Card className="p-6 md:p-8">
                <h2 className="font-serif text-2xl font-semibold text-navy-600 mb-6">
                  {t.form.title}
                </h2>
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
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-600 mb-2">
                      {t.form.subject} *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition"
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
                      rows={6}
                      className="w-full px-4 py-3 rounded-2xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition resize-none"
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

            {/* Contact Info - Right */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <Card className="p-6 bg-gold-50 border-gold-200">
                <h3 className="font-serif text-xl font-semibold text-navy-600 mb-4">
                  {t.info.title}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-navy-600">Alamat</p>
                      <p className="text-sm text-navy-500">{t.info.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-navy-600">Telepon</p>
                      <a
                        href={`tel:${t.info.phone}`}
                        className="text-sm text-navy-500 hover:text-gold-500"
                      >
                        {t.info.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-navy-600">Email</p>
                      <a
                        href={`mailto:${t.info.email}`}
                        className="text-sm text-navy-500 hover:text-gold-500 break-all"
                      >
                        {t.info.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-navy-600">
                        Jam Operasional
                      </p>
                      <p className="text-sm text-navy-500">{t.info.hours}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick CTA */}
              <Card className="p-6 bg-navy-900 text-white">
                <h4 className="font-serif font-semibold mb-3">
                  {locale === "id"
                    ? "Butuh Bantuan Cepat?"
                    : "Need Quick Help?"}
                </h4>
                <p className="text-sm text-navy-100 mb-4">
                  {locale === "id"
                    ? "Tim kami siap merespon dalam 1 jam kerja"
                    : "Our team responds within 1 business hour"}
                </p>
                <div className="space-y-3">
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
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6">
                <h4 className="font-serif font-semibold text-navy-600 mb-2">
                  {t.social.title}
                </h4>
                <p className="text-sm text-navy-400 mb-4">{t.social.desc}</p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-2 bg-navy-100 rounded-2xl hover:bg-gold-100 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-navy-600" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-navy-100 rounded-2xl hover:bg-gold-100 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-navy-600" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-navy-100 rounded-2xl hover:bg-gold-100 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-navy-600" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-navy-50">
        <Container>
          <h2 className="font-serif text-3xl font-bold text-navy-600 mb-8 text-center">
            {t.faq.title}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {t.faq.items.map((item, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="font-semibold text-navy-600 mb-2">{item.q}</h3>
                <p className="text-navy-500 text-sm">{item.a}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="font-serif text-3xl font-bold text-navy-600 mb-8 text-center">
            {t.map.title}
          </h2>
          <Card className="p-4 h-[400px] bg-navy-50 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-navy-300 mx-auto mb-4" />
              <p className="text-navy-500">{t.info.address}</p>
              <p className="text-sm text-navy-400 mt-2">
                {locale === "id"
                  ? "Kantor virtual - Konsultasi via online/telepon"
                  : "Virtual office - Consultation via online/phone"}
              </p>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
