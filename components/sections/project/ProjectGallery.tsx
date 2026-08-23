
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Images } from "lucide-react";

import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectGallery({ project }: Props) {
  if (!project.gallery?.length) return null;

  return (
    <section className="relative overflow-hidden py-28">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.045] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-4 py-2 text-sm font-medium text-blue-300">
              <Images className="h-4 w-4" />
              Product Showcase
            </div>

            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Inside the{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                product
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
              A closer look at the interfaces, workflows and experiences
              designed and built for this project.
            </p>
          </div>

          <div className="hidden text-sm text-zinc-500 md:block">
            {project.gallery.length}{" "}
            {project.gallery.length === 1 ? "screen" : "screens"}
          </div>
        </motion.div>

        {/* Gallery */}
        <div className="grid gap-6 lg:grid-cols-12">
          {project.gallery.map((image, index) => {
            const featured = index === 0;

            return (
              <motion.div
                key={image}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className={
                  featured
                    ? "lg:col-span-8"
                    : "lg:col-span-4"
                }
              >
                <GalleryCard
                  image={image}
                  title={project.title}
                  index={index}
                  featured={featured}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface GalleryCardProps {
  image: string;
  title: string;
  index: number;
  featured: boolean;
}

function GalleryCard({
  image,
  title,
  index,
  featured,
}: GalleryCardProps) {
  return (
    <div className="group relative">
      {/* Outer glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-[26px] bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-cyan-400/20 opacity-0 blur-xl transition duration-700 group-hover:opacity-100"
      />

      <div
        className={[
          "relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-2",
          "shadow-2xl shadow-black/20 backdrop-blur-xl",
          "transition-all duration-500",
          "group-hover:-translate-y-1 group-hover:border-white/[0.16]",
          featured ? "lg:p-3" : "",
        ].join(" ")}
      >
        {/* Image */}
        <div
          className={[
            "relative overflow-hidden rounded-[18px]",
            featured
              ? "aspect-[16/10]"
              : "aspect-[16/11]",
          ].join(" ")}
        >
          <Image
            src={image}
            alt={`${title} screenshot ${index + 1}`}
            fill
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 66vw"
                : "(max-width: 1024px) 100vw, 33vw"
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

          {/* Top badge */}
          <div className="absolute left-4 top-4">
            <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md">
              {featured ? "Featured" : `Screen 0${index + 1}`}
            </span>
          </div>

          {/* Hover action */}
          <div className="absolute bottom-4 right-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-xl">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          {/* Bottom label */}
          <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="text-xs font-medium text-white/80">
              Project interface
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


// import Image from "next/image";
// import type { Project } from "@/data/projects";

// interface Props {
//   project: Project;
// }

// export default function ProjectGallery({ project }: Props) {
//   return (
//     <section className="py-24">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="mb-16">
//           <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
//             Gallery
//           </span>

//           <h2 className="mt-4 text-4xl font-bold">
//             Project Screenshots
//           </h2>
//         </div>

//         <div className="grid gap-8 lg:grid-cols-3">
//           {project.gallery.map((image) => (
//             <div
//               key={image}
//               className="overflow-hidden rounded-3xl border border-white/10"
//             >
//               <div className="relative aspect-video">
//                 <Image
//                   src={image}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition duration-500 hover:scale-105"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }