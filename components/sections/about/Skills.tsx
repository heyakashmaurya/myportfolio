

"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Sparkles,
} from "lucide-react";

import Container from "@/components/layout/Container";
import { skills } from "@/data/skills";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Skills() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-[15%] h-[360px] w-[360px] rounded-full bg-blue-500/[0.06] blur-[120px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] bottom-[10%] h-[340px] w-[340px] rounded-full bg-orange-400/[0.05] blur-[120px]"
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
            <Sparkles size={15} className="text-orange-300" />
            Technical Expertise
          </div>

          <h2 className="mt-7 text-4xl font-bold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-orange-300 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
            Technologies and tools I use to design, build, and ship
            production-ready digital products.
          </p>
        </motion.div>

        {/* Technology panel */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8"
        >
          {/* Top sheen */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />

          {/* Header inside panel */}
          <div className="mb-7 flex items-center justify-between border-b border-white/[0.07] pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.08] text-blue-300">
                <Code2 size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Technology Stack
                </p>

                <p className="mt-0.5 text-xs text-zinc-500">
                  Tools I work with
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-2 text-xs text-zinc-500 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Production focused
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.035,
                  ease: EASE,
                }}
                className="group relative"
              >
                <div className="relative flex items-center gap-2.5 overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-blue-400/[0.07] hover:text-white hover:shadow-lg hover:shadow-blue-500/[0.08]">
                  {/* Hover sheen */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-500 group-hover:translate-x-full" />

                  <SkillIcon index={index} />

                  <span className="relative">{skill}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom accent */}
          <div className="mt-8 grid grid-cols-3 gap-2">
            <div className="h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
            <div className="h-px bg-white/[0.05]" />
            <div className="h-px bg-gradient-to-l from-orange-400/20 to-transparent" />
          </div>
        </motion.div>

        {/* Small capability row */}
        <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-3">
          <Capability
            icon={<BrainCircuit size={17} />}
            title="AI Engineering"
            description="AI applications & intelligent automation"
          />

          <Capability
            icon={<Layers3 size={17} />}
            title="Full Stack"
            description="Modern web apps & scalable systems"
          />

          <Capability
            icon={<Database size={17} />}
            title="Backend & Data"
            description="APIs, databases & production infrastructure"
          />
        </div>
      </Container>
    </section>
  );
}

function SkillIcon({ index }: { index: number }) {
  const icons = [
    <Code2 key="code" size={14} />,
    <BrainCircuit key="brain" size={14} />,
    <Database key="database" size={14} />,
    <Layers3 key="layers" size={14} />,
  ];

  return (
    <span className="relative flex h-6 w-6 items-center justify-center rounded-md bg-white/[0.06] text-blue-300 transition-colors duration-300 group-hover:bg-blue-400/10 group-hover:text-orange-300">
      {icons[index % icons.length]}
    </span>
  );
}

function Capability({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.035]">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-400 transition-colors group-hover:border-blue-400/20 group-hover:text-blue-300">
        {icon}
      </div>

      <h3 className="mt-4 text-sm font-semibold text-white">
        {title}
      </h3>

      <p className="mt-1.5 text-xs leading-5 text-zinc-500">
        {description}
      </p>
    </div>
  );
}


// import Container from "@/components/layout/Container";
// import { skills } from "@/data/skills";

// export default function Skills() {
//   return (
//     <section className="py-24">
//       <Container>

//         <div className="text-center">

//           <h2 className="text-5xl font-bold">
//             Skills & Technologies
//           </h2>

//           <p className="mt-4 text-zinc-400">
//             Technologies I use to build production-ready products.
//           </p>

//         </div>

//         <div className="mt-16 flex flex-wrap justify-center gap-4">

//           {skills.map((skill) => (
//             <div
//               key={skill}
//               className="
//                 rounded-full
//                 border
//                 border-white/10
//                 bg-white/[0.03]
//                 px-6
//                 py-3
//                 transition
//                 duration-300
//                 hover:border-blue-500/40
//                 hover:bg-blue-500/10
//               "
//             >
//               {skill}
//             </div>
//           ))}

//         </div>

//       </Container>
//     </section>
//   );
// }