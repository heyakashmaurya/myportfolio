"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

export default function FeaturedProject() {
    const project = projects.find((p) => p.featured);

    if (!project) return null;

    return (
        <section className="relative overflow-hidden py-28">
            {/* Background */}

            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />
            </div>

            <div className="mx-auto max-w-7xl px-5">

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="grid items-center gap-16 lg:grid-cols-2"
                >

                    {/* Left */}

                    <div>

                        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                            Featured Project
                        </span>

                        <h2 className="mt-6 text-5xl font-bold leading-tight lg:text-6xl">
                            {project.title}
                        </h2>

                        <p className="mt-5 text-xl text-blue-400">
                            {project.subtitle}
                        </p>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                            {project.longDescription}
                        </p>

                        {/* Tech */}

                        <div className="mt-10 flex flex-wrap gap-3">

                            {project.technologies.map((tech) => (

                                <span
                                    key={tech}
                                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-md"
                                >
                                    {tech}
                                </span>

                            ))}

                        </div>

                        {/* Buttons */}

                        <div className="mt-12 flex flex-wrap gap-4">

                            {/* <Button asChild>

                                <Link href={`/projects/${project.slug}`}>

                                    View Case Study

                                    <ArrowRight className="ml-2 h-4 w-4" />

                                </Link>

                            </Button> */}

                            <Link href={`/projects/${project.slug}`}>
                                <Button>
                                    View Case Study
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>

                            {project.liveUrl && (

                                // <Button variant="outline" asChild>

                                //     <Link
                                //         href={project.liveUrl}
                                //         target="_blank"
                                //     >
                                //         Live Demo

                                //         <ExternalLink className="ml-2 h-4 w-4" />

                                //     </Link>

                                // </Button>

                                <Link href={project.liveUrl}>
                                    <Button>
                                        Live Demo
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>

                            )}

                            {project.githubUrl && (

                                // <Button variant="outline" asChild>

                                //     <Link
                                //         href={project.githubUrl}
                                //         target="_blank"
                                //     >
                                //         GitHub

                                //         <FaGithub className="ml-2 h-4 w-4" />

                                //     </Link>

                                // </Button>

                                <Link href={project.githubUrl}>
                                    <Button>
                                        GitHub
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>

                            )}

                        </div>

                    </div>

                    {/* Right */}

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: .4 }}
                        className="relative"
                    >

                        <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-transparent blur-3xl" />

                        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl">

                            <Image
                                src={project.image}
                                alt={project.title}
                                width={1200}
                                height={800}
                                priority
                                className="h-auto w-full object-cover transition duration-700 hover:scale-105"
                            />

                        </div>

                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
}