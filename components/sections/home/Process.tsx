

"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { process } from "@/data/process";

export default function Process() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Development Process
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            From Idea to{" "}
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Production
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Every project follows a structured workflow designed to keep
            development transparent, efficient, and focused on delivering
            measurable business value.
          </p>
        </motion.div>

        {/* Process */}
        <div className="relative mt-20">
          {/* Desktop timeline */}
          <div className="absolute left-7 top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-blue-500/40 via-white/10 to-transparent lg:block" />

          <div className="space-y-6">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="group relative"
                >
                  <div className="relative flex gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05] lg:gap-7 lg:p-8">
                    {/* Step icon */}
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-500/40 group-hover:bg-blue-500/15">
                      <Icon size={27} />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
                          Step {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-semibold text-white md:text-2xl">
                        {step.title}
                      </h3>

                      <p className="mt-3 max-w-3xl leading-7 text-zinc-400">
                        {step.description}
                      </p>
                    </div>

                    {/* Step number */}
                    <div className="hidden select-none text-5xl font-bold text-white/[0.04] md:block">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}



// "use client";

// import { motion } from "framer-motion";
// import Container from "@/components/layout/Container";
// import { process } from "@/data/process";

// export default function Process() {
//   return (
//     <section className="py-28">
//       <Container>
//         <div className="mx-auto max-w-3xl text-center">
//           <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
//             Development Process
//           </span>

//           <h2 className="mt-6 text-5xl font-bold">
//             From Idea to Production
//           </h2>

//           <p className="mt-6 text-lg text-zinc-400">
//             Every project follows a structured workflow that keeps development
//             transparent, efficient, and focused on delivering business value.
//           </p>
//         </div>

//         <div className="relative mt-20">
//           {/* Vertical line on desktop */}
//           <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 lg:block" />

//           <div className="space-y-8">
//             {process.map((step, index) => {
//               const Icon = step.icon;

//               return (
//                 <motion.div
//                   key={step.title}
//                   initial={{ opacity: 0, x: -40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 0.5,
//                     delay: index * 0.08,
//                   }}
//                   className="group relative flex gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.05]"
//                 >
//                   <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
//                     <Icon size={28} />
//                   </div>

//                   <div>
//                     <p className="mb-2 text-sm text-blue-400">
//                       Step {index + 1}
//                     </p>

//                     <h3 className="text-2xl font-semibold">
//                       {step.title}
//                     </h3>

//                     <p className="mt-3 leading-7 text-zinc-400">
//                       {step.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }