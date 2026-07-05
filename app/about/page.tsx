import AboutHero from "@/components/sections/about/AboutHero";
import Experience from "@/components/sections/about/Experience";
import Skills from "@/components/sections/about/Skills";
import Achievements from "@/components/sections/about/Achievements";
import CTA from "@/components/sections/about/CTA";

export const metadata = {
  title: "About",
  description:
    "Learn more about Akash Maurya, Full Stack AI Engineer specializing in AI Voice Agents, SaaS, and automation systems.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero /> 
      <Experience />
      <Skills />
      <Achievements />
      <CTA />
    </>
  );
}