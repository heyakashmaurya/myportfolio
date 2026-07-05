"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

const skills = [
  {
    title: "Frontend",
    desc: "Next.js, React, TypeScript, Tailwind CSS",
  },
  {
    title: "Backend",
    desc: "Node.js, Express, REST APIs, Authentication",
  },
  {
    title: "AI & Automation",
    desc: "AI Voice Agents, Gemini API, OpenAI, Automation systems",
  },
  {
    title: "Database & Cloud",
    desc: "MongoDB, PostgreSQL, Vercel, AWS basics",
  },
];

export default function SkillsSEO() {
  return (
    <section className="py-28">
      <Container>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Skills
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Technologies I Work With
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:border-blue-500/30 hover:bg-white/[0.05] transition"
            >
              <h3 className="text-xl font-semibold">{skill.title}</h3>
              <p className="mt-4 text-zinc-400 leading-7">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}