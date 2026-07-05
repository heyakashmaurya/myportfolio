"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

export default function AboutSEO() {
  return (
    <section className="relative py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            About Me
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Full Stack AI Engineer
          </h2>

          <p className="mt-8 text-lg text-zinc-400 leading-8">
            I build AI-powered SaaS platforms, automation systems, and
            intelligent voice agents that help businesses scale efficiently.
          </p>

          <p className="mt-6 text-lg text-zinc-400 leading-8">
            Specializing in Next.js, React, TypeScript, Node.js, and modern AI APIs,
            I transform ideas into production-ready digital products.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}