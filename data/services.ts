
import {
  PhoneCall,
  LayoutDashboard,
  Workflow,
  Code2,
} from "lucide-react";

export const iconMap = {
  PhoneCall,
  LayoutDashboard,
  Workflow,
  Code2,
};

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  technologies: string[];
  features: string[];
}

export const services: Service[] = [
  {
    id: "1",

    slug: "ai-voice-agents",

    title: "AI Voice Agents",

    shortDescription:
      "Human-like AI phone agents for restaurants, hospitals, sales and customer support.",

    description:
      "I build production-ready AI Voice Agents capable of handling inbound and outbound calls, booking appointments, answering customer queries, qualifying leads and automating business conversations.",

    icon: "PhoneCall",

    technologies: [
      "LiveKit",
      "Vapi",
      "OpenAI",
      "Deepgram",
      "Google AI",
      "Sarvam AI",
    ],

    features: [
      "Inbound Calling",
      "Outbound Calling",
      "Appointment Booking",
      "CRM Integration",
      "Call Recording",
      "Analytics Dashboard",
    ],
  },

  {
    id: "2",

    slug: "saas-development",

    title: "SaaS Development",

    shortDescription:
      "Scalable SaaS products built with modern full-stack technologies.",

    description:
      "From authentication to dashboards and subscriptions, I develop complete SaaS platforms that are scalable, secure and production-ready.",

    icon: "LayoutDashboard",

    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
    ],

    features: [
      "Authentication",
      "Dashboard",
      "REST APIs",
      "Admin Panel",
      "Payments",
      "Analytics",
    ],
  },

  {
    id: "3",

    slug: "automation",

    title: "Business Automation",

    shortDescription:
      "Automate repetitive workflows using AI and modern automation tools.",

    description:
      "Reduce manual work with AI-powered workflow automation integrated with CRMs, WhatsApp, email and business systems.",

    icon: "Workflow",

    technologies: [
      "n8n",
      "Zapier",
      "Webhook",
      "Node.js",
      "OpenAI",
    ],

    features: [
      "Workflow Automation",
      "CRM Automation",
      "WhatsApp Automation",
      "Email Automation",
      "Custom Integrations",
      "API Automation",
    ],
  },

  {
    id: "4",

    slug: "full-stack-development",

    title: "Full Stack Development",

    shortDescription:
      "Modern web applications built using the MERN and Next.js ecosystem.",

    description:
      "High-performance full-stack applications with clean architecture, reusable components and scalable backend systems.",

    icon: "Code2",

    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
    ],

    features: [
      "Responsive UI",
      "REST APIs",
      "Authentication",
      "Database Design",
      "Cloud Deployment",
      "Performance Optimization",
    ],
  },
];


// import {
//   Bot,
//   BrainCircuit,
//   Globe,
//   Smartphone,
//   Workflow,
//   Database,
// } from "lucide-react";

// export const services = [
//   {
//     title: "AI Voice Agents",
//     description:
//       "Custom AI voice agents for restaurants, hospitals, customer support, collections, and appointment booking.",
//     icon: Bot,
//   },
//   {
//     title: "Full Stack SaaS",
//     description:
//       "Production-ready SaaS applications using Next.js, React, Node.js, MongoDB, PostgreSQL, and TypeScript.",
//     icon: Globe,
//   },
//   {
//     title: "Business Automation",
//     description:
//       "Automate repetitive workflows using AI, APIs, webhooks, and intelligent integrations.",
//     icon: Workflow,
//   },
//   {
//     title: "AI Integrations",
//     description:
//       "Integrate OpenAI, Gemini, Grok, LiveKit, Vapi, Deepgram, and modern AI services into your products.",
//     icon: BrainCircuit,
//   },
//   {
//     title: "Backend APIs",
//     description:
//       "Secure REST APIs with authentication, databases, caching, file uploads, and scalable architecture.",
//     icon: Database,
//   },
//   {
//     title: "Responsive Web Apps",
//     description:
//       "Fast, responsive, SEO-friendly web applications with excellent user experience across all devices.",
//     icon: Smartphone,
//   },
// ];