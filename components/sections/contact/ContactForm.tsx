"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { ArrowRight, LoaderCircle } from "lucide-react";

import { contactSchema } from "@/lib/validations/contact";
import type { ContactFormData } from "@/lib/validations/contact";

import { FORMSPREE_ENDPOINT } from "@/constants/contact";

import Input from "@/components/ui/input";
import Textarea from "@/components/ui/Textarea";

export default function ContactForm() {
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // const onSubmit = async (data: ContactFormData) => {};

  const onSubmit = async (data: ContactFormData) => {
    setSending(true);

    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("subject", data.subject);
      formData.append("message", data.message);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const json = await response.json();

      if (response.ok) {
        toast.success(
          "Message sent successfully! I'll get back to you soon."
        );

        reset();
      } else {
        toast.error(
          json.errors?.[0]?.message ??
          "Something went wrong."
        );
      }
    } catch {
      toast.error(
        "Network error. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
      <h2 className="text-3xl font-bold">
        Send a Message
      </h2>

      <p className="mt-3 text-zinc-400">
        Tell me about your project and I'll get back to you within 24 hours.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 space-y-6"
      >
        <Input
          label="Full Name"
          placeholder="John Doe"
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          label="Subject"
          placeholder="AI Voice Agent for Restaurant"
          error={errors.subject?.message}
          {...register("subject")}
        />

        <Textarea
          label="Project Details"
          placeholder="Tell me about your project..."
          error={errors.message?.message}
          {...register("message")}
        />

        <button
          disabled={sending}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-500 disabled:opacity-60"
        >
          {sending ? (
            <>
              <LoaderCircle
                className="animate-spin"
                size={18}
              />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <ArrowRight size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}