

import type { MetadataRoute } from "next";

const baseUrl = "https://heyakashmaurya.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-23");

  const blogSlugs = [
    "sarvam-ai-vs-elevenlabs",
    "hospital-appointment-booking-system-ai-voice-agents",
    "restaurant-automation-with-ai",
    "elevenlabs-vs-sarvam-ai-best-ai-voice-generator",
    "sarvam-ai-tts-complete-guide",
    "deepgram-stt-complete-guide",
    "best-ai-calling-platform-twilio-vs-livekit-vs-vapi-vs-bland",
    "livekit-ai-voice-agent-tutorial",
    "ai-call-automation",
    "ai-receptionist",
    "ai-voice-agent-for-restaurants",
    "custom-software-development-for-businesses",
    "ai-voice-agent-for-hospitals",
    "build-ai-voice-agent",
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
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
      priority: 0.8,
    },

    // Blog articles
    ...blogPages,
  ];
}



// import type { MetadataRoute } from "next";

// const baseUrl = "https://heyakashmaurya.com";

// export default function sitemap(): MetadataRoute.Sitemap {
//   const lastModified = new Date("2026-07-01");

//   return [
//     {
//       url: `${baseUrl}`,
//       lastModified,
//       changeFrequency: "weekly",
//       priority: 1,
//     },
//     {
//       url: `${baseUrl}/about`,
//       lastModified,
//       changeFrequency: "monthly",
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/projects`,
//       lastModified,
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}/services`,
//       lastModified,
//       changeFrequency: "monthly",
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/contact`,
//       lastModified,
//       changeFrequency: "monthly",
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/blog`,
//       lastModified,
//       changeFrequency: "weekly",
//       priority: 0.7,
//     },
//   ];
// }
