const techStack = [
  {
    title: "Frontend",
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
    title: "Backend",
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Socket.io",
    ],
  },
  {
    title: "AI & LLM",
    technologies: [
      "OpenAI",
      "Google Gemini",
      "Grok",
      "DeepSeek",
      "LangChain",
    ],
  },
  {
    title: "Voice AI",
    technologies: [
      "LiveKit",
      "Vapi",
      "Deepgram",
      "Google TTS",
      "Sarvam AI",
    ],
  },
  {
    title: "Database",
    technologies: [
      "MongoDB",
      "Mongoose",
      "Redis",
    ],
  },
  {
    title: "Deployment",
    technologies: [
      "Vercel",
      "Render",
      "Railway",
      "Docker",
      "GitHub",
    ],
  },
  {
    title: "Automation",
    technologies: [
      "n8n",
      "Zapier",
      "Webhooks",
      "Cron Jobs",
      "API Integrations",
    ],
  },
  {
    title: "Tools",
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
    <section className="border-y border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Tech Stack
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Technologies I Use
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            I use modern, scalable technologies to build AI applications,
            SaaS products, automation systems, and enterprise-grade web
            applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {techStack.map((category) => (
            <article
              key={category.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-blue-500/30"
            >
              <h3 className="mb-6 text-2xl font-bold">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}