

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/layout/Container";

const stats = [
  {
    value: "4+",
    label: "Years Experience",
    description: "Building modern web & AI applications",
  },
  {
    value: "20+",
    label: "Projects Delivered",
    description: "From SaaS products to AI automation",
  },
  {
    value: "100%",
    label: "Responsive Design",
    description: "Optimized across every screen size",
  },
  {
    value: "24/7",
    label: "Learning & Building",
    description: "Continuously exploring AI & new technology",
  },
];

export default function Achievements() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-[120px]"
      />

      <Container>
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            By The Numbers
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Experience That
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Delivers
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
            A few numbers that represent my journey, experience, and
            commitment to building meaningful digital products.
          </p>
        </div>

        {/* Stats */}
        <div className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="group relative"
            >
              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/30 via-cyan-400/10 to-transparent opacity-0 blur-sm transition duration-500 group-hover:opacity-100"
              />

              <div className="relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-blue-400/20 group-hover:bg-white/[0.04]">
                {/* Top accent */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number + icon */}
                <div className="flex items-start justify-between">
                  <motion.h3
                    className="text-5xl font-bold tracking-tight text-white"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stat.value}
                  </motion.h3>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-500 transition-all duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-500/10 group-hover:text-blue-400">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Label */}
                <h3 className="mt-7 text-lg font-semibold text-zinc-100">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
                  {stat.description}
                </p>

                {/* Bottom indicator */}
                <div className="mt-7 h-px w-full overflow-hidden bg-white/[0.06]">
                  <div className="h-full w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700 group-hover:w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}


// import Container from "@/components/layout/Container";

// const stats = [
//   {
//     value: "4+",
//     label: "Years Experience",
//   },
//   {
//     value: "20+",
//     label: "Projects",
//   },
//   {
//     value: "100%",
//     label: "Responsive Design",
//   },
//   {
//     value: "24/7",
//     label: "Learning AI",
//   },
// ];

// export default function Achievements() {
//   return (
//     <section className="py-24">
//       <Container>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

//           {stats.map((stat) => (
//             <div
//               key={stat.label}
//               className="
//                 rounded-3xl
//                 border
//                 border-white/10
//                 bg-white/[0.03]
//                 p-10
//                 text-center
//               "
//             >
//               <h3 className="text-5xl font-bold text-blue-500">
//                 {stat.value}
//               </h3>

//               <p className="mt-4 text-zinc-400">
//                 {stat.label}
//               </p>
//             </div>
//           ))}

//         </div>

//       </Container>
//     </section>
//   );
// }