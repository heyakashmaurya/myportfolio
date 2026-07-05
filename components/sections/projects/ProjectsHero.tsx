
"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Calendar, User, Clock } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

import { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";

interface Props {
  project: Project;
}

export default function ProjectHero({ project }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-24 lg:py-32">

      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[180px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            {project.category}
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 text-xl text-zinc-400">
            {project.subtitle}
          </p>

          <p className="mt-8 leading-8 text-zinc-400">
            {project.longDescription}
          </p>

          {/* Info */}

          <div className="mt-10 grid grid-cols-2 gap-6">

            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-xs text-zinc-500">Role</p>
                <p>{project.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-xs text-zinc-500">Duration</p>
                <p>{project.duration}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-xs text-zinc-500">Year</p>
                <p>{project.year}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div
                className={`h-3 w-3 rounded-full ${project.status === "Completed"
                    ? "bg-emerald-500"
                    : "bg-yellow-500"
                  }`}
              />

              <div>
                <p className="text-xs text-zinc-500">Status</p>
                <p>{project.status}</p>
              </div>
            </div>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-4">

            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank">
                <Button>
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}

            {project.githubUrl && (
              <Link href={project.githubUrl} target="_blank">
                <Button variant="outline">
                  GitHub
                  <FaGithub className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: .2 }}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={900}
            priority
            className="w-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}


// "use client";

// import { motion } from "framer-motion";

// export default function ProjectsHero() {
//   return (
//     <section className="relative overflow-hidden border-b border-white/5 py-28 lg:py-36">

//       {/* Background */}

//       <div className="absolute inset-0 -z-10">
//         <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

//         <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

//         <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
//       </div>

//       <div className="mx-auto flex max-w-7xl flex-col items-center px-5 text-center">

//         <motion.span
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: .5 }}
//           className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400"
//         >
//           Portfolio Showcase
//         </motion.span>

//         <motion.h1
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: .1 }}
//           className="mt-8 max-w-5xl text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
//         >
//           Building
//           <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
//             {" "}AI Products{" "}
//           </span>
//           & Modern SaaS Experiences
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: .2 }}
//           className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400"
//         >
//           Explore a collection of AI Voice Agents, SaaS platforms,
//           automation systems, and full-stack applications engineered
//           with performance, scalability, and exceptional user
//           experience in mind.
//         </motion.p>

//         {/* Stats */}

//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: .3 }}
//           className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-5 md:grid-cols-4"
//         >

//           {[
//             ["4+", "Projects"],
//             ["10+", "Technologies"],
//             ["4+", "Years Experience"],
//             ["100%", "Responsive"],
//           ].map(([number, text]) => (

//             <div
//               key={text}
//               className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
//             >
//               <h3 className="text-3xl font-bold text-blue-400">
//                 {number}
//               </h3>

//               <p className="mt-2 text-sm text-zinc-400">
//                 {text}
//               </p>
//             </div>

//           ))}

//         </motion.div>

//       </div>
//     </section>
//   );
// }
