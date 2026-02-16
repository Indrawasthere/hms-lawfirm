import { Inter, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/ui/navbar";
import Footer from "@/app/components/ui/footer";
import FloatingWhatsApp from "@/app/components/ui/floating-whatsapp";
import { siteConfig } from "@/utils/constants";
import ConditionalPadding from "@/app/components/ui/conditional-padding"; // <-- NEW
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const locales = ["id", "en"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const description =
    siteConfig.description[locale as keyof typeof siteConfig.description] ||
    siteConfig.description.id;

  return {
    title: {
      template: "%s | HMP Lawfirm",
      default: `HMP Lawfirm - ${description}`,
    },
    description,
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: {
        id: `${siteConfig.url}/id`,
        en: `${siteConfig.url}/en`,
      },
    },
    openGraph: {
      title: `HMP Lawfirm - ${description}`,
      description,
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `HMP Lawfirm - ${description}`,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteConfig.name,
    description:
      siteConfig.description[locale as keyof typeof siteConfig.description] ||
      siteConfig.description.id,
    url: `${siteConfig.url}/${locale}`,
    logo: `${siteConfig.url}/logo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-857-7496-8522",
      contactType: "customer service",
      availableLanguage: ["Indonesian", "English"],
    },
    sameAs: ["https://linkedin.com/company/hmp-lawfirm"],
  };

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="alternate" href={`${siteConfig.url}/id`} hrefLang="id" />
        <link rel="alternate" href={`${siteConfig.url}/en`} hrefLang="en" />
        <link
          rel="alternate"
          href={`${siteConfig.url}/id`}
          hrefLang="x-default"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <ConditionalPadding>{children}</ConditionalPadding>
        {/* ======================================== */}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
