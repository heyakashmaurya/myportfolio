"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const process = [
  {
    step: "01",
    title: "Understand",
    description:
      "I start by understanding the business, users, existing workflow, and the actual problem the software needs to solve.",
    icon: Search,
  },
  {
    step: "02",
    title: "Plan",
    description:
      "I define the product structure, technical architecture, user experience, integrations, database, and automation requirements.",
    icon: Lightbulb,
  },
  {
    step: "03",
    title: "Build",
    description:
      "I develop the application using modern full-stack technologies with a strong focus on performance, maintainability, and scalability.",
    icon: Settings2,
  },
  {
    step: "04",
    title: "Integrate AI",
    description:
      "Where AI can create real value, I integrate intelligent workflows, LLMs, voice agents, APIs, and automation into the product.",
    icon: Rocket,
  },
  {
    step: "05",
    title: "Test & Secure",
    description:
      "I test important workflows, handle edge cases, improve reliability, and make sure the application is ready for real users.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Launch & Improve",
    description:
      "After deployment, the product can be monitored, optimized, and continuously improved based on real-world usage and feedback.",
    icon: CheckCircle2,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.04] blur-[150px]" />
      </div>

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
            My Process
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            From Idea to
            <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Production
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I follow a practical development process focused on understanding
            the problem first, building the right solution, and continuously
            improving it after launch.
          </p>
        </motion.div>

        {/* Process */}
        <div className="relative mt-20">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

          <div className="space-y-10 lg:space-y-0">
            {process.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  initial={{
                    opacity: 0,
                    x: isEven ? -30 : 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-20"
                >
                  {/* Left / Right content */}
                  <div
                    className={`${
                      isEven
                        ? "lg:col-start-1 lg:text-right"
                        : "lg:col-start-2"
                    }`}
                  >
                    <div
                      className={`group relative rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:border-violet-500/20 hover:bg-white/[0.04] ${
                        isEven
                          ? "lg:ml-auto lg:max-w-xl"
                          : "lg:mr-auto lg:max-w-xl"
                      }`}
                    >
                      {/* Top */}
                      <div
                        className={`flex items-start justify-between ${
                          isEven ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-zinc-300 transition-colors group-hover:border-violet-500/20 group-hover:bg-violet-500/10 group-hover:text-violet-400">
                          <Icon size={21} strokeWidth={1.8} />
                        </div>

                        <span className="font-mono text-xs text-zinc-700">
                          {item.step}
                        </span>
                      </div>

                      <h3 className="mt-6 text-xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center indicator */}
                  <div className="absolute left-1/2 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-zinc-950 bg-violet-400 shadow-[0_0_20px_rgba(167,139,250,0.45)] lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <p className="text-sm text-zinc-500">
            Have an idea that you want to turn into a real product?
          </p>

          <a
            href="/contact"
            className="group mt-5 inline-flex items-center text-sm font-medium text-white transition-colors hover:text-violet-400"
          >
            Let&apos;s talk about your project
            <ArrowRight
              size={16}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}



// "use client";

// import { motion } from "framer-motion";
// import Container from "@/components/layout/Container";

// const services = [
//   "AI Voice Agents for business automation",
//   "SaaS product development",
//   "Full Stack Web Applications",
//   "API integrations & backend systems",
//   "Automation tools for businesses",
// ];

// export default function ServicesSEO() {
//   return (
//     <section className="py-28">
//       <Container>
//         <div className="mx-auto max-w-3xl text-center">
//           <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
//             Services
//           </span>

//           <h2 className="mt-6 text-4xl font-bold md:text-5xl">
//             What I Build for Clients
//           </h2>
//         </div>

//         <div className="mt-16 grid gap-6 md:grid-cols-2">
//           {services.map((item, i) => (
//             <motion.div
//               key={item}
//               initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-zinc-300 hover:border-blue-500/30 transition"
//             >
//               {item}
//             </motion.div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }