import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";

import type { BlogPost } from "@/data/blog";

interface Props {
  post: BlogPost;
}

export default function BlogHero({ post }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-24">
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl px-5">
        {/* Category */}

        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
          {post.category}
        </span>

        {/* Title */}

        <h1 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
          {post.title}
        </h1>

        {/* Excerpt */}

        <p className="mt-8 text-xl leading-9 text-zinc-400">
          {post.excerpt}
        </p>

        {/* Meta */}

        <div className="mt-10 flex flex-wrap gap-8 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <User size={18} />
            {post.author}
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={18} />
            {post.publishedAt}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={18} />
            {post.readTime}
          </div>
        </div>

        {/* Cover Image */}

        <div className="relative mt-16 aspect-video overflow-hidden rounded-3xl border border-white/10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}