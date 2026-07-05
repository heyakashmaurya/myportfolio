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
            I don’t just build websites — I build AI-driven systems that automate
            business workflows and generate real value.
          </p>

          <p className="mt-6 text-lg text-zinc-400 leading-8">
            My focus is on performance, scalability, and clean architecture,
            ensuring every product is production-ready and future-proof.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}