

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

/**
 * Generate all blog URLs at build time.
 */
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * Generate SEO metadata for each blog article.
 */
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  /**
   * This normally won't be reached because the page itself
   * calls notFound(), but keeping noindex here is a safe fallback.
   */
  if (!post) {
    return {
      title: "Article Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `https://heyakashmaurya.com/blog/${post.slug}`;

  const title = post.seoTitle || post.title;

  const description =
    post.seoDescription || post.excerpt;

  /**
   * Make sure the image URL is absolute for Open Graph
   * and structured data.
   */
  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `https://heyakashmaurya.com${
        post.image.startsWith("/") ? "" : "/"
      }${post.image}`;

  return {
    title,

    description,

    /**
     * Explicit canonical URL.
     * This tells search engines which URL represents
     * the preferred version of this article.
     */
    alternates: {
      canonical: canonicalUrl,
    },

    /**
     * Explicitly allow indexing and following links.
     */
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

    authors: [
      {
        name: post.author,
      },
    ],

    openGraph: {
      type: "article",

      url: canonicalUrl,

      siteName: "Akash Maurya",

      title,

      description,

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.coverImageAlt || post.title,
        },
      ],

      publishedTime: post.publishedAt,

      ...(post.updatedAt
        ? {
            modifiedTime: post.updatedAt,
          }
        : {}),
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [imageUrl],
    },
  };
}

/**
 * Blog article page.
 */
export default async function BlogPostPage({
  params,
}: Props) {
  const { slug } = await params;

  const post = blogPosts.find(
    (item) => item.slug === slug
  );

  if (!post) {
    notFound();
  }

  /**
   * Find related articles from the same category.
   */
  const relatedPosts = blogPosts.filter(
    (item) =>
      item.category === post.category &&
      item.slug !== post.slug
  );

  /**
   * Collect all FAQ items from all sections.
   */
  const faqs = post.content.sections.flatMap(
    (section) => section.faqs ?? []
  );

  /**
   * Use an absolute canonical URL throughout structured data.
   */
  const canonicalUrl =
    `https://heyakashmaurya.com/blog/${post.slug}`;

  /**
   * Normalize article image to an absolute URL.
   */
  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `https://heyakashmaurya.com${
        post.image.startsWith("/") ? "" : "/"
      }${post.image}`;

  return (
    <>
      <BlogHero post={post} />

      <BlogContent post={post} />

      <RelatedPosts
        posts={relatedPosts}
        currentSlug={post.slug}
      />

      <CTA />

      {/* 
        Article structured data.
        Helps search engines understand this page
        as an individual article.
      */}
      <Script
        id="blog-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",

            "@id": `${canonicalUrl}#article`,

            url: canonicalUrl,

            headline: post.title,

            description:
              post.seoDescription || post.excerpt,

            image: [imageUrl],

            author: {
              "@type": "Person",
              name: post.author,
              url: "https://heyakashmaurya.com/about",
            },

            publisher: {
              "@type": "Person",
              name: "Akash Maurya",
              url: "https://heyakashmaurya.com",
            },

            datePublished: post.publishedAt,

            dateModified:
              post.updatedAt || post.publishedAt,

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonicalUrl,
            },
          }),
        }}
      />

      {/*
        FAQ structured data is generated only when
        the article actually contains FAQ content.
      */}
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

// interface Props {
//   params: Promise<{
//     slug: string;
//   }>;
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
//       robots: {
//         index: false,
//         follow: false,
//       },
//     };
//   }

//   const canonicalUrl = `https://heyakashmaurya.com/blog/${post.slug}`;

//   return {
//     title: post.seoTitle || post.title,

//     description: post.seoDescription || post.excerpt,

//     alternates: {
//       canonical: canonicalUrl,
//     },

//     robots: {
//       index: true,
//       follow: true,
//     },

//     openGraph: {
//       type: "article",
//       url: canonicalUrl,

//       title: post.seoTitle || post.title,

//       description:
//         post.seoDescription || post.excerpt,

//       images: [
//         {
//           url: post.image,
//           width: 1200,
//           height: 630,
//           alt: post.coverImageAlt,
//         },
//       ],

//       publishedTime: post.publishedAt,

//       ...(post.updatedAt
//         ? {
//           modifiedTime: post.updatedAt,
//         }
//         : {}),
//     },

//     twitter: {
//       card: "summary_large_image",

//       title: post.seoTitle || post.title,

//       description:
//         post.seoDescription || post.excerpt,

//       images: [post.image],
//     },

//     authors: [
//       {
//         name: post.author,
//       },
//     ],
//   };
// }


// export default async function BlogPostPage({ params }: Props) {
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

//   // Flatten every FAQ block across all sections into one list — a post
//   // can have FAQs in more than one section, but the FAQPage schema
//   // wants a single flat mainEntity array.
//   const faqs = post.content.sections.flatMap(
//     (section) => section.faqs ?? []
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

//       {/* <Script
//         id="blog-article-schema"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Article",
//             headline: post.title,
//             description: post.seoDescription,
//             seoKeywords: post.seoKeywords,
//             image: post.image,
//             author: {
//               "@type": "Person",
//               name: post.author,
//             },
//             datePublished: post.publishedAt,
//             dateModified: post.updatedAt || post.publishedAt,
//           }),
//         }}
//       /> */}


//       <Script
//         id="blog-article-schema"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Article",

//             "@id": `https://heyakashmaurya.com/blog/${post.slug}#article`,

//             headline: post.title,

//             description:
//               post.seoDescription || post.excerpt,

//             image: [
//               `https://heyakashmaurya.com${post.image.startsWith("/") ? "" : "/"}${post.image}`,
//             ],

//             author: {
//               "@type": "Person",
//               name: post.author,
//               url: "https://heyakashmaurya.com/about",
//             },

//             publisher: {
//               "@type": "Person",
//               name: "Akash Maurya",
//               url: "https://heyakashmaurya.com",
//             },

//             datePublished: post.publishedAt,

//             dateModified:
//               post.updatedAt || post.publishedAt,

//             mainEntityOfPage: {
//               "@type": "WebPage",
//               "@id": `https://heyakashmaurya.com/blog/${post.slug}`,
//             },
//           }),
//         }}
//       />



//       {/* Only emitted when the post actually has FAQ content, so it
//           never ships an empty/invalid FAQPage block. This is what
//           makes FAQ sections eligible for rich results in Google. */}
//       {faqs.length > 0 && (
//         <Script
//           id="blog-faq-schema"
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "FAQPage",
//               mainEntity: faqs.map((faq) => ({
//                 "@type": "Question",
//                 name: faq.q,
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: faq.a,
//                 },
//               })),
//             }),
//           }}
//         />
//       )}
//     </>
//   );
// }



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