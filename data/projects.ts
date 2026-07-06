

export interface Project {
    // Basic
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    category:
    | "AI Voice Agent"
    | "Healthcare AI"
    | "FinTech AI"
    | "SaaS"
    | "Full Stack";

    featured: boolean;

    // Overview
    description: string;
    longDescription: string;
    overview: string;

    // Images
    image: string;
    gallery: string[];

    // Tech
    technologies: string[];

    // Case Study
    problem: string;
    solution: string;

    features: string[];

    architecture: string[];

    results: string[];

    // Project Info
    role: string;
    duration: string;
    team: string;
    client: string;

    year: string;

    status: "Completed" | "In Progress";

    // Links
    liveUrl?: string;
    githubUrl?: string;
}

export const projects: Project[] = [
    {
        id: "1",

        slug: "restaurant-ai-agent",

        title: "Restaurant AI Voice Agent",

        subtitle: "24/7 AI Table Booking Assistant",

        category: "AI Voice Agent",

        featured: true,

        description:
            "An AI voice assistant that answers restaurant calls and books tables automatically.",

        longDescription:
            "A production-ready AI voice booking platform built using modern speech and LLM technologies.",

        overview:
            "This platform allows restaurants to automate customer calls, reservation management, booking confirmations, cancellations, and customer support using natural voice conversations.",

        image: "/images/projects/restaurant-ai/restaurant-thumbnail.png",

        gallery: [
            "/images/projects/restaurant-ai/restaurant-dashboard.png",
            "/images/projects/restaurant-ai/restaurant-reservations.png",
            "/images/projects/restaurant-ai/restaurant-conversation.png",
            "/images/projects/restaurant-ai/restaurant-customers.png",
            "/images/projects/restaurant-ai/resto.menu.png",
            "/images/projects/restaurant-ai/restaurant-flow.png",
            
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "Express",
            "MongoDB",
            "LiveKit",
            "OpenAI",
            "Deepgram",
        ],

        problem:
            "Restaurants lose reservations because staff cannot answer every incoming phone call during busy hours.",

        solution:
            "Built an AI Voice Agent capable of answering calls 24/7, understanding customer requests, checking availability, booking tables, modifying reservations, and sending confirmations.",

        features: [
            "Natural Voice Conversation",
            "Real-time Reservation",
            "Booking Modification",
            "Booking Cancellation",
            "Customer Verification",
            "Restaurant Dashboard",
            "Live Availability",
            "Conversation History",
        ],

        architecture: [
            "Next.js Frontend",
            "Node.js Backend",
            "MongoDB Database",
            "LiveKit Voice Pipeline",
            "OpenAI LLM",
            "Deepgram STT",
            "Google TTS",
        ],

        results: [
            "24/7 Customer Support",
            "Reduced Missed Calls",
            "Automated Reservations",
            "Improved Customer Experience",
        ],

        role: "Full Stack AI Engineer",

        duration: "3 Weeks",

        team: "Solo",

        client: "Personal Project",

        year: "2026",

        status: "Completed",

        liveUrl: "https://youtube.com/shorts/1VX0vmsJfJM?si=hZzWXSAY3Q18gzsc",

        githubUrl: "",
    },

    {
        id: "2",

        slug: "hospital-appointment-agent",

        title: "Hospital Appointment AI Agent",

        subtitle: "Multilingual AI Receptionist for Healthcare",

        category: "Healthcare AI",

        featured: true,

        description:
            "An AI-powered voice receptionist that books appointments, answers patient queries, and checks doctor availability.",

        longDescription:
            "A production-ready healthcare voice agent designed to automate appointment scheduling, patient support, and multilingual conversations. Patients can naturally speak with the AI to book appointments, check doctor schedules, reschedule visits, and receive instant assistance without waiting for hospital staff.",

        overview:
            "The Hospital Appointment AI Agent helps hospitals reduce receptionist workload by handling appointment booking, cancellations, doctor availability checks, patient FAQs, and multilingual conversations through natural voice interactions.",

        image: "/images/projects/hospital-ai/hospital-thumbnail1.png",

        gallery: [
            "/images/projects/hospital-ai/hospital-dashboard.png",
            "/images/projects/hospital-ai/hospital-appointment.png",
            "/images/projects/hospital-ai/hospital-conversation.png",
            "/images/projects/hospital-ai/hospital-patient.png",
            "/images/projects/hospital-ai/hospital-analytics.png",
            "/images/projects/hospital-ai/hospital-integration.png",
            
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "Express",
            "MongoDB",
            "LiveKit",
            "Google Gemini",
            "Sarvam AI",
        ],

        problem:
            "Hospital receptionists receive hundreds of patient calls every day, leading to long waiting times, missed appointments, and increased operational workload.",

        solution:
            "Developed an AI-powered multilingual voice receptionist capable of booking appointments, checking doctor availability, answering FAQs, and automatically managing patient conversations 24/7.",

        features: [
            "Appointment Booking",
            "Appointment Rescheduling",
            "Appointment Cancellation",
            "Doctor Availability",
            "Multilingual Support",
            "Patient Verification",
            "Conversation History",
            "Admin Dashboard",
        ],

        architecture: [
            "Next.js Frontend",
            "Node.js Backend",
            "MongoDB Database",
            "LiveKit Voice Pipeline",
            "Google Gemini",
            "Sarvam AI TTS",
            "Speech-to-Text",
        ],

        results: [
            "Reduced Reception Workload",
            "24/7 Patient Support",
            "Faster Appointment Booking",
            "Improved Patient Experience",
        ],

        role: "Full Stack AI Engineer",

        duration: "2 Weeks",

        team: "Solo",

        client: "Personal Project",

        year: "2026",

        status: "In Progress",

        liveUrl: "https://youtube.com/shorts/5DMc57P39nA?si=OgVXlAOjd3RupJC_",

        githubUrl: "",
    },

    // {
    //     id: "3",

    //     slug: "emi-collection-agent",

    //     title: "AI EMI Collection Agent",

    //     subtitle: "Automated Payment Reminder Voice Agent",

    //     category: "FinTech AI",

    //     featured: true,

    //     description:
    //         "An outbound AI calling platform for EMI reminders, payment follow-ups, and customer verification.",

    //     longDescription:
    //         "A conversational AI agent built for banks and financial institutions that automates EMI reminder calls, payment follow-ups, customer verification, and debt collection conversations while maintaining a natural and professional voice experience.",

    //     overview:
    //         "The AI EMI Collection Agent automates outbound reminder calls, verifies customers, provides payment information, records responses, and improves collection efficiency while reducing manual effort.",

    //     image: "/images/projects/emi-agent.png",

    //     gallery: [
    //         "/images/projects/emi-agent.png",
    //         "/images/projects/emi-dashboard.png",
    //         "/images/projects/emi-flow.png",
    //     ],

    //     technologies: [
    //         "Next.js",
    //         "TypeScript",
    //         "Node.js",
    //         "Express",
    //         "MongoDB",
    //         "LiveKit",
    //         "OpenAI",
    //         "Deepgram",
    //     ],

    //     problem:
    //         "Financial institutions spend significant resources manually reminding customers about EMI payments, resulting in inconsistent follow-ups and higher operational costs.",

    //     solution:
    //         "Built an AI outbound calling platform capable of contacting customers automatically, verifying identity, reminding EMI dues, collecting responses, and updating payment records.",

    //     features: [
    //         "Outbound AI Calling",
    //         "Customer Verification",
    //         "Payment Reminder",
    //         "Conversation Logging",
    //         "Follow-up Scheduling",
    //         "Dashboard Analytics",
    //         "Call Recording",
    //         "CRM Integration",
    //     ],

    //     architecture: [
    //         "Next.js Frontend",
    //         "Node.js Backend",
    //         "MongoDB Database",
    //         "LiveKit Voice Pipeline",
    //         "OpenAI LLM",
    //         "Deepgram STT",
    //         "Google TTS",
    //     ],

    //     results: [
    //         "Reduced Manual Calling",
    //         "Improved Collection Rate",
    //         "Automated Follow-ups",
    //         "Better Customer Engagement",
    //     ],

    //     role: "Full Stack AI Engineer",

    //     duration: "3 Weeks",

    //     team: "Solo",

    //     client: "Personal Project",

    //     year: "2026",

    //     status: "In Progress",

    //     liveUrl: "",

    //     githubUrl: "",
    // },

    {
        id: "3",

        slug: "modern-saas-dashboard",

        title: "Modern SaaS Admin Dashboard",

        subtitle: "Enterprise Analytics & Management Platform",

        category: "SaaS",

        featured: true,

        description:
            "A production-ready SaaS dashboard with authentication, analytics, user management, and reusable components.",

        longDescription:
            "A scalable full-stack SaaS admin dashboard built using Next.js, TypeScript, Node.js, Express, and MongoDB. It includes authentication, role-based access control, analytics, CRUD operations, responsive layouts, reusable UI components, and a clean architecture suitable for modern SaaS businesses.",

        overview:
            "The dashboard provides administrators with complete control over users, analytics, settings, and business operations through a responsive and modern interface built with scalable architecture.",

        image: "/images/projects/saas-dashboard/saas-thumbnail.png",

        gallery: [
            "/images/projects/saas-dashboard/saas-dashboard.png",
            "/images/projects/saas-dashboard/saas-analytics.png",
            "/images/projects/saas-dashboard/saas-users.png",
            "/images/projects/saas-dashboard/saas.subscriptions.png",
            "/images/projects/saas-dashboard/saas.orders.png",
            "/images/projects/saas-dashboard/saas.reports.png",
            
        ],

        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT Authentication",
        ],

        problem:
            "Many businesses need an admin dashboard that is scalable, secure, responsive, and easy to extend without rebuilding the application from scratch.",

        solution:
            "Designed and developed a reusable SaaS dashboard architecture with secure authentication, analytics, user management, responsive layouts, and modular components.",

        features: [
            "Authentication",
            "Role Based Access",
            "Dashboard Analytics",
            "User Management",
            "CRUD Operations",
            "Responsive Design",
            "REST API Integration",
            "Reusable Components",
        ],

        architecture: [
            "Next.js Frontend",
            "Node.js Backend",
            "Express REST API",
            "MongoDB Database",
            "JWT Authentication",
            "Protected Routes",
            "Reusable UI System",
        ],

        results: [
            "Scalable Architecture",
            "Improved Developer Productivity",
            "Responsive Admin Panel",
            "Reusable Components",
        ],

        role: "Full Stack Developer",

        duration: "4 Weeks",

        team: "Solo",

        client: "Personal Project",

        year: "2026",

        status: "Completed",

        liveUrl: "",

        githubUrl: "",
    },
];
