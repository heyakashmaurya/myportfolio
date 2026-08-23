
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
} from "lucide-react";

import Container from "@/components/layout/Container";
import { experiences } from "@/data/experience";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      {/* Ambient atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-[20%] h-[350px] w-[350px] rounded-full bg-blue-500/[0.07] blur-[120px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] bottom-[10%] h-[350px] w-[350px] rounded-full bg-orange-400/[0.05] blur-[120px]"
      />

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-medium text-zinc-300 backdrop-blur-xl">
            <BriefcaseBusiness
              size={15}
              className="text-blue-400"
            />

            Professional Journey
          </div>

          <h2 className="mt-7 text-4xl font-bold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-orange-300 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
            A look at the experiences, projects, and milestones that shaped
            the way I build software and AI products.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto mt-20 max-w-4xl">
          {/* Timeline line */}
          <div
            aria-hidden
            className="absolute bottom-0 left-[19px] top-0 w-px bg-gradient-to-b from-blue-500/60 via-white/10 to-transparent sm:left-[23px]"
          />

          <div className="space-y-8">
            {experiences.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: EASE,
                }}
                className="group relative flex gap-5 sm:gap-7"
              >
                {/* Timeline node */}
                <div className="relative z-10 shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/20 bg-[#070912] shadow-lg shadow-blue-500/10 sm:h-12 sm:w-12">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/30 sm:h-7 sm:w-7">
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                {/* Experience card */}
                <div className="min-w-0 flex-1 rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.045] hover:shadow-2xl hover:shadow-black/20 sm:p-7">
                  {/* Card top */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span className="inline-flex rounded-full border border-blue-400/15 bg-blue-400/[0.08] px-3 py-1 text-xs font-medium text-blue-300">
                        {item.year}
                      </span>

                      <h3 className="mt-4 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>

                    <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-500 transition-all duration-300 group-hover:border-orange-300/20 group-hover:bg-orange-300/[0.06] group-hover:text-orange-300 sm:flex">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                    {item.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

                  <div className="mt-4 flex items-center gap-2 text-xs text-zinc-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
                    Experience milestone
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


// import Container from "@/components/layout/Container";
// import { experiences } from "@/data/experience";

// export default function Experience() {
//   return (
//     <section className="py-24">
//       <Container>

//         <div className="mb-16 text-center">
//           <h2 className="text-5xl font-bold">
//             My Journey
//           </h2>

//           <p className="mt-4 text-zinc-400">
//             A quick overview of my growth as a developer.
//           </p>
//         </div>

//         <div className="relative mx-auto max-w-4xl">

//           <div className="absolute left-4 top-0 h-full w-px bg-white/10" />

//           <div className="space-y-12">

//             {experiences.map((item) => (
//               <div
//                 key={item.title}
//                 className="relative flex gap-8"
//               >
//                 <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
//                   ✓
//                 </div>

//                 <div>
//                   <span className="text-sm text-blue-400">
//                     {item.year}
//                   </span>

//                   <h3 className="mt-2 text-2xl font-semibold">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 leading-7 text-zinc-400">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             ))}

//           </div>

//         </div>

//       </Container>
//     </section>
//   );
// }