import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Project, projects } from "@/data/projects";

interface Props {
  currentProject: Project;
}

export default function NextProject({ currentProject }: Props) {
  const currentIndex = projects.findIndex(
    (project) => project.id === currentProject.id
  );

  const previous =
    currentIndex > 0
      ? projects[currentIndex - 1]
      : projects[projects.length - 1];

  const next =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : projects[0];

  return (
    <section className="border-y border-white/10 py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2">
        <Link
          href={`/projects/${previous.slug}`}
          className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
        >
          <ArrowLeft className="text-blue-400" />

          <p className="mt-6 text-sm uppercase tracking-widest text-zinc-500">
            Previous Project
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {previous.title}
          </h3>

          <p className="mt-3 text-zinc-400">
            {previous.subtitle}
          </p>
        </Link>

        <Link
          href={`/projects/${next.slug}`}
          className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-right transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
        >
          <ArrowRight className="ml-auto text-blue-400" />

          <p className="mt-6 text-sm uppercase tracking-widest text-zinc-500">
            Next Project
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {next.title}
          </h3>

          <p className="mt-3 text-zinc-400">
            {next.subtitle}
          </p>
        </Link>
      </div>
    </section>
  );
}