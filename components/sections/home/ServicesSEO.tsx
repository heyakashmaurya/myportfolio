"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

const services = [
  "AI Voice Agents for business automation",
  "SaaS product development",
  "Full Stack Web Applications",
  "API integrations & backend systems",
  "Automation tools for businesses",
];

export default function ServicesSEO() {
  return (
    <section className="py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Services
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            What I Build for Clients
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-zinc-300 hover:border-blue-500/30 transition"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}