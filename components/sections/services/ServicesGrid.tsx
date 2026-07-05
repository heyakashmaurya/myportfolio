import Link from "next/link";
import {
  ArrowRight,
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
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Services
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Solutions tailored for modern businesses
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Whether you're launching a startup, automating operations, or
            building an AI-powered product, I deliver scalable, production-ready
            solutions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];

            return (
              <article
                key={service.id}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-3xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {service.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                    What you get
                  </h4>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-zinc-300"
                      >
                        <div className="h-2 w-2 rounded-full bg-blue-400" />

                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <Link href="/contact">
                    <Button>
                      Let's Build This

                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}