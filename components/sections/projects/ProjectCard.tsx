

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/[0.05]">

      {/* Image */}

      <div className="relative aspect-video overflow-hidden">

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute left-5 top-5 flex items-center gap-2">

          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 backdrop-blur-md">
            {project.category}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md ${project.status === "Completed"
                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                : "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20"
              }`}
          >
            {project.status}
          </span>

        </div>

      </div>

      {/* Content */}

      <div className="p-8">

        <div className="mb-2 flex items-center justify-between">

          <h3 className="text-2xl font-bold tracking-tight">
            {project.title}
          </h3>

          <span className="text-sm text-zinc-500">
            {project.year}
          </span>

        </div>

        <p className="text-blue-400 font-medium">
          {project.subtitle}
        </p>

        <p className="mt-5 leading-7 text-zinc-400">
          {project.description}
        </p>

        {/* Tech Stack */}

        <div className="mt-8 flex flex-wrap gap-2">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300 transition group-hover:border-blue-500/20"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Footer */}

        <div className="mt-8 flex items-center justify-between">

          <span className="text-sm text-zinc-500">
            {project.client}
          </span>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 font-medium text-blue-400 transition-all duration-300 hover:gap-3 hover:text-blue-300"
          >
            View Case Study

            <ArrowUpRight size={18} />

          </Link>

        </div>

      </div>

    </article>
  );
}



// import Image from "next/image";
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";

// import { Project } from "@/data/projects";

// interface Props {
//   project: Project;
// }

// export default function ProjectCard({ project }: Props) {
//   return (
//     <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30">

//       <div className="relative aspect-video overflow-hidden">

//         <Image
//           src={project.image}
//           alt={project.title}
//           fill
//           className="object-cover transition duration-700 group-hover:scale-105"
//         />

//       </div>

//       <div className="p-8">

//         <span className="text-sm text-blue-400">
//           {project.category}
//         </span>

//         <h3 className="mt-3 text-3xl font-bold">
//           {project.title}
//         </h3>

//         <p className="mt-2 text-zinc-400">
//           {project.subtitle}
//         </p>

//         <p className="mt-6 leading-7 text-zinc-400">
//           {project.description}
//         </p>

//         <div className="mt-8 flex flex-wrap gap-2">

//           {project.technologies.map((tech) => (
//             <span
//               key={tech}
//               className="rounded-full border border-white/10 px-3 py-1 text-sm"
//             >
//               {tech}
//             </span>
//           ))}

//         </div>

//         <Link
//           href={`/projects/${project.slug}`}
//           className="mt-8 inline-flex items-center gap-2 text-blue-400 transition hover:text-blue-300"
//         >
//           View Case Study

//           <ArrowUpRight size={18} />
//         </Link>

//       </div>

//     </article>
//   );
// }