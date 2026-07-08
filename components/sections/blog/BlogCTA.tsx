import Link from "next/link";
import { ArrowRight, PhoneCall, Bot, Zap } from "lucide-react";

interface BlogCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function BlogCTA({
  title,
  description,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: BlogCTAProps) {
  return (
    <section className="relative my-20 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-10 md:p-14">

      {/* Background Glow */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div className="max-w-2xl">

          <span className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            🤖 AI Voice Automation
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            {title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-300">
            {description}
          </p>

          {/* Features */}
          <div className="mt-8 flex flex-wrap gap-4">

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <PhoneCall className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-zinc-300">
                24/7 Call Handling
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <Bot className="h-5 w-5 text-cyan-400" />
              <span className="text-sm text-zinc-300">
                Human-like AI
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="text-sm text-zinc-300">
                Fast Deployment
              </span>
            </div>

          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4 lg:min-w-[280px]">

          <Link
            href={buttonLink}
            className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/30"
          >
            {buttonText}

            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {secondaryButtonText && secondaryButtonLink && (
            <Link
              href={secondaryButtonLink}
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-xl transition hover:border-blue-400/40 hover:bg-white/10"
            >
              {secondaryButtonText}
            </Link>
          )}

          <p className="text-center text-sm text-zinc-400">
            ✓ Free Consultation • ✓ Custom AI Solution • ✓ No Obligation
          </p>

        </div>

      </div>
    </section>
  );
}