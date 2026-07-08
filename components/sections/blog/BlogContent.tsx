
import type { BlogPost } from "@/data/blog";

interface Props {
    post: BlogPost;
}

export default function BlogContent({ post }: Props) {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-3xl px-5 space-y-12">

                {/* LONG INTRO */}
                <div className="space-y-6 text-lg leading-8 text-zinc-300">
                    <p>{post.longDescription}</p>
                    <p>{post.overview}</p>
                </div>

                {/* DYNAMIC CONTENT (SEO STRUCTURE) */}
                {post.content.sections.map((section) => (
                    <section
                        key={section.heading}
                        className="mt-16 space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-white">
                            {section.heading}
                        </h2>

                        {section.paragraphs?.map((paragraph) => (
                            <p
                                key={paragraph}
                                className="leading-8 text-zinc-400"
                            >
                                {paragraph}
                            </p>
                        ))}

                        {section.list && (
                            <ul className="list-disc pl-6 space-y-3 text-zinc-400">
                                {section.list.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        )} 

                        {section.subsections?.map((sub) => (
                            <div
                                key={sub.heading}
                                className="mt-10 space-y-5"
                            >
                                <h3 className="text-2xl font-semibold text-white">
                                    {sub.heading}
                                </h3>

                                {sub.paragraphs?.map((paragraph) => (
                                    <p
                                        key={paragraph}
                                        className="leading-8 text-zinc-400"
                                    >
                                        {paragraph}
                                    </p>
                                ))}

                                {sub.list && (
                                    <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                                        {sub.list.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </section>
                ))}
                {/* {post.content?.sections?.map((section, index) => {
                    if (section.type === "h2") {
                        return (
                            <h2
                                key={index}
                                className="text-3xl font-bold text-white mt-10"
                            >
                                {section.text}
                            </h2>
                        );
                    }

                    if (section.type === "h3") {
                        return (
                            <h3
                                key={index}
                                className="text-2xl font-semibold text-white mt-6"
                            >
                                {section.text}
                            </h3>
                        );
                    }

                    if (section.type === "paragraph") {
                        return (
                            <p
                                key={index}
                                className="text-lg leading-8 text-zinc-400"
                            >
                                {section.text}
                            </p>
                        );
                    }

                    if (section.type === "list") {
                        return (
                            <ul
                                key={index}
                                className="space-y-3 list-disc pl-5 text-zinc-400"
                            >
                                {section.items?.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        );
                    }

                    return null;
                })} */}

                {/* PROBLEM */}
                <div>
                    <h2 className="text-3xl font-bold text-white">Problem</h2>
                    <p className="mt-4 text-zinc-400 leading-8">{post.problem}</p>
                </div>

                {/* SOLUTION */}
                <div>
                    <h2 className="text-3xl font-bold text-white">Solution</h2>
                    <p className="mt-4 text-zinc-400 leading-8">{post.solution}</p>
                </div>

                {/* FEATURES */}
                <div>
                    <h2 className="text-3xl font-bold text-white">Key Features</h2>
                    <ul className="mt-6 space-y-3 text-zinc-400">
                        {post.features.map((feature) => (
                            <li key={feature} className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RESULTS */}
                <div>
                    <h2 className="text-3xl font-bold text-white">Results</h2>
                    <ul className="mt-6 space-y-3 text-zinc-400">
                        {post.results.map((result) => (
                            <li key={result} className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-green-500" />
                                {result}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* TECHNOLOGIES */}
                <div>
                    <h2 className="text-3xl font-bold text-white">
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

                {/* TAGS */}
                <div>
                    <h2 className="text-3xl font-bold text-white">Tags</h2>

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

                {/* AUTHOR */}
                <div className="border-t border-white/10 pt-10">
                    <h3 className="text-xl font-semibold text-white">
                        About the Author
                    </h3>

                    <p className="mt-4 text-zinc-400 leading-8">
                        Written by{" "}
                        <span className="text-white font-medium">{post.author}</span>.
                        <br />
                        Published on{" "}
                        <span className="text-white">{post.publishedAt}</span>

                        {post.updatedAt && (
                            <>
                                {" "}• Updated on{" "}
                                <span className="text-white">{post.updatedAt}</span>
                            </>
                        )}
                    </p>
                </div>

            </div>
        </section>
    );
}




// import type { BlogPost } from "@/data/blog";

// interface Props {
//     post: BlogPost;
// }

// export default function BlogContent({ post }: Props) {
//     return (
//         <section className="py-20">
//             <div className="mx-auto max-w-3xl px-5">

//                 {/* Overview */}

//                 <div className="space-y-6 text-lg leading-8 text-zinc-300">
//                     <p>{post.longDescription}</p>

//                     <p>{post.overview}</p>
//                 </div>

//                 {/* Problem */}

//                 <div className="mt-16">
//                     <h2 className="text-3xl font-bold">
//                         Problem
//                     </h2>

//                     <p className="mt-4 leading-8 text-zinc-400">
//                         {post.problem}
//                     </p>
//                 </div>

//                 {/* Solution */}

//                 <div className="mt-16">
//                     <h2 className="text-3xl font-bold">
//                         Solution
//                     </h2>

//                     <p className="mt-4 leading-8 text-zinc-400">
//                         {post.solution}
//                     </p>
//                 </div>

//                 {/* Key Features */}

//                 <div className="mt-16">
//                     <h2 className="text-3xl font-bold">
//                         Key Features
//                     </h2>

//                     <ul className="mt-6 space-y-3 text-zinc-400">
//                         {post.features.map((feature) => (
//                             <li
//                                 key={feature}
//                                 className="flex items-start gap-3"
//                             >
//                                 <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />

//                                 <span>{feature}</span>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Results */}

//                 <div className="mt-16">
//                     <h2 className="text-3xl font-bold">
//                         Results
//                     </h2>

//                     <ul className="mt-6 space-y-3 text-zinc-400">
//                         {post.results.map((result) => (
//                             <li
//                                 key={result}
//                                 className="flex items-start gap-3"
//                             >
//                                 <span className="mt-2 h-2 w-2 rounded-full bg-green-500" />

//                                 <span>{result}</span>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Technologies */}

//                 <div className="mt-16">
//                     <h2 className="text-3xl font-bold">
//                         Technologies Used
//                     </h2>

//                     <div className="mt-6 flex flex-wrap gap-3">
//                         {post.technologies.map((tech) => (
//                             <span
//                                 key={tech}
//                                 className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
//                             >
//                                 {tech}
//                             </span>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Tags */}

//                 <div className="mt-16">
//                     <h2 className="text-3xl font-bold">
//                         Tags
//                     </h2>

//                     <div className="mt-6 flex flex-wrap gap-3">
//                         {post.tags.map((tag) => (
//                             <span
//                                 key={tag}
//                                 className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400"
//                             >
//                                 #{tag}
//                             </span>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Author */}

//                 <div className="mt-20 border-t border-white/10 pt-10">

//                     <h3 className="text-xl font-semibold">
//                         About the Author
//                     </h3>

//                     <p className="mt-4 leading-8 text-zinc-400">
//                         Written by{" "}
//                         <span className="font-medium text-white">
//                             {post.author}
//                         </span>
//                         . Published on{" "}
//                         <span className="text-white">
//                             {post.publishedAt}
//                         </span>

//                         {post.updatedAt && (
//                             <>
//                                 {" "}
//                                 • Updated on{" "}
//                                 <span className="text-white">
//                                     {post.updatedAt}
//                                 </span>
//                             </>
//                         )}
//                     </p>
//                 </div>

//             </div>
//         </section>
//     );
// }