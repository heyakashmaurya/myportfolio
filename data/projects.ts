

export interface Project {
    // Basic
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    category:
    | "AI Voice Agent"
    | "Business Software"
    | "Healthcare AI"
    | "FinTech AI"
    | "SaaS"
    | "Communication"
    | "E-Commerce"
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

        slug: "order-management-workflow-system",

        title: "Order Management Workflow System",

        subtitle: "Custom ERP for Industrial Distributors",

        category: "Business Software",

        featured: true,

        description:
            "A custom order management platform built for a large industrial distributor to streamline quotations, order processing, inventory, approvals, and customer workflows.",

        longDescription:
            "A production-ready business management platform developed for a leading steel and pipe distribution company. The system digitizes the complete order lifecycle—from customer inquiries and quotations to approvals, inventory allocation, dispatch, invoicing, and reporting. Built using Next.js, Node.js, Express, MongoDB, and TypeScript, the platform improves operational efficiency, minimizes manual work, and provides complete visibility across departments through real-time dashboards and workflow automation.",

        overview:
            "The software centralizes sales, operations, inventory, and order management into a single platform, allowing teams to process orders faster, monitor inventory in real time, generate quotations, and track every stage of the workflow from inquiry to delivery.",

        image: "/images/projects/order-management/order-thumbnail.png",

        gallery: [
            "/images/projects/order-management/dashboard.png",
            "/images/projects/order-management/orders.png",
            "/images/projects/order-management/customers.png",
            "/images/projects/order-management/quotations.png",
            "/images/projects/order-management/inventory.png",
            "/images/projects/order-management/reports.png",
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
            "REST API",
        ],

        problem:
            "The distributor managed quotations, orders, inventory, and customer communication across multiple spreadsheets and manual processes, resulting in delays, duplicate work, and limited operational visibility.",

        solution:
            "Designed and developed a centralized workflow management system that automates order processing, quotation management, inventory tracking, approvals, reporting, and customer management through an intuitive web application.",

        features: [
            "Customer Management",
            "Order Workflow Management",
            "Quotation Management",
            "Inventory Tracking",
            "Sales Dashboard",
            "Order Status Tracking",
            "Role-Based Access",
            "Approval Workflow",
            "Invoice Management",
            "Business Reports",
            "Search & Filters",
            "Responsive Dashboard",
        ],

        architecture: [
            "Next.js Frontend",
            "Node.js Backend",
            "Express REST API",
            "MongoDB Database",
            "JWT Authentication",
            "Role-Based Permissions",
            "Modular Business Logic",
            "Responsive UI",
        ],

        results: [
            "Digitized Complete Order Workflow",
            "Reduced Manual Processing",
            "Improved Team Collaboration",
            "Centralized Business Operations",
            "Real-Time Business Visibility",
        ],

        role: "Full Stack Developer",

        duration: "3 Months",

        team: "Solo",

        client: "Industrial Distribution Client",

        year: "2026",

        status: "Completed",

        liveUrl: "",

