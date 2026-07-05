import {
  Search,
  ClipboardList,
  Palette,
  Code2,
  Bug,
  Rocket,
} from "lucide-react";

const process = [
  {
    step: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We discuss your business, goals, users, and requirements to define the project scope.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Planning",
    description:
      "I prepare the architecture, workflows, APIs, database structure, and project roadmap.",
  },
  {
    step: "03",
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Designing clean, responsive, and user-friendly interfaces focused on usability.",
  },
  {
    step: "04",
    icon: Code2,
    title: "Development",
    description:
      "Building scalable frontend, backend, APIs, AI integrations, and databases using modern technologies.",
  },
  {
    step: "05",
    icon: Bug,
    title: "Testing",
    description:
      "Comprehensive testing to ensure security, performance, responsiveness, and reliability.",
  },
  {
    step: "06",
    icon: Rocket,
    title: "Deployment",
    description:
      "Deploying your application with monitoring, optimization, documentation, and ongoing support.",
  },
];

export default function Process() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            My Process
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            A Proven Development Workflow
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Every successful project follows a structured process—from
            understanding your goals to delivering a production-ready solution.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {process.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.step}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
              >
                <div className="absolute right-6 top-6 text-5xl font-black text-white/5">
                  {item.step}
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}