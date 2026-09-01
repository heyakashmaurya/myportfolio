

import type { Metadata } from "next";

import ProjectGrid from "@/components/sections/projects/ProjectGrid";
import CTA from "@/components/sections/projects/CTA";
import FeaturedProject from "@/components/sections/projects/FeaturedProjects";

export const metadata: Metadata = {
  title: "Projects",

  description:
    "Explore AI voice agents, SaaS applications, custom software, and full-stack projects built by Akash Maurya.",

  alternates: {
    canonical: "/projects",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://heyakashmaurya.com/projects",
    title: "Projects | Akash Maurya",
    description:
      "Explore AI voice agents, SaaS applications, custom software, and full-stack projects built by Akash Maurya.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Projects | Akash Maurya",
    description:
      "Explore AI voice agents, SaaS applications, custom software, and full-stack projects built by Akash Maurya.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <FeaturedProject />
      <ProjectGrid />
      <CTA />
    </>
  );
}




// import type { Metadata } from "next";

// // import ProjectsHero from "@/components/sections/projects/ProjectsHero";
// import ProjectGrid from "@/components/sections/projects/ProjectGrid";
// import CTA from "@/components/sections/projects/CTA";
// import FeaturedProject from "@/components/sections/projects/FeaturedProjects";

// export const metadata: Metadata = {
//   title: "Projects",
//   description:
//     "Explore AI voice agents, SaaS applications, and full-stack projects built by Akash Maurya.",

//   alternates: {
//     canonical: "/projects",
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },

//   openGraph: {
//     type: "website",
//     url: "https://heyakashmaurya.com/projects",
//     title: "Projects Akash Maurya | Full Stack AI Engineer",
//     description:
//       "Explore AI voice agents, SaaS applications, and full-stack projects built by Akash Maurya.",
//   },
// };

// export default function ProjectsPage() {
//   return (
//     <>
//       {/* <ProjectsHero /> */}
//       <FeaturedProject />
//       <ProjectGrid />
//       <CTA />
//     </>
//   );
// }