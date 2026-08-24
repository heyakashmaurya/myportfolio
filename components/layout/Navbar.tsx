

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import Container from "./Container";
import Logo from "./Logo";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
    const pathname = usePathname();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(href);
    };

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-50 overflow-x-clip">
                <Container className="w-full max-w-full pt-5">
                    <motion.nav
                        initial={{
                            opacity: 0,
                            y: -20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                            ease: EASE,
                        }}
                        className={[
                            "relative mx-auto flex min-w-0 w-full items-center justify-between",
                            "rounded-full border px-3 py-3",
                            "transition-all duration-500",
                            scrolled
                                ? "border-white/10 bg-[#080809]/90 shadow-2xl shadow-black/30 backdrop-blur-2xl"
                                : "border-white/[0.07] bg-black/30 backdrop-blur-xl",
                        ].join(" ")}
                    >
                        {/* Orange Glow */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -inset-px -z-10 rounded-full opacity-40 blur-xl"
                            style={{
                                background:
                                    "linear-gradient(90deg, transparent, rgba(249,115,22,.18), transparent)",
                            }}
                        />

                        {/* Logo */}
                        {/* <Link
                            href="/"
                            className="relative z-10 flex min-w-0 shrink items-center pl-2"
                        >
                            <Logo />
                        </Link> */}

                        <div className="relative z-10 flex min-w-0 shrink items-center pl-2">
                            <Logo />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden min-w-0 items-center lg:flex">
                            <div className="flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.025] p-1">
                                {links.map((link) => {
                                    const active = isActive(link.href);

                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="relative rounded-full px-4 py-2 text-[13px] font-medium"
                                        >
                                            {active && (
                                                <motion.span
                                                    layoutId="navbar-active"
                                                    className="absolute inset-0 rounded-full bg-white/[0.08]"
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 400,
                                                        damping: 30,
                                                    }}
                                                />
                                            )}

                                            <span
                                                className={[
                                                    "relative z-10 transition-colors duration-200",
                                                    active
                                                        ? "text-white"
                                                        : "text-zinc-500 hover:text-white",
                                                ].join(" ")}
                                            >
                                                {link.label}
                                            </span>

                                            {active && (
                                                <motion.span
                                                    layoutId="navbar-dot"
                                                    className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-orange-400"
                                                />
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Desktop CTA */}
                        <Link
                            href="/contact"
                            className="group relative hidden shrink-0 items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-zinc-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/40 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 lg:flex"
                        >
                            <span className="relative z-10">
                                Let's Talk
                            </span>

                            <ArrowUpRight
                                size={16}
                                strokeWidth={2.5}
                                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />

                            <span
                                aria-hidden
                                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                            />
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            onClick={() =>
                                setMobileOpen((value) => !value)
                            }
                            aria-label={
                                mobileOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            aria-expanded={mobileOpen}
                            className="relative z-20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-orange-400/30 hover:bg-orange-500/10 lg:hidden"
                        >
                            <AnimatePresence
                                mode="wait"
                                initial={false}
                            >
                                <motion.span
                                    key={mobileOpen ? "close" : "menu"}
                                    initial={{
                                        opacity: 0,
                                        rotate: -20,
                                        scale: 0.8,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        rotate: 0,
                                        scale: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        rotate: 20,
                                        scale: 0.8,
                                    }}
                                    transition={{
                                        duration: 0.18,
                                    }}
                                >
                                    {mobileOpen ? (
                                        <X size={19} />
                                    ) : (
                                        <Menu size={19} />
                                    )}
                                </motion.span>
                            </AnimatePresence>
                        </button>
                    </motion.nav>

                    {/* Mobile Navigation */}
                    <AnimatePresence>
                        {mobileOpen && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: -8,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -8,
                                }}
                                transition={{
                                    duration: 0.25,
                                    ease: EASE,
                                }}
                                className="mt-3 w-full max-w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#09090b]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl lg:hidden"
                            >
                                <div className="min-w-0 space-y-1">
                                    {links.map((link, index) => {
                                        const active = isActive(link.href);

                                        return (
                                            <motion.div
                                                key={link.href}
                                                initial={{
                                                    opacity: 0,
                                                    x: -8,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay: index * 0.04,
                                                    duration: 0.25,
                                                }}
                                                className="min-w-0"
                                            >
                                                <Link
                                                    href={link.href}
                                                    className={[
                                                        "flex w-full min-w-0 items-center justify-between rounded-2xl px-4 py-3.5",
                                                        "text-sm font-medium transition-all duration-200",
                                                        active
                                                            ? "bg-white/[0.07] text-white"
                                                            : "text-zinc-500 hover:bg-white/[0.04] hover:text-white",
                                                    ].join(" ")}
                                                >
                                                    <span className="truncate">
                                                        {link.label}
                                                    </span>

                                                    {active && (
                                                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(249,115,22,.8)]" />
                                                    )}
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Mobile CTA */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 8,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.2,
                                        duration: 0.3,
                                    }}
                                    className="mt-3 w-full border-t border-white/[0.07] pt-3"
                                >
                                    <Link
                                        href="/contact"
                                        className="group relative flex w-full min-w-0 items-center justify-center gap-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/40 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60"
                                    >
                                        <span className="relative z-10">
                                            Let's Work Together
                                        </span>

                                        <ArrowUpRight
                                            size={17}
                                            className="relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />

                                        {/* Orange Shine */}
                                        <span
                                            aria-hidden
                                            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                                        />
                                    </Link>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Container>
            </header>

            {/* Page top spacing */}
            <div className="h-24" />
        </>
    );
}

