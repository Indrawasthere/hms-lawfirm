import { useTranslations } from "next-intl";
import { Metadata } from "next";
import Container from "@/app/components/ui/container";
import Card from "@/app/components/ui/card";
import Team from "@/app/components/sections/team";
import { Shield, Target, Heart, Award } from "lucide-react";

// ===== CLIENT COMPONENT UNTUK ANIMATIONS =====
import AnimatedSection from "@/app/components/ui/animated-section";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const titles = {
    id: "Tentang HMP Lawfirm - Mitra Hukum Terpercaya",
    en: "About HMP Lawfirm - Trusted Legal Partner",
  };

  const descriptions = {
    id: "Kenali lebih dekat HMP Lawfirm, firma hukum dengan integritas, keahlian, dan dedikasi tinggi dalam memberikan solusi hukum terbaik.",
    en: "Get to know HMP Lawfirm, a law firm with integrity, expertise, and high dedication in providing the best legal solutions.",
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.id,
    description:
      descriptions[locale as keyof typeof descriptions] || descriptions.id,
  };
}

export default function TentangKamiPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const content = {
    id: {
      hero: {
        title: "Tentang HMP Lawfirm",
        subtitle: "Mitra Hukum Terpercaya dengan Integritas & Dedikasi Tinggi",
      },
      story: {
        title: "Kisah Kami",
        paragraphs: [
          "HMP Lawfirm didirikan dengan visi untuk memberikan layanan hukum yang tidak hanya berkualitas tinggi, tetapi juga mudah diakses dan dipahami oleh setiap klien. Kami percaya bahwa setiap orang berhak mendapatkan keadilan dan pendampingan hukum yang profesional.",
          "Dengan pengalaman lebih dari 15 tahun, tim kami telah menangani berbagai kasus kompleks, mulai dari hukum korporat, litigasi, properti, hingga kekayaan intelektual. Kami bangga menjadi mitra terpercaya bagi klien korporat maupun individu.",
          "Kami terus berkembang dan beradaptasi dengan dinamika hukum terkini untuk memastikan bahwa setiap solusi yang kami berikan adalah yang terbaik dan terupdate.",
        ],
      },
      vision: {
        title: "Visi & Misi",
        vision:
          "Menjadi firma hukum terdepan di Indonesia yang dikenal karena integritas, keahlian, dan pendekatan klien-sentris.",
        missions: [
          "Memberikan solusi hukum yang strategis dan inovatif",
          "Membangun hubungan jangka panjang berdasarkan kepercayaan",
          "Mengembangkan tim profesional yang unggul",
          "Berkontribusi pada perkembangan hukum di Indonesia",
        ],
      },
      values: {
        title: "Nilai-Nilai Kami",
        items: [
          {
            icon: "Shield",
            title: "Integritas",
            desc: "Kami berpegang teguh pada kode etik dan standar profesional tertinggi.",
          },
          {
            icon: "Award",
            title: "Keahlian",
            desc: "Tim kami terus mengasah kemampuan dan pengetahuan di bidang masing-masing.",
          },
          {
            icon: "Heart",
            title: "Dedikasi",
            desc: "Kami memberikan perhatian penuh untuk setiap kasus yang ditangani.",
          },
          {
            icon: "Target",
            title: "Hasil Optimal",
            desc: "Kami fokus pada pencapaian hasil terbaik untuk setiap klien.",
          },
        ],
      },
    },
    en: {
      hero: {
        title: "About HMP Lawfirm",
        subtitle: "Trusted Legal Partner with Integrity & High Dedication",
      },
      story: {
        title: "Our Story",
        paragraphs: [
          "HMP Lawfirm was founded with the vision to provide legal services that are not only high quality, but also easily accessible and understood by every client. We believe that everyone deserves justice and professional legal assistance.",
          "With over 15 years of experience, our team has handled various complex cases, from corporate law, litigation, property, to intellectual property. We are proud to be a trusted partner for corporate and individual clients.",
          "We continue to grow and adapt to the latest legal dynamics to ensure that every solution we provide is the best and most up-to-date.",
        ],
      },
      vision: {
        title: "Vision & Mission",
        vision:
          "To become a leading law firm in Indonesia known for integrity, expertise, and client-centric approach.",
        missions: [
          "Provide strategic and innovative legal solutions",
          "Build long-term relationships based on trust",
          "Develop excellent professional team",
          "Contribute to legal development in Indonesia",
        ],
      },
      values: {
        title: "Our Values",
        items: [
          {
            icon: "Shield",
            title: "Integrity",
            desc: "We adhere to the highest professional standards and code of ethics.",
          },
          {
            icon: "Award",
            title: "Expertise",
            desc: "Our team continuously hones skills and knowledge in their respective fields.",
          },
          {
            icon: "Heart",
            title: "Dedication",
            desc: "We give full attention to every case we handle.",
          },
          {
            icon: "Target",
            title: "Optimal Results",
            desc: "We focus on achieving the best results for every client.",
          },
        ],
      },
    },
  };

  const t = content[locale as keyof typeof content] || content.id;

  const icons = {
    Shield: Shield,
    Award: Award,
    Heart: Heart,
    Target: Target,
  };

  return (
    <>
      {/* ===== HERO SECTION - NAVY ===== */}
      <section className="bg-navy-900 text-white pt-40 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Decorative Elements */}
        <div className="absolute top-20 -right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <Container className="relative z-10 text-center">
          {/* Title with fade in */}
          <AnimatedSection animation="fadeIn" delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t.hero.title}
            </h1>
          </AnimatedSection>

          {/* Subtitle with slide up */}
          <AnimatedSection animation="slideUp" delay={0.3}>
            <p className="text-xl text-navy-100 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* ===== STORY SECTION - WHITE ===== */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fadeIn" delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-600 mb-6 text-center">
                {t.story.title}
              </h2>
            </AnimatedSection>

            <div className="space-y-4 text-navy-500 leading-relaxed">
              {t.story.paragraphs.map((para, idx) => (
                <AnimatedSection
                  key={idx}
                  animation="fadeIn"
                  delay={0.2 + idx * 0.1}
                >
                  <p>{para}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== VISION MISSION - NAVY-50 ===== */}
      <section className="py-16 md:py-24 bg-navy-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision Card */}
            <AnimatedSection animation="slideInLeft" delay={0.1}>
              <Card className="p-8 h-full">
                <h3 className="font-serif text-2xl font-bold text-navy-600 mb-4">
                  {t.vision.title.split("&")[0]}
                </h3>
                <p className="text-navy-500 italic mb-6">"{t.vision.vision}"</p>
              </Card>
            </AnimatedSection>

            {/* Mission Card */}
            <AnimatedSection animation="slideInRight" delay={0.2}>
              <Card className="p-8 h-full">
                <h3 className="font-serif text-2xl font-bold text-navy-600 mb-4">
                  {t.vision.title.split("&")[1]?.trim() || "Misi"}
                </h3>
                <ul className="space-y-3">
                  {t.vision.missions.map((mission, idx) => (
                    <AnimatedSection
                      key={idx}
                      animation="fadeIn"
                      delay={0.3 + idx * 0.1}
                      className="flex items-start gap-3"
                    >
                      <span className="text-gold-500 font-bold">•</span>
                      <span className="text-navy-500">{mission}</span>
                    </AnimatedSection>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* ===== VALUES SECTION - WHITE ===== */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <AnimatedSection animation="fadeIn" delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-600 mb-12 text-center">
              {t.values.title}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.items.map((item, idx) => {
              const Icon = icons[item.icon as keyof typeof icons];
              return (
                <AnimatedSection
                  key={idx}
                  animation="scaleIn"
                  delay={0.2 + idx * 0.1}
                >
                  <Card variant="hover" className="text-center p-6 group">
                    <div className="inline-flex p-3 bg-gold-100 rounded-full mb-4 group-hover:bg-gold-500 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-gold-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-navy-600 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-navy-500 text-sm">{item.desc}</p>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <AnimatedSection animation="fadeIn" delay={0.3}>
        <Team />
      </AnimatedSection>
    </>
  );
}
