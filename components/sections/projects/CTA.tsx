

"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-[32px] border border-white/[0.09] bg-white/[0.025] px-6 py-16 text-center backdrop-blur-sm sm:px-10 sm:py-20 lg:px-20"
        >
          {/* Top light */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent"
          />

          {/* Main glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[120px] transition-opacity duration-700 group-hover:bg-blue-500/[0.12]"
          />

          {/* Left glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 bottom-[-180px] h-[300px] w-[300px] rounded-full bg-cyan-400/[0.05] blur-[100px]"
          />

          {/* Right glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-[-120px] h-[300px] w-[300px] rounded-full bg-blue-600/[0.05] blur-[100px]"
          />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
              <Sparkles size={14} />
              Let's Build
            </div>

            {/* Heading */}
            <h2 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Have a Project
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                in Mind?
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Let’s turn your idea into a powerful digital product — from AI
              voice agents and SaaS platforms to intelligent automation
              systems built to scale.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group/button inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050507]"
              >
                Start a Project

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center rounded-2xl border border-white/[0.09] bg-white/[0.025] px-7 py-3.5 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.05] hover:text-white"
              >
                View My Work
              </Link>
            </div>
          </div>

          {/* Bottom accent */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
          />
        </motion.div>
      </Container>
    </section>
  );
}


// import Link from "next/link";
// import Container from "@/components/layout/Container";

// export default function CTA() {
//   return (
//     <section className="py-28">
//       <Container>
//         <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-cyan-500/10 px-10 py-20 text-center">

//           {/* Glow background */}
//           <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

//           <div className="relative z-10">

//             <h2 className="text-5xl font-bold">
//               Have a Project in Mind?
//             </h2>

//             <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
//               Let’s build something powerful together — AI Voice Agents,
//               SaaS platforms, or automation systems that scale your business.
//             </p>

//             <Link
//               href="/contact"
//               className="mt-10 inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
//             >
//               Start a Project
//             </Link>

//           </div>

//         </div>
//       </Container>
//     </section>
//   );
// }