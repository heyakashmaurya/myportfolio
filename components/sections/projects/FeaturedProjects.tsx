
"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    ExternalLink,
    Sparkles,
} from "lucide-react";

import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

import { projects } from "@/data/projects";

export default function FeaturedProject() {
    const project = projects.find((p) => p.featured);

    if (!project) return null;

    return (
        <section className="relative overflow-hidden py-28">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-20 h-[550px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/[0.06] blur-[150px]" />

                <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-violet-600/[0.04] blur-[120px]" />
            </div>

            <div className="mx-auto max-w-7xl px-5">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                        <Sparkles size={13} />
                        Featured Work
                    </span>

                    <div className="mt-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
                        <div>
                            <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Building products that
                                <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                    solve real problems.
                                </span>
                            </h2>
                        </div>

                        <Link
                            href="/projects"
                            className="group inline-flex shrink-0 items-center text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                        >
                            View all projects
                            <ArrowRight
                                size={16}
                                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </motion.div>

                {/* Main Project */}
                <motion.article
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025]"
                >
                    {/* Project Image */}
                    <div className="relative overflow-hidden border-b border-white/[0.07]">
                        {/* Image glow */}
                        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                        <motion.div
                            whileHover={{ scale: 1.015 }}
                            transition={{ duration: 0.6 }}
                            className="relative aspect-[16/9] w-full"
                        >
                            <Image
                                src={project.image}
                                alt={`${project.title} project preview`}
                                fill
                                priority
                                sizes="(max-width: 1280px) 100vw, 1200px"
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Featured badge */}
                        <div className="absolute left-6 top-6 z-20 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl">
                            Featured Project
                        </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-7 sm:p-10 lg:p-12">
                        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr]">
                            {/* Left */}
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-xs tracking-widest text-blue-400">
                                        01
                                    </span>

                                    <span className="h-px w-8 bg-white/10" />

                                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                                        Featured Case Study
                                    </span>
                                </div>

                                <h3 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                    {project.title}
                                </h3>

                                <p className="mt-4 text-lg font-medium text-blue-400">
                                    {project.subtitle}
                                </p>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                                    {project.longDescription}
                                </p>

                                {/* Technology */}
                                <div className="mt-8">
                                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                                        Built With
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-2 text-xs text-zinc-400 transition-colors hover:border-blue-500/20 hover:text-zinc-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right */}
                            <div className="flex flex-col justify-between">
                                {/* Project highlights */}
                                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
                                    <p className="text-xs font-medium uppercase tracking-[0.2em] !text-zinc-600">
                                        Project Focus
                                    </p>

                                    <div className="mt-6 space-y-5">
                                        <div>
                                            <p className="text-sm font-medium text-zinc-200">
                                                Full-Stack Architecture
                                            </p>

                                            <p className="mt-1 text-sm leading-6 text-zinc-500">
                                                Modern frontend, backend,
                                                database, APIs and application
                                                infrastructure.
                                            </p>
                                        </div>

                                        <div className="h-px bg-white/[0.06]" />

                                        <div>
                                            <p className="text-sm font-medium text-zinc-200">
                                                AI Integration
                                            </p>

                                            <p className="mt-1 text-sm leading-6 text-zinc-500">
                                                Intelligent workflows and
                                                AI-powered functionality built
                                                around the product&apos;s use
                                                case.
                                            </p>
                                        </div>

                                        <div className="h-px bg-white/[0.06]" />

                                        <div>
                                            <p className="text-sm font-medium text-zinc-200">
                                                Production Mindset
                                            </p>

                                            <p className="mt-1 text-sm leading-6 text-zinc-500">
                                                Designed with maintainability,
                                                performance and future
                                                scalability in mind.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="mt-8 flex flex-wrap gap-3">
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="group inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-medium !text-zinc-950 transition-colors hover:bg-zinc-200"
                                    >
                                        View Case Study
                                        <ArrowRight
                                            size={16}
                                            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </Link>

                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex h-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 text-sm font-medium text-zinc-300 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                                        >
                                            Live Demo
                                            <ExternalLink
                                                size={15}
                                                className="ml-2"
                                            />
                                        </a>
                                    )}

                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="View project on GitHub"
                                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-zinc-400 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                                        >
                                            <FaGithub size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.article>

                {/* Bottom message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-8 text-center"
                >
                    <p className="text-sm text-zinc-600">
                        More projects, experiments, and AI systems →
                    </p>
                </motion.div>
            </div>
        </section>
    );
}





// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, ExternalLink } from "lucide-react";
// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa6";

// import { projects } from "@/data/projects";
// import { Button } from "@/components/ui/button";

// export default function FeaturedProject() {
//     const project = projects.find((p) => p.featured);

//     if (!project) return null;

//     return (
//         <section className="relative overflow-hidden py-28">
//             {/* Background */}

