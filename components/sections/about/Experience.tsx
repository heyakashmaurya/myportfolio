import Container from "@/components/layout/Container";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="py-24">
      <Container>

        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold">
            My Journey
          </h2>

          <p className="mt-4 text-zinc-400">
            A quick overview of my growth as a developer.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">

          <div className="absolute left-4 top-0 h-full w-px bg-white/10" />

          <div className="space-y-12">

            {experiences.map((item) => (
              <div
                key={item.title}
                className="relative flex gap-8"
              >
                <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
                  ✓
                </div>

                <div>
                  <span className="text-sm text-blue-400">
                    {item.year}
                  </span>

                  <h3 className="mt-2 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}