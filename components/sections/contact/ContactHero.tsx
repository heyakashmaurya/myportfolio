import Container from "@/components/layout/Container";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Contact Me
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            Let's Build Something
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Incredible
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
            Looking for an AI Voice Agent, SaaS platform, business automation,
            or a modern web application? Let's discuss your idea and turn it
            into a scalable product.
          </p>

        </div>
      </Container>
    </section>
  );
}