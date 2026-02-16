"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import Card from "../ui/card";

export default function Team() {
  const params = useParams();
  const locale = params.locale as string;

  const content = {
    id: {
      title: "Tim Hukum Profesional",
      subtitle: "Advokat Berpengalaman dengan Spesialisasi Beragam",
      members: [
        {
          name: "Haerudin Muhamad, SH.",
          role: "Founder & Managing Partner",
          specialty: "Hukum Korporat & Litigasi",
          bio: "Lebih dari 15 tahun pengalaman menangani kasus-kasus korporat kompleks dan litigasi di berbagai pengadilan.",
          email: "haerudin@hmplawfirm.com",
          linkedin: "#",
        },
        {
          name: "Nissa Rammadhana, SH, MM.",
          role: "Senior Associate",
          specialty: "Hukum Properti & Kontrak",
          bio: "Spesialis dalam transaksi properti, sengketa lahan, dan penyusunan kontrak bisnis.",
          email: "nissa@hmplawfirm.com",
          linkedin: "#",
        },
        {
          name: "Rizki Ananda, SH.",
          role: "Associate",
          specialty: "Kekayaan Intelektual",
          bio: "Pakar dalam perlindungan merek, hak cipta, dan paten untuk industri kreatif dan teknologi.",
          email: "rizki@hmplawfirm.com",
          linkedin: "#",
        },
      ],
    },
    en: {
      title: "Professional Legal Team",
      subtitle: "Experienced Advocates with Diverse Specializations",
      members: [
        {
          name: "Haerudin Muhamad, SH.",
          role: "Founder & Managing Partner",
          specialty: "Corporate Law & Litigation",
          bio: "Over 15 years experience handling complex corporate cases and litigation in various courts.",
          email: "haerudin@hmplawfirm.com",
          linkedin: "#",
        },
        {
          name: "Nissa Rammadhana, SH, MM.",
          role: "Senior Associate",
          specialty: "Property Law & Contracts",
          bio: "Specialist in property transactions, land disputes, and business contract drafting.",
          email: "nissa@hmplawfirm.com",
          linkedin: "#",
        },
        {
          name: "Rizki Ananda, SH.",
          role: "Associate",
          specialty: "Intellectual Property",
          bio: "Expert in trademark protection, copyrights, and patents for creative and tech industries.",
          email: "rizki@hmplawfirm.com",
          linkedin: "#",
        },
      ],
    },
  };

  const t = content[locale as keyof typeof content] || content.en;

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

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.members.map((member, index) => (
            <Card key={index} variant="hover" className="text-center group">
              {/* Avatar Placeholder */}
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-navy-500 to-navy-700 flex items-center justify-center text-white text-3xl font-serif">
                  {member.name.charAt(0)}
                </div>
              </div>

              <h3 className="font-serif text-xl font-semibold text-navy-600 mb-1">
                {member.name}
              </h3>

              <p className="text-gold-500 font-medium text-sm mb-2">
                {member.role}
              </p>

              <p className="text-xs text-navy-400 uppercase tracking-wider mb-3">
                {member.specialty}
              </p>

              <p className="text-navy-500 text-sm leading-relaxed mb-4">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3 pt-2 border-t border-navy-100">
                <a
                  href={`mailto:${member.email}`}
                  className="p-2 text-navy-400 hover:text-gold-500 transition-colors"
                >
                  <Mail size={18} />
                </a>
                <a
                  href={member.linkedin}
                  className="p-2 text-navy-400 hover:text-gold-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
