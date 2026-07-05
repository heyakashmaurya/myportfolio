"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

export default function AboutHero() {
  return (
    <section className="relative py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              About Me
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight">
              Building AI Products That Solve Real Business Problems
            </h1>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              I'm Akash Maurya, a Full Stack AI Engineer with over 4 years of
              experience building scalable web applications and AI-powered
              solutions. My focus is creating voice agents, SaaS platforms, and
              automation systems that help businesses save time and increase
              efficiency.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <h2 className="text-4xl font-bold text-blue-400">4+</h2>
                <p className="mt-2 text-zinc-400">Years Experience</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-400">20+</h2>
                <p className="mt-2 text-zinc-400">Projects Built</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
              <Image
                src="/images/profile/profile.png"
                alt="Akash Maurya"
                width={450}
                height={550}
                priority
                className="rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}