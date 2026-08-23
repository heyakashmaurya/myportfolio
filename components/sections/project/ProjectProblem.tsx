

import {
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  Lightbulb,
} from "lucide-react";

import Container from "@/components/layout/Container";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectProblem({ project }: Props) {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[130px]"
      />

      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-blue-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
              Challenge & Solution
            </span>

            <span className="h-px w-8 bg-blue-500" />
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Turning a difficult problem into a{" "}
            <span className="text-zinc-500">
              scalable solution.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Understanding the challenge was the first step. The goal was to
            design a solution that was practical, scalable, and built around
            real business needs.
          </p>
        </div>

        {/* Problem → Solution */}
        <div className="relative mt-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Problem */}
            <CaseStudyCard
              number="01"
              eyebrow="The Challenge"
              title="The Problem"
              description={project.problem}
              type="problem"
            />

            {/* Solution */}
            <CaseStudyCard
              number="02"
              eyebrow="The Approach"
              title="The Solution"
              description={project.solution}
              type="solution"
            />
          </div>

          {/* Center connector */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:flex"
          >
            <div className="flex size-12 items-center justify-center rounded-full border border-white/10 bg-[#08090c] shadow-xl shadow-black/30">
              <ArrowRight className="size-4 text-zinc-400" />
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mx-auto mt-12 flex max-w-3xl items-start justify-center gap-3 text-center sm:items-center">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400 sm:mt-0" />

          <p className="text-sm leading-6 text-zinc-500">
            The final solution was designed to solve the immediate challenge
            while providing a foundation for future growth.
          </p>
        </div>
      </Container>
    </section>
  );
}

interface CaseStudyCardProps {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  type: "problem" | "solution";
}

function CaseStudyCard({
  number,
  eyebrow,
  title,
  description,
  type,
}: CaseStudyCardProps) {
  const isProblem = type === "problem";

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border p-7 transition-all duration-500 sm:p-9 lg:p-10 ${
        isProblem
          ? "border-red-400/[0.12] bg-red-400/[0.025] hover:border-red-400/25 hover:bg-red-400/[0.04]"
          : "border-emerald-400/[0.12] bg-emerald-400/[0.025] hover:border-emerald-400/25 hover:bg-emerald-400/[0.04]"
      }`}
    >
      {/* Top accent */}
      <div
        className={`absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent ${
          isProblem ? "via-red-400/40" : "via-emerald-400/40"
        } to-transparent`}
      />

      {/* Background number */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-3 -top-8 select-none text-[150px] font-bold leading-none tracking-tighter transition-all duration-500 group-hover:scale-105 ${
          isProblem ? "text-red-400/[0.035]" : "text-emerald-400/[0.035]"
        }`}
      >
        {number}
      </div>

      <div className="relative z-10">
        {/* Icon + number */}
        <div className="flex items-center justify-between">
          <div
            className={`flex size-11 items-center justify-center rounded-xl border ${
              isProblem
                ? "border-red-400/15 bg-red-400/10 text-red-400"
                : "border-emerald-400/15 bg-emerald-400/10 text-emerald-400"
            }`}
          >
            {isProblem ? (
              <CircleAlert className="size-5" />
            ) : (
              <Lightbulb className="size-5" />
            )}
          </div>

          <span
            className={`text-xs font-semibold tracking-[0.18em] ${
              isProblem ? "text-red-400/60" : "text-emerald-400/60"
            }`}
          >
            {number}
          </span>
        </div>

        {/* Text */}
        <p
          className={`mt-10 text-xs font-semibold uppercase tracking-[0.2em] ${
            isProblem ? "text-red-400" : "text-emerald-400"
          }`}
        >
          {eyebrow}
        </p>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h3>

        <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-[17px] sm:leading-8">
          {description}
        </p>

        {/* Bottom indicator */}
        <div className="mt-10 flex items-center gap-2">
          <span
            className={`h-px w-8 transition-all duration-500 group-hover:w-14 ${
              isProblem ? "bg-red-400/50" : "bg-emerald-400/50"
            }`}
          />

          <span className="text-xs text-zinc-600">
            {isProblem ? "Identifying the challenge" : "Designing the solution"}
          </span>
        </div>
      </div>
    </article>
  );
}




// import type { Project } from "@/data/projects";

// interface Props {
//   project: Project;
// }

// export default function ProjectProblem({ project }: Props) {
//   return (
//     <section className="py-24">
//       <div className="mx-auto max-w-7xl px-5">

//         <div className="mb-16 text-center">
//           <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
//             Case Study
//           </span>

//           <h2 className="mt-4 text-4xl font-bold">
//             The Challenge & Solution
//           </h2>
//         </div>

//         <div className="grid gap-8 lg:grid-cols-2">

//           <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
//             <h3 className="text-2xl font-bold">
//               The Problem
//             </h3>

//             <p className="mt-6 leading-8 text-zinc-400">
//               {project.problem}
//             </p>
//           </div>

//           <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8">
//             <h3 className="text-2xl font-bold">
//               The Solution
//             </h3>

//             <p className="mt-6 leading-8 text-zinc-400">
//               {project.solution}
//             </p>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }