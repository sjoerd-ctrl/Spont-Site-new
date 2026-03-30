import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.spont.nl";
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/features`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/prijzen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/over-ons`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/doelgroepen`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/voorwaarden`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const segments = [
    "restaurants",
    "coffee-bars",
    "cafes",
    "quick-service",
    "bakkerijen",
    "discotheken",
    "bowlingbanen",
    "evenementen",
  ];

  const segmentPages: MetadataRoute.Sitemap = segments.map((segment) => ({
    url: `${baseUrl}/doelgroepen/${segment}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const vergelijkPages: MetadataRoute.Sitemap = [
    "lightspeed-alternatief",
    "untill-alternatief",
    "tebi-alternatief",
    "dish-alternatief",
    "trivec-alternatief",
    "orderbird-alternatief",
  ].map((slug) => ({
    url: `${baseUrl}/vergelijk/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogSlugs = [
    "kassasysteem-festival-evenement",
    "kassasysteem-kiezen-starter",
    "hoe-werken-kaartbetalingen",
    "kassasysteem-vergelijken",
    "meerdere-horecalocaties-beheren",
    "nieuw-restaurant-welke-kassa",
    "wat-kost-kassasysteem-restaurant",
    "tap-to-pay-iphone",
    "ai-support-revolutie",
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...segmentPages, ...vergelijkPages, ...blogPages];
}
