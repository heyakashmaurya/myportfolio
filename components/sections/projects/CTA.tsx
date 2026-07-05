import Link from "next/link";
import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section className="py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-cyan-500/10 px-10 py-20 text-center">

          {/* Glow background */}
          <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

          <div className="relative z-10">

            <h2 className="text-5xl font-bold">
              Have a Project in Mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              Let’s build something powerful together — AI Voice Agents,
              SaaS platforms, or automation systems that scale your business.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
            >
              Start a Project
            </Link>

          </div>

        </div>
      </Container>
    </section>
  );
}