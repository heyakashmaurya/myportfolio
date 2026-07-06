
import type { Metadata } from "next";
import BlogListingHero from "@/components/sections/blog/BlogListingHero";
import FeaturedPost from "@/components/sections/blog/FeaturedPost";
import Categories from "@/components/sections/blog/Categories";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import CTA from "@/components/sections/about/CTA";



export const metadata: Metadata = {
    title: "AI & SaaS Development Blog | Akash Maurya",
    description:
        "Read insights about AI Voice Agents, SaaS development, automation systems,custom software Development, Next.js, and modern full stack engineering.",
};

export default function BlogPage() {
    return (
        <>
            <BlogListingHero />

            <FeaturedPost />

            <Categories />

            <BlogGrid />

            <CTA />
            
            
        </>
    );
}