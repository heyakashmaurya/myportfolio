

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

import Container from "@/components/layout/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[20%] h-[380px] w-[380px] rounded-full bg-orange-400/[0.08] blur-[120px]"
      />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-medium text-zinc-300 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              Available for selected projects
            </div>

            {/* Heading */}
            <h1 className="mt-8 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Building AI products that solve{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-orange-300 bg-clip-text text-transparent">
                real business problems.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              I&apos;m Akash Maurya, a Full Stack AI Engineer with 4+ years of
              experience building scalable web applications, AI-powered
              products, voice agents, SaaS platforms, and business automation
              systems.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-500">
              I combine product thinking, modern engineering, and AI to turn
              complex ideas into reliable software that delivers measurable
              value.
            </p>

            {/* Stats */}
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
              <Stat
                value="4+"
                label="Years Experience"
                icon={<BriefcaseBusiness size={16} />}
              />

              <Stat
                value="20+"
                label="Projects Built"
                icon={<Sparkles size={16} />}
              />

              <Stat
                value="AI"
                label="Product Focus"
                icon={<ArrowUpRight size={16} />}
                className="col-span-2 sm:col-span-1"
              />
            </div>
          </motion.div>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: EASE,
              delay: 0.1,
            }}
            className="relative mx-auto w-full max-w-[500px]"
          >
            {/* Outer glow */}
            <div
              aria-hidden
              className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-blue-500/15 via-transparent to-orange-400/10 blur-3xl"
            />

            {/* Decorative orb */}
            <motion.div
              aria-hidden
              animate={{
                y: [0, -10, 0],
                rotate: [0, 4, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 -top-4 z-20 hidden h-20 w-20 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl sm:block"
            >
              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-orange-300/30 to-orange-500/5 blur-md" />
            </motion.div>

            {/* Image frame */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
              {/* Top sheen */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />

              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/profile/profile.png"
                  alt="Akash Maurya - Full Stack AI Engineer"
                  width={600}
                  height={700}
                  priority
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                />

                {/* Image gradient */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                />
              </div>

              {/* Floating identity card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/60 p-4 shadow-xl backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Akash Maurya
                    </p>

                    <p className="mt-1 text-xs text-zinc-400">
                      Full Stack AI Engineer
                    </p>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-orange-300/20 bg-orange-300/10 text-orange-300">
                    <Sparkles size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom accent */}
            <div
              aria-hidden
              className="absolute -bottom-1 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-300/50 to-transparent blur-sm"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Stat({
  value,
  label,
  icon,
  className = "",
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.045] ${className}`}
    >
      <div className="flex items-center gap-2 text-zinc-500">
        <span className="transition-colors group-hover:text-orange-300">
          {icon}
        </span>

        <span className="text-xs font-medium">{label}</span>
      </div>

      <p className="mt-3 text-2xl font-bold tracking-tight text-white">
        {value}
      </p>
    </div>
  );
}


// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import Container from "@/components/layout/Container";

// export default function AboutHero() {
//   return (
//     <section className="relative py-28">
//       <Container>
//         <div className="grid items-center gap-16 lg:grid-cols-2">
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
//               About Me
//             </span>

//             <h1 className="mt-8 text-5xl font-bold leading-tight">
//               Building AI Products That Solve Real Business Problems
//             </h1>

//             <p className="mt-8 text-lg leading-8 text-zinc-400">
//               I'm Akash Maurya, a Full Stack AI Engineer with over 4 years of
//               experience building scalable web applications and AI-powered
//               solutions. My focus is creating voice agents, SaaS platforms, and
//               automation systems that help businesses save time and increase
//               efficiency.
//             </p>

//             <div className="mt-10 grid grid-cols-2 gap-6">
//               <div>
//                 <h2 className="text-4xl font-bold text-blue-400">4+</h2>
//                 <p className="mt-2 text-zinc-400">Years Experience</p>
//               </div>

//               <div>
//                 <h2 className="text-4xl font-bold text-blue-400">20+</h2>
//                 <p className="mt-2 text-zinc-400">Projects Built</p>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="flex justify-center"
//           >
//             <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
//               <Image
//                 src="/images/profile/profile.png"
//                 alt="Akash Maurya"
//                 width={450}
//                 height={550}
//                 priority
//                 className="rounded-2xl object-cover"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </Container>
//     </section>
//   );
// }