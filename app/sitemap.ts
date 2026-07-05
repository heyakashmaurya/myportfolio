
import type { MetadataRoute } from "next";

const baseUrl = "https://heyakashmaurya.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-01");

  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}


// import type { MetadataRoute } from "next";

// export default function sitemap(): MetadataRoute.Sitemap {
//   return [
//     {
//       url: "https://heyakashmaurya.com",
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 1,
//     },
//     {
//       url: "https://heyakashmaurya.com/about",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.8,
//     },
//     {
//       url: "https://heyakashmaurya.com/projects",
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },
//     {
//       url: "https://heyakashmaurya.com/services",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.8,
//     },
//     {
//       url: "https://heyakashmaurya.com/contact",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.8,
//     },
//     {
//       url: "https://heyakashmaurya.com/blog",
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.7,
//     },
//   ];
// }