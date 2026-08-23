

import {
  Monitor,
  Server,
  BrainCircuit,
  Mic2,
  Database,
  Cloud,
  Workflow,
  Wrench,
} from "lucide-react";

const techStack = [
  {
    number: "01",
    title: "Frontend",
    description: "Modern interfaces built for speed, accessibility, and scale.",
    icon: Monitor,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
    ],
  },
  {
    number: "02",
    title: "Backend",
    description: "Reliable APIs and server-side systems for production apps.",
    icon: Server,
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Socket.io",
    ],
  },
  {
    number: "03",
    title: "AI & LLM",
    description: "Intelligent applications powered by modern AI models.",
    icon: BrainCircuit,
    technologies: [
      "OpenAI",
      "Google Gemini",
      "Grok",
      "DeepSeek",
      "LangChain",
    ],
  },
  {
    number: "04",
    title: "Voice AI",
    description: "Real-time conversational voice experiences and agents.",
    icon: Mic2,
    technologies: [
      "LiveKit",
      "Vapi",
      "Deepgram",
      "Google TTS",
      "Sarvam AI",
    ],
  },
  {
    number: "05",
    title: "Database",
    description: "Fast and scalable data storage for modern applications.",
    icon: Database,
    technologies: [
      "MongoDB",
      "Mongoose",
      "Redis",
    ],
  },
  {
    number: "06",
    title: "Deployment",
    description: "Production infrastructure, CI/CD, containers, and hosting.",
    icon: Cloud,
    technologies: [
      "Vercel",
      "Render",
      "Railway",
      "Docker",
      "GitHub",
    ],
  },
  {
    number: "07",
    title: "Automation",
    description: "Connected workflows that eliminate repetitive business tasks.",
    icon: Workflow,
    technologies: [
      "n8n",
      "Zapier",
      "Webhooks",
      "Cron Jobs",
      "API Integrations",
    ],
  },
  {
    number: "08",
    title: "Tools",
    description: "Essential tools for development, design, testing, and delivery.",
    icon: Wrench,
    technologies: [
      "Git",
      "Postman",
      "VS Code",
      "Figma",
      "Cloudinary",
    ],
  },
];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 py-28">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Tech Stack
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Built With Modern{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Technology
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            A carefully selected stack for building fast, scalable AI
            applications, SaaS products, automation systems, and
            production-ready digital experiences.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {techStack.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.045]"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                {/* Header */}
                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/15">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-white/10 transition duration-300 group-hover:text-blue-400/30">
                    {category.number}
                  </span>
                </div>

                {/* Title */}
                <div className="relative mt-7">
                  <h3 className="text-xl font-bold tracking-tight">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {category.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="relative mt-7 flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-zinc-300 transition-all duration-200 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-7 right-7 h-px origin-left scale-x-0 bg-gradient-to-r from-blue-500/70 to-cyan-400/0 transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// const techStack = [
//   {
//     title: "Frontend",
//     technologies: [
//       "Next.js",
//       "React",
//       "TypeScript",
//       "Tailwind CSS",
//       "Shadcn UI",
//       "Framer Motion",
//     ],
//   },
//   {
//     title: "Backend",
//     technologies: [
//       "Node.js",
//       "Express.js",
//       "REST APIs",
//       "JWT",
//       "Socket.io",
//     ],
//   },
//   {
//     title: "AI & LLM",
//     technologies: [
//       "OpenAI",
//       "Google Gemini",
//       "Grok",
//       "DeepSeek",
//       "LangChain",
//     ],
//   },
//   {
//     title: "Voice AI",
//     technologies: [
//       "LiveKit",
//       "Vapi",
//       "Deepgram",
//       "Google TTS",
//       "Sarvam AI",
//     ],
//   },
//   {
//     title: "Database",
//     technologies: [
//       "MongoDB",
//       "Mongoose",
//       "Redis",
//     ],
//   },
//   {
//     title: "Deployment",
//     technologies: [
//       "Vercel",
//       "Render",
//       "Railway",
//       "Docker",
//       "GitHub",
//     ],
//   },
//   {
//     title: "Automation",
//     technologies: [
//       "n8n",
//       "Zapier",
//       "Webhooks",
//       "Cron Jobs",
//       "API Integrations",
//     ],
//   },
//   {
//     title: "Tools",
//     technologies: [
//       "Git",
//       "Postman",
//       "VS Code",
//       "Figma",
//       "Cloudinary",
//     ],
//   },
// ];

// export default function TechStack() {
//   return (
//     <section className="border-y border-white/10 py-24">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="mb-16 text-center">
//           <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
//             Tech Stack
//           </span>

//           <h2 className="mt-4 text-4xl font-bold md:text-5xl">
//             Technologies I Use
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
//             I use modern, scalable technologies to build AI applications,
//             SaaS products, automation systems, and enterprise-grade web
//             applications.
//           </p>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
//           {techStack.map((category) => (
//             <article
//               key={category.title}
//               className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-blue-500/30"
//             >
//               <h3 className="mb-6 text-2xl font-bold">
//                 {category.title}
//               </h3>

//               <div className="flex flex-wrap gap-3">
//                 {category.technologies.map((tech) => (
//                   <span
//                     key={tech}
//                     className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }