import type { MetadataRoute } from "next";
import { landingPages, siteUrl } from "@/lib/landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/blog"].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const solutionRoutes = landingPages.map((page) => ({
    url: `${siteUrl}/solutions/${page.slug}`,
    changeFrequency: "monthly" as const,
    priority: page.slug === "property-management-software-malaysia" ? 0.9 : 0.8,
  }));

  return [...staticRoutes, ...solutionRoutes];
}
