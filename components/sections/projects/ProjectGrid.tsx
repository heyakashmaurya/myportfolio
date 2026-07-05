import Container from "@/components/layout/Container";
import { projects } from "@/data/projects";

import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <section className="pb-28">
      <Container>

        <div className="grid gap-10 lg:grid-cols-2">

          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}