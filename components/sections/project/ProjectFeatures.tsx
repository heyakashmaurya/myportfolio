

import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import Container from "@/components/layout/Container";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectFeatures({ project }: Props) {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/[0.045] blur-[140px]"
      />

      <Container>
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
                Key Features
              </span>
            </div>

            <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Built around the features that{" "}
              <span className="text-zinc-500">
                actually matter.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-zinc-400 lg:pb-1">
            A focused set of capabilities designed to create a reliable,
            intelligent, and scalable product experience.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {project.features.map((feature, index) => {
            const featured = index === 0;

            return (
              <FeatureCard
                key={feature}
                feature={feature}
                index={index}
                featured={featured}
              />
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-400/10">
              <CheckCircle2 className="size-4 text-emerald-400" />
            </div>

            <p className="text-sm text-zinc-400">
              Production-focused architecture and user experience.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-600">
            <Sparkles className="size-3.5" />
            <span>{project.features.length} core capabilities</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

interface FeatureCardProps {
  feature: string;
  index: number;
  featured?: boolean;
}

function FeatureCard({
  feature,
  index,
  featured = false,
}: FeatureCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 ${
        featured
          ? "border-blue-400/20 bg-blue-500/[0.045] md:col-span-2 lg:col-span-2"
          : "border-white/[0.08] bg-white/[0.025] hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.04]"
      }`}
    >
      {/* Top sheen */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Background number */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-5 select-none text-[120px] font-bold leading-none tracking-tighter text-white/[0.025] transition-transform duration-700 group-hover:scale-110"
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div
        className={
          featured
            ? "relative flex h-full flex-col justify-between p-8 sm:p-10"
            : "relative flex h-full flex-col p-7 sm:p-8"
        }
      >
        <div>
          {/* Icon */}
          <div
            className={`flex items-center justify-center rounded-2xl border transition-all duration-500 ${
              featured
                ? "size-14 border-blue-400/20 bg-blue-500/10 text-blue-400 group-hover:border-blue-400/30 group-hover:bg-blue-500/15"
                : "size-11 border-white/[0.08] bg-white/[0.035] text-zinc-400 group-hover:border-blue-400/20 group-hover:bg-blue-500/10 group-hover:text-blue-400"
            }`}
          >
            {featured ? (
              <Sparkles className="size-6" />
            ) : (
              <CheckCircle2 className="size-5" />
            )}
          </div>

          {/* Label */}
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400/70">
            Feature {String(index + 1).padStart(2, "0")}
          </p>

          {/* Title */}
          <h3
            className={`mt-2 font-semibold tracking-tight text-white ${
              featured ? "text-2xl sm:text-3xl" : "text-xl"
            }`}
          >
            {feature}
          </h3>

          {/* Description */}
          <p
            className={`mt-4 leading-7 text-zinc-400 ${
              featured
                ? "max-w-xl text-base"
                : "text-sm"
            }`}
          >
            Designed to provide a fast, reliable, and intelligent experience
            with a production-ready architecture.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex items-center justify-between">
          <span className="text-xs text-zinc-600">
            {featured ? "Core capability" : "Capability"}
          </span>

          <div className="flex size-8 items-center justify-center rounded-full border border-white/[0.08] text-zinc-500 transition-all duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-500/10 group-hover:text-blue-400">
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </article>
  );
}



// import { CheckCircle2 } from "lucide-react";
// import type { Project } from "@/data/projects";

// interface Props {
//   project: Project;
// }

// export default function ProjectFeatures({ project }: Props) {
//   return (
//     <section className="py-24">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="mb-16 text-center">
//           <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
//             Features
//           </span>

//           <h2 className="mt-4 text-4xl font-bold">
//             Everything needed for a modern AI application
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
//             The platform combines conversational AI, automation and a modern
//             dashboard to provide a seamless experience for businesses and
//             customers.
//           </p>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//           {project.features.map((feature) => (
//             <div
//               key={feature}
//               className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
//             >
//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
//                 <CheckCircle2 size={24} />
//               </div>

//               <h3 className="mt-6 text-xl font-semibold">
//                 {feature}
//               </h3>

//               <p className="mt-3 text-sm leading-7 text-zinc-400">
//                 Designed to provide a fast, reliable and intelligent user
//                 experience with production-ready architecture.
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }