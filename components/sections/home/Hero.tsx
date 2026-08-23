
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

const capabilities = [
  "AI Voice Agents",
  "AI SaaS Products",
  "Business Automation",
  "Full-Stack Systems",
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/heyakashmaurya",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/heyakashmaurya",
    icon: FaGithub,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/heyakashmaurya",
    icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@heyakashmaurya",
    icon: FaYoutube,
  },
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-80px)] overflow-hidden bg-zinc-950">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[8%] top-[15%] h-[420px] w-[420px] rounded-full bg-blue-500/[0.07] blur-[140px]" />

        <div className="absolute bottom-[-120px] right-[8%] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.04] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 80%)",
          }}
        />
      </div>

      <Container className="relative flex min-h-[calc(100svh-80px)] items-center py-16 sm:py-20 lg:py-24">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          {/* =========================================================
              LEFT CONTENT
          ========================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Availability */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.035] px-3.5 py-2 text-xs font-medium text-zinc-300 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              Available for select projects
            </div>

            {/* Main heading */}
            <h1 className="mt-7 max-w-4xl text-[clamp(2.9rem,6vw,5.8rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white">
              <Balancer>
                I build{" "}
                <span className="relative whitespace-nowrap">
                  intelligent
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-blue-500/80 to-transparent"
                  />
                </span>{" "}
                software systems for modern businesses.
              </Balancer>
            </h1>

            {/* Supporting copy */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              I design and develop AI voice agents, SaaS products, automation
              systems, and scalable full-stack applications that turn
              repetitive business processes into intelligent workflows.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {/* <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-medium text-zinc-950 shadow-none transition-all duration-200 hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
              >
                Start a Project
                <ArrowUpRight
                  size={17}
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link> */}

              <Link
                href="/contact"
                className="
    group relative inline-flex h-12 items-center justify-center
    gap-2 overflow-hidden rounded-xl
    border border-blue-400/30
    bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400
    px-6
    text-sm font-semibold text-white
    shadow-[0_8px_30px_rgba(37,99,235,0.25)]
    transition-all duration-300 ease-out

    hover:-translate-y-0.5
    hover:border-blue-300/50
    hover:from-blue-500
    hover:via-blue-500
    hover:to-cyan-300
    hover:text-white
    hover:shadow-[0_12px_40px_rgba(37,99,235,0.35)]

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-blue-400/50
    focus-visible:ring-offset-2
    focus-visible:ring-offset-zinc-950
  "
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  Start a Project

                  <ArrowUpRight
                    size={17}
                    className="
        transition-transform
        duration-300
        group-hover:translate-x-0.5
        group-hover:-translate-y-0.5
      "
                  />
                </span>

                {/* Shine */}
                <span
                  aria-hidden="true"
                  className="
      pointer-events-none
      absolute inset-0
      -translate-x-full
      skew-x-[-18deg]
      bg-gradient-to-r
      from-transparent
      via-white/25
      to-transparent
      transition-transform
      duration-700
      ease-out
      group-hover:translate-x-full
    "
                />
              </Link>

              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.025] px-6 text-sm font-medium text-zinc-200 shadow-none transition-all duration-200 hover:border-white/[0.2] hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
              >
                Explore My Work
              </Link>
            </div>
            {/* <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group h-12 rounded-xl bg-white px-6 font-medium text-zinc-950 shadow-none transition-all duration-200 hover:bg-zinc-200"
              >
                <Link href="/contact">
                  Start a Project
                  <ArrowUpRight
                    size={17}
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-xl border-white/[0.12] bg-white/[0.025] px-6 font-medium text-zinc-200 shadow-none transition-all duration-200 hover:border-white/[0.2] hover:bg-white/[0.06]"
              >
                <Link href="/projects">Explore My Work</Link>
              </Button>
            </div> */}

            {/* Social links */}
            <div className="mt-10 flex flex-wrap items-center gap-1">
              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <div key={social.label} className="flex items-center">
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group inline-flex h-9 items-center gap-2 rounded-lg px-2.5 text-zinc-500 transition-colors hover:bg-white/[0.04] hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                    >
                      <Icon
                        size={17}
                        strokeWidth={1.8}
                        className="transition-transform duration-200 group-hover:scale-105"
                      />
                      <span className="hidden text-xs font-medium sm:inline">
                        {social.label}
                      </span>
                    </Link>

                    {index !== socials.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="mx-1 text-zinc-800"
                      >
                        /
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Capability strip */}
            <div className="mt-12 border-t border-white/[0.07] pt-5">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                What I build
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {capabilities.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* =========================================================
              RIGHT VISUAL
          ========================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              delay: 0.12,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto hidden w-full max-w-[540px] lg:block"
          >
            {/* Main system visualization */}
            <div className="relative aspect-square">
              {/* Outer glow */}
              <div
                aria-hidden="true"
                className="absolute inset-[12%] rounded-full bg-blue-500/[0.07] blur-[80px]"
              />

              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[8%] rounded-full border border-white/[0.07]"
              >
                <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.9)]" />
              </motion.div>

              {/* Secondary ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[19%] rounded-full border border-dashed border-white/[0.06]"
              />

              {/* Main panel */}
              <div className="absolute left-1/2 top-1/2 w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/[0.1] bg-zinc-900/80 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
                {/* Panel header */}
                <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 ring-1 ring-blue-400/20">
                      <span className="text-sm font-semibold text-blue-400">
                        AI
                      </span>
                    </div>

                    <div>
                      <p className="text-xs font-medium text-zinc-200">
                        Intelligent System
                      </p>
                      <p className="mt-0.5 text-[10px] text-zinc-600">
                        Connected & running
                      </p>
                    </div>
                  </div>

                  <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Online
                  </span>
                </div>

                {/* System flow */}
                <div className="mt-5 space-y-2">
                  <SystemRow
                    number="01"
                    title="AI Voice Agent"
                    description="Understands & responds"
                    active
                  />

                  <div className="ml-5 h-3 w-px bg-white/[0.08]" />

                  <SystemRow
                    number="02"
                    title="Business Automation"
                    description="Executes workflows"
                  />

                  <div className="ml-5 h-3 w-px bg-white/[0.08]" />

                  <SystemRow
                    number="03"
                    title="Scalable Software"
                    description="Connects everything"
                  />
                </div>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.025] px-3.5 py-3">
                  <span className="text-[10px] text-zinc-500">
                    Built for real businesses
                  </span>

                  <ArrowUpRight size={13} className="text-zinc-600" />
                </div>
              </div>

              {/* Floating capability card */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-1 top-[18%] rounded-2xl border border-white/[0.09] bg-zinc-900/85 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-blue-500/10 ring-1 ring-blue-500/15" />

                  <div>
                    <p className="text-[11px] font-medium text-zinc-200">
                      Voice AI
                    </p>
                    <p className="mt-0.5 text-[10px] text-zinc-600">
                      24/7 automation
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating SaaS card */}
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-1 left-[4%] rounded-2xl border border-white/[0.09] bg-zinc-900/85 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.04]">
                    <span className="text-[10px] font-semibold text-zinc-300">
                      SaaS
                    </span>
                  </div>

                  <div>
                    <p className="text-[11px] font-medium text-zinc-200">
                      Custom Platforms
                    </p>
                    <p className="mt-0.5 text-[10px] text-zinc-600">
                      Built to scale
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function SystemRow({
  number,
  title,
  description,
  active = false,
}: {
  number: string;
  title: string;
  description: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border px-3 py-3 transition-colors ${active
        ? "border-blue-500/20 bg-blue-500/[0.06]"
        : "border-white/[0.05] bg-white/[0.015]"
        }`}
    >
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[10px] font-semibold ${active
          ? "bg-blue-500/10 text-blue-400"
          : "bg-white/[0.04] text-zinc-600"
          }`}
      >
        {number}
      </div>

      <div className="min-w-0">
        <p className="truncate text-xs font-medium text-zinc-200">
          {title}
        </p>

        <p className="mt-0.5 truncate text-[10px] text-zinc-600">
          {description}
        </p>
      </div>
    </div>
  );
}





// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import Balancer from "react-wrap-balancer";
// import { ArrowRight } from "lucide-react";
// import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
// import Container from "@/components/layout/Container";
// import { Button } from "@/components/ui/button";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden py-24 lg:min-h-[calc(100vh-80px)] lg:py-0">
//       {/* Background Glow */}
//       <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

//       <Container className="relative grid items-center gap-16 lg:min-h-[calc(100vh-80px)] lg:grid-cols-2">

//         {/* Left */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: .8 }}
//         >
//           <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
//             🚀 Full Stack AI Engineer
//           </span>

//           {/* <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-7xl">
//             <Balancer>
//               Building
//               <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
//                 {" "}AI  SaaS Products,{" "}
//               </span>
//               <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
//                 {" "}Voice Agents & Automation Systems{" "}
//               </span>
//               That Scale Businesses
//             </Balancer>
//           </h1> */}

//           <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-7xl">
//             <Balancer>
//               Building
//               <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
//                 {" "}AI SaaS Products{" "}
//               </span>
//               and
//               <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
//                 {" "}Voice Agents{" "}
//               </span>
//               for Business Automation
//             </Balancer>
//             {/* <Balancer>
//               Building
//               <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
//                 {" "}AI SaaS Products{" "}
//               </span>
//               and
//               <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
//                 {" "}Voice Agents{" "}
//               </span>
//               for Business Automation
//             </Balancer> */}
//           </h1>

