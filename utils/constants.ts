import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "6285774968522";
export const EMAIL = "advokathaerudinmuhamad@gmail.com";

export const siteConfig = {
  name: "HMP Lawfirm",
  description: {
    id: "Mitra hukum terpercaya dengan integritas, keahlian, dan dedikasi",
    en: "Trusted legal partner with integrity, expertise, and dedication",
  },
  url: "https://hmplawfirm.com",
  ogImage: "https://hmplawfirm.com/og.jpg",
  links: {
    whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
    email: `mailto:${EMAIL}`,
  },
};
