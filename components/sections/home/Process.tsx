"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { process } from "@/data/process";

export default function Process() {
  return (
    <section className="py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Development Process
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            From Idea to Production
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Every project follows a structured workflow that keeps development
            transparent, efficient, and focused on delivering business value.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Vertical line on desktop */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 lg:block" />

          <div className="space-y-8">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group relative flex gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.05]"
                >
                  <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <Icon size={28} />
                  </div>

                  <div>
                    <p className="mb-2 text-sm text-blue-400">
                      Step {index + 1}
                    </p>

                    <h3 className="text-2xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-zinc-400">
                      {step.description}
                    </p>
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