//           <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
//             I develop AI Voice Agents, AI SaaS platforms, business automation systems, and scalable full stack applications that help companies automate workflows, reduce manual effort, and increase productivity using modern AI technologies.
//           </p>

//           <div className="mt-10 flex flex-wrap gap-4">
//             <Button size="lg">
//               <Link href="/projects" className="flex items-center gap-2">
//                 View Projects
//                 <ArrowRight size={18} />
//               </Link>
//             </Button>

//             <Button variant="outline" size="lg">
//               <Link href="/contact">
//                 Book Discovery Call
//               </Link>
//             </Button>
//           </div>

//           <div className="mt-10 flex items-center gap-5">
//             <Link  aria-label="LinkedIn Profile" href="https://linkedin.com/in/heyakashmaurya">
//               <FaLinkedin className="text-zinc-400 transition hover:text-white size-[20px] md:size-[25px]  " />
//             </Link>

//             <Link  aria-label="GitHub Profile" href="https://github.com/heyakashmaurya">
//               <FaGithub className="text-zinc-400 transition hover:text-white size-[20px] md:size-[25px]" />
//             </Link>

//             <Link  aria-label="Instagram Profile" href="https://instagram.com/heyakashmaurya">
//               <FaInstagram className="text-zinc-400 transition hover:text-white size-[20px] md:size-[25px]" />
//             </Link>

//             <Link  aria-label="YouTube Channel" href="https://www.youtube.com/@heyakashmaurya">
//               <FaYoutube className="text-zinc-400 transition hover:text-white size-[20px] md:size-[25px]" />
//             </Link>
//           </div>
//         </motion.div>

//         {/* Right */}
//         <motion.div
//           initial={{ opacity: 0, scale: .9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: .2, duration: .8 }}
//           className="relative hidden lg:flex items-center justify-center"
//         >
//           <div className="relative h-[520px] w-[520px] rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">

//             <div className="absolute left-10 top-12 rounded-2xl border border-white/10 bg-zinc-900/70 p-5 backdrop-blur">
//               <p className="text-sm text-zinc-400">AI Calls</p>
//               <h3 className="mt-2 text-3xl font-bold">12,483</h3>
//             </div>

//             <div className="absolute bottom-20 right-8 rounded-2xl border border-white/10 bg-zinc-900/70 p-5 backdrop-blur">
//               <p className="text-sm text-zinc-400">Automation</p>
//               <h3 className="mt-2 text-3xl font-bold">98%</h3>
//             </div>

//             <div className="absolute left-1/2 top-1/2 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-7xl font-bold text-white shadow-2xl">
//               A
//             </div>
//           </div>
//         </motion.div>

//       </Container>
//     </section>

//   );
// }