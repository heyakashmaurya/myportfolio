import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import type { BlogPost } from "@/data/blog";

interface Props {
  posts: BlogPost[];
  currentSlug: string;
}

export default function RelatedPosts({
  posts,
  currentSlug,
}: Props) {
  const relatedPosts = posts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-5">

        <div className="mb-14">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Keep Reading
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Related Articles
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {relatedPosts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.coverImageAlt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-7">

                <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                  {post.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold leading-tight group-hover:text-blue-400 transition">
                  {post.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap gap-5 text-sm text-zinc-500">

                  <div className="flex items-center gap-2">
                    <Calendar size={15} />
                    {post.publishedAt}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={15} />
                    {post.readTime}
                  </div>

                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  Read Article

                  <ArrowRight size={18} />
                </Link>

              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}