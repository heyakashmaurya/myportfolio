"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

const solutions = [
    {
        number: "01",
        title: "Identify the Problem",
        description:
            "I first understand the business workflow, bottlenecks, repetitive tasks, and opportunities where software or AI can create measurable improvements.",
    },
    {
        number: "02",
        title: "Design the Solution",
        description:
            "I turn the business requirement into a practical product architecture covering the user experience, backend systems, APIs, databases, and AI workflows.",
    },
    {
        number: "03",
        title: "Build the Product",
        description:
            "I develop the complete solution using modern full-stack technologies, AI integrations, automation systems, and scalable engineering practices.",
    },
    {
        number: "04",
        title: "Deploy & Improve",
        description:
            "After deployment, the product can be monitored, improved, and expanded as the business grows and new requirements appear.",
    },
];

export default function HowIHelp() {
    return (
        <section className="relative py-28">
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.04] blur-[140px]" />
            </div>

            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                        How I Work
                    </span>

                    <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
                        From Business Problem
                        <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            to Working Product
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        I don't just build software. I focus on understanding
                        the problem first and then create technology around
                        the outcome the business needs.
                    </p>
                </motion.div>

                {/* Process */}
                <div className="mx-auto mt-20 max-w-5xl">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={item.number}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className="group grid gap-6 border-t border-white/10 py-10 md:grid-cols-[100px_280px_1fr] md:items-start"
                        >
                            {/* Number */}
                            <div className="font-mono text-sm text-blue-400">
                                {item.number}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-semibold text-white">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="max-w-xl leading-7 text-zinc-400">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}

                    <div className="border-t border-white/10" />
                </div>

                {/* Bottom statement */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mt-16 max-w-3xl text-center"
                >
                    <p className="text-xl leading-9 text-zinc-300">
                        The result is technology that is built around the
                        business — not a business forced to adapt around the
                        technology.
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}


// "use client";

// import { motion } from "framer-motion";
// import Container from "@/components/layout/Container";
// import { services } from "@/data/services";
// import { iconMap } from "@/data/services";



// export default function Services() {
//     return (
//         <section className="py-28">
//             <Container>
//                 <div className="mx-auto max-w-3xl text-center">
//                     <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
//                         Services
//                     </span>

//                     <h2 className="mt-6 text-4xl font-bold md:text-5xl">
//                         Helping Businesses Build
//                         <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
//                             {" "}AI-Powered Products
//                         </span>
//                     </h2>

//                     <p className="mt-6 text-lg text-zinc-400">
//                         I design, develop, and deploy modern AI applications that automate
//                         business processes and create exceptional user experiences.
//                     </p>
//                 </div>

//                 <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//                     {services.map((service, index) => {
//                         // const Icon = service.icon;


//                         const Icon = iconMap[service.icon as keyof typeof iconMap];

//                         return (
//                             <motion.div
//                                 key={service.title}
//                                 initial={{ opacity: 0, y: 40 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{
//                                     duration: 0.5,
//                                     delay: index * 0.08,
//                                 }}
//                                 className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.05]"
//                             >
//                                 <div className="inline-flex rounded-2xl bg-blue-500/10 p-4 text-blue-400 transition group-hover:scale-110">
//                                     {Icon && <Icon size={30} />}
//                                 </div>

//                                 <h3 className="mt-8 text-2xl font-semibold">
//                                     {service.title}
//                                 </h3>

//                                 <p className="mt-4 leading-7 text-zinc-400">
//                                     {service.description}
//                                 </p>
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </Container>
//         </section>
//     );
// }