
import {
  BrainCircuit,
  Rocket,
  ShieldCheck,
  Gauge,
  MessagesSquare,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "AI & Automation Expertise",
    description:
      "Specialized in AI Voice Agents, LLM integrations, business automation, and conversational AI solutions.",
  },
  {
    icon: Rocket,
    number: "02",
    title: "Production-Ready Development",
    description:
      "Every project is built with scalability, maintainability, and real-world deployment in mind.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Secure & Reliable",
    description:
      "Authentication, secure APIs, protected data handling, and industry best practices are built into every solution.",
  },
  {
    icon: Gauge,
    number: "04",
    title: "Performance Optimized",
    description:
      "Fast-loading applications with optimized databases, APIs, and frontend performance for the best user experience.",
  },
  {
    icon: MessagesSquare,
    number: "05",
    title: "Clear Communication",
    description:
      "Regular progress updates, transparent planning, and collaborative development throughout the project.",
  },
  {
    icon: Wrench,
    number: "06",
    title: "Long-Term Support",
    description:
      "Deployment assistance, maintenance, improvements, bug fixes, and future feature development after launch.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 py-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Why Choose Me
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              More Than Just
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Writing Code.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-2xl text-lg leading-8 text-zinc-400">
              I don't just build software. I combine AI, engineering,
              automation, and product thinking to create solutions designed
              around real business goals.
            </p>
          </div>
        </div>

        {/* Reasons */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="group relative overflow-hidden bg-[#09090b] p-8 transition-all duration-500 hover:bg-white/[0.045]"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                {/* Top row */}
                <div className="relative flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/15">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-white/10 transition-colors duration-300 group-hover:text-blue-400/30">
                    {reason.number}
                  </span>
                </div>

                <h3 className="relative mt-8 text-xl font-bold tracking-tight">
                  {reason.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-zinc-500">
                  {reason.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 bg-gradient-to-r from-blue-500 to-cyan-400/0 transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-blue-500/[0.12] via-blue-500/[0.04] to-transparent p-8 md:p-12">
          <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Built For The Long Run
              </span>

              <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Building solutions that grow with your business.
              </h3>

              <p className="mt-5 text-base leading-7 text-zinc-400 md:text-lg">
                Whether you're launching an AI startup, automating internal
                workflows, or building a modern SaaS platform, the focus is on
                creating software that is scalable, maintainable, and ready
                for real-world use.
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Let's Work Together

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// import {
//   BrainCircuit,
//   Rocket,
//   ShieldCheck,
//   Gauge,
//   MessagesSquare,
//   Wrench,
// } from "lucide-react";

// const reasons = [
//   {
//     icon: BrainCircuit,
//     title: "AI & Automation Expertise",
//     description:
//       "Specialized in AI Voice Agents, LLM integrations, business automation, and conversational AI solutions.",
//   },
//   {
//     icon: Rocket,
//     title: "Production-Ready Development",
//     description:
//       "Every project is built with scalability, maintainability, and real-world deployment in mind.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Secure & Reliable",
//     description:
//       "Authentication, secure APIs, protected data handling, and industry best practices are built into every solution.",
//   },
//   {
//     icon: Gauge,
//     title: "Performance Optimized",
//     description:
//       "Fast-loading applications with optimized databases, APIs, and frontend performance for the best user experience.",
//   },
//   {
//     icon: MessagesSquare,
//     title: "Clear Communication",
//     description:
//       "Regular progress updates, transparent planning, and collaborative development throughout the project.",
//   },
//   {
//     icon: Wrench,
//     title: "Long-Term Support",
//     description:
//       "Deployment assistance, maintenance, improvements, bug fixes, and future feature development after launch.",
//   },
// ];

// export default function WhyChooseMe() {
//   return (
//     <section className="py-24">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="mb-16 text-center">
//           <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
//             Why Choose Me
//           </span>

//           <h2 className="mt-4 text-4xl font-bold md:text-5xl">
//             More Than Just Development
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
//             I don't just write code—I build scalable digital products that solve
//             real business problems using modern technologies and AI-powered
//             solutions.
//           </p>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {reasons.map((reason) => {
//             const Icon = reason.icon;

//             return (
//               <article
//                 key={reason.title}
//                 className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
//               >
//                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition group-hover:scale-110">
//                   <Icon size={30} />
//                 </div>

//                 <h3 className="mt-8 text-2xl font-bold">
//                   {reason.title}
//                 </h3>

//                 <p className="mt-5 leading-8 text-zinc-400">
//                   {reason.description}
//                 </p>
//               </article>
//             );
//           })}
//         </div>

//         <div className="mt-20 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-transparent p-10 text-center">
//           <h3 className="text-3xl font-bold">
//             Building solutions that grow with your business.
//           </h3>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
//             Whether you're launching an AI startup, automating internal
//             workflows, or building a modern SaaS platform, I focus on creating
//             software that is scalable, maintainable, and ready for real-world
//             use.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }