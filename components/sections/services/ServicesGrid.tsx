

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code2,
  LayoutDashboard,
  PhoneCall,
  Workflow,
} from "lucide-react";

import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

const icons = {
  PhoneCall,
  LayoutDashboard,
  Workflow,
  Code2,
};

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Services
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Build faster.
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Scale smarter.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            From AI-powered automation to complete SaaS platforms, I build
            reliable digital products designed around real business outcomes.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons];

            return (
              <article
                key={service.id}
                className="
                  group relative overflow-hidden rounded-[28px]
                  border border-white/10
                  bg-white/[0.025]
                  p-7
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-blue-500/30
                  hover:bg-white/[0.04]
                  md:p-9
                "
              >
                {/* Hover glow */}
                <div
                  className="
                    pointer-events-none absolute
                    -right-24 -top-24
                    h-64 w-64
                    rounded-full
                    bg-blue-500/[0.08]
                    blur-3xl
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Top row */}
                <div className="relative flex items-start justify-between">
                  <div
                    className="
                      flex h-14 w-14 items-center justify-center
                      rounded-2xl
                      border border-blue-500/20
                      bg-blue-500/10
                      text-blue-400
                      transition-all duration-300
                      group-hover:border-blue-400/40
                      group-hover:bg-blue-500/15
                    "
                  >
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-medium tracking-widest text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <div className="relative mt-8">
                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                    {service.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="relative mt-7">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-lg
                          border border-white/10
                          bg-white/[0.035]
                          px-3 py-1.5
                          text-xs font-medium
                          text-zinc-300
                          transition-colors
                          group-hover:border-white/15
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-white/[0.07]" />

                {/* Features */}
                <div className="relative">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
                    What's included
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm text-zinc-300"
                      >
                        <span
                          className="
                            mt-0.5 flex h-5 w-5 shrink-0
                            items-center justify-center
                            rounded-full
                            bg-blue-500/10
                            text-blue-400
                          "
                        >
                          <Check size={12} strokeWidth={3} />
                        </span>

                        <span className="leading-6">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="relative mt-9">
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="
                        group/btn
                        w-full
                        justify-between
                        border-white/10
                        bg-white/[0.02]
                        px-4
                        hover:border-blue-500/40
                        hover:bg-blue-500/10
                      "
                    >
                      <span>Let's build this</span>

                      <ArrowRight
                        className="
                          h-4 w-4
                          transition-transform duration-300
                          group-hover/btn:translate-x-1
                        "
                      />
                    </Button>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.02] px-7 py-7 text-center md:flex-row md:px-9 md:text-left">
          <div>
            <p className="text-lg font-semibold">
              Not sure which service you need?
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              Tell me what you're trying to build and I'll recommend the right
              approach.
            </p>
          </div>

          <Link href="/contact">
            <Button className="shrink-0">
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// import Link from "next/link";
// import {
//   ArrowRight,
//   Code2,
//   LayoutDashboard,
//   PhoneCall,
//   Workflow,
// } from "lucide-react";

// import { services } from "@/data/services";
// import { Button } from "@/components/ui/button";

// const icons = {
//   PhoneCall,
//   LayoutDashboard,
//   Workflow,
//   Code2,
// };

// export default function ServicesGrid() {
//   return (
//     <section className="py-24">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="mb-16 text-center">
//           <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
//             Services
//           </span>

//           <h2 className="mt-4 text-4xl font-bold md:text-5xl">
//             Solutions tailored for modern businesses
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
//             Whether you're launching a startup, automating operations, or
//             building an AI-powered product, I deliver scalable, production-ready
//             solutions.
//           </p>
//         </div>

//         <div className="grid gap-8 lg:grid-cols-2">
//           {services.map((service) => {
//             const Icon = icons[service.icon as keyof typeof icons];

//             return (
//               <article
//                 key={service.id}
//                 className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
//               >
//                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
//                   <Icon size={30} />
//                 </div>

//                 <h3 className="mt-8 text-3xl font-bold">
//                   {service.title}
//                 </h3>

//                 <p className="mt-5 leading-8 text-zinc-400">
//                   {service.description}
//                 </p>

//                 <div className="mt-8 flex flex-wrap gap-2">
//                   {service.technologies.map((tech) => (
//                     <span
//                       key={tech}
//                       className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="mt-8">
//                   <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
//                     What you get
//                   </h4>

//                   <ul className="space-y-3">
//                     {service.features.map((feature) => (
//                       <li
//                         key={feature}
//                         className="flex items-center gap-3 text-zinc-300"
//                       >
//                         <div className="h-2 w-2 rounded-full bg-blue-400" />

//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="mt-10">
//                   <Link href="/contact">
//                     <Button>
//                       Let's Build This

//                       <ArrowRight className="ml-2 h-4 w-4" />
//                     </Button>
//                   </Link>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }