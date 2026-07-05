import Image from "next/image";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectGallery({ project }: Props) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-16">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Gallery
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Project Screenshots
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {project.gallery.map((image) => (
            <div
              key={image}
              className="overflow-hidden rounded-3xl border border-white/10"
            >
              <div className="relative aspect-video">
                <Image
                  src={image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}