import type { Project } from "@/types";

export const projectCategories = [
  "All",
  "Sofas",
  "Bedrooms",
  "TV Units",
  "Wardrobes",
  "Kids Rooms",
  "Wall Panels",
  "Gaming Rooms",
  "Upholstery",
  "Living Rooms",
] as const;

/** Map portfolio categories to their matching service page. */
export const projectCategoryToServiceSlug: Record<string, string> = {
  Sofas: "custom-sofas",
  Bedrooms: "custom-beds",
  "TV Units": "tv-units",
  Wardrobes: "cupboards",
  "Kids Rooms": "kids-rooms",
  "Wall Panels": "wall-paneling",
  "Gaming Rooms": "gaming-rooms",
  Upholstery: "sofa-bed-upholstery",
  "Living Rooms": "curtains",
};

export function getServiceHrefForProjectCategory(category: string): string {
  const slug = projectCategoryToServiceSlug[category];
  return slug ? `/services/${slug}` : "/services";
}

export function getServiceHrefForProject(project: Project): string {
  if (project.serviceSlug) return `/services/${project.serviceSlug}`;
  return getServiceHrefForProjectCategory(project.category);
}

export const projects: Project[] = [
  {
    id: "media-wall-01",
    title: "Contemporary Media Wall",
    category: "TV Units",
    description:
      "A full-width media wall with integrated display shelving and concealed storage, finished in warm wood tones.",
    images: [
      "/images/services/tv-units/IMG-20251223-WA0110.jpg",
      "/images/services/tv-units/IMG-20251223-WA0111-1024x1010.jpg",
      "/images/services/tv-units/IMG-20251223-WA0112-819x1024.jpg",
    ],
    featured: true,
  },
  {
    id: "wardrobe-01",
    title: "Fitted Bedroom Wardrobe",
    category: "Wardrobes",
    description:
      "Floor-to-ceiling fitted wardrobe with sliding doors and optimized internal storage layout.",
    images: [
      "/images/services/cupboards/IMG-20251223-WA0101.jpg",
      "/images/services/cupboards/IMG-20251223-WA0102-981x1024.jpg",
      "/images/services/cupboards/IMG-20251223-WA0106-1024x1016.jpg",
    ],
    featured: true,
  },
  {
    id: "bedroom-panel-01",
    title: "Bed with Wall Panel Headboard",
    category: "Wall Panels",
    description:
      "Custom bed with fluted wall panel headboard surround, creating a refined focal point for the bedroom.",
    images: [
      "/images/services/wall-paneling/IMG-20251223-WA0061.jpg",
      "/images/services/wall-paneling/IMG-20251223-WA0063-808x1024.jpg",
      "/images/services/wall-paneling/IMG-20251223-WA0065-1-862x1024.jpg",
    ],
    featured: true,
  },
  {
    id: "kids-room-01",
    title: "Kids Bedroom Suite",
    category: "Kids Rooms",
    description:
      "A complete kids room with custom bed, study area, and integrated storage in a bright, playful layout.",
    images: [
      "/images/services/kids-rooms/IMG-20251223-WA0039-840x1024.jpg",
      "/images/services/kids-rooms/IMG-20251223-WA0041-1024x809.jpg",
      "/images/services/kids-rooms/IMG-20251223-WA0043-930x1024.jpg",
    ],
    featured: true,
  },
  {
    id: "curtains-01",
    title: "Elegant Living Room Curtains",
    category: "Living Rooms",
    description:
      "Made-to-measure curtains in layered fabrics, adding softness and privacy to a contemporary living space.",
    images: [
      "/images/services/curtains/IMG-20251223-WA0120.jpg",
      "/images/services/curtains/IMG-20251223-WA0121-819x1024.jpg",
      "/images/services/curtains/IMG-20251223-WA0125-1024x1024.jpg",
    ],
    featured: true,
  },
  {
    id: "dressing-01",
    title: "Bedroom Dressing Area",
    category: "Bedrooms",
    serviceSlug: "vanity-tables",
    description:
      "Custom dressing table with mirror integration and drawer storage, coordinated with bedroom furniture.",
    images: [
      "/images/services/vanity-tables/vanity-01.jpeg",
      "/images/services/vanity-tables/vanity-02.jpeg",
      "/images/services/vanity-tables/vanity-03.jpeg",
    ],
    featured: true,
  },
  {
    id: "sofa-bed-01",
    title: "Master Bedroom Suite",
    category: "Bedrooms",
    serviceSlug: "custom-beds",
    description:
      "Custom bed design with upholstered headboard and complementary bedside storage.",
    images: [
      "/images/services/sofas-beds/IMG-20251223-WA0071.jpg",
      "/images/services/sofas-beds/IMG-20251223-WA0068-826x1024.jpg",
      "/images/services/sofas-beds/IMG-20251223-WA0070-826x1024.jpg",
    ],
    featured: true,
  },
  {
    id: "tv-unit-02",
    title: "Minimal Media Console",
    category: "TV Units",
    serviceSlug: "tv-units",
    description:
      "A clean-lined TV unit with floating shelves and drawer storage for a modern living room.",
    images: [
      "/images/services/tv-units/IMG-20251223-WA0113-819x1024.jpg",
      "/images/services/tv-units/IMG-20251223-WA0114-910x1024.jpg",
    ],
  },
  {
    id: "gaming-01",
    title: "Gaming Setup Wall",
    category: "Gaming Rooms",
    serviceSlug: "gaming-rooms",
    description:
      "Feature wall with integrated shelving and ambient lighting designed around a gaming desk setup.",
    images: [
      "/images/services/tv-units/IMG-20251223-WA0115-1024x974.jpg",
      "/images/services/tv-units/IMG-20251223-WA0116-852x1024.jpg",
    ],
  },
];

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getRelatedProjects(categories: string[]): Project[] {
  return projects.filter((p) => categories.includes(p.category)).slice(0, 3);
}
