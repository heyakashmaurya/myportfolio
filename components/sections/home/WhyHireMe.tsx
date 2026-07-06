"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

export default function WhyHireMe() {
    return (
        <section className="relative py-28">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                        Why Me
                    </span>

                    <h2 className="mt-6 text-4xl font-bold md:text-5xl">
                        Why Clients Choose Me
                    </h2>

                    <p className="mt-8 text-lg text-zinc-400 leading-8">
                        I focus on building real-world AI systems that solve business problems, not just static websites.
                        Every project I build is designed with scalability, performance, and long-term maintainability in mind.
                    </p>

                    <p className="mt-6 text-lg text-zinc-400 leading-8">
                        My strength lies in combining frontend, backend, and AI systems into a single unified product.
                        This allows me to deliver complete end-to-end solutions without dependency on multiple developers.
                    </p>

                    <p className="mt-6 text-lg text-zinc-400 leading-8">
                        I also prioritize clean architecture, reusable code, and modern development practices to ensure
                        every product is production-ready and easy to scale as the business grows.
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}