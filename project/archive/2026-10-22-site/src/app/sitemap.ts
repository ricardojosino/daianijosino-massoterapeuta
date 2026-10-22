import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://daianijosino.com.br";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
