import { Metadata } from "next";

interface SEOParams {
  title: string;
  description: string;
  locale: string;
  path?: string;
  images?: string[];
}

export const generateMetadata = ({
  title,
  description,
  locale,
  path = "",
  images = ["/og-image.jpg"],
}: SEOParams): Metadata => {
  const baseUrl = "https://hmplawfirm.com";
  const url = `${baseUrl}/${locale}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        id: `${baseUrl}/id${path}`,
        en: `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "HMP Lawfirm",
      images: images.map((img) => ({
        url: img.startsWith("http") ? img : `${baseUrl}${img}`,
        width: 1200,
        height: 630,
      })),
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((img) =>
        img.startsWith("http") ? img : `${baseUrl}${img}`,
      ),
    },
  };
};
