
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  Clock,
  BookOpen,
} from "lucide-react";

import { blogPosts } from "@/data/blog";

export default function BlogGrid() {
  const posts = blogPosts.filter((post) => !post.featured);

  return (
    <section className="relative pb-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-x-0 top-20 -z-10 mx-auto h-[500px] max-w-6xl rounded-full bg-blue-500/[0.03] blur-3xl" />

      <div className="mx-auto max-w-7xl px-5">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Latest Articles
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Explore the latest insights
            </h2>

            <p className="mt-3 max-w-2xl text-zinc-400">
              Practical insights on AI, SaaS, automation, and modern full-stack
              development.
            </p>
          </div>

          <div className="hidden items-center gap-2 text-sm text-zinc-500 sm:flex">
            <BookOpen size={16} />
            {posts.length} articles
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              aria-label={`Read article: ${post.title}`}
              className="group block rounded-[28px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
            >
              <article
                className="
                  relative flex h-full flex-col overflow-hidden
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.025]
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-blue-500/30
                  hover:bg-white/[0.04]
                  hover:shadow-2xl
                  hover:shadow-blue-500/[0.08]
                "
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

                  {/* Top gradient */}
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />

                  {/* Category */}
                  <div className="absolute left-5 top-5">
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-black/50 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>

                  {/* Hover icon */}
                  <div
                    className="
                      absolute right-5 top-5
                      flex h-10 w-10 items-center justify-center
                      rounded-full
                      border border-white/15
                      bg-black/40
                      text-white
                      opacity-0
                      backdrop-blur-md
                      transition-all duration-300
                      group-hover:opacity-100
                      group-hover:rotate-0
                    "
                  >
                    <ArrowUpRight size={18} />
                  </div>

                  {/* Reading time on image */}
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs font-medium text-white/80">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-7">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
                    <Calendar size={14} />
                    <span>{post.publishedAt}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-4
                      line-clamp-2
                      text-2xl
                      font-bold
                      leading-tight
                      tracking-tight
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-blue-400
                    "
                  >
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-4
                      line-clamp-3
                      text-sm
                      leading-7
                      text-zinc-400
                    "
                  >
                    {post.excerpt}
                  </p>

                  {/* Bottom CTA */}
                  <div className="mt-auto pt-7">
                    <div className="flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="text-sm font-semibold text-zinc-300 transition-colors group-hover:text-white">
                        Read article
                      </span>

                      <div
                        className="
                          flex h-9 w-9 items-center justify-center
                          rounded-full
                          border border-white/10
                          bg-white/[0.03]
                          text-zinc-400
                          transition-all duration-300
                          group-hover:border-blue-500/30
                          group-hover:bg-blue-500/10
                          group-hover:text-blue-400
                        "
                      >
                        <ArrowUpRight
                          size={17}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom glow */}
                <div
                  className="
                    pointer-events-none
                    absolute -bottom-24 left-1/2
                    h-40 w-40
                    -translate-x-1/2
                    rounded-full
                    bg-blue-500/10
                    opacity-0
                    blur-3xl
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}



// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, Calendar, Clock } from "lucide-react";

// import { blogPosts } from "@/data/blog";

// export default function BlogGrid() {
//   const posts = blogPosts.filter((post) => !post.featured);

//   return (
//     <section className="pb-28">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
//           {posts.map((post) => (
//             <Link
//               key={post.id}
//               href={`/blog/${post.slug}`}
//               className="group block"
//             >
//               <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30">
//                 {/* Image */}
//                 <div className="relative aspect-[16/10] overflow-hidden">
//                   <Image
//                     src={post.image}
//                     alt={post.title}
//                     fill
//                     className="object-cover transition duration-700 group-hover:scale-105"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-7">
//                   <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
//                     {post.category}
//                   </span>

//                   <h3 className="mt-5 text-2xl font-bold leading-tight transition group-hover:text-blue-400">
//                     {post.title}
//                   </h3>

//                   <p className="mt-4 leading-7 text-zinc-400">
//                     {post.excerpt}
//                   </p>

//                   <div className="mt-6 flex flex-wrap gap-5 text-sm text-zinc-500">
//                     <div className="flex items-center gap-2">
//                       <Calendar size={15} />
//                       {post.publishedAt}
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <Clock size={15} />
//                       {post.readTime}
//                     </div>
//                   </div>

//                   <div className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-400 transition group-hover:text-blue-300">
//                     Read Article
//                     <ArrowRight
//                       size={18}
//                       className="transition-transform group-hover:translate-x-1"
//                     />
//                   </div>
//                 </div>
//               </article>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
