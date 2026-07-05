import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { blogPosts } from "@/data/blog";

import BlogHero from "@/components/sections/blog/BlogHero";
import BlogContent from "@/components/sections/blog/BlogContent";
import RelatedPosts from "@/components/sections/blog/RelatedPosts";
import CTA from "@/components/sections/blog/CTA";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: Props) {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(
    (item) =>
      item.category === post.category &&
      item.slug !== post.slug
  );

  return (
    <>
      <BlogHero post={post} />

      <BlogContent post={post} />

      <RelatedPosts
        posts={relatedPosts}
        currentSlug={post.slug}
      />

      <CTA />
    </>
  );
}