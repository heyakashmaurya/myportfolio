import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectProblem({ project }: Props) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">

        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Case Study
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            The Challenge & Solution
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
            <h3 className="text-2xl font-bold">
              The Problem
            </h3>

            <p className="mt-6 leading-8 text-zinc-400">
              {project.problem}
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8">
            <h3 className="text-2xl font-bold">
              The Solution
            </h3>

            <p className="mt-6 leading-8 text-zinc-400">
              {project.solution}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}