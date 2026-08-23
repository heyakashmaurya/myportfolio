
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
        document.body.style.overflow = mobileOpen ? "hidden" : "";

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
            <header className="fixed inset-x-0 top-0 z-50">
                <Container className="pt-5">
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
                            "relative mx-auto flex items-center justify-between",
                            "rounded-full border px-3 py-3",
                            "transition-all duration-500",
                            scrolled
                                ? "border-white/10 bg-[#080809]/90 shadow-2xl shadow-black/30 backdrop-blur-2xl"
                                : "border-white/[0.07] bg-black/30 backdrop-blur-xl",
                        ].join(" ")}
                    >
                        {/* Subtle orange glow */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -inset-px -z-10 rounded-full opacity-40 blur-xl"
                            style={{
                                background:
                                    "linear-gradient(90deg, transparent, rgba(249,115,22,.18), transparent)",
                            }}
                        />

                        {/* Logo */}
                        <Link
                            href="/"
                            className="relative z-10 flex shrink-0 items-center pl-2"
                        >
                            <Logo />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden items-center lg:flex">
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
                        {/* <Link
                            href="/contact"
                            className="group hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/20 lg:flex"
                        >
                            <span>Let's Talk</span>

                            <ArrowUpRight
                                size={16}
                                strokeWidth={2.5}
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Link> */}

                        <Link
                            href="/contact"
                            className="group relative hidden items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-zinc-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/40 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 lg:flex"
                        >
                            <span className="relative z-10">Let's Talk</span>

                            <ArrowUpRight
                                size={16}
                                strokeWidth={2.5}
                                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />

                            {/* Orange shine */}
                            <span
                                aria-hidden
                                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                            />
                        </Link>

                        {/* Mobile Button */}
                        <button
                            type="button"
                            onClick={() => setMobileOpen((value) => !value)}
                            aria-label={
                                mobileOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            aria-expanded={mobileOpen}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-orange-400/30 hover:bg-orange-500/10 lg:hidden"
                        >
                            <AnimatePresence mode="wait" initial={false}>
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
                                    y: -10,
                                    scale: 0.98,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -10,
                                    scale: 0.98,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: EASE,
                                }}
                                className="mt-3 overflow-hidden rounded-[28px] border border-white/10 bg-[#09090b]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl lg:hidden"
                            >
                                <div className="space-y-1">
                                    {links.map((link, index) => {
                                        const active = isActive(link.href);

                                        return (
                                            <motion.div
                                                key={link.href}
                                                initial={{
                                                    opacity: 0,
                                                    x: -10,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay: index * 0.04,
                                                    duration: 0.3,
                                                }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    className={[
                                                        "flex items-center justify-between rounded-2xl px-4 py-3.5",
                                                        "text-sm font-medium transition-all duration-200",
                                                        active
                                                            ? "bg-white/[0.07] text-white"
                                                            : "text-zinc-500 hover:bg-white/[0.04] hover:text-white",
                                                    ].join(" ")}
                                                >
                                                    <span>{link.label}</span>

                                                    {active && (
                                                        <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(249,115,22,.8)]" />
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
                                        y: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.25,
                                        duration: 0.35,
                                    }}
                                    className="mt-3 border-t border-white/[0.07] pt-3"
                                >
                                    {/* <Link
                                        href="/contact"
                                        className="group flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-orange-500 hover:text-white"
                                    >
                                        Let's Work Together

                                        <ArrowUpRight
                                            size={17}
                                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </Link> */}

                                    <Link
                                        href="/contact"
                                        className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/40 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60"
                                    >
                                        <span className="relative z-10">Let's Work Together</span>

                                        <ArrowUpRight
                                            size={17}
                                            className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />

                                        {/* Orange shine effect */}
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


// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Menu, X, ArrowRight } from "lucide-react";
// import Container from "./Container";
// import Logo from "./Logo";

// interface NavLinksProps {
//     className?: string;
//     onClick?: () => void;
//     mobile?: boolean;
// }

// const links = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/projects", label: "Projects" },
//     { href: "/services", label: "Services" },
//     { href: "/blog", label: "Blog" },
//     { href: "/contact", label: "Contact" },
// ];

// const EASE = [0.22, 1, 0.36, 1] as const;

// function NavLinks({ className = "", onClick, mobile = false }: NavLinksProps) {
//     const pathname = usePathname();

//     return (
//         <nav className={className}>
//             {links.map((link, i) => {
//                 const isActive =
//                     link.href === "/"
//                         ? pathname === "/"
//                         : pathname?.startsWith(link.href);

//                 return mobile ? (
//                     <motion.div
//                         key={link.href}
//                         initial={{ opacity: 0, x: -12 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.35, delay: 0.04 * i, ease: EASE }}
//                     >
//                         <Link
//                             href={link.href}
//                             onClick={onClick}
//                             className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors duration-200 ${isActive
//                                 ? "bg-white/[0.06] text-white"
//                                 : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
//                                 }`}
//                         >
//                             {link.label}
//                             {isActive && (
//                                 <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" />
//                             )}
//                         </Link>
//                     </motion.div>
//                 ) : (
//                     <Link
//                         key={link.href}
//                         href={link.href}
//                         onClick={onClick}
//                         className="group relative px-1 py-2 text-[13.5px] font-medium tracking-wide text-zinc-400 transition-colors duration-300 hover:text-white"
//                     >
//                         <span className={isActive ? "text-white" : ""}>{link.label}</span>

//                         {isActive ? (
//                             <motion.span
//                                 layoutId="active-pill"
//                                 className="absolute -bottom-[15px] left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-400"
//                                 transition={{ type: "spring", stiffness: 380, damping: 32 }}
//                             />
//                         ) : (
//                             <span className="absolute -bottom-[15px] left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300 transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0" />
//                         )}
//                     </Link>
//                 );
//             })}
//         </nav>
//     );
// }

// export default function Navbar() {
//     const [mobileOpen, setMobileOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         let ticking = false;
//         const onScroll = () => {
//             if (!ticking) {
//                 window.requestAnimationFrame(() => {
//                     setScrolled(window.scrollY > 12);
//                     ticking = false;
//                 });
//                 ticking = true;
//             }
//         };
//         window.addEventListener("scroll", onScroll, { passive: true });
//         onScroll();
//         return () => window.removeEventListener("scroll", onScroll);
//     }, []);

//     useEffect(() => {
//         document.body.style.overflow = mobileOpen ? "hidden" : "";
//         return () => {
//             document.body.style.overflow = "";
//         };
//     }, [mobileOpen]);

//     return (
//         <header className="sticky top-0 z-50 px-0 pt-5">
//             <Container>
//                 <motion.div
//                     initial={{ y: -30, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.6, ease: EASE }}
//                     className="relative"
//                 >
//                     {/* Signature: slow-drifting aurora hairline tracing the pill's edge */}
//                     <div
//                         aria-hidden
//                         className="pointer-events-none absolute -inset-px rounded-[26px] opacity-60 motion-reduce:hidden"
//                         style={{
//                             background:
//                                 "conic-gradient(from var(--angle, 0deg), transparent 0%, rgba(129,140,248,0.55) 12%, transparent 24%, transparent 100%)",
//                             animation: "spin-border 7s linear infinite",
//                         }}
//                     />

//                     <div
//                         className={`relative overflow-hidden rounded-3xl border border-white/[0.08] bg-black/70 shadow-2xl shadow-indigo-950/40 backdrop-blur-2xl backdrop-saturate-150 transition-[height,box-shadow] duration-500 ease-out ${scrolled ? "shadow-indigo-500/10" : ""
//                             }`}
//                     >
//                         {/* hairline top sheen */}
//                         <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

//                         {/* Desktop / top row */}
//                         <div
//                             className={`flex items-center justify-between px-6 transition-[height] duration-500 ease-out lg:px-8 ${scrolled ? "h-[68px]" : "h-20"
//                                 }`}
//                         >
//                             <Logo />

//                             <NavLinks className="hidden items-center gap-9 lg:flex" />

//                             {/* CTA */}
//                             <div className="hidden lg:block">
//                                 <Link
//                                     href="/contact"
//                                     className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold !text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
//                                 >
//                                     <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
//                                     <span className="relative !text-white">Book a Call</span>
//                                     <ArrowRight
//                                         size={16}
//                                         strokeWidth={2.5}
//                                         className="relative !text-white transition-transform duration-300 group-hover:translate-x-1"
//                                     />
//                                 </Link>
//                             </div>

//                             {/* Mobile Toggle */}
//                             <button
//                                 onClick={() => setMobileOpen((v) => !v)}
//                                 aria-label="Toggle menu"
//                                 aria-expanded={mobileOpen}
//                                 className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-indigo-400/40 hover:bg-indigo-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 lg:hidden"
//                             >
//                                 <AnimatePresence mode="wait" initial={false}>
//                                     <motion.span
//                                         key={mobileOpen ? "close" : "open"}
//                                         initial={{ rotate: -45, opacity: 0 }}
//                                         animate={{ rotate: 0, opacity: 1 }}
//                                         exit={{ rotate: 45, opacity: 0 }}
//                                         transition={{ duration: 0.2, ease: EASE }}
//                                         className="flex items-center justify-center"
//                                     >
//                                         {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//                                     </motion.span>
//                                 </AnimatePresence>
//                             </button>
//                         </div>

//                         {/* Mobile Menu */}
//                         <AnimatePresence>
//                             {mobileOpen && (
//                                 <motion.div
//                                     initial={{ height: 0, opacity: 0 }}
//                                     animate={{ height: "auto", opacity: 1 }}
//                                     exit={{ height: 0, opacity: 0 }}
//                                     transition={{ duration: 0.35, ease: EASE }}
//                                     className="border-t border-white/[0.08] bg-black/80 backdrop-blur-2xl lg:hidden"
//                                 >
//                                     <div className="space-y-6 p-5">
//                                         <NavLinks
//                                             className="flex flex-col gap-1"
//                                             onClick={() => setMobileOpen(false)}
//                                             mobile
//                                         />

//                                         <motion.div
//                                             initial={{ opacity: 0, y: 10 }}
//                                             animate={{ opacity: 1, y: 0 }}
//                                             transition={{ duration: 0.35, delay: 0.28, ease: EASE }}
//                                         >
//                                             <Link
//                                                 href="/contact"
//                                                 onClick={() => setMobileOpen(false)}
//                                                 className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 px-6 py-3.5 text-center font-semibold !text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
//                                             >
//                                                 <span className="!text-white">Book a Call</span>
//                                                 <ArrowRight
//                                                     size={16}
//                                                     strokeWidth={2.5}
//                                                     className="!text-white transition-transform duration-300 group-hover:translate-x-1"
//                                                 />
//                                             </Link>
//                                         </motion.div>
//                                     </div>
//                                 </motion.div>
//                             )}
//                         </AnimatePresence>
//                     </div>
//                 </motion.div>
//             </Container>

//             <style jsx global>{`
//                 @property --angle {
//                     syntax: "<angle>";
//                     initial-value: 0deg;
//                     inherits: false;
//                 }
//                 @keyframes spin-border {
//                     to {
//                         --angle: 360deg;
//                     }
//                 }
//             `}</style>
//         </header>
//     );
// }
