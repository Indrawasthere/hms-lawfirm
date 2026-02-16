import { WHATSAPP_NUMBER } from "./constants";

export const generateWhatsAppLink = (
  message: string,
  locale: string = "id",
) => {
  const defaultMessage = {
    id: "Halo, saya ingin konsultasi hukum dengan HMP Lawfirm.",
    en: "Hello, I would like to consult with HMP Lawfirm.",
  };

  const text = encodeURIComponent(
    message ||
      defaultMessage[locale as keyof typeof defaultMessage] ||
      defaultMessage.id,
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};
