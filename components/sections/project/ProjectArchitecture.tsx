import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectArchitecture({ project }: Props) {
  return (
    <section className="py-24 border-y border-white/10">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Architecture
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Technology Stack
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            A scalable architecture designed for performance, reliability and
            maintainability.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {project.architecture.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-4"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-center font-medium">
                {item}
              </div>

              {index < project.architecture.length - 1 && (
                <span className="hidden text-2xl text-blue-400 md:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}