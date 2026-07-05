import Link from "next/link";

import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section className="py-28">
      <Container>

        <div className="rounded-[32px] border border-blue-500/20 bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-cyan-500/10 px-10 py-20 text-center">

          <h2 className="text-5xl font-bold">
            Let's Build Something Amazing Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Whether you need an AI Voice Agent, SaaS platform, or business automation solution, I'd love to help turn your ideas into reality.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
          >
            Start Your Project
          </Link>

        </div>

      </Container>
    </section>
  );
}