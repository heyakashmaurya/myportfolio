"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    // <section className="relative overflow-hidden py-24 lg:min-h-[calc(100vh-80px)] lg:py-0">
    //   {/* Background Glow */}
    //   <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

    //   <Container className="relative grid items-center gap-16 lg:min-h-[calc(100vh-80px)] lg:grid-cols-2">

    //     {/* Left */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 40 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: .8 }}
    //     >
    //       <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
    //         🚀 Full Stack AI Engineer
    //       </span>

    //       {/* <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-7xl">
    //         <Balancer>
    //           Building
    //           <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
    //             {" "}AI  SaaS Products,{" "}
    //           </span>
    //           <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
    //             {" "}Voice Agents & Automation Systems{" "}
    //           </span>
    //           That Scale Businesses
    //         </Balancer>
    //       </h1> */}

    //       <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-7xl">
    //         <Balancer>
    //           Building
    //           <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
    //             {" "}AI SaaS Products{" "}
    //           </span>
    //           and
    //           <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
    //             {" "}Voice Agents{" "}
    //           </span>
    //           for Business Automation
    //         </Balancer>
    //       </h1>

    //       <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
    //         I develop AI Voice Agents, AI SaaS platforms, business automation systems, and scalable full stack applications that help companies automate workflows, reduce manual effort, and increase productivity using modern AI technologies.
    //       </p>

    //       <div className="mt-10 flex flex-wrap gap-4">
    //         <Button size="lg">
    //           <Link href="/projects" className="flex items-center gap-2">
    //             View Projects
    //             <ArrowRight size={18} />
    //           </Link>
    //         </Button>

    //         <Button variant="outline" size="lg">
    //           <Link href="/contact">
    //             Book Discovery Call
    //           </Link>
    //         </Button>
    //       </div>

    //       <div className="mt-10 flex items-center gap-5">
    //         <Link href="https://linkedin.com/in/heyakashmaurya">
    //           <FaGithub className="text-zinc-400 transition hover:text-white" />
    //         </Link>

    //         <Link href="https://github.com/heyakashmaurya">
    //           <FaLinkedin className="text-zinc-400 transition hover:text-white" />
    //         </Link>

    //         <Link href="https://instagram.com/heyakashmaurya">
    //           <FaInstagram className="text-zinc-400 transition hover:text-white" />
    //         </Link>

    //         <Link href="https://www.youtube.com/@heyakashmaurya">
    //           <FaYoutube className="text-zinc-400 transition hover:text-white" />
    //         </Link>
    //       </div>
    //     </motion.div>

    //     {/* Right */}
    //     <motion.div
    //       initial={{ opacity: 0, scale: .9 }}
    //       animate={{ opacity: 1, scale: 1 }}
    //       transition={{ delay: .2, duration: .8 }}
    //       className="relative hidden lg:flex items-center justify-center"
    //     >
    //       <div className="relative h-[520px] w-[520px] rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">

    //         <div className="absolute left-10 top-12 rounded-2xl border border-white/10 bg-zinc-900/70 p-5 backdrop-blur">
    //           <p className="text-sm text-zinc-400">AI Calls</p>
    //           <h3 className="mt-2 text-3xl font-bold">12,483</h3>
    //         </div>

    //         <div className="absolute bottom-20 right-8 rounded-2xl border border-white/10 bg-zinc-900/70 p-5 backdrop-blur">
    //           <p className="text-sm text-zinc-400">Automation</p>
    //           <h3 className="mt-2 text-3xl font-bold">98%</h3>
    //         </div>

    //         <div className="absolute left-1/2 top-1/2 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-7xl font-bold text-white shadow-2xl">
    //           A
    //         </div>
    //       </div>
    //     </motion.div>

    //   </Container>
    // </section>

    <section className="relative overflow-hidden px-6 py-20 lg:py-32">
      {/* Subtle badge/eyebrow for context + keyword reinforcement */}
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 text-sm font-medium text-violet-400">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          AI Automation Studio
        </span>

        <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
          <Balancer>
            Building
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}AI SaaS Products{" "}
            </span>
            and
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}Voice Agents{" "}
            </span>
            for Business Automation
          </Balancer>
        </h1>

        {/* Keyword-rich subheading — great for SEO + clarifies value prop */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 lg:text-xl">
          We design and deploy custom AI voice agents and SaaS automation tools
          that eliminate manual work, cut response times, and scale your
          operations — without adding headcount.
        </p>

        {/* Clear dual CTA for conversion */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 px-8 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-105">
            Book a Free Strategy Call
          </button>
          <button className="rounded-lg border border-gray-700 px-8 py-3.5 font-semibold text-gray-200 transition-colors hover:bg-gray-800">
            See Our Work
          </button>
        </div>

        {/* Trust signal / social proof strip */}
        <p className="mt-8 text-sm text-gray-500">
          Trusted by 50+ businesses to automate support, sales, and operations
        </p>
      </div>
    </section>
  );
}