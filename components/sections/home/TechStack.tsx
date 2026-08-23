
"use client";
"use client";

import { motion } from "framer-motion";

import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiNodedotjs,
    SiMongodb,
    SiPostgresql,
    SiDocker,
    SiExpress,
    SiJavascript,
    SiTailwindcss,
    SiGit,
    SiGithub,
    SiVercel,
    SiGooglecloud,
    SiRedis,
    SiPrisma,
    SiSupabase,
    SiFirebase,
    SiPython,
    SiFastapi,
    SiGoogle,
    SiCloudflare,
    SiLinux,
    SiPostman,
} from "react-icons/si";

import {
    Sparkles,
    Bot,
    Workflow,
    Database,
    Mic,
    BrainCircuit,
    Cloud,
    PhoneCall,
} from "lucide-react";

const technologies = [
    // ─────────────────────────────────────────
    // FRONTEND
    // ─────────────────────────────────────────
    {
        name: "Next.js",
        category: "Frontend",
        icon: SiNextdotjs,
    },
    {
        name: "React",
        category: "Frontend",
        icon: SiReact,
    },
    {
        name: "TypeScript",
        category: "Frontend",
        icon: SiTypescript,
    },
    {
        name: "JavaScript",
        category: "Frontend",
        icon: SiJavascript,
    },
    {
        name: "Tailwind CSS",
        category: "Frontend",
        icon: SiTailwindcss,
    },

    // ─────────────────────────────────────────
    // BACKEND
    // ─────────────────────────────────────────
    {
        name: "Node.js",
        category: "Backend",
        icon: SiNodedotjs,
    },
    {
        name: "Express.js",
        category: "Backend",
        icon: SiExpress,
    },
    {
        name: "Python",
        category: "Backend",
        icon: SiPython,
    },
    {
        name: "FastAPI",
        category: "Backend",
        icon: SiFastapi,
    },

    // ─────────────────────────────────────────
    // AI / LLM
    // ─────────────────────────────────────────
    {
        name: "OpenAI",
        category: "AI",
        icon: BrainCircuit,
    },
    {
        name: "Gemini",
        category: "AI",
        icon: SiGoogle,
    },
    {
        name: "AI Agents",
        category: "AI",
        icon: Bot,
    },
    {
        name: "LLM Workflows",
        category: "AI",
        icon: BrainCircuit,
    },
    {
        name: "Generative AI",
        category: "AI",
        icon: Sparkles,
    },

    // ─────────────────────────────────────────
    // VOICE AI / AUTOMATION
    // ─────────────────────────────────────────
    {
        name: "Twilio",
        category: "Voice & Automation",
        icon: PhoneCall,
    },
    {
        name: "Voice AI",
        category: "Voice & Automation",
        icon: Mic,
    },
    {
        name: "Workflow Automation",
        category: "Voice & Automation",
        icon: Workflow,
    },
    {
        name: "n8n",
        category: "Voice & Automation",
        icon: Workflow,
    },

    // ─────────────────────────────────────────
    // DATABASES
    // ─────────────────────────────────────────
    {
        name: "MongoDB",
        category: "Database",
        icon: SiMongodb,
    },
    {
        name: "PostgreSQL",
        category: "Database",
        icon: SiPostgresql,
    },
    {
        name: "Redis",
        category: "Database",
        icon: SiRedis,
    },
    {
        name: "Prisma",
        category: "Database",
        icon: SiPrisma,
    },
    {
        name: "Supabase",
        category: "Database",
        icon: SiSupabase,
    },

    // ─────────────────────────────────────────
    // CLOUD / DEPLOYMENT
    // ─────────────────────────────────────────
    {
        name: "Vercel",
        category: "Cloud & DevOps",
        icon: SiVercel,
    },
    {
        name: "AWS",
        category: "Cloud & DevOps",
        icon: Cloud,
    },
    {
        name: "Google Cloud",
        category: "Cloud & DevOps",
        icon: SiGooglecloud,
    },
    {
        name: "Cloudflare",
        category: "Cloud & DevOps",
        icon: SiCloudflare,
    },
    {
        name: "Docker",
        category: "Cloud & DevOps",
        icon: SiDocker,
    },
    {
        name: "Linux",
        category: "Cloud & DevOps",
        icon: SiLinux,
    },

    // ─────────────────────────────────────────
    // TOOLS
    // ─────────────────────────────────────────
    {
        name: "Git",
        category: "Developer Tools",
        icon: SiGit,
    },
    {
        name: "GitHub",
        category: "Developer Tools",
        icon: SiGithub,
    },
    {
        name: "Postman",
        category: "Developer Tools",
        icon: SiPostman,
    },

    // ─────────────────────────────────────────
    // APIs / SYSTEMS
    // ─────────────────────────────────────────
    {
        name: "REST APIs",
        category: "Systems",
        icon: Database,
    },
];



// "use client";

// import { motion } from "framer-motion";

// import {
//     SiNextdotjs,
//     SiReact,
//     SiTypescript,
//     SiNodedotjs,
//     SiMongodb,
//     SiDocker,
//     SiPostgresql,
// } from "react-icons/si";

// import { Sparkles } from "lucide-react";

// const technologies = [
//     { name: "Next.js", icon: SiNextdotjs },
//     { name: "React", icon: SiReact },
//     { name: "TypeScript", icon: SiTypescript },
//     { name: "Node.js", icon: SiNodedotjs },
//     { name: "MongoDB", icon: SiMongodb },
//     { name: "PostgreSQL", icon: SiPostgresql },
//     //   { name: "OpenAI", icon: SiOpenai },
//     { name: "AI", icon: Sparkles }, // Instead of SiOpenai
//     { name: "Docker", icon: SiDocker },
// ];

// export default function TechStack() {
//     return (
//         <section className="py-20">
//             <div className="mx-auto max-w-7xl px-5">

//                 <motion.p
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     className="text-center text-sm uppercase tracking-[0.3em] text-zinc-500"
//                 >
//                     Technologies I Build With
//                 </motion.p>

//                 <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
//                     {technologies.map(({ name, icon: Icon }, index) => (
//                         <motion.div
//                             key={name}
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{
//                                 delay: index * 0.08,
//                             }}
//                             className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.05]"
//                         >
//                             <Icon className="mx-auto text-4xl text-zinc-300 transition group-hover:scale-110 group-hover:text-blue-400" />

//                             <p className="mt-5 text-center text-sm font-medium text-zinc-400 group-hover:text-white">
//                                 {name}
//                             </p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }