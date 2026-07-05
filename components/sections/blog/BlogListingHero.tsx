import { Search } from "lucide-react";

const popularTags = [
  "AI",
  "Voice Agents",
  "Next.js",
  "SaaS",
  "Automation",
];

export default function BlogListingHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 text-center">
        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
          Knowledge Hub
        </span>

        <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
          Insights on AI,
          <br />
          SaaS & Full Stack Development
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Explore tutorials, case studies, development guides, AI Voice Agent
          architecture, SaaS engineering, automation, and modern web
          development.
        </p>

        {/* Search */}

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="flex items-center rounded-2xl border border-white/10 bg-white/[0.03] px-5">
            <Search
              className="text-zinc-500"
              size={20}
            />

            <input
              type="text"
              placeholder="Search articles..."
              className="h-16 w-full bg-transparent px-4 outline-none placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Tags */}

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {popularTags.map((tag) => (
            <span
              key={tag}
              className="cursor-pointer rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}