import Container from "@/components/layout/Container";

const stats = [
  {
    value: "4+",
    label: "Years Experience",
  },
  {
    value: "20+",
    label: "Projects",
  },
  {
    value: "100%",
    label: "Responsive Design",
  },
  {
    value: "24/7",
    label: "Learning AI",
  },
];

export default function Achievements() {
  return (
    <section className="py-24">
      <Container>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-10
                text-center
              "
            >
              <h3 className="text-5xl font-bold text-blue-500">
                {stat.value}
              </h3>

              <p className="mt-4 text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}