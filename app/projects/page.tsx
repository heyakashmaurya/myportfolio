import type { Metadata } from "next";

// import ProjectsHero from "@/components/sections/projects/ProjectsHero";
import ProjectGrid from "@/components/sections/projects/ProjectGrid";
import CTA from "@/components/sections/projects/CTA";
import FeaturedProject from "@/components/sections/projects/FeaturedProjects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore AI voice agents, SaaS applications, and full-stack projects built by Akash Maurya.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* <ProjectsHero /> */}
      <FeaturedProject />
      <ProjectGrid />
      <CTA />
    </>
  );
}