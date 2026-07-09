

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import { blogPosts } from "@/data/blog";

export default function FeaturedPost() {
  const featuredPost = blogPosts.find((post) => post.featured);

  if (!featuredPost) return null;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Featured Article
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Editor's Pick
          </h2>
        </div>

        <Link
          href={`/blog/${featuredPost.slug}`}
          className="group block"
        >
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={1200}
                  height={630}
                  priority
                  className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-10 lg:p-14">
                <span className="inline-flex w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                  {featuredPost.category}
                </span>

                <h3 className="mt-8 text-4xl font-bold leading-tight transition group-hover:text-blue-400">
                  {featuredPost.title}
                </h3>

                <p className="mt-6 leading-8 text-zinc-400">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {featuredPost.publishedAt}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {featuredPost.readTime}
                  </div>
                </div>

                <div className="mt-10 inline-flex items-center gap-2 font-semibold text-blue-400 transition group-hover:text-blue-300">
                  Read Article
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          </article>
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

//         <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:border-blue-500/30">
//           <div className="grid lg:grid-cols-2">
//             {/* Image */}

//             <div className="overflow-hidden">
//               <Image
//                 src={featuredPost.image}
//                 alt={featuredPost.title}
//                 width={1200}
//                 height={630}
//                 priority
//                 className="h-auto w-full object-cover"
//               />
//             </div>

//             {/* <div className="relative min-h-[350px]">
//               <Image
//                 src={featuredPost.image}
//                 alt={featuredPost.title}
//                 fill
//                 className="object-cover"
//               />
//             </div> */}

//             {/* Content */}

//             <div className="flex flex-col justify-center p-10 lg:p-14">
//               <span className="inline-flex w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
//                 {featuredPost.category}
//               </span>

//               <h3 className="mt-8 text-4xl font-bold leading-tight">
//                 {featuredPost.title}
//               </h3>

//               <p className="mt-6 leading-8 text-zinc-400">
//                 {featuredPost.excerpt}
//               </p>

//               <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-500">
//                 <div className="flex items-center gap-2">
//                   <Calendar size={16} />
//                   {featuredPost.publishedAt}
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <Clock size={16} />
//                   {featuredPost.readTime}
//                 </div>
//               </div>

//               <Link
//                 href={`/blog/${featuredPost.slug}`}
//                 className="mt-10 inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300"
//               >
//                 Read Article

//                 <ArrowRight size={18} />
//               </Link>
//             </div>
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// }