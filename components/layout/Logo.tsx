

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link
            href="/"
            aria-label="HeyAkashMaurya - Home"
            className="group flex items-center gap-3"
        >
            {/* Logo Mark */}
            <div
                className="
                    relative h-10 w-10 shrink-0 overflow-hidden
                    rounded-full
                    border border-white/10
                    bg-white/[0.04]
                    shadow-lg shadow-black/20
                    transition-all duration-500
                    group-hover:scale-105
                    group-hover:border-orange-400/40
                    group-hover:shadow-orange-500/10
                "
            >
                <Image
                    src="/logos/logo1.png"
                    alt="HeyAkashMaurya"
                    fill
                    priority
                    sizes="40px"
                    className="
                        object-cover
                        transition-transform duration-500
                        group-hover:scale-110
                    "
                />

                {/* Orange highlight */}
                <span
                    aria-hidden
                    className="
                        pointer-events-none absolute
                        inset-0 rounded-full
                        ring-1 ring-inset ring-white/10
                    "
                />
            </div>

            {/* Brand */}
            <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1">
                    <span className="text-[15px] font-semibold tracking-[-0.02em] text-white">
                        HeyAkash
                    </span>

                    <span className="text-[15px] font-semibold tracking-[-0.02em] text-orange-400">
                        Maurya
                    </span>

                    <span className="ml-0.5 h-1 w-1 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                </div>

                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                    Full Stack AI Engineer
                </span>
            </div>
        </Link>
    );
}


// import Image from "next/image";
// import Link from "next/link";

// export default function Logo() {
//   return (
//     <Link
//       href="/"
//       className="group flex items-center gap-3"
//     >
//       {/* Logo */}
//       <div className="relative h-11 w-11 overflow-hidden rounded-full transition-all duration-500 group-hover:rotate-6 group-hover:scale-105">
//         <Image
//           src="/logos/logo1.png"
//           alt="HeyAkashMaurya Logo"
//           fill
//           priority
//           className="object-cover"
//         />
//       </div>

//       {/* Text */}
//       <div>
//         <h3 className="font-semibold tracking-tight">
//           HeyAkashMaurya
//         </h3>

//         <p className="text-xs text-zinc-400">
//           Full Stack AI Engineer
//         </p>
//       </div>
//     </Link>
//   );
// }
