"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "I specialize in AI Voice Agents, SaaS Development, Full Stack Web Applications, Business Automation, AI Chatbots, REST APIs, and custom software solutions.",
  },
  {
    question: "Can you build custom AI Voice Agents?",
    answer:
      "Yes. I build AI Voice Agents tailored to your business, including restaurant booking systems, hospital appointment assistants, customer support agents, lead qualification systems, and outbound calling solutions.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "I primarily work with Next.js, React, TypeScript, Node.js, Express.js, MongoDB, LiveKit, OpenAI, Google Gemini, Deepgram, Sarvam AI, Tailwind CSS, and modern cloud platforms.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. I work remotely with clients worldwide and communicate through Google Meet, Zoom, Slack, WhatsApp, and email.",
  },
  {
    question: "Do you provide deployment and maintenance?",
    answer:
      "Absolutely. I can deploy your application, configure servers, optimize performance, monitor the system, and provide long-term maintenance after launch.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "The timeline depends on the project's complexity. Small projects typically take 1–2 weeks, while larger AI platforms and SaaS applications may take several weeks.",
  },
  {
    question: "Can you integrate AI into my existing application?",
    answer:
      "Yes. I can integrate AI features such as chatbots, voice assistants, workflow automation, and LLM-powered functionality into your existing software.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply contact me through the contact page. We'll discuss your requirements, define the project scope, prepare a roadmap, and begin development.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-y border-white/10 py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Here are answers to some of the questions clients commonly ask before
            starting a project.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 px-6 py-6">
                    <p className="leading-8 text-zinc-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}