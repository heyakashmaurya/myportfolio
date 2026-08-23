

"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    BrainCircuit,
    Check,
    Layers3,
    Rocket,
    ShieldCheck,
    Sparkles,
    Workflow,
} from "lucide-react";

import Container from "@/components/layout/Container";

const advantages = [
    {
        title: "AI + Full-Stack Expertise",
        description:
            "Frontend, backend, databases, APIs, and AI systems can be designed as one complete product.",
        icon: BrainCircuit,
    },
    {
        title: "Business-First Thinking",
        description:
            "I focus on the actual business problem before choosing the technology or architecture.",
        icon: Workflow,
    },
    {
        title: "Production-Ready Code",
        description:
            "Clean architecture, reusable components, maintainable code, and scalable foundations.",
        icon: ShieldCheck,
    },
    {
        title: "Modern Technology",
        description:
            "I work with modern frameworks, AI APIs, cloud platforms, and development practices.",
        icon: Sparkles,
    },
    {
        title: "End-to-End Development",
        description:
            "From initial idea and UI to backend systems, integrations, deployment, and iteration.",
        icon: Layers3,
    },
    {
        title: "Built to Scale",
        description:
            "Products are structured so new features, users, integrations, and business requirements can be added over time.",
        icon: Rocket,
    },
];

export default function WhyHireMe() {
    return (
        <section className="relative overflow-hidden py-28">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-blue-600/[0.05] blur-[140px]" />
                <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-violet-600/[0.04] blur-[120px]" />
            </div>

            <Container>
                <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:sticky lg:top-28"
                    >
                        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                            Why Work With Me
                        </span>

                        <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            More than just
                            <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                writing code.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-md text-base leading-8 text-zinc-400 sm:text-lg">
                            I combine software engineering, AI, automation, and
                            product thinking to build solutions around real
                            business needs.
                        </p>

                        <div className="mt-8 flex items-center gap-3 text-sm text-zinc-500">
                            <div className="flex -space-x-2">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-zinc-950 bg-blue-500 text-xs font-bold text-white">
                                    AI
                                </span>

                                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-zinc-950 bg-violet-500 text-xs font-bold text-white">
                                    FS
                                </span>

                                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-zinc-950 bg-cyan-500 text-xs font-bold text-white">
                                    DX
                                </span>
                            </div>

                            <span>
                                AI + Full-Stack + Automation
                            </span>
                        </div>

                        <a
                            href="/contact"
                            className="group mt-9 inline-flex items-center text-sm font-medium text-white transition-colors hover:text-blue-400"
                        >
                            Let&apos;s work together
                            <ArrowUpRight
                                size={16}
                                className="ml-2 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>
                    </motion.div>

                    {/* Right */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        {advantages.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
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
                                        duration: 0.5,
                                        delay: index * 0.07,
                                    }}
                                    className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/25 hover:bg-white/[0.045]"
                                >
                                    {/* Hover glow */}
                                    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                                    <div className="relative flex items-start justify-between">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-zinc-400 transition-all duration-300 group-hover:border-blue-500/20 group-hover:bg-blue-500/10 group-hover:text-blue-400">
                                            <Icon size={20} />
                                        </div>

                                        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/[0.08] text-zinc-600 transition-colors group-hover:border-blue-500/20 group-hover:text-blue-400">
                                            <Check size={12} />
                                        </div>
                                    </div>

                                    <h3 className="relative mt-6 text-lg font-semibold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="relative mt-3 text-sm leading-7 text-zinc-500">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom statement */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 border-t border-white/[0.07] pt-10"
                >
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                        <p className="max-w-2xl text-sm leading-7 text-zinc-500">
                            The goal isn&apos;t to add technology for the sake of
                            technology. It&apos;s to build software that makes a
                            measurable difference to the people and businesses
                            using it.
                        </p>

                        <div className="flex shrink-0 items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Available for projects
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}



// "use client";

// import { motion } from "framer-motion";
// import Container from "@/components/layout/Container";

// export default function WhyHireMe() {
//     return (
//         <section className="relative py-28">
//             <Container>
//                 <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     className="mx-auto max-w-3xl text-center"
//                 >
//                     <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
//                         Why Me
//                     </span>

//                     <h2 className="mt-6 text-4xl font-bold md:text-5xl">
//                         Why Clients Choose Me
//                     </h2>

//                     <p className="mt-8 text-lg text-zinc-400 leading-8">
//                         I focus on building real-world AI systems that solve business problems, not just static websites.
//                         Every project I build is designed with scalability, performance, and long-term maintainability in mind.
//                     </p>

//                     <p className="mt-6 text-lg text-zinc-400 leading-8">
//                         My strength lies in combining frontend, backend, and AI systems into a single unified product.
//                         This allows me to deliver complete end-to-end solutions without dependency on multiple developers.
//                     </p>

//                     <p className="mt-6 text-lg text-zinc-400 leading-8">
//                         I also prioritize clean architecture, reusable code, and modern development practices to ensure
//                         every product is production-ready and easy to scale as the business grows.
//                     </p>
//                 </motion.div>
//             </Container>
//         </section>
//     );
// }