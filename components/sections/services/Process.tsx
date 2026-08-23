

import {
  Search,
  ClipboardList,
  Palette,
  Code2,
  Bug,
  Rocket,
  ArrowDown,
} from "lucide-react";

const process = [
  {
    step: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We discuss your business, goals, users, and requirements to define the project scope.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Planning",
    description:
      "I prepare the architecture, workflows, APIs, database structure, and project roadmap.",
  },
  {
    step: "03",
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Designing clean, responsive, and user-friendly interfaces focused on usability.",
  },
  {
    step: "04",
    icon: Code2,
    title: "Development",
    description:
      "Building scalable frontend, backend, APIs, AI integrations, and databases using modern technologies.",
  },
  {
    step: "05",
    icon: Bug,
    title: "Testing",
    description:
      "Comprehensive testing to ensure security, performance, responsiveness, and reliability.",
  },
  {
    step: "06",
    icon: Rocket,
    title: "Deployment",
    description:
      "Deploying your application with monitoring, optimization, documentation, and ongoing support.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 py-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            My Process
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            From idea to
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              production.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            A clear, collaborative workflow designed to turn your idea into a
            reliable and production-ready digital product.
          </p>
        </div>

        {/* Process */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0 xl:block" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.step}
                  className="
                    group relative overflow-hidden rounded-[28px]
                    border border-white/10
                    bg-white/[0.025]
                    p-7
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-blue-500/30
                    hover:bg-white/[0.04]
                    md:p-8
                  "
                >
                  {/* Glow */}
                  <div
                    className="
                      pointer-events-none absolute
                      -right-20 -top-20
                      h-48 w-48
                      rounded-full
                      bg-blue-500/[0.08]
                      blur-3xl
                      opacity-0
                      transition-opacity duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Header */}
                  <div className="relative flex items-center justify-between">
                    <div
                      className="
                        flex h-14 w-14 items-center justify-center
                        rounded-2xl
                        border border-blue-500/20
                        bg-blue-500/10
                        text-blue-400
                        transition-all duration-300
                        group-hover:border-blue-400/40
                        group-hover:bg-blue-500/15
                      "
                    >
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    <span className="text-4xl font-black tracking-tight text-white/[0.06]">
                      {item.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative mt-8">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                        Step {item.step}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-zinc-400">
                      {item.description}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="relative mt-8 flex items-center gap-2">
                    {process.map((_, dotIndex) => (
                      <span
                        key={dotIndex}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          dotIndex === index
                            ? "w-8 bg-blue-400"
                            : "w-2 bg-white/10"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Mobile connector */}
                  {index < process.length - 1 && (
                    <div className="absolute -bottom-6 left-1/2 z-10 flex h-5 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-950 px-1 md:hidden">
                      <ArrowDown className="h-3 w-3 text-blue-400" />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom reassurance */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-sm leading-7 text-zinc-500">
            You stay involved throughout the process — from the initial idea
            to launch and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}


// import {
//   Search,
//   ClipboardList,
//   Palette,
//   Code2,
//   Bug,
//   Rocket,
// } from "lucide-react";

// const process = [
//   {
//     step: "01",
//     icon: Search,
//     title: "Discovery",
//     description:
//       "We discuss your business, goals, users, and requirements to define the project scope.",
//   },
//   {
//     step: "02",
//     icon: ClipboardList,
//     title: "Planning",
//     description:
//       "I prepare the architecture, workflows, APIs, database structure, and project roadmap.",
//   },
//   {
//     step: "03",
//     icon: Palette,
//     title: "UI / UX Design",
//     description:
//       "Designing clean, responsive, and user-friendly interfaces focused on usability.",
//   },
//   {
//     step: "04",
//     icon: Code2,
//     title: "Development",
//     description:
//       "Building scalable frontend, backend, APIs, AI integrations, and databases using modern technologies.",
//   },
//   {
//     step: "05",
//     icon: Bug,
//     title: "Testing",
//     description:
//       "Comprehensive testing to ensure security, performance, responsiveness, and reliability.",
//   },
//   {
//     step: "06",
//     icon: Rocket,
//     title: "Deployment",
//     description:
//       "Deploying your application with monitoring, optimization, documentation, and ongoing support.",
//   },
// ];

// export default function Process() {
//   return (
//     <section className="py-24">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="mb-16 text-center">
//           <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
//             My Process
//           </span>

//           <h2 className="mt-4 text-4xl font-bold md:text-5xl">
//             A Proven Development Workflow
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
//             Every successful project follows a structured process—from
//             understanding your goals to delivering a production-ready solution.
//           </p>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {process.map((item) => {
//             const Icon = item.icon;

//             return (
//               <article
//                 key={item.step}
//                 className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
//               >
//                 <div className="absolute right-6 top-6 text-5xl font-black text-white/5">
//                   {item.step}
//                 </div>

//                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
//                   <Icon size={30} />
//                 </div>

//                 <h3 className="mt-8 text-2xl font-bold">
//                   {item.title}
//                 </h3>

//                 <p className="mt-5 leading-8 text-zinc-400">
//                   {item.description}
//                 </p>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }