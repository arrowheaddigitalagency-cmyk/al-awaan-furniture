import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllServiceSlugs } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/projects",
    "/contact",
    "/privacy-policy",
  ];

  const servicePages = getAllServiceSlugs().map(
    (slug) => `/services/${slug}`
  );

  const allPages = [...staticPages, ...servicePages];

  return allPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
