export const SITE_NAME = "Al-Awan Furniture";

function resolveSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) return `https://${vercelUrl.replace(/\/$/, "")}`;

  return "https://al-awanfurniture.com";
}

export const SITE_URL = resolveSiteUrl();
export const PHONE_DISPLAY = "+971 56 459 4043";
export const PHONE_TEL = "tel:+971564594043";
export const WHATSAPP_NUMBER = "971564594043";
export const CONTACT_EMAIL = "alawanfurniture0@gmail.com";

export const BUSINESS_ADDRESS = "Industrial Area, Sajja, Sharjah, UAE";
export const MAP_URL =
  "https://maps.app.goo.gl/FtDSdeDKAT1fumKR6?g_st=iwb";
export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Industrial+Area+Sajja+Sharjah+UAE&hl=en&z=15&output=embed";

export const TRUST_ITEMS = [
  "Custom Made",
  "Quality Materials",
  "Professional Installation",
  "UAE Service",
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We discuss your space, requirements, style preferences, and budget expectations.",
  },
  {
    step: "02",
    title: "Measurement",
    description:
      "Accurate on-site measurements ensure your furniture fits perfectly within your room.",
  },
  {
    step: "03",
    title: "Design & Material Selection",
    description:
      "Choose finishes, fabrics, colours, and configurations tailored to your home.",
  },
  {
    step: "04",
    title: "Production",
    description:
      "Your furniture is crafted with attention to detail and quality finishing.",
  },
  {
    step: "05",
    title: "Installation",
    description:
      "Professional delivery and installation at your home across the UAE.",
  },
] as const;

export const WHY_CHOOSE = [
  {
    title: "Made to Fit Your Space",
    description:
      "Every piece is designed around your room dimensions, layout, and lifestyle.",
  },
  {
    title: "Attention to Finishing",
    description:
      "Premium materials and careful craftsmanship for a refined, lasting result.",
  },
  {
    title: "Custom Design Options",
    description:
      "Choose colours, materials, storage layouts, and details that suit your home.",
  },
  {
    title: "Direct Consultation",
    description:
      "Speak directly with our team to discuss your project and get clear guidance.",
  },
  {
    title: "Professional Installation",
    description:
      "We handle delivery and installation so your furniture is ready to use.",
  },
  {
    title: "Residential Furniture Expertise",
    description:
      "Specialists in bedrooms, living rooms, wardrobes, media walls, and more.",
  },
] as const;

export const ATTRIBUTION_PARAMS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;
