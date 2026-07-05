import { CheckCircle2 } from "lucide-react";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectFeatures({ project }: Props) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Features
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Everything needed for a modern AI application
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            The platform combines conversational AI, automation and a modern
            dashboard to provide a seamless experience for businesses and
            customers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                <CheckCircle2 size={24} />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {feature}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Designed to provide a fast, reliable and intelligent user
                experience with production-ready architecture.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}