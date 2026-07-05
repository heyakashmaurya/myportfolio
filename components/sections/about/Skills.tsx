import Container from "@/components/layout/Container";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="py-24">
      <Container>

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Skills & Technologies
          </h2>

          <p className="mt-4 text-zinc-400">
            Technologies I use to build production-ready products.
          </p>

        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-3
                transition
                duration-300
                hover:border-blue-500/40
                hover:bg-blue-500/10
              "
            >
              {skill}
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}