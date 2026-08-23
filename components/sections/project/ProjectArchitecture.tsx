
"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Globe,
  Layers3,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";

import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

const layerIcons = [
  Globe,
  Sparkles,
  Server,
  Database,
];

const layerDescriptions = [
  "User-facing applications, dashboards and external integrations.",
  "AI models, agents, orchestration and intelligent decision making.",
  "APIs, business logic, authentication and automation workflows.",
  "Persistent storage, caching, analytics and application data.",
];

export default function ProjectArchitecture({ project }: Props) {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] py-28">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-violet-500/[0.04] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-4 py-2 text-sm font-medium text-blue-300">
            <Layers3 className="h-4 w-4" />
            System Architecture
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              scale & reliability
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A production-ready technology architecture designed to keep the
            application fast, maintainable and ready to scale.
          </p>
        </motion.div>

        {/* Architecture diagram */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Desktop connecting line */}
          <div
            aria-hidden
            className="absolute left-1/2 top-10 hidden h-[calc(100%-80px)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent lg:block"
          />

          <div className="space-y-6">
            {project.architecture.map((item, index) => {
              const Icon = layerIcons[index % layerIcons.length];
              const description =
                layerDescriptions[index % layerDescriptions.length];

              return (
                <ArchitectureLayer
                  key={item}
                  index={index}
                  name={item}
                  description={description}
                  icon={Icon}
                  isLast={index === project.architecture.length - 1}
                />
              );
            })}
          </div>
        </div>

        {/* Bottom status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 flex w-fit items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-5 py-3"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          <CheckCircle2 className="h-4 w-4 text-emerald-400" />

          <span className="text-sm font-medium text-zinc-300">
            Production-ready architecture
          </span>
        </motion.div>
      </div>
    </section>
  );
}

interface ArchitectureLayerProps {
  index: number;
  name: string;
  description: string;
  icon: React.ElementType;
  isLast: boolean;
}

function ArchitectureLayer({
  index,
  name,
  description,
  icon: Icon,
  isLast,
}: ArchitectureLayerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      className="relative"
    >
      <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.045] hover:shadow-2xl hover:shadow-blue-950/20 sm:p-7">
        {/* Hover glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
          {/* Number */}
          <div className="flex shrink-0 items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
              <Icon className="h-5 w-5" />
            </div>

            <span className="font-mono text-xs font-medium tracking-widest text-zinc-600 sm:hidden">
              0{index + 1}
            </span>
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3">
              <span className="hidden font-mono text-xs font-medium tracking-widest text-zinc-600 sm:block">
                0{index + 1}
              </span>

              <h3 className="text-xl font-semibold tracking-tight text-white">
                {name}
              </h3>
            </div>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-500">
              {description}
            </p>
          </div>

          {/* Architecture indicator */}
          <div className="hidden shrink-0 sm:block">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-500 transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-400/10 group-hover:text-blue-400">
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile connector */}
      {!isLast && (
        <div className="flex h-8 items-center justify-center lg:hidden">
          <ArrowDown className="h-4 w-4 text-blue-400/40" />
        </div>
      )}
    </motion.div>
  );
}


// import type { Project } from "@/data/projects";

// interface Props {
//   project: Project;
// }

// export default function ProjectArchitecture({ project }: Props) {
//   return (
//     <section className="py-24 border-y border-white/10">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="mb-16 text-center">
//           <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
//             Architecture
//           </span>

//           <h2 className="mt-4 text-4xl font-bold">
//             Technology Stack
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
//             A scalable architecture designed for performance, reliability and
//             maintainability.
//           </p>
//         </div>

//         <div className="flex flex-wrap items-center justify-center gap-4">
//           {project.architecture.map((item, index) => (
//             <div
//               key={item}
//               className="flex items-center gap-4"
//             >
//               <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-center font-medium">
//                 {item}
//               </div>

//               {index < project.architecture.length - 1 && (
//                 <span className="hidden text-2xl text-blue-400 md:block">
//                   →
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }