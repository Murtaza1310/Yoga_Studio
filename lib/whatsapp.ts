// WhatsApp configuration for Yoga Studio
export const WHATSAPP_NUMBER = "919999999999"; // Replace with actual WhatsApp number

export const WHATSAPP_MESSAGE = `Hello Yoga Studio,

I am interested in joining your yoga classes.

Name:
Phone Number:
Preferred Class (Hatha / Ashtanga / Meditation / Women / Seniors):
Experience Level (Beginner / Intermediate / Advanced):
Preferred Time (Morning / Evening):

Please share more details. Thank you.`;

export function getWhatsAppLink(customMessage?: string): string {
  const message = encodeURIComponent(customMessage || WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
