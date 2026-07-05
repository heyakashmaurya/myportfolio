import { TrendingUp } from "lucide-react";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectResults({ project }: Props) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Results
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Business Impact
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {project.results.map((result) => (
            <div
              key={result}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
            >
              <TrendingUp
                size={34}
                className="mx-auto text-emerald-400"
              />

              <h3 className="mt-6 text-xl font-semibold">
                {result}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}