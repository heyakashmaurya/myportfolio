"use client";

import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import {
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa6";
import Logo from "./Logo";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative mt-10 overflow-hidden border-t border-white/10">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

                <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-violet-600/5 blur-[110px]" />
            </div>

            <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
                {/* Main footer */}
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            // className="inline-flex items-center gap-3"
                        >
                            <span className=" h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-sm font-bold text-blue-400">
                                <Logo/>
                            </span>

                            {/* <span className="text-lg font-semibold tracking-tight">
                                Akash Maurya
                            </span> */}
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
                            Full Stack AI Engineer building AI-powered SaaS
                            products, automation systems, and intelligent
                            digital experiences.
                        </p>

                        {/* Socials */}
                        <div className="mt-7 flex items-center gap-3">
                            <SocialLink
                                href="https://github.com/heyakashmaurya"
                                label="GitHub"
                            >
                                <FaGithub className="h-4 w-4" />
                            </SocialLink>

                            <SocialLink
                                href="https://linkedin.com/in/heyakashmaurya"
                                label="LinkedIn"
                            >
                                <FaLinkedinIn className="h-4 w-4" />
                            </SocialLink>

                            <SocialLink
                                href="https://instagram.com/heyakashmaurya"
                                label="Instagram"
                            >
                                <FaInstagram className="h-4 w-4" />
                            </SocialLink>

                            <SocialLink
                                href="mailto:akash45492@gmail.com"
                                label="Email"
                            >
                                <Mail className="h-4 w-4" />
                            </SocialLink>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-1 lg:justify-self-center">
                        <div>
                            <h3 className="text-sm font-semibold text-white">
                                Explore
                            </h3>

                            <ul className="mt-5 space-y-3">
                                <FooterLink href="/about">
                                    About
                                </FooterLink>

                                <FooterLink href="/services">
                                    Services
                                </FooterLink>

                                <FooterLink href="/projects">
                                    Projects
                                </FooterLink>

                                <FooterLink href="/contact">
                                    Contact
                                </FooterLink>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-white">
                                Expertise
                            </h3>

                            <ul className="mt-5 space-y-3">
                                <FooterLink href="/services">
                                    AI Engineering
                                </FooterLink>

                                <FooterLink href="/services">
                                    Full Stack
                                </FooterLink>

                                <FooterLink href="/services">
                                    SaaS
                                </FooterLink>

                                <FooterLink href="/services">
                                    Automation
                                </FooterLink>
                            </ul>
                        </div>

                        <div className="hidden sm:block">
                            <h3 className="text-sm font-semibold text-white">
                                Connect
                            </h3>

                            <ul className="mt-5 space-y-3">
                                <FooterLink href="/contact">
                                    Hire Me
                                </FooterLink>

                                <FooterLink href="/contact">
                                    Let's Talk
                                </FooterLink>

                                <FooterLink href="/projects">
                                    My Work
                                </FooterLink>
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="lg:justify-self-end">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                            <p className="text-sm font-medium text-blue-400">
                                Have a project in mind?
                            </p>

                            <h3 className="mt-2 text-xl font-semibold">
                                Let's build something great.
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-zinc-400">
                                I’m available for AI, SaaS, automation, and
                                full-stack development projects.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)]"
                            >
                                Start a conversation
                                <Mail className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-12 h-px bg-white/10" />

                {/* Bottom */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-zinc-500">
                        © {year} Akash Maurya. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <span className="text-xs text-zinc-600">
                            Built with Next.js & AI
                        </span>

                        <Link
                            href="#top"
                            aria-label="Back to top"
                            className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
                        >
                            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <li>
            <Link
                href={href}
                className="text-sm text-zinc-500 transition-colors duration-200 hover:text-white"
            >
                {children}
            </Link>
        </li>
    );
}

function SocialLink({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            aria-label={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
        >
            {children}
        </Link>
    );
}

// export default function Footer() {
//   return (
//     <footer className="border-t border-white/10 py-10">
//       <div className="mx-auto max-w-7xl px-6">
//         <p className="text-center text-sm text-zinc-400">
//           © {new Date().getFullYear()} Akash Maurya. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }