import {
  UtensilsCrossed,
  Hospital,
  Landmark,
  Building2,
  ShoppingCart,
  House,
} from "lucide-react";

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description:
      "AI table booking, reservation management, customer support, and ordering assistants.",
  },
  {
    icon: Hospital,
    title: "Healthcare",
    description:
      "Appointment scheduling, patient support, multilingual receptionists, and follow-ups.",
  },
  {
    icon: Landmark,
    title: "Finance",
    description:
      "EMI reminder agents, customer verification, payment collection, and banking automation.",
  },
  {
    icon: Building2,
    title: "SaaS",
    description:
      "Modern dashboards, authentication, analytics, subscriptions, and admin platforms.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Customer support bots, order tracking, product recommendations, and automation.",
  },
  {
    icon: House,
    title: "Real Estate",
    description:
      "Lead qualification, appointment booking, property inquiries, and virtual assistants.",
  },
];

export default function Industries() {
  return (
    <section className="py-24 border-y border-white/10">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Industries
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Industries I Build Solutions For
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Every business has unique workflows. I create AI-powered software
            tailored to industry-specific challenges.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {industry.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {industry.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}