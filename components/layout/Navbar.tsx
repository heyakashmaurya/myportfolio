"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Container from "./Container";
import Logo from "./Logo";

interface NavLinksProps {
    className?: string;
    onClick?: () => void;
    mobile?: boolean;
}

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function NavLinks({ className = "", onClick, mobile = false }: NavLinksProps) {
    const pathname = usePathname();

    return (
        <nav className={className}>
            {links.map((link, i) => {
                const isActive =
                    link.href === "/"
                        ? pathname === "/"
                        : pathname?.startsWith(link.href);

                return mobile ? (
                    <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.04 * i, ease: EASE }}
                    >
                        <Link
                            href={link.href}
                            onClick={onClick}
                            className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors duration-200 ${isActive
                                ? "bg-white/[0.06] text-white"
                                : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                                }`}
                        >
                            {link.label}
                            {isActive && (
                                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" />
                            )}
                        </Link>
                    </motion.div>
                ) : (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={onClick}
                        className="group relative px-1 py-2 text-[13.5px] font-medium tracking-wide text-zinc-400 transition-colors duration-300 hover:text-white"
                    >
                        <span className={isActive ? "text-white" : ""}>{link.label}</span>

                        {isActive ? (
                            <motion.span
                                layoutId="active-pill"
                                className="absolute -bottom-[15px] left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-400"
                                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                            />
                        ) : (
                            <span className="absolute -bottom-[15px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0" />
                        )}
                    </Link>
                );
            })}
        </nav>
    );
}

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 12);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <header className="sticky top-0 z-50 px-0 pt-5">
            <Container>
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="relative"
                >
                    {/* Signature: slow-drifting aurora hairline tracing the pill's edge */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-px rounded-[26px] opacity-60 motion-reduce:hidden"
                        style={{
                            background:
                                "conic-gradient(from var(--angle, 0deg), transparent 0%, rgba(129,140,248,0.55) 12%, transparent 24%, transparent 100%)",
                            animation: "spin-border 7s linear infinite",
                        }}
                    />

                    <div
                        className={`relative overflow-hidden rounded-3xl border border-white/[0.08] bg-black/70 shadow-2xl shadow-indigo-950/40 backdrop-blur-2xl backdrop-saturate-150 transition-[height,box-shadow] duration-500 ease-out ${scrolled ? "shadow-indigo-500/10" : ""
                            }`}
                    >
                        {/* hairline top sheen */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                        {/* Desktop / top row */}
                        <div
                            className={`flex items-center justify-between px-6 transition-[height] duration-500 ease-out lg:px-8 ${scrolled ? "h-[68px]" : "h-20"
                                }`}
                        >
                            <Logo />

                            <NavLinks className="hidden items-center gap-9 lg:flex" />

                            {/* CTA */}
                            <div className="hidden lg:block">
                                <Link
                                    href="/contact"
                                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold !text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                                >
                                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                    <span className="relative !text-white">Book a Call</span>
                                    <ArrowRight
                                        size={16}
                                        strokeWidth={2.5}
                                        className="relative !text-white transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </Link>
                            </div>

                            {/* Mobile Toggle */}
                            <button
                                onClick={() => setMobileOpen((v) => !v)}
                                aria-label="Toggle menu"
                                aria-expanded={mobileOpen}
                                className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-indigo-400/40 hover:bg-indigo-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 lg:hidden"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.span
                                        key={mobileOpen ? "close" : "open"}
                                        initial={{ rotate: -45, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 45, opacity: 0 }}
                                        transition={{ duration: 0.2, ease: EASE }}
                                        className="flex items-center justify-center"
                                    >
                                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                                    </motion.span>
                                </AnimatePresence>
                            </button>
                        </div>

                        {/* Mobile Menu */}
                        <AnimatePresence>
                            {mobileOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.35, ease: EASE }}
                                    className="border-t border-white/[0.08] bg-black/80 backdrop-blur-2xl lg:hidden"
                                >
                                    <div className="space-y-6 p-5">
                                        <NavLinks
                                            className="flex flex-col gap-1"
                                            onClick={() => setMobileOpen(false)}
                                            mobile
                                        />

                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.35, delay: 0.28, ease: EASE }}
                                        >
                                            <Link
                                                href="/contact"
                                                onClick={() => setMobileOpen(false)}
                                                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 px-6 py-3.5 text-center font-semibold !text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                                            >
                                                <span className="!text-white">Book a Call</span>
                                                <ArrowRight
                                                    size={16}
                                                    strokeWidth={2.5}
                                                    className="!text-white transition-transform duration-300 group-hover:translate-x-1"
                                                />
                                            </Link>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </Container>

            <style jsx global>{`
                @property --angle {
                    syntax: "<angle>";
                    initial-value: 0deg;
                    inherits: false;
                }
                @keyframes spin-border {
                    to {
                        --angle: 360deg;
                    }
                }
            `}</style>
        </header>
    );
}
