import { blogPosts } from "@/data/blog";

export default function Categories() {
  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  return (
    <section className="pb-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}