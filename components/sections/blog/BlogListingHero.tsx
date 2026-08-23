
"use client";

import { Search, ArrowDown, Sparkles } from "lucide-react";

const popularTags = [
  "AI",
  "Voice Agents",
  "Next.js",
  "SaaS",
  "Automation",
];

export default function BlogListingHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[140px]" />

        <div className="absolute left-1/2 top-0 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-28 md:py-36">
        {/* Hero content */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            <Sparkles size={14} />
            Knowledge Hub
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Ideas, insights &
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              engineering lessons.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
            Practical guides and deep dives into AI, Voice Agents, SaaS,
            automation, Next.js, and modern full-stack development.
          </p>

          {/* Search */}
          <div className="mx-auto mt-12 max-w-2xl">
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>

            <div className="group flex items-center rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 focus-within:border-blue-500/40 focus-within:bg-white/[0.06] focus-within:ring-4 focus-within:ring-blue-500/10">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-zinc-500 transition-colors group-focus-within:text-blue-400">
                <Search size={20} />
              </div>

              <input
                id="blog-search"
                type="search"
                placeholder="Search articles, tutorials, topics..."
                className="h-12 min-w-0 flex-1 bg-transparent pr-4 text-sm text-white outline-none placeholder:text-zinc-500 md:text-base"
              />

              <button
                type="button"
                className="hidden h-12 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-500 sm:block"
              >
                Search
              </button>
            </div>

            <p className="mt-3 text-left text-xs text-zinc-600">
              Search by topic, technology, or keyword
            </p>
          </div>

          {/* Popular topics */}
          <div className="mt-10">
            <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-600">
              Popular topics
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm text-zinc-400 transition-all duration-200 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-300"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom navigation cue */}
        <div className="mt-20 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
          Explore latest articles
          <ArrowDown size={14} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// import { Search } from "lucide-react";

// const popularTags = [
//   "AI",
//   "Voice Agents",
//   "Next.js",
//   "SaaS",
//   "Automation",
// ];

// export default function BlogListingHero() {
//   return (
//     <section className="relative overflow-hidden border-b border-white/10 py-28">
//       {/* Background Glow */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
//       </div>

//       <div className="mx-auto max-w-6xl px-5 text-center">
//         <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
//           Knowledge Hub
//         </span>

//         <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
//           Insights on AI,
//           <br />
//           SaaS & Full Stack Development
//         </h1>

//         <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
//           Explore tutorials, case studies, development guides, AI Voice Agent
//           architecture, SaaS engineering, automation, and modern web
//           development.
//         </p>

//         {/* Search */}

//         <div className="mx-auto mt-12 max-w-2xl">
//           <div className="flex items-center rounded-2xl border border-white/10 bg-white/[0.03] px-5">
//             <Search
//               className="text-zinc-500"
//               size={20}
//             />

//             <input
//               type="text"
//               placeholder="Search articles..."
//               className="h-16 w-full bg-transparent px-4 outline-none placeholder:text-zinc-500"
//             />
//           </div>
//         </div>

//         {/* Tags */}

//         <div className="mt-10 flex flex-wrap justify-center gap-3">
//           {popularTags.map((tag) => (
//             <span
//               key={tag}
//               className="cursor-pointer rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }