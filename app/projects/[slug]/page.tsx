import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { projects } from "@/data/projects";

import ProjectHero from "@/components/sections/project/ProjectHero";
import ProjectOverview from "@/components/sections/project/ProjectOverview";
import ProjectProblem from "@/components/sections/project/ProjectProblem";
import ProjectFeatures from "@/components/sections/project/ProjectFeatures";
import ProjectArchitecture from "@/components/sections/project/ProjectArchitecture";
import ProjectGallery from "@/components/sections/project/ProjectGallery";
import ProjectResults from "@/components/sections/project/ProjectResults";
import NextProject from "@/components/sections/project/NextProject";
import ProjectCTA from "@/components/sections/project/ProjectCTA";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHero project={project} />

      <ProjectOverview project={project} />

      
      <ProjectProblem project={project} />

      <ProjectFeatures project={project} />

      <ProjectArchitecture project={project} />

      <ProjectGallery project={project} />

      <ProjectResults project={project} />

      <NextProject currentProject={project} />

      <ProjectCTA />
     
    </>
  );
}