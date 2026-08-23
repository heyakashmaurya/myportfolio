import { ArrowRight, CircleAlert, Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectProblem({ project }: Props) {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-16 lg:grid-cols-[300px_1fr]">
          {/* Section intro */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              01 — Challenge
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              From problem
              <br />
              to product.
            </h2>
          </div>

          {/* Content */}
          <div>
            <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
              {/* Problem */}
              <div className="group rounded-3xl border border-red-500/15 bg-red-500/[0.025] p-8 transition-all duration-300 hover:border-red-500/30">
                <div className="flex size-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <CircleAlert size={21} />
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                  The Problem
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  A problem worth solving
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {project.problem}
                </p>
              </div>

              {/* Connector */}
              <div className="hidden items-center justify-center lg:flex">
                <div className="flex size-12 items-center justify-center rounded-full border border-white/10 bg-black text-zinc-400">
                  <ArrowRight size={18} />
                </div>
              </div>

              {/* Solution */}
              <div className="group rounded-3xl border border-emerald-500/15 bg-emerald-500/[0.025] p-8 transition-all duration-300 hover:border-emerald-500/30">
                <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Sparkles size={21} />
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  The Solution
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  Built around the user
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



// import Link from "next/link";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// import { Project, projects } from "@/data/projects";

// interface Props {
//   currentProject: Project;
// }

// export default function NextProject({ currentProject }: Props) {
//   const currentIndex = projects.findIndex(
//     (project) => project.id === currentProject.id
//   );

//   const previous =
//     currentIndex > 0
//       ? projects[currentIndex - 1]
//       : projects[projects.length - 1];

//   const next =
//     currentIndex < projects.length - 1
//       ? projects[currentIndex + 1]
//       : projects[0];

//   return (
//     <section className="border-y border-white/10 py-24">
//       <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2">
//         <Link
//           href={`/projects/${previous.slug}`}
//           className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
//         >
//           <ArrowLeft className="text-blue-400" />

//           <p className="mt-6 text-sm uppercase tracking-widest text-zinc-500">
//             Previous Project
//           </p>

//           <h3 className="mt-2 text-2xl font-bold">
//             {previous.title}
//           </h3>

//           <p className="mt-3 text-zinc-400">
//             {previous.subtitle}
//           </p>
//         </Link>

//         <Link
//           href={`/projects/${next.slug}`}
//           className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-right transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
//         >
//           <ArrowRight className="ml-auto text-blue-400" />

//           <p className="mt-6 text-sm uppercase tracking-widest text-zinc-500">
//             Next Project
//           </p>

//           <h3 className="mt-2 text-2xl font-bold">
//             {next.title}
//           </h3>

//           <p className="mt-3 text-zinc-400">
//             {next.subtitle}
//           </p>
//         </Link>
//       </div>
//     </section>
//   );
// }