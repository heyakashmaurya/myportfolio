
"use client";

import Image from "next/image";
import {
    ArrowUpRight,
    Calendar,
    Briefcase,
    Users,
    CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

interface Props {
    project: Project;
}

export default function ProjectHero({ project }: Props) {
    return (
        <section className="relative overflow-hidden py-24 sm:py-28">
            {/* Ambient background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[15%] top-[15%] h-[420px] w-[420px] rounded-full bg-blue-500/[0.055] blur-[130px]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[10%] bottom-[5%] h-[360px] w-[360px] rounded-full bg-cyan-400/[0.035] blur-[120px]"
            />

            <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-20 lg:px-8">
                {/* LEFT CONTENT */}
                <div>
                    {/* Category */}
                    <span className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                        {project.category}
                    </span>

                    {/* Title */}
                    <h1 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                        {project.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-300">
                        {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400">
                        {project.longDescription}
                    </p>

                    {/* Actions */}
                    <div className="mt-9 flex flex-wrap gap-3">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    size="lg"
                                    className="group h-11 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 text-white shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-cyan-400"
                                >
                                    Live Demo

                                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </Button>
                            </a>
                        )}

                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="h-11 rounded-xl border-white/10 bg-white/[0.025] px-6 text-zinc-200 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                                >
                                    Source Code

                                    <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                        )}
                    </div>

                    {/* Project metadata */}
                    <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4">
                        <InfoCard
                            icon={<Briefcase />}
                            label="Role"
                            value={project.role}
                        />

                        <InfoCard
                            icon={<Calendar />}
                            label="Duration"
                            value={project.duration}
                        />

                        <InfoCard
                            icon={<Users />}
                            label="Team"
                            value={project.team}
                        />

                        <InfoCard
                            icon={<CheckCircle2 className="text-emerald-400" />}
                            label="Status"
                            value={project.status}
                        />
                    </div>
                </div>

                {/* RIGHT PROJECT IMAGE */}
                <div className="relative">
                    {/* Glow behind image */}
                    <div
                        aria-hidden="true"
                        className="absolute -inset-6 rounded-[36px] bg-blue-500/[0.06] blur-3xl"
                    />

                    <div className="group relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-white/[0.025] p-2 shadow-2xl shadow-black/30">
                        {/* Top highlight */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
                        />

                        <div className="relative aspect-[16/10] overflow-hidden rounded-[21px]">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 55vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                            />

                            {/* Image overlay */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/[0.04]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

interface InfoCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

function InfoCard({
    icon,
    label,
    value,
}: InfoCardProps) {
    return (
        <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/20 hover:bg-white/[0.04] sm:p-5">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.035] text-blue-400 transition-colors duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-500/10">
                {icon}
            </div>

            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                {label}
            </p>

            <p className="mt-1.5 truncate text-sm font-semibold text-zinc-200 sm:text-base">
                {value}
            </p>
        </div>
    );
}

// import Image from "next/image";
// import Link from "next/link";
// import {
//     ArrowUpRight,
//     Calendar,
//     Briefcase,
//     Users,
//     CheckCircle2,
// } from "lucide-react";
// import { FaGithub } from "react-icons/fa6";
// import { Button } from "@/components/ui/button";
// import type { Project } from "@/data/projects";

// interface Props {
//     project: Project;
// }

// export default function ProjectHero({ project }: Props) {
//     return (
//         <section className="relative overflow-hidden border-b border-white/10 py-24">
//             <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2">
//                 {/* Left */}

//                 <div>
//                     <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
//                         {project.category}
//                     </span>

//                     <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
//                         {project.title}
//                     </h1>

//                     <p className="mt-5 text-xl text-zinc-400">
//                         {project.subtitle}
//                     </p>

//                     <p className="mt-8 max-w-xl leading-8 text-zinc-400">
//                         {project.longDescription}
//                     </p>

//                     <div className="mt-10 flex flex-wrap gap-4">
//                         {project.liveUrl && (
//                             //   <Button asChild size="lg">
//                             //     <Link
//                             //       href={project.liveUrl}
//                             //       target="_blank"
//                             //       rel="noopener noreferrer"
//                             //     >
//                             //       Live Demo

//                             //       <ArrowUpRight className="ml-2 h-4 w-4" />
//                             //     </Link>
//                             //   </Button>

//                             <a
//                                 href={project.liveUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <Button>
//                                     Live Demo
//                                     <ArrowUpRight className="ml-2 h-4 w-4" />
//                                 </Button>
//                             </a>
//                         )}

//                         {project.githubUrl && (
//                             // <Button variant="outline" size="lg" asChild>
//                             //     <Link
//                             //         href={project.githubUrl}
//                             //         target="_blank"
//                             //         rel="noopener noreferrer"
//                             //     >
//                             //         <Github className="mr-2 h-4 w-4" />

//                             //         Source Code
//                             //     </Link>
//                             // </Button>

//                             <a
//                                 href={project.githubUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <Button>
//                                     Source Code
//                                     <ArrowUpRight className="ml-2 h-4 w-4" />
//                                 </Button>
//                             </a>
//                         )}
//                     </div>

//                     <div className="mt-14 grid gap-6 sm:grid-cols-2">
//                         <InfoCard
//                             icon={<Briefcase className="h-5 w-5" />}
//                             label="Role"
//                             value={project.role}
//                         />

//                         <InfoCard
//                             icon={<Calendar className="h-5 w-5" />}
//                             label="Duration"
//                             value={project.duration}
//                         />

//                         <InfoCard
//                             icon={<Users className="h-5 w-5" />}
//                             label="Team"
//                             value={project.team}
//                         />

//                         <InfoCard
//                             icon={<CheckCircle2 className="h-5 w-5 text-emerald-400" />}
//                             label="Status"
//                             value={project.status}
//                         />
//                     </div>
//                 </div>

//                 {/* Right */}

//                 <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
//                     <div className="relative aspect-[16/10]">
//                         <Image
//                             src={project.image}
//                             alt={project.title}
//                             fill
//                             priority
//                             className="object-cover"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// interface InfoCardProps {
//     icon: React.ReactNode;
//     label: string;
//     value: string;
// }

// function InfoCard({
//     icon,
//     label,
//     value,
// }: InfoCardProps) {
//     return (
//         <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
//             <div className="mb-4 text-blue-400">
//                 {icon}
//             </div>

//             <p className="text-sm text-zinc-500">
//                 {label}
//             </p>

//             <p className="mt-1 font-semibold">
//                 {value}
//             </p>
//         </div>
//     );
// }