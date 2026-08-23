

"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Bot,
    CheckCircle2,
    Code2,
    Sparkles,
    Workflow,
} from "lucide-react";

import Container from "@/components/layout/Container";

const focusAreas = [
    "AI SaaS Products",
    "AI Voice Agents",
    "Business Automation",
    "Full-Stack Applications",
];

const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "AI APIs",
    "Cloud Platforms",
];

export default function AboutSEO() {
    return (
        <section className="relative overflow-hidden py-28">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-[150px]" />
                <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-violet-600/[0.04] blur-[120px]" />
            </div>

            <Container>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                        About Me
                    </span>

                    <h2 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        I build software that
                        <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            solves real problems.
                        </span>
                    </h2>
                </motion.div>

                {/* Main Content */}
                <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                    {/* Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="max-w-3xl space-y-6 text-base leading-8 text-zinc-400 sm:text-lg">
                            <p>
                                I&apos;m a{" "}
                                <span className="font-medium text-zinc-200">
                                    Full Stack AI Engineer
                                </span>{" "}
                                focused on building AI-powered SaaS platforms,
                                intelligent voice agents, business automation systems,
                                and modern full-stack applications.
                            </p>

                            <p>
                                I combine modern web technologies with AI APIs,
                                automation workflows, backend systems, and third-party
                                integrations to turn ideas into practical software
                                products.
                            </p>

                            <p>
                                My approach is simple: understand the business problem
                                first, then design and build the technology around it.
                                Whether that means automating repetitive workflows,
                                building an AI receptionist, or developing a complete
                                SaaS platform, I focus on creating systems that are
                                useful, reliable, and scalable.
                            </p>

                            <p>
                                I enjoy working on products where software can remove
                                manual effort, improve customer experiences, and help
                                businesses operate more efficiently.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="mt-9">
                            <a
                                href="/contact"
                                className="group inline-flex items-center text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                            >
                                Let&apos;s build something useful
                                <ArrowUpRight
                                    size={17}
                                    className="ml-2 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>
                        </div>
                    </motion.div>

                    {/* Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-8">
                            {/* Card glow */}
                            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

                            {/* Identity */}
                            <div className="relative flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400 text-xl font-bold text-white shadow-lg shadow-blue-500/10">
                                    A
                                </div>

                                <div>
                                    <h3 className="font-semibold text-white">
                                        Full Stack AI Engineer
                                    </h3>

                                    <p className="mt-1 text-sm text-zinc-500">
                                        AI • SaaS • Automation • Voice
                                    </p>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="my-7 h-px bg-white/[0.07]" />

                            {/* Focus */}
                            <div>
                                <div className="flex items-center gap-2">
                                    <Sparkles
                                        size={16}
                                        className="text-blue-400"
                                    />

                                    <p className="text-sm font-medium text-zinc-300">
                                        What I focus on
                                    </p>
                                </div>

                                <div className="mt-5 space-y-3">
                                    {focusAreas.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3"
                                        >
                                            <CheckCircle2
                                                size={16}
                                                className="shrink-0 text-blue-400"
                                            />

                                            <span className="text-sm text-zinc-400">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="my-7 h-px bg-white/[0.07]" />

                            {/* Core stack */}
                            <div>
                                <div className="flex items-center gap-2">
                                    <Code2
                                        size={16}
                                        className="text-violet-400"
                                    />

                                    <p className="text-sm font-medium text-zinc-300">
                                        Core stack
                                    </p>
                                </div>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-500"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom capability strip */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-16 grid gap-4 sm:grid-cols-3"
                >
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                        <Bot
                            size={20}
                            className="text-blue-400"
                        />

                        <p className="mt-4 text-sm font-medium text-white">
                            AI-First Thinking
                        </p>

                        <p className="mt-2 text-xs leading-6 text-zinc-500">
                            Using AI where it creates measurable value instead of
                            adding unnecessary complexity.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                        <Workflow
                            size={20}
                            className="text-violet-400"
                        />

                        <p className="mt-4 text-sm font-medium text-white">
                            Automation Mindset
                        </p>

                        <p className="mt-2 text-xs leading-6 text-zinc-500">
                            Turning repetitive business processes into reliable
                            automated workflows.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                        <Code2
                            size={20}
                            className="text-cyan-400"
                        />

                        <p className="mt-4 text-sm font-medium text-white">
                            Production Focus
                        </p>

                        <p className="mt-2 text-xs leading-6 text-zinc-500">
                            Building software with maintainability, performance,
                            security, and scalability in mind.
                        </p>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}



// "use client";

// import { motion } from "framer-motion";
// import Container from "@/components/layout/Container";

// export default function AboutSEO() {
//     return (
//         <section className="relative py-28">
//             <div className="absolute inset-0 -z-10">
//                 <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />
//             </div>

//             <Container>
//                 <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="mx-auto max-w-3xl text-center"
//                 >
//                     <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
//                         About Me
//                     </span>

//                     <h2 className="mt-6 text-4xl font-bold md:text-5xl">
//                         Full Stack AI Engineer
//                     </h2>

//                     <p className="mt-8 text-lg text-zinc-400 leading-8">
//                         I am a Full Stack AI Engineer specializing in building scalable AI-powered SaaS platforms,
//                         automation systems, and intelligent voice agents that help businesses reduce manual work
//                         and improve operational efficiency.
//                     </p>

//                     <p className="mt-6 text-lg text-zinc-400 leading-8">
//                         Over time, I have worked on modern full-stack applications using Next.js, React, TypeScript,
//                         Node.js, and cloud platforms like Vercel. My focus is always on building production-ready
//                         systems that are fast, secure, and scalable.
//                     </p>

//                     <p className="mt-6 text-lg text-zinc-400 leading-8">
//                         I enjoy solving real-world business problems using AI automation, whether it's building
//                         SaaS dashboards, integrating APIs, or designing intelligent backend workflows that reduce
//                         human effort.
//                     </p>

//                     <p className="mt-6 text-lg text-zinc-400 leading-8">
//                         My goal is to help startups and businesses adopt AI-driven solutions that improve efficiency,
//                         automate repetitive tasks, and unlock new growth opportunities.
//                     </p>

//                     {/* <p className="mt-8 text-lg text-zinc-400 leading-8">
//             I build AI-powered SaaS platforms, automation systems, and
//             intelligent voice agents that help businesses scale efficiently.
//           </p>

//           <p className="mt-6 text-lg text-zinc-400 leading-8">
//             Specializing in Next.js, React, TypeScript, Node.js, and modern AI APIs,
//             I transform ideas into production-ready digital products.
//           </p> */}
//                 </motion.div>
//             </Container>
//         </section>
//     );
// }