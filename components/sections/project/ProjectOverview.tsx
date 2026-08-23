
import { CheckCircle2, Clock3, Layers3, UserRound, UsersRound } from "lucide-react";

import Container from "@/components/layout/Container";
import { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectOverview({ project }: Props) {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[140px]"
      />

      <Container>
        {/* Section heading */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-blue-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
              Project Overview
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            From idea to a{" "}
            <span className="text-zinc-500">
              production-ready solution.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            A closer look at the problem, technology, and decisions behind
            this project.
          </p>
        </div>

        {/* Main layout */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-20">
          {/* LEFT — Overview */}
          <article>
            <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-9 lg:p-10">
              {/* Top highlight */}
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10">
                  <Layers3 className="size-4 text-blue-400" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  About the project
                </h3>
              </div>

              <div className="mt-8 max-w-3xl">
                <p className="text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
                  {project.overview}
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-12 border-t border-white/[0.08] pt-8">
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="text-sm font-medium text-white">
                      Technologies used
                    </p>

                    <p className="mt-1 text-sm text-zinc-500">
                      Core tools and technologies powering this solution.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="group rounded-xl border border-white/[0.08] bg-white/[0.035] px-3.5 py-2 text-sm text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-500/[0.08] hover:text-white"
                      >
                        <span className="mr-2 inline-block size-1.5 rounded-full bg-zinc-600 align-middle transition-colors group-hover:bg-blue-400" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Small UX note */}
            <div className="mt-6 flex items-start gap-3 px-2 text-sm text-zinc-500">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400/80" />

              <p>
                Built with scalability, maintainability, and real-world
                usability in mind.
              </p>
            </div>
          </article>

          {/* RIGHT — Project information */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] shadow-2xl shadow-black/20 backdrop-blur-sm">
              {/* Card glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 size-48 rounded-full bg-blue-500/10 blur-3xl"
              />

              <div className="relative p-7 sm:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Case Study
                  </p>

                  <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    Project information
                  </h3>
                </div>

                <div className="mt-8">
                  <Info
                    icon={<UserRound />}
                    label="Role"
                    value={project.role}
                  />

                  <Info
                    icon={<UserRound />}
                    label="Client"
                    value={project.client}
                  />

                  <Info
                    icon={<UsersRound />}
                    label="Team"
                    value={project.team}
                  />

                  <Info
                    icon={<Clock3 />}
                    label="Duration"
                    value={project.duration}
                  />

                  <Info
                    icon={<Layers3 />}
                    label="Year"
                    value={project.year}
                  />

                  <Info
                    icon={<CheckCircle2 />}
                    label="Status"
                    value={project.status}
                    last
                    status
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

interface InfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  last?: boolean;
  status?: boolean;
}

function Info({
  icon,
  label,
  value,
  last = false,
  status = false,
}: InfoProps) {
  return (
    <div
      className={[
        "group flex items-center gap-4 py-4",
        !last ? "border-b border-white/[0.07]" : "",
      ].join(" ")}
    >
      {/* Icon */}
      <div
        className={`flex size-9 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
          status
            ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
            : "border-white/[0.07] bg-white/[0.035] text-zinc-500 group-hover:border-blue-400/20 group-hover:bg-blue-500/10 group-hover:text-blue-400"
        }`}
      >
        <span className="[&>svg]:size-4">{icon}</span>
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <p className="text-xs text-zinc-500">
          {label}
        </p>

        <p
          className={`mt-1 truncate text-sm font-medium ${
            status ? "text-emerald-400" : "text-zinc-200"
          }`}
          title={value}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

// import { Project } from "@/data/projects";

// interface Props {
//   project: Project;
// }

// export default function ProjectOverview({ project }: Props) {
//   return (
//     <section className="py-24">
//       <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[1.4fr_420px]">
//         {/* Left Content */}
//         <div>
//           <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
//             Overview
//           </span>

//           <h2 className="mt-4 text-4xl font-bold tracking-tight">
//             Building an AI solution for real-world businesses.
//           </h2>

//           <p className="mt-8 text-lg leading-8 text-zinc-400">
//             {project.overview}
//           </p>

//           <div className="mt-12 flex flex-wrap gap-3">
//             {project.technologies.map((tech) => (
//               <span
//                 key={tech}
//                 className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Right Card */}
//         <aside className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
//           <h3 className="text-xl font-semibold">
//             Project Information
//           </h3>

//           <div className="mt-8 space-y-6">
//             <Info label="Role" value={project.role} />
//             <Info label="Client" value={project.client} />
//             <Info label="Team" value={project.team} />
//             <Info label="Duration" value={project.duration} />
//             <Info label="Year" value={project.year} />
//             <Info label="Status" value={project.status} />
//           </div>
//         </aside>
//       </div>
//     </section>
//   );
// }

// function Info({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) {
//   return (
//     <div className="flex items-center justify-between border-b border-white/10 pb-4">
//       <span className="text-sm text-zinc-500">
//         {label}
//       </span>

//       <span className="font-medium">
//         {value}
//       </span>
//     </div>
//   );
// }