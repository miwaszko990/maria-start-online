import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://online-lab.pl", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
