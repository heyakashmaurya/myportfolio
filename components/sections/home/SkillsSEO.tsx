
"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Bot,
    BrainCircuit,
    Code2,
    Database,
    Gauge,
    Headphones,
    Workflow,
} from "lucide-react";

import Container from "@/components/layout/Container";

const skills = [
    {
        title: "Full-Stack Development",
        desc: "Production-ready web applications with modern frontend architecture, scalable APIs, authentication, dashboards, and responsive interfaces.",
        icon: Code2,
        tags: ["Next.js", "React", "TypeScript", "Node.js"],
    },
    {
        title: "AI Products & SaaS",
        desc: "AI-powered SaaS platforms that connect intelligent models with real business workflows, user dashboards, APIs, and scalable application infrastructure.",
        icon: BrainCircuit,
        tags: ["AI SaaS", "LLMs", "APIs", "Automation"],
    },
    {
        title: "AI Voice Agents",
        desc: "Intelligent voice systems that can answer calls, handle conversations, capture information, manage bookings, and automate customer interactions.",
        icon: Headphones,
        tags: ["Voice AI", "Twilio", "LLMs", "Call Automation"],
    },
    {
        title: "Business Automation",
        desc: "Automated workflows designed to remove repetitive manual tasks, connect business systems, and improve operational efficiency.",
        icon: Workflow,
        tags: ["n8n", "APIs", "Webhooks", "Workflows"],
    },
    {
        title: "Backend & APIs",
        desc: "Reliable backend systems with REST APIs, authentication, business logic, integrations, database architecture, and third-party services.",
        icon: Bot,
        tags: ["Node.js", "Express", "REST APIs", "Auth"],
    },
    {
        title: "Database Architecture",
        desc: "Structured data systems designed around application requirements, performance, reliability, and long-term scalability.",
        icon: Database,
        tags: ["MongoDB", "PostgreSQL", "Redis", "Prisma"],
    },
    {
        title: "Cloud & Deployment",
        desc: "Deploying and maintaining modern applications using cloud platforms, containers, managed services, and production deployment workflows.",
        icon: Gauge,
        tags: ["Vercel", "AWS", "Docker", "Cloudflare"],
    },
    {
        title: "System Integration",
        desc: "Connecting AI models, communication platforms, databases, external APIs, and business tools into unified software systems.",
        icon: Bot,
        tags: ["APIs", "Webhooks", "Integrations", "Automation"],
    },
];

export default function SkillsSEO() {
    return (
        <section className="relative overflow-hidden py-28">
            {/* Background decoration */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-[140px]" />

            <Container className="relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                        Capabilities
                    </span>

                    <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        What I Build With
                        <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            Modern Technology
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                        I combine full-stack engineering, artificial intelligence,
                        voice technology, and automation to build practical software
                        systems that solve real business problems.
                    </p>
                </motion.div>

                {/* Capability Grid */}
                <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;

                        return (
                            <motion.article
                                key={skill.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.06,
                                }}
                                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/25 hover:bg-white/[0.045]"
                            >
                                {/* Hover glow */}
                                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                                {/* Icon */}
                                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-zinc-300 transition-all duration-300 group-hover:border-blue-500/20 group-hover:bg-blue-500/10 group-hover:text-blue-400">
                                    <Icon size={22} strokeWidth={1.8} />
                                </div>

                                {/* Content */}
                                <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">
                                    {skill.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-zinc-400">
                                    {skill.desc}
                                </p>

                                {/* Tags */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {skill.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-zinc-500 transition-colors group-hover:text-zinc-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Bottom accent */}
                                <div className="mt-7 flex items-center text-xs font-medium text-zinc-600 transition-colors group-hover:text-blue-400">
                                    <span>Explore capability</span>

                                    <ArrowUpRight
                                        size={14}
                                        className="ml-1.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* Bottom SEO / positioning copy */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mx-auto mt-14 max-w-3xl text-center"
                >
                    <p className="text-sm leading-7 text-zinc-500">
                        From AI SaaS products and voice agents to business automation
                        platforms and full-stack applications, I build software
                        around real-world requirements with a focus on reliability,
                        usability, and scalable architecture.
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}


// "use client";

// import { motion } from "framer-motion";
// import Container from "@/components/layout/Container";

// const skills = [
//     {
//         title: "Frontend",
//         desc: "Next.js, React, TypeScript, Tailwind CSS",
//     },
//     {
//         title: "Backend",
//         desc: "Node.js, Express, REST APIs, Authentication",
//     },
//     {
//         title: "AI & Automation",
//         desc: "AI Voice Agents, Gemini API, OpenAI, Automation systems",
//     },
//     {
//         title: "Database & Cloud",
//         desc: "MongoDB, PostgreSQL, Vercel, AWS basics",
//     },
// ];

// export default function SkillsSEO() {
//     return (
//         <section className="py-28">
//             <Container>
//                 <div className="text-center">
//                     <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
//                         Skills
//                     </span>

//                     <h2 className="mt-6 text-4xl font-bold md:text-5xl">
//                         Technologies I Work With
//                     </h2>
//                 </div>

//                 <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
//                     {skills.map((skill, i) => (
//                         <motion.div
//                             key={skill.title}
//                             initial={{ opacity: 0, y: 40 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: i * 0.1 }}
//                             className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:border-blue-500/30 hover:bg-white/[0.05] transition"
//                         >
//                             <h3 className="text-xl font-semibold">{skill.title}</h3>
//                             <p className="mt-4 text-zinc-400 leading-7">{skill.desc}</p>
//                         </motion.div>
//                     ))}
//                 </div>

//                 <p className="mt-12 text-center text-zinc-400 leading-7 max-w-3xl mx-auto">
//                     I continuously explore new technologies in AI, SaaS development, and automation systems
//                     to stay updated with modern engineering practices and build better digital products.
//                 </p>
//             </Container>
//         </section>
//     );
// }