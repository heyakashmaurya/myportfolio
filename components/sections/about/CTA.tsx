
"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.07] blur-[140px]"
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[32px] border border-white/[0.09] bg-white/[0.025] px-6 py-16 text-center backdrop-blur-sm sm:px-10 sm:py-20 lg:px-20"
        >
          {/* Top glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
          />

          {/* Decorative gradients */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-500/[0.08] blur-[90px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-cyan-400/[0.06] blur-[90px]"
          />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400"
            >
              <Sparkles size={14} />
              Let's Work Together
            </motion.div>

            <h2 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Have an Idea?
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Let's Build It.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Whether you're building an AI product, launching a SaaS
              platform, or looking to automate your business, I can help turn
              your idea into a scalable product.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050507]"
              >
                Start a Conversation

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-2xl border border-white/[0.09] bg-white/[0.025] px-7 py-3.5 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.05] hover:text-white"
              >
                Explore My Work
              </Link>
            </div>
          </div>

          {/* Bottom decorative line */}
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

//         <div className="rounded-[32px] border border-blue-500/20 bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-cyan-500/10 px-10 py-20 text-center">

//           <h2 className="text-5xl font-bold">
//             Let's Build Something Amazing Together
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
//             Whether you need an AI Voice Agent, SaaS platform, or business automation solution, I'd love to help turn your ideas into reality.
//           </p>

//           <Link
//             href="/contact"
//             className="mt-10 inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
//           >
//             Start Your Project
//           </Link>

//         </div>

//       </Container>
//     </section>
//   );
// }