        githubUrl: "",
    },

    {
        id: "2",

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

        client: "Client's Project",

        year: "2026",

        status: "Completed",

        liveUrl: "https://youtube.com/shorts/1VX0vmsJfJM?si=hZzWXSAY3Q18gzsc",

        githubUrl: "https://github.com/heyakashmaurya/Restuarant-Ai-Order-Booking-Sass",
    },

    {
        id: "3",

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

        githubUrl: "https://github.com/heyakashmaurya/Restuarant-Ai-Order-Booking-Sass",
    },


    {
        id: "4",

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

        client: "Client's Project",

        year: "2026",

        status: "Completed",

        liveUrl: "",

        githubUrl: "",
    },


    {
        id: "5",

        slug: "internal-realtime-chat-application",

        title: "Internal Realtime Chat Application",

        subtitle: "Secure Team Communication Platform",

        category: "Communication",

        featured: true,

        description:
            "A secure real-time internal messaging platform that enables teams to communicate instantly with private chats, group conversations, file sharing, and live notifications.",

        longDescription:
            "A production-ready internal communication platform built using Next.js, TypeScript, Node.js, Express, MongoDB, and Socket.IO. Designed for modern businesses, the application enables secure real-time messaging, team collaboration, online presence tracking, typing indicators, file sharing, notifications, and role-based access control. The architecture is scalable, responsive, and optimized for enterprise environments.",

        overview:
            "The application allows organizations to replace traditional communication tools with a secure internal messaging platform where employees can collaborate in real time through private chats, team channels, instant notifications, and shared files.",

        image: "/images/projects/chat/chat-thumbnail.png",

        gallery: [
            "/images/projects/chat/chat-dashboard.png",
            "/images/projects/chat/chat-conversation.png",
            "/images/projects/chat/chat-groups.png",
            "/images/projects/chat/chat-profile.png",
            "/images/projects/chat/chat-files.png",
            "/images/projects/chat/chat-settings.png",
        ],

        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "MongoDB",
            "Socket.IO",
            "JWT Authentication",
        ],

        problem:
            "Organizations often rely on multiple third-party messaging platforms, making communication fragmented, difficult to manage, and challenging to secure.",

        solution:
            "Developed a centralized real-time communication platform that enables secure messaging, team collaboration, instant notifications, and role-based access while keeping company communication organized in one place.",

        features: [
            "Real-time Messaging",
            "Private Conversations",
            "Group Chats",
            "Online & Offline Presence",
            "Typing Indicators",
            "Read Receipts",
            "File & Image Sharing",
            "Message Search",
            "Push Notifications",
            "JWT Authentication",
            "Role-Based Access",
            "Responsive Design",
        ],

        architecture: [
            "Next.js Frontend",
            "Node.js Backend",
            "Express REST API",
            "Socket.IO Real-Time Server",
            "MongoDB Database",
            "JWT Authentication",
            "Protected Routes",
            "Cloud File Storage",
        ],

        results: [
            "Instant Team Communication",
            "Low-Latency Real-Time Messaging",
            "Secure Internal Collaboration",
            "Scalable Enterprise Architecture",
            "Improved Team Productivity",
        ],

        role: "Full Stack Developer",

        duration: "5 Weeks",

        team: "Solo",

        client: "Client's Project",

        year: "2026",

        status: "Completed",

        liveUrl: "https://fullstack-chat-app-uyn3.onrender.com",

        githubUrl: "https://github.com/heyakashmaurya/fullstack-chat-app",
    },

    {
        id: "6",

        slug: "modern-ecommerce-platform",

        title: "Modern E-Commerce Platform",

        subtitle: "Scalable Online Shopping Solution",

        category: "E-Commerce",

        featured: true,

        description:
            "A full-stack e-commerce platform with secure authentication, product management, shopping cart, online payments, order tracking, and an intuitive admin dashboard.",

        longDescription:
            "A production-ready e-commerce application built using Next.js, TypeScript, Node.js, Express, MongoDB, and Stripe. The platform enables businesses to sell products online with a seamless shopping experience, secure checkout, inventory management, customer accounts, order tracking, and a comprehensive admin dashboard. Designed with scalability, performance, and security in mind for modern online businesses.",

        overview:
            "The platform provides everything required to launch and manage an online store, including product catalogs, customer management, secure payments, inventory control, order processing, and business analytics through a responsive admin dashboard.",

        image: "/images/projects/ecommerce/ecommerce-thumbnail.png",

        gallery: [
            // "/images/projects/ecommerce/ecommerce-home.png",
            // "/images/projects/ecommerce/ecommerce-products.png",
            // "/images/projects/ecommerce/ecommerce-product-details.png",
            // "/images/projects/ecommerce/ecommerce-cart.png",
            // "/images/projects/ecommerce/ecommerce-checkout.png",
            // "/images/projects/ecommerce/ecommerce-admin-dashboard.png",
        ],

        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "MongoDB",
            "Stripe",
            "JWT Authentication",
        ],

        problem:
            "Many businesses need a fast, secure, and scalable online store that offers seamless shopping, reliable payment processing, and an easy-to-manage administration panel.",

        solution:
            "Built a modern e-commerce platform with secure authentication, product catalog management, shopping cart functionality, online payments, inventory tracking, and a feature-rich admin dashboard to simplify online business operations.",

        features: [
            "User Authentication",
            "Product Catalog",
            "Advanced Product Search",
            "Category & Filters",
            "Shopping Cart",
            "Wishlist",
            "Secure Checkout",
            "Stripe Payment Integration",
            "Order Tracking",
            "Inventory Management",
            "Admin Dashboard",
            "Responsive Design",
        ],

        architecture: [
            "Next.js Frontend",
            "Node.js Backend",
            "Express REST API",
            "MongoDB Database",
            "Stripe Payment Gateway",
            "JWT Authentication",
            "Role-Based Access Control",
            "Cloud Image Storage",
        ],

        results: [
            "Fast Shopping Experience",
            "Secure Online Payments",
            "Efficient Order Management",
            "Scalable Store Architecture",
            "Improved Customer Experience",
        ],

        role: "Full Stack Developer",

        duration: "6 Weeks",

        team: "Solo",

        client: "Client's Project",

        year: "2024",

        status: "Completed",

        liveUrl: "",

        githubUrl: "https://github.com/heyakashmaurya/ecomm-mern-stack",
    },

    // {
    //     id: "7",

    //     slug: "employee-management-system",

    //     title: "Employee Management System",

    //     subtitle: "Workforce & Productivity Management Platform",

    //     category: "Business Software",

    //     featured: true,

    //     description:
    //         "A modern employee management platform that helps organizations manage employees, assign tasks, monitor productivity, and streamline HR operations through a centralized dashboard.",

    //     longDescription:
    //         "A production-ready employee management system built using React, Node.js, Express, MongoDB, and TypeScript. The platform enables businesses to efficiently manage employees, departments, attendance, task assignments, leave requests, performance tracking, and user roles from a single dashboard. Designed with scalability, security, and usability in mind, it simplifies daily HR and team management workflows while providing real-time insights into workforce productivity.",

    //     overview:
    //         "The system centralizes employee information, task management, attendance tracking, leave approvals, and productivity monitoring into a responsive dashboard, allowing managers and HR teams to efficiently oversee business operations.",

    //     image: "/images/projects/employee-management/employee-thumbnail.png",

    //     gallery: [
    //         "/images/projects/employee-management/dashboard.png",
    //         "/images/projects/employee-management/employees.png",
    //         "/images/projects/employee-management/tasks.png",
    //         // "/images/projects/employee-management/attendance.png",
    //         // "/images/projects/employee-management/performance.png",
    //         // "/images/projects/employee-management/reports.png",
    //     ],

    //     technologies: [
    //         "React",
    //         "TypeScript",
    //         "Tailwind CSS",
    //         "Node.js",
    //         "Express",
    //         "MongoDB",
    //         "JWT Authentication",
    //         "REST API",
    //     ],

    //     problem:
    //         "Organizations often struggle with managing employee records, task assignments, attendance, and performance across spreadsheets and disconnected tools, leading to inefficiencies and poor visibility.",

    //     solution:
    //         "Developed a centralized employee management platform that automates workforce management, task allocation, attendance tracking, leave approvals, reporting, and role-based access through an intuitive web application.",

    //     features: [
    //         "Employee Management",
    //         "Department Management",
    //         "Role-Based Access Control",
    //         "Task Assignment",
    //         "Attendance Tracking",
    //         "Leave Management",
    //         "Performance Monitoring",
    //         "Employee Profiles",
    //         "Real-Time Dashboard",
    //         "Reports & Analytics",
    //         "Search & Filters",
    //         "Responsive Design",
    //     ],

    //     architecture: [
    //         "React Frontend",
    //         "Node.js Backend",
    //         "Express REST API",
    //         "MongoDB Database",
    //         "JWT Authentication",
    //         "Role-Based Permissions",
    //         "RESTful Architecture",
    //         "Responsive UI",
    //     ],

    //     results: [
    //         "Improved Workforce Management",
    //         "Centralized Employee Records",
    //         "Enhanced Team Productivity",
    //         "Automated HR Processes",
    //         "Real-Time Business Insights",
    //     ],

    //     role: "Full Stack Developer",

    //     duration: "5 Weeks",

    //     team: "Solo",

    //     client: "Personal Project",

    //     year: "2024",

    //     status: "Completed",

    //     liveUrl: "https://employement-management-app.vercel.app",

    //     githubUrl: "https://github.com/heyakashmaurya/employement-management-app",
    // },

    // {
    //     id: "7",

    //     slug: "lead-automation-dashboard",

    //     title: "Lead Automation Dashboard",

    //     subtitle: "SaaS CRM & Customer Engagement Platform",

    //     category: "SaaS",

    //     featured: true,

    //     description:
    //         "A SaaS-ready lead management platform that captures, tracks, qualifies, and automates customer communication through WhatsApp, helping businesses convert more leads with less manual effort.",

    //     longDescription:
    //         "A production-ready Lead Automation Dashboard built using React, Node.js, Express, MongoDB, and Socket.IO. The platform enables businesses to capture leads from multiple sources, assign them to sales teams, automate WhatsApp follow-ups, monitor conversations in real time, and track the complete customer journey from inquiry to conversion. Designed for agencies, wholesalers, consultants, and service businesses, the system reduces manual work while improving response times and lead conversion rates through workflow automation.",

    //     overview:
    //         "The dashboard centralizes lead management, customer communication, team collaboration, and automation into one platform, allowing businesses to manage inquiries, automate follow-ups, monitor sales performance, and improve conversion rates through real-time workflows.",

    //     image: "/images/projects/lead-automation/lead-thumbnail.png",

    //     gallery: [
    //         "/images/projects/lead-automation/dashboard.png",
    //         "/images/projects/lead-automation/addleads.png",
    //         "/images/projects/lead-automation/leads.png",
    //         "/images/projects/lead-automation/overview.png",
    //         // "/images/projects/lead-automation/whatsapp-automation.png",
    //         // "/images/projects/lead-automation/pipeline.png",
    //         // "/images/projects/lead-automation/conversations.png",
    //         // "/images/projects/lead-automation/analytics.png",
    //     ],

    //     technologies: [
    //         "React",
    //         "TypeScript",
    //         "Tailwind CSS",
    //         "Node.js",
    //         "Express",
    //         "MongoDB",
    //         "Socket.IO",
    //         "WhatsApp API",
    //         "JWT Authentication",
    //     ],

    //     problem:
    //         "Businesses often lose potential customers because leads are scattered across spreadsheets, delayed responses, and inconsistent follow-up processes. Sales teams struggle to track conversations and maintain timely customer engagement.",

    //     solution:
    //         "Built a centralized lead automation platform that captures leads, assigns them to sales representatives, automates WhatsApp follow-ups, tracks customer interactions, and provides real-time visibility into the entire sales pipeline through an intuitive dashboard.",

    //     features: [
    //         "Lead Capture",
    //         "Lead Pipeline",
    //         "Lead Assignment",
    //         "WhatsApp Automation",
    //         "Automated Follow-Ups",
    //         "Real-Time Notifications",
    //         "Conversation History",
    //         "Sales Dashboard",
    //         "Customer Management",
    //         "Role-Based Access",
    //         "Analytics & Reports",
    //         "Responsive Design",
    //     ],

    //     architecture: [
    //         "React Frontend",
    //         "Node.js Backend",
    //         "Express REST API",
    //         "MongoDB Database",
    //         "Socket.IO Real-Time Server",
    //         "WhatsApp Integration",
    //         "JWT Authentication",
    //         "RESTful Architecture",
    //     ],

    //     results: [
    //         "Faster Lead Response Time",
    //         "Automated Customer Follow-Ups",
    //         "Improved Lead Conversion",
    //         "Centralized Sales Operations",
    //         "Real-Time Team Collaboration",
    //     ],

    //     role: "Full Stack Developer",

    //     duration: "7 Weeks",

    //     team: "Solo",

    //     client: "Personal Project",

    //     year: "2025",

    //     status: "Completed",

    //     liveUrl: "https://lead-dashboard-zye6.onrender.com",

    //     githubUrl: "https://github.com/heyakashmaurya/Lead-Dashboard",
    // },
];
