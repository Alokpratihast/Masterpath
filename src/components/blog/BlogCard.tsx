import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

type BlogCategory = {
  id: string;
  name: string;
  slug: string;
};

type BlogTag = {
  id: string;
  name: string;
  slug: string;
};

type BlogAuthor = {
  id: string;
  fullName: string;
};

type BlogCardData = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  featuredImage?: string | null;
  featuredImageAlt?: string | null;
  publishedAt?: Date | string | null;
  category?: BlogCategory | null;
  tags?: BlogTag[];
  author?: BlogAuthor | null;
};

type BlogCardProps = {
  blog: BlogCardData;
};

export default function BlogCard({
  blog,
}: BlogCardProps) {
  const publishedDate = blog.publishedAt
    ? new Date(
        blog.publishedAt
      ).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-border/60
        bg-background
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-xl
      "
    >
      {/* Image */}
      <Link
        href={`/blogs/${blog.slug}`}
        className="block"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {blog.featuredImage ? (
            <>
              <Image
                src={blog.featuredImage}
                alt={
                  blog.featuredImageAlt ||
                  blog.title
                }
                fill
                sizes="
                  (max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw
                "
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />
            </>
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-muted text-sm text-muted-foreground">
              No image
            </div>
          )}

          {/* Category */}
          {blog.category && (
            <div className="absolute left-4 top-4">
              <span className="inline-flex rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                {blog.category.name}
              </span>
            </div>
          )}

          {/* Arrow */}
          <div
            className="
              absolute
              bottom-4
              right-4
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#071B3A]
              opacity-0
              shadow-lg
              transition-all
              duration-300
              group-hover:opacity-100
            "
          >
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Meta */}
        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
          {publishedDate && (
            <>
              <CalendarDays className="h-3.5 w-3.5" />
              <span>{publishedDate}</span>
            </>
          )}

          {publishedDate && blog.author && (
            <span className="text-border">
              /
            </span>
          )}

          {blog.author && (
            <span className="truncate">
              {blog.author.fullName}
            </span>
          )}
        </div>

        {/* Title */}
        <h2
          className="
            mt-4
            line-clamp-2
            text-xl
            font-bold
            leading-snug
            tracking-[-0.02em]
            text-foreground
            sm:text-[1.35rem]
          "
        >
          <Link
            href={`/blogs/${blog.slug}`}
            className="transition-colors hover:text-primary"
          >
            {blog.title}
          </Link>
        </h2>

        {/* Excerpt */}
        {blog.excerpt && (
          <p
            className="
              mt-3
              line-clamp-3
              text-sm
              leading-6
              text-muted-foreground
            "
          >
            {blog.excerpt}
          </p>
        )}

        {/* Tags */}
        {blog.tags &&
          blog.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {blog.tags
                .slice(0, 3)
                .map((tag) => (
                  <span
                    key={tag.id}
                    className="
                      rounded-full
                      bg-primary/5
                      px-2.5
                      py-1
                      text-[11px]
                      font-medium
                      text-primary
                    "
                  >
                    #{tag.name}
                  </span>
                ))}
            </div>
          )}

        {/* CTA */}
        <div className="mt-6 border-t border-border/60 pt-5">
          <Link
            href={`/blogs/${blog.slug}`}
            className="
              group/read
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-foreground
              transition-colors
              hover:text-primary
            "
          >
            Read Article

            <ArrowUpRight
              className="
                h-4
                w-4
                transition-transform
                duration-200
                group-hover/read:-translate-y-0.5
                group-hover/read:translate-x-0.5
              "
            />
          </Link>
        </div>
      </div>
    </article>
  );
}