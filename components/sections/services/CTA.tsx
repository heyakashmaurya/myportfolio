import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl px-5">
        <div className="rounded-[32px] border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-white/[0.03] to-cyan-500/10 p-10 text-center md:p-16">
          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Ready to Start?
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight md:text-5xl">
            Let's Build Something Amazing Together
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Whether you need an AI Voice Agent, a scalable SaaS platform,
            workflow automation, or a custom full-stack application, I'd love
            to help turn your idea into a production-ready product.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link href="/contact">
              <Button size="lg">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link href="/projects">
              <Button variant="outline" size="lg">
                View Projects
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <MessageCircle size={16} className="text-blue-400" />
              Free Project Discussion
            </div>

            <div>•</div>

            <div>Remote Worldwide</div>

            <div>•</div>

            <div>Fast Response</div>
          </div>
        </div>
      </div>
    </section>
  );
}