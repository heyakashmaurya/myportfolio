import type { Metadata } from "next";

import BlogListingHero from "@/components/sections/blog/BlogListingHero";
import FeaturedPost from "@/components/sections/blog/FeaturedPost";
import Categories from "@/components/sections/blog/Categories";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import CTA from "@/components/sections/about/CTA";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Read articles about AI Voice Agents, SaaS Development, Full Stack Engineering, Automation, and Next.js.",
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