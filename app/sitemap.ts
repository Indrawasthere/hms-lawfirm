import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hmp-law.com";
  const locales = ["id", "en"];
  const routes = [
    "",
    "/tentang-kami",
    "/layanan-hukum",
    "/studi-kasus",
    "/riwayat-kasus",
    "/testimoni",
    "/kontak",
  ];

  const entries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
      });
    });
  });

  return entries;
}
