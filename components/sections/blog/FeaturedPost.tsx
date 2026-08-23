

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  Clock,
  Sparkles,
} from "lucide-react";

import { blogPosts } from "@/data/blog";

export default function FeaturedPost() {
  const featuredPost = blogPosts.find((post) => post.featured);

  if (!featuredPost) return null;

  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              <Sparkles className="h-4 w-4" />
              Featured Article
            </div>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Editor&apos;s Pick
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400">
              A deep dive into the ideas, technologies, and strategies shaping
              modern AI and software development.
            </p>
          </div>
        </div>

        {/* Featured Card */}
        <Link
          href={`/blog/${featuredPost.slug}`}
          aria-label={`Read article: ${featuredPost.title}`}
          className="group relative block overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
        >
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px] transition duration-700 group-hover:bg-blue-500/20" />

          <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">

            {/* Image */}
            <div className="relative min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-[560px]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Image Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/20" />

              {/* Image Badge */}
              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  Featured
                </span>
              </div>

              {/* Mobile Category */}
              <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 lg:hidden">
                <span className="rounded-full border border-blue-400/20 bg-blue-500/15 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-md">
                  {featuredPost.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14 xl:p-16">

              {/* Category */}
              <div className="hidden lg:block">
                <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                  {featuredPost.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:mt-7 lg:text-5xl">
                <span className="transition-colors duration-300 group-hover:text-blue-400">
                  {featuredPost.title}
                </span>
              </h3>

              {/* Excerpt */}
              <p className="mt-5 text-base leading-7 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8">
                {featuredPost.excerpt}
              </p>

              {/* Metadata */}
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-zinc-600" />
                  <span>{featuredPost.publishedAt}</span>
                </div>

                <div className="h-1 w-1 rounded-full bg-zinc-700" />

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-zinc-600" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px w-full bg-white/10" />

              {/* CTA */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 font-semibold text-blue-400 transition-colors group-hover:text-blue-300">
                  Read Article
                  <ArrowUpRight
                    className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>

                <span className="hidden text-xs uppercase tracking-[0.2em] text-zinc-600 sm:block">
                  Featured
                </span>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700 group-hover:w-full" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, Calendar, Clock } from "lucide-react";

// import { blogPosts } from "@/data/blog";

// export default function FeaturedPost() {
//   const featuredPost = blogPosts.find((post) => post.featured);

//   if (!featuredPost) return null;

//   return (
//     <section className="py-24">
//       <div className="mx-auto max-w-7xl px-5">
//         <div className="mb-12">
//           <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
//             Featured Article
//           </span>

//           <h2 className="mt-4 text-4xl font-bold md:text-5xl">
//             Editor's Pick
//           </h2>
//         </div>

//         <Link
//           href={`/blog/${featuredPost.slug}`}
//           className="group block"
//         >
//           <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30">
//             <div className="grid lg:grid-cols-2">
//               {/* Image */}
//               <div className="overflow-hidden">
//                 <Image
//                   src={featuredPost.image}
//                   alt={featuredPost.title}
//                   width={1200}
//                   height={630}
//                   priority
//                   className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
//                 />
//               </div>

//               {/* Content */}
//               <div className="flex flex-col justify-center p-10 lg:p-14">
//                 <span className="inline-flex w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
//                   {featuredPost.category}
//                 </span>

//                 <h3 className="mt-8 text-4xl font-bold leading-tight transition group-hover:text-blue-400">
//                   {featuredPost.title}
//                 </h3>

//                 <p className="mt-6 leading-8 text-zinc-400">
//                   {featuredPost.excerpt}
//                 </p>

//                 <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-500">
//                   <div className="flex items-center gap-2">
//                     <Calendar size={16} />
//                     {featuredPost.publishedAt}
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <Clock size={16} />
//                     {featuredPost.readTime}
//                   </div>
//                 </div>

//                 <div className="mt-10 inline-flex items-center gap-2 font-semibold text-blue-400 transition group-hover:text-blue-300">
//                   Read Article
//                   <ArrowRight
//                     size={18}
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   />
//                 </div>
//               </div>
//             </div>
//           </article>
//         </Link>
//       </div>
//     </section>
//   );
// }


// // import Image from "next/image";
// // import Link from "next/link";
// // import { ArrowRight, Calendar, Clock } from "lucide-react";

// // import { blogPosts } from "@/data/blog";

// // export default function FeaturedPost() {
// //   const featuredPost = blogPosts.find((post) => post.featured);

// //   if (!featuredPost) return null;

// //   return (
// //     <section className="py-24">
// //       <div className="mx-auto max-w-7xl px-5">
// //         <div className="mb-12">
// //           <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
// //             Featured Article
// //           </span>

// //           <h2 className="mt-4 text-4xl font-bold md:text-5xl">
// //             Editor's Pick
// //           </h2>
// //         </div>

// //         <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:border-blue-500/30">
// //           <div className="grid lg:grid-cols-2">
// //             {/* Image */}

// //             <div className="overflow-hidden">
// //               <Image
// //                 src={featuredPost.image}
// //                 alt={featuredPost.title}
// //                 width={1200}
// //                 height={630}
// //                 priority
// //                 className="h-auto w-full object-cover"
// //               />
// //             </div>

// //             {/* <div className="relative min-h-[350px]">
// //               <Image
// //                 src={featuredPost.image}
// //                 alt={featuredPost.title}
// //                 fill
// //                 className="object-cover"
// //               />
// //             </div> */}

// //             {/* Content */}

// //             <div className="flex flex-col justify-center p-10 lg:p-14">
// //               <span className="inline-flex w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
// //                 {featuredPost.category}
// //               </span>

// //               <h3 className="mt-8 text-4xl font-bold leading-tight">
// //                 {featuredPost.title}
// //               </h3>

// //               <p className="mt-6 leading-8 text-zinc-400">
// //                 {featuredPost.excerpt}
// //               </p>

// //               <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-500">
// //                 <div className="flex items-center gap-2">
// //                   <Calendar size={16} />
// //                   {featuredPost.publishedAt}
// //                 </div>

// //                 <div className="flex items-center gap-2">
// //                   <Clock size={16} />
// //                   {featuredPost.readTime}
// //                 </div>
// //               </div>

// //               <Link
// //                 href={`/blog/${featuredPost.slug}`}
// //                 className="mt-10 inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300"
// //               >
// //                 Read Article

// //                 <ArrowRight size={18} />
// //               </Link>
// //             </div>
// //           </div>
// //         </article>
// //       </div>
// //     </section>
// //   );
// // }