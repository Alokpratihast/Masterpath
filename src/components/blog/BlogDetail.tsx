import Image from "next/image";

import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import BlogSidebar from "./BlogSidebar";
import RelatedBlogs from "./RelatedBlogs";

type BlogDetailProps = {
  blog: {
    id: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    content: string;

    featuredImage?: string | null;
    featuredImageAlt?: string | null;

    publishedAt?: Date | string | null;

    category?: {
      id: string;
      name: string;
      slug: string;
    } | null;

    author?: {
      id: string;
      fullName: string;
    } | null;

    tags: {
      tag: {
        id: string;
        name: string;
        slug: string;
      };
    }[];
  };
};

export default function BlogDetail({
  blog,
}: BlogDetailProps) {
  return (
    <main className="min-h-screen bg-background">
      {/* =================================
          BLOG HEADER
      ================================= */}
      <BlogHeader
        title={blog.title}
        excerpt={blog.excerpt}
        publishedAt={blog.publishedAt}
        category={blog.category}
        author={blog.author}
      />

      {/* =================================
          FEATURED IMAGE
      ================================= */}
      {blog.featuredImage && (
        <section className="mx-auto max-w-6xl px-6 py-8 md:px-8 md:py-10">
          <div className="group relative aspect-[16/8] overflow-hidden rounded-2xl bg-muted shadow-sm">
            <Image
              src={blog.featuredImage}
              alt={
                blog.featuredImageAlt ||
                blog.title
              }
              fill
              priority
              sizes="
                (max-width: 768px) 100vw,
                (max-width: 1200px) 90vw,
                1200px
              "
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.02]
              "
            />

            {/* Image overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </section>
      )}

      {/* =================================
          ARTICLE
      ================================= */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-8 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          {/* Main content */}
          <article className="min-w-0 max-w-3xl">
            <BlogContent
              content={blog.content}
            />
          </article>

          {/* Sidebar */}
          <BlogSidebar
            title={blog.title}
            slug={blog.slug}
            tags={blog.tags}
          />
        </div>
      </section>

      {/* =================================
          RELATED BLOGS
      =================================

          RelatedBlogs is kept ready for
          the next backend integration.

          Until BlogService returns related
          blogs, we don't render an empty
          section.
      */}
    </main>
  );
}