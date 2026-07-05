import { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectOverview({ project }: Props) {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[1.4fr_420px]">
        {/* Left Content */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Overview
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Building an AI solution for real-world businesses.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            {project.overview}
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <aside className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h3 className="text-xl font-semibold">
            Project Information
          </h3>

          <div className="mt-8 space-y-6">
            <Info label="Role" value={project.role} />
            <Info label="Client" value={project.client} />
            <Info label="Team" value={project.team} />
            <Info label="Duration" value={project.duration} />
            <Info label="Year" value={project.year} />
            <Info label="Status" value={project.status} />
          </div>
        </aside>
      </div>
    </section>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-4">
      <span className="text-sm text-zinc-500">
        {label}
      </span>

      <span className="font-medium">
        {value}
      </span>
    </div>
  );
}