import type { MetadataRoute } from "next";
import { landingPages, siteUrl } from "@/lib/landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes = ["", "/blog"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const solutionRoutes = landingPages.map((page) => ({
    url: `${siteUrl}/solutions/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: page.slug === "property-management-software-malaysia" ? 0.9 : 0.8,
  }));

  const landingRoutes = [
    "claim-your-free-website",
    "claim-your-free-website-zh",
    "rumi-free-website",
    "rumi-website-launch-plan",
  ].map((slug) => ({
    url: `${siteUrl}/landing/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...solutionRoutes, ...landingRoutes];
}
