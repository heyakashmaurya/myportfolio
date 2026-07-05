"use client";

import { motion } from "framer-motion";

import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiNodedotjs,
    SiMongodb,
    SiDocker,
    SiPostgresql,
} from "react-icons/si";

import { Sparkles } from "lucide-react";

const technologies = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    //   { name: "OpenAI", icon: SiOpenai },
    { name: "AI", icon: Sparkles }, // Instead of SiOpenai
    { name: "Docker", icon: SiDocker },
];

export default function TechStack() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-5">

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-sm uppercase tracking-[0.3em] text-zinc-500"
                >
                    Technologies I Build With
                </motion.p>

                <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
                    {technologies.map(({ name, icon: Icon }, index) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.08,
                            }}
                            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.05]"
                        >
                            <Icon className="mx-auto text-4xl text-zinc-300 transition group-hover:scale-110 group-hover:text-blue-400" />

                            <p className="mt-5 text-center text-sm font-medium text-zinc-400 group-hover:text-white">
                                {name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}