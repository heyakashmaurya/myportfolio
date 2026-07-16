
import type { BlogPost, BlogTable, BlogFAQ } from "@/data/blog";
import BlogCTA from "./BlogCTA";

interface Props {
    post: BlogPost;
}

/* ---------------------------------------------------------- */
/* New structured content blocks                              */
/* ---------------------------------------------------------- */

function SectionTable({ table }: { table: BlogTable }) {
    return (
        <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead>
                    <tr className="bg-white/5">
                        {table.headers?.map((header) => (
                            <th
                                key={header}
                                className="whitespace-nowrap border-b border-white/10 px-5 py-3 font-semibold text-white"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {table.rows?.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className="px-5 py-3 align-top leading-6 text-zinc-400"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function SectionChecklist({ items }: { items: string[] }) {
    return (
        <ul className="space-y-3">
            {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-blue-500/15 text-blue-400">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3"
                        >
                            <path d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <span className="leading-7 text-zinc-300">{item}</span>
                </li>
            ))}
        </ul>
    );
}

function SectionTip({ tip }: { tip: string }) {
    return (
        <div className="flex gap-4 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 flex-none text-blue-400"
            >
                <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.5.4.8 1 .8 1.7V16h5.6v-.5c0-.7.3-1.3.8-1.7A6 6 0 0 0 12 3Z" />
            </svg>
            <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    Pro Tip
                </p>
                <p className="mt-2 leading-7 text-zinc-300">{tip}</p>
            </div>
        </div>
    );
}

function SectionFaqs({ faqs }: { faqs: BlogFAQ[] }) {
    return (
        <div className="space-y-3">
            {faqs.map((faq) => (
                <details
                    key={faq.q}
                    className="group rounded-xl border border-white/10 bg-white/5 p-5"
                >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white [&::-webkit-details-marker]:hidden">
                        {faq.q}
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 flex-none text-zinc-500 transition-transform duration-200 group-open:rotate-180"
                        >
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </summary>
                    <p className="mt-3 leading-7 text-zinc-400">{faq.a}</p>
                </details>
            ))}
        </div>
    );
}

/* ---------------------------------------------------------- */
/* Main component                                              */
/* ---------------------------------------------------------- */

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

                        {section.table && <SectionTable table={section.table} />}

                        {section.checklist && (
                            <SectionChecklist items={section.checklist} />
                        )}

                        {section.tip && <SectionTip tip={section.tip} />}

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

                                {sub.table && <SectionTable table={sub.table} />}

                                {sub.checklist && (
                                    <SectionChecklist items={sub.checklist} />
                                )}

                                {sub.tip && <SectionTip tip={sub.tip} />}
                            </div>
                        ))}

                        {/* FAQs render last within a section — most sections
                            that use this are a standalone "FAQs" section with
                            no paragraphs/list of their own. */}
                        {section.faqs && <SectionFaqs faqs={section.faqs} />}
                    </section>
                ))}

                {/* PROBLEM */}
                {post.problem && (
                    <div>
                        <h2 className="text-3xl font-bold text-white">Problem</h2>
                        <p className="mt-4 text-zinc-400 leading-8">{post.problem}</p>
                    </div>
                )}

                {/* SOLUTION */}
                {post.solution && (
                    <div>
                        <h2 className="text-3xl font-bold text-white">Solution</h2>
                        <p className="mt-4 text-zinc-400 leading-8">{post.solution}</p>
                    </div>
                )}

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
                        {post.technologies?.map((tech) => (
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

                {/* CTA */}
                {/* {post.cta && (
                    <BlogCTA
                        title={post.cta.title}
                        description={post.cta.description}
                        buttonText={post.cta.buttonText}
                        buttonLink={post.cta.buttonLink}
                        secondaryButtonText={post.cta.secondaryButtonText}
                        secondaryButtonLink={post.cta.secondaryButtonLink}
                    />
                )} */}

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

