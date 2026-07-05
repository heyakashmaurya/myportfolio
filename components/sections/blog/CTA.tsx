import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";

export default function CTA() {
  return (
    <section className="pb-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/10 via-white/5 to-cyan-500/10 p-10 md:p-16">

          {/* Background Glow */}

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative z-10">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Let's Work Together
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Need an AI Solution for Your Business?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              I build modern AI Voice Agents, SaaS platforms, automation
              systems, and full-stack applications that help businesses
              automate operations and improve customer experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-500"
              >
                Start a Project

                <ArrowRight size={20} />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-7 py-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                View Projects

                <Briefcase size={20} />
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}