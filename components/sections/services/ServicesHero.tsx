"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/[0.06]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Main glow */}
        <div className="absolute left-1/2 top-[-180px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/[0.10] blur-[140px]" />

        {/* Secondary glow */}
        <div className="absolute right-[-200px] top-[35%] h-[400px] w-[400px] rounded-full bg-cyan-500/[0.06] blur-[120px]" />

        {/* Grid */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]
            bg-[size:64px_64px]
            [mask-image:linear-gradient(to_bottom,black_0%,transparent_85%)]
          "
        />

        {/* Top radial fade */}
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-blue-500/[0.03] to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">

        {/* Eyebrow */}
        <div className="flex justify-center">
          <div className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-zinc-300 shadow-lg shadow-black/10 backdrop-blur-xl">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>

            Available for new projects

            <ArrowUpRight
              size={13}
              className="text-zinc-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>
        </div>

        {/* Hero content */}
        <div className="mx-auto mt-8 max-w-5xl text-center">

          <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[82px]">
            I build
            <span className="mx-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent">
              AI-powered
            </span>
            products
            <br className="hidden sm:block" />
            that move businesses forward.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            From intelligent voice agents and SaaS platforms to
            automation systems and modern web applications — I
            design and build scalable products from idea to
            production.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <Link href="/contact">
              <Button
                size="lg"
                className="group h-12 rounded-xl px-6 text-sm font-semibold"
              >
                Start Your Project

                <ArrowRight
                  className="ml-2 transition-transform group-hover:translate-x-1"
                  size={17}
                />
              </Button>
            </Link>

            <Link
              href="/projects"
              className="
                inline-flex h-12 items-center justify-center
                gap-2 rounded-xl
                border border-white/[0.10]
                bg-white/[0.035]
                px-6
                text-sm
                font-medium
                text-zinc-200
                backdrop-blur
                transition-all
                hover:border-white/[0.16]
                hover:bg-white/[0.07]
                hover:text-white
              "
            >
              Explore my work

              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Trust line */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-500">
            <TrustItem text="Production-ready" />
            <TrustItem text="Scalable architecture" />
            <TrustItem text="AI-first development" />
          </div>
        </div>

        {/* Service preview */}
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-zinc-950/70 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">

            {/* Top bar */}
            <div className="flex h-11 items-center justify-between border-b border-white/[0.06] px-4">

              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-white/10" />
                  <span className="size-2.5 rounded-full bg-white/10" />
                  <span className="size-2.5 rounded-full bg-white/10" />
                </div>
              </div>

              <div className="hidden items-center gap-2 text-[11px] text-zinc-600 sm:flex">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                Building digital products
              </div>

              <Zap size={14} className="text-zinc-600" />
            </div>

            {/* Services */}
            <div className="grid gap-px bg-white/[0.06] md:grid-cols-2 lg:grid-cols-4">

              <ServiceItem
                number="01"
                title="AI Engineering"
                description="Voice agents, AI workflows & intelligent systems."
              />

              <ServiceItem
                number="02"
                title="SaaS Development"
                description="Scalable platforms built for real businesses."
              />

              <ServiceItem
                number="03"
                title="Automation"
                description="Eliminate repetitive work with smart workflows."
              />

              <ServiceItem
                number="04"
                title="Full Stack"
                description="Fast, responsive and production-ready applications."
              />

            </div>

            {/* Bottom metrics */}
            <div className="grid border-t border-white/[0.06] sm:grid-cols-3">

              <Metric
                value="4+"
                label="Years experience"
              />

              <Metric
                value="20+"
                label="Projects built"
              />

              <Metric
                value="24/7"
                label="Automation mindset"
              />

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* -------------------------------- */
/* Trust Item */
/* -------------------------------- */

function TrustItem({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Check size={13} className="text-emerald-400" />
      {text}
    </span>
  );
}

/* -------------------------------- */
/* Service Item */
/* -------------------------------- */

interface ServiceItemProps {
  number: string;
  title: string;
  description: string;
}

function ServiceItem({
  number,
  title,
  description,
}: ServiceItemProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        bg-zinc-950
        p-6
        transition-all
        duration-300
        hover:bg-white/[0.035]
      "
    >
      {/* Hover glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          size-28
          rounded-full
          bg-blue-500/10
          opacity-0
          blur-3xl
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative">

        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-zinc-600">
            {number}
          </span>

          <ArrowUpRight
            size={16}
            className="
              text-zinc-700
              transition-all
              duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
              group-hover:text-blue-400
            "
          />
        </div>

        <h3 className="mt-10 text-lg font-semibold tracking-tight text-white">
          {title}
        </h3>

        <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-500">
          {description}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* Metric */
/* -------------------------------- */

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-white/[0.06] p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <span className="text-2xl font-semibold tracking-tight text-white">
        {value}
      </span>

      <span className="text-xs text-zinc-500">
        {label}
      </span>
    </div>
  );
}

// import Link from "next/link";
// import { ArrowRight, Sparkles } from "lucide-react";

// import { Button } from "@/components/ui/button";

// export default function ServicesHero() {
//   return (
//     <section className="relative overflow-hidden border-b border-white/10 py-28">
//       {/* Background Glow */}
//       <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

//       <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 text-center">
//         <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
//           <Sparkles size={16} />
//           Professional Development Services
//         </div>

//         <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
//           AI Solutions &
//           <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
//             Full Stack Development
//           </span>
//         </h1>

//         <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
//           I help startups, businesses, and founders build production-ready
//           AI Voice Agents, SaaS platforms, automation systems, and modern
//           web applications that scale.
//         </p>

//         <div className="mt-12 flex flex-wrap justify-center gap-5">
//           <Link href="/contact">
//             <Button size="lg">
//               Start Your Project
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//           </Link>

//           <Link href="/projects">
//             <Button variant="outline" size="lg">
//               View My Work
//             </Button>
//           </Link>
//         </div>

//         <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-4">
//           <StatCard number="10+" label="Projects Built" />
//           <StatCard number="4+" label="Core Services" />
//           <StatCard number="24/7" label="AI Automation" />
//           <StatCard number="100%" label="Responsive Design" />
//         </div>
//       </div>
//     </section>
//   );
// }

// interface StatCardProps {
//   number: string;
//   label: string;
// }

// function StatCard({ number, label }: StatCardProps) {
//   return (
//     <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
//       <h3 className="text-3xl font-bold text-blue-400">
//         {number}
//       </h3>

//       <p className="mt-2 text-sm text-zinc-400">
//         {label}
//       </p>
//     </div>
//   );
// }