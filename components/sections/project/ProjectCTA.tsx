import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ProjectCTA() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl px-5">
        <div className="rounded-[32px] border border-blue-500/20 bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-transparent p-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Let's Build Together
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
            Have an AI idea?
            <br />
            Let's turn it into a real product.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            I build production-ready AI Voice Agents, SaaS platforms,
            automation systems, dashboards, and scalable full-stack
            applications using modern technologies.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link href="/contact">
              <Button size="lg">
                Start a Project

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link href="/projects">
              <Button variant="outline" size="lg">
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}