import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
          <Sparkles size={16} />
          Professional Development Services
        </div>

        <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          AI Solutions &
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Full Stack Development
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
          I help startups, businesses, and founders build production-ready
          AI Voice Agents, SaaS platforms, automation systems, and modern
          web applications that scale.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Link href="/contact">
            <Button size="lg">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <Link href="/projects">
            <Button variant="outline" size="lg">
              View My Work
            </Button>
          </Link>
        </div>

        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-4">
          <StatCard number="10+" label="Projects Built" />
          <StatCard number="4+" label="Core Services" />
          <StatCard number="24/7" label="AI Automation" />
          <StatCard number="100%" label="Responsive Design" />
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  number: string;
  label: string;
}

function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
      <h3 className="text-3xl font-bold text-blue-400">
        {number}
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        {label}
      </p>
    </div>
  );
}