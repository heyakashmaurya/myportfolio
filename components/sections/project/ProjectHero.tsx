import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    Calendar,
    Briefcase,
    Users,
    CheckCircle2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

interface Props {
    project: Project;
}

export default function ProjectHero({ project }: Props) {
    return (
        <section className="relative overflow-hidden border-b border-white/10 py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2">
                {/* Left */}

                <div>
                    <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                        {project.category}
                    </span>

                    <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
                        {project.title}
                    </h1>

                    <p className="mt-5 text-xl text-zinc-400">
                        {project.subtitle}
                    </p>

                    <p className="mt-8 max-w-xl leading-8 text-zinc-400">
                        {project.longDescription}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        {project.liveUrl && (
                            //   <Button asChild size="lg">
                            //     <Link
                            //       href={project.liveUrl}
                            //       target="_blank"
                            //       rel="noopener noreferrer"
                            //     >
                            //       Live Demo

                            //       <ArrowUpRight className="ml-2 h-4 w-4" />
                            //     </Link>
                            //   </Button>

                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button>
                                    Live Demo
                                    <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                        )}

                        {project.githubUrl && (
                            // <Button variant="outline" size="lg" asChild>
                            //     <Link
                            //         href={project.githubUrl}
                            //         target="_blank"
                            //         rel="noopener noreferrer"
                            //     >
                            //         <Github className="mr-2 h-4 w-4" />

                            //         Source Code
                            //     </Link>
                            // </Button>

                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button>
                                    Source Code
                                    <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                        )}
                    </div>

                    <div className="mt-14 grid gap-6 sm:grid-cols-2">
                        <InfoCard
                            icon={<Briefcase className="h-5 w-5" />}
                            label="Role"
                            value={project.role}
                        />

                        <InfoCard
                            icon={<Calendar className="h-5 w-5" />}
                            label="Duration"
                            value={project.duration}
                        />

                        <InfoCard
                            icon={<Users className="h-5 w-5" />}
                            label="Team"
                            value={project.team}
                        />

                        <InfoCard
                            icon={<CheckCircle2 className="h-5 w-5 text-emerald-400" />}
                            label="Status"
                            value={project.status}
                        />
                    </div>
                </div>

                {/* Right */}

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
                    <div className="relative aspect-[16/10]">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            priority
                            className="object-cover"
                        />
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
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-4 text-blue-400">
                {icon}
            </div>

            <p className="text-sm text-zinc-500">
                {label}
            </p>

            <p className="mt-1 font-semibold">
                {value}
            </p>
        </div>
    );
}