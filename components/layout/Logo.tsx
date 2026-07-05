import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
    >
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-blue-600
          via-violet-600
          to-cyan-500
          text-lg
          font-bold
          text-white
          transition-all
          duration-500
          group-hover:rotate-6
          group-hover:scale-105
        "
      >
        A
      </div>

      <div>
        <h3 className="font-semibold tracking-tight">
          Akash Maurya
        </h3>

        <p className="text-xs text-zinc-400">
          Full Stack AI Engineer
        </p>
      </div>
    </Link>
  );
}