//             <div className="absolute inset-0 -z-10">
//                 <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />
//             </div>

//             <div className="mx-auto max-w-7xl px-5">

//                 <motion.div
//                     initial={{ opacity: 0, y: 60 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: .6 }}
//                     className="grid items-center gap-16 lg:grid-cols-2"
//                 >

//                     {/* Left */}

//                     <div>

//                         <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
//                             Featured Project
//                         </span>

//                         <h2 className="mt-6 text-5xl font-bold leading-tight lg:text-6xl">
//                             {project.title}
//                         </h2>

//                         <p className="mt-5 text-xl text-blue-400">
//                             {project.subtitle}
//                         </p>

//                         <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
//                             {project.longDescription}
//                         </p>

//                         {/* Tech */}

//                         <div className="mt-10 flex flex-wrap gap-3">

//                             {project.technologies.map((tech) => (

//                                 <span
//                                     key={tech}
//                                     className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-md"
//                                 >
//                                     {tech}
//                                 </span>

//                             ))}

//                         </div>

//                         {/* Buttons */}

//                         <div className="mt-12 flex flex-wrap gap-4">

//                             {/* <Button asChild>

//                                 <Link href={`/projects/${project.slug}`}>

//                                     View Case Study

//                                     <ArrowRight className="ml-2 h-4 w-4" />

//                                 </Link>

//                             </Button> */}

//                             <Link href={`/projects/${project.slug}`}>
//                                 <Button>
//                                     View Case Study
//                                     <ArrowRight className="ml-2 h-4 w-4" />
//                                 </Button>
//                             </Link>

//                             {project.liveUrl && (

//                                 // <Button variant="outline" asChild>

//                                 //     <Link
//                                 //         href={project.liveUrl}
//                                 //         target="_blank"
//                                 //     >
//                                 //         Live Demo

//                                 //         <ExternalLink className="ml-2 h-4 w-4" />

//                                 //     </Link>

//                                 // </Button>

//                                 <Link href={project.liveUrl}>
//                                     <Button>
//                                         Live Demo
//                                         <ArrowRight className="ml-2 h-4 w-4" />
//                                     </Button>
//                                 </Link>

//                             )}

//                             {project.githubUrl && (

//                                 // <Button variant="outline" asChild>

//                                 //     <Link
//                                 //         href={project.githubUrl}
//                                 //         target="_blank"
//                                 //     >
//                                 //         GitHub

//                                 //         <FaGithub className="ml-2 h-4 w-4" />

//                                 //     </Link>

//                                 // </Button>

//                                 <Link href={project.githubUrl}>
//                                     <Button>
//                                         GitHub
//                                         <ArrowRight className="ml-2 h-4 w-4" />
//                                     </Button>
//                                 </Link>

//                             )}

//                         </div>

//                     </div>

//                     {/* Right */}

//                     <motion.div
//                         whileHover={{ scale: 1.02 }}
//                         transition={{ duration: .4 }}
//                         className="relative"
//                     >

//                         <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-transparent blur-3xl" />

//                         <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl">

//                             <Image
//                                 src={project.image}
//                                 alt={project.title}
//                                 width={1200}
//                                 height={800}
//                                 priority
//                                 className="h-auto w-full object-cover transition duration-700 hover:scale-105"
//                             />

//                         </div>

//                     </motion.div>

//                 </motion.div>

//             </div>
//         </section>
//     );
// }