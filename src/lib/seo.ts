import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, BUSINESS_ADDRESS } from "@/lib/constants";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_AE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Al-Awan Furniture",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    image: `${SITE_URL}/favicon.png`,
    telephone: "+971564594043",
    email: "alawanfurniture0@gmail.com",
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sajja",
      addressRegion: "Sharjah",
      addressCountry: "AE",
      streetAddress: BUSINESS_ADDRESS,
    },
    description:
      "Premium custom furniture, upholstery, and interior solutions for homes across the UAE.",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Al-Awan Furniture",
    url: SITE_URL,
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Al-Awan Furniture",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    url: `${SITE_URL}/services/${service.slug}`,
  };
}
