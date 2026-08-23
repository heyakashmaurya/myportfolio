
import Image from "next/image";
import {
  ArrowDown,
  Calendar,
  Clock,
  User,
} from "lucide-react";

import type { BlogPost } from "@/data/blog";

interface Props {
  post: BlogPost;
}

export default function BlogHero({ post }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[140px]" />

        <div className="absolute left-1/2 top-[35%] h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.04] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-24 pt-20 md:pt-28">
        {/* Breadcrumb / category */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-blue-500" />

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            {post.category}
          </span>
        </div>

        {/* Main title */}
        <h1
          className="
            mt-7
            max-w-5xl
            text-4xl
            font-black
            leading-[1.05]
            tracking-tight
            text-white
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl md:leading-9">
          {post.excerpt}
        </p>

        {/* Author + metadata */}
        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400">
              <User size={17} />
            </div>

            <div>
              <p className="text-xs text-zinc-500">
                Written by
              </p>

              <p className="text-sm font-medium text-zinc-200">
                {post.author}
              </p>
            </div>
          </div>

          <div className="hidden h-8 w-px bg-white/10 sm:block" />

          {/* Date */}
          <div className="flex items-center gap-2.5 text-sm text-zinc-400">
            <Calendar
              size={17}
              className="text-zinc-500"
            />

            <span>{post.publishedAt}</span>
          </div>

          <div className="hidden h-8 w-px bg-white/10 sm:block" />

          {/* Reading time */}
          <div className="flex items-center gap-2.5 text-sm text-zinc-400">
            <Clock
              size={17}
              className="text-zinc-500"
            />

            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Cover image */}
        <div className="group relative mt-16">
          {/* Glow */}
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[32px] bg-blue-500/[0.08] opacity-0 blur-2xl transition duration-700 group-hover:opacity-100" />

          <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.02]
              "
            />

            {/* Image gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

            {/* Image label */}
            <div className="absolute bottom-5 left-5">
              <span className="rounded-full border border-white/15 bg-black/40 px-3.5 py-2 text-xs font-medium text-white/90 backdrop-blur-md">
                {post.category}
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-600">
            <span>Read article</span>

            <ArrowDown
              size={15}
              className="animate-bounce text-zinc-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



// import Image from "next/image";
// import { Calendar, Clock, User } from "lucide-react";

// import type { BlogPost } from "@/data/blog";

// interface Props {
//   post: BlogPost;
// }

// export default function BlogHero({ post }: Props) {
//   return (
//     <section className="relative overflow-hidden border-b border-white/10 py-24">
//       {/* Background Glow */}

//       <div className="absolute inset-0 -z-10">
//         <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
//       </div>

//       <div className="mx-auto max-w-5xl px-5">
//         {/* Category */}

//         <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
//           {post.category}
//         </span>

//         {/* Title */}

//         <h1 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
//           {post.title}
//         </h1>

//         {/* Excerpt */}

//         <p className="mt-8 text-xl leading-9 text-zinc-400">
//           {post.excerpt}
//         </p>

//         {/* Meta */}

//         <div className="mt-10 flex flex-wrap gap-8 text-sm text-zinc-500">
//           <div className="flex items-center gap-2">
//             <User size={18} />
//             {post.author}
//           </div>

//           <div className="flex items-center gap-2">
//             <Calendar size={18} />
//             {post.publishedAt}
//           </div>

//           <div className="flex items-center gap-2">
//             <Clock size={18} />
//             {post.readTime}
//           </div>
//         </div>

//         {/* Cover Image */}

//         <div className="relative mt-16 aspect-video overflow-hidden rounded-3xl border border-white/10">
//           <Image
//             src={post.image}
//             alt={post.title}
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }