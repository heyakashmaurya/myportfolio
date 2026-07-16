
import Script from "next/script";
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
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
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

  // Flatten every FAQ block across all sections into one list — a post
  // can have FAQs in more than one section, but the FAQPage schema
  // wants a single flat mainEntity array.
  const faqs = post.content.sections.flatMap(
    (section) => section.faqs ?? []
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

      <Script
        id="blog-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.seoDescription,
            image: post.image,
            author: {
              "@type": "Person",
              name: post.author,
            },
            datePublished: post.publishedAt,
            dateModified: post.updatedAt || post.publishedAt,
          }),
        }}
      />

      {/* Only emitted when the post actually has FAQ content, so it
          never ships an empty/invalid FAQPage block. This is what
          makes FAQ sections eligible for rich results in Google. */}
      {faqs.length > 0 && (
        <Script
          id="blog-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      )}
    </>
  );
}



// import Script from "next/script";
// import { notFound } from "next/navigation";
// import type { Metadata } from "next";
// import { blogPosts } from "@/data/blog";
// import BlogHero from "@/components/sections/blog/BlogHero";
// import BlogContent from "@/components/sections/blog/BlogContent";
// import RelatedPosts from "@/components/sections/blog/RelatedPosts";
// import CTA from "@/components/sections/blog/CTA";

// // interface Props {
// //   params: Promise<{
// //     slug: string;
// //   }>;
// // }

// interface Props {
//   params: {
//     slug: string;
//   };
// }

// export async function generateStaticParams() {
//   return blogPosts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export async function generateMetadata({
//   params,
// }: Props): Promise<Metadata> {
//   const { slug } = await params;

//   const post = blogPosts.find((item) => item.slug === slug);

//   if (!post) {
//     return {
//       title: "Article Not Found",
//     };
//   }

//   return {
//     title: post.title,
//     description: post.excerpt,
//     // openGraph: {
//     //   title: post.title,
//     //   description: post.excerpt,
//     //   images: [post.image],
//     // },

//     openGraph: {
//       title: post.seoTitle || post.title,
//       description: post.seoDescription || post.excerpt,
//       images: [
//         {
//           url: post.image,
//           width: 1200,
//           height: 630,
//           alt: post.coverImageAlt,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: post.seoTitle || post.title,
//       description: post.seoDescription || post.excerpt,
//       images: [post.image],
//     },
//   };
// }

// export default async function BlogPostPage({
//   params,
// }: Props) {
//   const { slug } = await params;

//   const post = blogPosts.find((item) => item.slug === slug);

//   if (!post) {
//     notFound();
//   }

//   const relatedPosts = blogPosts.filter(
//     (item) =>
//       item.category === post.category &&
//       item.slug !== post.slug
//   );

//   return (
//     <>
//       <BlogHero post={post} />

//       <BlogContent post={post} />

//       <RelatedPosts
//         posts={relatedPosts}
//         currentSlug={post.slug}
//       />


//       <CTA />

//       <Script
//         id="blog-article-schema"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Article",
//             headline: post.title,
//             description: post.seoDescription,
//             image: post.image,
//             author: {
//               "@type": "Person",
//               name: post.author,
//             },
//             datePublished: post.publishedAt,
//             dateModified: post.updatedAt || post.publishedAt,
//           }),
//         }}
//       />
//     </>
//   );
// }