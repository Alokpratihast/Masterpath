import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Sparkles,
} from "lucide-react";

type BlogFeaturedProps = {
  blog: {
    id: string;
    title: string;
    slug: string;
    excerpt?: string | null;
    featuredImage?: string | null;
    featuredImageAlt?: string | null;
    publishedAt?: Date | string | null;

    category?: {
      id: string;
      name: string;
      slug: string;
    } | null;
  };
};

export default function BlogFeatured({
  blog,
}: BlogFeaturedProps) {
  const publishedDate = blog.publishedAt
    ? new Date(blog.publishedAt).toLocaleDateString(
        "en-IN",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      )
    : null;

  return (
    <section className="group relative overflow-hidden rounded-3xl border border-border/60 bg-[#071B3A] text-white shadow-xl">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-500/15 blur-[100px]" />

        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[110px]" />

        <div
          className="
            absolute inset-0
            opacity-[0.05]
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:48px_48px]
          "
        />
      </div>

      {/* Corner accents */}
      <span className="absolute left-0 top-0 z-20 h-6 w-6 border-l border-t border-blue-300/50" />

      <span className="absolute right-0 top-0 z-20 h-6 w-6 border-r border-t border-blue-300/50" />

      <span className="absolute bottom-0 left-0 z-20 h-6 w-6 border-b border-l border-blue-300/50" />

      <span className="absolute bottom-0 right-0 z-20 h-6 w-6 border-b border-r border-blue-300/50" />

      <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
        {/* Image */}
        <Link
          href={`/blogs/${blog.slug}`}
          className="relative block min-h-[280px] overflow-hidden lg:min-h-[470px]"
        >
          {blog.featuredImage ? (
            <>
              <Image
                src={blog.featuredImage}
                alt={
                  blog.featuredImageAlt ||
                  blog.title
                }
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A]/80 via-transparent to-transparent" />

              {/* Featured badge */}
              <div className="absolute left-6 top-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-blue-300" />

                  Featured Article
                </div>
              </div>
            </>
          ) : (
            <div className="flex h-full min-h-[280px] items-center justify-center bg-gradient-to-br from-blue-950 to-[#071B3A] text-sm text-blue-200/60">
              No image
            </div>
          )}
        </Link>

        {/* Content */}
        <div className="relative flex flex-col justify-center p-7 sm:p-9 lg:p-12">
          {/* Category */}
          {blog.category && (
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                {blog.category.name}
              </span>
            </div>
          )}

          {/* Title */}
          <h2 className="max-w-xl text-3xl font-bold leading-[1.12] tracking-[-0.025em] text-white sm:text-4xl lg:text-[2.65rem]">
            {blog.title}
          </h2>

          {/* Excerpt */}
          {blog.excerpt && (
            <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100/70 sm:text-base">
              {blog.excerpt}
            </p>
          )}

          {/* Meta */}
          {publishedDate && (
            <div className="mt-6 flex items-center gap-2 text-xs text-blue-200/60">
              <CalendarDays className="h-4 w-4" />

              <span>{publishedDate}</span>
            </div>
          )}

          {/* CTA */}
          <div className="mt-8">
            <Link
              href={`/blogs/${blog.slug}`}
              className="
                group/button
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-white
                px-5
                py-3
                text-sm
                font-semibold
                text-[#071B3A]
                shadow-lg
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-blue-50
                hover:shadow-xl
              "
            >
              Read Featured Article

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-200
                  group-hover/button:translate-x-1
                "
              />
            </Link>
          </div>

          {/* Bottom decorative line */}
          <div className="mt-10 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

            <span className="h-px flex-1 bg-white/10" />

            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/30">
              MasterPath Journal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}