import Hero from "@/components/sections/home/Hero";
// import TechStack from "@/components/sections/home/TechStack";
import FeaturedProjects from "@/components/sections/projects/FeaturedProjects";
// import Services from "@/components/sections/home/HowIHelp";
import Process from "@/components/sections/home/Process";
import AboutSEO from "@/components/sections/home/AboutSEO";
import SkillsSEO from "@/components/sections/home/SkillsSEO";
import WhyHireMe from "@/components/sections/home/WhyHireMe";
import ServicesSEO from "@/components/sections/home/ServicesSEO";
import TechStack from "@/components/sections/services/TechStack";
import HowIHelp from "@/components/sections/home/HowIHelp";

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
      <HowIHelp />
      <Process />
    </>
  );
}
