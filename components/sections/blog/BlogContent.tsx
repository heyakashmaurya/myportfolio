import type { BlogPost } from "@/data/blog";

interface Props {
    post: BlogPost;
}

export default function BlogContent({ post }: Props) {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-3xl px-5">

                {/* Overview */}

                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                    <p>{post.longDescription}</p>

                    <p>{post.overview}</p>
                </div>

                {/* Problem */}

                <div className="mt-16">
                    <h2 className="text-3xl font-bold">
                        Problem
                    </h2>

                    <p className="mt-4 leading-8 text-zinc-400">
                        {post.problem}
                    </p>
                </div>

                {/* Solution */}

                <div className="mt-16">
                    <h2 className="text-3xl font-bold">
                        Solution
                    </h2>

                    <p className="mt-4 leading-8 text-zinc-400">
                        {post.solution}
                    </p>
                </div>

                {/* Key Features */}

                <div className="mt-16">
                    <h2 className="text-3xl font-bold">
                        Key Features
                    </h2>

                    <ul className="mt-6 space-y-3 text-zinc-400">
                        {post.features.map((feature) => (
                            <li
                                key={feature}
                                className="flex items-start gap-3"
                            >
                                <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />

                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Results */}

                <div className="mt-16">
                    <h2 className="text-3xl font-bold">
                        Results
                    </h2>

                    <ul className="mt-6 space-y-3 text-zinc-400">
                        {post.results.map((result) => (
                            <li
                                key={result}
                                className="flex items-start gap-3"
                            >
                                <span className="mt-2 h-2 w-2 rounded-full bg-green-500" />

                                <span>{result}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Technologies */}

                <div className="mt-16">
                    <h2 className="text-3xl font-bold">
                        Technologies Used
                    </h2>

                    <div className="mt-6 flex flex-wrap gap-3">
                        {post.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Tags */}

                <div className="mt-16">
                    <h2 className="text-3xl font-bold">
                        Tags
                    </h2>

                    <div className="mt-6 flex flex-wrap gap-3">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Author */}

                <div className="mt-20 border-t border-white/10 pt-10">

                    <h3 className="text-xl font-semibold">
                        About the Author
                    </h3>

                    <p className="mt-4 leading-8 text-zinc-400">
                        Written by{" "}
                        <span className="font-medium text-white">
                            {post.author}
                        </span>
                        . Published on{" "}
                        <span className="text-white">
                            {post.publishedAt}
                        </span>

                        {post.updatedAt && (
                            <>
                                {" "}
                                • Updated on{" "}
                                <span className="text-white">
                                    {post.updatedAt}
                                </span>
                            </>
                        )}
                    </p>
                </div>

            </div>
        </section>
    );
}