"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors duration-200",
              active
                ? "text-white"
                : "text-zinc-400 hover:text-white"
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}