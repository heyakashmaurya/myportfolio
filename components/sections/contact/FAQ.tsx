"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/layout/Container";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "I build AI Voice Agents, Full Stack SaaS platforms, business automation systems, REST APIs, and modern web applications using Next.js, React, Node.js, TypeScript, and AI technologies.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. I work remotely with clients worldwide and communicate through Zoom, Google Meet, Slack, WhatsApp, or email.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "It depends on the project scope. Small projects may take 1–2 weeks, while larger SaaS platforms or AI systems can take several weeks or months.",
  },
  {
    question: "Can you maintain existing applications?",
    answer:
      "Yes. I can improve, maintain, optimize, or extend existing React, Next.js, Node.js, and AI-powered applications.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28">
      <Container>

        <div className="mx-auto max-w-4xl">

          <div className="mb-16 text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              FAQ
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="space-y-5">

            {faqs.map((faq, index) => {
              const isOpen = open === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                >
                  <button
                    onClick={() =>
                      setOpen(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg font-semibold">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 px-6 pb-6 pt-5 text-zinc-400 leading-7">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

          </div>

        </div>

      </Container>
    </section>
  );
}