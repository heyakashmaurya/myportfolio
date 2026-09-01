import type { Metadata } from "next";

import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import FAQ from "@/components/sections/contact/FAQ";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Akash Maurya to discuss AI Voice Agents, SaaS platforms, automation, or full-stack development projects.",
  
  alternates: {
    canonical: "/contact",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://heyakashmaurya.com/contact",
    title: "Contact Akash Maurya | Full Stack AI Engineer",
    description:
      "Get in touch with Akash Maurya to discuss AI Voice Agents, SaaS platforms, automation, or full-stack development projects.",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_420px]">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      <FAQ />
    </>
  );
}