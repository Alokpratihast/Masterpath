import { notFound } from "next/navigation";

import { BlogService } from "@/services/blogs.service";
import BlogDetail from "@/components/blog/BlogDetail";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const blog = await BlogService.getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.seoTitle || blog.title,

    description:
      blog.seoDescription ||
      blog.excerpt ||
      undefined,

    alternates: {
      canonical: blog.canonicalUrl,
    },

    openGraph: {
      title: blog.seoTitle || blog.title,

      description:
        blog.seoDescription ||
        blog.excerpt ||
        undefined,

      images: blog.ogImage
        ? [blog.ogImage]
        : blog.featuredImage
          ? [blog.featuredImage]
          : [],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const blog =
    await BlogService.getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <BlogDetail
      blog={blog}
    />
  );
}