import Link from "next/link";

import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
//   Linkedin,
//   Github,
} from "lucide-react";

import { FaGithub,FaLinkedin } from "react-icons/fa6";

export default function ContactInfo() {
  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      value: "akash45492@gmail.com",
      href: "mailto:akash45492@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 88874 54709",
      href: "tel:+918887454709",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat on WhatsApp",
      href: "https://wa.me/918887454709",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Uttar Pradesh, India",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/heyakashmaurya",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/heyakashmaurya",
      label: "LinkedIn",
    },
  ];

  return (
    <aside className="space-y-8">

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

        <h2 className="text-2xl font-bold">
          Contact Information
        </h2>

        <p className="mt-3 leading-7 text-zinc-400">
          Feel free to reach out through any of the following methods.
        </p>

        <div className="mt-8 space-y-6">

          {contactItems.map((item) => {
            const Icon = item.icon;

            const content = (
              <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-blue-500/20 hover:bg-white/[0.05]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Icon size={22} />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    {item.title}
                  </p>

                  <p className="font-medium">
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return item.href ? (
              <Link
                key={item.title}
                href={item.href}
                target="_blank"
              >
                {content}
              </Link>
            ) : (
              <div key={item.title}>{content}</div>
            );
          })}

        </div>

      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

        <h3 className="text-xl font-semibold">
          Connect With Me
        </h3>

        <div className="mt-6 flex gap-4">

          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 transition hover:border-blue-500 hover:bg-blue-500/10"
              >
                <Icon size={22} />
              </Link>
            );
          })}

        </div>

      </div>

    </aside>
  );
}