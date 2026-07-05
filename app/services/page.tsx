import type { Metadata } from "next";

import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import Industries from "@/components/sections/services/Industries";
import Process from "@/components/sections/services/Process";
import TechStack from "@/components/sections/services/TechStack";
import WhyChooseMe from "@/components/sections/services/WhyChooseMe";
import FAQ from "@/components/sections/services/FAQ";
import CTA from "@/components/sections/services/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional AI Voice Agent, SaaS Development, Automation and Full Stack Development services by Akash Maurya.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <ServicesGrid />

      <Industries />

      <Process />

      <TechStack />

      <WhyChooseMe />

      <FAQ />

      <CTA />
    </>
  );
}