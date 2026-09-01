export type ServiceCategory =
  | "living-bedroom"
  | "storage-media"
  | "interior-finishing"
  | "specialized-rooms";

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceCustomization {
  title: string;
  items: string[];
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  category: ServiceCategory;
  headline: string;
  description: string;
  intro: string;
  heroImage: string;
  gallery: string[];
  benefits: string[];
  customization: ServiceCustomization[];
  faq: ServiceFAQ[];
  seoTitle: string;
  seoDescription: string;
  whatsappMessage: string;
  relatedProjectCategories: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  featured?: boolean;
}

export interface ServiceGroup {
  title: string;
  description: string;
  services: string[];
}
