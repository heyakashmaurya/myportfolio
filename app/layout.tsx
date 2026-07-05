import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});


const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  verification: {
    google: "UXLGX31vDg8knM17E1SVMCsJB9akfz2KPtxavxhGNsE",
  },
  metadataBase: new URL("https://heyakashmaurya.com"),
  applicationName: "Akash Maurya Portfolio",
  title: {
    default: "Akash Maurya | Full Stack AI Engineer",
    template: "%s | Akash Maurya",
  },
  category: "Technology",
  description:
    "Full Stack AI Engineer specializing in AI Voice Agents, SaaS platforms, automation systems, and scalable web applications.",
  keywords: [
    "heyakashmaurya",
    "Akash Maurya",
    "AI Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "MERN",
    "AI Voice Agent",
    "Vapi",
    "LiveKit",
  ],
  authors: [{ name: "Akash Maurya" }],
  creator: "Akash Maurya",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Akash Maurya | Full Stack AI Engineer",
    description:
      "Building AI-powered products with Next.js, React, TypeScript and modern cloud technologies.",
    url: "https://heyakashmaurya.com",
    siteName: "Akash Maurya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Maurya | Full Stack AI Engineer",
    description:
      "Building AI-powered products with Next.js, React, TypeScript and modern cloud technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

        <Toaster
          richColors
          position="top-right"
          duration={4000}
        />

        <Script
          id="json-ld-person"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Akash Maurya",
              url: "https://heyakashmaurya.com",
              jobTitle: "Full Stack AI Engineer",
              description:
                "Full Stack AI Engineer building AI Voice Agents, SaaS platforms, automation systems, and scalable web applications using Next.js, React, Node.js, and modern cloud technologies.",
              sameAs: [
                "https://github.com/heyakashmaurya",
                "https://linkedin.com/in/heyakashmaurya",
                "https://twitter.com/heyakashmaurya"
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "AI Voice Agents",
                "Full Stack Development",
                "Next.js",
                "React",
                "Node.js",
                "TypeScript",
                "SaaS Development",
                "Automation Systems"
              ]
            }),
          }}
        />


        <Script
          id="json-ld-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Akash Maurya Portfolio",
              url: "https://heyakashmaurya.com",
              description:
                "Portfolio of Akash Maurya - Full Stack AI Engineer specializing in AI Voice Agents, SaaS platforms, and automation systems.",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://heyakashmaurya.com/blog?search={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}