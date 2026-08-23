

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { navigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <nav
            aria-label="Main navigation"
            className="hidden items-center rounded-full border border-white/[0.06] bg-white/[0.025] p-1 lg:flex"
        >
            {navigation.map((item) => {
                const active =
                    item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="group relative rounded-full px-4 py-2.5 text-[13px] font-medium"
                    >
                        {/* Active background */}
                        {active && (
                            <motion.span
                                layoutId="nav-active"
                                transition={{
                                    duration: 0.35,
                                    ease: EASE,
                                }}
                                className="absolute inset-0 rounded-full bg-white/[0.08]"
                            />
                        )}

                        {/* Hover background */}
                        {!active && (
                            <span
                                className="
                                    absolute inset-0 rounded-full
                                    bg-white/[0.04]
                                    opacity-0
                                    transition-opacity duration-300
                                    group-hover:opacity-100
                                "
                            />
                        )}

                        {/* Text */}
                        <span
                            className={cn(
                                "relative z-10 transition-colors duration-300",
                                active
                                    ? "text-white"
                                    : "text-zinc-500 group-hover:text-zinc-100"
                            )}
                        >
                            {item.title}
                        </span>

                        {/* Orange active dot */}
                        {active && (
                            <motion.span
                                layoutId="nav-active-dot"
                                className="
                                    absolute bottom-1 left-1/2
                                    h-1 w-1
                                    -translate-x-1/2
                                    rounded-full
                                    bg-orange-400
                                    shadow-[0_0_8px_rgba(249,115,22,0.8)]
                                "
                            />
                        )}
                    </Link>
                );
            })}
        </nav>
    );
}



// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import { navigation } from "@/constants/navigation";
// import { cn } from "@/lib/utils";

// export default function NavLinks() {
//   const pathname = usePathname();

//   return (
//     <nav className="hidden items-center gap-8 lg:flex">
//       {navigation.map((item) => {
//         const active = pathname === item.href;

//         return (
//           <Link
//             key={item.href}
//             href={item.href}
//             className={cn(
//               "text-sm font-medium transition-colors duration-200",
//               active
//                 ? "text-white"
//                 : "text-zinc-400 hover:text-white"
//             )}
//           >
//             {item.title}
//           </Link>
//         );
//       })}
//     </nav>
//   );
// }