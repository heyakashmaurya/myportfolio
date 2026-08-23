

import {
  ArrowUpRight,
  Building2,
  Hospital,
  House,
  Landmark,
  ShoppingCart,
  UtensilsCrossed,
} from "lucide-react";

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description:
      "AI-powered reservation, ordering, customer support, and table-booking systems.",
    outcomes: ["Reservations", "Ordering", "Customer Support"],
  },
  {
    icon: Hospital,
    title: "Healthcare",
    description:
      "Intelligent patient communication, appointment scheduling, follow-ups, and multilingual reception.",
    outcomes: ["Appointments", "Patient Support", "Follow-ups"],
  },
  {
    icon: Landmark,
    title: "Finance",
    description:
      "Automation for customer verification, payment collection, reminders, and financial workflows.",
    outcomes: ["Verification", "Collections", "Reminders"],
  },
  {
    icon: Building2,
    title: "SaaS",
    description:
      "Scalable SaaS products with dashboards, authentication, analytics, subscriptions, and admin systems.",
    outcomes: ["Dashboards", "Analytics", "Subscriptions"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "AI-powered customer experiences for product discovery, order tracking, support, and automation.",
    outcomes: ["Support", "Order Tracking", "Recommendations"],
  },
  {
    icon: House,
    title: "Real Estate",
    description:
      "Lead qualification, property inquiries, appointment booking, and AI-powered virtual assistants.",
    outcomes: ["Lead Qualification", "Bookings", "Virtual Assistants"],
  },
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 py-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Industries
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Technology built around
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              your business.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            Different industries have different workflows. I build AI and
            full-stack solutions around the way your business actually works.
          </p>
        </div>

        {/* Industry grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.title}
                className="
                  group relative overflow-hidden rounded-[28px]
                  border border-white/10
                  bg-white/[0.025]
                  p-7
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-blue-500/30
                  hover:bg-white/[0.04]
                  md:p-8
                "
              >
                {/* Hover glow */}
                <div
                  className="
                    pointer-events-none absolute
                    -right-20 -top-20
                    h-48 w-48
                    rounded-full
                    bg-blue-500/[0.08]
                    blur-3xl
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Top */}
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
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-medium tracking-widest text-zinc-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-8">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {industry.title}
                  </h3>

                  <p className="mt-4 min-h-[84px] text-sm leading-7 text-zinc-400">
                    {industry.description}
                  </p>
                </div>

                {/* Outcomes */}
                <div className="relative mt-7">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
                    Solutions
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {industry.outcomes.map((outcome) => (
                      <span
                        key={outcome}
                        className="
                          rounded-lg
                          border border-white/10
                          bg-white/[0.035]
                          px-3 py-1.5
                          text-xs font-medium
                          text-zinc-300
                        "
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom action */}
                <div className="relative mt-8 border-t border-white/[0.07] pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-zinc-400 transition-colors group-hover:text-white">
                      Explore solutions
                    </span>

                    <span
                      className="
                        flex h-9 w-9 items-center justify-center
                        rounded-full
                        border border-white/10
                        bg-white/[0.03]
                        text-zinc-500
                        transition-all duration-300
                        group-hover:border-blue-500/30
                        group-hover:bg-blue-500/10
                        group-hover:text-blue-400
                      "
                    >
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-14 text-center">
          <p className="text-sm text-zinc-500">
            Don't see your industry?
            <span className="ml-2 font-medium text-zinc-300">
              I can build custom solutions for your workflow.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}


// import {
//   UtensilsCrossed,
//   Hospital,
//   Landmark,
//   Building2,
//   ShoppingCart,
//   House,
// } from "lucide-react";

// const industries = [
//   {
//     icon: UtensilsCrossed,
//     title: "Restaurants",
//     description:
//       "AI table booking, reservation management, customer support, and ordering assistants.",
//   },
//   {
//     icon: Hospital,
//     title: "Healthcare",
//     description:
//       "Appointment scheduling, patient support, multilingual receptionists, and follow-ups.",
//   },
//   {
//     icon: Landmark,
//     title: "Finance",
//     description:
//       "EMI reminder agents, customer verification, payment collection, and banking automation.",
//   },
//   {
//     icon: Building2,
//     title: "SaaS",
//     description:
//       "Modern dashboards, authentication, analytics, subscriptions, and admin platforms.",
//   },
//   {
//     icon: ShoppingCart,
//     title: "E-Commerce",
//     description:
//       "Customer support bots, order tracking, product recommendations, and automation.",
//   },
//   {
//     icon: House,
//     title: "Real Estate",
//     description:
//       "Lead qualification, appointment booking, property inquiries, and virtual assistants.",
//   },
// ];

// export default function Industries() {
//   return (
//     <section className="py-24 border-y border-white/10">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="mb-16 text-center">
//           <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
//             Industries
//           </span>

//           <h2 className="mt-4 text-4xl font-bold md:text-5xl">
//             Industries I Build Solutions For
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
//             Every business has unique workflows. I create AI-powered software
//             tailored to industry-specific challenges.
//           </p>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {industries.map((industry) => {
//             const Icon = industry.icon;

//             return (
//               <article
//                 key={industry.title}
//                 className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
//               >
//                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
//                   <Icon size={30} />
//                 </div>

//                 <h3 className="mt-8 text-2xl font-bold">
//                   {industry.title}
//                 </h3>

//                 <p className="mt-5 leading-8 text-zinc-400">
//                   {industry.description}
//                 </p>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }