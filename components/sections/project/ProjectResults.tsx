

"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  Zap,
} from "lucide-react";

import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectResults({ project }: Props) {
  if (!project.results?.length) return null;

  return (
    <section className="relative overflow-hidden py-28">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/[0.035] blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-sm font-medium text-emerald-300">
            <TrendingUp className="h-4 w-4" />
            Results & Impact
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Turning technology into{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              real impact
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            The outcome wasn't just a better product. The goal was to create
            measurable improvements for the people and businesses using it.
          </p>
        </motion.div>

        {/* Results */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {project.results.map((result, index) => (
            <ResultCard
              key={result}
              result={result}
              index={index}
            />
          ))}
        </div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-10 max-w-4xl rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
              <Zap className="h-5 w-5" />
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium text-zinc-500">
                Project outcome
              </p>

              <p className="mt-1 text-base leading-7 text-zinc-300">
                A scalable solution focused on efficiency, reliability and
                delivering meaningful value to the end user.
              </p>
            </div>

            <CheckCircle2 className="hidden h-5 w-5 shrink-0 text-emerald-400 sm:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface ResultCardProps {
  result: string;
  index: number;
}

function ResultCard({ result, index }: ResultCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group relative"
    >
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-emerald-400/25 group-hover:bg-white/[0.045]">
        {/* Number */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-medium tracking-[0.2em] text-zinc-600">
            0{index + 1}
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/[0.07] text-emerald-400 transition-transform duration-300 group-hover:scale-110">
            <TrendingUp className="h-4 w-4" />
          </div>
        </div>

        {/* Result */}
        <div className="mt-10">
          <p className="text-xl font-semibold leading-8 tracking-tight text-white">
            {result}
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex items-center gap-2 text-xs font-medium text-emerald-400/80">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Business impact
        </div>

        {/* Arrow */}
        <ArrowUpRight className="absolute bottom-7 right-7 h-4 w-4 text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-400" />
      </div>
    </motion.div>
  );
}



// import { TrendingUp } from "lucide-react";
// import type { Project } from "@/data/projects";

// interface Props {
//   project: Project;
// }

// export default function ProjectResults({ project }: Props) {
//   return (
//     <section className="py-24">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="mb-16 text-center">
//           <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
//             Results
//           </span>

//           <h2 className="mt-4 text-4xl font-bold">
//             Business Impact
//           </h2>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//           {project.results.map((result) => (
//             <div
//               key={result}
//               className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
//             >
//               <TrendingUp
//                 size={34}
//                 className="mx-auto text-emerald-400"
//               />

//               <h3 className="mt-6 text-xl font-semibold">
//                 {result}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }