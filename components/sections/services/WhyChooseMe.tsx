import {
  BrainCircuit,
  Rocket,
  ShieldCheck,
  Gauge,
  MessagesSquare,
  Wrench,
} from "lucide-react";

const reasons = [
  {
    icon: BrainCircuit,
    title: "AI & Automation Expertise",
    description:
      "Specialized in AI Voice Agents, LLM integrations, business automation, and conversational AI solutions.",
  },
  {
    icon: Rocket,
    title: "Production-Ready Development",
    description:
      "Every project is built with scalability, maintainability, and real-world deployment in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Authentication, secure APIs, protected data handling, and industry best practices are built into every solution.",
  },
  {
    icon: Gauge,
    title: "Performance Optimized",
    description:
      "Fast-loading applications with optimized databases, APIs, and frontend performance for the best user experience.",
  },
  {
    icon: MessagesSquare,
    title: "Clear Communication",
    description:
      "Regular progress updates, transparent planning, and collaborative development throughout the project.",
  },
  {
    icon: Wrench,
    title: "Long-Term Support",
    description:
      "Deployment assistance, maintenance, improvements, bug fixes, and future feature development after launch.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Why Choose Me
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            More Than Just Development
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            I don't just write code—I build scalable digital products that solve
            real business problems using modern technologies and AI-powered
            solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {reason.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-20 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-transparent p-10 text-center">
          <h3 className="text-3xl font-bold">
            Building solutions that grow with your business.
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Whether you're launching an AI startup, automating internal
            workflows, or building a modern SaaS platform, I focus on creating
            software that is scalable, maintainable, and ready for real-world
            use.
          </p>
        </div>
      </div>
    </section>
  );
}