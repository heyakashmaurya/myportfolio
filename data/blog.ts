// export interface BlogPost {
//     id: string;
//     slug: string;

//     title: string;
//     excerpt: string;

//     image: string;
//     author: string;

//     publishedAt: string;
//     readTime: string;

//     category: "AI" | "Voice AI" | "SaaS" | "Next.js" | "Automation";

//     featured: boolean;

//     tags: string[];

//     // Technologies Used
//     technologies: string[];

//     longDescription: string;
//     overview: string;
//     problem: string;
//     solution: string;

//     features: string[];
//     results: string[];
// }

export interface BlogPost {
    // Basic
    id: string;
    slug: string;

    title: string;
    excerpt: string;

    // SEO
    seoTitle: string;
    seoDescription: string;

    // Images
    image: string;
    coverImageAlt: string;

    // Author
    author: string;

    // Dates
    publishedAt: string;
    updatedAt?: string;

    // Reading
    readTime: string;

    // Category
    category:
    | "AI"
    | "Voice AI"
    | "SaaS"
    | "Next.js"
    | "Automation";

    featured: boolean;

    // Tags
    tags: string[];

    // Technologies
    technologies: string[];

    // Article
    longDescription: string;
    overview: string;
    problem: string;
    solution: string;

    features: string[];
    results: string[];
}


export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "build-ai-voice-agent",

        title: "How to Build an AI Voice Agent Using LiveKit and OpenAI",
        excerpt:
            "Learn how modern AI voice agents work using LiveKit, OpenAI, speech recognition, and text-to-speech technologies.",

        image: "/images/blog/voice-agent.jpg",

        coverImageAlt:
            "AI Voice Agent built with LiveKit and OpenAI",

        seoTitle:
            "How to Build an AI Voice Agent Using LiveKit & OpenAI",

        seoDescription:
            "Complete guide to building AI Voice Agents using LiveKit, OpenAI, Deepgram and Google TTS.",

        updatedAt: "July 10, 2026",

        author: "Akash Maurya",

        publishedAt: "July 2, 2026",
        readTime: "8 min read",

        category: "Voice AI",
        featured: true,

        tags: ["AI", "OpenAI", "LiveKit", "Voice Agent"],

        longDescription:
            "AI voice agents are transforming how businesses interact with users through real-time conversations powered by speech models.",

        technologies: [
            "Node.js",
            "MongoDB",
            "OpenAI",
            "LiveKit",
            "Deepgram",
        ],

        overview:
            "This article explains how to build a real-time voice AI system using LiveKit, OpenAI, and modern speech pipelines.",

        problem:
            "Traditional customer support systems are slow, expensive, and not scalable for real-time communication.",

        solution:
            "We build a real-time AI voice agent that understands speech, processes it using LLMs, and responds naturally.",

        features: [
            "Real-time voice conversation",
            "Speech-to-text processing",
            "LLM-powered responses",
            "Text-to-speech output",
        ],

        results: [
            "Reduced response time",
            "Improved customer experience",
            "24/7 automated support",
        ],
    },

    {
        id: "2",
        slug: "nextjs-portfolio-guide",

        title: "Building a Premium Portfolio with Next.js 16",
        excerpt:
            "Step-by-step guide to creating a fast, scalable portfolio using Next.js, TypeScript, and Tailwind CSS.",

        image: "/images/blog/portfolio.jpg",

        coverImageAlt:
            "nextjs-portfolio-guide",

        seoTitle:
            "How to Build a nextjs-portfolio-guide ",

        seoDescription:
            "Complete guide to building nextjs-portfolio-guide.",

        updatedAt: "July 10, 2026",
        author: "Akash Maurya",

        publishedAt: "June 20, 2026",
        readTime: "6 min read",

        category: "Next.js",
        featured: false,

        tags: ["Next.js", "Portfolio", "React"],

        longDescription:
            "Learn how to build a production-ready developer portfolio using modern web technologies.",

        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
        ],
        overview:
            "We will build a scalable portfolio with routing, animations, and optimized performance.",

        problem:
            "Most portfolios are static, slow, and not optimized for real clients.",

        solution:
            "We build a dynamic portfolio using Next.js App Router and reusable components.",

        features: [
            "Dynamic routing",
            "SEO optimization",
            "Reusable components",
            "Responsive design",
        ],

        results: [
            "Faster load time",
            "Better SEO ranking",
            "Professional UI",
        ],
    },

    {
        id: "3",
        slug: "restaurant-ai-automation",

        title: "How AI is Transforming Restaurant Automation",
        excerpt:
            "Discover how AI Voice Agents can automate bookings, answer customer calls, and improve restaurant operations.",

        image: "/images/blog/restaurant-ai.jpg",


        coverImageAlt:
            "restaurant-ai-automation built with LiveKit and OpenAI",

        seoTitle:
            "How to Build an restaurant-ai-automation Using LiveKit & OpenAI",

        seoDescription:
            "Complete guide to building restaurant-ai-automation using LiveKit, OpenAI, Deepgram and Google TTS.",

        updatedAt: "July 10, 2026",
        author: "Akash Maurya",

        publishedAt: "June 5, 2026",
        readTime: "5 min read",

        category: "Automation",
        featured: false,

        tags: ["Restaurant", "Automation", "AI"],

        longDescription:
            "Restaurants are adopting AI voice agents to automate customer interactions and bookings.",

        technologies: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "Express",
            "MongoDB",
            "LiveKit",
            "OpenAI",
            "Deepgram",
            "Google TTS",
        ],

        overview:
            "This article explores how automation is changing the restaurant industry.",

        problem:
            "Restaurants miss bookings due to limited staff availability.",

        solution:
            "AI voice agents handle customer calls and manage reservations automatically.",

        features: [
            "Automated booking system",
            "Voice-based interaction",
            "Real-time availability check",
        ],

        results: [
            "Increased booking efficiency",
            "Reduced staff workload",
            "Higher customer satisfaction",
        ],
    },
];