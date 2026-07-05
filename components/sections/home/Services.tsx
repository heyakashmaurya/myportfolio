"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { services } from "@/data/services";

export default function Services() {
    return (
        <section className="py-28">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                        Services
                    </span>

                    <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                        Helping Businesses Build
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            {" "}AI-Powered Products
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-zinc-400">
                        I design, develop, and deploy modern AI applications that automate
                        business processes and create exceptional user experiences.
                    </p>
                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.05]"
                            >
                                <div className="inline-flex rounded-2xl bg-blue-500/10 p-4 text-blue-400 transition group-hover:scale-110">
                                    <Icon size={30} />
                                </div>

                                <h3 className="mt-8 text-2xl font-semibold">
                                    {service.title}
                                </h3>

                                <p className="mt-4 leading-7 text-zinc-400">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}