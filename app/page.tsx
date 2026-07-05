import Hero from "@/components/sections/home/Hero";
import TechStack from "@/components/sections/home/TechStack";
import FeaturedProjects from "@/components/sections/projects/FeaturedProjects";
import Services from "@/components/sections/home/Services";
import Process from "@/components/sections/home/Process";
import AboutSEO from "@/components/sections/home/AboutSEO";
import SkillsSEO from "@/components/sections/home/SkillsSEO";
import WhyHireMe from "@/components/sections/home/WhyHireMe";
import ServicesSEO from "@/components/sections/home/ServicesSEO";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />

      <AboutSEO />
      <SkillsSEO />
      <ServicesSEO />
      <WhyHireMe />

      <FeaturedProjects />
      <Services />
      <Process />
    </>
  );
}

// export default function HomePage() {
//   return (
//     <section className="flex min-h-[calc(100vh-80px)] items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-6xl font-bold">
//           Full Stack AI Developer
//         </h1>

//         <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
//           I build AI Voice Agents, SaaS applications,
//           MERN products and business automation systems.
//         </p>
//       </div>
//     </section>
//   );
// }