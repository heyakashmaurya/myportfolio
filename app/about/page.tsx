// import AboutHero from "@/components/sections/about/AboutHero";
// import Experience from "@/components/sections/about/Experience";
// import Skills from "@/components/sections/about/Skills";
// import Achievements from "@/components/sections/about/Achievements";
// import CTA from "@/components/sections/about/CTA";

// export const metadata = {
//   title: "About",
//   description:
//     "Learn more about Akash Maurya, Full Stack AI Engineer specializing in AI Voice Agents, SaaS, and automation systems.",
// };

// export default function AboutPage() {
//   return (
//     <>
//       <AboutHero /> 
//       <Experience />
//       <Skills />
//       <Achievements />
//       <CTA />
//     </>
//   );
// }

import type { Metadata } from "next";

import AboutHero from "@/components/sections/about/AboutHero";
import Experience from "@/components/sections/about/Experience";
import Skills from "@/components/sections/about/Skills";
import Achievements from "@/components/sections/about/Achievements";
import CTA from "@/components/sections/about/CTA";

export const metadata: Metadata = {
  title: "About Akash Maurya",
  description:
    "Learn about Akash Maurya, a Full Stack AI Engineer specializing in AI voice agents, SaaS platforms, custom software, and business automation systems.",

  alternates: {
    canonical: "/about",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://heyakashmaurya.com/about",
    title: "About Akash Maurya | Full Stack AI Engineer",
    description:
      "Learn about Akash Maurya, a Full Stack AI Engineer specializing in AI voice agents, SaaS platforms, custom software, and business automation systems.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Experience />
      <Skills />
      <Achievements />
      <CTA />
    </>
  );
}

