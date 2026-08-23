

import Container from "@/components/layout/Container";
import { projects } from "@/data/projects";

import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <section className="relative overflow-hidden pb-28">
      {/* Ambient section glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/[0.035] blur-[140px]"
      />

      <Container>
        <div className="relative grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
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


// import Container from "@/components/layout/Container";
// import { projects } from "@/data/projects";

// import ProjectCard from "./ProjectCard";

// export default function ProjectGrid() {
//   return (
//     <section className="pb-28">
//       <Container>

//         <div className="grid gap-10 lg:grid-cols-2">

//           {projects.map((project) => (
//             <ProjectCard
//               key={project.slug}
//               project={project}
//             />
//           ))}

//         </div>

//       </Container>
//     </section>
//   );
// }